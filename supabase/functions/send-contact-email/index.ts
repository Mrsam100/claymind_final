/**
 * Send Contact Email Edge Function
 * Handles contact form submissions and sends emails via Gmail + Nodemailer
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';
import {
  generateContactEmailHTML,
  generateConfirmationEmailHTML,
} from './email-templates.ts';

// Import Nodemailer for Deno
import nodemailer from 'npm:nodemailer@6.9.7';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Check rate limiting
 * Max 3 submissions per email address per 15 minutes
 */
async function checkRateLimit(
  email: string,
  supabaseClient: any
): Promise<{ allowed: boolean; message?: string }> {
  const fifteenMinsAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();

  const { data, error } = await supabaseClient
    .from('contact_submissions')
    .select('id')
    .eq('email', email)
    .gte('sent_at', fifteenMinsAgo);

  if (error) {
    console.error('Rate limit check error:', error);
    return { allowed: true }; // Fail open
  }

  const submissionCount = data?.length || 0;

  if (submissionCount >= 3) {
    return {
      allowed: false,
      message: 'Too many submissions. Please wait 15 minutes before trying again.',
    };
  }

  return { allowed: true };
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Main Edge Function handler
 */
serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ success: false, error: 'Method not allowed' }),
        {
          status: 405,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Parse request body
    const { name, email, subject, message }: ContactFormData = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields. Please fill in all fields.',
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid email address format.',
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate field lengths
    if (name.length < 2 || name.length > 100) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Name must be between 2 and 100 characters.',
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Message must be between 10 and 2000 characters.',
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Initialize Supabase client with service role
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Check rate limiting
    const rateLimitResult = await checkRateLimit(email, supabaseClient);
    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: rateLimitResult.message,
        }),
        {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Configure Nodemailer transporter with Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: Deno.env.get('GMAIL_USER'),
        pass: Deno.env.get('GMAIL_APP_PASSWORD'),
      },
    });

    // Generate HTML email content
    const adminEmailHTML = generateContactEmailHTML({
      name,
      email,
      subject,
      message,
    });
    const userConfirmationHTML = generateConfirmationEmailHTML(name);

    // Send email to admin
    const adminMailOptions = {
      from: `"${name}" <${Deno.env.get('GMAIL_USER')}>`,
      replyTo: email,
      to: Deno.env.get('GMAIL_USER'), // Send to yourself
      subject: `[ClayMind Contact] ${subject}`,
      html: adminEmailHTML,
      text: `
Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    };

    await transporter.sendMail(adminMailOptions);

    // Send confirmation email to user
    const userMailOptions = {
      from: `"ClayMind" <${Deno.env.get('GMAIL_USER')}>`,
      to: email,
      subject: 'We received your message - ClayMind',
      html: userConfirmationHTML,
      text: `Hi ${name},\n\nThanks for reaching out! We received your message and will get back to you soon.\n\nHappy learning!\nThe ClayMind Team`,
    };

    await transporter.sendMail(userMailOptions);

    // Log submission to database
    const { error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert({
        name,
        email,
        subject,
        message,
        status: 'sent',
        sent_at: new Date().toISOString(),
      });

    if (dbError) {
      console.error('Database insert error:', dbError);
      // Don't fail the request if DB logging fails
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message:
          'Your message has been sent successfully! We will get back to you soon.',
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error:
          'Failed to send message. Please try again later or email us directly.',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

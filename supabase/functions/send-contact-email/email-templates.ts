/**
 * Email Templates for Contact Form
 * Kid-friendly, professional HTML email templates
 */

interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Admin Notification Email
 * Sent to sukhjeetkhalsa1111@gmail.com when contact form is submitted
 */
export function generateContactEmailHTML(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      color: white;
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
    }
    .info-box {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
    .info-row {
      margin: 10px 0;
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: 600;
      color: #6b7280;
      display: inline-block;
      min-width: 80px;
    }
    .value {
      color: #111827;
    }
    .message-box {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 15px 20px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .message-box strong {
      color: #92400e;
      display: block;
      margin-bottom: 10px;
    }
    .footer {
      background: #f9fafb;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
    }
    a {
      color: #9333ea;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎨 New Contact Form Submission</h1>
    </div>

    <div class="content">
      <p style="font-size: 16px; margin-bottom: 20px;">
        You have received a new message from the ClayMind contact form.
      </p>

      <div class="info-box">
        <div class="info-row">
          <span class="label">Name:</span>
          <span class="value">${escapeHtml(data.name)}</span>
        </div>
        <div class="info-row">
          <span class="label">Email:</span>
          <span class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></span>
        </div>
        <div class="info-row">
          <span class="label">Subject:</span>
          <span class="value">${escapeHtml(data.subject)}</span>
        </div>
      </div>

      <div class="message-box">
        <strong>Message:</strong>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
      </div>

      <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
        💡 <strong>Tip:</strong> Reply directly to this email to respond to ${escapeHtml(data.name)}.
      </p>
    </div>

    <div class="footer">
      <p>ClayMind Contact Form<br>
      Received at ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * User Confirmation Email
 * Sent to user after they submit the contact form
 */
export function generateConfirmationEmailHTML(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f0f9ff;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
      padding: 40px 20px;
      text-align: center;
    }
    .header h1 {
      color: white;
      margin: 0;
      font-size: 28px;
    }
    .content {
      padding: 40px 30px;
    }
    .icon {
      font-size: 60px;
      text-align: center;
      margin: 20px 0;
    }
    h2 {
      color: #9333ea;
      font-size: 24px;
      margin-top: 0;
    }
    p {
      margin: 15px 0;
      font-size: 16px;
      line-height: 1.7;
    }
    .highlight-box {
      background: #f0f9ff;
      border-left: 4px solid #3b82f6;
      padding: 15px 20px;
      margin: 25px 0;
      border-radius: 4px;
    }
    .footer {
      background: #f9fafb;
      padding: 20px;
      text-align: center;
      font-size: 13px;
      color: #6b7280;
    }
    .footer a {
      color: #9333ea;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎨 ClayMind</h1>
    </div>

    <div class="content">
      <div class="icon">✉️</div>

      <h2>Thanks for reaching out, ${escapeHtml(name)}!</h2>

      <p>
        We received your message and appreciate you taking the time to contact us.
      </p>

      <div class="highlight-box">
        <p style="margin: 0;">
          <strong>⏱️ Response Time:</strong> Our team will review your message and get back to you as soon as possible - usually within 24 hours!
        </p>
      </div>

      <p>
        In the meantime, feel free to explore more about AI and creativity on ClayMind.
        We have lots of exciting lessons and fun AI projects waiting for you!
      </p>

      <p style="margin-top: 40px; font-size: 18px;">
        Happy learning! 🚀<br>
        <strong>The ClayMind Team</strong>
      </p>
    </div>

    <div class="footer">
      <p>
        Questions? Visit our <a href="https://claymind.com/help">Help Center</a><br>
        ClayMind - AI Learning for Kids
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Escape HTML to prevent XSS attacks
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

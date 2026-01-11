/**
 * Supabase Client Configuration
 * Singleton client for interacting with Supabase
 */

import { createClient } from '@supabase/supabase-js';
import type { Database } from './types/database';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check for environment variables with helpful error messages
if (!supabaseUrl || !supabaseAnonKey) {
  const isDev = import.meta.env.DEV;
  const errorMessage = isDev
    ? '❌ Missing Supabase environment variables!\n\n' +
      'For DEVELOPMENT:\n' +
      '1. Create a .env.local file in the project root\n' +
      '2. Add these variables:\n' +
      '   VITE_SUPABASE_URL=your_url_here\n' +
      '   VITE_SUPABASE_ANON_KEY=your_key_here\n' +
      '3. Restart the dev server\n\n' +
      'OR use Test Login (no Supabase needed)!'
    : '❌ Missing Supabase environment variables!\n\n' +
      'For PRODUCTION/DEPLOYMENT:\n' +
      '1. Set environment variables in your hosting platform:\n' +
      '   - Vercel: Project Settings → Environment Variables\n' +
      '   - Netlify: Site Settings → Environment Variables\n' +
      '   - Other: Check your platform documentation\n\n' +
      '2. Add these variables:\n' +
      '   VITE_SUPABASE_URL=your_url_here\n' +
      '   VITE_SUPABASE_ANON_KEY=your_key_here\n\n' +
      '3. Redeploy your app';

  console.error(errorMessage);
  throw new Error('Missing Supabase environment variables. Check console for details.');
}

// Create Supabase client
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
  },
});

// Helper function to get current user
export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

// Helper function to get user profile
export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
};

// Helper function to get user progress
export const getUserProgress = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data;
};

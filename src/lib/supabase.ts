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

// Create Supabase client with optimized settings
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
  },
  global: {
    headers: {
      'x-application-name': 'claymind-app',
    },
  },
  db: {
    schema: 'public',
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
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
  console.log('[Supabase] getUserProfile called for:', userId);

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('[Supabase] getUserProfile error:', error);
    throw error;
  }

  console.log('[Supabase] getUserProfile success:', data?.email);
  return data;
};

// Helper function to get user progress (with auto-create if missing)
export const getUserProgress = async (userId: string) => {
  console.log('[Supabase] getUserProgress called for:', userId);

  // First try to get existing progress
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .single();

  // If it doesn't exist (PGRST116 = no rows returned), create it
  if (error?.code === 'PGRST116') {
    console.log('[Supabase] user_progress not found, creating...');

    const { data: newProgress, error: insertError } = await supabase
      .from('user_progress')
      .insert({
        user_id: userId,
        current_level: 1,
        current_xp: 0,
        total_xp_earned: 0,
        current_streak_days: 0,
        longest_streak_days: 0,
        total_lessons_completed: 0,
        total_modules_completed: 0,
        total_time_spent_minutes: 0,
        total_ai_creations: 0
      })
      .select()
      .single();

    if (insertError) {
      console.error('[Supabase] Failed to create user_progress:', insertError);
      throw insertError;
    }

    console.log('[Supabase] user_progress created successfully');
    return newProgress;
  }

  // If there's a different error, throw it
  if (error) {
    console.error('[Supabase] getUserProgress error:', error);
    throw error;
  }

  console.log('[Supabase] getUserProgress success');
  return data;
};

// Helper function to get all modules
export const getModules = async () => {
  const { data, error } = await supabase
    .from('modules')
    .select('*')
    .eq('is_published', true)
    .order('display_order', { ascending: true });

  if (error) throw error;
  return data;
};

// Helper function to get module detail with lessons
export const getModuleDetail = async (moduleId: string) => {
  // Get module info
  const { data: moduleData, error: moduleError } = await supabase
    .from('modules')
    .select('*')
    .eq('id', moduleId)
    .single();

  if (moduleError) throw moduleError;

  // Get lessons for this module
  const { data: lessonsData, error: lessonsError } = await supabase
    .from('lessons')
    .select('*')
    .eq('module_id', moduleId)
    .order('lesson_number', { ascending: true });

  if (lessonsError) throw lessonsError;

  return {
    module: moduleData,
    lessons: lessonsData || [],
  };
};

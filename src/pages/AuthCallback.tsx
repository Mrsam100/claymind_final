/**
 * Auth Callback Handler
 * Handles email verification callback with UX for all states:
 * - Success (verified)
 * - Already verified
 * - Expired link
 * - Invalid link
 */

import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { getDefaultRouteForRole } from '../lib/utils/rbac';

type CallbackState = 'loading' | 'success' | 'already_verified' | 'expired' | 'error';

export function AuthCallback() {
  const [state, setState] = useState<CallbackState>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    handleCallback();
  }, []);

  async function handleCallback() {
    try {
      console.log('[AuthCallback] Starting callback handler...');

      // Check if there's already a session (OAuth might have set it automatically)
      const { data: { session: existingSession } } = await supabase.auth.getSession();
      console.log('[AuthCallback] Existing session check:', !!existingSession);

      // Get the token hash from URL
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get('access_token');
      const refreshToken = hashParams.get('refresh_token');
      const type = searchParams.get('type');
      const errorCode = searchParams.get('error');
      const errorDescription = searchParams.get('error_description');

      console.log('[AuthCallback] Processing callback:', {
        hasAccessToken: !!accessToken,
        hasRefreshToken: !!refreshToken,
        hasExistingSession: !!existingSession,
        type,
        errorCode,
        fullHash: window.location.hash,
        fullSearch: window.location.search
      });

      // Handle error in URL (expired link, etc.)
      if (errorCode) {
        console.error('[AuthCallback] Error code detected:', errorCode, errorDescription);
        if (errorDescription?.includes('expired')) {
          setState('expired');
        } else {
          setState('error');
          setErrorMessage(errorDescription || 'Verification failed');
        }
        return;
      }

      // If there's already a session but no tokens in URL, handle it directly
      if (existingSession && !accessToken && !refreshToken && !type) {
        console.log('[AuthCallback] Session already exists, processing directly...');

        const { data: profile } = await supabase
          .from('profiles')
          .select('email_verified_at, onboarding_completed_at, role')
          .eq('id', existingSession.user.id)
          .single();

        console.log('[AuthCallback] Profile loaded:', {
          role: profile?.role,
          emailVerified: !!profile?.email_verified_at,
          onboardingCompleted: !!profile?.onboarding_completed_at
        });

        // Update profile if needed for OAuth users
        const updates: any = {};
        const now = new Date().toISOString();

        if (!profile?.email_verified_at) {
          updates.email_verified_at = now;
        }
        if (!profile?.onboarding_completed_at) {
          updates.onboarding_completed_at = now;
        }

        if (Object.keys(updates).length > 0) {
          console.log('[AuthCallback] Updating profile with:', updates);
          await supabase
            .from('profiles')
            .update(updates)
            .eq('id', existingSession.user.id);
        }

        setState('success');

        // Wait longer to ensure AuthContext has time to process the session
        console.log('[AuthCallback] Waiting for AuthContext to sync...');
        await new Promise(resolve => setTimeout(resolve, 3000));

        const redirectPath = getDefaultRouteForRole({ role: profile?.role || 'student' } as any);
        console.log('[AuthCallback] Redirecting to:', redirectPath);
        window.location.href = redirectPath;
        return;
      }

      // Handle OAuth callback (Google, etc.)
      if (accessToken && refreshToken) {
        console.log('[AuthCallback] OAuth tokens detected, exchanging for session...');

        // Exchange tokens for session
        const { data: { session }, error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (sessionError) {
          console.error('[AuthCallback] Session exchange error:', sessionError);
          setState('error');
          setErrorMessage(sessionError.message);
          return;
        }

        console.log('[AuthCallback] Session exchange successful');

        if (session?.user) {
          console.log('[AuthCallback] Session established for user:', session.user.email);

          // Check if profile exists and get info
          const { data: profile } = await supabase
            .from('profiles')
            .select('email_verified_at, onboarding_completed_at, role')
            .eq('id', session.user.id)
            .single();

          console.log('[AuthCallback] Profile status:', {
            hasProfile: !!profile,
            emailVerified: !!profile?.email_verified_at,
            onboardingCompleted: !!profile?.onboarding_completed_at,
            role: profile?.role
          });

          // For OAuth users, auto-verify email AND complete onboarding
          const updates: any = {};
          const now = new Date().toISOString();

          if (!profile?.email_verified_at) {
            updates.email_verified_at = now;
          }

          // Auto-complete onboarding for OAuth users (they've already verified via Google)
          if (!profile?.onboarding_completed_at) {
            updates.onboarding_completed_at = now;
          }

          // Update profile if needed
          if (Object.keys(updates).length > 0) {
            console.log('[AuthCallback] Updating profile with:', updates);
            const { error: updateError } = await supabase
              .from('profiles')
              .update(updates)
              .eq('id', session.user.id);

            if (updateError) {
              console.error('[AuthCallback] Profile update error:', updateError);
            } else {
              console.log('[AuthCallback] Profile updated successfully');
            }
          }

          setState('success');

          // Force a refresh of the auth state to pick up the updated profile
          console.log('[AuthCallback] Triggering auth state refresh...');
          const { data: refreshData } = await supabase.auth.refreshSession();
          console.log('[AuthCallback] Session refreshed:', !!refreshData.session);

          // Wait longer for auth state to fully sync across the app
          console.log('[AuthCallback] Waiting for AuthContext to sync...');
          await new Promise(resolve => setTimeout(resolve, 3000));

          // Redirect to dashboard using window.location for guaranteed redirect
          const redirectPath = getDefaultRouteForRole({ role: profile?.role || 'student' } as any);
          console.log('[AuthCallback] FINAL REDIRECT to:', redirectPath);

          // Use window.location.href for absolute guaranteed redirect
          window.location.href = redirectPath;
        } else {
          setState('error');
          setErrorMessage('No session found. Please try logging in.');
        }
        return;
      }

      // If this is an email verification callback
      if (type === 'signup') {
        console.log('[AuthCallback] Email verification callback detected');
        // Let Supabase handle the session
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          setState('error');
          setErrorMessage(error.message);
          return;
        }

        if (session?.user) {
          // Check if email was already verified
          const { data: profile } = await supabase
            .from('profiles')
            .select('email_verified_at, onboarding_completed_at, role')
            .eq('id', session.user.id)
            .single();

          if (profile?.email_verified_at) {
            setState('already_verified');
            // Check if onboarding is completed, redirect accordingly
            const redirectPath = profile.onboarding_completed_at
              ? getDefaultRouteForRole({ role: profile.role } as any)
              : '/onboarding?step=1';
            setTimeout(() => navigate(redirectPath), 2000);
          } else {
            // Update email_verified_at in profiles
            await supabase
              .from('profiles')
              .update({ email_verified_at: new Date().toISOString() })
              .eq('id', session.user.id);

            setState('success');
            // First-time verification always goes to onboarding
            setTimeout(() => navigate('/onboarding?step=1'), 2000);
          }
        } else {
          setState('error');
          setErrorMessage('No session found. Please try logging in.');
        }
        return;
      }

      // No valid callback type detected
      console.error('[AuthCallback] No valid callback detected. No tokens, no type.');
      setState('error');
      setErrorMessage('Invalid verification link.');
    } catch (error) {
      console.error('[AuthCallback] Exception in handleCallback:', error);
      setState('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  }

  function handleResendVerification() {
    navigate('/verify-email');
  }

  function handleGoToLogin() {
    navigate('/login');
  }

  // Loading state
  if (state === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-purple-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Verifying your email...</h2>
          <p className="text-gray-600 mt-2">Please wait a moment</p>
        </div>
      </div>
    );
  }

  // Success state
  if (state === 'success') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to ClayMind!
            </h1>
            <p className="text-gray-600 mb-6">
              Your account is ready. Taking you to your dashboard...
            </p>

            <div className="flex items-center justify-center space-x-2 text-sm text-purple-600">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Redirecting to dashboard...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Already verified state
  if (state === 'already_verified') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            {/* Info Icon */}
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Already Verified
            </h1>
            <p className="text-gray-600 mb-6">
              Your email was already verified. You're all set!
            </p>

            <div className="flex items-center justify-center space-x-2 text-sm text-purple-600">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Redirecting to dashboard...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Expired link state
  if (state === 'expired') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            {/* Warning Icon */}
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Link Expired
            </h1>
            <p className="text-gray-600 mb-6">
              This verification link has expired. Verification links are valid for 24 hours.
            </p>

            <button
              onClick={handleResendVerification}
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-medium
                       hover:bg-purple-700 transition-colors duration-200 mb-3"
            >
              Request New Verification Email
            </button>

            <button
              onClick={handleGoToLogin}
              className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium
                       hover:bg-gray-200 transition-colors duration-200"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Verification Failed
          </h1>
          <p className="text-gray-600 mb-2">
            Something went wrong during email verification.
          </p>
          {errorMessage && (
            <p className="text-sm text-red-600 mb-6 p-3 bg-red-50 rounded-lg">
              {errorMessage}
            </p>
          )}

          <button
            onClick={handleResendVerification}
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-medium
                     hover:bg-purple-700 transition-colors duration-200 mb-3"
          >
            Request New Verification Email
          </button>

          <button
            onClick={handleGoToLogin}
            className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium
                     hover:bg-gray-200 transition-colors duration-200"
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
}

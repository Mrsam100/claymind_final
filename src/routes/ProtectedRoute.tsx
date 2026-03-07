/**
 * ProtectedRoute Component
 * Wrapper component to protect routes that require authentication,
 * email verification, and onboarding completion
 */

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Loader } from '../app/components/Loader';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireEmailVerified?: boolean;
  requireOnboarding?: boolean; // default: true
}

export function ProtectedRoute({
  children,
  requireEmailVerified = false,
  requireOnboarding = true
}: ProtectedRouteProps) {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  console.log('[ProtectedRoute] Check:', {
    path: location.pathname,
    loading,
    isAuthenticated,
    hasUser: !!user,
    emailVerified: !!user?.emailVerifiedAt,
    onboardingCompleted: !!user?.onboardingCompletedAt,
    requireOnboarding
  });

  // Show loader while checking authentication
  if (loading) {
    return <Loader fullScreen message="Loading..." />;
  }

  // Redirect to login if not authenticated, preserving the attempted URL
  if (!isAuthenticated) {
    console.log('[ProtectedRoute] Not authenticated, redirecting to /auth');
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Email verification check
  if (requireEmailVerified && !user?.emailVerifiedAt) {
    console.log('[ProtectedRoute] Email not verified, redirecting to /verify-email');
    return <Navigate to="/verify-email" replace />;
  }

  // Onboarding check (skip if on onboarding page itself)
  if (requireOnboarding && !user?.onboardingCompletedAt && location.pathname !== '/onboarding') {
    console.log('[ProtectedRoute] Onboarding not completed, redirecting to /onboarding');
    return <Navigate to="/onboarding?step=1" replace />;
  }

  console.log('[ProtectedRoute] All checks passed, rendering protected content');
  return <>{children}</>;
}


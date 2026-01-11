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

  // Show loader while checking authentication
  if (loading) {
    return <Loader fullScreen message="Loading..." />;
  }

  // Redirect to login if not authenticated, preserving the attempted URL
  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Email verification check
  if (requireEmailVerified && !user?.emailVerifiedAt) {
    return <Navigate to="/verify-email" replace />;
  }

  // Onboarding check (skip if on onboarding page itself)
  if (requireOnboarding && !user?.onboardingCompletedAt && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding?step=1" replace />;
  }

  return <>{children}</>;
}


/**
 * Authentication Context
 * Provides authentication state and methods throughout the application
 */

import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { authService } from '../lib/services/auth.service';
import { errorLoggingService } from '../lib/services/error-logging.service';
import { supabase } from '../lib/supabase';
import type { User, LoginRequest, SignupRequest } from '../lib/types/api';

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  signup: (data: SignupRequest) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  testLogin: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * Check authentication status on mount
   */
  const checkAuth = useCallback(async () => {
    try {
      setLoading(true);

      // First check for test user in localStorage (development only)
      if (import.meta.env.DEV) {
        const testUserData = localStorage.getItem('clayrock_test_user');
        if (testUserData) {
          const testUser = JSON.parse(testUserData) as User;
          setUser(testUser);
          errorLoggingService.setUser({ id: testUser.id, email: testUser.email });
          setLoading(false);
          return;
        }
      }

      // Otherwise, check with auth service
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      if (currentUser) {
        errorLoggingService.setUser({ id: currentUser.id, email: currentUser.email });
      }
    } catch (error) {
      errorLoggingService.logAuthError(error instanceof Error ? error : new Error(String(error)), 'checkAuth');
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Login user
   */
  const login = useCallback(async (credentials: LoginRequest) => {
    try {
      setLoading(true);
      const result = await authService.login(credentials);

      if (!result.success || !result.user) {
        throw new Error(result.error || 'Login failed');
      }

      setUser(result.user);
      errorLoggingService.setUser({ id: result.user.id, email: result.user.email });
    } catch (error) {
      errorLoggingService.logAuthError(error instanceof Error ? error : new Error(String(error)), 'login');
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Signup new user
   */
  const signup = useCallback(async (data: SignupRequest) => {
    try {
      setLoading(true);
      const result = await authService.signup(data);

      if (!result.success || !result.user) {
        throw new Error(result.error || 'Signup failed');
      }

      setUser(result.user);
      errorLoggingService.setUser({ id: result.user.id, email: result.user.email });
    } catch (error) {
      errorLoggingService.logAuthError(error instanceof Error ? error : new Error(String(error)), 'signup');
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Sign in with Google (OAuth redirect)
   */
  const signInWithGoogle = useCallback(async () => {
    try {
      setLoading(true);
      const result = await authService.signInWithGoogle();

      if (!result.success) {
        throw new Error(result.error || 'Google Sign In failed');
      }

      // Note: OAuth redirects, so user will be set after callback
    } catch (error) {
      errorLoggingService.logAuthError(error instanceof Error ? error : new Error(String(error)), 'signInWithGoogle');
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Logout user
   */
  const logout = useCallback(async () => {
    try {
      setLoading(true);

      // Clear test user if present
      localStorage.removeItem('clayrock_test_user');

      await authService.logout();
      setUser(null);
      errorLoggingService.clearUser();
    } catch (error) {
      errorLoggingService.logAuthError(error instanceof Error ? error : new Error(String(error)), 'logout');
      setUser(null);
      errorLoggingService.clearUser();
      // Make sure to clear test user even on error
      localStorage.removeItem('clayrock_test_user');
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Test Login (Development Only)
   * Creates a mock user without Supabase authentication
   */
  const testLogin = useCallback(async () => {
    try {
      setLoading(true);

      // Create mock user object with all required fields
      const now = new Date().toISOString();
      const mockUser: User = {
        id: 'test-user-' + Date.now(),
        email: 'test@clayrock.com',
        firstName: 'Test',
        lastName: 'User',
        displayName: 'Test User',
        username: 'testuser',
        role: 'student',
        level: 1,
        age: 10,
        avatarUrl: undefined,
        accountStatus: 'active',
        emailVerifiedAt: now,
        onboardingCompletedAt: now,
        joinedDate: now,
        bio: 'Test user for development',
      };

      // Store in localStorage for persistence
      localStorage.setItem('clayrock_test_user', JSON.stringify(mockUser));

      setUser(mockUser);
      errorLoggingService.setUser({ id: mockUser.id, email: mockUser.email });

      errorLoggingService.addBreadcrumb({
        category: 'auth',
        message: 'Test login successful',
        level: 'info',
        data: { userId: mockUser.id },
      });
    } catch (error) {
      errorLoggingService.logAuthError(error instanceof Error ? error : new Error(String(error)), 'testLogin');
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  // Check auth on mount and subscribe to auth state changes
  useEffect(() => {
    checkAuth();

    // Listen for auth state changes (session refresh, logout from another tab, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
        if (currentUser) {
          errorLoggingService.setUser({ id: currentUser.id, email: currentUser.email });
        }
      } else {
        setUser(null);
        errorLoggingService.clearUser();
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [checkAuth]);

  const value: AuthContextType = {
    user,
    loading,
    isAuthenticated: user !== null,
    login,
    signup,
    signInWithGoogle,
    logout,
    checkAuth,
    testLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };


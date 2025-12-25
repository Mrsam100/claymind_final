/**
 * Authentication Service
 * Handles user authentication with validation and user database management
 */

import { storageService } from './storage.service';
import { errorLoggingService } from './error-logging.service';
import type { User } from '../types/api';

// Storage key for user database
const USER_DB_KEY = 'claymind_users_db';

export interface SignupData {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  age?: number;
  parentEmail?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  user?: User;
  error?: string;
  accessToken?: string;
  refreshToken?: string;
}

interface UserRecord {
  password: string;
  user: User;
}

export class AuthService {
  /**
   * Get all users from database
   */
  private getUsers(): Record<string, UserRecord> {
    const data = localStorage.getItem(USER_DB_KEY);
    return data ? JSON.parse(data) : {};
  }

  /**
   * Save users to database
   */
  private saveUsers(users: Record<string, UserRecord>): void {
    localStorage.setItem(USER_DB_KEY, JSON.stringify(users));
  }

  /**
   * Validate email format
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate password strength
   */
  private isValidPassword(password: string): { valid: boolean; error?: string } {
    if (password.length < 8) {
      return { valid: false, error: 'Password must be at least 8 characters' };
    }
    if (!/[a-z]/.test(password)) {
      return { valid: false, error: 'Password must contain at least one lowercase letter' };
    }
    if (!/[A-Z]/.test(password)) {
      return { valid: false, error: 'Password must contain at least one uppercase letter' };
    }
    if (!/\d/.test(password)) {
      return { valid: false, error: 'Password must contain at least one number' };
    }
    return { valid: true };
  }

  /**
   * Simple password hashing
   */
  private hashPassword(password: string): string {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash.toString(36);
  }

  /**
   * Generate auth tokens
   */
  private generateTokens(): { accessToken: string; refreshToken: string } {
    const accessToken = `access_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    const refreshToken = `refresh_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    return { accessToken, refreshToken };
  }

  /**
   * Signup new user
   */
  async signup(data: SignupData): Promise<AuthResult> {
    try {
      // Validate email
      if (!this.isValidEmail(data.email)) {
        return { success: false, error: 'Invalid email format' };
      }

      // Validate password
      const passwordValidation = this.isValidPassword(data.password);
      if (!passwordValidation.valid) {
        return { success: false, error: passwordValidation.error };
      }

      // Validate age if provided
      if (data.age !== undefined && (data.age < 8 || data.age > 16)) {
        return { success: false, error: 'Age must be between 8 and 16' };
      }

      // Check if user already exists
      const users = this.getUsers();
      if (users[data.email]) {
        return { success: false, error: 'Email already registered' };
      }

      // Create new user starting at level 1, 0 XP
      const user: User = {
        id: `user_${Date.now()}_${Math.random().toString(36).substring(2)}`,
        firstName: data.firstName,
        email: data.email,
        age: data.age,
        level: 1,
        avatarUrl: `/avatars/default-${(data.age || 1) % 5 + 1}.png`,
        accountStatus: 'active',
        username: `${data.firstName}_${Math.floor(Math.random() * 10000)}`,
        displayName: data.firstName,
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      };

      // Save user to database
      users[data.email] = {
        password: this.hashPassword(data.password),
        user,
      };
      this.saveUsers(users);

      // Save user to storage and initialize progress at zero
      storageService.saveUser(user);
      storageService.initializeProgress();

      // Generate tokens
      const tokens = this.generateTokens();

      errorLoggingService.addBreadcrumb({
        category: 'auth',
        message: 'User signup successful',
        level: 'info',
        data: { email: data.email },
      });

      return {
        success: true,
        user,
        ...tokens,
      };
    } catch (error) {
      errorLoggingService.logError(
        error instanceof Error ? error : new Error(String(error)),
        {
          component: 'AuthService',
          action: 'signup',
        }
      );
      return {
        success: false,
        error: 'An error occurred during signup. Please try again.',
      };
    }
  }

  /**
   * Login user
   */
  async login(credentials: LoginCredentials): Promise<AuthResult> {
    try {
      // Validate email
      if (!this.isValidEmail(credentials.email)) {
        return { success: false, error: 'Invalid email format' };
      }

      const users = this.getUsers();
      const userRecord = users[credentials.email];

      if (!userRecord) {
        return { success: false, error: 'Invalid email or password' };
      }

      // Verify password
      const hashedPassword = this.hashPassword(credentials.password);
      if (userRecord.password !== hashedPassword) {
        return { success: false, error: 'Invalid email or password' };
      }

      // Save user to storage
      storageService.saveUser(userRecord.user);

      // Generate tokens
      const tokens = this.generateTokens();

      errorLoggingService.addBreadcrumb({
        category: 'auth',
        message: 'User login successful',
        level: 'info',
        data: { email: credentials.email },
      });

      return {
        success: true,
        user: userRecord.user,
        ...tokens,
      };
    } catch (error) {
      errorLoggingService.logError(
        error instanceof Error ? error : new Error(String(error)),
        {
          component: 'AuthService',
          action: 'login',
        }
      );
      return {
        success: false,
        error: 'An error occurred during login. Please try again.',
      };
    }
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      // Clear user data from storage
      storageService.clearAll();

      errorLoggingService.addBreadcrumb({
        category: 'auth',
        message: 'User logout',
        level: 'info',
      });
    } catch (error) {
      errorLoggingService.logError(
        error instanceof Error ? error : new Error(String(error)),
        {
          component: 'AuthService',
          action: 'logout',
        }
      );
    }
  }

  /**
   * Get current user from storage
   */
  getCurrentUser(): User | null {
    return storageService.getUser();
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  /**
   * Get current access token
   */
  getAccessToken(): string | null {
    return localStorage.getItem('claymind_access_token');
  }

  /**
   * Sign in with Google
   */
  async signInWithGoogle(googleCredential: string): Promise<AuthResult> {
    try {
      // Decode Google JWT to get user info
      const base64Url = googleCredential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );

      const googleUser = JSON.parse(jsonPayload);
      const email = googleUser.email;
      const firstName = googleUser.given_name || googleUser.name?.split(' ')[0] || 'User';

      // Check if user exists
      const users = this.getUsers();
      let userRecord = users[email];

      if (userRecord) {
        // Existing user - login
        storageService.saveUser(userRecord.user);
        const tokens = this.generateTokens();

        errorLoggingService.addBreadcrumb({
          category: 'auth',
          message: 'Google Sign In successful (existing user)',
          level: 'info',
          data: { email },
        });

        return {
          success: true,
          user: userRecord.user,
          ...tokens,
        };
      } else {
        // New user - create account
        const user: User = {
          id: `user_${Date.now()}_${Math.random().toString(36).substring(2)}`,
          firstName,
          email,
          level: 1,
          avatarUrl: googleUser.picture || `/avatars/default-1.png`,
          accountStatus: 'active',
          username: `${firstName}_${Math.floor(Math.random() * 10000)}`,
          displayName: firstName,
          joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        };

        // Save user
        users[email] = {
          password: this.hashPassword(googleCredential), // Use Google credential as password hash
          user,
        };
        this.saveUsers(users);

        // Initialize progress
        storageService.saveUser(user);
        storageService.initializeProgress();

        const tokens = this.generateTokens();

        errorLoggingService.addBreadcrumb({
          category: 'auth',
          message: 'Google Sign In successful (new user)',
          level: 'info',
          data: { email },
        });

        return {
          success: true,
          user,
          ...tokens,
        };
      }
    } catch (error) {
      errorLoggingService.logError(
        error instanceof Error ? error : new Error(String(error)),
        {
          component: 'AuthService',
          action: 'signInWithGoogle',
        }
      );
      return {
        success: false,
        error: 'Google Sign In failed. Please try again.',
      };
    }
  }
}

// Export singleton instance
export const authService = new AuthService();

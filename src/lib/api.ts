/**
 * API Client
 * Axios-based API client with interceptors for authentication and error handling
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { config } from './config';
import { errorLoggingService } from './services/error-logging.service';
import { authService } from './services/auth.service';
import { storageService } from './services/storage.service';
import { supabase, getModules as getModulesFromSupabase, getModuleDetail as getModuleDetailFromSupabase } from './supabase';
import type {
  AuthResponse,
  LoginRequest,
  SignupRequest,
  RefreshTokenRequest,
  RefreshTokenResponse,
  User,
  UserProfile,
  UserProgress,
  Module,
  ModuleDetail,
  Project,
  ContactFormData,
  ContactResponse,
  AIGenerateRequest,
  AIGenerateResponse,
  ApiError,
  ApiResponse,
} from './types/api';

// ==================== Fallback Data ====================
// Used when Supabase is unavailable or has no data

const FALLBACK_MODULES: Module[] = [
  { id: 'ai-basics', title: 'AI Basics', description: 'Learn what AI is and how it works', difficulty: 1, lessons: 8, duration: '120 min', color: 'purple', locked: false, progress: 0, totalLessons: 8 },
  { id: 'ml-mini', title: 'Mini Machine Learning', description: 'Train your own AI models', difficulty: 2, lessons: 8, duration: '180 min', color: 'green', locked: false, progress: 0, totalLessons: 8 },
  { id: 'build-app', title: 'Build an App with AI', description: 'Create your first AI-powered application', difficulty: 2, lessons: 12, duration: '240 min', color: 'amber', locked: false, progress: 0, totalLessons: 12 },
  { id: 'prompt-engineering', title: 'Prompt Engineering', description: 'Master the art of talking to AI', difficulty: 2, lessons: 10, duration: '180 min', color: 'pink', locked: false, progress: 0, totalLessons: 10 },
  { id: 'ethics-safety', title: 'Ethics & Safety AI', description: 'Learn to use AI responsibly and safely', difficulty: 2, lessons: 8, duration: '150 min', color: 'blue', locked: false, progress: 0, totalLessons: 8 },
];

const FALLBACK_LESSONS: Record<string, Array<{ id: string; title: string; estimated_duration_minutes: number; is_locked_by_default: boolean }>> = {
  'ai-basics': [
    { id: 'ai-basics-1', title: 'What is AI?', estimated_duration_minutes: 15, is_locked_by_default: false },
    { id: 'ai-basics-2', title: 'How Computers Learn', estimated_duration_minutes: 20, is_locked_by_default: false },
    { id: 'ai-basics-3', title: 'Neural Networks', estimated_duration_minutes: 20, is_locked_by_default: false },
    { id: 'ai-basics-4', title: 'Training an AI', estimated_duration_minutes: 25, is_locked_by_default: true },
    { id: 'ai-basics-5', title: 'AI in Daily Life', estimated_duration_minutes: 15, is_locked_by_default: true },
    { id: 'ai-basics-6', title: 'Image Recognition', estimated_duration_minutes: 20, is_locked_by_default: true },
    { id: 'ai-basics-7', title: 'Natural Language', estimated_duration_minutes: 20, is_locked_by_default: true },
    { id: 'ai-basics-8', title: 'Final Project', estimated_duration_minutes: 30, is_locked_by_default: true },
  ],
  'ml-mini': [
    { id: 'ml-mini-1', title: 'What is Machine Learning?', estimated_duration_minutes: 20, is_locked_by_default: false },
    { id: 'ml-mini-2', title: 'Training Data', estimated_duration_minutes: 25, is_locked_by_default: false },
    { id: 'ml-mini-3', title: 'Your First Model', estimated_duration_minutes: 30, is_locked_by_default: true },
    { id: 'ml-mini-4', title: 'Testing & Accuracy', estimated_duration_minutes: 25, is_locked_by_default: true },
    { id: 'ml-mini-5', title: 'Improving Models', estimated_duration_minutes: 30, is_locked_by_default: true },
    { id: 'ml-mini-6', title: 'Types of Learning', estimated_duration_minutes: 20, is_locked_by_default: true },
    { id: 'ml-mini-7', title: 'Real Projects', estimated_duration_minutes: 35, is_locked_by_default: true },
    { id: 'ml-mini-8', title: 'ML Master Badge', estimated_duration_minutes: 25, is_locked_by_default: true },
  ],
  'build-app': [
    { id: 'build-app-1', title: 'Planning Your App', estimated_duration_minutes: 20, is_locked_by_default: false },
    { id: 'build-app-2', title: 'Setting Up', estimated_duration_minutes: 25, is_locked_by_default: false },
    { id: 'build-app-3', title: 'First AI Call', estimated_duration_minutes: 30, is_locked_by_default: true },
    { id: 'build-app-4', title: 'Building UI', estimated_duration_minutes: 35, is_locked_by_default: true },
    { id: 'build-app-5', title: 'Adding Features', estimated_duration_minutes: 30, is_locked_by_default: true },
    { id: 'build-app-6', title: 'Error Handling', estimated_duration_minutes: 25, is_locked_by_default: true },
    { id: 'build-app-7', title: 'Testing', estimated_duration_minutes: 30, is_locked_by_default: true },
    { id: 'build-app-8', title: 'Polish & Style', estimated_duration_minutes: 25, is_locked_by_default: true },
    { id: 'build-app-9', title: 'Deployment Prep', estimated_duration_minutes: 30, is_locked_by_default: true },
    { id: 'build-app-10', title: 'Going Live', estimated_duration_minutes: 35, is_locked_by_default: true },
    { id: 'build-app-11', title: 'User Feedback', estimated_duration_minutes: 20, is_locked_by_default: true },
    { id: 'build-app-12', title: 'Final Showcase', estimated_duration_minutes: 40, is_locked_by_default: true },
  ],
  'prompt-engineering': [
    { id: 'prompt-eng-1', title: 'What is a Prompt?', estimated_duration_minutes: 15, is_locked_by_default: false },
    { id: 'prompt-eng-2', title: 'Being Clear and Specific', estimated_duration_minutes: 20, is_locked_by_default: false },
    { id: 'prompt-eng-3', title: 'Adding Context', estimated_duration_minutes: 20, is_locked_by_default: false },
    { id: 'prompt-eng-4', title: 'Examples and Patterns', estimated_duration_minutes: 25, is_locked_by_default: true },
    { id: 'prompt-eng-5', title: 'Role Playing', estimated_duration_minutes: 20, is_locked_by_default: true },
    { id: 'prompt-eng-6', title: 'Step-by-Step Thinking', estimated_duration_minutes: 25, is_locked_by_default: true },
    { id: 'prompt-eng-7', title: 'Formatting Outputs', estimated_duration_minutes: 20, is_locked_by_default: true },
    { id: 'prompt-eng-8', title: 'Refining and Iterating', estimated_duration_minutes: 20, is_locked_by_default: true },
    { id: 'prompt-eng-9', title: 'Advanced Techniques', estimated_duration_minutes: 25, is_locked_by_default: true },
    { id: 'prompt-eng-10', title: 'Final Project', estimated_duration_minutes: 30, is_locked_by_default: true },
  ],
  'ethics-safety': [
    { id: 'ethics-1', title: 'What is AI Ethics?', estimated_duration_minutes: 15, is_locked_by_default: false },
    { id: 'ethics-2', title: 'Fairness and Bias', estimated_duration_minutes: 20, is_locked_by_default: false },
    { id: 'ethics-3', title: 'Privacy Matters', estimated_duration_minutes: 20, is_locked_by_default: false },
    { id: 'ethics-4', title: 'AI and Truth', estimated_duration_minutes: 20, is_locked_by_default: true },
    { id: 'ethics-5', title: 'Responsible AI Use', estimated_duration_minutes: 20, is_locked_by_default: true },
    { id: 'ethics-6', title: 'AI and Environment', estimated_duration_minutes: 15, is_locked_by_default: true },
    { id: 'ethics-7', title: 'Future of AI', estimated_duration_minutes: 20, is_locked_by_default: true },
    { id: 'ethics-8', title: 'Be an AI Guardian', estimated_duration_minutes: 20, is_locked_by_default: true },
  ],
};

/** Race a promise against a timeout. Rejects if the timeout fires first. */
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timed out after ${ms}ms`)), ms);
    promise.then(
      (val) => { clearTimeout(timer); resolve(val); },
      (err) => { clearTimeout(timer); reject(err); },
    );
  });
}

class ApiClient {
  private client: AxiosInstance;
  private refreshTokenPromise: Promise<string> | null = null;

  constructor() {
    this.client = axios.create({
      baseURL: config.api.baseUrl,
      timeout: config.api.timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  /**
   * Setup request and response interceptors
   */
  private setupInterceptors(): void {
    // Request interceptor - add auth token and breadcrumb
    this.client.interceptors.request.use(
      (requestConfig) => {
        const token = this.getAccessToken();
        if (token && requestConfig.headers) {
          requestConfig.headers.Authorization = `Bearer ${token}`;
        }

        // Add breadcrumb for request tracking
        errorLoggingService.addBreadcrumb({
          category: 'http',
          message: `${requestConfig.method?.toUpperCase()} ${requestConfig.url}`,
          level: 'info',
          data: {
            method: requestConfig.method,
            url: requestConfig.url,
          },
        });

        return requestConfig;
      },
      (error) => {
        errorLoggingService.logApiError(
          error instanceof Error ? error : new Error(String(error)),
          {
            method: error.config?.method || 'UNKNOWN',
            url: error.config?.url || 'UNKNOWN',
          }
        );
        return Promise.reject(error);
      }
    );

    // Response interceptor - handle token refresh on 401 and log errors
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError<ApiError>) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        // Log API errors (skip 401s that will be retried)
        const shouldLogError = error.response?.status !== 401 || originalRequest._retry;
        if (shouldLogError && error.response) {
          errorLoggingService.logApiError(
            new Error(error.response.data?.error || error.message || 'API Error'),
            {
              method: originalRequest.method || 'UNKNOWN',
              url: originalRequest.url || 'UNKNOWN',
              status: error.response.status,
              requestId: error.response.headers?.['x-request-id'] as string | undefined,
            }
          );
        }

        // If 401 and we haven't retried, try to refresh token
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const newToken = await this.refreshAccessToken();
            if (newToken && originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
            }
            return this.client(originalRequest);
          } catch (refreshError) {
            // Refresh failed, clear tokens and redirect to login
            errorLoggingService.logAuthError(
              refreshError instanceof Error ? refreshError : new Error('Token refresh failed'),
              'token refresh'
            );
            this.clearTokens();
            window.location.href = '/auth';
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  /**
   * Get access token from storage
   */
  private getAccessToken(): string | null {
    return localStorage.getItem(config.auth.tokenKey);
  }

  /**
   * Get refresh token from storage
   */
  private getRefreshToken(): string | null {
    return localStorage.getItem(config.auth.refreshTokenKey);
  }

  /**
   * Store access token
   */
  setAccessToken(token: string): void {
    localStorage.setItem(config.auth.tokenKey, token);
  }

  /**
   * Store refresh token
   */
  setRefreshToken(token: string): void {
    localStorage.setItem(config.auth.refreshTokenKey, token);
  }

  /**
   * Clear all tokens
   */
  clearTokens(): void {
    localStorage.removeItem(config.auth.tokenKey);
    localStorage.removeItem(config.auth.refreshTokenKey);
  }

  /**
   * Refresh access token using refresh token
   */
  private async refreshAccessToken(): Promise<string> {
    // Prevent multiple simultaneous refresh requests
    if (this.refreshTokenPromise) {
      return this.refreshTokenPromise;
    }

    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    this.refreshTokenPromise = (async () => {
      try {
        const response = await axios.post<RefreshTokenResponse>(
          `${config.api.baseUrl}/auth/refresh`,
          { refreshToken } as RefreshTokenRequest
        );

        if (response.data.success && response.data.accessToken) {
          this.setAccessToken(response.data.accessToken);
          if (response.data.refreshToken) {
            this.setRefreshToken(response.data.refreshToken);
          }
          return response.data.accessToken;
        }

        throw new Error('Failed to refresh token');
      } finally {
        this.refreshTokenPromise = null;
      }
    })();

    return this.refreshTokenPromise;
  }

  // ==================== Authentication Endpoints ====================

  /**
   * Login user - REAL AUTHENTICATION
   */
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    // Use real authentication service
    const result = await authService.login({
      email: credentials.email,
      password: credentials.password,
    });

    if (!result.success || !result.user) {
      throw new Error(result.error || 'Login failed');
    }

    // Store tokens
    if (result.accessToken) {
      this.setAccessToken(result.accessToken);
    }
    if (result.refreshToken) {
      this.setRefreshToken(result.refreshToken);
    }

    return {
      success: true,
      accessToken: result.accessToken || '',
      refreshToken: result.refreshToken || '',
      user: result.user,
      message: 'Login successful',
    };
  }

  /**
   * Signup new user - REAL AUTHENTICATION
   */
  async signup(data: SignupRequest): Promise<AuthResponse> {
    // Use real authentication service
    const result = await authService.signup({
      firstName: data.firstName,
      email: data.email,
      password: data.password,
      age: data.age,
      parentEmail: data.parentEmail,
    });

    if (!result.success || !result.user) {
      throw new Error(result.error || 'Signup failed');
    }

    // Store tokens
    if (result.accessToken) {
      this.setAccessToken(result.accessToken);
    }
    if (result.refreshToken) {
      this.setRefreshToken(result.refreshToken);
    }

    return {
      success: true,
      accessToken: result.accessToken || '',
      refreshToken: result.refreshToken || '',
      user: result.user,
      message: 'Account created successfully! Welcome to ClayMind!',
    };
  }

  /**
   * Logout user - REAL LOGOUT
   */
  async logout(): Promise<ApiResponse> {
    await authService.logout();
    this.clearTokens();

    return {
      success: true,
      message: 'Logged out successfully',
    };
  }

  // ==================== User Endpoints ====================

  /**
   * Get current user profile - REAL DATA
   */
  async getUserProfile(): Promise<User> {
    const user = await authService.getCurrentUser();
    if (!user) {
      throw new Error('Not authenticated');
    }

    // Update level from progress
    const progress = storageService.getProgress();
    user.level = progress.currentLevel;

    return user;
  }

  /**
   * Update user profile
   */
  async updateUserProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    return this.stubRequest<UserProfile>(
      () => this.client.put('/user/profile', data),
      {
        id: 'user-1',
        username: data.username || 'AIExplorer_Alex',
        level: data.level || 8,
        progress: data.progress || 65,
        joinedDate: data.joinedDate || 'Nov 2024',
        totalBadges: data.totalBadges || 12,
        totalProjects: data.totalProjects || 8,
      }
    );
  }

  /**
   * Get user progress - REAL DATA
   */
  async getUserProgress(): Promise<UserProgress> {
    // Get real progress from storage
    return storageService.getProgress();
  }

  // ==================== Modules Endpoints ====================

  /**
   * Get all modules - FROM SUPABASE WITH FALLBACK
   */
  async getModules(): Promise<Module[]> {
    // Get real progress from storage
    const moduleProgress = storageService.getModuleProgress();

    const difficultyMap: Record<string, number> = {
      'beginner': 1,
      'intermediate': 2,
      'advanced': 3,
    };

    try {
      const supabaseModules = await withTimeout(getModulesFromSupabase(), 3000);

      if (supabaseModules && supabaseModules.length > 0) {
        return supabaseModules.map((mod: any) => ({
          id: mod.id,
          title: mod.title,
          description: mod.description,
          difficulty: difficultyMap[mod.difficulty] || 2,
          lessons: mod.total_lessons || 0,
          duration: `${mod.estimated_duration_minutes || 120} min`,
          color: mod.color || 'purple',
          locked: false,
          progress: moduleProgress[mod.id]?.progress || 0,
          totalLessons: mod.total_lessons || 0,
        }));
      }
    } catch (error) {
      console.warn('Supabase modules fetch failed, using fallback data:', error);
    }

    // Fallback: return hardcoded modules when DB is empty or unavailable
    return FALLBACK_MODULES.map((mod) => ({
      ...mod,
      progress: moduleProgress[mod.id]?.progress || 0,
    }));
  }

  /**
   * Get module detail by ID - FROM SUPABASE WITH FALLBACK
   */
  async getModuleDetail(moduleId: string): Promise<ModuleDetail> {
    const completedLessonIds = storageService.getCompletedLessonsForModule(moduleId);
    const completedSet = new Set(completedLessonIds);

    let moduleInfo: { id: string; title: string; description: string } | null = null;
    let rawLessons: Array<{ id: string; title: string; estimated_duration_minutes?: number; is_locked_by_default?: boolean }> = [];

    // Try Supabase first
    try {
      const { module, lessons } = await withTimeout(getModuleDetailFromSupabase(moduleId), 3000);
      if (module && lessons && lessons.length > 0) {
        moduleInfo = module;
        rawLessons = lessons;
      }
    } catch (error) {
      console.warn(`Supabase module detail fetch failed for ${moduleId}, using fallback:`, error);
    }

    // Fallback to hardcoded data if Supabase returned nothing
    if (!moduleInfo || rawLessons.length === 0) {
      const fallbackModule = FALLBACK_MODULES.find((m) => m.id === moduleId);
      const fallbackLessons = FALLBACK_LESSONS[moduleId];

      if (!fallbackModule || !fallbackLessons) {
        throw new Error(`Module "${moduleId}" not found`);
      }

      moduleInfo = { id: fallbackModule.id, title: fallbackModule.title, description: fallbackModule.description };
      rawLessons = fallbackLessons;
    }

    // Find last completed lesson index for unlock logic
    let lastCompletedIndex = -1;
    rawLessons.forEach((l: any, idx: number) => {
      if (completedSet.has(l.id)) {
        lastCompletedIndex = idx;
      }
    });

    // Transform lessons
    const transformedLessons = rawLessons.map((lesson: any, idx: number) => {
      const isCompleted = completedSet.has(lesson.id);
      const isLocked = lesson.is_locked_by_default && idx > lastCompletedIndex + 3;

      return {
        id: lesson.id,
        title: lesson.title,
        duration: `${lesson.estimated_duration_minutes || 20} min`,
        completed: isCompleted,
        locked: isLocked,
      };
    });

    const completedCount = transformedLessons.filter((l: any) => l.completed).length;
    const progress = transformedLessons.length > 0
      ? Math.round((completedCount / transformedLessons.length) * 100)
      : 0;

    return {
      id: moduleInfo.id,
      title: moduleInfo.title,
      description: moduleInfo.description,
      progress,
      totalLessons: transformedLessons.length,
      completedLessons: completedCount,
      lessons: transformedLessons,
    };
  }

  // ==================== Projects Endpoints ====================

  /**
   * Get user projects
   */
  async getProjects(): Promise<Project[]> {
    return this.stubRequest<Project[]>(
      () => this.client.get('/projects'),
      [
        {
          id: '1',
          title: 'AI Story Generator',
          type: 'App',
          date: 'Dec 21, 2024',
          color: 'purple',
          thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
        },
        {
          id: '2',
          title: 'Colorful Abstract Art',
          type: 'Image',
          date: 'Dec 20, 2024',
          color: 'pink',
          thumbnail: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=300&fit=crop',
        },
        {
          id: '3',
          title: 'Nature Documentary',
          type: 'Video',
          date: 'Dec 19, 2024',
          color: 'blue',
          thumbnail: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&h=300&fit=crop',
        },
        {
          id: '4',
          title: 'Recipe Helper',
          type: 'App',
          date: 'Dec 18, 2024',
          color: 'green',
          thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
        },
        {
          id: '5',
          title: 'Animal Classifier',
          type: 'App',
          date: 'Dec 21, 2024',
          color: 'amber',
          thumbnail: 'https://images.unsplash.com/photo-1621158240033-a87959ac7e2b?w=400&h=300&fit=crop',
        },
        {
          id: '6',
          title: 'Dream Landscape',
          type: 'Image',
          date: 'Dec 21, 2024',
          color: 'violet',
          thumbnail: 'https://images.unsplash.com/photo-1610274672835-65a79c852f58?w=400&h=300&fit=crop',
        },
      ]
    );
  }

  /**
   * Create new project
   */
  async createProject(data: Partial<Project>): Promise<Project> {
    return this.stubRequest<Project>(
      () => this.client.post('/projects', data),
      {
        id: 'project-' + Date.now(),
        title: data.title || 'New Project',
        type: data.type || 'App',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        color: data.color || 'purple',
        thumbnail: data.thumbnail || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      }
    );
  }

  /**
   * Get project by ID
   */
  async getProject(projectId: string): Promise<Project> {
    return this.stubRequest<Project>(
      () => this.client.get(`/projects/${projectId}`),
      {
        id: projectId,
        title: 'Sample Project',
        type: 'App',
        date: 'Dec 21, 2024',
        color: 'purple',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      }
    );
  }

  // ==================== Contact Endpoints ====================

  /**
   * Send contact form message
   */
  async sendContactMessage(data: ContactFormData): Promise<ContactResponse> {
    const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
      body: { name: data.name, email: data.email, subject: data.subject, message: data.message },
    });

    if (error) throw new Error(error.message || 'Failed to send message');

    return { success: result.success, message: result.message };
  }

  /**
   * Get FAQ list
   */
  async getFAQs(): Promise<Array<{ question: string; answer: string }>> {
    return this.stubRequest<Array<{ question: string; answer: string }>>(
      () => this.client.get('/contact/faqs'),
      [
        {
          question: 'How do I start learning?',
          answer: 'Just sign up, choose a module that interests you, and start with the first lesson!',
        },
        {
          question: 'Is ClayMind really safe for kids?',
          answer: 'Yes! We have content filters, parental controls, and all activities are monitored to ensure a safe learning environment.',
        },
        {
          question: 'Can I share my projects?',
          answer: 'Yes! You can share your projects with friends and family directly from your project gallery.',
        },
        {
          question: 'What if I need help with a lesson?',
          answer: 'Each lesson has built-in hints and tips. You can also ask for help in the support section!',
        },
      ]
    );
  }

  // ==================== AI Lab Endpoints ====================

  /**
   * Generate AI content
   */
  async generateAI(data: AIGenerateRequest): Promise<AIGenerateResponse> {
    return this.stubRequest<AIGenerateResponse>(
      () => this.client.post('/ai-lab/generate', data),
      {
        success: true,
        output: `This is a simulated AI response for: "${data.prompt}". In a real app, this would be generated by AI based on your prompt. Keep experimenting!`,
        prompt: data.prompt,
        type: data.type || 'text',
      }
    );
  }

  // ==================== Helper Methods ====================

  /**
   * Stub request - returns mock data instead of making actual API call
   * In production, remove this wrapper and use the actual axios call
   */
  private async stubRequest<T>(
    apiCall: () => Promise<AxiosResponse<T>>,
    mockData: T
  ): Promise<T> {
    // In development, return mock data immediately
    if (config.app.isDev) {
      return mockData;
    }

    // In production, make actual API call
    try {
      const response = await apiCall();
      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError<ApiError>);
    }
  }

  /**
   * Handle API errors
   */
  private handleError(error: AxiosError<ApiError>): Error {
    if (error.response) {
      // Server responded with error status
      const apiError = error.response.data;
      const message = apiError?.error || error.message || 'An error occurred';
      const customError = new Error(message) as Error & { code?: string; details?: unknown };
      customError.code = apiError?.errorCode;
      customError.details = apiError?.details;
      return customError;
    } else if (error.request) {
      // Request made but no response
      return new Error('Network error. Please check your connection.');
    } else {
      // Something else happened
      return new Error(error.message || 'An unexpected error occurred');
    }
  }
}

// Export singleton instance
export const api = new ApiClient();

// Export types for convenience
export type { ApiClient };


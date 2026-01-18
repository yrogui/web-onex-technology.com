/**
 * Types pour les réponses API
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
  timestamp?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  statusCode?: number;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// API Blog
export interface CreateArticlePayload {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags?: string[];
  author?: string;
  image?: string;
  published?: boolean;
}

export interface CreateArticleResponse {
  success: boolean;
  slug?: string;
  url?: string;
  error?: string;
}

export interface PublishArticlePayload {
  slug: string;
}

export interface PublishArticleResponse {
  success: boolean;
  publishedAt?: string;
  url?: string;
  error?: string;
}

// API Contact
export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  recaptchaToken?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// API Newsletter
export interface NewsletterPayload {
  email: string;
  recaptchaToken?: string;
}

export interface NewsletterResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Types pour l'assistant IA multimodal
 */

export type MessageRole = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  attachments?: MessageAttachment[];
}

export interface MessageAttachment {
  id: string;
  type: "image" | "pdf" | "document";
  url: string;
  filename: string;
  size: number;
  mimeType: string;
}

export interface ChatSession {
  id: string;
  userId?: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
  metadata?: {
    userAgent?: string;
    referrer?: string;
    leadQualified?: boolean;
  };
}

export interface AssistantResponse {
  message: string;
  sessionId: string;
  suggestions?: string[];
  actions?: AssistantAction[];
  fallback?: boolean;
}

export interface AssistantAction {
  type: "calendly" | "email" | "download" | "link";
  label: string;
  url: string;
  metadata?: Record<string, unknown>;
}

export interface UploadResponse {
  success: boolean;
  url?: string;
  analysis?: {
    type: string;
    content: string;
    confidence?: number;
  };
  error?: string;
}

export interface AssistantStatus {
  available: boolean;
  responseTime: number; // ms
  version: string;
  features: string[];
}

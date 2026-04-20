export type MessageRole = "user" | "bot";
export type LeadType = "cold" | "warm" | "hot" | "urgence" | null;

export interface SuggestedAction {
  label: string;
  action: "url" | "prefill" | "close";
  value: string;
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  leadType?: LeadType;
  suggestedActions?: SuggestedAction[];
  isTyping?: boolean;
}

export interface WebhookResponse {
  output: string;
  leadType?: LeadType;
  suggestedActions?: SuggestedAction[];
  sessionContext?: Record<string, unknown>;
}

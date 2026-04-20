"use client";

import { useState, useCallback } from "react";
import { Message, WebhookResponse } from "./types";

const FALLBACK_CONTENT =
  "Désolé, le service est temporairement indisponible. Écrivez-nous directement à **contact@onex-technology.com** ou prenons rendez-vous via le formulaire sur **onex-technology.com**.";

const MAX_HISTORY = 6;

function getSessionId(): string {
  const key = "onex_chat_session";
  try {
    let id = sessionStorage.getItem(key);
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem(key, id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

export function useChatWebhook() {
  const [isLoading, setIsLoading] = useState(false);

  const send = useCallback(
    async (
      userMessage: string,
      history: Message[],
      onResponse: (msg: Omit<Message, "id">) => void
    ) => {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK;

      setIsLoading(true);

      try {
        if (!webhookUrl) throw new Error("Webhook non configuré.");

        const historyTrunc = history.slice(-MAX_HISTORY).map((m) => ({
          role: m.role,
          content: m.content,
        }));

        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: userMessage,
            sessionId: getSessionId(),
            history: historyTrunc,
            pageUrl: window.location.href,
            userAgent: navigator.userAgent,
          }),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data: WebhookResponse = await res.json();

        onResponse({
          role: "bot",
          content: data.output,
          leadType: data.leadType ?? null,
          suggestedActions: data.suggestedActions,
        });
      } catch {
        onResponse({
          role: "bot",
          content: FALLBACK_CONTENT,
          leadType: null,
        });
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { send, isLoading };
}

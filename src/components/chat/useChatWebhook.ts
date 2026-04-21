"use client";

import { useState, useCallback, useRef } from "react";
import type { Message } from "./types";

const SESSION_STORAGE_KEY = "onex_chat_session";

/**
 * Hook pour appeler le webhook n8n /chatbot-site (Brain Hub One-X).
 *
 * Format requête : { searchQuery, sessionId }
 * Format réponse : { output, sessionId, source }
 *
 * Le Brain Hub gère :
 * - La logique IA (GPT-4o-mini + RAG Supabase + mémoire 20 msg)
 * - La détection high-value lead
 * - Les notifs Telegram Admin + CRM Notion (via spoke chatbot-site)
 */
export function useChatWebhook() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sessionIdRef = useRef<string | null>(null);

  const getSessionId = useCallback((): string => {
    if (sessionIdRef.current) return sessionIdRef.current;

    if (typeof window !== "undefined") {
      const existing = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (existing) {
        sessionIdRef.current = existing;
        return existing;
      }
    }

    const newId = `web_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    sessionIdRef.current = newId;
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_STORAGE_KEY, newId);
    }
    return newId;
  }, []);

  const send = useCallback(
    async (
      userMessage: string,
      _history: Message[],
      onResponse: (msg: Omit<Message, "id">) => void
    ): Promise<void> => {
      setIsLoading(true);
      setError(null);

      const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK;
      if (!webhookUrl) {
        setIsLoading(false);
        setError("Webhook non configuré");
        onResponse({
          role: "bot",
          content:
            "L'assistant est momentanément indisponible. Écrivez-nous à contact@onex-technology.com.",
        });
        return;
      }

      const sessionId = getSessionId();

      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            searchQuery: userMessage,
            sessionId,
            source: "chatbot-site",
            pageUrl:
              typeof window !== "undefined"
                ? window.location.href
                : "https://onex-technology.com",
            userAgent:
              typeof window !== "undefined" ? navigator.userAgent : "unknown",
          }),
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        const output = data.output || data.message || data.text || "";

        if (!output) {
          throw new Error("Empty response");
        }

        const suggestedActions = buildSuggestedActions(output);

        setIsLoading(false);
        onResponse({
          role: "bot",
          content: output,
          suggestedActions,
        });
      } catch (err) {
        console.error("Chat webhook error:", err);
        setIsLoading(false);
        setError("Erreur réseau");
        onResponse({
          role: "bot",
          content:
            "Désolé, je rencontre un problème technique. Écrivez-nous directement à contact@onex-technology.com ou prenez rendez-vous sur https://calendly.com/yrogui/30min.",
          suggestedActions: [
            {
              label: "Envoyer un email",
              action: "url",
              value: "mailto:contact@onex-technology.com",
            },
            {
              label: "Prendre RDV",
              action: "url",
              value: "https://calendly.com/yrogui/30min",
            },
          ],
        });
      }
    },
    [getSessionId]
  );

  return { send, isLoading, error };
}

function buildSuggestedActions(
  output: string
): { label: string; action: "url" | "prefill" | "close"; value: string }[] {
  const actions: {
    label: string;
    action: "url" | "prefill" | "close";
    value: string;
  }[] = [];

  const lower = output.toLowerCase();

  if (lower.includes("calendly.com/yrogui")) {
    actions.push({
      label: "Prendre RDV avec Yassine",
      action: "url",
      value: "https://calendly.com/yrogui/30min",
    });
  }

  if (
    lower.includes("+33 6 65 56 72 67") ||
    lower.includes("+33665567267") ||
    lower.includes("urgence")
  ) {
    actions.push({
      label: "Appeler Yassine",
      action: "url",
      value: "tel:+33665567267",
    });
  }

  if (lower.includes("checklist") || lower.includes("25 points")) {
    actions.push({
      label: "Télécharger la checklist",
      action: "url",
      value: "https://onex-technology.com/#checklist",
    });
  }

  return actions.slice(0, 3);
}

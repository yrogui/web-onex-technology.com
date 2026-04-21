"use client";

import { useState, useCallback, useRef } from "react";
import type { Message, WebhookResponse } from "./types";

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

  // Initialise ou récupère le sessionId depuis sessionStorage (RGPD-safe, reset au close)
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

  const sendMessage = useCallback(
    async (message: string, _history?: Message[]): Promise<WebhookResponse> => {
      setIsLoading(true);
      setError(null);

      const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK;
      if (!webhookUrl) {
        setIsLoading(false);
        setError("Webhook non configuré");
        return {
          output:
            "L'assistant est momentanément indisponible. Écrivez-nous à contact@onex-technology.com.",
          leadType: "cold",
          suggestedActions: [],
        };
      }

      const sessionId = getSessionId();

      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            searchQuery: message,
            sessionId,
            // Champs additionnels reconnus par le Brain (optionnels, ignorés si non gérés)
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

        // Le Brain Hub retourne { output, sessionId, source }
        // On mappe vers notre format frontend
        const output = data.output || data.message || data.text || "";

        if (!output) {
          throw new Error("Empty response");
        }

        // Le Brain gère la détection high-value en interne mais ne l'expose pas dans la réponse publique.
        // On génère donc des suggested actions basiques côté frontend selon le contenu.
        const suggestedActions = buildSuggestedActions(output);

        setIsLoading(false);
        return {
          output,
          leadType: "cold", // Placeholder : le Brain ne retourne pas leadType publiquement
          suggestedActions,
        };
      } catch (err) {
        console.error("Chat webhook error:", err);
        setIsLoading(false);
        setError("Erreur réseau");
        return {
          output:
            "Désolé, je rencontre un problème technique. Écrivez-nous directement à contact@onex-technology.com ou prenez rendez-vous sur https://calendly.com/yrogui/30min.",
          leadType: "cold",
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
        };
      }
    },
    [getSessionId]
  );

  return { sendMessage, isLoading, error };
}

/**
 * Détecte dans la réponse du bot des triggers pour proposer des CTA.
 * Le Brain inclut souvent naturellement "calendly.com/yrogui/30min" ou "contact@onex-technology.com"
 * dans ses réponses — on les extrait pour en faire des boutons.
 */
function buildSuggestedActions(
  output: string
): { label: string; action: "url" | "prefill" | "close"; value: string }[] {
  const actions: {
    label: string;
    action: "url" | "prefill" | "close";
    value: string;
  }[] = [];

  const lower = output.toLowerCase();

  // Si le bot mentionne Calendly → bouton RDV
  if (lower.includes("calendly.com/yrogui")) {
    actions.push({
      label: "Prendre RDV avec Yassine",
      action: "url",
      value: "https://calendly.com/yrogui/30min",
    });
  }

  // Si le bot mentionne une urgence ou donne le téléphone → bouton appel
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

  // Si le bot mentionne la checklist → bouton téléchargement
  if (lower.includes("checklist") || lower.includes("25 points")) {
    actions.push({
      label: "Télécharger la checklist",
      action: "url",
      value: "https://onex-technology.com/#checklist",
    });
  }

  // Max 3 boutons
  return actions.slice(0, 3);
}

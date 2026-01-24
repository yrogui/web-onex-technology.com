"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Loader2, User, Bot } from "lucide-react";

/**
 * Props pour AIChatModal
 */
interface AIChatModalProps {
  onClose: () => void;
}

/**
 * Structure d'un message
 */
interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

/**
 * Configuration API Proxy (évite les problèmes CORS)
 */
const API_CONFIG = {
  proxyUrl: "/api/n8n-proxy",
  method: "POST" as const,
};

/**
 * AIChatModal - Interface de chat avec l'assistant IA via n8n
 *
 * Fonctionnalités :
 * - Envoi de messages à l'agent AI (GPT-4 + calendrier + base de connaissances)
 * - Affichage de l'historique de conversation
 * - Gestion du loading et des erreurs
 * - Design cohérent avec le site (dark mode, brand colors)
 */
export function AIChatModal({ onClose }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Bonjour ! Je suis l'assistant IA de ONEX Technology. Je peux vous aider avec :\n\n• Informations sur nos services CCaaS\n• Prise de rendez-vous\n• Questions techniques sur les migrations cloud\n• Tarifs et méthodologie\n\nComment puis-je vous aider aujourd'hui ?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll vers le bas quand de nouveaux messages arrivent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus automatique sur l'input au montage
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /**
   * Envoie un message à l'agent IA via n8n
   */
  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    // Ajouter le message utilisateur
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: userMessage,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsLoading(true);
    setError(null);

    try {
      console.log("🔵 Envoi de la requête via proxy...", { userMessage });

      // Appel via le proxy Next.js (évite CORS)
      const response = await fetch(API_CONFIG.proxyUrl, {
        method: API_CONFIG.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchQuery: userMessage,
        }),
      });

      console.log("🟢 Réponse reçue du proxy:", {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      if (!response.ok) {
        throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
      }

      // Récupérer la réponse de l'AI
      const data = await response.json();
      console.log("📦 Données JSON reçues:", data);

      // Le workflow n8n renvoie { "output": "..." }
      // Fallback sur response/message si la structure change
      const aiResponse = data.output || data.response || data.message || JSON.stringify(data);
      console.log("💬 Réponse AI extraite:", aiResponse);

      // Ajouter la réponse de l'assistant
      const newAssistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newAssistantMessage]);
      console.log("✅ Message assistant ajouté");
    } catch (err) {
      console.error("Erreur lors de l'envoi du message:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Veuillez réessayer."
      );

      // Ajouter un message d'erreur dans le chat
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Désolé, je rencontre une difficulté technique. Veuillez réessayer ou nous contacter directement à contact@onex-technology.com.",
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  /**
   * Gère la soumission du formulaire
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  /**
   * Gère la touche Entrée
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Chat */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in">
        <div
          className="
            relative
            bg-white dark:bg-[#1a1c20]
            rounded-2xl
            shadow-2xl
            w-full max-w-2xl
            h-[600px]
            flex flex-col
            border-2 border-brand-gold/20
            animate-slide-up
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-noir/10 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600/10 dark:bg-purple-600/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-noir dark:text-white">
                  Assistant IA ONEX
                </h3>
                <p className="text-xs text-brand-slate dark:text-[#94a3b8]">
                  Propulsé par GPT-4 + Calendrier + Base de connaissances
                </p>
              </div>
            </div>

            {/* Bouton Fermer */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-brand-noir/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Fermer"
            >
              <X className="h-5 w-5 text-brand-slate dark:text-[#94a3b8]" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-brand-cream/30 dark:bg-[#0a0c10]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                    ${
                      message.role === "user"
                        ? "bg-brand-gold/10 text-brand-gold"
                        : "bg-purple-600/10 text-purple-600"
                    }
                  `}
                >
                  {message.role === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`
                    max-w-[75%] rounded-2xl px-4 py-3
                    ${
                      message.role === "user"
                        ? "bg-brand-gold text-brand-noir"
                        : "bg-white dark:bg-[#1a1c20] text-brand-noir dark:text-white border border-brand-noir/10 dark:border-white/10"
                    }
                  `}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <p
                    className={`
                      text-xs mt-2
                      ${
                        message.role === "user"
                          ? "text-brand-noir/60"
                          : "text-brand-slate dark:text-[#94a3b8]"
                      }
                    `}
                  >
                    {message.timestamp.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-purple-600" />
                </div>
                <div className="bg-white dark:bg-[#1a1c20] border border-brand-noir/10 dark:border-white/10 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 text-purple-600 animate-spin" />
                    <span className="text-sm text-brand-slate dark:text-[#94a3b8]">
                      L'assistant réfléchit...
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-3">
                <p className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              </div>
            )}

            {/* Auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-brand-noir/10 dark:border-white/10">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez votre question..."
                disabled={isLoading}
                className="
                  flex-1
                  px-4 py-3
                  rounded-lg
                  bg-brand-cream dark:bg-[#0a0c10]
                  border border-brand-noir/10 dark:border-white/10
                  text-brand-noir dark:text-white
                  placeholder:text-brand-slate dark:placeholder:text-[#94a3b8]
                  focus:outline-none focus:ring-2 focus:ring-brand-gold
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all
                "
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="
                  px-4 py-3
                  rounded-lg
                  bg-brand-gold hover:bg-brand-gold/90
                  text-brand-noir
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-200
                  flex items-center justify-center
                "
                aria-label="Envoyer le message"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </form>

            {/* Helper Text */}
            <p className="text-xs text-brand-slate dark:text-[#94a3b8] mt-2 text-center">
              Appuyez sur Entrée pour envoyer • L'assistant peut réserver des RDV
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

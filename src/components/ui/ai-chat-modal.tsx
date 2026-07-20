"use client";

function formatMessage(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline font-medium">$1</a>');
}

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Loader2, User, Bot } from "lucide-react";

interface AIChatModalProps {
  onClose: () => void;
}

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const N8N_CONFIG = {
  webhookUrl: "https://flow.onextechnology.cloud/webhook/chatbot-site",
  method: "POST" as const,
};

export function AIChatModal({ onClose }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Bonjour ! Je suis l'assistant IA de One-X Technology. Je peux vous aider avec :\n\n• Informations sur nos services CCaaS\n• Prise de rendez-vous\n• Questions techniques sur les migrations cloud\n• Tarifs et méthodologie\n\nComment puis-je vous aider aujourd'hui ?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    const anchor = messagesEndRef.current;
    if (!container || !anchor) return;
    const isNearBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight < 150;
    if (isNearBottom) {
      anchor.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

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
      const response = await fetch(N8N_CONFIG.webhookUrl, {
        method: N8N_CONFIG.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchQuery: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const aiResponse =
        data.output || data.response || data.message || JSON.stringify(data);

      const newAssistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newAssistantMessage]);
    } catch (err) {
      console.error("Erreur lors de l'envoi du message:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Veuillez réessayer."
      );

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Styles scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-custom::-webkit-scrollbar { width: 8px; }
          .scrollbar-custom::-webkit-scrollbar-track { background: transparent; }
          .scrollbar-custom::-webkit-scrollbar-thumb { background: rgba(212, 128, 59, 0.3); border-radius: 4px; }
          .scrollbar-custom::-webkit-scrollbar-thumb:hover { background: rgba(212, 128, 59, 0.5); }
          .scrollbar-custom { scrollbar-width: thin; scrollbar-color: rgba(212, 128, 59, 0.3) transparent; }
        `
      }} />

      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Chat */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in">
        <div
          className="relative bg-paper dark:bg-primary rounded shadow-2xl w-full max-w-2xl h-[600px] flex flex-col border border-smoke/30 dark:border-charcoal animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-smoke/30 dark:border-charcoal">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-accent dark:text-accent-light" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-ink dark:text-paper">
                  Assistant IA One-X
                </h3>
                <p className="text-xs text-graphite dark:text-smoke">
                  Propulsé par GPT-4 + Calendrier + Base de connaissances
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-sm hover:bg-ink/5 dark:hover:bg-paper/5 transition-colors"
              aria-label="Fermer"
            >
              <X className="h-5 w-5 text-graphite dark:text-smoke" />
            </button>
          </div>

          {/* Messages Area */}
          <div
            ref={messagesContainerRef}
            className="flex-1 min-h-0 overflow-y-scroll p-6 space-y-4 bg-mist/50 dark:bg-ink scroll-smooth overscroll-contain scrollbar-custom"
            style={{ WebkitOverflowScrolling: "touch" }}
            tabIndex={0}
            role="log"
            aria-live="polite"
            aria-label="Historique des messages"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user"
                      ? "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-light"
                      : "bg-purple-600/10 text-purple-600"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] rounded-sm px-4 py-3 ${
                    message.role === "user"
                      ? "bg-accent text-paper"
                      : "bg-paper dark:bg-charcoal/70 text-ink dark:text-paper border border-smoke/30 dark:border-charcoal"
                  }`}
                >
                  <p
                    className="text-sm leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: message.role === "assistant" ? formatMessage(message.content) : message.content }}
                  />
                  <p
                    className={`text-xs mt-2 ${
                      message.role === "user"
                        ? "text-paper/60"
                        : "text-graphite dark:text-smoke"
                    }`}
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
                <div className="bg-paper dark:bg-charcoal/70 border border-smoke/30 dark:border-charcoal rounded-sm px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 text-accent dark:text-accent-light animate-spin" />
                    <span className="text-sm text-graphite dark:text-smoke">
                      L'assistant réfléchit...
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-error/10 border border-red-200 dark:border-error/30 rounded-sm p-3">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-smoke/30 dark:border-charcoal">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Posez votre question..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-sm bg-mist dark:bg-ink border border-smoke/30 dark:border-charcoal text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-4 py-3 rounded-sm bg-accent hover:bg-accent/90 text-paper disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                aria-label="Envoyer le message"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </form>

            <p className="text-xs text-graphite dark:text-smoke mt-2 text-center">
              Appuyez sur Entrée pour envoyer • L'assistant peut réserver des RDV
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

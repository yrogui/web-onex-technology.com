"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { ChatToggle } from "./ChatToggle";
import { ChatWindow } from "./ChatWindow";
import { useChatWebhook } from "./useChatWebhook";
import { Message } from "./types";

const STORAGE_KEY = "onex_chat_messages";

const INITIAL_MESSAGE: Message = {
  id: "initial",
  role: "bot",
  content:
    "Bonjour, je suis l'assistant virtuel One-X Technology. Je peux vous renseigner sur nos prestations CCaaS, nos références au Maroc, et organiser un premier échange avec Yassine si votre projet le justifie. Comment puis-je vous aider ?",
  leadType: null,
};

function loadMessages(): Message[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Message[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return [INITIAL_MESSAGE];
}

function saveMessages(messages: Message[]) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // ignore
  }
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [hasUserMessaged, setHasUserMessaged] = useState(false);

  const toggleRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { send, isLoading } = useChatWebhook();

  // Restaurer la session depuis sessionStorage (client uniquement)
  useEffect(() => {
    const stored = loadMessages();
    setMessages(stored);
    const hasUser = stored.some((m) => m.role === "user");
    setHasUserMessaged(hasUser);
  }, []);

  // Persister les messages à chaque changement
  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      // Léger délai pour laisser l'animation démarrer
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    } else {
      toggleRef.current?.focus();
    }
  }, [isOpen]);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  function close() {
    setIsOpen(false);
  }

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
      };

      const typingMsg: Message = {
        id: "typing",
        role: "bot",
        content: "",
        isTyping: true,
      };

      setMessages((prev) => [...prev, userMsg, typingMsg]);
      setInput("");
      setHasUserMessaged(true);

      await send(trimmed, [...messages, userMsg], (response) => {
        const botMsg: Message = {
          id: crypto.randomUUID(),
          ...response,
        };
        setMessages((prev) =>
          prev.filter((m) => m.id !== "typing").concat(botMsg)
        );
      });
    },
    [isLoading, messages, send]
  );

  function handleSend() {
    sendMessage(input);
  }

  function handleQuickAction(text: string) {
    setInput(text);
    // Envoie directement
    sendMessage(text);
  }

  function handleSuggestedAction(action: string, value: string) {
    if (action === "prefill") {
      setInput(value);
      inputRef.current?.focus();
    } else if (action === "url") {
      window.open(value, "_blank", "noopener,noreferrer");
    } else if (action === "close") {
      close();
    }
  }

  return (
    <>
      {/* Fenêtre chat */}
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            id="chat-window"
            messages={messages}
            input={input}
            isLoading={isLoading}
            hasUserMessaged={hasUserMessaged}
            onClose={close}
            onInputChange={setInput}
            onSend={handleSend}
            onQuickAction={handleQuickAction}
            onSuggestedAction={handleSuggestedAction}
            inputRef={inputRef}
          />
        )}
      </AnimatePresence>

      {/* Bouton toggle */}
      <div
        className="fixed z-50"
        style={{ bottom: 28, right: 28 }}
      >
        <div ref={toggleRef}>
          <ChatToggle isOpen={isOpen} onClick={toggle} />
        </div>
      </div>
    </>
  );
}

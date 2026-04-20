"use client";

import { useEffect, useRef, useState } from "react";
import { Message } from "./types";
import { ChatMessage } from "./ChatMessage";

interface ChatMessagesProps {
  messages: Message[];
  onAction?: (action: string, value: string) => void;
}

export function ChatMessages({ messages, onAction }: ChatMessagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [userScrolled, setUserScrolled] = useState(false);

  // Auto-scroll sauf si l'utilisateur a scrollé vers le haut
  useEffect(() => {
    const el = containerRef.current;
    if (!el || userScrolled) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, userScrolled]);

  function handleScroll() {
    const el = containerRef.current;
    if (!el) return;
    const threshold = 80;
    const atBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
    setUserScrolled(!atBottom);
  }

  // Délégation des clics sur les suggested actions
  function handleClick(e: React.MouseEvent) {
    const target = (e.target as HTMLElement).closest("[data-action]");
    if (!target || !onAction) return;
    const action = target.getAttribute("data-action") ?? "";
    const value = target.getAttribute("data-value") ?? "";
    onAction(action, value);
  }

  return (
    <div
      ref={containerRef}
      role="log"
      aria-live="polite"
      aria-label="Messages du chat"
      onScroll={handleScroll}
      onClick={handleClick}
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px 16px 8px",
        display: "flex",
        flexDirection: "column",
        scrollbarWidth: "thin",
        scrollbarColor: "#C9CDD3 transparent",
      }}
    >
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
    </div>
  );
}

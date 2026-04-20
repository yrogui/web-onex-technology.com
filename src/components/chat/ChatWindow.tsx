"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatQuickActions } from "./ChatQuickActions";
import { ChatInput } from "./ChatInput";
import { ChatFooter } from "./ChatFooter";
import { Message } from "./types";

interface ChatWindowProps {
  id: string;
  messages: Message[];
  input: string;
  isLoading: boolean;
  hasUserMessaged: boolean;
  onClose: () => void;
  onInputChange: (v: string) => void;
  onSend: () => void;
  onQuickAction: (text: string) => void;
  onSuggestedAction: (action: string, value: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

// FOCUSABLE_SELECTORS pour le focus trap
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function ChatWindow({
  id,
  messages,
  input,
  isLoading,
  hasUserMessaged,
  onClose,
  onInputChange,
  onSend,
  onQuickAction,
  onSuggestedAction,
  inputRef,
}: ChatWindowProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => !el.closest("[aria-hidden='true']"));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <motion.div
      id={id}
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Chat assistant One-X Technology"
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        right: 28,
        bottom: 110,
        zIndex: 49,
        width: 400,
        maxHeight: 600,
        display: "flex",
        flexDirection: "column",
        borderRadius: 12,
        border: "1px solid #C9CDD3",
        background: "#F7F3EA",
        boxShadow: "0 10px 40px rgba(15,15,20,0.08)",
        // Mobile : pleine largeur
        ...(typeof window !== "undefined" && window.innerWidth < 640
          ? {
              right: 16,
              left: 16,
              width: "auto",
              bottom: 90,
              maxHeight: "calc(100dvh - 120px)",
            }
          : {}),
      }}
      // Responsive via CSS plutôt qu'inline pour le SSR
      className="chat-window-responsive"
    >
      <ChatHeader onClose={onClose} />

      <ChatMessages messages={messages} onAction={onSuggestedAction} />

      {!hasUserMessaged && <ChatQuickActions onSelect={onQuickAction} />}

      <ChatInput
        value={input}
        onChange={onInputChange}
        onSend={onSend}
        disabled={isLoading}
        inputRef={inputRef}
      />

      <ChatFooter />
    </motion.div>
  );
}

"use client";

import { useRef, KeyboardEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  disabled: boolean;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
  inputRef,
}: ChatInputProps) {
  const localRef = useRef<HTMLInputElement>(null);
  const ref = inputRef ?? localRef;

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  }

  const canSend = value.trim().length > 0 && !disabled;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 16px",
        borderTop: "1px solid #C9CDD3",
        background: "#F7F3EA",
      }}
    >
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Tapez votre message…"
        disabled={disabled}
        aria-label="Votre message"
        style={{
          flex: 1,
          padding: "13px 16px",
          borderRadius: 8,
          border: "1px solid #C9CDD3",
          background: "#F7F3EA",
          fontSize: 14,
          color: "#0B0F14",
          fontFamily: "inherit",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => {
          (e.currentTarget as HTMLInputElement).style.borderColor = "#D4803B";
        }}
        onBlur={(e) => {
          (e.currentTarget as HTMLInputElement).style.borderColor = "#C9CDD3";
        }}
      />

      <button
        onClick={onSend}
        disabled={!canSend}
        aria-label="Envoyer le message"
        style={{
          width: 48,
          height: 48,
          borderRadius: 8,
          background: canSend ? "#0F0F14" : "#0F0F14",
          color: "#F7F3EA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: canSend ? "pointer" : "not-allowed",
          opacity: canSend ? 1 : 0.4,
          transition: "background 0.2s, opacity 0.2s",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          if (!canSend) return;
          (e.currentTarget as HTMLButtonElement).style.background = "#2B3038";
        }}
        onMouseLeave={(e) => {
          if (!canSend) return;
          (e.currentTarget as HTMLButtonElement).style.background = "#0F0F14";
        }}
      >
        <Send strokeWidth={1.5} size={18} />
      </button>
    </div>
  );
}

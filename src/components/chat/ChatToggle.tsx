"use client";

import { MessageCircle, X } from "lucide-react";

interface ChatToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export function ChatToggle({ isOpen, onClick }: ChatToggleProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Pulse ring — visible uniquement quand fermé */}
      {!isOpen && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            background: "#D4803B",
            opacity: 0,
            animation: "chat-pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      )}

      <button
        onClick={onClick}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat assistant"}
        aria-expanded={isOpen}
        aria-controls="chat-window"
        className="relative z-10 flex items-center justify-center rounded-full transition-all duration-200"
        style={{
          width: 64,
          height: 64,
          background: isOpen ? "#2B3038" : "#0F0F14",
          color: "#F7F3EA",
          boxShadow: "0 4px 20px rgba(15,15,20,0.18)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#2B3038";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = isOpen
            ? "#2B3038"
            : "#0F0F14";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        {isOpen ? (
          <X strokeWidth={1.5} size={24} />
        ) : (
          <MessageCircle strokeWidth={1.5} size={24} />
        )}
      </button>
    </div>
  );
}

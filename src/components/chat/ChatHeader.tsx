"use client";

import { X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3.5 rounded-t-xl shrink-0"
      style={{ background: "#0F0F14" }}
    >
      {/* Avatar */}
      <div
        className="flex items-center justify-center rounded-full shrink-0"
        style={{
          width: 44,
          height: 44,
          background: "#D4803B",
        }}
      >
        <span
          className="font-display font-medium select-none"
          style={{ fontSize: 16, color: "#F7F3EA", letterSpacing: "-0.01em" }}
        >
          1X
        </span>
      </div>

      {/* Titre + statut */}
      <div className="flex-1 min-w-0">
        <p
          className="font-display font-medium truncate"
          style={{ fontSize: 17, color: "#F7F3EA", lineHeight: 1.2 }}
        >
          One-X Technology
        </p>
        <p
          className="flex items-center gap-1.5 font-sans"
          style={{ fontSize: 12, color: "#F7F3EA", opacity: 0.7, marginTop: 2 }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#3F7A5E",
              animation: "status-dot-pulse 2s ease infinite",
            }}
          />
          En ligne · Réponse sous 2h
        </p>
      </div>

      {/* Fermer */}
      <button
        onClick={onClose}
        aria-label="Fermer le chat"
        className="flex items-center justify-center rounded-md transition-colors"
        style={{ width: 32, height: 32, color: "#F7F3EA" }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background =
            "rgba(247,243,234,0.1)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
        }
      >
        <X strokeWidth={1.5} size={18} />
      </button>
    </div>
  );
}

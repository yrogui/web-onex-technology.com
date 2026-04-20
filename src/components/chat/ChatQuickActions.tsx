"use client";

const ACTIONS = [
  {
    label: "Audit flash 45 min",
    prefill: "Je souhaite en savoir plus sur l'audit flash.",
  },
  {
    label: "Migration CCaaS",
    prefill: "Je pilote une migration CCaaS, quels sont vos retours ?",
  },
  {
    label: "Références MA",
    prefill: "Pouvez-vous me citer des références au Maroc ?",
  },
  {
    label: "Contact direct",
    prefill: "Je souhaite être rappelé par Yassine.",
  },
];

interface ChatQuickActionsProps {
  onSelect: (text: string) => void;
}

export function ChatQuickActions({ onSelect }: ChatQuickActionsProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        padding: "4px 16px 12px",
      }}
    >
      {ACTIONS.map((action) => (
        <button
          key={action.label}
          onClick={() => onSelect(action.prefill)}
          style={{
            padding: "7px 16px",
            borderRadius: 100,
            border: "1px solid #C9CDD3",
            background: "transparent",
            fontSize: 13,
            color: "#2B3038",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "#EEE8DB";
            el.style.borderColor = "#D4803B";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "transparent";
            el.style.borderColor = "#C9CDD3";
          }}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}

"use client";

import { Message, LeadType } from "./types";

// Parser markdown inline : **gras** et [lien](url)
function parseMarkdown(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const lines = text.split("\n");

  lines.forEach((line, lineIdx) => {
    if (lineIdx > 0) nodes.push(<br key={`br-${lineIdx}`} />);

    const segments = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
    segments.forEach((seg, i) => {
      const boldMatch = seg.match(/^\*\*([^*]+)\*\*$/);
      const linkMatch = seg.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

      if (boldMatch) {
        nodes.push(<strong key={`${lineIdx}-${i}`}>{boldMatch[1]}</strong>);
      } else if (linkMatch) {
        nodes.push(
          <a
            key={`${lineIdx}-${i}`}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#D4803B", textDecoration: "underline" }}
          >
            {linkMatch[1]}
          </a>
        );
      } else if (seg) {
        nodes.push(seg);
      }
    });
  });

  return nodes;
}

// Typing indicator — 3 points rebondissants
function TypingDots() {
  return (
    <div className="flex items-center gap-1" aria-label="En train d'écrire…">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#5C6470",
            animation: `chat-dot-bounce 1.4s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// CTA urgent
function UrgentFooter() {
  return (
    <p style={{ fontSize: 12, marginTop: 8, color: "#A43B2E" }}>
      Contact immédiat :{" "}
      <a
        href="mailto:contact@onex-technology.com"
        style={{ color: "#A43B2E", textDecoration: "underline", fontWeight: 500 }}
      >
        contact@onex-technology.com
      </a>
    </p>
  );
}

// CTA hot — rdv
function HotCTA() {
  return (
    <div style={{ marginTop: 10 }}>
      <a
        href="/#contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 16px",
          border: "1px solid #D4803B",
          borderRadius: 100,
          fontSize: 13,
          color: "#D4803B",
          fontWeight: 500,
          textDecoration: "none",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#D4803B18";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
        }}
      >
        Prendre rendez-vous avec Yassine →
      </a>
    </div>
  );
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === "bot";
  const isUrgence = message.leadType === "urgence";
  const isHot = message.leadType === "hot";

  if (message.isTyping) {
    return (
      <div
        className="flex"
        style={{ justifyContent: "flex-start", marginBottom: 8 }}
      >
        <div
          style={{
            padding: "14px 18px",
            borderRadius: "12px 12px 12px 4px",
            background: "#EEE8DB",
          }}
        >
          <TypingDots />
        </div>
      </div>
    );
  }

  if (isBot && isUrgence) {
    return (
      <div style={{ marginBottom: 8, alignSelf: "flex-start", maxWidth: "82%" }}>
        <div
          style={{
            padding: "14px 18px",
            borderRadius: "12px 12px 12px 4px",
            background: "#A43B2E10",
            border: "1px solid #A43B2E40",
            fontSize: 14,
            lineHeight: 1.55,
            color: "#A43B2E",
            fontFamily: "inherit",
          }}
        >
          {parseMarkdown(message.content)}
          <UrgentFooter />
        </div>
      </div>
    );
  }

  if (isBot) {
    return (
      <div style={{ marginBottom: 8, alignSelf: "flex-start", maxWidth: "82%" }}>
        <div
          style={{
            padding: "14px 18px",
            borderRadius: "12px 12px 12px 4px",
            background: "#EEE8DB",
            fontSize: 14,
            lineHeight: 1.55,
            color: "#2B3038",
          }}
        >
          {parseMarkdown(message.content)}
          {isHot && <HotCTA />}
        </div>
        {/* Suggested actions */}
        {message.suggestedActions && message.suggestedActions.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
            {message.suggestedActions.map((action, i) => (
              <button
                key={i}
                style={{
                  padding: "6px 14px",
                  borderRadius: 100,
                  border: "1px solid #C9CDD3",
                  background: "transparent",
                  fontSize: 12,
                  color: "#2B3038",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
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
                data-action={action.action}
                data-value={action.value}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Message utilisateur
  return (
    <div
      style={{
        marginBottom: 8,
        alignSelf: "flex-end",
        maxWidth: "82%",
      }}
    >
      <div
        style={{
          padding: "14px 18px",
          borderRadius: "12px 12px 4px 12px",
          background: "#0F0F14",
          fontSize: 14,
          lineHeight: 1.55,
          color: "#F7F3EA",
        }}
      >
        {message.content}
      </div>
    </div>
  );
}

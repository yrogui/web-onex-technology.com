"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(
  () => import("./ChatWidget").then((m) => m.ChatWidget),
  { ssr: false }
);

export function ChatWidgetLoader() {
  // Feature flag : le widget n'est affiche que si NEXT_PUBLIC_CHAT_ENABLED === "true"
  // Permet de deployer le code sans activer le widget tant que le backend n8n n'est pas pret
  if (process.env.NEXT_PUBLIC_CHAT_ENABLED !== "true") {
    return null;
  }
  return <ChatWidget />;
}

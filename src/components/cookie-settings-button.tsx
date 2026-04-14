"use client";

import { Settings } from "lucide-react";

interface CookieSettingsButtonProps {
  variant?: "default" | "large";
  className?: string;
}

/**
 * Bouton pour ouvrir les paramètres cookies
 * Client Component pour éviter l'erreur de build avec les Server Components
 */
export function CookieSettingsButton({
  variant = "default",
  className = ""
}: CookieSettingsButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("openCookieSettings"));
    }
  };

  if (variant === "large") {
    return (
      <button
        onClick={handleClick}
        className={`px-8 py-4 rounded-sm bg-accent hover:bg-accent/90 text-ink font-semibold transition-all duration-200 inline-flex items-center gap-3 ${className}`}
      >
        <Settings className="h-5 w-5" />
        Gérer mes préférences cookies
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`mt-6 px-6 py-3 rounded-sm bg-accent hover:bg-accent/90 text-ink font-medium transition-all duration-200 inline-flex items-center gap-2 ${className}`}
    >
      <Settings className="h-4 w-4" />
      Gérer mes préférences cookies
    </button>
  );
}

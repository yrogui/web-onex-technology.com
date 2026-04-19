"use client";

import { Linkedin, Mail, Calendar, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { AIChatModal } from "./ai-chat-modal";

/**
 * Props pour ContactIcons
 */
interface ContactIconsProps {
  variant?: "footer" | "contact-section";
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

/**
 * Composant ContactIcons
 *
 * Affiche les icônes de contact (LinkedIn, Email, Calendly, Bot IA)
 * Design premium avec icônes carrées outline, compatible dark mode
 *
 * @param variant - Style visuel selon le contexte (footer ou section contact)
 * @param size - Taille des icônes (sm: 40px, md: 48px, lg: 56px)
 * @param showLabels - Afficher ou non les labels sous les icônes
 */
export function ContactIcons({
  variant = "footer",
  size = "md",
  showLabels = false,
}: ContactIconsProps) {
  const [showBotModal, setShowBotModal] = useState(false);

  // Écouter l'événement personnalisé pour ouvrir le modal depuis n'importe où
  useEffect(() => {
    const handleOpenBotModal = () => setShowBotModal(true);
    window.addEventListener("openBotModal", handleOpenBotModal);
    return () => window.removeEventListener("openBotModal", handleOpenBotModal);
  }, []);

  // Configuration des icônes
  const contacts = [
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/onex-technology/",
      ariaLabel: "Page LinkedIn One-X Technology",
      external: true,
      color: "hover:bg-accent/10 hover:border-accent",
    },
    {
      id: "email",
      label: "Email",
      icon: Mail,
      href: "mailto:contact@onex-technology.com",
      ariaLabel: "Envoyer un email à contact@onex-technology.com",
      external: true,
      color: "hover:bg-accent/10 hover:border-accent",
    },
    {
      id: "calendly",
      label: "Calendly",
      icon: Calendar,
      href: "https://calendly.com/yrogui/30min",
      ariaLabel: "Prendre rendez-vous sur Calendly (30 min)",
      external: true,
      color: "hover:bg-accent/10 hover:border-accent",
    },
    {
      id: "bot",
      label: "Assistant IA",
      icon: MessageCircle,
      onClick: () => setShowBotModal(true),
      ariaLabel: "Discuter avec l'assistant IA (GPT-4 + calendrier)",
      external: false,
      color: "hover:bg-accent/10 hover:border-accent",
    },
  ];

  // Tailles des icônes
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14",
  };

  const iconSizes = {
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-7 w-7",
  };

  return (
    <>
      <div
        className={`flex ${
          showLabels ? "flex-col sm:flex-row" : "flex-row"
        } items-center gap-4`}
      >
        {contacts.map((contact) => {
          const Icon = contact.icon;
          const baseClasses = `
            ${sizeClasses[size]}
            flex items-center justify-center
            rounded-xl
            border-2 border-ink/10 dark:border-white/10
            bg-transparent
            transition-all duration-300
            ${contact.color}
            group
          `;

          const content = (
            <>
              <Icon
                className={`${iconSizes[size]} text-ink dark:text-paper group-hover:text-accent dark:group-hover:text-accent-light transition-colors`}
              />
              {showLabels && (
                <span className="text-xs font-medium text-graphite dark:text-smoke mt-2">
                  {contact.label}
                </span>
              )}
            </>
          );

          // Si c'est le bot IA (onClick), rendre un bouton
          if (contact.onClick) {
            return (
              <button
                key={contact.id}
                onClick={contact.onClick}
                className={baseClasses}
                aria-label={contact.ariaLabel}
                title={contact.label}
              >
                {content}
              </button>
            );
          }

          // Sinon, rendre un lien
          return (
            <a
              key={contact.id}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className={baseClasses}
              aria-label={contact.ariaLabel}
              title={contact.label}
            >
              {content}
            </a>
          );
        })}
      </div>

      {/* Modal Chat IA */}
      {showBotModal && (
        <AIChatModal onClose={() => setShowBotModal(false)} />
      )}
    </>
  );
}

/**
 * Variante : Icônes avec labels (pour section Contact)
 */
export function ContactIconsWithLabels() {
  return <ContactIcons variant="contact-section" size="lg" showLabels={true} />;
}

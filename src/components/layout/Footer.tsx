"use client";

import { useTranslations } from "next-intl";
import { Logo } from "@/components/ui/Logo";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";
import { Linkedin, Send, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const tc = useTranslations("contact");

  const col1Links = [
    { label: t("col1Home"), href: "/" },
    { label: t("col1WhyOnex"), href: "/a-propos" },
    { label: t("col1Services"), href: "/services" },
    { label: t("col1Approche"), href: "/approche" },
    { label: t("col1Equipe"), href: "/a-propos" },
    { label: t("col1Blog"), href: "/blog" },
    { label: t("col1Contact"), href: "/contact" },
  ];

  const col2Links = [
    { label: t("col2Genesys"), href: "/#genesys" },
    { label: t("col2Aws"), href: "/#aws-connect" },
    { label: t("col2Avaya"), href: "/#avaya" },
    { label: t("col2Cx"), href: "/#optimisation-cx" },
    { label: t("col2Voicebot"), href: "/#voicebot" },
  ];

  const col3Links = [
    { label: tc("email"), href: `mailto:${tc("email")}` },
    { label: tc("phone"), href: `tel:${tc("phone").replace(/\s/g, "")}` },
    { label: tc("location"), href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-paper border-t border-paper/5">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Bio */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <Logo variant="light" size="md" href="/" />
            </div>
            <div className="mb-4">
              <BadgePartenaire variant="dark" href="https://expertiax.com" />
            </div>
            <p className="text-smoke text-sm leading-relaxed mb-6">
              {t("bio")}
            </p>

            <div className="mb-4">
              <p className="text-[11px] uppercase tracking-[0.12em] text-smoke/60 mb-3 font-semibold">
                {t("contactTitle")}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/onex-technology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("ariaLinkedIn")}
                  className="text-smoke hover:text-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://t.me/OneX_AI_Assistant_Bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("ariaTelegram")}
                  className="text-smoke hover:text-accent transition-colors"
                >
                  <Send className="h-5 w-5 rtl:scale-x-[-1]" />
                </a>
                <a
                  href={`https://wa.me/${tc("whatsapp")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("ariaWhatsApp")}
                  className="text-smoke hover:text-accent transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${tc("email")}`}
                  aria-label={t("ariaEmail")}
                  className="text-smoke hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 1 — Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-paper mb-4">
              {t("col1Title")}
            </h4>
            <ul className="space-y-3">
              {col1Links.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-smoke hover:text-paper text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — Expertises */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-paper mb-4">
              {t("col2Title")}
            </h4>
            <ul className="space-y-3">
              {col2Links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-smoke hover:text-paper text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-paper mb-4">
              {t("col3Title")}
            </h4>
            <ul className="space-y-3">
              {col3Links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-smoke hover:text-paper text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-paper/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-smoke/60 text-sm">{t("copyright")}</p>
            <div className="flex items-center gap-4">
              <a href="/mentions-legales" className="text-smoke/60 hover:text-accent-light text-xs transition-colors">
                {t("legalMentions")}
              </a>
              <a href="/politique-de-confidentialite" className="text-smoke/60 hover:text-accent-light text-xs transition-colors">
                {t("legalConfidentialite")}
              </a>
              <a href="/politique-cookies" className="text-smoke/60 hover:text-accent-light text-xs transition-colors">
                {t("legalCookies")}
              </a>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new Event("openCookieSettings"));
                  }
                }}
                className="text-smoke/60 hover:text-accent-light text-xs transition-colors cursor-pointer"
              >
                {t("legalManageCookies")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

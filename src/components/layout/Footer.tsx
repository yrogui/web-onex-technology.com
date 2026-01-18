"use client";

import { Linkedin } from "lucide-react";
import { wording } from "@/data/wording";
import { ContactIcons } from "@/components/ui/contact-icons";

export function Footer() {
  return (
    <footer className="bg-brand-noir dark:bg-black text-brand-cream border-t border-brand-noir/10 dark:border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Bio */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-brand-noir dark:text-white mb-4">
              {wording.header.name}
            </h3>
            <p className="text-brand-slate dark:text-[#94a3b8] text-sm leading-relaxed mb-6">
              {wording.footer.bio}
            </p>

            {/* Icônes de contact premium */}
            <div className="mb-4">
              <p className="text-xs uppercase tracking-wider text-brand-slate dark:text-[#94a3b8] mb-3 font-semibold">
                Nous Contacter
              </p>
              <ContactIcons variant="footer" size="md" />
            </div>
          </div>

          {/* Columns */}
          {wording.footer.columns.map((column, index) => (
            <div key={index}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-noir dark:text-white mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-brand-slate dark:text-[#94a3b8] hover:text-brand-noir dark:hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-brand-noir/10 dark:border-white/[0.05]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-brand-slate dark:text-[#94a3b8]/70 text-sm">
              {wording.footer.legal}
            </p>
            <div className="flex items-center gap-4">
              {wording.footer.legalLinks.map((link, index) => {
                // Gérer le lien "Gérer mes cookies" avec onClick
                if ((link as any).onClick === "openCookieSettings") {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new Event("openCookieSettings"));
                        }
                      }}
                      className="text-brand-slate dark:text-[#94a3b8]/70 hover:text-brand-gold dark:hover:text-brand-gold text-xs transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  );
                }

                return (
                  <a
                    key={index}
                    href={link.href}
                    className="text-brand-slate dark:text-[#94a3b8]/70 hover:text-brand-gold dark:hover:text-brand-gold text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

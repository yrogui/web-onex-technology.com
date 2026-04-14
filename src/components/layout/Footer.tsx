"use client";

import { wording } from "@/data/wording";
import { Logo } from "@/components/ui/Logo";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";
import { ContactIcons } from "@/components/ui/contact-icons";

export function Footer() {
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
              {wording.footer.bio}
            </p>

            <div className="mb-4">
              <p className="text-[11px] uppercase tracking-[0.12em] text-smoke/60 mb-3 font-semibold">
                Nous Contacter
              </p>
              <ContactIcons variant="footer" size="md" />
            </div>
          </div>

          {/* Columns */}
          {wording.footer.columns.map((column, index) => (
            <div key={index}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-paper mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
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
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-paper/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-smoke/60 text-sm">
              {wording.footer.legal}
            </p>
            <div className="flex items-center gap-4">
              {wording.footer.legalLinks.map((link, index) => {
                if ((link as any).onClick === "openCookieSettings") {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new Event("openCookieSettings"));
                        }
                      }}
                      className="text-smoke/60 hover:text-accent-light text-xs transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  );
                }

                return (
                  <a
                    key={index}
                    href={link.href}
                    className="text-smoke/60 hover:text-accent-light text-xs transition-colors"
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

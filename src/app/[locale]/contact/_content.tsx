"use client";

import { useTranslations } from "next-intl";
import { Contact } from "@/components/sections/contact";
import { Reveal } from "@/components/ui/Reveal";

export function ContactPageContent() {
  const t = useTranslations("contactPage");

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              {t("eyebrow")}
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] text-paper mb-6 max-w-3xl">
              {t("titleBefore")} <em className="italic font-display text-accent">{t("titleItalic")}</em>{t("titleAfter")}
            </h1>
            <p className="text-[17px] leading-[1.7] text-smoke max-w-2xl">
              {t("subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact section */}
      <Contact />
    </div>
  );
}

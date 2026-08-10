"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  const t = useTranslations("manifesto");
  const items = t.raw("items") as string[];

  return (
    <section className="py-24 md:py-32 bg-paper dark:bg-primary" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke mb-6">
            {t("eyebrow")}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-6xl text-ink dark:text-paper leading-tight tracking-[-0.02em]">
            {t("titleBefore")} <em className="italic">{t("titleItalic")}</em> {t("titleAfter")}
          </h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke mt-8">
            {t("signature")}
          </p>

          <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke mt-8 max-w-2xl mx-auto">
            {t("desc")}
          </p>
          <ul className="mt-6 space-y-2 inline-block text-left">
            {items.map((item, i) => (
              <li key={i} className="text-sm text-charcoal dark:text-smoke flex items-start gap-3">
                <span className="text-graphite dark:text-accent mt-0.5 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

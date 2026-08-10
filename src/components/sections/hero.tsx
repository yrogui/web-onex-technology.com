"use client";

import { useTranslations } from "next-intl";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";
import { Reveal } from "@/components/ui/Reveal";

interface Stat {
  value: string;
  label: string;
}

export function Hero() {
  const t = useTranslations("hero");
  const stats = t.raw("stats") as Stat[];

  return (
    <section
      className="relative w-full flex items-center overflow-hidden bg-paper dark:bg-primary"
      suppressHydrationWarning
    >
      <div className="w-full max-w-[1400px] mx-auto relative z-10 px-8 lg:px-16 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          <Reveal className="lg:col-span-10 lg:col-start-1">
            {/* Eyebrow */}
            <span className="inline-block mb-10 text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent">
              {t("eyebrow")}
            </span>

            {/* H1 */}
            <h1 className="font-display font-medium text-5xl lg:text-7xl tracking-[-0.02em] leading-[1.05] text-ink dark:text-paper mb-10">
              {t("titleBefore")}{" "}
              <em className="italic font-display">{t("titleItalic")}</em>{" "}
              {t("titleAfter")}
            </h1>

            {/* Sous-titre */}
            <p className="max-w-xl mb-10 text-lg leading-[1.65] text-charcoal dark:text-smoke">
              {t("subtitle")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <a
                href="https://calendly.com/yrogui/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-paper dark:bg-paper dark:text-primary text-sm font-medium tracking-wide rounded-sm hover:bg-charcoal dark:hover:bg-mist transition-colors duration-300"
              >
                {t("ctaPrimary")}
              </a>
              <a
                href="/approche"
                className="text-charcoal dark:text-accent underline underline-offset-4 hover:text-ink dark:hover:text-accent-light transition-colors text-sm md:text-base font-medium"
              >
                {t("ctaSecondary")}
              </a>
            </div>

            {/* Badge partenaire */}
            <BadgePartenaire />

            {/* KPIs */}
            <div className="mt-12 pt-10 border-t border-smoke/40 dark:border-charcoal grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display font-semibold text-3xl text-ink dark:text-accent tracking-[-0.02em]">
                    <bdi dir="ltr">{stat.value}</bdi>
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

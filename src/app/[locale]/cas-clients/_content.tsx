"use client";

import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";
import { Reveal } from "@/components/ui/Reveal";

interface CaseStudyResult {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  sector: string;
  label: string;
  agents: string;
  challenge: string;
  mission: string;
  duration: string;
  deployment: string;
  results: CaseStudyResult[];
  quote: string;
}

export function CasClientsContent() {
  const t = useTranslations("caseStudies");
  const items = t.raw("items") as CaseStudy[];

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-primary pt-40 pb-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              {t("eyebrow")}
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] text-paper mb-6 max-w-3xl">
              {t("title")}
            </h1>
            <p className="text-[17px] leading-[1.7] text-smoke max-w-2xl mb-6">
              {t("desc")}
            </p>
            <p className="text-sm text-smoke/60 italic">
              {t("anonymized")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cas clients ── */}
      {items.map((cs, index) => {
        const isDark = index % 2 !== 0;
        const bg = isDark ? "bg-primary" : "bg-paper dark:bg-primary";
        const headingColor = isDark ? "text-paper" : "text-ink dark:text-paper";
        const textColor = isDark ? "text-smoke" : "text-charcoal dark:text-smoke";
        const cardBg = isDark
          ? "bg-charcoal/30 border border-charcoal"
          : "bg-paper dark:bg-charcoal/50 border border-smoke/30 dark:border-charcoal";

        return (
          <section key={cs.id} className={`${bg} py-24`}>
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
              <Reveal className="mb-12">
                <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${isDark ? "text-accent" : "text-graphite dark:text-accent"} mb-4`}>
                  {cs.sector}
                </p>
                <h2
                  className={`font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] ${headingColor} mb-3 max-w-3xl`}
                >
                  {cs.label}
                </h2>
                <p className={`text-[15px] ${textColor}`}>{cs.agents}</p>
              </Reveal>

              {/* Enjeu / Mission / Durée */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { label: t("labelEnjeu"), value: cs.challenge },
                  { label: t("labelMission"), value: cs.mission },
                  { label: t("labelDuree"), value: cs.duration },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`${cardBg} rounded p-6`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-3">
                      {item.label}
                    </p>
                    <p
                      className={`text-sm leading-[1.6] ${textColor}`}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Déploiement */}
              <div className="mb-12 max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
                  {t("labelDeploiement")}
                </p>
                <p className={`text-[15px] leading-[1.7] ${textColor}`}>
                  {cs.deployment}
                </p>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {cs.results.map((r) => (
                  <div key={r.label} className={`${cardBg} rounded p-6`}>
                    <p className="font-display font-medium text-4xl text-accent mb-2">
                      {r.value}
                    </p>
                    <p className={`text-sm ${textColor}`}>{r.label}</p>
                  </div>
                ))}
              </div>

              {/* Citation */}
              <div className={`${cardBg} rounded p-8 max-w-3xl`}>
                <Quote
                  className="h-7 w-7 text-accent mb-5"
                  strokeWidth={1.5}
                />
                <blockquote
                  className={`font-display italic text-lg leading-[1.6] ${headingColor}`}
                >
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA finale ── */}
      <section className="bg-primary py-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <Reveal>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-paper mb-6 max-w-2xl mx-auto">
              {t("ctaTitle")}
            </h2>
            <p className="text-[16px] leading-[1.7] text-smoke max-w-xl mx-auto mb-10">
              {t("ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="inline-block px-7 py-3.5 bg-paper text-primary text-sm font-semibold tracking-wide rounded-sm hover:bg-mist transition-colors duration-300"
              >
                {t("ctaButton")}
              </a>
              <BadgePartenaire variant="dark" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

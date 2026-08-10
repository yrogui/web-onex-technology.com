"use client";

import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

interface Result {
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
  results: Result[];
  quote: string;
}

function CaseCard({ cs, t, delay }: { cs: CaseStudy; t: ReturnType<typeof useTranslations>; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="bg-paper dark:bg-charcoal/50 border border-smoke/30 dark:border-charcoal rounded overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left column */}
        <div className="lg:col-span-5 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-smoke/30 dark:border-charcoal">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-3">
            {cs.sector}
          </p>
          <h3 className="font-display font-medium text-xl md:text-2xl text-ink dark:text-paper mb-1 tracking-[-0.01em]">
            {cs.label}
          </h3>
          <p className="text-sm text-graphite dark:text-smoke mb-6">{cs.agents}</p>

          <div className="mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke mb-2">
              {t("labelEnjeu")}
            </p>
            <p className="text-[14px] leading-[1.65] text-charcoal dark:text-smoke">{cs.challenge}</p>
          </div>

          <div className="mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke mb-2">
              {t("labelMission")}
            </p>
            <p className="text-[14px] leading-[1.65] text-ink dark:text-paper font-medium">{cs.mission}</p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 dark:bg-accent-light/10 rounded-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal dark:text-accent-light">
              {t("labelDuree")} {cs.duration}
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-6">
              {t("labelResultats")}
            </p>
            <div className="grid grid-cols-2 gap-5 mb-8">
              {cs.results.map((r, i) => (
                <div key={i} className="border-l-2 border-accent/60 dark:border-accent-light pl-4">
                  <div className="font-display font-medium text-2xl md:text-3xl text-ink dark:text-paper tracking-[-0.02em] mb-1">
                    {r.value}
                  </div>
                  <div className="text-sm text-charcoal dark:text-smoke">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-smoke/30 dark:border-charcoal pt-6">
            <Quote className="h-5 w-5 text-accent/40 dark:text-accent-light/40 mb-3" />
            <p className="text-[14px] leading-[1.65] text-charcoal dark:text-smoke italic">
              &ldquo;{cs.quote}&rdquo;
            </p>
            <p className="text-xs text-graphite dark:text-smoke mt-3 uppercase tracking-[0.08em]">
              — {cs.label}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function CasClientsHome() {
  const t = useTranslations("casClientsHome");
  const tCS = useTranslations("caseStudies");
  const items = tCS.raw("items") as CaseStudy[];

  return (
    <section className="py-16 md:py-24 bg-mist dark:bg-charcoal/30" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <Reveal className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
            {t("eyebrow")}
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display font-medium text-4xl md:text-5xl text-ink dark:text-paper tracking-[-0.015em]">
              {t("titleBefore")} <em className="italic font-display">{t("titleItalic")}</em>{t("titleAfter")}
            </h2>
            <a
              href="/cas-clients"
              className="text-sm font-medium text-charcoal dark:text-accent hover:text-ink dark:hover:text-accent-light transition-colors shrink-0"
            >
              {t("ctaAll")}
            </a>
          </div>
        </Reveal>

        {/* 3 cartes uniformes */}
        <div className="space-y-8">
          {items.slice(0, 3).map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} t={t} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

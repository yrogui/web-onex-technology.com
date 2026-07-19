"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="bg-mist border border-smoke rounded overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left column */}
        <div className="lg:col-span-5 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-smoke">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-3">
            {cs.sector}
          </p>
          <h3 className="font-display font-medium text-xl md:text-2xl text-primary mb-1 tracking-[-0.01em]">
            {cs.label}
          </h3>
          <p className="text-sm text-graphite mb-6">{cs.agents}</p>

          <div className="mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite mb-2">
              {t("labelEnjeu")}
            </p>
            <p className="text-[14px] leading-[1.65] text-charcoal">{cs.challenge}</p>
          </div>

          <div className="mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite mb-2">
              {t("labelMission")}
            </p>
            <p className="text-[14px] leading-[1.65] text-primary font-medium">{cs.mission}</p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
              {t("labelDuree")} {cs.duration}
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-6">
              {t("labelResultats")}
            </p>
            <div className="grid grid-cols-2 gap-5 mb-8">
              {cs.results.map((r, i) => (
                <div key={i} className="border-l-2 border-accent pl-4">
                  <div className="font-display font-medium text-2xl md:text-3xl text-primary tracking-[-0.02em] mb-1">
                    {r.value}
                  </div>
                  <div className="text-sm text-charcoal">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-smoke pt-6">
            <Quote className="h-5 w-5 text-accent/30 mb-3" />
            <p className="text-[14px] leading-[1.65] text-charcoal italic">
              &ldquo;{cs.quote}&rdquo;
            </p>
            <p className="text-xs text-graphite mt-3 uppercase tracking-[0.08em]">
              — {cs.label}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CasClientsHome() {
  const t = useTranslations("casClientsHome");
  const tCS = useTranslations("caseStudies");
  const items = tCS.raw("items") as CaseStudy[];

  return (
    <section className="py-16 md:py-24 bg-paper" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite mb-4">
            {t("eyebrow")}
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display font-medium text-4xl md:text-5xl text-primary tracking-[-0.015em]">
              {t("titleBefore")} <em className="italic font-display">{t("titleItalic")}</em>{t("titleAfter")}
            </h2>
            <a
              href="/cas-clients"
              className="text-sm font-medium text-accent hover:text-accent-light transition-colors shrink-0"
            >
              {t("ctaAll")}
            </a>
          </div>
        </motion.div>

        {/* 3 cartes uniformes */}
        <div className="space-y-8">
          {items.slice(0, 3).map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} t={t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

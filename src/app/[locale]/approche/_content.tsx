"use client";

import { motion } from "framer-motion";
import {
  FileText, GitBranch, Calculator, CalendarDays,
  Network, FileCheck, Shield, ListChecks,
  Settings2, Plug, UserCheck, BookOpen,
  BarChart2, TrendingUp, GraduationCap, CheckCircle2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";

interface Phase {
  number: string;
  title: string;
  desc: string;
  deliverables: string[];
}

interface EngagementItem {
  title: string;
  desc: string;
}

const phaseDeliverableIcons = [
  [FileText, GitBranch, Calculator, CalendarDays],
  [Network, FileCheck, Shield, ListChecks],
  [Settings2, Plug, UserCheck, BookOpen],
  [BarChart2, TrendingUp, GraduationCap, CheckCircle2],
];

export function ApprocheContent() {
  const t = useTranslations("approche");
  const tc = useTranslations("common");
  const phases = t.raw("phases") as Phase[];
  const engagementItems = t.raw("engagementItems") as EngagementItem[];

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-primary pt-40 pb-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              {t("eyebrow")}
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] text-paper mb-6 max-w-4xl">
              {t("title")}
            </h1>
            <p className="text-[17px] leading-[1.7] text-smoke max-w-2xl mb-10">
              {t("desc")}
            </p>
            <BadgePartenaire variant="dark" />
          </motion.div>
        </div>
      </section>

      {/* ── 4 Phases ── */}
      <section id="approche" className="py-24 bg-paper dark:bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="space-y-8 mb-20">
            {phases.map((phase, index) => {
              const icons = phaseDeliverableIcons[index] ?? [];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-paper dark:bg-charcoal/50 p-10 border border-smoke/30 dark:border-charcoal hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300 rounded"
                >
                  <div className="flex items-start space-x-8">
                    <div className="flex-shrink-0">
                      <div className="font-display text-6xl text-accent/20 dark:text-accent-light/10">
                        {phase.number}
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h2 className="font-display font-medium text-3xl text-ink dark:text-paper mb-5 tracking-[-0.01em]">
                        {phase.title}
                      </h2>
                      <p className="text-charcoal dark:text-smoke mb-8 leading-[1.65] text-[15px]">
                        {phase.desc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {phase.deliverables.map((deliverable, idx) => {
                          const Icon = icons[idx];
                          return (
                            <div
                              key={idx}
                              className="flex items-center gap-3 px-4 py-3 bg-mist/60 dark:bg-primary/40 rounded-sm"
                            >
                              {Icon && (
                                <Icon className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0" />
                              )}
                              <span className="text-sm font-medium text-ink dark:text-paper/80">
                                {deliverable}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Modes d'engagement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-primary dark:bg-charcoal/70 text-paper p-12 border border-charcoal rounded"
          >
            <h3 className="font-display font-medium text-3xl text-paper mb-10 tracking-[-0.01em]">
              {t("engagementTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {engagementItems.map((item, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium mb-4 text-accent-light">
                    {item.title}
                  </h4>
                  <p className="text-smoke leading-[1.65] text-[15px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA finale ── */}
      <section className="py-24 bg-mist dark:bg-charcoal/20">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6 max-w-2xl mx-auto">
              {t("ctaTitle")}
            </h2>
            <p className="text-[16px] leading-[1.7] text-charcoal dark:text-smoke max-w-xl mx-auto mb-10">
              {t("ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="inline-block px-7 py-3.5 bg-primary dark:bg-paper text-paper dark:text-primary text-sm font-semibold tracking-wide rounded-sm hover:bg-ink dark:hover:bg-mist transition-colors duration-300"
              >
                {tc("reserverDiagnostic")}
              </a>
              <BadgePartenaire variant="light" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

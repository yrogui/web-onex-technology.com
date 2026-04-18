"use client";

import { motion } from "framer-motion";
import {
  FileText, GitBranch, Calculator, CalendarDays,
  Network, FileCheck, Shield, ListChecks,
  Settings2, Plug, UserCheck, BookOpen,
  BarChart2, TrendingUp, GraduationCap, CheckCircle2,
} from "lucide-react";
import { wording } from "@/data/wording";

// 4 icônes par phase, dans l'ordre des deliverables
const phaseDeliverableIcons = [
  [FileText, GitBranch, Calculator, CalendarDays],
  [Network, FileCheck, Shield, ListChecks],
  [Settings2, Plug, UserCheck, BookOpen],
  [BarChart2, TrendingUp, GraduationCap, CheckCircle2],
];

export function Approach() {
  return (
    <section id="approche" className="py-32 bg-paper dark:bg-primary" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
            {wording.approach.subtitle}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6">
            {wording.approach.title}
          </h2>
          <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke max-w-3xl">
            {wording.approach.description}
          </p>
        </motion.div>

        {/* Phases */}
        <div className="space-y-8 mb-20">
          {wording.approach.phases.map((phase, index) => {
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
                  <div className="flex-grow">
                    <h3 className="font-display font-medium text-3xl text-ink dark:text-paper mb-5 tracking-[-0.01em]">
                      {phase.title}
                    </h3>
                    <p className="text-charcoal dark:text-smoke mb-8 leading-[1.65] text-[15px]">
                      {phase.description}
                    </p>
                    {/* Deliverables — icônes + phrases courtes */}
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
            {wording.approach.engagement.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {wording.approach.engagement.items.map((item, index) => (
              <div key={index}>
                <h4 className="text-lg font-medium mb-4 text-accent-light">
                  {item.title}
                </h4>
                <p className="text-smoke leading-[1.65] text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

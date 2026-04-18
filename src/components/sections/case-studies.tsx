"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { wording } from "@/data/wording";

export function CaseStudies() {
  return (
    <section
      id="trajectoires"
      className="py-32 bg-mist dark:bg-charcoal/20"
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            {wording.caseStudies.subtitle}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6">
            {wording.caseStudies.title}
          </h2>
          <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke max-w-2xl">
            {wording.caseStudies.description}
          </p>
        </motion.div>

        {/* Cas clients */}
        <div className="space-y-12">
          {wording.caseStudies.items.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-paper dark:bg-charcoal/40 border border-smoke/30 dark:border-charcoal rounded overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Contexte — colonne gauche */}
                <div className="lg:col-span-5 p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-smoke/30 dark:border-charcoal">
                  {/* Sector badge */}
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-3">
                    {cs.sector}
                  </p>
                  <h3 className="font-display font-medium text-2xl text-ink dark:text-paper mb-1 tracking-[-0.01em]">
                    {cs.label}
                  </h3>
                  <p className="text-sm text-graphite dark:text-smoke mb-8">
                    {cs.agents}
                  </p>

                  {/* Challenge */}
                  <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60 mb-2">
                      ENJEU
                    </p>
                    <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Mission */}
                  <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60 mb-2">
                      MISSION
                    </p>
                    <p className="text-[15px] leading-[1.65] text-ink dark:text-paper font-medium">
                      {cs.mission}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-sm">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                      Durée : {cs.duration}
                    </span>
                  </div>
                </div>

                {/* Résultats — colonne droite */}
                <div className="lg:col-span-7 p-10 lg:p-12 flex flex-col justify-between">
                  {/* KPIs */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-8">
                      RÉSULTATS MESURÉS
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-10">
                      {cs.results.map((result, idx) => (
                        <div key={idx} className="border-l-2 border-accent pl-4">
                          <div className="font-display font-medium text-3xl text-ink dark:text-paper tracking-[-0.02em] mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-charcoal dark:text-smoke">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Citation */}
                  <div className="border-t border-smoke/30 dark:border-charcoal pt-8">
                    <Quote className="h-6 w-6 text-accent/30 mb-3" />
                    <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke italic">
                      "{cs.quote}"
                    </p>
                    <p className="text-xs text-graphite dark:text-smoke/60 mt-3 uppercase tracking-[0.08em]">
                      — {cs.label}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA discret */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-graphite dark:text-smoke mb-6">
            Vous reconnaissez votre situation dans l'une de ces trajectoires ?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary dark:bg-paper text-paper dark:text-primary text-sm font-medium tracking-wide rounded-sm hover:bg-ink dark:hover:bg-mist transition-colors duration-300"
          >
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  );
}

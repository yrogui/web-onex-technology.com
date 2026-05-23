"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { wording } from "@/data/wording";

export function CasClientsHome() {
  const { items } = wording.caseStudies;
  const banque = items[0];
  const assurance = items[1];
  const telco = items[2];

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
            CAS CLIENTS
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display font-medium text-4xl md:text-5xl text-primary tracking-[-0.015em]">
              Trois missions <em className="italic font-display">récentes</em>.
            </h2>
            <a
              href="/cas-clients"
              className="text-sm font-medium text-accent hover:text-accent-light transition-colors shrink-0"
            >
              Voir tous les cas →
            </a>
          </div>
        </motion.div>

        {/* Cas large — Banque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 bg-mist border border-smoke rounded overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Colonne gauche — contexte */}
            <div className="lg:col-span-5 p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-smoke">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-3">
                {banque.sector}
              </p>
              <h3 className="font-display font-medium text-2xl text-primary mb-1 tracking-[-0.01em]">
                {banque.label}
              </h3>
              <p className="text-sm text-graphite mb-8">{banque.agents}</p>

              <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite mb-2">
                  ENJEU
                </p>
                <p className="text-[15px] leading-[1.65] text-charcoal">
                  {banque.challenge}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite mb-2">
                  MISSION
                </p>
                <p className="text-[15px] leading-[1.65] text-primary font-medium">
                  {banque.mission}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-sm">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                  Durée : {banque.duration}
                </span>
              </div>
            </div>

            {/* Colonne droite — résultats */}
            <div className="lg:col-span-7 p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-8">
                  RÉSULTATS MESURÉS
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  {banque.results.map((r, i) => (
                    <div key={i} className="border-l-2 border-accent pl-4">
                      <div className="font-display font-medium text-3xl text-primary tracking-[-0.02em] mb-1">
                        {r.value}
                      </div>
                      <div className="text-sm text-charcoal">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-smoke pt-8">
                <Quote className="h-6 w-6 text-accent/30 mb-3" />
                <p className="text-[15px] leading-[1.65] text-charcoal italic">
                  &ldquo;{banque.quote}&rdquo;
                </p>
                <p className="text-xs text-graphite mt-3 uppercase tracking-[0.08em]">
                  — {banque.label}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2 cas compacts — Assurance + Telco */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[assurance, telco].map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col p-6 md:p-8 bg-mist border border-smoke rounded"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
                {cs.sector}
              </p>
              <h3 className="font-display font-medium text-xl md:text-2xl text-primary mb-2 tracking-[-0.01em]">
                {cs.label}
              </h3>
              <p className="text-sm text-graphite mb-4">{cs.agents}</p>
              <p className="text-sm text-charcoal leading-relaxed flex-grow">
                {cs.challenge}
              </p>
              <div className="font-mono text-xs text-graphite mt-6 pt-4 border-t border-smoke">
                {cs.results
                  .slice(0, 3)
                  .map((r) => `${r.value} ${r.label}`)
                  .join(" · ")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

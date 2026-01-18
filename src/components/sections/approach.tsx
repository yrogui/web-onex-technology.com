"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { wording } from "@/data/wording";

export function Approach() {
  return (
    <section id="approche" className="py-32 bg-brand-cream dark:bg-[#0a0c10]" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
            {wording.approach.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-noir dark:text-white mb-6 tracking-tight">
            {wording.approach.title}
          </h2>
          <p className="text-lg text-brand-slate dark:text-[#94a3b8] max-w-3xl">
            {wording.approach.description}
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-8 mb-20">
          {wording.approach.phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-[#11141a] p-10 border border-brand-noir/10 dark:border-white/[0.05] hover:border-brand-gold/30 dark:hover:border-brand-gold/30 transition-all duration-300 card-glow"
            >
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="font-serif text-6xl text-brand-gold/20 dark:text-brand-gold/10">
                    {phase.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-serif text-3xl text-brand-noir dark:text-white mb-5">
                    {phase.title}
                  </h3>
                  <p className="text-brand-slate dark:text-[#94a3b8] mb-8 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phase.deliverables.map((deliverable, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-brand-slate dark:text-[#94a3b8] flex items-start gap-3"
                      >
                        <Check className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                        <span>{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modes d'engagement */}
        <div className="bg-brand-noir dark:bg-[#11141a] text-brand-cream p-12 border border-brand-noir/10 dark:border-white/[0.05] card-glow">
          <h3 className="font-serif text-3xl text-brand-noir dark:text-white mb-10">
            {wording.approach.engagement.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {wording.approach.engagement.items.map((item, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold mb-4 text-brand-gold">
                  {item.title}
                </h4>
                <p className="text-brand-slate dark:text-[#94a3b8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

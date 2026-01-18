"use client";

import { motion } from "framer-motion";
import { wording } from "@/data/wording";

export function Team() {
  return (
    <section id="equipe" className="py-32 bg-white dark:bg-[#11141a]" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
            {wording.team.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-noir dark:text-white mb-6 tracking-tight">
            {wording.team.title}
          </h2>
          <p className="text-lg text-brand-slate dark:text-[#94a3b8] max-w-3xl mb-8">
            {wording.team.description}
          </p>
          <p className="text-base text-brand-slate dark:text-[#94a3b8] max-w-3xl italic border-l-4 border-brand-gold pl-6">
            {wording.team.philosophy}
          </p>
        </div>

        {/* Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {wording.team.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 border border-brand-noir/10 dark:border-white/[0.05] hover:border-brand-gold/30 dark:hover:border-brand-gold/30 transition-all duration-300 card-glow"
            >
              <h3 className="font-serif text-xl text-brand-noir dark:text-white mb-4">
                {value.title}
              </h3>
              <p className="text-brand-slate dark:text-[#94a3b8] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Réseau */}
        <div className="bg-brand-cream dark:bg-[#11141a] p-12 border border-brand-noir/10 dark:border-white/[0.05] card-glow">
          <p className="text-brand-slate dark:text-[#94a3b8] text-lg leading-relaxed">
            {wording.team.network}
          </p>
        </div>
      </div>
    </section>
  );
}

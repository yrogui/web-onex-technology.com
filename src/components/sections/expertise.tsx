"use client";

import { motion } from "framer-motion";
import { Heart, Headset, Cloud, Brain, Workflow, Rocket, Check } from "lucide-react";
import { wording } from "@/data/wording";

const iconMap = {
  heart: Heart,
  headset: Headset,
  cloud: Cloud,
  brain: Brain,
  workflow: Workflow,
  rocket: Rocket,
};

export function Expertise() {
  return (
    <section id="expertises" className="py-32 bg-brand-cream dark:bg-[#0a0c10]" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
            {wording.expertise.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-noir dark:text-white mb-6 tracking-tight">
            {wording.expertise.title}
          </h2>
          <p className="text-lg text-brand-slate dark:text-[#94a3b8] max-w-3xl">
            {wording.expertise.description}
          </p>
        </div>

        {/* Grille d'expertises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wording.expertise.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-[#11141a] p-10 border border-brand-noir/10 dark:border-white/[0.05] hover:border-brand-gold/30 dark:hover:border-brand-gold/30 transition-all duration-300 card-glow"
              >
                <div className="mb-6">
                  <Icon className="h-12 w-12 text-brand-gold" />
                </div>
                <h3 className="font-serif text-2xl text-brand-noir dark:text-white mb-5">
                  {item.title}
                </h3>
                <p className="text-brand-slate dark:text-[#94a3b8] mb-8 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-brand-slate dark:text-[#94a3b8] flex items-start gap-3"
                    >
                      <Check className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Résultats mesurables */}
                {item.results && item.results.length > 0 && (
                  <div className="pt-6 border-t border-brand-noir/10 dark:border-white/[0.05]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
                      RÉSULTATS CLIENTS
                    </p>
                    <ul className="space-y-2">
                      {item.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="text-xs font-medium text-brand-noir dark:text-white"
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

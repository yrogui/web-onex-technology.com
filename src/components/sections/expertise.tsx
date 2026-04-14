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
    <section id="expertises" className="py-32 bg-paper dark:bg-primary" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            {wording.expertise.subtitle}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6">
            {wording.expertise.title}
          </h2>
          <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke max-w-3xl">
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
                className="bg-paper dark:bg-charcoal/50 p-10 border border-smoke/30 dark:border-charcoal hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300 rounded"
              >
                <div className="mb-6">
                  <Icon className="h-12 w-12 text-accent dark:text-accent-light" />
                </div>
                <h3 className="font-display font-medium text-2xl text-ink dark:text-paper mb-5 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-charcoal dark:text-smoke mb-8 leading-[1.65] text-[15px]">
                  {item.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-charcoal dark:text-smoke flex items-start gap-3"
                    >
                      <Check className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Résultats mesurables */}
                {item.results && item.results.length > 0 && (
                  <div className="pt-6 border-t border-smoke/30 dark:border-charcoal">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-light mb-4">
                      RÉSULTATS CLIENTS
                    </p>
                    <ul className="space-y-2">
                      {item.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="text-xs font-medium text-ink dark:text-paper"
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

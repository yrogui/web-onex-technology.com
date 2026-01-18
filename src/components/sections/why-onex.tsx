"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Link2, Target } from "lucide-react";
import { wording } from "@/data/wording";

const iconMap = {
  globe: Globe,
  "map-pin": MapPin,
  bridge: Link2,
  target: Target,
};

export function WhyOnex() {
  return (
    <section id="a-propos" className="py-32 bg-white dark:bg-[#11141a]" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
            {wording.whyOnex.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-noir dark:text-white mb-6 tracking-tight">
            {wording.whyOnex.title}
          </h2>
          <p className="text-lg text-brand-slate dark:text-[#94a3b8] max-w-3xl">
            {wording.whyOnex.description}
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wording.whyOnex.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-10 border border-brand-noir/10 dark:border-white/[0.05] hover:border-brand-gold/30 dark:hover:border-brand-gold/30 transition-all duration-300 card-glow"
              >
                <div className="mb-6">
                  <Icon className="h-10 w-10 text-brand-gold" />
                </div>
                <h3 className="font-serif text-2xl text-brand-noir dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-brand-slate dark:text-[#94a3b8] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
    <section id="a-propos" className="py-32 bg-primary" suppressHydrationWarning>
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
            {wording.whyOnex.subtitle}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.015em] text-paper mb-6">
            {wording.whyOnex.title}
          </h2>
          <p className="text-[15px] leading-[1.65] text-smoke max-w-3xl">
            {wording.whyOnex.description}
          </p>
        </motion.div>

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
                className="p-10 border border-charcoal hover:border-accent/40 transition-all duration-300 rounded bg-charcoal/30"
              >
                <div className="mb-6">
                  <Icon className="h-10 w-10 text-accent-light" />
                </div>
                <h3 className="font-display font-medium text-2xl text-paper mb-4 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-smoke leading-[1.65] text-[15px]">
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

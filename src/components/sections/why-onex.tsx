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
  const items = wording.whyOnex.items;

  return (
    <section id="a-propos" className="py-16 md:py-24 bg-primary" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
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

        {/* Carousel mobile / grille desktop */}
        <div className="flex snap-x snap-mandatory overflow-x-auto gap-4 px-4 -mx-4 md:grid md:grid-cols-2 md:gap-6 md:px-0 md:mx-0 md:overflow-visible">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="snap-center shrink-0 w-[85%] md:w-auto md:shrink p-8 md:p-10 border border-charcoal hover:border-accent/40 transition-all duration-300 rounded bg-charcoal/30"
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
              </div>
            );
          })}
        </div>

        {/* Indicateurs scroll — mobile uniquement */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {items.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all ${i === 0 ? "w-4 h-1.5 bg-graphite" : "w-1.5 h-1.5 bg-smoke"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { wording } from "@/data/wording";

export function KPIs() {
  return (
    <section className="py-12 md:py-16 bg-paper" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto"
        >
          {wording.hero.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display font-semibold text-4xl md:text-6xl text-primary tracking-[-0.02em]">
                {stat.value}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

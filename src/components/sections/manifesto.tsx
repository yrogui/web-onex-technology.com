"use client";

import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section className="py-24 md:py-32 bg-primary" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite mb-6">
            MANIFESTE
          </p>
          <h2 className="font-display font-medium text-4xl md:text-6xl text-paper leading-tight tracking-[-0.02em]">
            Le partenaire <em className="not-italic italic">marocain</em> des programmes CX critiques.
          </h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite mt-8">
            YASSINE ROGUI · PRACTICE LEADER & PARTENAIRE TECHNIQUE
          </p>
        </motion.div>
      </div>
    </section>
  );
}

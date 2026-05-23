"use client";

import { motion } from "framer-motion";
import { wording } from "@/data/wording";

export function Manifesto() {
  return (
    <section className="py-24 md:py-32 bg-primary" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
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

          {/* WhyOnex absorbé — 1 paragraphe */}
          <p className="text-[15px] leading-[1.65] text-smoke mt-8 max-w-2xl mx-auto">
            {wording.whyOnex.description}
          </p>
          <ul className="mt-6 space-y-2 inline-block text-left">
            {[
              "Architectes CCaaS certifiés",
              "Support basé à Casablanca",
              "Bascule progressive",
              "Engagement sur les résultats",
            ].map((title, i) => (
              <li key={i} className="text-sm text-graphite flex items-start gap-3">
                <span className="text-accent mt-0.5 shrink-0">—</span>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

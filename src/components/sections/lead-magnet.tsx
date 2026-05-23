"use client";

import { motion } from "framer-motion";
import { NewsletterChecklistForm } from "@/components/NewsletterChecklistForm";

export function LeadMagnet() {
  return (
    <section className="py-16 md:py-24 bg-mist" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            RESSOURCE EXCLUSIVE
          </p>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-primary tracking-[-0.015em] mb-4">
            Checklist <em className="not-italic italic">Migration CCaaS</em> — 25 points avant go-live.
          </h2>
          <p className="text-[15px] leading-[1.65] text-charcoal mb-8">
            Un audit terrain condensé. Architecture, KPIs, points de friction. À utiliser avant chaque migration critique.
          </p>

          <NewsletterChecklistForm source="lead-magnet-home" variant="featured" />
        </motion.div>
      </div>
    </section>
  );
}

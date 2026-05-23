"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { NewsletterChecklistForm } from "@/components/NewsletterChecklistForm";

export function Newsletter() {
  const t = useTranslations("leadMagnet");

  return (
    <section
      className="py-16 md:py-24 bg-accent/5 dark:bg-charcoal/30 border-y border-accent/20 dark:border-charcoal"
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-3">
              {t("eyebrow")}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl text-ink dark:text-paper mb-6 tracking-[-0.015em]">
              {t("title")}
            </h2>
            <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke mb-4">
              {t("desc")}
            </p>
            <p className="text-base text-accent dark:text-accent-light font-medium">
              {t("leadMagnetLabel")}
            </p>
          </motion.div>

          <NewsletterChecklistForm />
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Manifesto() {
  const t = useTranslations("manifesto");
  const items = t.raw("items") as string[];

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
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-smoke mb-6">
            {t("eyebrow")}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-6xl text-paper leading-tight tracking-[-0.02em]">
            {t("titleBefore")} <em className="not-italic italic">{t("titleItalic")}</em> {t("titleAfter")}
          </h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-smoke mt-8">
            {t("signature")}
          </p>

          <p className="text-[15px] leading-[1.65] text-smoke mt-8 max-w-2xl mx-auto">
            {t("desc")}
          </p>
          <ul className="mt-6 space-y-2 inline-block text-left">
            {items.map((item, i) => (
              <li key={i} className="text-sm text-smoke flex items-start gap-3">
                <span className="text-accent mt-0.5 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

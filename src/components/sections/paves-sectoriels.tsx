"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function PavesSectoriels() {
  const t = useTranslations("pavesSectoriels");
  const sectors = t.raw("sectors") as string[];

  return (
    <section className="py-12 md:py-16 bg-paper border-t border-smoke/30" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite mb-6">
            {t("eyebrow")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {sectors.map((sector, i) => (
              <span key={sector} className="flex items-center gap-x-8">
                <span className="font-sans font-semibold text-sm uppercase tracking-[0.2em] text-graphite">
                  {sector}
                </span>
                {i < sectors.length - 1 && (
                  <span className="text-sm text-graphite/40">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

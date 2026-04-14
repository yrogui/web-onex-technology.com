"use client";

import { motion } from "framer-motion";
import { wording } from "@/data/wording";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-paper dark:bg-primary transition-colors duration-700"
      suppressHydrationWarning
    >
      <div className="w-full max-w-[1400px] mx-auto relative z-10 px-8 lg:px-16 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-10 lg:col-start-1"
          >
            {/* Eyebrow */}
            <span className="inline-block mb-10 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
              {wording.hero.eyebrow}
            </span>

            {/* H1 — sentence case, mot-clé en italic Fraunces */}
            <h1 className="font-display font-medium text-5xl lg:text-7xl tracking-[-0.02em] leading-[1.05] text-primary dark:text-paper mb-10">
              {wording.hero.title}{" "}
              <em className="not-italic italic">{wording.hero.titleItalic}</em>
            </h1>

            {/* Sous-titre */}
            <p className="max-w-xl mb-10 text-lg leading-[1.65] text-charcoal dark:text-smoke">
              {wording.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-primary dark:bg-paper text-paper dark:text-primary text-sm font-medium tracking-wide rounded-sm hover:bg-ink dark:hover:bg-mist transition-colors duration-300"
              >
                {wording.hero.ctaPrimary}
              </a>
              <a
                href="#approche"
                className="inline-block px-6 py-3 border border-ink/20 dark:border-paper/20 text-ink dark:text-paper text-sm font-medium tracking-wide rounded-sm hover:border-accent hover:text-accent dark:hover:border-accent-light dark:hover:text-accent-light transition-colors duration-300"
              >
                {wording.hero.ctaSecondary}
              </a>
            </div>

            {/* Badge partenaire */}
            <BadgePartenaire variant="light" />
          </motion.div>
        </div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-32 lg:mt-40 pt-16 border-t border-ink/10 dark:border-paper/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-12 max-w-5xl">
            {wording.hero.stats.map((stat, index) => (
              <div key={index}>
                <div className="font-display font-medium text-5xl lg:text-7xl text-accent dark:text-accent-light mb-3 tracking-[-0.02em] whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Baseline éditoriale */}
          <p className="font-display italic text-2xl text-graphite dark:text-smoke/70 mt-12">
            {wording.hero.baseline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

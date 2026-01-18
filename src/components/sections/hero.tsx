"use client";

import { motion } from "framer-motion";
import { wording } from "@/data/wording";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-brand-cream dark:bg-[#0a0c10] transition-colors duration-700" suppressHydrationWarning>
      <div className="w-full max-w-[1400px] mx-auto relative z-10 px-8 lg:px-16 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-10 lg:col-start-1"
          >
            {/* Badge */}
            <span className="inline-block px-6 py-2.5 mb-12 border border-brand-gold-dark/30 dark:border-brand-gold/20 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold-dark dark:text-brand-gold">
              {wording.hero.badge}
            </span>

            {/* Titre */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-noir dark:text-brand-cream mb-10 tracking-tighter uppercase leading-[0.95]">
              {wording.hero.title}
            </h1>

            {/* Sous-titre */}
            <p className="max-w-xl mb-16 text-base sm:text-lg md:text-xl text-brand-slate dark:text-brand-cream/50 font-light leading-[1.9]">
              {wording.hero.subtitle}
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-brand-gold text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              {wording.hero.ctaPrimary}
            </a>
          </motion.div>
        </div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-32 lg:mt-40 pt-16 border-t border-brand-noir/10 dark:border-brand-cream/6"
        >
          <div className="flex justify-between items-start max-w-5xl">
            {wording.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-gold-dark dark:text-brand-gold mb-4 tracking-[-0.03em] whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-brand-slate dark:text-brand-cream/35">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

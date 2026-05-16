"use client";

import { motion } from "framer-motion";
import { Heart, Headset, Cloud, Brain, Compass, GraduationCap } from "lucide-react";
import { wording } from "@/data/wording";

const cardIconMap = {
  heart: Heart,
  headset: Headset,
  cloud: Cloud,
  brain: Brain,
  compass: Compass,
  graduationCap: GraduationCap,
};

const expertiseAnchorMap: Record<string, string> = {
  "ccaas-migration": "/services#migration",
  "cx-optimization": "/services#cx",
  "ai-conversational": "/services#automatisation",
  "cloud-infrastructure": "/services#cloud",
  "cx-strategy": "/services#cx",
  "training-transfer": "/services",
};

export function Expertise() {
  return (
    <section id="expertises" className="py-16 md:py-24 bg-primary" suppressHydrationWarning>
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
            {wording.expertise.subtitle}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.015em] text-paper mb-6">
            {wording.expertise.title}
          </h2>
          <p className="text-[15px] leading-[1.65] text-smoke max-w-3xl">
            {wording.expertise.description}
          </p>
        </motion.div>

        {/* Grille d'expertises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wording.expertise.items.map((item, index) => {
            const CardIcon = cardIconMap[item.icon as keyof typeof cardIconMap];
            const href = expertiseAnchorMap[item.id] ?? "/services";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal/30 p-10 border border-charcoal hover:border-accent/40 transition-all duration-300 rounded"
              >
                <div className="mb-6">
                  <CardIcon className="h-12 w-12 text-accent-light" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-medium text-2xl text-paper mb-5 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-smoke mb-6 leading-[1.65] text-[15px]">
                  {item.description}
                </p>
                <a
                  href={href}
                  className="text-sm font-medium text-accent dark:text-accent-light hover:opacity-80 transition-opacity"
                >
                  En savoir plus →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

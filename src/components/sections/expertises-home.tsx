"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface ExpertiseItem {
  id: string;
  title: string;
  oneliner: string;
}

interface Partner {
  name: string;
  cert: string;
}

const ITEM_HREFS = [
  "/services#migration",
  "/services#cx",
  "/services#automatisation",
  "/services#cloud",
];

export function ExpertisesHome() {
  const t = useTranslations("expertises");
  const items = t.raw("items") as ExpertiseItem[];
  const partners = t.raw("partners") as Partner[];

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
            {t("eyebrow")}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.015em] text-paper">
            {t("titleBefore")}{" "}
            <em className="italic font-display">{t("titleItalic")}</em>
            {t("titleAfter")}
          </h2>
        </motion.div>

        {/* Carte large CCaaS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 bg-charcoal/30 border border-charcoal rounded p-10 md:p-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            {t("cardLargeEyebrow")}
          </p>
          <h3 className="font-display font-medium text-3xl md:text-4xl text-paper mb-4 tracking-[-0.015em]">
            {t("cardLargeTitle")}
          </h3>
          <p className="text-smoke leading-[1.65] text-[15px] max-w-2xl mb-8">
            {t("cardLargeDesc")}
          </p>

          {/* Tags partenaires */}
          <div className="flex flex-wrap gap-3 mb-8">
            {partners.map((p) => (
              <span
                key={p.name}
                className="px-4 py-2 bg-primary border border-charcoal rounded-sm text-sm font-medium text-smoke"
              >
                {p.name} · {p.cert}
              </span>
            ))}
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors"
          >
            {t("cardLargeCta")}
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" strokeWidth={2} />
          </a>
        </motion.div>

        {/* 4 cartes compactes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col p-6 bg-charcoal/30 border border-charcoal rounded hover:border-accent/40 transition-all duration-300"
            >
              <h3 className="font-display font-medium text-xl text-paper mb-3 tracking-[-0.01em] flex-grow-0">
                {item.title}
              </h3>
              <p className="text-smoke text-sm leading-[1.65] flex-grow mb-6">
                {item.oneliner}
              </p>
              <a
                href={ITEM_HREFS[i]}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors mt-auto"
              >
                {t("cardDetailCta")}
                <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" strokeWidth={2} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

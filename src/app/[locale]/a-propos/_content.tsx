"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";
import { Testimonials } from "@/components/sections/testimonials";

interface Valeur {
  title: string;
  desc: string;
}

interface YasStat {
  value: string;
  label: string;
}

export function AProposContent() {
  const t = useTranslations("aPropos");
  const tc = useTranslations("contact");
  const tcm = useTranslations("common");
  const valeurs = t.raw("valeurs") as Valeur[];
  const certs = t.raw("certs") as string[];
  const stack = t.raw("stack") as string[];
  const yasStats = t.raw("yasStats") as YasStat[];

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-primary pt-40 pb-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              {t("heroEyebrow")}
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] text-paper mb-6 max-w-4xl">
              {t("heroTitle")}
            </h1>
            <p className="text-[17px] leading-[1.7] text-smoke max-w-2xl mb-10">
              {t("heroDesc")}
            </p>
            <BadgePartenaire variant="dark" />
          </motion.div>
        </div>
      </section>

      {/* ── Notre histoire ── */}
      <section className="py-24 bg-paper dark:bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
              {t("histoireEyebrow")}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-10 max-w-3xl">
              {t("histoireTitle")}
            </h2>
          </motion.div>

          <div className="max-w-3xl space-y-6">
            <p className="text-[16px] leading-[1.8] text-charcoal dark:text-smoke">
              {t("histoireP1")}
            </p>
            <p className="text-[16px] leading-[1.8] text-charcoal dark:text-smoke">
              {t("histoireP2")}
            </p>
            <p className="text-[16px] leading-[1.8] text-charcoal dark:text-smoke">
              {t("histoireP3")}
            </p>
          </div>

          {/* Encadré info */}
          <div className="mt-10 inline-flex items-center gap-3 px-6 py-4 bg-mist dark:bg-charcoal/30 border border-smoke/30 dark:border-charcoal rounded-sm">
            <p className="text-sm text-charcoal dark:text-smoke">
              {t("histoireInfo")}{" "}
              <a
                href={`mailto:${tc("email")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80 transition-opacity"
              >
                {tc("email")}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-24 bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              {t("valeursEyebrow")}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-paper max-w-2xl">
              {t("valeursTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valeurs.map((v) => (
              <div
                key={v.title}
                className="bg-charcoal/30 border border-charcoal rounded p-10"
              >
                <h3 className="font-display font-medium text-2xl text-paper mb-4">
                  {v.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-smoke">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications & Stack ── */}
      <section className="py-24 bg-paper dark:bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
              {t("certsEyebrow")}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper max-w-3xl">
              {t("certsTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60 mb-6">
                {t("certsLabel")}
              </p>
              <div className="space-y-4">
                {certs.map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <Check
                      className="h-5 w-5 text-accent flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="text-[15px] text-charcoal dark:text-smoke">
                      {cert}
                    </span>
                    <span className="ml-auto px-2.5 py-1 bg-accent/10 text-accent text-[11px] font-semibold rounded-sm uppercase tracking-wider">
                      {tcm("certified")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack technique */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60 mb-6">
                {t("stackLabel")}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-mist dark:bg-charcoal/30 border border-smoke/30 dark:border-charcoal rounded-sm text-sm text-charcoal dark:text-smoke"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Yassine Rogui ── */}
      <section className="py-24 bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              {t("yasEyebrow")}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-paper max-w-2xl">
              {t("yasTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Avatar */}
            <div className="flex flex-col items-start gap-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-charcoal">
                <Image
                  src="/images/team/yassine-rogui.jpg"
                  alt={t("yasAltPhoto")}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>

              {/* Stats */}
              <div className="flex gap-10">
                {yasStats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display font-medium text-3xl text-accent">
                      {s.value}
                    </p>
                    <p className="text-xs text-smoke/70 uppercase tracking-wider mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <BadgePartenaire variant="dark" />
                <a
                  href="https://www.linkedin.com/in/yrogui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smoke hover:text-paper transition-colors"
                  aria-label={t("yasAriaLinkedIn")}
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Biographie */}
            <div className="space-y-6">
              <p className="text-[16px] leading-[1.8] text-smoke">
                {t("yasBio1")}
              </p>
              <p className="text-[16px] leading-[1.8] text-smoke">
                {t("yasBio2")}
              </p>
              <p className="text-[16px] leading-[1.8] text-smoke">
                {t("yasBio3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Témoignages ── */}
      <Testimonials />

      {/* ── CTA finale ── */}
      <section className="py-24 bg-mist dark:bg-charcoal/20">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6 max-w-2xl mx-auto">
              {t("ctaTitle")}
            </h2>
            <p className="text-[16px] leading-[1.7] text-charcoal dark:text-smoke max-w-xl mx-auto mb-10">
              {t("ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="inline-block px-7 py-3.5 bg-primary dark:bg-paper text-paper dark:text-primary text-sm font-semibold tracking-wide rounded-sm hover:bg-ink dark:hover:bg-mist transition-colors duration-300"
              >
                {t("ctaButton")}
              </a>
              <BadgePartenaire variant="light" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

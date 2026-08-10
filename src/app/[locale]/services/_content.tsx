"use client";

import { useState, useEffect } from "react";
import {
  Check,
  Mic,
  Headset,
  BarChart2,
  Quote,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";
import { FAQ } from "@/components/sections/faq";
import { Reveal } from "@/components/ui/Reveal";

interface MigrationResult {
  value: string;
  label: string;
}

interface CxCard {
  title: string;
  desc: string;
}

interface AutoCard {
  title: string;
  desc: string;
}

interface CloudCase {
  title: string;
  desc: string;
}

interface CaseStudy {
  id: string;
  label: string;
  agents: string;
  quote: string;
}

const autoIcons = [Mic, Headset, BarChart2];

export function ServicesContent() {
  const [activeSection, setActiveSection] = useState("migration");
  const t = useTranslations("services");
  const tCS = useTranslations("caseStudies");

  const caseStudyItems = tCS.raw("items") as CaseStudy[];
  const telcoCase = caseStudyItems[2];

  const migrationPoints = t.raw("migrationPoints") as string[];
  const migrationPlateformes = t.raw("migrationPlateformes") as string[];
  const migrationResults = t.raw("migrationResults") as MigrationResult[];
  const cxCards = t.raw("cxCards") as CxCard[];
  const cxStats = t.raw("cxStats") as string[];
  const autoCards = t.raw("autoCards") as AutoCard[];
  const cloudPills = t.raw("cloudPills") as string[];
  const cloudCases = t.raw("cloudCases") as CloudCase[];

  const NAV_ITEMS = [
    { label: t("navMigration"), anchor: "#migration" },
    { label: t("navCx"), anchor: "#cx" },
    { label: t("navAuto"), anchor: "#automatisation" },
    { label: t("navCloud"), anchor: "#cloud" },
  ];

  useEffect(() => {
    const sections = ["migration", "cx", "automatisation", "cloud"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    anchor: string
  ) => {
    e.preventDefault();
    const id = anchor.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-primary pt-40 pb-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              {t("eyebrow")}
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] text-paper mb-6 max-w-4xl">
              {t("title")}
            </h1>
            <p className="text-[17px] leading-[1.7] text-smoke max-w-2xl mb-10">
              {t("desc")}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="#contact-cta"
                onClick={(e) => handleNavClick(e, "#contact-cta")}
                className="inline-block px-7 py-3.5 bg-paper text-primary text-sm font-semibold tracking-wide rounded-sm hover:bg-mist transition-colors duration-300"
              >
                {t("ctaPrimary")}
              </a>
              <BadgePartenaire variant="dark" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Navigation interne ── */}
      <nav className="sticky top-20 z-40 bg-paper dark:bg-charcoal/20 py-6 border-b border-smoke/30 dark:border-charcoal">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap gap-3">
            {NAV_ITEMS.map((item) => {
              const id = item.anchor.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.anchor}
                  href={item.anchor}
                  onClick={(e) => handleNavClick(e, item.anchor)}
                  className={`px-5 py-2 rounded-sm text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-accent text-paper"
                      : "text-charcoal dark:text-smoke hover:text-ink dark:hover:text-paper"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── Migration CCaaS ── */}
      <section
        id="migration"
        className="py-24 bg-paper dark:bg-primary"
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <Reveal className="mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
              {t("migrationEyebrow")}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6 max-w-3xl">
              {t("migrationTitle")}
            </h2>
            <p className="text-[16px] leading-[1.7] text-charcoal dark:text-smoke max-w-2xl">
              {t("migrationDesc")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Points clés */}
            <div className="space-y-6">
              {migrationPoints.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <Check
                    className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <span className="text-[15px] text-charcoal dark:text-smoke leading-[1.6]">
                    {point}
                  </span>
                </div>
              ))}

              {/* Plateformes certifiées */}
              <div className="pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60 mb-4">
                  {t("migrationPlateformesLabel")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {migrationPlateformes.map((p) => (
                    <span
                      key={p}
                      className="px-4 py-2 bg-mist dark:bg-charcoal/30 border border-smoke/30 dark:border-charcoal rounded-sm text-sm font-medium text-charcoal dark:text-smoke"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Métriques */}
            <div className="bg-primary dark:bg-charcoal/30 p-8 rounded border border-charcoal">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-8">
                {t("migrationResultsLabel")}
              </p>
              <div className="space-y-8">
                {migrationResults.map((m) => (
                  <div key={m.label}>
                    <p className="font-display font-medium text-3xl text-accent mb-1">
                      {m.value}
                    </p>
                    <p className="text-sm text-smoke">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Optimisation CX ── */}
      <section id="cx" className="py-24 bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <Reveal className="mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              {t("cxEyebrow")}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-paper mb-6 max-w-3xl">
              {t("cxTitle")}
            </h2>
            <p className="text-[16px] leading-[1.7] text-smoke max-w-2xl">
              {t("cxDesc")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {cxCards.map((card) => (
              <div
                key={card.title}
                className="bg-charcoal/30 border border-charcoal rounded p-6"
              >
                <h3 className="font-display font-medium text-xl text-paper mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-smoke leading-[1.6]">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats inline */}
          <div className="flex flex-wrap gap-10">
            {cxStats.map((s) => (
              <div key={s}>
                <p className="font-display font-medium text-2xl text-accent">
                  {s}
                </p>
                <p className="text-xs text-smoke/70 uppercase tracking-wider mt-1">
                  {t("cxStatsLabel")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Automatisation IA ── */}
      <section
        id="automatisation"
        className="py-24 bg-paper dark:bg-primary"
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <Reveal className="mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
              {t("autoEyebrow")}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6 max-w-3xl">
              {t("autoTitle")}
            </h2>
            <p className="text-[16px] leading-[1.7] text-charcoal dark:text-smoke max-w-2xl">
              {t("autoDesc")}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {autoCards.map((card, i) => {
              const Icon = autoIcons[i];
              return (
                <div key={card.title} className="flex items-start gap-4">
                  <Icon
                    className="h-6 w-6 text-accent flex-shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="font-display font-medium text-lg text-ink dark:text-paper mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-charcoal dark:text-smoke leading-[1.6]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Témoignage */}
          <div className="bg-primary dark:bg-charcoal/30 border border-charcoal rounded p-8 max-w-3xl">
            <Quote
              className="h-8 w-8 text-accent mb-6"
              strokeWidth={1.5}
            />
            <blockquote className="font-display italic text-xl text-paper leading-[1.6] mb-6">
              &ldquo;{telcoCase.quote}&rdquo;
            </blockquote>
            <p className="text-sm text-smoke">
              {telcoCase.label} · {telcoCase.agents}
            </p>
          </div>
        </div>
      </section>

      {/* ── Architecture Cloud ── */}
      <section id="cloud" className="py-24 bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <Reveal className="mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              {t("cloudEyebrow")}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-paper mb-6 max-w-3xl">
              {t("cloudTitle")}
            </h2>
            <p className="text-[16px] leading-[1.7] text-smoke max-w-2xl">
              {t("cloudDesc")}
            </p>
          </Reveal>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 mb-16">
            {cloudPills.map((pill) => (
              <span
                key={pill}
                className="px-5 py-2.5 bg-charcoal/30 border border-charcoal rounded-sm text-sm font-medium text-paper"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Cas d'usage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cloudCases.map((c) => (
              <div
                key={c.title}
                className="bg-charcoal/30 border border-charcoal rounded p-6"
              >
                <h3 className="font-display font-medium text-lg text-paper mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-smoke leading-[1.6]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── CTA finale ── */}
      <section
        id="contact-cta"
        className="py-24 bg-mist dark:bg-charcoal/20"
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <Reveal>
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
                {t("ctaPrimary")}
              </a>
              <BadgePartenaire variant="light" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

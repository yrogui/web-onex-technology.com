"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";
import { Link } from "@/i18n/routing";
import { perspectives } from "@/data/perspectives";

type Locale = "fr" | "en" | "ar";

const MONTHS: Record<string, number> = {
  // FR
  JANVIER: 0, FÉVRIER: 1, FEVRIER: 1, MARS: 2, AVRIL: 3, MAI: 4, JUIN: 5,
  JUILLET: 6, AOÛT: 7, AOUT: 7, SEPTEMBRE: 8, OCTOBRE: 9, NOVEMBRE: 10,
  DÉCEMBRE: 11, DECEMBRE: 11,
  // EN
  JANUARY: 0, FEBRUARY: 1, MARCH: 2, APRIL: 3, MAY: 4, JUNE: 5,
  JULY: 6, AUGUST: 7, SEPTEMBER: 8, OCTOBER: 9, NOVEMBER: 10, DECEMBER: 11,
  // AR
  يناير: 0, فبراير: 1, مارس: 2, أبريل: 3, مايو: 4, يونيو: 5,
  يوليو: 6, أغسطس: 7, سبتمبر: 8, أكتوبر: 9, نوفمبر: 10, ديسمبر: 11,
};

const PAGE_SIZE = 9;

function parseDate(dateStr: string): number {
  const parts = dateStr.split(" ");
  if (parts.length !== 3) return -Infinity;
  const [day, monthStr, year] = parts;
  const month = MONTHS[monthStr.toUpperCase()] ?? MONTHS[monthStr];
  if (month === undefined) return -Infinity;
  return new Date(parseInt(year), month, parseInt(day)).getTime();
}

const CONTENT: Record<Locale, {
  eyebrow: string;
  h1a: string;
  h1b: string;
  desc: string;
  all: string;
  readMore: string;
  noResults: string;
  prev: string;
  next: string;
}> = {
  fr: {
    eyebrow: "PERSPECTIVES · LONGUES LECTURES",
    h1a: "Perspectives sur",
    h1b: "le CX au Maroc.",
    desc: "Analyses de fond, prises de position et retours terrain sur les programmes CCaaS, l'expérience client et l'IA conversationnelle pour les grands comptes marocains.",
    all: "Tout",
    readMore: "Lire l'analyse",
    noResults: "Aucune perspective publiée dans cette catégorie.",
    prev: "Précédent",
    next: "Suivant",
  },
  en: {
    eyebrow: "PERSPECTIVES · LONG READS",
    h1a: "Perspectives on",
    h1b: "CX in Morocco.",
    desc: "In-depth analyses, position papers and field insights on CCaaS programmes, customer experience and conversational AI for Moroccan large accounts.",
    all: "All",
    readMore: "Read analysis",
    noResults: "No perspectives published in this category.",
    prev: "Previous",
    next: "Next",
  },
  ar: {
    eyebrow: "منظورات · قراءات مطوّلة",
    h1a: "منظورات حول",
    h1b: "تجربة العملاء في المغرب.",
    desc: "تحليلات معمّقة ومواقف وتجارب ميدانية حول برامج CCaaS وتجربة العملاء والذكاء الاصطناعي التحادثي للحسابات الكبرى المغربية.",
    all: "الكل",
    readMore: "اقرأ التحليل",
    noResults: "لا توجد منظورات منشورة في هذه الفئة.",
    prev: "السابق",
    next: "التالي",
  },
};

export default function PerspectivesPage() {
  const params = useParams();
  const locale = (params?.locale as Locale) ?? "fr";
  const c = CONTENT[locale] ?? CONTENT.fr;
  const targetLang = locale === "en" ? "en" : locale === "ar" ? "ar" : "fr";

  const [activeCategory, setActiveCategory] = useState("ALL");
  const [page, setPage] = useState(1);

  const published = useMemo(
    () =>
      perspectives
        .filter((p) => p.status === "published" && p.lang === targetLang)
        .sort((a, b) => parseDate(b.date) - parseDate(a.date)),
    [targetLang]
  );

  const categories = useMemo(
    () => [...new Set(published.map((p) => p.category))].sort(),
    [published]
  );

  const filtered = useMemo(
    () =>
      activeCategory === "ALL"
        ? published
        : published.filter((p) => p.category === activeCategory),
    [published, activeCategory]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setPage(1);
  }

  return (
    <div className="min-h-screen bg-paper dark:bg-primary pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 border-b border-charcoal">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            {c.eyebrow}
          </p>
          <h1 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] text-paper mb-6 max-w-4xl">
            {c.h1a} <em>{c.h1b}</em>
          </h1>
          <p className="text-[16px] leading-[1.7] text-smoke max-w-2xl">
            {c.desc}
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="bg-paper dark:bg-primary border-b border-smoke/30 dark:border-charcoal sticky top-20 z-40 py-4">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategory("ALL")}
              className={`px-4 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.1em] transition-colors duration-200 ${
                activeCategory === "ALL"
                  ? "bg-accent text-paper"
                  : "text-graphite dark:text-smoke border border-smoke/40 dark:border-charcoal hover:text-ink dark:hover:text-paper hover:border-accent/40"
              }`}
            >
              {c.all}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`px-4 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.1em] transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-accent text-paper"
                    : "text-graphite dark:text-smoke border border-smoke/40 dark:border-charcoal hover:text-ink dark:hover:text-paper hover:border-accent/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          {paged.length === 0 ? (
            <p className="text-center text-graphite dark:text-smoke py-32 text-[15px]">
              {c.noResults}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paged.map((p) => (
                <Link
                  key={p.id}
                  href={`/perspectives/${p.slug}`}
                  className="group"
                >
                  <article className="bg-paper dark:bg-charcoal/30 border border-smoke/30 dark:border-charcoal hover:border-accent/40 dark:hover:border-accent/40 rounded transition-all duration-300 h-full flex flex-col">
                    {/* Category tag */}
                    <div className="px-6 pt-6 pb-0">
                      <span className="inline-block px-3 py-1 text-accent bg-accent/10 text-[9px] font-bold uppercase tracking-[0.1em] rounded-sm">
                        {p.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="font-display font-medium text-xl tracking-[-0.01em] leading-[1.25] text-ink dark:text-paper mb-3 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                        {p.title}
                      </h2>
                      <p className="text-sm text-charcoal dark:text-smoke leading-[1.65] flex-grow mb-5">
                        {p.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-smoke/20 dark:border-charcoal mt-auto">
                        <div className="flex items-center gap-3 text-[11px] text-graphite dark:text-smoke/70">
                          <span className="flex items-center gap-1">
                            <CalendarDays className="h-3 w-3" strokeWidth={1.5} />
                            {p.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" strokeWidth={1.5} />
                            {p.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-accent dark:text-accent-light text-[11px] font-medium group-hover:gap-2 transition-all">
                          {c.readMore}
                          <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-6 mt-16">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-6 py-2.5 text-sm font-medium text-charcoal dark:text-smoke border border-smoke/40 dark:border-charcoal rounded-sm hover:border-accent/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {c.prev}
              </button>
              <span className="text-sm text-graphite dark:text-smoke tabular-nums">
                {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-6 py-2.5 text-sm font-medium text-charcoal dark:text-smoke border border-smoke/40 dark:border-charcoal rounded-sm hover:border-accent/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                {c.next}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

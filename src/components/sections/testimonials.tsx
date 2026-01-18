"use client";

import { Quote, Linkedin, Star } from "lucide-react";
import { wording } from "@/data/wording";

/**
 * Section Témoignages Clients
 *
 * Affiche les témoignages de clients satisfaits pour renforcer la crédibilité
 * et la preuve sociale. Design sobre et premium, cohérent avec l'identité ONEX.
 *
 * Impact attendu : +15-25% de conversion (source : VWO B2B CRO Studies)
 */
export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-white dark:bg-[#0a0c10]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            {wording.testimonials.badge}
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-noir dark:text-white mb-6">
            {wording.testimonials.title}
          </h2>
          <p className="text-lg text-brand-slate dark:text-[#94a3b8] leading-relaxed">
            {wording.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {wording.testimonials.items.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-brand-slate dark:text-[#94a3b8] mb-6">
            {wording.testimonials.cta.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Lien LinkedIn */}
            {wording.testimonials.cta.linkedinUrl && (
              <a
                href={wording.testimonials.cta.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-brand-noir dark:border-white text-brand-noir dark:text-white hover:bg-brand-noir/5 dark:hover:bg-white/5 transition-all duration-200 font-medium"
              >
                <Linkedin className="h-5 w-5" />
                Voir plus de recommandations
              </a>
            )}

            {/* CTA Contact */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold/90 text-brand-noir font-medium transition-all duration-200"
            >
              Parler à un architecte CCaaS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Carte de témoignage individuelle
 */
interface TestimonialCardProps {
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    context?: string;
    rating?: number;
  };
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <div
      className="
        relative p-8 rounded-2xl
        bg-brand-cream dark:bg-[#1a1c20]
        border border-brand-noir/10 dark:border-white/[0.05]
        hover:border-brand-gold/30 dark:hover:border-brand-gold/30
        transition-all duration-300
        group
        hover:-translate-y-1
        hover:shadow-xl
      "
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote className="h-10 w-10 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors duration-300" />
      </div>

      {/* Citation */}
      <blockquote className="mb-6">
        <p className="text-brand-slate dark:text-[#94a3b8] leading-relaxed text-base italic">
          "{testimonial.quote}"
        </p>
      </blockquote>

      {/* Rating (si disponible) */}
      {testimonial.rating && (
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating!
                  ? "text-brand-gold fill-brand-gold"
                  : "text-brand-slate/30 dark:text-[#94a3b8]/30"
              }`}
            />
          ))}
        </div>
      )}

      {/* Auteur */}
      <div className="pt-4 border-t border-brand-noir/10 dark:border-white/[0.05]">
        <p className="font-semibold text-brand-noir dark:text-white mb-1">
          {testimonial.author}
        </p>
        <p className="text-sm text-brand-slate dark:text-[#94a3b8] mb-1">
          {testimonial.role}
        </p>
        <p className="text-sm text-brand-gold font-medium">
          {testimonial.company}
        </p>
        {testimonial.context && (
          <p className="text-xs text-brand-slate/70 dark:text-[#94a3b8]/70 mt-2">
            {testimonial.context}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * Variante : Carrousel (Alternative Design)
 *
 * Si vous préférez un carrousel plutôt qu'une grille,
 * décommentez ce composant et utilisez-le à la place.
 */
/*
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = wording.testimonials.items;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="temoignages" className="py-24 bg-white dark:bg-[#0a0c10]">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-brand-noir dark:text-white mb-4">
            {wording.testimonials.title}
          </h2>
          <p className="text-lg text-brand-slate dark:text-[#94a3b8]">
            {wording.testimonials.subtitle}
          </p>
        </div>

        <div className="relative">
          <TestimonialCard testimonial={testimonials[currentIndex]} index={0} />

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={previous}
              className="p-3 rounded-full bg-brand-noir/5 dark:bg-white/5 hover:bg-brand-gold/20 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-5 w-5 text-brand-noir dark:text-white" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-brand-gold"
                      : "w-2 bg-brand-slate/30 dark:bg-[#94a3b8]/30"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-brand-noir/5 dark:bg-white/5 hover:bg-brand-gold/20 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-5 w-5 text-brand-noir dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
*/

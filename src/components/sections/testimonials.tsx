"use client";

import { Quote, Linkedin, Star } from "lucide-react";
import { wording } from "@/data/wording";

export function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-paper dark:bg-primary">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent dark:text-accent-light text-sm font-medium mb-6 rounded-sm">
            <Star className="h-4 w-4 fill-current" />
            {wording.testimonials.badge}
          </div>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-ink dark:text-paper mb-6 tracking-[-0.015em]">
            {wording.testimonials.title}
          </h2>
          <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke">
            {wording.testimonials.subtitle}
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {wording.testimonials.items.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-charcoal dark:text-smoke mb-6">
            {wording.testimonials.cta.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {wording.testimonials.cta.linkedinUrl && (
              <a
                href={wording.testimonials.cta.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border-2 border-ink dark:border-paper text-ink dark:text-paper hover:bg-ink/5 dark:hover:bg-paper/5 transition-all duration-200 font-medium text-sm"
              >
                <Linkedin className="h-5 w-5" />
                Voir plus de recommandations
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-accent hover:bg-accent/90 text-paper font-medium text-sm transition-all duration-200"
            >
              Parler à un architecte CCaaS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      className="relative p-8 rounded bg-paper dark:bg-charcoal/50 border border-smoke/30 dark:border-charcoal hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300 group hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote className="h-10 w-10 text-accent/20 dark:text-accent-light/20 group-hover:text-accent/40 dark:group-hover:text-accent-light/40 transition-colors duration-300" />
      </div>

      {/* Citation */}
      <blockquote className="mb-6">
        <p className="text-charcoal dark:text-smoke leading-[1.65] text-[15px] italic">
          "{testimonial.quote}"
        </p>
      </blockquote>

      {/* Rating */}
      {testimonial.rating && (
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating!
                  ? "text-accent fill-accent dark:text-accent-light dark:fill-accent-light"
                  : "text-smoke/30"
              }`}
            />
          ))}
        </div>
      )}

      {/* Auteur */}
      <div className="pt-4 border-t border-smoke/30 dark:border-charcoal">
        <p className="font-medium text-ink dark:text-paper mb-1">
          {testimonial.author}
        </p>
        <p className="text-sm text-graphite dark:text-smoke mb-1">
          {testimonial.role}
        </p>
        <p className="text-sm text-accent dark:text-accent-light font-medium">
          {testimonial.company}
        </p>
        {testimonial.context && (
          <p className="text-xs text-graphite/70 dark:text-smoke/70 mt-2">
            {testimonial.context}
          </p>
        )}
      </div>
    </div>
  );
}

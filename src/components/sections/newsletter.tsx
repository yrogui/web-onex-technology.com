"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { wording } from "@/data/wording";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Intégrer avec n8n ou votre service d'emailing
    // Pour l'instant, simulons l'envoi
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  return (
    <section
      className="py-20 bg-brand-gold/5 dark:bg-[#11141a] border-y border-brand-gold/20 dark:border-white/[0.05]"
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
              {wording.newsletter.subtitle}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-noir dark:text-white mb-6 tracking-tight">
              {wording.newsletter.title}
            </h2>
            <p className="text-lg text-brand-slate dark:text-[#94a3b8] mb-4">
              {wording.newsletter.description}
            </p>
            <p className="text-base text-brand-gold font-medium">
              {wording.newsletter.leadMagnet}
            </p>
          </div>

          {/* Form or Success Message */}
          {!isSubscribed ? (
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto"
              suppressHydrationWarning
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-grow relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-slate dark:text-[#94a3b8]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={wording.newsletter.placeholders.email}
                    className="w-full pl-12 pr-5 py-4 bg-white dark:bg-[#0a0c10] border border-brand-noir/20 dark:border-white/[0.05] text-brand-noir dark:text-white placeholder:text-brand-slate/50 dark:placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-brand-gold transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-brand-gold text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isLoading ? "Envoi..." : wording.newsletter.button}
                </button>
              </div>
              <p className="text-xs text-brand-slate dark:text-[#94a3b8]/70 text-center">
                {wording.newsletter.rgpd}
              </p>
            </form>
          ) : (
            <div className="max-w-2xl mx-auto p-8 bg-brand-gold/10 border border-brand-gold/30 dark:bg-brand-gold/5">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-brand-gold" />
                <h3 className="font-serif text-2xl text-brand-noir dark:text-white">
                  Merci pour votre inscription !
                </h3>
              </div>
              <p className="text-brand-slate dark:text-[#94a3b8]">
                Vous allez recevoir votre checklist par email dans quelques
                instants. Pensez à vérifier vos spams.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";
import { wording } from "@/data/wording";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  return (
    <section
      className="py-20 bg-accent/5 dark:bg-charcoal/30 border-y border-accent/20 dark:border-charcoal"
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-3">
              {wording.newsletter.subtitle}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl text-ink dark:text-paper mb-6 tracking-[-0.015em]">
              {wording.newsletter.title}
            </h2>
            <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke mb-4">
              {wording.newsletter.description}
            </p>
            <p className="text-base text-accent dark:text-accent-light font-medium">
              {wording.newsletter.leadMagnet}
            </p>
          </motion.div>

          {!isSubscribed ? (
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto"
              suppressHydrationWarning
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-grow relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-graphite dark:text-smoke" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={wording.newsletter.placeholders.email}
                    className="w-full pl-12 pr-5 py-4 bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50 focus:outline-none focus:border-accent transition-colors rounded-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-accent text-paper text-sm font-medium tracking-wide hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap rounded-sm"
                >
                  {isLoading ? "Envoi..." : wording.newsletter.button}
                </button>
              </div>
              <p className="text-xs text-graphite dark:text-smoke/70 text-center">
                {wording.newsletter.rgpd}
              </p>
            </form>
          ) : (
            <div className="max-w-2xl mx-auto p-8 bg-accent/10 border border-accent/30 rounded">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-accent dark:text-accent-light" />
                <h3 className="font-display font-medium text-2xl text-ink dark:text-paper">
                  Merci pour votre inscription !
                </h3>
              </div>
              <p className="text-charcoal dark:text-smoke">
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

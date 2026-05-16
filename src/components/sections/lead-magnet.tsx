"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !rgpd) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-16 md:py-24 bg-mist" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            RESSOURCE EXCLUSIVE
          </p>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-primary tracking-[-0.015em] mb-4">
            Checklist <em className="not-italic italic">Migration CCaaS</em> — 12 points avant go-live.
          </h2>
          <p className="text-[15px] leading-[1.65] text-charcoal mb-8">
            Un audit terrain condensé. Architecture, KPIs, points de friction. À utiliser avant chaque migration critique.
          </p>

          {status === "success" ? (
            <div className="px-6 py-4 bg-primary text-paper text-sm font-medium rounded-sm text-center">
              Checklist envoyée. Vérifiez votre boîte mail.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full border border-charcoal bg-white px-4 py-3 rounded-sm text-ink placeholder:text-graphite/60 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={!rgpd || status === "loading"}
                className="w-full px-6 py-3 bg-primary text-paper text-sm font-medium tracking-wide rounded-sm hover:bg-ink transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Envoi…" : "Recevoir la checklist"}
              </button>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rgpd}
                  onChange={(e) => setRgpd(e.target.checked)}
                  className="mt-1 shrink-0 accent-accent"
                />
                <span className="text-xs text-charcoal leading-relaxed">
                  J&apos;accepte de recevoir le PDF et les communications One-X Technology. Conformément au RGPD, vous pouvez vous désinscrire à tout moment.{" "}
                  <a href="/politique-de-confidentialite" className="underline hover:text-accent transition-colors">
                    Politique de confidentialité.
                  </a>
                </span>
              </label>
              {status === "error" && (
                <p className="text-xs text-red-600">Une erreur est survenue. Réessayez.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

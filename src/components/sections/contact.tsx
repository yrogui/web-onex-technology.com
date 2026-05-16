"use client";
import { useState, FormEvent } from "react";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Calendar, Linkedin, Send } from "lucide-react";
import { wording } from "@/data/wording";
import { ContactIcons } from "@/components/ui/contact-icons";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    const fd = new FormData(e.currentTarget);
    try {
      const params = new URLSearchParams();
        params.append("name", fd.get("name") as string);
        params.append("email", fd.get("email") as string);
        params.append("phone", (fd.get("phone") as string) || "");
        params.append("agents", (fd.get("agents") as string) || "");
        params.append("project", (fd.get("project") as string) || "");
        params.append("website", (fd.get("website") as string) || "");
        params.append("sessionId", "contact_" + Date.now());
        const res = await fetch("https://flow.onextechnology.cloud/webhook/contact-form", {
          method: "POST",
          body: params,
        });
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-mist dark:bg-charcoal/30"
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
            {wording.contact.subtitle}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6">
            {wording.contact.title}
          </h2>
        </motion.div>

        {/* Méthodes de Contact Rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-lg font-medium text-ink dark:text-paper mb-8 text-center">
              Choisissez votre méthode de contact préférée
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {/* LinkedIn */}
              <a
                href={wording.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded bg-paper dark:bg-charcoal/50 border-2 border-smoke/30 dark:border-charcoal hover:border-accent dark:hover:border-accent-light transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded bg-graphite/10 dark:bg-smoke/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 dark:group-hover:bg-accent/10 transition-colors">
                    <Linkedin className="h-7 w-7 text-graphite dark:text-smoke group-hover:text-accent dark:group-hover:text-accent-light transition-colors" />
                  </div>
                  <h4 className="font-medium text-ink dark:text-paper mb-2">
                    LinkedIn
                  </h4>
                  <p className="text-sm text-graphite dark:text-smoke">
                    Message professionnel
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${wording.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded bg-paper dark:bg-charcoal/50 border-2 border-smoke/30 dark:border-charcoal hover:border-accent dark:hover:border-accent-light transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded bg-graphite/10 dark:bg-smoke/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 dark:group-hover:bg-accent/10 transition-colors">
                    <Mail className="h-7 w-7 text-graphite dark:text-smoke group-hover:text-accent dark:group-hover:text-accent-light transition-colors" />
                  </div>
                  <h4 className="font-medium text-ink dark:text-paper mb-2">
                    Email
                  </h4>
                  <p className="text-sm text-graphite dark:text-smoke">
                    Réponse sous 24h
                  </p>
                </div>
              </a>

              {/* Calendly (Recommandé) */}
              <a
                href={wording.contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded bg-paper dark:bg-charcoal/50 border-2 border-smoke/30 dark:border-charcoal hover:border-accent dark:hover:border-accent-light transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-sm bg-accent text-paper text-xs font-medium">
                    <Calendar className="h-3 w-3" />
                    RECOMMANDÉ
                  </span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded bg-graphite/10 dark:bg-smoke/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 dark:group-hover:bg-accent/10 transition-colors">
                    <Calendar className="h-7 w-7 text-graphite dark:text-smoke group-hover:text-accent dark:group-hover:text-accent-light transition-colors" />
                  </div>
                  <h4 className="font-medium text-ink dark:text-paper mb-2">
                    Calendly
                  </h4>
                  <p className="text-sm text-graphite dark:text-smoke">
                    RDV immédiat (30 min)
                  </p>
                </div>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/OneX_AI_Assistant_Bot"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded bg-paper dark:bg-charcoal/50 border-2 border-smoke/30 dark:border-charcoal hover:border-accent dark:hover:border-accent-light transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded bg-graphite/10 dark:bg-smoke/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 dark:group-hover:bg-accent/10 transition-colors">
                    <Send className="h-7 w-7 text-graphite dark:text-smoke group-hover:text-accent dark:group-hover:text-accent-light transition-colors" />
                  </div>
                  <h4 className="font-medium text-ink dark:text-paper mb-2">
                    Telegram
                  </h4>
                  <p className="text-sm text-graphite dark:text-smoke">
                    Bot IA instantané
                  </p>
                </div>
              </a>

              {/* Bot IA */}
              <button
                onClick={() => {
                  const event = new CustomEvent("openBotModal");
                  window.dispatchEvent(event);
                }}
                className="group relative p-6 rounded bg-paper dark:bg-charcoal/50 border-2 border-smoke/30 dark:border-charcoal hover:border-accent dark:hover:border-accent-light transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded bg-graphite/10 dark:bg-smoke/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 dark:group-hover:bg-accent/10 transition-colors">
                    <MessageCircle className="h-7 w-7 text-graphite dark:text-smoke group-hover:text-accent dark:group-hover:text-accent-light transition-colors" />
                  </div>
                  <h4 className="font-medium text-ink dark:text-paper mb-2">
                    Assistant IA
                  </h4>
                  <p className="text-sm text-graphite dark:text-smoke">
                    Réponses instantanées
                  </p>
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-medium text-2xl text-ink dark:text-paper mb-8 tracking-[-0.01em]">
              Coordonnées directes
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-accent dark:text-accent-light flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-graphite dark:text-smoke mb-1">Email</p>
                  <a
                    href={`mailto:${wording.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink dark:text-paper hover:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    {wording.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-accent dark:text-accent-light flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-graphite dark:text-smoke mb-1">Téléphone</p>
                  <a
                    href={`tel:${wording.contact.phone.replace(/\s/g, "")}`}
                    className="text-ink dark:text-paper hover:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    {wording.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-accent dark:text-accent-light flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-graphite dark:text-smoke mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${wording.contact.whatsapp.replace(/\s/g, "")}`}
                    className="text-ink dark:text-paper hover:text-accent dark:hover:text-accent-light transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {wording.contact.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-accent dark:text-accent-light flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-graphite dark:text-smoke mb-1">Localisation</p>
                  <p className="text-ink dark:text-paper">{wording.contact.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            suppressHydrationWarning
          >
            <h3 className="font-display font-medium text-2xl text-ink dark:text-paper mb-4 tracking-[-0.01em]">
              {wording.contact.form.title}
            </h3>
            <p className="text-charcoal dark:text-smoke mb-8 text-[15px] leading-[1.65]">
              {wording.contact.form.subtitle}
            </p>

            <form className="space-y-5" onSubmit={handleSubmit} suppressHydrationWarning>
              <input
                type="text"
                name="name"
                placeholder={wording.contact.form.placeholders.name}
                className="w-full px-5 py-4 bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50 focus:outline-none focus:border-accent transition-colors rounded-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={wording.contact.form.placeholders.email}
                className="w-full px-5 py-4 bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50 focus:outline-none focus:border-accent transition-colors rounded-sm"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={wording.contact.form.placeholders.phone}
                className="w-full px-5 py-4 bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50 focus:outline-none focus:border-accent transition-colors rounded-sm"
              />
              <input
                type="text"
                name="agents"
                placeholder={wording.contact.form.placeholders.agents}
                className="w-full px-5 py-4 bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50 focus:outline-none focus:border-accent transition-colors rounded-sm"
              />
              <textarea
                rows={5}
                name="project"
                placeholder={wording.contact.form.placeholders.project}
                className="w-full px-5 py-4 bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50 focus:outline-none focus:border-accent transition-colors resize-none rounded-sm"
                required
              />

              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="space-y-2 pt-2">
                <p className="text-xs text-graphite dark:text-smoke">{wording.contact.form.microcopy.responseTime}</p>
                <p className="text-xs text-graphite dark:text-smoke">{wording.contact.form.microcopy.confidentiality}</p>
                <p className="text-xs text-graphite dark:text-smoke">{wording.contact.form.microcopy.noCommitment}</p>
              </div>

              {formStatus === "success" ? (
                <div className="w-full px-8 py-4 bg-success/10 border border-success/30 text-success text-sm font-medium text-center rounded-sm">
                  Message envoy\u00e9 ! Nous vous r\u00e9pondons sous 24h.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full px-8 py-4 bg-primary dark:bg-accent text-paper text-sm font-medium tracking-wide rounded-sm transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                >
                  {formStatus === "sending" ? "Envoi en cours..." : formStatus === "error" ? "R\u00e9essayer" : wording.contact.form.submit}
                </button>
              )}
              {formStatus === "error" && (
                <p className="text-error text-sm text-center mt-2">Une erreur est survenue. R\u00e9essayez ou contactez-nous par email.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

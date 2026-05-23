"use client";
import { useState, FormEvent } from "react";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { wording } from "@/data/wording";

const inputClasses =
  "w-full px-4 py-3 bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50 focus:outline-none focus:border-accent transition-colors rounded-sm text-sm";

const selectClasses =
  "w-full px-4 py-3 bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal text-ink dark:text-paper focus:outline-none focus:border-accent transition-colors rounded-sm text-sm appearance-none cursor-pointer";

export function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    const fd = new FormData(e.currentTarget);
    try {
      const params = new URLSearchParams();
      params.append("source", "contact-qualification");
      params.append("name", fd.get("nom") as string);
      params.append("entreprise", fd.get("entreprise") as string);
      params.append("email", fd.get("email") as string);
      params.append("phone", (fd.get("telephone") as string) || "");
      params.append("typeBesoin", (fd.get("typeBesoin") as string) || "");
      params.append("tailleCentre", (fd.get("tailleCentre") as string) || "");
      params.append("delai", (fd.get("delai") as string) || "");
      params.append("project", (fd.get("message") as string) || "");
      params.append("sessionId", "contact_" + Date.now());
      const res = await fetch("https://flow.onextechnology.cloud/webhook/contact-form", {
        method: "POST",
        body: params,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Colonne gauche — Formulaire de qualification */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-light mb-3">
              FORMULAIRE DE QUALIFICATION
            </p>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-ink dark:text-paper mb-2 tracking-[-0.01em]">
              Décrivez votre projet
            </h2>
            <p className="text-sm text-charcoal dark:text-smoke mb-8 leading-[1.65]">
              Ces informations nous permettent de préparer un échange pertinent.
            </p>

            {formStatus === "success" ? (
              <div className="p-8 bg-accent/10 border border-accent/30 rounded-sm text-center">
                <p className="font-medium text-ink dark:text-paper mb-2">
                  Message reçu, merci.
                </p>
                <p className="text-sm text-charcoal dark:text-smoke">
                  Yassine vous répond sous 24h — ou réservez directement un
                  créneau via le calendrier.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
                suppressHydrationWarning
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nom"
                    placeholder="Nom complet *"
                    className={inputClasses}
                    required
                  />
                  <input
                    type="text"
                    name="entreprise"
                    placeholder="Entreprise *"
                    className={inputClasses}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email professionnel *"
                    className={inputClasses}
                    required
                  />
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone"
                    className={inputClasses}
                  />
                </div>

                <div className="relative">
                  <select name="typeBesoin" className={selectClasses} required>
                    <option value="" disabled selected>
                      Type de besoin *
                    </option>
                    <option value="migration-cloud">
                      Migration vers le cloud
                    </option>
                    <option value="nouveau-centre">
                      Nouveau centre de contact
                    </option>
                    <option value="optimisation">
                      Optimisation CCaaS existant
                    </option>
                    <option value="formation">
                      Formation / accompagnement
                    </option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      name="tailleCentre"
                      className={selectClasses}
                    >
                      <option value="" disabled selected>
                        Taille du centre
                      </option>
                      <option value="moins-20">{"< 20 agents"}</option>
                      <option value="20-100">20–100 agents</option>
                      <option value="100-500">100–500 agents</option>
                      <option value="plus-500">{"> 500 agents"}</option>
                    </select>
                  </div>

                  <div className="relative">
                    <select name="delai" className={selectClasses}>
                      <option value="" disabled selected>
                        Horizon de démarrage
                      </option>
                      <option value="immediat">Immédiat ({"< 1 mois"})</option>
                      <option value="court-terme">
                        Court terme (1–3 mois)
                      </option>
                      <option value="moyen-terme">
                        Moyen terme (3–6 mois)
                      </option>
                      <option value="structurel">
                        Projet structurel ({"> 6 mois"})
                      </option>
                    </select>
                  </div>
                </div>

                <textarea
                  rows={4}
                  name="message"
                  placeholder="Décrivez brièvement votre contexte..."
                  className={`${inputClasses} resize-none`}
                />

                <div className="pt-1">
                  <p className="text-xs text-graphite dark:text-smoke/70">
                    Données confidentielles. Aucun engagement de votre part.
                  </p>
                </div>

                {formStatus === "error" && (
                  <p className="text-error text-sm">
                    Une erreur est survenue. Réessayez ou contactez-nous par
                    email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full px-8 py-4 bg-accent hover:bg-accent/90 text-paper text-sm font-medium tracking-wide rounded-sm transition-all duration-300 disabled:opacity-50"
                >
                  {formStatus === "sending"
                    ? "Envoi en cours…"
                    : "Envoyer ma demande"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Colonne droite — Calendly + Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Calendly embed */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-light mb-3">
                RÉSERVER UN CRÉNEAU
              </p>
              <h2 className="font-display font-medium text-2xl md:text-3xl text-ink dark:text-paper mb-6 tracking-[-0.01em]">
                30 min avec Yassine
              </h2>
              <div className="rounded-sm overflow-hidden border border-smoke/30 dark:border-charcoal">
                <iframe
                  src="https://calendly.com/yrogui/30min?embed_domain=onex-technology.com&embed_type=Inline&hide_gdpr_banner=1"
                  width="100%"
                  height="580"
                  frameBorder="0"
                  title="Réserver un créneau avec Yassine"
                  loading="lazy"
                />
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/60 dark:text-smoke/40 mt-3 text-center">
                CADRAGE INITIAL · 30 MIN · VISIO · FUSEAU CASABLANCA / PARIS
              </p>
            </div>

            {/* Coordonnées */}
            <div className="pt-2 border-t border-smoke/30 dark:border-charcoal">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60 mb-6">
                COORDONNÉES DIRECTES
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0" />
                  <a
                    href={`mailto:${wording.contact.email}`}
                    className="text-sm text-charcoal dark:text-smoke hover:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    {wording.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0" />
                  <a
                    href={`tel:${wording.contact.phone.replace(/\s/g, "")}`}
                    className="text-sm text-charcoal dark:text-smoke hover:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    {wording.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0" />
                  <a
                    href={`https://wa.me/${wording.contact.whatsapp.replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-charcoal dark:text-smoke hover:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    {wording.contact.whatsapp}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0" />
                  <p className="text-sm text-charcoal dark:text-smoke">
                    {wording.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

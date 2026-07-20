"use client";
import { useState, FormEvent } from "react";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const inputClasses =
  "w-full px-4 py-3 bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50 focus:outline-none focus:border-accent transition-colors rounded-sm text-sm";

const selectClasses =
  "w-full px-4 py-3 bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal text-ink dark:text-paper focus:outline-none focus:border-accent transition-colors rounded-sm text-sm appearance-none cursor-pointer";

interface SelectOpt {
  value: string;
  label: string;
}

interface FormErrors {
  nom?: string;
  entreprise?: string;
  email?: string;
  typeBesoin?: string;
}

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const t = useTranslations("contactPage");
  const tc = useTranslations("contact");
  const locale = useLocale();

  const typeBesoinOpts = t.raw("typeBesoinOpts") as SelectOpt[];
  const tailleOpts = t.raw("tailleOpts") as SelectOpt[];
  const delaiOpts = t.raw("delaiOpts") as SelectOpt[];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const newErrors: FormErrors = {};
    const nom = (fd.get("nom") as string).trim();
    const entreprise = (fd.get("entreprise") as string).trim();
    const email = (fd.get("email") as string).trim();
    const typeBesoin = fd.get("typeBesoin") as string;
    if (!nom) newErrors.nom = t("errorFieldRequired");
    if (!entreprise) newErrors.entreprise = t("errorFieldRequired");
    if (!email) newErrors.email = t("errorFieldRequired");
    else if (!EMAIL_RE.test(email)) newErrors.email = t("errorEmailInvalid");
    if (!typeBesoin) newErrors.typeBesoin = t("errorFieldRequired");
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setFormStatus("sending");
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

  const coordsBlock = (
    <div className="pt-2 border-t border-smoke/30 dark:border-charcoal">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60 mb-6">
        {t("coordsEyebrow")}
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0" />
          <a
            href={`mailto:${tc("email")}`}
            className="text-sm text-charcoal dark:text-smoke hover:text-accent dark:hover:text-accent-light transition-colors"
          >
            {tc("email")}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0" />
          <a
            href={`tel:${tc("phone").replace(/\s/g, "")}`}
            className="text-sm text-charcoal dark:text-smoke hover:text-accent dark:hover:text-accent-light transition-colors"
          >
            <bdi dir="ltr">{tc("phone")}</bdi>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <MessageCircle className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0" />
          <a
            href={`https://wa.me/${tc("whatsapp")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-charcoal dark:text-smoke hover:text-accent dark:hover:text-accent-light transition-colors"
          >
            <bdi dir="ltr">{tc("phone")}</bdi>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0" />
          <p className="text-sm text-charcoal dark:text-smoke">{tc("location")}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-mist dark:bg-charcoal/30"
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className={locale === "ar" ? "max-w-2xl mx-auto" : "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"}>
          {/* Colonne gauche — Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-light mb-3">
              {t("formEyebrow")}
            </p>
            <h2 className="font-display font-medium text-2xl md:text-3xl text-ink dark:text-paper mb-2 tracking-[-0.01em]">
              {t("formTitle")}
            </h2>
            <p className="text-sm text-charcoal dark:text-smoke mb-8 leading-[1.65]">
              {t("formSubtitle")}
            </p>

            {formStatus === "success" ? (
              <div className="p-8 bg-accent/10 border border-accent/30 rounded-sm text-center">
                <p className="font-medium text-ink dark:text-paper mb-2">{t("formSuccess")}</p>
                <p className="text-sm text-charcoal dark:text-smoke">{t("formSuccessDesc")}</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate suppressHydrationWarning>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-nom" className="sr-only">{t("nomPlaceholder")}</label>
                    <input id="contact-nom" type="text" name="nom" placeholder={t("nomPlaceholder")} className={`${inputClasses} ${errors.nom ? "border-[#A43B2E]" : ""}`} aria-invalid={!!errors.nom} />
                    {errors.nom && <p role="alert" className="mt-1 text-[13px] font-medium" style={{ color: "#A43B2E" }}>{errors.nom}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-entreprise" className="sr-only">{t("entreprisePlaceholder")}</label>
                    <input id="contact-entreprise" type="text" name="entreprise" placeholder={t("entreprisePlaceholder")} className={`${inputClasses} ${errors.entreprise ? "border-[#A43B2E]" : ""}`} aria-invalid={!!errors.entreprise} />
                    {errors.entreprise && <p role="alert" className="mt-1 text-[13px] font-medium" style={{ color: "#A43B2E" }}>{errors.entreprise}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="sr-only">{t("emailPlaceholder")}</label>
                    <input id="contact-email" type="email" name="email" placeholder={t("emailPlaceholder")} className={`${inputClasses} ${errors.email ? "border-[#A43B2E]" : ""}`} aria-invalid={!!errors.email} />
                    {errors.email && <p role="alert" className="mt-1 text-[13px] font-medium" style={{ color: "#A43B2E" }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-tel" className="sr-only">{t("telPlaceholder")}</label>
                    <input id="contact-tel" type="tel" name="telephone" placeholder={t("telPlaceholder")} className={inputClasses} />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="contact-type" className="sr-only">{t("typeBesoinPlaceholder")}</label>
                  <select id="contact-type" name="typeBesoin" defaultValue="" className={`${selectClasses} ${errors.typeBesoin ? "border-[#A43B2E]" : ""}`} aria-invalid={!!errors.typeBesoin}>
                    <option value="" disabled>{t("typeBesoinPlaceholder")}</option>
                    {typeBesoinOpts.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  {errors.typeBesoin && <p role="alert" className="mt-1 text-[13px] font-medium" style={{ color: "#A43B2E" }}>{errors.typeBesoin}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="contact-taille" className="sr-only">{t("taillePlaceholder")}</label>
                    <select id="contact-taille" name="tailleCentre" defaultValue="" className={selectClasses}>
                      <option value="" disabled>{t("taillePlaceholder")}</option>
                      {tailleOpts.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <label htmlFor="contact-delai" className="sr-only">{t("delaiPlaceholder")}</label>
                    <select id="contact-delai" name="delai" defaultValue="" className={selectClasses}>
                      <option value="" disabled>{t("delaiPlaceholder")}</option>
                      {delaiOpts.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">{t("messagePlaceholder")}</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    placeholder={t("messagePlaceholder")}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <div className="pt-1">
                  <p className="text-xs text-graphite dark:text-smoke/70">{t("confidentialite")}</p>
                </div>

                {formStatus === "error" && (
                  <p className="text-error text-sm">{t("errorMsg")}</p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full px-8 py-4 bg-accent hover:bg-accent/90 text-paper text-sm font-medium tracking-wide rounded-sm transition-all duration-300 disabled:opacity-50"
                >
                  {formStatus === "sending" ? t("submitLoading") : t("submitIdle")}
                </button>
              </form>
            )}
          </motion.div>

          {/* Colonne droite — Calendly + Coordonnées (FR/EN only) */}
          {locale !== "ar" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-light mb-3">
                  {t("calendlyEyebrow")}
                </p>
                <h2 className="font-display font-medium text-2xl md:text-3xl text-ink dark:text-paper mb-6 tracking-[-0.01em]">
                  {t("calendlyTitle")}
                </h2>
                <div className="rounded-sm overflow-hidden border border-smoke/30 dark:border-charcoal">
                  <iframe
                    src="https://calendly.com/yrogui/30min?embed_domain=onex-technology.com&embed_type=Inline&hide_gdpr_banner=1"
                    width="100%"
                    height="580"
                    frameBorder="0"
                    title={t("calendlyAriaLabel")}
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/60 dark:text-smoke/40 mt-3 text-center">
                  {t("calendlyCaption")}
                </p>
              </div>
              {coordsBlock}
            </motion.div>
          )}
        </div>

        {/* AR: coordonnées + alternative RDV sous le formulaire */}
        {locale === "ar" && (
          <div className="max-w-2xl mx-auto mt-12 space-y-8">
            {coordsBlock}
            <div className="pt-6 border-t border-smoke/30 dark:border-charcoal">
              <p className="text-sm text-charcoal dark:text-smoke leading-[1.65]">
                {t("arCalendlyAlt")}{" "}
                <a
                  href={`mailto:${tc("email")}`}
                  className="font-medium transition-colors"
                  style={{ color: "#D4803B" }}
                >
                  {tc("email")}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

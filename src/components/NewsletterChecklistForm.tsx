"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";

// Domaines personnels bloqués (validation côté client — confirmée côté n8n)
const BLOCKED_DOMAINS = new Set([
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com",
  "live.fr", "free.fr", "orange.fr", "sfr.fr", "laposte.net",
  "icloud.com", "protonmail.com", "gmx.com", "wanadoo.fr",
  "neuf.fr", "bbox.fr",
]);

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

type State = "idle" | "loading" | "success" | "error";

interface FormError {
  email?: string;
  rgpd?: string;
  global?: string;
}

interface Props {
  source?: string;
  variant?: "default" | "featured";
}

export function NewsletterChecklistForm({
  source = "checklist-ccaas-25-points",
  variant = "default",
}: Props) {
  const t = useTranslations("leadMagnet");
  const tc = useTranslations("contact");

  const [email, setEmail] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<FormError>({});

  const isFeatured = variant === "featured";

  function validate(): FormError {
    const errs: FormError = {};

    if (!email) {
      errs.email = t("errorEmailRequired");
    } else if (!EMAIL_RE.test(email)) {
      errs.email = t("errorEmailInvalid");
    } else {
      const domain = email.split("@")[1]?.toLowerCase();
      if (domain && BLOCKED_DOMAINS.has(domain)) {
        errs.email = t("errorEmailPersonal");
      }
    }

    if (!rgpd) {
      errs.rgpd = t("errorRgpdRequired");
    }

    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setState("loading");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHECKLIST_WEBHOOK;
      if (!webhookUrl) throw new Error("Webhook non configuré.");

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          rgpd: true,
          source,
          timestamp: new Date().toISOString(),
          siteUrl: typeof window !== "undefined" ? window.location.origin : "https://onex-technology.com",
          website,
        }),
      });

      // On retourne toujours success côté UI (sécurité : pas de fuite)
      if (res.ok || res.status === 200) {
        setState("success");
      } else {
        // n8n peut retourner une erreur métier explicite (ex: domaine sans MX)
        const data = await res.json().catch(() => ({}));
        if (data?.error === "DOMAIN_NO_MX") {
          setErrors({ email: t("errorEmailDomain") });
          setState("idle");
        } else {
          // Autres erreurs → on masque et on affiche success (anti-enumeration)
          setState("success");
        }
      }
    } catch {
      // Erreur réseau → message générique
      setErrors({ global: t("errorNetwork") });
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className={[
        "w-full max-w-xl mx-auto p-8 rounded-sm text-center",
        isFeatured
          ? "bg-white border border-smoke/30"
          : "bg-paper dark:bg-primary border border-smoke/30 dark:border-charcoal",
      ].join(" ")}>
        <CheckCircle className="h-10 w-10 mx-auto mb-4" style={{ color: "#3F7A5E" }} />
        <h3 className={[
          "font-display font-medium text-2xl mb-3",
          isFeatured ? "text-ink" : "text-ink dark:text-paper",
        ].join(" ")}>
          {t("successTitle")}
        </h3>
        <p className={[
          "text-[15px] leading-[1.65]",
          isFeatured ? "text-charcoal" : "text-charcoal dark:text-smoke",
        ].join(" ")}>
          {t.rich("successDesc", { b: (chunks) => <strong>{chunks}</strong> })}
        </p>
        <p className={[
          "mt-4 text-sm",
          isFeatured ? "text-graphite" : "text-graphite dark:text-smoke/70",
        ].join(" ")}>
          {t("successSpam")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-xl mx-auto space-y-5"
    >
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0, pointerEvents: "none" }}
      />
      {/* Champ email */}
      <div>
        <label
          htmlFor="checklist-email"
          className={[
            "block text-sm font-medium mb-2",
            isFeatured ? "text-ink" : "text-ink dark:text-paper",
          ].join(" ")}
        >
          {t("emailLabel")}
        </label>
        <div className="relative">
          <Mail className={[
            "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none",
            isFeatured ? "text-graphite" : "text-graphite dark:text-smoke",
          ].join(" ")} />
          <input
            id="checklist-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder={t("emailPlaceholder")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={[
              "w-full pl-11 pr-4 py-3.5 text-[15px]",
              "border focus:outline-none transition-colors rounded-sm",
              isFeatured
                ? "bg-white text-primary placeholder:text-graphite/60"
                : "bg-paper dark:bg-primary text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50",
              errors.email
                ? "border-[#A43B2E] focus:border-[#A43B2E]"
                : isFeatured
                  ? "border-smoke focus:border-accent"
                  : "border-smoke/40 dark:border-charcoal focus:border-accent",
            ].join(" ")}
          />
        </div>
        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="mt-1.5 flex items-start gap-1.5 text-[13px] font-medium"
            style={{ color: "#A43B2E" }}
          >
            <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Checkbox RGPD */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 shrink-0">
            <input
              type="checkbox"
              checked={rgpd}
              onChange={(e) => {
                setRgpd(e.target.checked);
                if (errors.rgpd) setErrors((prev) => ({ ...prev, rgpd: undefined }));
              }}
              aria-invalid={!!errors.rgpd}
              className="sr-only peer"
            />
            {/* Checkbox custom */}
            <div
              className={[
                "h-4 w-4 border rounded-[3px] transition-colors",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-1",
                rgpd
                  ? "bg-primary border-primary"
                  : errors.rgpd
                  ? isFeatured
                    ? "border-[#A43B2E] bg-white"
                    : "border-[#A43B2E] bg-paper dark:bg-primary"
                  : isFeatured
                    ? "border-charcoal bg-white"
                    : "border-smoke dark:border-charcoal bg-paper dark:bg-primary",
              ].join(" ")}
            >
              {rgpd && (
                <svg
                  viewBox="0 0 12 10"
                  fill="none"
                  className="absolute inset-0 m-auto h-2.5 w-2.5"
                >
                  <path
                    d="M1 5l3.5 3.5L11 1"
                    stroke="#F7F3EA"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <span className={[
            "text-[13px] leading-[1.6]",
            isFeatured ? "text-charcoal" : "text-charcoal dark:text-smoke",
          ].join(" ")}>
            {t("rgpdLabel")}{" "}
            <a
              href={`mailto:${tc("email")}`}
              className="underline underline-offset-2 transition-colors"
              style={{ color: "#D4803B" }}
            >
              {tc("email")}
            </a>
            {". Voir notre "}
            <a
              href="/politique-de-confidentialite"
              className="underline underline-offset-2 transition-colors"
              style={{ color: "#D4803B" }}
            >
              {t("rgpdPolitique")}
            </a>
            {"."}
          </span>
        </label>
        {errors.rgpd && (
          <p
            role="alert"
            className="mt-1.5 ml-7 flex items-start gap-1.5 text-[13px] font-medium"
            style={{ color: "#A43B2E" }}
          >
            <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
            {errors.rgpd}
          </p>
        )}
      </div>

      {/* Erreur globale (réseau) */}
      {state === "error" && errors.global && (
        <p
          role="alert"
          className="flex items-start gap-2 text-[13px] font-medium p-3 border rounded-sm"
          style={{ color: "#A43B2E", borderColor: "#A43B2E22", background: "#A43B2E08" }}
        >
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          {errors.global}
        </p>
      )}

      {/* CTA */}
      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full flex items-center justify-center gap-2 py-4 px-8 text-[15px] font-medium tracking-wide transition-all duration-200 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background: "#0F0F14",
          color: "#F7F3EA",
        }}
        onMouseEnter={(e) => { if (state !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "#2B3038"; }}
        onMouseLeave={(e) => { if (state !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "#0F0F14"; }}
      >
        {state === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t("submitLoading")}
          </>
        ) : (
          t("submitButton")
        )}
      </button>

      <p className={[
        "text-[11px] text-center",
        isFeatured ? "text-graphite" : "text-graphite dark:text-smoke/60",
      ].join(" ")}>
        {t("microcopy")}
      </p>
    </form>
  );
}

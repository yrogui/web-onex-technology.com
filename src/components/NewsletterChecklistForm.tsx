"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";

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
}

export function NewsletterChecklistForm({ source = "checklist-ccaas-25-points" }: Props) {
  const [email, setEmail] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<FormError>({});

  function validate(): FormError {
    const errs: FormError = {};

    if (!email) {
      errs.email = "Veuillez saisir votre adresse email professionnelle.";
    } else if (!EMAIL_RE.test(email)) {
      errs.email = "Format d'email invalide.";
    } else {
      const domain = email.split("@")[1]?.toLowerCase();
      if (domain && BLOCKED_DOMAINS.has(domain)) {
        errs.email =
          "Merci d'utiliser votre email professionnel (adresse personnelle non acceptée).";
      }
    }

    if (!rgpd) {
      errs.rgpd = "Vous devez accepter la politique de confidentialité pour continuer.";
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
          setErrors({ email: "Ce domaine email ne semble pas valide (aucun serveur mail détecté)." });
          setState("idle");
        } else {
          // Autres erreurs → on masque et on affiche success (anti-enumeration)
          setState("success");
        }
      }
    } catch {
      // Erreur réseau → message générique
      setErrors({ global: "Une erreur réseau est survenue. Veuillez réessayer dans quelques instants." });
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="w-full max-w-xl mx-auto p-8 border border-smoke/30 dark:border-charcoal bg-paper dark:bg-primary rounded-sm text-center">
        <CheckCircle className="h-10 w-10 mx-auto mb-4" style={{ color: "#3F7A5E" }} />
        <h3 className="font-display font-medium text-2xl text-ink dark:text-paper mb-3">
          Vérifiez votre boîte mail
        </h3>
        <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke">
          Un email de confirmation vous a été envoyé. Cliquez sur le lien pour recevoir
          votre checklist <strong>25 points avant go-live</strong>.
        </p>
        <p className="mt-4 text-sm text-graphite dark:text-smoke/70">
          Pensez à vérifier vos spams si vous ne le recevez pas dans les 5 minutes.
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
          className="block text-sm font-medium text-ink dark:text-paper mb-2"
        >
          Email professionnel
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-graphite dark:text-smoke pointer-events-none" />
          <input
            id="checklist-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="prenom.nom@entreprise.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={[
              "w-full pl-11 pr-4 py-3.5 text-[15px] bg-paper dark:bg-primary",
              "border text-ink dark:text-paper placeholder:text-graphite/50 dark:placeholder:text-smoke/50",
              "focus:outline-none transition-colors rounded-sm",
              errors.email
                ? "border-[#A43B2E] focus:border-[#A43B2E]"
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
                  ? "bg-primary dark:bg-accent border-primary dark:border-accent"
                  : errors.rgpd
                  ? "border-[#A43B2E] bg-paper dark:bg-primary"
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
          <span className="text-[13px] leading-[1.6] text-charcoal dark:text-smoke">
            J'accepte que One-X Technology utilise mon adresse email pour m'envoyer
            la checklist demandée et, occasionnellement, des contenus liés aux programmes CCaaS.
            Désinscription à tout moment via le lien présent dans chaque email.
            Droits RGPD à{" "}
            <a
              href="mailto:contact@onex-technology.com"
              className="underline underline-offset-2 transition-colors"
              style={{ color: "#D4803B" }}
            >
              contact@onex-technology.com
            </a>
            . Voir notre{" "}
            <a
              href="/politique-de-confidentialite"
              className="underline underline-offset-2 transition-colors"
              style={{ color: "#D4803B" }}
            >
              politique de confidentialité
            </a>
            .
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
            Envoi en cours…
          </>
        ) : (
          "Recevoir la checklist"
        )}
      </button>

      <p className="text-[11px] text-graphite dark:text-smoke/60 text-center">
        Email professionnel requis · Zéro spam · Double confirmation
      </p>
    </form>
  );
}

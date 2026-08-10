"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";

type State = "loading" | "success" | "error";

function ConfirmationHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations("confirmerInscription");
  const [state, setState] = useState<State>("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setErrorMsg(t("invalidTokenMsg"));
      setState("error");
      return;
    }

    async function confirm() {
      try {
        const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHECKLIST_CONFIRM_WEBHOOK;
        if (!webhookUrl) throw new Error("Webhook de confirmation non configuré.");

        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        if (res.ok) {
          setState("success");
          setTimeout(() => router.push("/merci-checklist/"), 1500);
        } else {
          const data = await res.json().catch(() => ({}));
          setErrorMsg(data?.message ?? t("defaultErrorMsg"));
          setState("error");
        }
      } catch {
        setErrorMsg(t("networkErrorMsg"));
        setState("error");
      }
    }

    confirm();
  }, [searchParams, router, t]);

  return (
    <div className="max-w-md w-full text-center space-y-6 py-24">
      {state === "loading" && (
        <>
          <Loader2 className="h-12 w-12 mx-auto animate-spin text-accent" />
          <h1 className="font-display font-medium text-2xl text-ink dark:text-paper">
            {t("loadingTitle")}
          </h1>
          <p className="text-[15px] text-charcoal dark:text-smoke">
            {t("loadingDesc")}
          </p>
        </>
      )}

      {state === "success" && (
        <>
          <CheckCircle className="h-12 w-12 mx-auto" style={{ color: "#3F7A5E" }} />
          <h1 className="font-display font-medium text-2xl text-ink dark:text-paper">
            {t("successTitle")}
          </h1>
          <p className="text-[15px] text-charcoal dark:text-smoke">
            {t("successDesc")}
          </p>
        </>
      )}

      {state === "error" && (
        <>
          <AlertCircle className="h-12 w-12 mx-auto" style={{ color: "#A43B2E" }} />
          <h1 className="font-display font-medium text-2xl text-ink dark:text-paper">
            {t("errorTitle")}
          </h1>
          <p className="text-[15px] text-charcoal dark:text-smoke">{errorMsg}</p>
          <a
            href="/"
            className="inline-block mt-4 text-sm font-medium underline underline-offset-2 transition-colors"
            style={{ color: "#D4803B" }}
          >
            {t("backHome")}
          </a>
        </>
      )}
    </div>
  );
}

export default function ConfirmerInscriptionPage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-primary flex items-center justify-center px-8">
      <Suspense
        fallback={
          <div className="py-24 text-center">
            <Loader2 className="h-12 w-12 mx-auto animate-spin text-accent" />
          </div>
        }
      >
        <ConfirmationHandler />
      </Suspense>
    </div>
  );
}

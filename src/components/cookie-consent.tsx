"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Settings } from "lucide-react";
import { useTranslations } from "next-intl";

export type CookieCategory = "essential" | "functional" | "analytics" | "marketing";

interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieCat {
  key: string;
  title: string;
  desc: string;
}

const CONSENT_STORAGE_KEY = "onex-cookie-consent";
const CONSENT_VERSION = "1.0";

export function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const cats = t.raw("cats") as CookieCat[];

  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (!consent) {
      setIsVisible(true);
      blockNonEssentialCookies();
    } else {
      try {
        const parsed = JSON.parse(consent);
        const consentDate = new Date(parsed.timestamp);
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        if (consentDate < sixMonthsAgo) {
          setIsVisible(true);
          blockNonEssentialCookies();
        } else {
          setPreferences(parsed.preferences);
          applyPreferences(parsed.preferences);
        }
      } catch {
        setIsVisible(true);
        blockNonEssentialCookies();
      }
    }

    const handleOpenSettings = () => {
      setIsVisible(true);
      setShowSettings(true);
    };

    window.addEventListener("openCookieSettings", handleOpenSettings);
    return () => window.removeEventListener("openCookieSettings", handleOpenSettings);
  }, []);

  const blockNonEssentialCookies = () => {
    if (typeof window !== "undefined") {
      (window as any)["ga-disable-GA_MEASUREMENT_ID"] = true;
    }
  };

  const applyPreferences = (prefs: CookiePreferences) => {
    if (typeof window === "undefined") return;
    if (prefs.functional) enableFunctionalCookies();
    else disableFunctionalCookies();
    if (prefs.analytics) enableAnalyticsCookies();
    else disableAnalyticsCookies();
    if (prefs.marketing) enableMarketingCookies();
    else disableMarketingCookies();
  };

  const enableFunctionalCookies = () => {};
  const disableFunctionalCookies = () => {};

  const enableAnalyticsCookies = () => {
    if (typeof window !== "undefined") {
      (window as any)["ga-disable-GA_MEASUREMENT_ID"] = false;
    }
  };

  const disableAnalyticsCookies = () => {
    if (typeof window !== "undefined") {
      (window as any)["ga-disable-GA_MEASUREMENT_ID"] = true;
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "_gat=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };

  const enableMarketingCookies = () => {};
  const disableMarketingCookies = () => {};

  const saveConsent = (prefs: CookiePreferences) => {
    const consent = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      preferences: prefs,
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    applyPreferences(prefs);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
    setIsVisible(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyEssential);
    saveConsent(onlyEssential);
    setIsVisible(false);
    setShowSettings(false);
  };

  const saveCustomPreferences = () => {
    saveConsent(preferences);
    setIsVisible(false);
    setShowSettings(false);
  };

  const toggleCategory = (category: CookieCategory) => {
    if (category === "essential") return;
    setPreferences((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  if (!isVisible) return null;

  const prefKeys: CookieCategory[] = ["essential", "functional", "analytics", "marketing"];

  return (
    <>
      {showSettings && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998] transition-opacity duration-300"
          onClick={() => setShowSettings(false)}
        />
      )}

      <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
        {/* Bandeau simple */}
        {!showSettings && (
          <div className="bg-paper dark:bg-primary border-t-2 border-accent shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                <div className="flex items-start gap-3 flex-1">
                  <Cookie className="h-6 w-6 text-accent dark:text-accent-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-medium text-ink dark:text-paper mb-2">
                      {t("title")}
                    </h3>
                    <p className="text-sm text-charcoal dark:text-smoke leading-relaxed">
                      {t("desc")}{" "}
                      <a
                        href="/politique-cookies"
                        className="text-accent dark:text-accent-light hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("learnMore")}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Boutons — CNIL 2026 : égalité visuelle */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-3 rounded-sm font-medium text-sm border-2 border-ink dark:border-paper text-ink dark:text-paper hover:bg-ink/5 dark:hover:bg-paper/5 transition-all duration-200 flex items-center justify-center gap-2 min-w-[140px]"
                  >
                    <Settings className="h-4 w-4" />
                    {t("customize")}
                  </button>
                  <button
                    onClick={rejectAll}
                    className="px-6 py-3 rounded-sm font-medium text-sm bg-error hover:bg-error/90 text-paper transition-all duration-200 min-w-[140px]"
                  >
                    {t("rejectAll")}
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 rounded-sm font-medium text-sm bg-success hover:bg-success/90 text-paper transition-all duration-200 min-w-[140px]"
                  >
                    {t("acceptAll")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Panneau détaillé */}
        {showSettings && (
          <div className="bg-paper dark:bg-primary border-t-2 border-accent shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-medium text-ink dark:text-paper mb-2">
                    {t("settingsTitle")}
                  </h3>
                  <p className="text-sm text-charcoal dark:text-smoke">
                    {t("settingsSubtitle")}
                  </p>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-ink/5 dark:hover:bg-paper/5 rounded-sm transition-colors"
                  aria-label={t("settingsClose")}
                >
                  <X className="h-5 w-5 text-graphite dark:text-smoke" />
                </button>
              </div>

              {/* Catégories */}
              <div className="space-y-4 mb-6">
                {cats.map((cat, i) => (
                  <CookieCategoryRow
                    key={cat.key}
                    title={cat.title}
                    description={cat.desc}
                    enabled={i === 0 ? true : preferences[prefKeys[i]]}
                    required={i === 0}
                    requiredLabel={t("required")}
                    onChange={() => toggleCategory(prefKeys[i])}
                  />
                ))}
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-smoke/30 dark:border-charcoal">
                <button
                  onClick={rejectAll}
                  className="flex-1 px-6 py-3 rounded-sm font-medium text-sm bg-error hover:bg-error/90 text-paper transition-all duration-200"
                >
                  {t("rejectAll")}
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="flex-1 px-6 py-3 rounded-sm font-medium text-sm bg-accent hover:bg-accent/90 text-paper transition-all duration-200"
                >
                  {t("saveChoices")}
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-6 py-3 rounded-sm font-medium text-sm bg-success hover:bg-success/90 text-paper transition-all duration-200"
                >
                  {t("acceptAll")}
                </button>
              </div>

              <div className="mt-4 text-center">
                <a
                  href="/politique-cookies"
                  className="text-sm text-accent dark:text-accent-light hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("seePolitique")}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

interface CookieCategoryRowProps {
  title: string;
  description: string;
  enabled: boolean;
  required: boolean;
  requiredLabel: string;
  onChange: () => void;
}

function CookieCategoryRow({ title, description, enabled, required, requiredLabel, onChange }: CookieCategoryRowProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded border border-smoke/30 dark:border-charcoal bg-mist/50 dark:bg-charcoal/30">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="font-medium text-ink dark:text-paper">{title}</h4>
          {required && (
            <span className="text-xs px-2 py-1 rounded-sm bg-ink/10 dark:bg-paper/10 text-graphite dark:text-smoke">
              {requiredLabel}
            </span>
          )}
        </div>
        <p className="text-sm text-charcoal dark:text-smoke leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex-shrink-0 pt-1">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={enabled}
            onChange={onChange}
            disabled={required}
            aria-label={title}
            className="sr-only peer"
          />
          <div
            className={`w-11 h-6 rounded-full peer transition-colors duration-200 ${
              enabled ? "bg-success" : "bg-smoke dark:bg-graphite"
            } ${required ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} peer-focus:ring-2 peer-focus:ring-accent`}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-paper rounded-full transition-transform duration-200 ${
                enabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export const openCookieSettings = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("openCookieSettings"));
  }
};

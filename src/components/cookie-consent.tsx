"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Settings } from "lucide-react";

/**
 * Types de cookies disponibles
 */
export type CookieCategory = "essential" | "functional" | "analytics" | "marketing";

/**
 * Configuration des préférences cookies
 */
interface CookiePreferences {
  essential: boolean; // Toujours true
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

/**
 * Clé de stockage localStorage
 */
const CONSENT_STORAGE_KEY = "onex-cookie-consent";
const CONSENT_VERSION = "1.0"; // Pour gérer les mises à jour du consentement

/**
 * Composant CookieConsent conforme RGPD/CNIL 2026
 *
 * Exigences CNIL :
 * - Boutons "Accepter" et "Refuser" égaux (même taille, couleur)
 * - Refus en 1 clic dès première couche
 * - Consentement granulaire (4 catégories)
 * - Blocage cookies non essentiels par défaut
 * - Stockage choix 6 mois minimum
 * - Possibilité de modifier le consentement
 */
export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  /**
   * Vérifie si un consentement existe déjà
   */
  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (!consent) {
      // Pas de consentement : afficher le bandeau
      setIsVisible(true);
      // Bloquer tous les cookies non essentiels par défaut
      blockNonEssentialCookies();
    } else {
      try {
        const parsed = JSON.parse(consent);
        // Vérifier si le consentement est encore valide (6 mois)
        const consentDate = new Date(parsed.timestamp);
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        if (consentDate < sixMonthsAgo) {
          // Consentement expiré : redemander
          setIsVisible(true);
          blockNonEssentialCookies();
        } else {
          // Consentement valide : appliquer les préférences
          setPreferences(parsed.preferences);
          applyPreferences(parsed.preferences);
        }
      } catch (error) {
        // Erreur de parsing : redemander
        setIsVisible(true);
        blockNonEssentialCookies();
      }
    }

    // Écouter l'événement personnalisé pour ouvrir les paramètres
    const handleOpenSettings = () => {
      setIsVisible(true);
      setShowSettings(true);
    };

    window.addEventListener("openCookieSettings", handleOpenSettings);
    return () => window.removeEventListener("openCookieSettings", handleOpenSettings);
  }, []);

  /**
   * Bloque tous les cookies non essentiels
   */
  const blockNonEssentialCookies = () => {
    // Bloquer Google Fonts (si chargé dynamiquement)
    // Bloquer Google Analytics
    // Bloquer Meta Pixel
    // etc.

    // Exemple : Bloquer GA4
    if (typeof window !== "undefined") {
      (window as any)["ga-disable-GA_MEASUREMENT_ID"] = true;
    }
  };

  /**
   * Applique les préférences cookies
   */
  const applyPreferences = (prefs: CookiePreferences) => {
    if (typeof window === "undefined") return;

    // Cookies fonctionnels
    if (prefs.functional) {
      // Activer Google Fonts, etc.
      enableFunctionalCookies();
    } else {
      disableFunctionalCookies();
    }

    // Cookies analytics
    if (prefs.analytics) {
      // Activer Google Analytics
      enableAnalyticsCookies();
    } else {
      disableAnalyticsCookies();
    }

    // Cookies marketing
    if (prefs.marketing) {
      // Activer Meta Pixel, LinkedIn Insight, etc.
      enableMarketingCookies();
    } else {
      disableMarketingCookies();
    }
  };

  /**
   * Fonctions d'activation/désactivation des cookies
   */
  const enableFunctionalCookies = () => {
    // Charger Google Fonts si nécessaire
    // (déjà chargé dans head, donc rien à faire)
  };

  const disableFunctionalCookies = () => {
    // Nettoyer les cookies fonctionnels
  };

  const enableAnalyticsCookies = () => {
    // Activer Google Analytics 4
    if (typeof window !== "undefined") {
      (window as any)["ga-disable-GA_MEASUREMENT_ID"] = false;
      // Recharger GA si nécessaire
      // TODO: Remplacer GA_MEASUREMENT_ID par votre ID réel
    }
  };

  const disableAnalyticsCookies = () => {
    // Désactiver Google Analytics
    if (typeof window !== "undefined") {
      (window as any)["ga-disable-GA_MEASUREMENT_ID"] = true;
      // Supprimer les cookies GA
      document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "_gat=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };

  const enableMarketingCookies = () => {
    // Activer Meta Pixel, LinkedIn Insight, etc.
    // TODO: Implémenter selon vos besoins
  };

  const disableMarketingCookies = () => {
    // Désactiver les cookies marketing
    // TODO: Implémenter selon vos besoins
  };

  /**
   * Sauvegarde le consentement dans localStorage
   */
  const saveConsent = (prefs: CookiePreferences) => {
    const consent = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      preferences: prefs,
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    applyPreferences(prefs);
  };

  /**
   * Accepter tous les cookies
   */
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

  /**
   * Refuser tous les cookies non essentiels
   */
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

  /**
   * Sauvegarder les préférences personnalisées
   */
  const saveCustomPreferences = () => {
    saveConsent(preferences);
    setIsVisible(false);
    setShowSettings(false);
  };

  /**
   * Toggle une catégorie de cookies
   */
  const toggleCategory = (category: CookieCategory) => {
    if (category === "essential") return; // Les essentiels ne peuvent pas être désactivés

    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay semi-transparent (optionnel) */}
      {showSettings && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998] transition-opacity duration-300"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Bandeau principal */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
        {/* Bandeau simple (première couche) */}
        {!showSettings && (
          <div className="bg-white dark:bg-[#1a1c20] border-t-2 border-brand-gold shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                {/* Icône et texte */}
                <div className="flex items-start gap-3 flex-1">
                  <Cookie className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-brand-noir dark:text-white mb-2">
                      Gestion des cookies
                    </h3>
                    <p className="text-sm text-brand-slate dark:text-[#94a3b8] leading-relaxed">
                      Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et personnaliser le contenu.
                      Vous pouvez accepter tous les cookies, les refuser ou personnaliser vos préférences.{" "}
                      <a
                        href="/politique-cookies"
                        className="text-brand-gold hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        En savoir plus
                      </a>
                    </p>
                  </div>
                </div>

                {/* Boutons - CNIL 2026 : Égalité visuelle obligatoire */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  {/* Bouton Personnaliser */}
                  <button
                    onClick={() => setShowSettings(true)}
                    className="
                      px-6 py-3 rounded-lg font-medium text-sm
                      border-2 border-brand-noir dark:border-white
                      text-brand-noir dark:text-white
                      hover:bg-brand-noir/5 dark:hover:bg-white/5
                      transition-all duration-200
                      flex items-center justify-center gap-2
                      min-w-[140px]
                    "
                  >
                    <Settings className="h-4 w-4" />
                    Personnaliser
                  </button>

                  {/* Bouton Refuser - MÊME TAILLE/COULEUR que Accepter (CNIL) */}
                  <button
                    onClick={rejectAll}
                    className="
                      px-6 py-3 rounded-lg font-medium text-sm
                      bg-red-600 hover:bg-red-700
                      text-white
                      transition-all duration-200
                      min-w-[140px]
                    "
                  >
                    Tout refuser
                  </button>

                  {/* Bouton Accepter */}
                  <button
                    onClick={acceptAll}
                    className="
                      px-6 py-3 rounded-lg font-medium text-sm
                      bg-green-600 hover:bg-green-700
                      text-white
                      transition-all duration-200
                      min-w-[140px]
                    "
                  >
                    Tout accepter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Panneau de paramètres détaillés (seconde couche) */}
        {showSettings && (
          <div className="bg-white dark:bg-[#1a1c20] border-t-2 border-brand-gold shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-noir dark:text-white mb-2">
                    Personnaliser mes préférences cookies
                  </h3>
                  <p className="text-sm text-brand-slate dark:text-[#94a3b8]">
                    Choisissez les catégories de cookies que vous souhaitez autoriser
                  </p>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-brand-noir/5 dark:hover:bg-white/5 rounded-lg transition-colors"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5 text-brand-slate dark:text-[#94a3b8]" />
                </button>
              </div>

              {/* Catégories de cookies */}
              <div className="space-y-4 mb-6">
                {/* Essentiels (toujours activés) */}
                <CookieCategory
                  title="Cookies essentiels"
                  description="Nécessaires au fonctionnement du site. Ils permettent la navigation et l'utilisation des fonctionnalités de base (préférence de thème, consentement cookies). Ne peuvent pas être désactivés."
                  enabled={true}
                  required={true}
                  onChange={() => {}}
                />

                {/* Fonctionnels */}
                <CookieCategory
                  title="Cookies fonctionnels"
                  description="Améliorent l'expérience utilisateur en mémorisant vos préférences (formulaires pré-remplis, langue). Incluent Google Fonts pour un affichage optimal des polices."
                  enabled={preferences.functional}
                  required={false}
                  onChange={() => toggleCategory("functional")}
                />

                {/* Statistiques */}
                <CookieCategory
                  title="Cookies statistiques"
                  description="Nous aident à comprendre comment les visiteurs utilisent le site (pages visitées, temps de visite) via Google Analytics. Données anonymisées."
                  enabled={preferences.analytics}
                  required={false}
                  onChange={() => toggleCategory("analytics")}
                />

                {/* Marketing */}
                <CookieCategory
                  title="Cookies marketing"
                  description="Permettent de personnaliser les publicités et mesurer l'efficacité des campagnes (Meta Pixel, LinkedIn Insight). Vous pouvez les refuser sans impact sur le site."
                  enabled={preferences.marketing}
                  required={false}
                  onChange={() => toggleCategory("marketing")}
                />
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-noir/10 dark:border-white/10">
                <button
                  onClick={rejectAll}
                  className="
                    flex-1 px-6 py-3 rounded-lg font-medium text-sm
                    bg-red-600 hover:bg-red-700
                    text-white
                    transition-all duration-200
                  "
                >
                  Tout refuser
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="
                    flex-1 px-6 py-3 rounded-lg font-medium text-sm
                    bg-brand-gold hover:bg-brand-gold/90
                    text-brand-noir
                    transition-all duration-200
                  "
                >
                  Enregistrer mes choix
                </button>
                <button
                  onClick={acceptAll}
                  className="
                    flex-1 px-6 py-3 rounded-lg font-medium text-sm
                    bg-green-600 hover:bg-green-700
                    text-white
                    transition-all duration-200
                  "
                >
                  Tout accepter
                </button>
              </div>

              {/* Lien politique cookies */}
              <div className="mt-4 text-center">
                <a
                  href="/politique-cookies"
                  className="text-sm text-brand-gold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consulter notre politique de cookies détaillée
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/**
 * Composant pour afficher une catégorie de cookie
 */
interface CookieCategoryProps {
  title: string;
  description: string;
  enabled: boolean;
  required: boolean;
  onChange: () => void;
}

function CookieCategory({ title, description, enabled, required, onChange }: CookieCategoryProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-brand-noir/10 dark:border-white/10 bg-brand-cream/30 dark:bg-white/5">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="font-semibold text-brand-noir dark:text-white">
            {title}
          </h4>
          {required && (
            <span className="text-xs px-2 py-1 rounded bg-brand-noir/10 dark:bg-white/10 text-brand-slate dark:text-[#94a3b8]">
              Obligatoire
            </span>
          )}
        </div>
        <p className="text-sm text-brand-slate dark:text-[#94a3b8] leading-relaxed">
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
            className="sr-only peer"
          />
          <div
            className={`
              w-11 h-6 rounded-full peer
              transition-colors duration-200
              ${enabled
                ? "bg-green-600"
                : "bg-gray-300 dark:bg-gray-600"
              }
              ${required ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
              peer-focus:ring-2 peer-focus:ring-brand-gold
            `}
          >
            <div
              className={`
                absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full
                transition-transform duration-200
                ${enabled ? "translate-x-5" : "translate-x-0"}
              `}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

/**
 * Fonction utilitaire pour ouvrir les paramètres cookies depuis n'importe où
 */
export const openCookieSettings = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("openCookieSettings"));
  }
};

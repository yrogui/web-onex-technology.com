import type { Metadata } from "next";
import { Cookie, Shield, FileText } from "lucide-react";
import { CookieSettingsButton } from "@/components/cookie-settings-button";

export const metadata: Metadata = {
  title: "Politique de gestion des cookies",
  description:
    "Découvrez comment One-X Technology utilise les cookies, vos droits RGPD et comment gérer vos préférences de confidentialité sur onex-technology.com.",
  alternates: { canonical: "https://onex-technology.com/politique-cookies" },
};

export default function PolitiqueCookiesPage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-accent/10 text-accent text-sm font-medium mb-6">
            <Cookie className="h-4 w-4" />
            Transparence RGPD
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink dark:text-paper mb-6">
            Politique de gestion des cookies
          </h1>
          <p className="text-lg text-graphite dark:text-smoke leading-relaxed">
            Dernière mise à jour : <strong>17 janvier 2026</strong>
          </p>
          <p className="text-lg text-graphite dark:text-smoke leading-relaxed mt-2">
            Chez One-X Technology, nous respectons votre vie privée. Cette politique explique comment nous utilisons les cookies
            et comment vous pouvez contrôler vos préférences.
          </p>
        </div>

        {/* Résumé rapide */}
        <div className="bg-white dark:bg-[#1a1c20] rounded p-8 shadow-sm border border-smoke/30 dark:border-charcoal mb-12">
          <h2 className="text-2xl font-bold text-ink dark:text-paper mb-4 flex items-center gap-3">
            <Shield className="h-6 w-6 text-accent" />
            En résumé
          </h2>
          <ul className="space-y-3 text-graphite dark:text-smoke">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span>Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span>Vous pouvez accepter, refuser ou personnaliser vos préférences à tout moment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span>Nous ne vendons jamais vos données à des tiers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span>Conformité totale RGPD et directive ePrivacy</span>
            </li>
          </ul>
          <CookieSettingsButton />
        </div>

        {/* Contenu principal */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-paper mb-6 flex items-center gap-3">
              <span className="text-accent">01</span>
              Qu'est-ce qu'un cookie ?
            </h2>
            <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
              <p>
                Un <strong>cookie</strong> est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette)
                lors de la visite d'un site internet. Il permet de collecter des informations relatives à votre navigation
                et de vous adresser des services adaptés à votre terminal.
              </p>
              <p>
                Les cookies peuvent être déposés par le site que vous visitez (<strong>cookies first-party</strong>)
                ou par des services tiers (<strong>cookies third-party</strong>) comme Google Analytics, Meta Pixel, etc.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-paper mb-6 flex items-center gap-3">
              <span className="text-accent">02</span>
              Cookies utilisés sur One-X Technology
            </h2>

            {/* Essentiels */}
            <div className="bg-white dark:bg-[#1a1c20] rounded-xl p-6 shadow-sm border border-smoke/30 dark:border-charcoal mb-6">
              <h3 className="text-xl font-bold text-ink dark:text-paper mb-3 flex items-center gap-2">
                <Cookie className="h-5 w-5 text-green-600" />
                Cookies essentiels (obligatoires)
              </h3>
              <p className="text-graphite dark:text-smoke mb-4">
                Ces cookies sont nécessaires au fonctionnement du site et ne peuvent être désactivés.
                Ils ne collectent aucune donnée personnelle identifiable.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-paper/50 dark:bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">Nom</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">Finalité</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10 dark:divide-charcoal">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">onex-cookie-consent</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">
                        Stocke votre choix de consentement cookies (accepter/refuser/personnaliser)
                      </td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">6 mois</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">onex-theme</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">
                        Mémorise votre préférence de thème (mode clair/sombre)
                      </td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">12 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fonctionnels */}
            <div className="bg-white dark:bg-[#1a1c20] rounded-xl p-6 shadow-sm border border-smoke/30 dark:border-charcoal mb-6">
              <h3 className="text-xl font-bold text-ink dark:text-paper mb-3 flex items-center gap-2">
                <Cookie className="h-5 w-5 text-blue-600" />
                Cookies fonctionnels (optionnels)
              </h3>
              <p className="text-graphite dark:text-smoke mb-4">
                Ces cookies améliorent l'expérience utilisateur en mémorisant vos préférences.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-paper/50 dark:bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">Nom</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">Finalité</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10 dark:divide-charcoal">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">Google Fonts</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">
                        Chargement optimisé des polices Inter et Playfair Display depuis les serveurs Google
                      </td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Statistiques */}
            <div className="bg-white dark:bg-[#1a1c20] rounded-xl p-6 shadow-sm border border-smoke/30 dark:border-charcoal mb-6">
              <h3 className="text-xl font-bold text-ink dark:text-paper mb-3 flex items-center gap-2">
                <Cookie className="h-5 w-5 text-purple-600" />
                Cookies statistiques (optionnels)
              </h3>
              <p className="text-graphite dark:text-smoke mb-4">
                Ces cookies nous aident à comprendre comment les visiteurs utilisent le site.
                Les données sont anonymisées et ne permettent pas de vous identifier personnellement.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-paper/50 dark:bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">Nom</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">Finalité</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10 dark:divide-charcoal">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">_ga</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">
                        Google Analytics 4 - Identifie les visiteurs uniques de manière anonyme
                      </td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">2 ans</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">_gid</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">
                        Google Analytics 4 - Distingue les utilisateurs
                      </td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">24 heures</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">_gat</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">
                        Google Analytics 4 - Limite le taux de requêtes
                      </td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Marketing */}
            <div className="bg-white dark:bg-[#1a1c20] rounded-xl p-6 shadow-sm border border-smoke/30 dark:border-charcoal">
              <h3 className="text-xl font-bold text-ink dark:text-paper mb-3 flex items-center gap-2">
                <Cookie className="h-5 w-5 text-orange-600" />
                Cookies marketing (optionnels)
              </h3>
              <p className="text-graphite dark:text-smoke mb-4">
                Ces cookies permettent de personnaliser les publicités et mesurer l'efficacité des campagnes.
                Vous pouvez les refuser sans impact sur l'utilisation du site.
              </p>
              <div className="bg-accent/10 rounded-sm p-4 text-sm text-ink dark:text-paper">
                <strong>Note :</strong> Actuellement, aucun cookie marketing n'est utilisé sur ce site.
                Cette section sera mise à jour si nous activons des services publicitaires (Meta Pixel, LinkedIn Insight, etc.).
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-paper mb-6 flex items-center gap-3">
              <span className="text-accent">03</span>
              Gérer vos préférences cookies
            </h2>
            <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
              <p>
                Vous pouvez à tout moment modifier vos choix en cliquant sur le bouton ci-dessous.
                Votre choix sera conservé pendant <strong>6 mois</strong>.
              </p>
              <CookieSettingsButton variant="large" />
              <p className="mt-6">
                Vous pouvez également configurer votre navigateur pour refuser tous les cookies,
                mais cela peut affecter le fonctionnement du site :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Chrome :</strong>{" "}
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Gérer les cookies
                  </a>
                </li>
                <li>
                  <strong>Firefox :</strong>{" "}
                  <a
                    href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Gérer les cookies
                  </a>
                </li>
                <li>
                  <strong>Safari :</strong>{" "}
                  <a
                    href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Gérer les cookies
                  </a>
                </li>
                <li>
                  <strong>Edge :</strong>{" "}
                  <a
                    href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Gérer les cookies
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-paper mb-6 flex items-center gap-3">
              <span className="text-accent">04</span>
              Vos droits (RGPD)
            </h2>
            <div className="bg-white dark:bg-[#1a1c20] rounded-xl p-6 shadow-sm border border-smoke/30 dark:border-charcoal">
              <p className="text-graphite dark:text-smoke leading-relaxed mb-4">
                Conformément au <strong>Règlement Général sur la Protection des Données (RGPD)</strong> et à la{" "}
                <strong>directive ePrivacy</strong>, vous disposez des droits suivants :
              </p>
              <ul className="space-y-3 text-graphite dark:text-smoke">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Droit d'accès :</strong> Vous pouvez demander une copie des données personnelles
                    que nous détenons à votre sujet
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Droit de rectification :</strong> Vous pouvez demander la correction de données
                    inexactes ou incomplètes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données
                    personnelles (sous certaines conditions)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données
                    à des fins de marketing direct
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Droit à la portabilité :</strong> Vous pouvez recevoir vos données dans un format
                    structuré et les transmettre à un autre responsable
                  </span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-accent/10 rounded-sm">
                <p className="text-ink dark:text-paper font-medium mb-2">
                  Pour exercer ces droits, contactez-nous :
                </p>
                <p className="text-graphite dark:text-smoke">
                  Email :{" "}
                  <a
                    href="mailto:contact@onex-technology.com"
                    className="text-accent hover:underline font-medium"
                  >
                    contact@onex-technology.com
                  </a>
                </p>
                <p className="text-graphite dark:text-smoke text-sm mt-2">
                  Nous nous engageons à répondre sous <strong>72 heures ouvrées</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-paper mb-6 flex items-center gap-3">
              <span className="text-accent">05</span>
              En savoir plus
            </h2>
            <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
              <p>
                Pour plus d'informations sur les cookies, vos droits et la protection des données personnelles,
                consultez les ressources suivantes :
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.cnil.fr/fr/cookies-et-autres-traceurs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    CNIL - Cookies et autres traceurs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    CNIL - RGPD
                  </a>
                </li>
                <li>
                  <a
                    href="/politique-de-confidentialite"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Notre politique de confidentialité complète
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA final */}
          <section className="bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent/5 dark:to-accent/10 rounded p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-ink dark:text-paper mb-4">
              Besoin d'aide ?
            </h3>
            <p className="text-graphite dark:text-smoke mb-6">
              Si vous avez des questions concernant notre utilisation des cookies ou vos droits RGPD,
              notre équipe est là pour vous répondre.
            </p>
            <a
              href="mailto:contact@onex-technology.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-accent hover:bg-accent/90 text-ink font-medium transition-all duration-200"
            >
              Nous contacter
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

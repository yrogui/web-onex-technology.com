import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles de One-X Technology, cabinet CCaaS basé à Casablanca. Conformité RGPD.",
  alternates: { canonical: "https://onex-technology.com/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-paper dark:bg-primary pt-20">
      {/* Back button */}
      <div className="border-b border-smoke/30 dark:border-charcoal">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-graphite dark:text-smoke hover:text-accent dark:hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink dark:text-paper mb-8 tracking-tight">
            Politique de confidentialité
          </h1>

          <p className="text-sm text-graphite dark:text-smoke mb-12">
            Dernière mise à jour : Janvier 2026
          </p>

          {/* Intro */}
          <div className="mb-12 p-6 bg-accent/5 border border-accent/20 dark:bg-accent/5">
            <p className="text-graphite dark:text-smoke leading-relaxed">
              One-X Technology s'engage à protéger la confidentialité et la sécurité de vos données personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois marocaines en vigueur.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-graphite/5 dark:bg-white/[0.03] border border-smoke/30 dark:border-charcoal">
            <h2 className="font-display text-xl text-ink dark:text-paper mb-4">
              Sommaire
            </h2>
            <ol className="space-y-2 text-sm text-graphite dark:text-smoke">
              <li>
                <a href="#responsable" className="hover:text-accent transition-colors">
                  1. Responsable du traitement
                </a>
              </li>
              <li>
                <a href="#donnees" className="hover:text-accent transition-colors">
                  2. Données collectées
                </a>
              </li>
              <li>
                <a href="#finalites" className="hover:text-accent transition-colors">
                  3. Finalités du traitement
                </a>
              </li>
              <li>
                <a href="#base-legale" className="hover:text-accent transition-colors">
                  4. Base légale du traitement
                </a>
              </li>
              <li>
                <a href="#destinataires" className="hover:text-accent transition-colors">
                  5. Destinataires des données
                </a>
              </li>
              <li>
                <a href="#conservation" className="hover:text-accent transition-colors">
                  6. Durée de conservation
                </a>
              </li>
              <li>
                <a href="#securite" className="hover:text-accent transition-colors">
                  7. Sécurité des données
                </a>
              </li>
              <li>
                <a href="#droits" className="hover:text-accent transition-colors">
                  8. Vos droits
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-accent transition-colors">
                  9. Cookies et technologies similaires
                </a>
              </li>
              <li>
                <a href="#modifications" className="hover:text-accent transition-colors">
                  10. Modifications de la politique
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  11. Contact
                </a>
              </li>
            </ol>
          </div>

          {/* Sections */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Section 1 */}
            <section id="responsable" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                1. Responsable du traitement
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-3">
                <p>
                  Le responsable du traitement des données personnelles est :
                </p>
                <p>
                  <strong className="text-ink dark:text-paper">One-X Technology</strong><br />
                  Casablanca, Maroc<br />
                  Email : <a href="mailto:contact@onex-technology.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">contact@onex-technology.com</a>
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="donnees" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                2. Données collectées
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>
                  Nous collectons les données personnelles suivantes :
                </p>

                <h3 className="font-display text-xl text-ink dark:text-paper mt-6 mb-3">
                  2.1. Données collectées directement
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">Formulaire de contact :</strong> Nom, prénom, email, téléphone (optionnel), société, message</li>
                  <li><strong className="text-ink dark:text-paper">Newsletter :</strong> Adresse email</li>
                  <li><strong className="text-ink dark:text-paper">Demande de devis :</strong> Informations sur votre projet, besoins spécifiques</li>
                </ul>

                <h3 className="font-display text-xl text-ink dark:text-paper mt-6 mb-3">
                  2.2. Données collectées automatiquement
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées, durée de visite</li>
                  <li><strong className="text-ink dark:text-paper">Cookies techniques :</strong> Préférences de thème (mode clair/sombre), langue</li>
                  <li><strong className="text-ink dark:text-paper">Données de performance :</strong> Temps de chargement, erreurs techniques (anonymisées)</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="finalites" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                3. Finalités du traitement
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">Répondre à vos demandes de contact</strong> et vous fournir les informations demandées</li>
                  <li><strong className="text-ink dark:text-paper">Gérer votre abonnement à la newsletter</strong> et vous envoyer nos contenus mensuels</li>
                  <li><strong className="text-ink dark:text-paper">Améliorer notre site web</strong> et optimiser l'expérience utilisateur</li>
                  <li><strong className="text-ink dark:text-paper">Analyser le trafic</strong> et les performances du site (données anonymisées)</li>
                  <li><strong className="text-ink dark:text-paper">Respecter nos obligations légales</strong> (comptabilité, facturation)</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="base-legale" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                4. Base légale du traitement
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>Le traitement de vos données personnelles repose sur les bases légales suivantes :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">Consentement :</strong> Pour l'inscription à la newsletter et l'utilisation de cookies non essentiels</li>
                  <li><strong className="text-ink dark:text-paper">Exécution d'un contrat :</strong> Pour répondre à vos demandes de services</li>
                  <li><strong className="text-ink dark:text-paper">Intérêt légitime :</strong> Pour l'amélioration de nos services et la sécurité du site</li>
                  <li><strong className="text-ink dark:text-paper">Obligation légale :</strong> Pour la conservation de documents comptables</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="destinataires" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                5. Destinataires des données
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>Vos données personnelles sont destinées aux services internes de One-X Technology.</p>
                <p>Nous pouvons partager vos données avec des prestataires de services tiers dans le cadre strict de nos activités :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">Hébergement :</strong> EX2 Hosting (serveurs en France)</li>
                  <li><strong className="text-ink dark:text-paper">Service d'emailing :</strong> Pour l'envoi de la newsletter (sous-traitants RGPD)</li>
                  <li><strong className="text-ink dark:text-paper">Outils d'analyse :</strong> Statistiques de visite (données anonymisées)</li>
                </ul>
                <p>Tous nos prestataires sont soumis à des obligations contractuelles strictes de confidentialité et de sécurité.</p>
                <p><strong className="text-ink dark:text-paper">Nous ne vendons jamais vos données personnelles à des tiers.</strong></p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="conservation" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                6. Durée de conservation
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>Vos données sont conservées pendant les durées suivantes :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">Formulaire de contact :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong className="text-ink dark:text-paper">Newsletter :</strong> Jusqu'à votre désinscription</li>
                  <li><strong className="text-ink dark:text-paper">Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong className="text-ink dark:text-paper">Documents comptables :</strong> 10 ans (obligation légale)</li>
                </ul>
                <p>Au-delà de ces durées, vos données sont supprimées ou anonymisées de manière définitive.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="securite" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                7. Sécurité des données
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>La perte, l'altération ou l'accès non autorisé</li>
                  <li>La divulgation accidentelle ou illicite</li>
                  <li>Les cyberattaques et intrusions malveillantes</li>
                </ul>
                <p><strong className="text-ink dark:text-paper">Mesures de sécurité :</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chiffrement SSL/TLS pour toutes les communications (HTTPS)</li>
                  <li>Hébergement dans un datacenter sécurisé (France)</li>
                  <li>Accès restreint aux données personnelles (principe du moindre privilège)</li>
                  <li>Sauvegardes régulières</li>
                  <li>Monitoring de sécurité</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section id="droits" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                8. Vos droits
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>

                <ul className="space-y-3">
                  <li>
                    <strong className="text-ink dark:text-paper">Droit d'accès :</strong> Obtenir la confirmation que vos données sont traitées et en obtenir une copie
                  </li>
                  <li>
                    <strong className="text-ink dark:text-paper">Droit de rectification :</strong> Corriger des données inexactes ou incomplètes
                  </li>
                  <li>
                    <strong className="text-ink dark:text-paper">Droit à l'effacement :</strong> Demander la suppression de vos données ("droit à l'oubli")
                  </li>
                  <li>
                    <strong className="text-ink dark:text-paper">Droit à la limitation :</strong> Limiter le traitement de vos données dans certaines circonstances
                  </li>
                  <li>
                    <strong className="text-ink dark:text-paper">Droit à la portabilité :</strong> Recevoir vos données dans un format structuré et lisible par machine
                  </li>
                  <li>
                    <strong className="text-ink dark:text-paper">Droit d'opposition :</strong> Vous opposer au traitement de vos données pour des raisons légitimes
                  </li>
                  <li>
                    <strong className="text-ink dark:text-paper">Droit de retirer votre consentement :</strong> Pour les traitements basés sur le consentement (newsletter, cookies)
                  </li>
                </ul>

                <p className="mt-6">
                  <strong className="text-ink dark:text-paper">Comment exercer vos droits :</strong>
                </p>
                <p>
                  Vous pouvez exercer ces droits à tout moment en nous contactant par email à{" "}
                  <a href="mailto:contact@onex-technology.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    contact@onex-technology.com
                  </a>
                  {" "}en précisant votre demande et en joignant une copie de votre pièce d'identité.
                </p>
                <p>
                  Nous nous engageons à répondre à votre demande dans un délai d'un mois maximum.
                </p>

                <div className="mt-6 p-4 bg-graphite/5 dark:bg-white/[0.03] border border-smoke/30 dark:border-charcoal">
                  <p className="text-sm">
                    <strong className="text-ink dark:text-paper">Désinscription de la newsletter :</strong> Un lien de désinscription est présent dans chaque email. Vous pouvez également nous contacter directement.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="cookies" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                9. Cookies et technologies similaires
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>Notre site utilise des cookies pour améliorer votre expérience de navigation.</p>

                <h3 className="font-display text-xl text-ink dark:text-paper mt-6 mb-3">
                  9.1. Cookies strictement nécessaires
                </h3>
                <p>Ces cookies sont indispensables au fonctionnement du site :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">Préférences de thème :</strong> Mémorisation du mode clair/sombre</li>
                  <li><strong className="text-ink dark:text-paper">Session :</strong> Maintien de la connexion et de la sécurité</li>
                </ul>

                <h3 className="font-display text-xl text-ink dark:text-paper mt-6 mb-3">
                  9.2. Cookies de performance (optionnels)
                </h3>
                <p>Ces cookies nous aident à comprendre comment les visiteurs utilisent le site :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pages les plus visitées</li>
                  <li>Temps de navigation</li>
                  <li>Sources de trafic</li>
                </ul>
                <p>Ces données sont anonymisées et ne permettent pas de vous identifier personnellement.</p>

                <h3 className="font-display text-xl text-ink dark:text-paper mt-6 mb-3">
                  9.3. Gestion des cookies
                </h3>
                <p>Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti avant d'accepter un cookie :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                  <li><strong className="text-ink dark:text-paper">Firefox :</strong> Préférences &gt; Vie privée et sécurité</li>
                  <li><strong className="text-ink dark:text-paper">Safari :</strong> Préférences &gt; Confidentialité</li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section id="modifications" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                10. Modifications de la politique
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment pour refléter les évolutions légales, réglementaires ou de nos pratiques.
                </p>
                <p>
                  Toute modification sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
                </p>
                <p>
                  En cas de modification substantielle, nous vous en informerons par email si vous êtes inscrit à notre newsletter.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="contact" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                11. Contact & Réclamation
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits, vous pouvez nous contacter :
                </p>
                <p>
                  <strong className="text-ink dark:text-paper">Email :</strong>{" "}
                  <a href="mailto:contact@onex-technology.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    contact@onex-technology.com
                  </a>
                </p>
                <p>
                  <strong className="text-ink dark:text-paper">Téléphone :</strong> +212 5 22 XX XX XX
                </p>
                <p className="mt-6">
                  Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP) au Maroc, ou auprès de la CNIL en France si vous résidez dans l'Union Européenne.
                </p>
              </div>
            </section>
          </div>

          {/* Back to top */}
          <div className="mt-12 pt-8 border-t border-smoke/30 dark:border-charcoal text-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-accent text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent-dark transition-all duration-300"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

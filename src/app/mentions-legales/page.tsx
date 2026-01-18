import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | ONEX Technology",
  description: "Mentions légales et informations juridiques d'ONEX Technology",
  robots: "noindex, nofollow",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-brand-cream dark:bg-[#0a0c10] pt-20">
      {/* Back button */}
      <div className="border-b border-brand-noir/10 dark:border-white/[0.05]">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-brand-slate dark:text-[#94a3b8] hover:text-brand-gold dark:hover:text-brand-gold transition-colors"
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
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-noir dark:text-white mb-8 tracking-tight">
            Mentions Légales
          </h1>

          <p className="text-sm text-brand-slate dark:text-[#94a3b8] mb-12">
            Dernière mise à jour : Janvier 2026
          </p>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-brand-slate/5 dark:bg-white/[0.03] border border-brand-noir/10 dark:border-white/[0.05]">
            <h2 className="font-serif text-xl text-brand-noir dark:text-white mb-4">
              Sommaire
            </h2>
            <ol className="space-y-2 text-sm text-brand-slate dark:text-[#94a3b8]">
              <li>
                <a href="#editeur" className="hover:text-brand-gold transition-colors">
                  1. Éditeur du site
                </a>
              </li>
              <li>
                <a href="#hebergement" className="hover:text-brand-gold transition-colors">
                  2. Hébergement
                </a>
              </li>
              <li>
                <a href="#propriete" className="hover:text-brand-gold transition-colors">
                  3. Propriété intellectuelle
                </a>
              </li>
              <li>
                <a href="#responsabilite" className="hover:text-brand-gold transition-colors">
                  4. Responsabilité
                </a>
              </li>
              <li>
                <a href="#liens" className="hover:text-brand-gold transition-colors">
                  5. Liens hypertextes
                </a>
              </li>
              <li>
                <a href="#droit" className="hover:text-brand-gold transition-colors">
                  6. Droit applicable
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-gold transition-colors">
                  7. Contact
                </a>
              </li>
            </ol>
          </div>

          {/* Sections */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Section 1 */}
            <section id="editeur" className="mb-12">
              <h2 className="font-serif text-3xl text-brand-noir dark:text-white mb-6 tracking-tight">
                1. Éditeur du site
              </h2>
              <div className="text-brand-slate dark:text-[#94a3b8] leading-relaxed space-y-3">
                <p>
                  <strong className="text-brand-noir dark:text-white">Raison sociale :</strong> ONEX Technology
                </p>
                <p>
                  <strong className="text-brand-noir dark:text-white">Forme juridique :</strong> Cabinet de conseil et delivery
                </p>
                <p>
                  <strong className="text-brand-noir dark:text-white">Type d'activité :</strong> Conseil en transformation digitale, expérience client et solutions CCaaS
                </p>
                <p>
                  <strong className="text-brand-noir dark:text-white">Siège social :</strong> Casablanca, Maroc
                </p>
                <p>
                  <strong className="text-brand-noir dark:text-white">Email :</strong>{" "}
                  <a href="mailto:contact@onex-technology.com" className="text-brand-gold hover:underline">
                    contact@onex-technology.com
                  </a>
                </p>
                <p>
                  <strong className="text-brand-noir dark:text-white">Directeur de publication :</strong> ONEX Technology
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="hebergement" className="mb-12">
              <h2 className="font-serif text-3xl text-brand-noir dark:text-white mb-6 tracking-tight">
                2. Hébergement
              </h2>
              <div className="text-brand-slate dark:text-[#94a3b8] leading-relaxed space-y-3">
                <p>
                  <strong className="text-brand-noir dark:text-white">Hébergeur :</strong> EX2 Hosting
                </p>
                <p>
                  <strong className="text-brand-noir dark:text-white">Société :</strong> EX2
                </p>
                <p>
                  <strong className="text-brand-noir dark:text-white">Adresse :</strong> CP 20031 BP pharmacie de la gare, 12229 Québec (QC), Canada
                </p>
                <p>
                  <strong className="text-brand-noir dark:text-white">Localisation des serveurs :</strong> Datacenter français (région de Paris)
                </p>
                <p className="mt-4">
                  Le site <strong>onex-technology.com</strong> utilise une infrastructure d'hébergement garantissant sécurité et haute disponibilité. Les données sont hébergées dans un datacenter situé en France (région parisienne), assurant une conformité avec la réglementation européenne en matière de protection des données.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="propriete" className="mb-12">
              <h2 className="font-serif text-3xl text-brand-noir dark:text-white mb-6 tracking-tight">
                3. Propriété intellectuelle
              </h2>
              <div className="text-brand-slate dark:text-[#94a3b8] leading-relaxed space-y-4">
                <p>
                  L'ensemble du contenu du présent site <strong>onex-technology.com</strong>, incluant, de façon non limitative, les textes, images, graphismes, logos, vidéos, icônes et mise en forme, est la propriété exclusive d'ONEX Technology, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
                </p>
                <p>
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord écrit préalable d'ONEX Technology.
                </p>
                <p>
                  Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
                <p>
                  Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="responsabilite" className="mb-12">
              <h2 className="font-serif text-3xl text-brand-noir dark:text-white mb-6 tracking-tight">
                4. Responsabilité
              </h2>
              <div className="text-brand-slate dark:text-[#94a3b8] leading-relaxed space-y-4">
                <p>
                  ONEX Technology s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                </p>
                <p>
                  Toutefois, ONEX Technology ne saurait être tenu responsable des omissions, des inexactitudes ou des erreurs involontaires qui auraient pu se glisser dans les informations présentées.
                </p>
                <p>
                  Les informations fournies le sont à titre indicatif et général. Elles n'ont pas de valeur contractuelle et ne sauraient engager la responsabilité d'ONEX Technology.
                </p>
                <p>
                  L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive et décharge ONEX Technology de toute responsabilité à cet égard.
                </p>
                <p>
                  ONEX Technology ne saurait être tenu responsable des dommages directs ou indirects qui pourraient résulter de l'utilisation, de l'accès au site ou de l'impossibilité d'y accéder.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="liens" className="mb-12">
              <h2 className="font-serif text-3xl text-brand-noir dark:text-white mb-6 tracking-tight">
                5. Liens hypertextes
              </h2>
              <div className="text-brand-slate dark:text-[#94a3b8] leading-relaxed space-y-4">
                <p>
                  Le site <strong>onex-technology.com</strong> peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site onex-technology.com.
                </p>
                <p>
                  ONEX Technology n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à l'accès, au contenu ou à l'utilisation de ces sites, ainsi qu'aux dommages pouvant en résulter.
                </p>
                <p>
                  Les liens hypertextes mis en place dans le cadre du présent site en direction d'autres sites et/ou de pages personnelles et d'une manière générale vers toutes ressources existantes sur Internet, ne sauraient engager la responsabilité d'ONEX Technology.
                </p>
                <p>
                  La création de liens hypertextes vers le site <strong>onex-technology.com</strong> nécessite une autorisation écrite préalable d'ONEX Technology.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="droit" className="mb-12">
              <h2 className="font-serif text-3xl text-brand-noir dark:text-white mb-6 tracking-tight">
                6. Droit applicable
              </h2>
              <div className="text-brand-slate dark:text-[#94a3b8] leading-relaxed space-y-4">
                <p>
                  Les présentes mentions légales sont régies par la législation marocaine et européenne (RGPD) pour la protection des données personnelles.
                </p>
                <p>
                  En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Casablanca, Maroc.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="contact" className="mb-12">
              <h2 className="font-serif text-3xl text-brand-noir dark:text-white mb-6 tracking-tight">
                7. Contact
              </h2>
              <div className="text-brand-slate dark:text-[#94a3b8] leading-relaxed space-y-3">
                <p>
                  Pour toute question ou demande d'information concernant le site, ou tout signalement de contenu ou d'activités illicites, l'utilisateur peut contacter l'éditeur à l'adresse suivante :
                </p>
                <p>
                  <strong className="text-brand-noir dark:text-white">Email :</strong>{" "}
                  <a href="mailto:contact@onex-technology.com" className="text-brand-gold hover:underline">
                    contact@onex-technology.com
                  </a>
                </p>
                <p>
                  <strong className="text-brand-noir dark:text-white">Téléphone :</strong> +212 5 22 XX XX XX
                </p>
              </div>
            </section>
          </div>

          {/* Back to top */}
          <div className="mt-12 pt-8 border-t border-brand-noir/10 dark:border-white/[0.05] text-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-brand-gold text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold-dark transition-all duration-300"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

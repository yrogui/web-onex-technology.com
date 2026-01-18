"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Check, Calendar, Linkedin, Bot } from "lucide-react";
import { wording } from "@/data/wording";
import { ContactIcons } from "@/components/ui/contact-icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-white dark:bg-[#11141a]"
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
            {wording.contact.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-noir dark:text-white mb-6 tracking-tight">
            {wording.contact.title}
          </h2>
        </div>

        {/* Méthodes de Contact Rapides (Mise en avant) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-lg font-bold text-brand-noir dark:text-white mb-8 text-center">
              Choisissez votre méthode de contact préférée
            </h3>

            {/* Grille de méthodes de contact premium */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* LinkedIn */}
              <a
                href={wording.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-2xl bg-brand-cream dark:bg-[#1a1c20] border-2 border-brand-noir/10 dark:border-white/10 hover:border-[#0077B5] dark:hover:border-[#0077B5] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#0077B5]/10 dark:bg-[#0077B5]/20 flex items-center justify-center mb-4 group-hover:bg-[#0077B5]/20 dark:group-hover:bg-[#0077B5]/30 transition-colors">
                    <Linkedin className="h-7 w-7 text-[#0077B5]" />
                  </div>
                  <h4 className="font-semibold text-brand-noir dark:text-white mb-2">
                    LinkedIn
                  </h4>
                  <p className="text-sm text-brand-slate dark:text-[#94a3b8]">
                    Message professionnel
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${wording.contact.email}`}
                className="group relative p-6 rounded-2xl bg-brand-cream dark:bg-[#1a1c20] border-2 border-brand-noir/10 dark:border-white/10 hover:border-brand-gold dark:hover:border-brand-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                    <Mail className="h-7 w-7 text-brand-gold" />
                  </div>
                  <h4 className="font-semibold text-brand-noir dark:text-white mb-2">
                    Email
                  </h4>
                  <p className="text-sm text-brand-slate dark:text-[#94a3b8]">
                    Réponse sous 24h
                  </p>
                </div>
              </a>

              {/* Calendly (Recommandé) */}
              <a
                href={wording.contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-2 border-blue-600 dark:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Badge "Recommandé" */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                    <Calendar className="h-3 w-3" />
                    RECOMMANDÉ
                  </span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-blue-600/20 dark:bg-blue-600/30 flex items-center justify-center mb-4 group-hover:bg-blue-600/30 dark:group-hover:bg-blue-600/40 transition-colors">
                    <Calendar className="h-7 w-7 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-brand-noir dark:text-white mb-2">
                    Calendly
                  </h4>
                  <p className="text-sm text-brand-slate dark:text-[#94a3b8]">
                    RDV immédiat (30 min)
                  </p>
                </div>
              </a>

              {/* Bot IA (Bientôt) */}
              <button
                onClick={() => {
                  // Trigger du modal via l'icône dans ContactIcons
                  const event = new CustomEvent("openBotModal");
                  window.dispatchEvent(event);
                }}
                className="group relative p-6 rounded-2xl bg-brand-cream dark:bg-[#1a1c20] border-2 border-brand-noir/10 dark:border-white/10 hover:border-purple-600 dark:hover:border-purple-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Badge "Bientôt" */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-600/10 text-purple-600 text-xs font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                    </span>
                    BIENTÔT
                  </span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-purple-600/10 dark:bg-purple-600/20 flex items-center justify-center mb-4 group-hover:bg-purple-600/20 dark:group-hover:bg-purple-600/30 transition-colors">
                    <MessageCircle className="h-7 w-7 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-brand-noir dark:text-white mb-2">
                    Assistant IA
                  </h4>
                  <p className="text-sm text-brand-slate dark:text-[#94a3b8]">
                    Réponses instantanées
                  </p>
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Promesse (ce que le prospect obtient) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-xl font-bold text-brand-noir dark:text-white mb-6 text-center">
            {wording.contact.promise.title}
          </h3>
          <ul className="space-y-4">
            {wording.contact.promise.items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-brand-slate dark:text-[#94a3b8]"
              >
                <Check className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 3 raisons de contacter (use cases) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-brand-noir dark:text-white mb-10 text-center">
            {wording.contact.reasons.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {wording.contact.reasons.items.map((reason, index) => (
              <div
                key={index}
                className="bg-brand-cream dark:bg-[#0a0c10] p-8 border border-brand-noir/10 dark:border-white/[0.05] hover:border-brand-gold/30 dark:hover:border-brand-gold/30 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-brand-noir dark:text-white mb-4">
                  {reason.title}
                </h4>
                <p className="text-sm text-brand-slate dark:text-[#94a3b8] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-brand-noir dark:text-white mb-8">
              Coordonnées Directes
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-brand-slate dark:text-[#94a3b8] mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${wording.contact.email}`}
                    className="text-brand-noir dark:text-white hover:text-brand-gold transition-colors"
                  >
                    {wording.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-brand-slate dark:text-[#94a3b8] mb-1">
                    Téléphone
                  </p>
                  <a
                    href={`tel:${wording.contact.phone}`}
                    className="text-brand-noir dark:text-white hover:text-brand-gold transition-colors"
                  >
                    {wording.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-brand-slate dark:text-[#94a3b8] mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${wording.contact.whatsapp.replace(/\s/g, "")}`}
                    className="text-brand-noir dark:text-white hover:text-brand-gold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {wording.contact.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-brand-slate dark:text-[#94a3b8] mb-1">
                    Localisation
                  </p>
                  <p className="text-brand-noir dark:text-white">
                    {wording.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            suppressHydrationWarning
          >
            <h3 className="font-serif text-2xl text-brand-noir dark:text-white mb-4">
              {wording.contact.form.title}
            </h3>
            <p className="text-brand-slate dark:text-[#94a3b8] mb-8">
              {wording.contact.form.subtitle}
            </p>

            <form className="space-y-5" suppressHydrationWarning>
              {/* Nom + Société */}
              <div>
                <input
                  type="text"
                  placeholder={wording.contact.form.placeholders.name}
                  className="w-full px-5 py-4 bg-brand-cream dark:bg-[#0a0c10] border border-brand-noir/20 dark:border-white/[0.05] text-brand-noir dark:text-white placeholder:text-brand-slate/50 dark:placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-brand-gold transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder={wording.contact.form.placeholders.email}
                  className="w-full px-5 py-4 bg-brand-cream dark:bg-[#0a0c10] border border-brand-noir/20 dark:border-white/[0.05] text-brand-noir dark:text-white placeholder:text-brand-slate/50 dark:placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-brand-gold transition-colors"
                  required
                />
              </div>

              {/* Téléphone */}
              <div>
                <input
                  type="tel"
                  placeholder={wording.contact.form.placeholders.phone}
                  className="w-full px-5 py-4 bg-brand-cream dark:bg-[#0a0c10] border border-brand-noir/20 dark:border-white/[0.05] text-brand-noir dark:text-white placeholder:text-brand-slate/50 dark:placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>

              {/* Nombre d'agents (optional, pour qualifier) */}
              <div>
                <input
                  type="text"
                  placeholder={wording.contact.form.placeholders.agents}
                  className="w-full px-5 py-4 bg-brand-cream dark:bg-[#0a0c10] border border-brand-noir/20 dark:border-white/[0.05] text-brand-noir dark:text-white placeholder:text-brand-slate/50 dark:placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={5}
                  placeholder={wording.contact.form.placeholders.project}
                  className="w-full px-5 py-4 bg-brand-cream dark:bg-[#0a0c10] border border-brand-noir/20 dark:border-white/[0.05] text-brand-noir dark:text-white placeholder:text-brand-slate/50 dark:placeholder:text-[#94a3b8]/50 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  required
                />
              </div>

              {/* Microcopy anti-friction */}
              <div className="space-y-2 pt-2">
                <p className="text-xs text-brand-slate dark:text-[#94a3b8]">
                  {wording.contact.form.microcopy.responseTime}
                </p>
                <p className="text-xs text-brand-slate dark:text-[#94a3b8]">
                  {wording.contact.form.microcopy.confidentiality}
                </p>
                <p className="text-xs text-brand-slate dark:text-[#94a3b8]">
                  {wording.contact.form.microcopy.noCommitment}
                </p>
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                className="w-full px-10 py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-noir text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
              >
                {wording.contact.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

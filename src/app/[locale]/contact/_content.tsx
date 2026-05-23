"use client";

import { motion } from "framer-motion";
import { Contact } from "@/components/sections/contact";

export function ContactPageContent() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              CONTACT
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] text-paper mb-6 max-w-3xl">
              Cadrer votre <em className="italic font-display text-accent">inconnue</em>.
            </h1>
            <p className="text-[17px] leading-[1.7] text-smoke max-w-2xl">
              Quelques questions pour préparer un échange utile. 30 minutes avec
              Yassine — sans engagement, sans prospection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <Contact />
    </main>
  );
}

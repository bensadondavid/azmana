"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, FileText, Globe, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Plan = {
  icon: LucideIcon;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
};

const plans: Plan[] = [
  {
    icon: Globe,
    name: "Site Web",
    price: "280",
    description:
      "Un site web interactif et personnalisé dédié à votre événement.",
    features: [
      "Modèle personnalisé avec vos informations",
      "Site web dédié à votre événement",
      "Partage facile par lien",
      "Livraison sous 7 à 10 jours",
    ],
    cta: "Commencer",
    featured: true,
  },
  {
    icon: Video,
    name: "Vidéo",
    price: "70",
    description: "Une vidéo d'invitation animée et personnalisée.",
    features: [
      "Vidéo personnalisée pour votre événement",
      "Prête à partager sur WhatsApp",
      "Livraison sous 7 à 10 jours",
    ],
    cta: "Commander",
    featured: false,
  },
  {
    icon: FileText,
    name: "PDF",
    price: "30",
    description: "Un faire-part PDF élégant à imprimer ou à envoyer.",
    features: [
      "Faire-part PDF personnalisé",
      "Format prêt à imprimer ou à partager",
      "Livraison sous 7 à 10 jours",
    ],
    cta: "Commander",
    featured: false,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tarifs" className="bg-secondary/30 py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div ref={ref} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-5 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Tarifs
            </span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mb-3 font-serif text-4xl font-light text-foreground sm:text-5xl"
          >
            Simple & transparent
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm font-light text-muted-foreground"
          >
            Un tarif unique pour chaque type de création.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  plan.featured
                    ? "border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/20"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${
                    plan.featured ? "bg-primary-foreground/15" : "bg-primary/10"
                  }`}
                >
                  <Icon
                    size={22}
                    className={
                      plan.featured
                        ? "text-primary-foreground"
                        : "text-primary"
                    }
                  />
                </div>

                <h3
                  className={`mb-2 font-serif text-2xl font-medium ${
                    plan.featured ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mb-6 font-sans text-sm font-light ${
                    plan.featured
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-7">
                  <span
                    className={`font-serif text-5xl font-light ${
                      plan.featured
                        ? "text-primary-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {plan.price}€
                  </span>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${
                          plan.featured
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                      <span
                        className={`font-sans text-sm leading-snug font-light ${
                          plan.featured
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`w-full rounded-full py-3 text-center font-sans text-sm font-medium tracking-wide transition-all duration-300 ${
                    plan.featured
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
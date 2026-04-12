"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Palette, Share2, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: Palette,
    title: "Designs élégants & variés",
    desc: "Choisissez parmi une sélection de créations modernes et raffinées, pour chaque type d'événement.",
  },
  {
    icon: Share2,
    title: "Facile à partager",
    desc: "Envoyez votre invitation en un clic via WhatsApp, email ou tout autre canal.",
  },
  {
    icon: Leaf,
    title: "Écologique & pratique",
    desc: "Zéro papier, zéro stress. Tout se fait en ligne, de la personnalisation à l'envoi.",
  },
  {
    icon: Smartphone,
    title: "Aucune app requise",
    desc: "Vos invités accèdent à l'invitation directement depuis leur navigateur.",
  },
];

type FeatureCardProps = {
  feature: Feature;
  index: number;
};

function FeatureCard({ feature, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
        <Icon size={22} className="text-primary" />
      </div>

      <h3 className="mb-3 font-serif text-xl font-medium text-foreground">
        {feature.title}
      </h3>

      <p className="font-sans text-sm leading-relaxed font-light text-muted-foreground">
        {feature.desc}
      </p>
    </motion.div>
  );
}

export default function WhyUs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div ref={ref} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Pourquoi Azmana
            </span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-light text-foreground sm:text-5xl"
          >
            Une invitation qui vous ressemble
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
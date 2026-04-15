"use client";

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

function FeatureCard({ feature }: FeatureCardProps) {

  const Icon = feature.icon;

  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
        <Icon size={22} className="text-primary" />
      </div>

      <h3 className="mb-3 font-serif text-xl font-medium text-foreground">
        {feature.title}
      </h3>

      <p className="font-sans text-sm leading-relaxed font-light text-muted-foreground">
        {feature.desc}
      </p>
    </div>
  );
}

export default function WhyUs() {

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <div
            className="mb-5 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Pourquoi Azmana
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>

          <h2 className="font-serif text-4xl font-light text-foreground sm:text-5xl">
            Une invitation qui vous ressemble
          </h2>
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
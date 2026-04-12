"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Palette, RotateCcw, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  number: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Échange",
    desc: "Nous échangeons ensemble pour comprendre votre vision, vos goûts et les détails de votre événement.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Création",
    desc: "Nos designers créent votre invitation sur mesure en s'inspirant du modèle choisi et de vos informations.",
  },
  {
    icon: RotateCcw,
    number: "03",
    title: "Ajustements",
    desc: "Vous validez ou demandez des ajustements — nous affinons jusqu'à ce que tout soit parfait.",
  },
  {
    icon: Send,
    number: "04",
    title: "Livraison",
    desc: "Votre invitation est livrée en 7 à 10 jours, prête à être partagée avec tous vos invités.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div ref={ref} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-5 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Le processus
            </span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl font-light text-foreground sm:text-5xl"
          >
            Comment ça marche ?
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] hidden h-px bg-border lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                    <Icon size={26} className="text-primary" />
                    <span className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-sans text-xs font-medium text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="mb-3 font-serif text-xl font-medium text-foreground">
                    {step.title}
                  </h3>

                  <p className="font-sans text-sm leading-relaxed font-light text-muted-foreground">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
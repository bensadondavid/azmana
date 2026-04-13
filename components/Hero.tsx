"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
});

const stats = [
  { number: "3000+", label: "Invitations envoyées" },
  { number: "4.9★", label: "Note moyenne" },
  { number: "7-10j", label: "Délai de livraison" },
];

const previews = [
  {
    src: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-6-preview.webp",
    alt: "Modèle Noa & David",
    className:
      "relative z-10 w-36 sm:w-44 rounded-3xl overflow-hidden border border-white/20 shadow-2xl",
    style: { transform: "rotate(-4deg) translateY(20px)" },
    delay: 0.5,
  },
  {
    src: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-3-preview.webp",
    alt: "Modèle Victoria & Alone",
    className:
      "relative z-20 w-40 sm:w-52 rounded-3xl overflow-hidden border border-white/20 shadow-2xl",
    style: undefined,
    delay: 0.65,
  },
  {
    src: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-7-preview.webp",
    alt: "Modèle Judith",
    className:
      "relative z-10 w-36 sm:w-44 rounded-3xl overflow-hidden border border-white/20 shadow-2xl",
    style: { transform: "rotate(4deg) translateY(20px)" },
    delay: 0.8,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pb-10 sm:pb-1"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[50vh] w-[50vw] translate-x-1/3 -translate-y-1/4 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[40vh] w-[40vw] -translate-x-1/4 translate-y-1/4 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-16 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col">
            <motion.div
              {...fadeUp(0.1)}
              className="mb-8 inline-flex items-center gap-2"
            >
              <span className="h-px w-8 bg-primary" />
              <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Invitations Digitales de Luxe
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.25)}
              className="mb-6 font-serif text-5xl leading-[1.1] font-light text-foreground sm:text-6xl lg:text-7xl"
            >
              Chaque moment
              <br />
              <em className="not-italic text-primary">mérite</em> une
              <br />
              invitation parfaite.
            </motion.h1>

            <motion.p
              {...fadeUp(0.4)}
              className="mb-10 max-w-lg font-sans text-base leading-relaxed font-light text-muted-foreground"
            >
              Mariage, Bar Mitsva, Bat Mitsva, Brit Mila, naissance…
              Offrez à vos invités une expérience digitale immersive et
              inoubliable, entièrement personnalisée à votre image.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
              <Link
                href="#modeles"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
              >
                <Sparkles size={15} />
                Voir les modèles
              </Link>

              <Link
                href="#tarifs"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-sans text-sm font-light tracking-wide text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Nos tarifs
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.65)}
              className="mt-14 flex items-center gap-10 border-t border-border pt-10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-light text-primary">
                    {stat.number}
                  </p>
                  <p className="mt-0.5 font-sans text-xs tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute h-[340px] w-[340px] animate-pulse rounded-full border border-primary/20" />
            <div className="absolute h-[440px] w-[440px] rounded-full border border-primary/10" />

            <div className="relative flex items-end justify-center gap-4">
              {previews.map((preview) => (
                <motion.div
                  key={preview.alt}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: preview.delay }}
                  className={preview.className}
                  style={preview.style}
                >
                  <Image
                    src={preview.src}
                    alt={preview.alt}
                    width={420}
                    height={840}
                    className="h-auto w-full"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Découvrir
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
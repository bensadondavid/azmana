"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

type Category =
  | "Tous"
  | "Mariage"
  | "Bar Mitsva"
  | "Bat Mitsva"
  | "Brit Mila"
  | "Save the Date";

type ModelItem = {
  name: string;
  category: Exclude<Category, "Tous">;
  img: string;
};

const categories: Category[] = [
  "Tous",
  "Mariage",
  "Bar Mitsva",
  "Bat Mitsva",
  "Brit Mila",
  "Save the Date",
];

const models: ModelItem[] = [
  {
    name: "Noa & David",
    category: "Mariage",
    img: "https://www.azmana.fr/Modeles/modele-6-preview.webp",
  },
  {
    name: "Victoria & Alone",
    category: "Mariage",
    img: "https://www.azmana.fr/Modeles/modele-3-preview.webp",
  },
  {
    name: "Judith & Dan-David",
    category: "Mariage",
    img: "https://www.azmana.fr/Modeles/modele-7-preview.webp",
  },
  {
    name: "Lola & Hillel",
    category: "Mariage",
    img: "https://www.azmana.fr/Modeles/modele-1-preview.webp",
  },
  {
    name: "Yael & Levy",
    category: "Mariage",
    img: "https://www.azmana.fr/Modeles/modele-4-preview.webp",
  },
  {
    name: "Léa & Shay",
    category: "Mariage",
    img: "https://www.azmana.fr/Modeles/modele-8-preview.webp",
  },
  {
    name: "Samuel",
    category: "Bar Mitsva",
    img: "https://www.azmana.fr/Modeles/modele-bm-2-preview.webp",
  },
  {
    name: "Yona",
    category: "Bar Mitsva",
    img: "https://www.azmana.fr/Modeles/modele-bm-1-preview.webp",
  },
  {
    name: "Lev",
    category: "Bat Mitsva",
    img: "https://www.azmana.fr/Modeles/modele-btm-1-preview.webp",
  },
  {
    name: "Eva",
    category: "Bat Mitsva",
    img: "https://www.azmana.fr/Modeles/modele-btm-3-preview.webp",
  },
  {
    name: "Brit Mila",
    category: "Brit Mila",
    img: "https://www.azmana.fr/Modeles/brit-mila-1.webp",
  },
  {
    name: "Brit Mila",
    category: "Brit Mila",
    img: "https://www.azmana.fr/Modeles/brit-mila-2.webp",
  },
  {
    name: "Rachel & Yonie",
    category: "Save the Date",
    img: "https://www.azmana.fr/Modeles/std-3.webp",
  },
  {
    name: "Myriam & Eli",
    category: "Save the Date",
    img: "https://www.azmana.fr/Modeles/std-4.webp",
  },
  {
    name: "Ava & Lyron",
    category: "Save the Date",
    img: "https://www.azmana.fr/Modeles/std-9.webp",
  },
  {
    name: "Ambre & Dylan",
    category: "Mariage",
    img: "https://www.azmana.fr/Modeles/ambre-dylan-preview.webp",
  },
];

type ModelCardProps = {
  model: ModelItem;
  index: number;
};

function ModelCard({ model, index }: ModelCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-muted"
    >
      <Image
        src={model.img}
        alt={model.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        unoptimized
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute right-0 bottom-0 left-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="mb-1 font-sans text-xs uppercase tracking-widest text-white/70">
          {model.category}
        </p>
        <p className="font-serif text-xl font-light text-white">{model.name}</p>
      </div>

      <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <ExternalLink size={14} className="text-foreground" />
      </div>
    </motion.div>
  );
}

export default function Models() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");
  const [showAll, setShowAll] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    activeCategory === "Tous"
      ? models
      : models.filter((model) => model.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="modeles" className="bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div ref={ref} className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-5 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Galerie
            </span>
            <span className="h-px w-8 bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mb-4 font-serif text-4xl font-light text-foreground sm:text-5xl"
          >
            Découvrez nos modèles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-md font-sans text-sm font-light text-muted-foreground"
          >
            Des créations uniques pour chaque événement de votre vie.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`rounded-full px-5 py-2 font-sans text-sm font-light transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {displayed.map((model, index) => (
            <ModelCard
              key={`${model.name}-${model.category}-${index}`}
              model={model}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          {filtered.length > 8 && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 font-sans text-sm font-light text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              {showAll
                ? "Voir moins"
                : `Voir tous les modèles (${filtered.length})`}
            </button>
          )}

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 font-sans text-sm text-primary transition-all duration-300 hover:gap-3"
          >
            Commencer votre invitation <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
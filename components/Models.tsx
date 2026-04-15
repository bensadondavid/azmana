"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Category =
  | "Tous"
  | "Mariage"
  | "Bar Mitsva"
  | "Bat Mitsva"

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
];

const models: ModelItem[] = [
  {
    name: "Noa & David",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-6-preview.webp",
  },
  {
    name: "Victoria & Alone",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-3-preview.webp",
  },
  {
    name: "Judith & Dan-David",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-7-preview.webp",
  },
  {
    name: "Lola & Hillel",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-1-preview.webp",
  },
  {
    name: "Yael & Levy",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-4-preview.webp",
  },
  {
    name: "Léa & Shay",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-8-preview.webp",
  },
  {
    name: "Samuel",
    category: "Bar Mitsva",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-bm-2-preview.webp",
  },
  {
    name: "Yona",
    category: "Bar Mitsva",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-bm-1-preview.webp",
  },
  {
    name: "Lev",
    category: "Bat Mitsva",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-btm-1-preview.webp",
  },
  {
    name: "Ambre & Dylan",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/ambre-dylan-preview.webp",
  },
  {
    name: "Lola & Hillel",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-2-preview.webp",
  },
  {
    name: "Yael & Levy",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-5-preview.webp",
  },
  {
    name: "Shirel & Moshé",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-9-preview.webp",
  },
  {
    name: "Marine & Daniel",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/marine-daniel-preview.webp",
  },
  {
    name: "Ephraim",
    category: "Bar Mitsva",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/ephraim-amos-preview.webp",
  },
  {
    name: "Emmanuel",
    category: "Bar Mitsva",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/bm-manu-preview.webp",
  },
  {
    name: "David",
    category: "Bar Mitsva",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-bm-3-preview.webp",
  },
  {
    name: "Lois & Ruben",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/lois-ruben-preview.webp",
  },
  {
    name: "Elsa & Dan",
    category: "Mariage",
    img: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/elsa-dan-preview.webp",
  },
];

function ModelCard({ model }: { model: ModelItem }) {
  return (
    <div className="group relative aspect-3/4 cursor-pointer overflow-hidden rounded-2xl bg-muted">
      <Image
        src={model.img}
        alt={model.name}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute right-0 bottom-0 left-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="mb-1 font-sans text-xs uppercase tracking-widest text-white/70">
          {model.category}
        </p>
        <p className="font-serif text-xl font-light text-white">{model.name}</p>
      </div>
    </div>
  );
}

export default function Models() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeCategory === "Tous"
      ? models
      : models.filter((model) => model.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section id="modeles" className="bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 opacity-0 animate-[fade-up_0.6s_ease-out_0.1s_forwards]">
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Galerie
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>

          <h2 className="mb-4 font-serif text-4xl font-light text-foreground sm:text-5xl opacity-0 animate-[fade-up_0.6s_ease-out_0.2s_forwards]">
            Découvrez nos modèles
          </h2>

          <p className="mx-auto max-w-md font-sans text-sm font-light text-muted-foreground opacity-0 animate-[fade-up_0.6s_ease-out_0.3s_forwards]">
            Des créations uniques pour chaque événement de votre vie.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3 opacity-0 animate-[fade-up_0.6s_ease-out_0.35s_forwards]">
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
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {displayed.map((model, index) => (
            <ModelCard
              key={`${model.name}-${model.category}-${index}`}
              model={model}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          {filtered.length > 8 && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 font-sans text-sm font-light text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary cursor-pointer"
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

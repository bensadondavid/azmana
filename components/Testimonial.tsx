"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  name: string;
  event: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah L.",
    event: "Mariage",
    text: "Azmana m'a permis d'envoyer une invitation élégante et interactive en quelques jours. Simple, efficace et vraiment magnifique !",
  },
  {
    name: "David R.",
    event: "Bar Mitsva",
    text: "Une superbe expérience, mes invités ont adoré le concept. Le rendu était au-delà de mes espérances. Je recommande vivement !",
  },
  {
    name: "Elodie M.",
    event: "Mariage",
    text: "J'ai été bluffée par la qualité et la personnalisation possible. Un must-have pour un événement réussi et mémorable.",
  },
  {
    name: "Jonathan S.",
    event: "Brit Mila",
    text: "Service rapide et efficace ! Mon faire-part était prêt en quelques jours, et mes invités ont adoré l'expérience digitale.",
  },
  {
    name: "Esther M.",
    event: "Bat Mitsva",
    text: "L'équipe est à l'écoute et le résultat final était au-delà de mes attentes. Chaque détail était parfait.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);

  const prev = () => {
    setDirection(-1);
    setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((value) => (value + 1) % testimonials.length);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const getIndex = (offset: number) => {
    return (current + offset + testimonials.length) % testimonials.length;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 60) next();
    else if (diff < -60) prev();
    touchStartX.current = null;
  };

  const currentTestimonial = testimonials[current];
  const slideAnimation =
    direction === 1
      ? "animate-[slide-from-right_0.35s_ease-out_forwards]"
      : "animate-[slide-from-left_0.35s_ease-out_forwards]";

  return (
    <section id="avis" className="overflow-hidden bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 opacity-0 animate-[fade-up_0.6s_ease-out_0.1s_forwards]">
            <span className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Témoignages
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>

          <h2 className="mb-4 font-serif text-4xl font-light text-foreground sm:text-5xl opacity-0 animate-[fade-up_0.6s_ease-out_0.2s_forwards]">
            Ils nous ont fait confiance
          </h2>

          <div className="flex items-center justify-center gap-2 opacity-0 animate-[fade-in_0.6s_ease-out_0.3s_forwards]">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="font-sans text-sm font-light text-muted-foreground">
              4.9 / 5
            </span>
          </div>
        </div>

        <div className="relative opacity-0 animate-[fade-up_0.6s_ease-out_0.35s_forwards]">
          {/* Mobile */}
          <div className="relative md:hidden">
            <div
              key={current}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className={`cursor-grab touch-pan-y rounded-2xl border border-primary/30 bg-card p-7 shadow-lg active:cursor-grabbing ${slideAnimation}`}
            >
              <div className="mb-4 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={13} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="mb-6 font-serif text-lg leading-relaxed font-light text-foreground italic">
                &quot;{currentTestimonial.text}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                  <span className="font-serif text-base text-primary">
                    {currentTestimonial.name[0]}
                  </span>
                </div>

                <div>
                  <p className="font-sans text-sm font-medium text-foreground">
                    {currentTestimonial.name}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">
                    {currentTestimonial.event}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden gap-6 md:grid md:grid-cols-3">
            {[-1, 0, 1].map((offset) => {
              const testimonial = testimonials[getIndex(offset)];
              const isCenter = offset === 0;

              return (
                <div
                  key={`${testimonial.name}-${testimonial.event}-${offset}`}
                  className={`rounded-2xl border p-7 transition-all duration-500 ${
                    isCenter
                      ? "scale-100 border-primary/30 bg-card opacity-100 shadow-lg"
                      : "scale-95 border-border bg-card opacity-50"
                  }`}
                >
                  <div className="mb-4 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={13} className="fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="mb-6 font-serif text-lg leading-relaxed font-light text-foreground italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                      <span className="font-serif text-base text-primary">
                        {testimonial.name[0]}
                      </span>
                    </div>

                    <div>
                      <p className="font-sans text-sm font-medium text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground">
                        {testimonial.event}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Témoignage précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Aller au témoignage ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current ? "w-6 bg-primary" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Témoignage suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

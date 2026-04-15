import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";

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
    delay: "0.5s",
  },
  {
    src: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-3-preview.webp",
    alt: "Modèle Victoria & Alone",
    className:
      "relative z-20 w-40 sm:w-52 rounded-3xl overflow-hidden border border-white/20 shadow-2xl",
    style: undefined,
    delay: "0.65s",
  },
  {
    src: "https://pub-32ed76fafe064db4932e2c55271750cb.r2.dev/modele-7-preview.webp",
    alt: "Modèle Judith",
    className:
      "relative z-10 w-36 sm:w-44 rounded-3xl overflow-hidden border border-white/20 shadow-2xl",
    style: { transform: "rotate(4deg) translateY(20px)" },
    delay: "0.8s",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pb-10 sm:pb-1"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[50vh] w-[50vw] translate-x-1/3 -translate-y-1/4 rounded-full bg-primary/5 blur-[60px]" />
        <div className="absolute bottom-0 left-0 h-[40vh] w-[40vw] -translate-x-1/4 translate-y-1/4 rounded-full bg-primary/5 blur-[50px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-16 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col">
            <div
              className="mb-8 inline-flex items-center gap-2 opacity-0 animate-[fade-up_0.8s_ease-out_0.1s_forwards]"
            >
              <span className="h-px w-8 bg-primary" />
              <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Invitations Digitales de Luxe
              </span>
            </div>

            <h1
              className="mb-6 font-serif text-5xl leading-[1.1] font-light text-foreground opacity-0 sm:text-6xl lg:text-7xl animate-[fade-up_0.8s_ease-out_0.25s_forwards]"
            >
              Chaque moment
              <br />
              <em className="not-italic text-primary">mérite</em> une
              <br />
              invitation parfaite.
            </h1>

            <p
              className="mb-10 max-w-lg font-sans text-base leading-relaxed font-light text-muted-foreground opacity-0 animate-[fade-up_0.8s_ease-out_0.4s_forwards]"
            >
              Mariage, Bar Mitsva, Bat Mitsva, Brit Mila, naissance…
              Offrez à vos invités une expérience digitale immersive et
              inoubliable, entièrement personnalisée à votre image.
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-[fade-up_0.8s_ease-out_0.5s_forwards]"
            >
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
            </div>

            <div
              className="mt-14 flex items-center gap-10 border-t border-border pt-10 opacity-0 animate-[fade-up_0.8s_ease-out_0.65s_forwards]"
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
            </div>
          </div>

          <div
            className="relative flex items-center justify-center opacity-0 animate-[fade-right_1s_ease-out_0.3s_forwards]"
          >
            <div className="absolute h-[340px] w-[340px] animate-pulse rounded-full border border-primary/20" />
            <div className="absolute h-[440px] w-[440px] rounded-full border border-primary/10" />

            <div className="relative flex items-end justify-center gap-4">
              {previews.map((preview) => (
                <div
                  key={preview.alt}
                  className={`${preview.className} opacity-0 animate-[fade-up_0.8s_ease-out_forwards]`}
                  style={{
                    ...preview.style,
                    animationDelay: preview.delay,
                  }}
                >
                  <Image
                    src={preview.src}
                    alt={preview.alt}
                    width={420}
                    height={840}
                    sizes="(max-width: 640px) 144px, 208px"
                    className="h-auto w-full"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0 animate-[fade-in_0.8s_ease-out_1.2s_forwards]"
      >
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Découvrir
        </span>

        <div className="animate-[bounce-soft_1.5s_ease-in-out_infinite]">
          <ArrowDown size={14} className="text-primary" />
        </div>
      </div>
    </section>
  );
}
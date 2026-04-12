import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground py-10 text-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-12">
        <span className="font-serif text-xl font-light tracking-[0.15em]">
          AZM<span className="text-primary">A</span>NA
        </span>

        <p className="text-center font-sans text-xs text-background/50">
          © {new Date().getFullYear()} Azmana — Invitations digitales élégantes
          & personnalisées
        </p>

        <div className="flex gap-6">
          <Link
            href="#modeles"
            className="font-sans text-xs text-background/60 transition-colors hover:text-background"
          >
            Modèles
          </Link>
          <Link
            href="#tarifs"
            className="font-sans text-xs text-background/60 transition-colors hover:text-background"
          >
            Tarifs
          </Link>
          <Link
            href="#contact"
            className="font-sans text-xs text-background/60 transition-colors hover:text-background"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
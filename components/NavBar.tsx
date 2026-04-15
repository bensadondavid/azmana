"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Modèles", href: "#modeles" },
  { label: "Comment ça marche", href: "#process" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link href="#hero" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-light tracking-[0.15em] text-foreground">
              AZM<span className="text-primary">A</span>NA
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-sans text-sm font-light tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 md:inline-flex"
          >
            Commencer
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-2 text-foreground md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        aria-hidden={!mobileOpen}
        className={`fixed inset-x-0 top-16 z-40 border-b border-border bg-background/98 backdrop-blur-md transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans text-base font-light text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 font-sans text-sm font-medium text-primary-foreground"
          >
            Commencer
          </Link>
        </div>
      </div>
    </>
  );
}
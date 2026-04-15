"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type ContactForm = {
  lastname: string;
  firstname: string;
  phone: string;
  message: string;
};

const initialForm: ContactForm = {
  lastname: "",
  firstname: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
       const payload = {
        lastname: form.lastname.trim(),
        firstname: form.firstname.trim(),
        phone: form.phone.trim(),
        ...(form.message.trim() ? { message: form.message.trim() } : {}),
      };
      const res = await fetch("/api/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSent(true);
      setForm(initialForm);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />
              <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Contact
              </span>
            </div>

            <h2 className="mb-4 font-serif text-4xl font-light text-foreground sm:text-5xl">
              Créons votre
              <br />
              <em className="text-primary not-italic">invitation ensemble.</em>
            </h2>

            <p className="mb-10 max-w-sm font-sans text-sm leading-relaxed font-light text-muted-foreground">
              Laissez-nous vos coordonnées et nous vous rappellerons rapidement
              pour trouver la solution idéale pour votre événement.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="https://wa.me/33783695850"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-100 bg-green-50 transition-colors group-hover:bg-green-100">
                  <FaWhatsapp size={19} className="text-green-600" />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted-foreground">
                    WhatsApp
                  </p>
                  <p className="font-sans text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    +33 7 83 69 58 50
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact@azmana.fr"
                className="flex items-center gap-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Mail size={19} className="text-primary" />
                </div>
                <div>
                  <p className="font-sans text-xs text-muted-foreground">
                    Email
                  </p>
                  <p className="font-sans text-sm font-medium text-foreground">
                    contact@azmana.fr
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send size={28} className="text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-2xl font-light text-foreground">
                  Message envoyé !
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Nous vous recontacterons très prochainement.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "lastname", label: "Nom", placeholder: "Nom" },
                    { name: "firstname", label: "Prénom", placeholder: "Prénom" },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col gap-1.5">
                      <label
                        htmlFor={field.name}
                        className="font-sans text-xs font-medium tracking-wide text-muted-foreground"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={form[field.name as keyof ContactForm]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 font-sans text-sm text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="font-sans text-xs font-medium tracking-wide text-muted-foreground"
                  >
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 font-sans text-sm text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-sans text-xs font-medium tracking-wide text-muted-foreground"
                  >
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre événement, vos préférences..."
                    rows={4}
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 font-sans text-sm text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none"
                  />
                </div>

                {error && (
                  <p className="font-sans text-sm text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60"
                >
                  <Send size={15} />
                  {loading ? "Envoi en cours..." : "Envoyer par email"}
                </button>

                <div className="flex items-center gap-3">
                  <span className="h-px flex-1 bg-border" />
                  <span className="font-sans text-xs text-muted-foreground">
                    ou
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <a
                  href={'https://wa.me/33783695850'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-3.5 text-center font-sans text-sm font-medium text-green-700 transition-all duration-300 hover:bg-green-100 sm:text-base"
                >
                  <FaWhatsapp size={19} className="shrink-0 text-green-600" />
                  <span className="leading-tight">
                    Contactez-nous aussi par WhatsApp
                  </span>
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
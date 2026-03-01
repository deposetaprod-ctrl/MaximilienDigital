"use client";

import { Dialog } from "@base-ui/react";
import Image from "next/image";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import { budgetOptions, developerOptions } from "@/lib/data";
import { useState, type FormEvent } from "react";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialDescription?: string;
  /** Développeur déjà choisi depuis l'estimation (Jules / Mathieu) */
  initialDeveloper?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactFormModal({ open, onOpenChange, initialDescription, initialDeveloper }: ContactFormModalProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      budget: formData.get("budget") as string,
      developer: formData.get("developer") as string,
      description: formData.get("description") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erreur serveur");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95">
          <div className="relative w-full max-w-lg rounded-xl bg-card p-6 shadow-xl md:p-8 max-h-[90vh] overflow-y-auto">
            <Dialog.Close className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer">
              <X className="h-5 w-5" />
            </Dialog.Close>

            <Dialog.Title className="text-xl font-semibold text-foreground">
              Parlons de votre projet
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-sm text-muted-foreground">
              Décrivez votre projet et je vous recontacte sous 24h.
            </Dialog.Description>

            {status === "success" ? (
              <div className="mt-8 flex flex-col items-center gap-3 py-8 text-center animate-fade-in">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <p className="text-lg font-medium text-foreground">
                  Message envoyé !
                </p>
                <p className="text-sm text-muted-foreground">
                  Je vous recontacte très vite.
                </p>
              </div>
            ) : (
              <form key={initialDescription ?? "default"} onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Nom complet <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    name="name"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    name="email"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors"
                    placeholder="jean@exemple.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Téléphone <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    name="phone"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-budget"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Budget estimé
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Souhaitez-vous être recontacté par <span className="text-destructive">*</span>
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {developerOptions.map((dev) => (
                      <label
                        key={dev.value}
                        className="flex items-start gap-3 rounded-lg border border-input bg-background p-3 cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/20"
                      >
                        <input
                          type="radio"
                          name="developer"
                          value={dev.value}
                          required
                          defaultChecked={initialDeveloper ? dev.value === initialDeveloper : undefined}
                          className="mt-1 rounded-full border-input text-primary focus:ring-primary"
                        />
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-muted">
                          <Image
                            src={dev.image}
                            alt={dev.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="font-semibold text-foreground">{dev.name}</span>
                          <p className="text-sm text-muted-foreground mt-0.5">{dev.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-description"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Décrivez votre projet{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="contact-description"
                    required
                    name="description"
                    rows={4}
                    defaultValue={initialDescription ?? ""}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors resize-none"
                    placeholder="Parlez-moi de votre idée, vos objectifs, votre calendrier..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Envoyer
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

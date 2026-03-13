"use client";

import { Dialog } from "@base-ui/react";
import Image from "next/image";
import { X, Calculator, Monitor, Smartphone, MessageCircle, LayoutDashboard, Brain, Users, Briefcase, Phone } from "lucide-react";
import { useState } from "react";
import { estimatePrice, type EstimationInput, type EstimationResult } from "@/lib/estimation";
import { developerOptions } from "@/lib/data";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

interface EstimationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestContact: (projectSummary: string, developer: string) => void;
}

const defaultInput: EstimationInput = {
  description: "",
  typeApp: "",
  web: false,
  mobile: false,
  chat: false,
  backoffice: false,
  ia: false,
  grandPublic: false,
  pro: false,
  developer: "mathieu",
};

export function EstimationModal({
  open,
  onOpenChange,
  onRequestContact,
}: EstimationModalProps) {
  const [form, setForm] = useState<EstimationInput>(defaultInput);
  const [result, setResult] = useState<EstimationResult | null>(null);

  function update<K extends keyof EstimationInput>(key: K, value: EstimationInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = estimatePrice(form);
    setResult(res);
  }

  function handleClose(open: boolean) {
    if (!open) {
      setResult(null);
      setForm(defaultInput);
    }
    onOpenChange(open);
  }

  function buildProjectSummary(): string {
    if (!result) return "";
    const parts: string[] = [
      `[Estimation]`,
      `Fourchette: ${result.priceLabel}`,
      `Délai: ${result.timeLabel}`,
      form.developer ? `Développeur: ${form.developer === "jules" ? "Jules" : "Mathieu"}` : "",
      form.typeApp ? `Type d'app: ${form.typeApp}` : "",
      `Support: ${form.web ? "Web" : ""} ${form.mobile ? "Mobile" : ""}`.trim() || "Non précisé",
      `Fonctionnalités: ${[
        form.chat && "Chat",
        form.backoffice && "Backoffice",
        form.ia && "IA",
        form.grandPublic && "Grand public",
        form.pro && "Pro",
      ].filter(Boolean).join(", ") || "Aucune"}`,
      form.description ? `Description: ${form.description}` : "",
    ];
    return parts.filter(Boolean).join("\n");
  }

  function handleRequestContact() {
    onOpenChange(false);
    onRequestContact(buildProjectSummary(), form.developer ?? "mathieu");
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95">
          <div className="relative w-full max-w-lg rounded-xl bg-card p-6 shadow-xl md:p-8 max-h-[90vh] overflow-y-auto border border-border">
            <Dialog.Close className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer">
              <X className="h-5 w-5" />
            </Dialog.Close>

            <Dialog.Title className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              C&apos;est combien pour mon projet ?
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-sm text-muted-foreground">
              Décrivez votre projet et cochez les fonctionnalités prévues. Une fourchette de prix et de délai vous sera donnée à titre indicatif (max. 20 000 €, 6 mois).
            </Dialog.Description>

            {result ? (
              <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 animate-fade-in">
                <p className="text-sm text-muted-foreground mb-1">Fourchette indicative</p>
                <p className="text-2xl font-bold text-foreground">{result.priceLabel}</p>
                <p className="mt-2 text-foreground font-medium">Délai : {result.timeLabel}</p>
                <p className="mt-4 text-sm font-medium text-foreground">
                  Négocier avec nous
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Vous pouvez échanger sur le prix et le délai. Choisissez comment nous contacter :
                </p>
                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Rejoindre le groupe WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handleRequestContact}
                  className="mt-2 w-full flex items-center justify-center gap-2 rounded-lg border-2 border-primary text-primary px-6 py-3 font-semibold hover:bg-primary/10 transition-colors cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  Laisser mon numéro
                </button>
                <button
                  type="button"
                  onClick={() => setResult(null)}
                  className="mt-2 w-full text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Faire une autre estimation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="estimation-typeapp" className="block text-sm font-medium text-foreground mb-1.5">
                    Type d&apos;application (ex : type Uber, app de rencontre, marketplace…)
                  </label>
                  <input
                    id="estimation-typeapp"
                    type="text"
                    value={form.typeApp}
                    onChange={(e) => update("typeApp", e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors"
                    placeholder="Ex : application type Uber pour livraison"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Support</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.web}
                        onChange={(e) => update("web", e.target.checked)}
                        className="rounded border-input"
                      />
                      <Monitor className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Web / SaaS</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.mobile}
                        onChange={(e) => update("mobile", e.target.checked)}
                        className="rounded border-input"
                      />
                      <Smartphone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Mobile</span>
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Vous pouvez cocher les deux (web + mobile).</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Fonctionnalités</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.chat} onChange={(e) => update("chat", e.target.checked)} className="rounded border-input" />
                      <MessageCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Chat / messagerie</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.backoffice} onChange={(e) => update("backoffice", e.target.checked)} className="rounded border-input" />
                      <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Backoffice / admin</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.ia} onChange={(e) => update("ia", e.target.checked)} className="rounded border-input" />
                      <Brain className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Intégration IA</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.grandPublic} onChange={(e) => update("grandPublic", e.target.checked)} className="rounded border-input" />
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Application grand public</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.pro} onChange={(e) => update("pro", e.target.checked)} className="rounded border-input" />
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Application professionnelle</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Avec qui souhaitez-vous travailler ?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {developerOptions.map((dev) => (
                      <label
                        key={dev.value}
                        className={`relative flex flex-col rounded-xl border-2 bg-card overflow-hidden cursor-pointer transition-all hover:border-primary/50 ${
                          form.developer === dev.value
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border"
                        }`}
                      >
                        <input
                          type="radio"
                          name="developer"
                          value={dev.value}
                          checked={form.developer === dev.value}
                          onChange={() => update("developer", dev.value as "jules" | "mathieu")}
                          className="sr-only"
                        />
                        <div className="relative h-28 w-full bg-muted">
                          <Image
                            src={dev.image}
                            alt={dev.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 240px"
                          />
                        </div>
                        <div className="p-3">
                          <span className="font-semibold text-foreground">{dev.name}</span>
                          <ul className="mt-1.5 space-y-0.5 text-xs text-muted-foreground list-disc list-inside">
                            {dev.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="estimation-description" className="block text-sm font-medium text-foreground mb-1.5">
                    Décrivez votre projet (optionnel)
                  </label>
                  <textarea
                    id="estimation-description"
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors resize-none"
                    placeholder="Ex : app pour mettre en relation livreurs et clients, avec suivi en direct et paiement en ligne..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  <Calculator className="h-4 w-4" />
                  Obtenir une fourchette
                </button>
              </form>
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

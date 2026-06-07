"use client";

import { Dialog } from "@base-ui/react";
import { X, ChevronRight, ArrowLeft, Rocket, Briefcase, Clock, Phone } from "lucide-react";
import { useState, useEffect } from "react";

interface ProjectFunnelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FunnelData = {
  need: string;
  sector: string;
  description: string;
  dataLink: string;
  email: string;
  phone: string;
};

export function ProjectFunnelModal({ open, onOpenChange }: ProjectFunnelModalProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FunnelData>({
    need: "",
    sector: "",
    description: "",
    dataLink: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Track step views
  useEffect(() => {
    if (open) {
      fetch("/api/track-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step: `step_${step}` }),
      }).catch(console.error);
    }
  }, [step, open]);

  function handleClose(isOpen: boolean) {
    if (!isOpen) {
      // Reset after a delay so animation looks clean
      setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
        setData({ need: "", sector: "", description: "", dataLink: "", email: "", phone: "" });
      }, 300);
    }
    onOpenChange(isOpen);
  }

  function updateData(field: keyof FunnelData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function nextStep() {
    setStep((s) => s + 1);
  }

  function prevStep() {
    setStep((s) => Math.max(1, s - 1));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Record completion step
      await fetch("/api/track-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step: "completed" }),
      });

      // Submit lead data
      const res = await fetch("/api/submit-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      alert("Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95">
          <div className="relative w-full max-w-lg rounded-2xl bg-card p-6 shadow-2xl md:p-8 border border-border">
            <Dialog.Close className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer z-10">
              <X className="h-5 w-5" />
            </Dialog.Close>

            {isSuccess ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Demande envoyée !</h3>
                <p className="text-muted-foreground mb-6">
                  Je vous recontacte très rapidement avec une première estimation de faisabilité.
                </p>
                <button
                  onClick={() => handleClose(false)}
                  className="rounded-lg bg-primary px-6 py-2.5 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <div className="animate-fade-in">
                {/* Header & Progress */}
                <div className="mb-8">
                  {step > 1 && (
                    <button onClick={prevStep} className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                      <ArrowLeft className="h-4 w-4 mr-1" /> Retour
                    </button>
                  )}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-primary">Étape {step} sur 4</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500 ease-in-out" 
                      style={{ width: `${(step / 4) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step 1: Need */}
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      Quel est votre besoin principal ?
                    </h3>
                    {[
                      "Création d'un CRM / ERP sur-mesure",
                      "Tableau de bord & KPIs",
                      "Application de gestion (Stocks, Planning...)",
                      "Formulaire automatisé & Connexion API",
                      "Autre outil métier"
                    ].map((option) => (
                      <button
                        key={option}
                        onClick={() => { updateData("need", option); nextStep(); }}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${
                          data.need === option ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="font-medium text-foreground">{option}</span>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 2: Sector */}
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Pour quel secteur d'activité ?
                    </h3>
                    {[
                      "Experts-Comptables / Finance",
                      "Commerçants / Équipementiers",
                      "Services B2B",
                      "Artisanat / BTP",
                      "Autre"
                    ].map((option) => (
                      <button
                        key={option}
                        onClick={() => { updateData("sector", option); nextStep(); }}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${
                          data.sector === option ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="font-medium text-foreground">{option}</span>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 3: Project description & NDA & Data Link */}
                {step === 3 && (
                  <div className="space-y-4 animate-fade-in flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      Votre Projet & Données
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Décrivez brièvement votre projet et fournissez un lien vers vos données (Excel, Google Sheets) si vous en avez.
                    </p>
                    <textarea
                      rows={3}
                      value={data.description}
                      onChange={(e) => updateData("description", e.target.value)}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Ex: Un dashboard pour suivre mes ventes..."
                    />

                    {/* NDA Section */}
                    <div className="p-3 rounded-xl border border-primary/20 bg-primary/5 flex flex-col gap-2">
                      <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                        🔒 Accord de confidentialité
                      </p>
                      <button
                        type="button"
                        onClick={async () => {
                          const projectName = window.prompt("Nom de votre projet :");
                          if (projectName) {
                            const { generateNda } = await import("@/lib/generateNda");
                            generateNda(projectName);
                          }
                        }}
                        className="text-xs font-medium px-3 py-2 bg-background border border-border rounded-lg shadow-sm hover:bg-muted transition-colors w-fit"
                      >
                        Télécharger mon NDA (PDF)
                      </button>
                    </div>

                    <input
                      type="url"
                      value={data.dataLink}
                      onChange={(e) => updateData("dataLink", e.target.value)}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Lien vers votre Google Sheet, Excel (Optionnel)"
                    />

                    <button
                      onClick={() => nextStep()}
                      disabled={!data.description.trim()}
                      className="mt-2 flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none disabled:opacity-50"
                    >
                      Continuer
                    </button>
                  </div>
                )}

                {/* Step 4: Contact */}
                {step === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Vos coordonnées
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pour que je puisse vous faire un retour personnalisé sur votre projet.
                    </p>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={data.email}
                        onChange={(e) => updateData("email", e.target.value)}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="jean.dupont@entreprise.fr"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Téléphone (Optionnel)</label>
                      <input
                        type="tel"
                        value={data.phone}
                        onChange={(e) => updateData("phone", e.target.value)}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || !data.email}
                      className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-bold text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Recevoir mon estimation"}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

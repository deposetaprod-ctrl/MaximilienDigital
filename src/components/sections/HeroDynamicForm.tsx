"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

interface HeroDynamicFormProps {
  onScrollDown: () => void;
}

type FormData = {
  appType: string;
  target: string;
  sector: string;
  budget: string;
  email: string;
  phone: string;
};

export function HeroDynamicForm({ onScrollDown }: HeroDynamicFormProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    appType: "",
    target: "",
    sector: "",
    budget: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function updateData(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (field !== "email" && field !== "phone") {
      setTimeout(() => setStep((s) => s + 1), 300);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("/api/track-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step: "completed_hero_form" }),
      });

      const res = await fetch("/api/submit-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          need: `${data.appType} - ${data.target}`,
          sector: data.sector,
          timeline: data.budget,
          email: data.email,
          phone: data.phone
        }),
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
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-4 py-20 bg-background text-foreground overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <motion.p 
            className="text-sm font-medium tracking-wide text-primary uppercase mb-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            Studio de Développement
          </motion.p>
          <motion.h1 
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          >
            Construisons votre produit web.
          </motion.h1>
        </div>

        <div className="bg-card border border-border shadow-lg rounded-3xl p-6 sm:p-10 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
          
          {/* Progress bar */}
          {!isSuccess && (
            <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out" 
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Demande envoyée !</h2>
                <p className="text-muted-foreground mb-8">
                  Je vous recontacte dans les plus brefs délais pour discuter de votre projet.
                </p>
                <button
                  onClick={onScrollDown}
                  className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  Découvrir l'agence
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-center"
              >
                {step === 1 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      Quel type d'application souhaitez-vous créer ?
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "Application Web / PWA",
                        "Application Mobile Native",
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => updateData("appType", item)}
                          className="flex h-24 items-center justify-center rounded-2xl border-2 border-border bg-background p-4 text-center font-medium transition-all hover:border-primary hover:bg-primary/5 hover:text-primary focus:outline-none"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      À qui se destine cet outil ?
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "Grand public (B2C)",
                        "Outil interne / B2B",
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => updateData("target", item)}
                          className="flex h-24 items-center justify-center rounded-2xl border-2 border-border bg-background p-4 text-center font-medium transition-all hover:border-primary hover:bg-primary/5 hover:text-primary focus:outline-none"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      Quel est votre secteur d'activité ?
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Experts-Comptables / Finance",
                        "Commerçants / E-commerce",
                        "Services B2B",
                        "Artisanat / BTP",
                        "Autre",
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => updateData("sector", item)}
                          className="flex h-16 items-center justify-center rounded-2xl border-2 border-border bg-background px-4 text-center text-sm font-medium transition-all hover:border-primary hover:bg-primary/5 hover:text-primary focus:outline-none"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 4 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      Quel est votre budget estimé ?
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-1 max-w-md mx-auto w-full">
                      {[
                        "Moins de 5 000 €",
                        "Entre 5 000 € et 15 000 €",
                        "Plus de 15 000 €",
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => updateData("budget", item)}
                          className="flex h-16 w-full items-center justify-center rounded-2xl border-2 border-border bg-background px-4 text-center font-medium transition-all hover:border-primary hover:bg-primary/5 hover:text-primary focus:outline-none"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 5 && (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md mx-auto w-full">
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
                      Où puis-je vous recontacter ?
                    </h2>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                        Email professionnel
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={data.email}
                        onChange={(e) => updateData("email", e.target.value)}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="jean@entreprise.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
                        Numéro de téléphone (optionnel)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={data.phone}
                        onChange={(e) => updateData("phone", e.target.value)}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !data.email}
                      className="mt-4 flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          {step > 1 && !isSuccess && (
            <button
              onClick={() => setStep(s => s - 1)}
              className="absolute left-6 bottom-6 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Retour
            </button>
          )}
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <button 
          onClick={onScrollDown}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-sm font-medium mb-2">Plus d'informations</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card group-hover:border-primary/50 transition-colors">
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </button>
      </div>

    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft, CheckCircle2, Gift } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroDynamicFormProps {
  onScrollDown: () => void;
}

type FormData = {
  appType: string;
  target: string;
  sector: string;
  budget: string;
  description: string;
  email: string;
  phone: string;
};

const TOTAL_STEPS = 6;

export function HeroDynamicForm({ onScrollDown }: HeroDynamicFormProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    appType: "",
    target: "",
    sector: "",
    budget: "",
    description: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function selectOption(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => setStep((s) => s + 1), 300);
  }

  function updateField(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
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
          phone: data.phone,
          description: data.description,
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

  const optionBtnClass = "flex items-center justify-center rounded-2xl border border-border/60 bg-white/50 dark:bg-white/5 shadow-sm px-4 text-center font-medium transition-all hover:border-amber-500/50 hover:bg-amber-500/5 hover:text-amber-600 dark:hover:text-amber-400 focus:outline-none hover:shadow-md hover:-translate-y-0.5";

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-4 pt-24 pb-12 bg-background text-foreground overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-500/5 via-background to-rose-500/5 dark:from-amber-900/10 dark:via-background dark:to-rose-900/10" />
      
      <div className="absolute top-8 right-8 md:top-16 md:right-16 z-0 pointer-events-none w-32 h-32 md:w-56 md:h-56 rotate-[-5deg] mix-blend-screen">
        <Image src="/m_signature.png" alt="Signature" fill className="object-contain" style={{ filter: 'grayscale(100%) contrast(400%) brightness(60%)' }} priority />
      </div>

      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-amber-500/20 mix-blend-multiply blur-3xl filter dark:mix-blend-color-dodge opacity-50 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-rose-500/20 mix-blend-multiply blur-3xl filter dark:mix-blend-color-dodge opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <div className="mb-6 text-center flex flex-col items-center">
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
          >
            <div className="relative">
              <Image 
                src="/max.png" 
                alt="Maximilien" 
                width={48} 
                height={48} 
                className="rounded-full border-2 border-background shadow-md"
              />
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-green-500" />
            </div>
            <p className="text-sm font-bold tracking-wide text-primary uppercase drop-shadow-md text-left leading-tight">
              {t("hero_tagline")}
            </p>
          </motion.div>
          
          <motion.h1 
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground mb-2 drop-shadow-xl"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: t("hero_form_title") }}
          />
          <motion.p
            className="mt-2 text-base sm:text-lg text-muted-foreground flex items-center justify-center gap-2 max-w-lg mx-auto font-medium"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          >
            <Gift className="h-5 w-5 text-primary" />
            <span dangerouslySetInnerHTML={{ __html: t("hero_form_gift_subtitle") }} />
          </motion.p>
        </div>

        <div className="bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl rounded-[2rem] p-6 sm:p-12 relative overflow-hidden min-h-[420px] flex flex-col justify-center">
          
          {/* Progress bar */}
          {!isSuccess && (
            <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out" 
                style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
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
                <h2 className="text-2xl font-bold mb-2">{t("hero_form_success_title")}</h2>
                <p className="text-lg font-semibold text-primary mb-2">
                  {t("hero_form_success_sub")}
                </p>
                <p 
                  className="text-muted-foreground mb-8 max-w-sm mx-auto"
                  dangerouslySetInnerHTML={{ __html: t("hero_form_success_desc") }}
                />
                <button
                  onClick={onScrollDown}
                  className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  {t("hero_form_success_btn")}
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
                {/* Step 1: App type */}
                {step === 1 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      {t("hero_form_step1_q")}
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        t("hero_form_step1_opt1"),
                        t("hero_form_step1_opt2"),
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => selectOption("appType", item)}
                          className={`${optionBtnClass} h-24`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Step 2: Target */}
                {step === 2 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      {t("hero_form_step2_q")}
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        t("hero_form_step2_opt1"),
                        t("hero_form_step2_opt2"),
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => selectOption("target", item)}
                          className={`${optionBtnClass} h-24`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Step 3: Sector */}
                {step === 3 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      {t("hero_form_step3_q")}
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        t("hero_form_step3_opt1"),
                        t("hero_form_step3_opt2"),
                        t("hero_form_step3_opt3"),
                        t("hero_form_step3_opt4"),
                        t("hero_form_step3_opt5"),
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => selectOption("sector", item)}
                          className={`${optionBtnClass} h-16 text-sm`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Step 4: Budget */}
                {step === 4 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
                      {t("hero_form_step4_q")}
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-1 max-w-md mx-auto w-full">
                      {[
                        t("hero_form_step4_opt1"),
                        t("hero_form_step4_opt2"),
                        t("hero_form_step4_opt3"),
                        t("hero_form_step4_opt4"),
                        t("hero_form_step4_opt5"),
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => selectOption("budget", item)}
                          className={`${optionBtnClass} h-14 w-full`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Step 5: Project description */}
                {step === 5 && (
                  <div className="flex flex-col gap-5 max-w-md mx-auto w-full">
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
                      {t("hero_form_step5_q")}
                    </h2>
                    <p className="text-sm text-muted-foreground text-center mb-2">
                      {t("hero_form_step5_sub")}
                    </p>
                    <textarea
                      id="description"
                      rows={5}
                      value={data.description}
                      onChange={(e) => updateField("description", e.target.value)}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder={t("hero_form_step5_ph")}
                    />
                    <button
                      onClick={() => setStep(6)}
                      disabled={!data.description.trim()}
                      className="mt-2 flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t("hero_form_step5_btn")}
                    </button>
                  </div>
                )}

                {/* Step 6: Contact info */}
                {step === 6 && (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md mx-auto w-full">
                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-1">
                      {t("hero_form_step6_q")}
                    </h2>
                    <p className="text-sm text-muted-foreground text-center mb-2 flex items-center justify-center gap-1.5">
                      <Gift className="h-4 w-4 text-primary" />
                      {t("hero_form_step6_sub")}
                    </p>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                        {t("hero_form_step6_email")}
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={data.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="jean@entreprise.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
                        {t("hero_form_step6_phone")}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={data.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !data.email}
                      className="mt-2 flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t("hero_form_sending") : t("hero_form_submit_btn")}
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
              {t("hero_form_back")}
            </button>
          )}
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <button 
          onClick={onScrollDown}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-sm font-medium mb-2">{t("hero_form_scroll")}</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card group-hover:border-primary/50 transition-colors">
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </button>
      </div>

    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectFunnelModal } from "@/components/ProjectFunnelModal";
import { Building2, Layers, CheckCircle, ArrowRight, Zap, Combine } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Client() {
  const [funnelOpen, setFunnelOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Navigation spacer */}
        <div className="h-24" />

        {/* Hero Section */}
        <section className="relative px-4 py-20 md:py-32 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Building2 className="h-4 w-4" />
              <span>{t("logiciel_ec_tag")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
              dangerouslySetInnerHTML={{ __html: t("logiciel_ec_h1") }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: t("logiciel_ec_intro") }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => setFunnelOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-lg text-primary-foreground hover:scale-105 transition-transform shadow-xl shadow-primary/20 cursor-pointer"
              >
                {t("logiciel_ec_cta1")}
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" dangerouslySetInnerHTML={{ __html: t("logiciel_ec_approach_title") }} />
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t("logiciel_ec_approach_desc") }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Layers,
                  title: "100% Adapté",
                  desc: t("logiciel_ec_li1")
                },
                {
                  icon: CheckCircle,
                  title: "Automatisation",
                  desc: t("logiciel_ec_li2")
                },
                {
                  icon: Zap,
                  title: "Gestion des Tâches",
                  desc: t("logiciel_ec_li3")
                },
                {
                  icon: Combine,
                  title: "Connexions API",
                  desc: t("logiciel_ec_li4")
                }
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Méthodologie</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mb-4">1</div>
                  <h3 className="text-xl font-bold mb-2">{t("logiciel_ec_step1_title")}</h3>
                  <p className="text-muted-foreground">{t("logiciel_ec_step1_desc")}</p>
               </div>
               <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mb-4">2</div>
                  <h3 className="text-xl font-bold mb-2">{t("logiciel_ec_step2_title")}</h3>
                  <p className="text-muted-foreground">{t("logiciel_ec_step2_desc")}</p>
               </div>
               <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mb-4">3</div>
                  <h3 className="text-xl font-bold mb-2">{t("logiciel_ec_step3_title")}</h3>
                  <p className="text-muted-foreground">{t("logiciel_ec_step3_desc")}</p>
               </div>
            </div>

            <button
              onClick={() => setFunnelOpen(true)}
              className="mt-16 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-bold text-background hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("logiciel_ec_cta1")}
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <ProjectFunnelModal 
        open={funnelOpen} 
        onOpenChange={setFunnelOpen} 
      />
    </>
  );
}

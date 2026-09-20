"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectFunnelModal } from "@/components/ProjectFunnelModal";
import { Smartphone, Zap, Monitor, ArrowRight, ShieldCheck, Banknote } from "lucide-react";
import { Footer } from "@/components/sections/Footer";

export default function PwaClient() {
  const [funnelOpen, setFunnelOpen] = useState(false);

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
              <Smartphone className="h-4 w-4" />
              <span>Progressive Web Apps (PWA)</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Votre Application Métier,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Sans les coûts des Stores.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            >
              Gestion de stocks, portail client, automatisation... Offrez à vos collaborateurs et clients 
              une application installable sur téléphone et PC, avec un budget divisé par deux par rapport au développement natif.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => setFunnelOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-lg text-primary-foreground hover:scale-105 transition-transform shadow-xl shadow-primary/20 cursor-pointer"
              >
                Calculer mon projet PWA
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi choisir une PWA ?</h2>
              <p className="text-muted-foreground text-lg">La technologie idéale pour les outils B2B et internes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Banknote,
                  title: "Développement Moins Cher",
                  desc: "Un seul code pour le Web, iOS et Android. Pas besoin de payer deux équipes séparées pour développer votre application."
                },
                {
                  icon: Zap,
                  title: "Déploiement Instantané",
                  desc: "Pas de validation Apple ou Google qui prend des semaines. Vous mettez à jour l'application, vos utilisateurs ont la nouvelle version instantanément."
                },
                {
                  icon: Monitor,
                  title: "Installable Partout",
                  desc: "S'installe directement depuis le navigateur sur l'écran d'accueil du smartphone (iOS/Android) ou sur l'ordinateur de bureau."
                },
                {
                  icon: ShieldCheck,
                  title: "Pas de commission (30%)",
                  desc: "Si vous vendez via l'application, vous n'avez pas à céder 30% de vos revenus à Apple ou Google."
                },
                {
                  icon: Smartphone,
                  title: "Expérience Native",
                  desc: "Fonctionne hors-ligne, peut envoyer des notifications push, et offre la fluidité d'une vraie application."
                }
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Prêt à remplacer vos fichiers Excel ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Répondez à 3 questions rapides pour obtenir une estimation de temps et de budget pour votre projet métier.
            </p>
            <button
              onClick={() => setFunnelOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-bold text-background hover:opacity-90 transition-opacity cursor-pointer"
            >
              Démarrer le simulateur
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

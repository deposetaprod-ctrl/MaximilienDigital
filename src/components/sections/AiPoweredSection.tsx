"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Lock, Server, TerminalSquare, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AiPoweredSectionProps {
  onCtaClick?: () => void;
}

export function AiPoweredSection({ onCtaClick }: AiPoweredSectionProps) {
  const { t } = useLanguage();

  const handleScrollToTop = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="px-4 py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-500/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-rose-500/5 blur-3xl rounded-full" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                {t("ai_section_title")}
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t("ai_section_desc1") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ai_section_desc2") }} />
                <p dangerouslySetInnerHTML={{ __html: t("ai_section_desc3") }} />
              </div>

              <div className="mt-8">
                <button
                  onClick={handleScrollToTop}
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-bold shadow-lg transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/25"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  {t("ai_section_cta")}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Visual / Architecture Diagram */}
          <div className="order-1 lg:order-2">
            <motion.div 
              className="relative rounded-2xl bg-white/5 dark:bg-black/20 border border-border/50 p-6 sm:p-8 shadow-2xl backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 blur-2xl rounded-full" />
              
              <div className="space-y-6 relative z-10">
                {/* AI Layer */}
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-xl border border-primary/20">
                  <BrainCircuit className="w-10 h-10 text-primary mb-2" />
                  <span className="font-bold text-foreground">Génération IA (Claude 3.5)</span>
                  <span className="text-xs text-muted-foreground mt-1">Vitesse & Code brut</span>
                </div>

                {/* Connection lines */}
                <div className="flex justify-center space-x-4 sm:space-x-12">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-primary/50 to-border" />
                  <div className="w-0.5 h-6 bg-gradient-to-b from-primary/50 to-border" />
                  <div className="w-0.5 h-6 bg-gradient-to-b from-primary/50 to-border hidden sm:block" />
                  <div className="w-0.5 h-6 bg-gradient-to-b from-primary/50 to-border hidden sm:block" />
                </div>

                {/* Human Expertise Layer */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-3 bg-background rounded-lg border border-border shadow-sm">
                    <Database className="w-6 h-6 text-blue-500 mb-2" />
                    <span className="text-xs font-semibold text-center">Bases de données</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-background rounded-lg border border-border shadow-sm">
                    <Lock className="w-6 h-6 text-green-500 mb-2" />
                    <span className="text-xs font-semibold text-center">Sécurité & Auth</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-background rounded-lg border border-border shadow-sm">
                    <Server className="w-6 h-6 text-purple-500 mb-2" />
                    <span className="text-xs font-semibold text-center">Déploiement</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-background rounded-lg border border-border shadow-sm">
                    <Zap className="w-6 h-6 text-amber-500 mb-2" />
                    <span className="text-xs font-semibold text-center">Connexions API</span>
                  </div>
                </div>

                {/* Final Product */}
                <div className="mt-4 flex flex-col items-center p-5 bg-foreground text-background rounded-xl shadow-xl">
                  <TerminalSquare className="w-8 h-8 mb-2" />
                  <span className="font-bold text-lg text-center">Application 100% à Vous</span>
                  <span className="text-xs opacity-70 text-center mt-1">Fonctionnelle, Scalable, Propriétaire</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

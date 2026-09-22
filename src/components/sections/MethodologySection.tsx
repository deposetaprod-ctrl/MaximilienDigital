"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ListChecks } from "lucide-react";

export const MethodologySection = () => {
  const { t } = useLanguage();

  const phases = [
    { title: t("comeup_method_step1_title"), desc: t("comeup_method_step1_desc") },
    { title: t("comeup_method_step2_title"), desc: t("comeup_method_step2_desc") },
    { title: t("comeup_method_step3_title"), desc: t("comeup_method_step3_desc") },
    { title: t("comeup_method_step4_title"), desc: t("comeup_method_step4_desc") }
  ];

  return (
    <section className="px-4 py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-background/10 border border-background/20 text-background font-bold text-sm shadow-sm uppercase tracking-widest">
            <ListChecks className="w-4 h-4" /> {t("comeup_method_badge")}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-background">
            {t("comeup_method_title")} <br />
            <span className="text-primary">{t("comeup_method_title_gradient")}</span>
          </h2>
          <p className="text-background/80 text-lg md:text-xl font-medium max-w-md leading-relaxed">
            Un processus clair, éprouvé et transparent. Vous savez exactement où nous allons, à chaque étape du projet.
          </p>
        </motion.div>

        {/* Right Side: Steps */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 bg-background/5 border border-background/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-sm"
        >
          <div className="relative border-l-2 border-primary/30 pl-10 space-y-12 ml-4">
            {phases.map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground border-[4px] border-foreground shadow-sm group-hover:scale-125 transition-transform duration-300">
                  {i + 1}
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-background mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-background/70 font-medium leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

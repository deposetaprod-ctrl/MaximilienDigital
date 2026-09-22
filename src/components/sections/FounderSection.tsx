"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, Lightbulb, Rocket, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const FounderSection = () => {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Image / Graphic Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 relative"
        >
          <div className="relative w-full max-w-[320px] mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border shadow-2xl">
            <Image
              src="/max.png"
              alt="Maximilien"
              fill
              className="object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
            
            {/* Overlay Content */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-card/80 backdrop-blur-md border border-border p-4 rounded-2xl shadow-lg">
                <p className="font-bold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Maximilien
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Développeur & Entrepreneur
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative blur */}
          <div className="absolute -inset-10 bg-primary/20 blur-[80px] rounded-full -z-10"></div>
        </motion.div>

        {/* Text Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-7/12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm shadow-sm uppercase tracking-widest">
            <Briefcase className="w-4 h-4" /> {t("comeup_founder_badge")}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            {t("comeup_founder_title")} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
              {t("comeup_founder_title_gradient")}
            </span>
          </h2>
          
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8 leading-snug">
            {t("comeup_founder_subtitle")}
          </h3>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{t("comeup_founder_p1")}</p>
            <p>{t("comeup_founder_p2")}</p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-2xl my-8">
              <p className="text-foreground font-bold italic flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span>{t("comeup_founder_highlight").replace('👉 ', '')}</span>
              </p>
            </div>
            
            <p className="flex items-start gap-3">
              <Rocket className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>{t("comeup_founder_p3")}</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

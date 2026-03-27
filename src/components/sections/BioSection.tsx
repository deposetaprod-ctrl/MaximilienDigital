"use client";

import Image from "next/image";
import { Star, Code2, Smartphone, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const BioSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <motion.div
          className="relative w-64 sm:w-80"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating icons with animation */}
          <motion.div
            className="absolute -right-6 top-10 z-10 rounded-xl bg-card p-3 shadow-xl ring-1 ring-border"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 className="h-6 w-6 text-primary" />
          </motion.div>
          <motion.div
            className="absolute -left-6 top-32 z-10 rounded-xl bg-card p-3 shadow-xl ring-1 ring-border"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Smartphone className="h-6 w-6 text-primary" />
          </motion.div>
          <motion.div
            className="absolute -right-4 bottom-10 z-10 rounded-xl bg-card p-3 shadow-xl ring-1 ring-border"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Brain className="h-6 w-6 text-primary" />
          </motion.div>

          {/* Photo container */}
          <div className="overflow-hidden rounded-t-[3rem] border-x border-t border-border bg-muted/20">
            <Image
              src="/max.png"
              alt="Maximilien"
              width={320}
              height={320}
              className="h-auto w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Info segment */}
          <div className="mt-[-1px] rounded-b-[3rem] bg-card p-8 shadow-2xl ring-1 ring-border border-t border-white/5">
            <h3 className="text-2xl font-bold text-foreground mb-1">Max</h3>
            <p className="text-sm text-primary font-medium mb-4">{t("hero_dev_role")}</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {t("hero_projects")}
              </span>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full -z-10 opacity-50" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center max-w-xl"
        >
          <p className="text-muted-foreground leading-relaxed italic">
            "Passionné par l'innovation technique et l'accompagnement d'entrepreneurs, je mets mon expertise SaaS et Mobile au service de votre croissance."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

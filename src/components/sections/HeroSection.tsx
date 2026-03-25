"use client";

import Image from "next/image";
import { AnimatedBaseButton } from "@/components/ui/AnimatedBaseButton";
import { ArrowRight, Code2, Smartphone, Brain, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  heroRef: (node: HTMLElement | null) => void;
  onCtaClick: () => void;
}

export function HeroSection({ heroRef, onCtaClick }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      ref={heroRef}
      className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          className="text-sm font-medium tracking-wide text-primary uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("hero_tagline")}
        </motion.p>

        <motion.h1
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Maximilien Digital
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("hero_subtitle")}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <AnimatedBaseButton onClick={onCtaClick}>
            {t("hero_cta")}
            <ArrowRight className="inline-block ml-2 h-4 w-4" />
          </AnimatedBaseButton>
        </motion.div>

        {/* Photo card */}
        <motion.div
          className="relative mx-auto mt-12 w-64 sm:w-72"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {/* Floating icons */}
          <motion.div
            className="absolute -right-4 top-8 z-10 rounded-xl bg-card p-2.5 shadow-lg ring-1 ring-border"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 className="h-5 w-5 text-foreground" />
          </motion.div>
          <motion.div
            className="absolute -left-4 bottom-55 z-10 rounded-xl bg-card p-2.5 shadow-lg ring-1 ring-border"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Smartphone className="h-5 w-5 text-foreground" />
          </motion.div>
          <motion.div
            className="absolute -right-2 bottom-36 z-10 rounded-xl bg-card p-2.5 shadow-lg ring-1 ring-border"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Brain className="h-5 w-5 text-foreground" />
          </motion.div>

          {/* Photo */}
          <div className="overflow-hidden rounded-t-2xl">
            <Image
              src="/max.png"
              alt="Maximilien"
              width={288}
              height={288}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* Info bar */}
          <div className="mt-[-1px] rounded-b-2xl bg-card px-5 py-4 shadow-lg ring-1 ring-border">
            <p className="text-lg font-bold text-foreground">Maximilien</p>
            <p className="text-sm text-muted-foreground">{t("hero_dev_role")}</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{t("hero_projects")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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

      </div>
    </section>
  );
}

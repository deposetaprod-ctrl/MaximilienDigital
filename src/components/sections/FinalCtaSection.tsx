"use client";

import { AnimatedBaseButton } from "@/components/ui/AnimatedBaseButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export function FinalCtaSection({ onCtaClick }: FinalCtaSectionProps) {
  return (
    <section className="px-4 py-16 md:py-24 bg-primary/5">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="text-2xl font-bold text-foreground sm:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Prêt à concrétiser votre projet ?
        </motion.h2>
        <motion.p
          className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Discutons ensemble de votre idée. Je vous accompagne de la conception
          au lancement de votre produit digital.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <AnimatedBaseButton onClick={onCtaClick}>
            Discutons ensemble
            <ArrowRight className="inline-block ml-2 h-4 w-4" />
          </AnimatedBaseButton>
        </motion.div>
      </div>
    </section>
  );
}

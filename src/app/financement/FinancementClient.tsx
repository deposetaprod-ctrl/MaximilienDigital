"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedBaseButton } from "@/components/ui/AnimatedBaseButton";

export default function FinancementPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("fin_tag")}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("fin_title")}
          </h1>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            {t("fin_desc")}{" "}
            <span className="font-semibold text-foreground">07&nbsp;66&nbsp;07&nbsp;47&nbsp;46</span>.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <AnimatedBaseButton render={<a href="tel:+33766074746" />}>
              {t("fin_cta_call")}
            </AnimatedBaseButton>
            <AnimatedBaseButton render={<Link href="/#estimation" />} variant="outline">
              {t("fin_cta_estimate")}
            </AnimatedBaseButton>
          </div>
        </div>
      </section>
    </main>
  );
}

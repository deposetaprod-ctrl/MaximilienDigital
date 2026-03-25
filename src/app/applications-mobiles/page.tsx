"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedBaseButton } from "@/components/ui/AnimatedBaseButton";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { projects } from "@/lib/data";
import type { TranslationKey } from "@/lib/i18n";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

interface MobileProjectItem {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  tags: string[];
}

const mobileProjectItems: MobileProjectItem[] = [
  { titleKey: "project_dating_title", descKey: "project_dating_desc", tags: ["Mobile", "React Native", "Dating"] },
  { titleKey: "project_coach_title", descKey: "project_coach_desc", tags: ["Mobile", "SaaS", "Sport"] },
  { titleKey: "project_majordome_title", descKey: "project_majordome_desc", tags: ["Mobile", "Luxe", "UX Premium"] },
];

export default function MobileAppsLandingPage() {
  const { t } = useLanguage();
  // Keep data-driven filter for non-mobile projects that may be added later
  const hasMobileProjects = projects.some((p) => p.tags.includes("Mobile"));

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t("mob_tag")}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t("mob_h1")}
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{t("mob_intro")}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                {t("mob_cta1")}
              </a>
              <AnimatedBaseButton render={<Link href="/#estimation" />} variant="outline">
                {t("mob_cta2")}
              </AnimatedBaseButton>
              <AnimatedBaseButton
                render={<Link href="/financement" />}
                className="bg-white/5 font-medium text-white hover:bg-white/10 ring-1 ring-white/10"
              >
                {t("mob_cta3")}
              </AnimatedBaseButton>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>• {t("mob_li1")}</li>
              <li>• {t("mob_li2")}</li>
              <li>• {t("mob_li3")}</li>
              <li>• {t("mob_li4")}</li>
            </ul>
          </div>

          <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-foreground">{t("mob_approach_title")}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{t("mob_approach_desc")}</p>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">{t("mob_step1_title")}</p>
                <p className="text-xs text-muted-foreground">{t("mob_step1_desc")}</p>
              </div>
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">{t("mob_step2_title")}</p>
                <p className="text-xs text-muted-foreground">{t("mob_step2_desc")}</p>
              </div>
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">{t("mob_step3_title")}</p>
                <p className="text-xs text-muted-foreground">{t("mob_step3_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & packages */}
      <section className="px-4 py-14 md:py-16 border-t border-border/40">
        <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-foreground">{t("mob_process_title")}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{t("mob_process_desc")}</p>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="font-medium text-foreground">{t("mob_phase1_title")}</p>
                <p className="text-xs text-muted-foreground">{t("mob_phase1_desc")}</p>
              </div>
              <div>
                <p className="font-medium text-foreground">{t("mob_phase2_title")}</p>
                <p className="text-xs text-muted-foreground">{t("mob_phase2_desc")}</p>
              </div>
              <div>
                <p className="font-medium text-foreground">{t("mob_phase3_title")}</p>
                <p className="text-xs text-muted-foreground">{t("mob_phase3_desc")}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("mob_formulas_title")}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">{t("mob_formula_landing_title")}</span>{" "}
                {t("mob_formula_landing_desc")}
              </li>
              <li>
                <span className="font-medium text-foreground">{t("mob_formula_mvp_title")}</span>{" "}
                {t("mob_formula_mvp_desc")}
              </li>
              <li>
                <span className="font-medium text-foreground">{t("mob_formula_template_title")}</span>{" "}
                {t("mob_formula_template_desc")}
              </li>
              <li>
                <span className="font-medium text-foreground">{t("mob_formula_unlimited_title")}</span>{" "}
                {t("mob_formula_unlimited_desc")}
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">{t("mob_stack")}</p>
          </div>
        </div>
      </section>

      {/* Mobile projects */}
      {hasMobileProjects && (
        <section className="px-4 py-16 md:py-20 bg-secondary/40">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground text-center sm:text-3xl">
              {t("mob_projects_title")}
            </h2>
            <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto text-sm">
              {t("mob_projects_subtitle")}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mobileProjectItems.map((project) => (
                <div key={project.titleKey} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-foreground">{t(project.titleKey)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(project.descKey)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="px-4 py-16 md:py-20 bg-primary/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t("mob_cta_title")}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            {t("mob_cta_desc")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AnimatedBaseButton render={<Link href="/#contact" />}>
              {t("mob_cta_talk")}
            </AnimatedBaseButton>
            <AnimatedBaseButton render={<Link href="/" />} variant="outline">
              {t("mob_cta_home")}
            </AnimatedBaseButton>
          </div>
        </div>
      </section>
    </main>
  );
}

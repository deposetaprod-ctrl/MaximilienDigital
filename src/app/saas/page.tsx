"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedBaseButton } from "@/components/ui/AnimatedBaseButton";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

export default function SaasLandingPage() {
  const { t } = useLanguage();

  const saasServiceTitle = t("service_saas_title");
  const saasServiceDesc = t("service_saas_desc");

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t("saas_tag")}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t("saas_h1")}
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {t("saas_intro")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AnimatedBaseButton render={<Link href="/#estimation" />}>
                {t("saas_cta1")}
              </AnimatedBaseButton>
              <AnimatedBaseButton render={<Link href="/#contact" />} variant="outline">
                {t("saas_cta2")}
              </AnimatedBaseButton>
              <AnimatedBaseButton
                render={<Link href="/financement" />}
                className="bg-white/5 font-medium text-white hover:bg-white/10 ring-1 ring-white/10"
              >
                {t("saas_cta3")}
              </AnimatedBaseButton>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>• {t("saas_li1")}</li>
              <li>• {t("saas_li2")}</li>
              <li>• {t("saas_li3")}</li>
              <li>• {t("saas_li4")}</li>
            </ul>
          </div>

          <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-foreground">{t("saas_approach_title")}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{t("saas_approach_desc")}</p>
            <div className="mt-4 rounded-lg border border-border bg-background px-3 py-2.5 text-sm">
              <p className="font-medium text-foreground">{saasServiceTitle}</p>
              <p className="mt-1 text-xs text-muted-foreground">{saasServiceDesc}</p>
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">{t("saas_step1_title")}</p>
                <p className="text-xs text-muted-foreground">{t("saas_step1_desc")}</p>
              </div>
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">{t("saas_step2_title")}</p>
                <p className="text-xs text-muted-foreground">{t("saas_step2_desc")}</p>
              </div>
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">{t("saas_step3_title")}</p>
                <p className="text-xs text-muted-foreground">{t("saas_step3_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & packages */}
      <section className="px-4 py-14 md:py-16 border-t border-border/40">
        <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-foreground">{t("saas_process_title")}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{t("saas_process_desc")}</p>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="font-medium text-foreground">{t("saas_phase1_title")}</p>
                <p className="text-xs text-muted-foreground">{t("saas_phase1_desc")}</p>
              </div>
              <div>
                <p className="font-medium text-foreground">{t("saas_phase2_title")}</p>
                <p className="text-xs text-muted-foreground">{t("saas_phase2_desc")}</p>
              </div>
              <div>
                <p className="font-medium text-foreground">{t("saas_phase3_title")}</p>
                <p className="text-xs text-muted-foreground">{t("saas_phase3_desc")}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("saas_formulas_title")}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">{t("saas_formula_landing_title")}</span>{" "}
                {t("saas_formula_landing_desc")}
              </li>
              <li>
                <span className="font-medium text-foreground">{t("saas_formula_mvp_title")}</span>{" "}
                {t("saas_formula_mvp_desc")}
              </li>
              <li>
                <span className="font-medium text-foreground">{t("saas_formula_template_title")}</span>{" "}
                {t("saas_formula_template_desc")}
              </li>
              <li>
                <span className="font-medium text-foreground">{t("saas_formula_unlimited_title")}</span>{" "}
                {t("saas_formula_unlimited_desc")}
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">{t("saas_stack")}</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-4 py-16 md:py-20 bg-primary/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t("saas_cta_title")}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            {t("saas_cta_desc")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              {t("saas_cta_whatsapp")}
            </a>
            <AnimatedBaseButton render={<Link href="/" />} variant="outline">
              {t("saas_cta_home")}
            </AnimatedBaseButton>
          </div>
        </div>
      </section>
    </main>
  );
}

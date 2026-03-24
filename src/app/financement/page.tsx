import Link from "next/link";
import type { Metadata } from "next";
import { AnimatedBaseButton } from "@/components/ui/AnimatedBaseButton";

export const metadata: Metadata = {
  title: "Financer votre application SaaS ou mobile — Aide & Accompagnement",
  description:
    "Obtenez un dossier technique chiffré et crédible pour financer votre application SaaS ou mobile. Accompagnement BPI, banques, investisseurs. Contactez Maximilien Digital.",
  keywords: [
    "financement application",
    "BPI France",
    "financement SaaS",
    "aide financement application mobile",
    "dossier financement tech",
  ],
  alternates: {
    canonical: "https://digimax.agency/financement",
  },
  openGraph: {
    url: "https://digimax.agency/financement",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};


export default function FinancementPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Financement
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Trouver un financement pour votre application.
          </h1>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            Vous avez une idée d&apos;application SaaS ou mobile, mais vous devez encore valider le
            budget, rassurer des partenaires ou obtenir un financement (banque, aides, investisseurs,
            BPI, etc.) ? Je peux vous aider à transformer votre idée en un projet clair, chiffré et
            crédible techniquement. Pour toute question liée au financement, vous pouvez me contacter
            directement au <span className="font-semibold text-foreground">07&nbsp;66&nbsp;07&nbsp;47&nbsp;46</span>.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <AnimatedBaseButton render={<a href="tel:+33766074746" />}>
              Appeler le 07 66 07 47 46
            </AnimatedBaseButton>
            <AnimatedBaseButton render={<Link href="/#estimation" />} variant="outline">
              Estimer le budget de mon app
            </AnimatedBaseButton>
          </div>
        </div>
      </section>
    </main>
  );
}


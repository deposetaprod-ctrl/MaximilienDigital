import Link from "next/link";
import type { Metadata } from "next";
import { services, projects } from "@/lib/data";
import { AnimatedBaseButton } from "@/components/ui/AnimatedBaseButton";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

export const metadata: Metadata = {
  title: "Développement SaaS sur mesure — MVP en 30 jours",
  description:
    "Développeur freelance spécialisé en applications SaaS React/Next.js. Architecture multi-tenant, paiements, IA : MVP fonctionnel livré en 30 jours. Devis gratuit.",
  keywords: [
    "développement SaaS",
    "freelance SaaS",
    "Next.js",
    "React",
    "MVP SaaS",
    "application web sur mesure",
    "développeur freelance France",
  ],
  alternates: {
    canonical: "https://digimax.agency/saas",
  },
  openGraph: {
    url: "https://digimax.agency/saas",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement SaaS sur mesure",
  provider: {
    "@type": "LocalBusiness",
    name: "Maximilien Digital",
    url: "https://digimax.agency",
  },
  description:
    "Développement d'applications SaaS performantes, scalables et maintenables avec React et Next.js. MVP en 30 jours.",
  url: "https://digimax.agency/saas",
  areaServed: "FR",
};


export default function SaasLandingPage() {
  const saasService = services.find((s) => s.title.includes("SaaS"));
  const highlightedProjects = projects.filter((p) =>
    p.tags.some((t) => ["Média", "Live Data", "IA"].includes(t))
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              SaaS &amp; plateformes web · MVP en 30 jours
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Une application SaaS fonctionnelle en 30 jours.
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Je m&apos;adresse aux entreprises et fondateurs qui veulent transformer une idée
              en une vraie plateforme SaaS : backoffice, API, comptes clients, paiements…
              Je privilégie un MVP rapide, exploitable, que l&apos;on peut faire évoluer plutôt
              qu&apos;une démo impossible à maintenir.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AnimatedBaseButton render={<Link href="/#estimation" />}>
                Estimer mon projet SaaS
              </AnimatedBaseButton>
              <AnimatedBaseButton render={<Link href="/#contact" />} variant="outline">
                Parler de ma plateforme
              </AnimatedBaseButton>
              <AnimatedBaseButton
                render={<Link href="/financement" />}
                className="bg-white/5 font-medium text-white hover:bg-white/10 ring-1 ring-white/10"
              >
                Trouver un financement
              </AnimatedBaseButton>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>• MVP SaaS en moins de 30 jours, focalisé sur vos fonctionnalités cœur.</li>
              <li>• Architecture prête à évoluer (multi-tenant, rôles, permissions).</li>
              <li>• Intégration IA, paiements, emails transactionnels et automatisations.</li>
              <li>• Hébergement moderne (Vercel, services managés) pour rester serein.</li>
            </ul>
          </div>

          <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-foreground">
              Une approche produit, pas seulement technique
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              L&apos;objectif n&apos;est pas d&apos;empiler des fonctionnalités, mais de livrer
              un produit que vos clients comprennent et utilisent réellement. On clarifie le
              cœur de votre proposition de valeur, puis on construit autour.
            </p>
            {saasService && (
              <div className="mt-4 rounded-lg border border-border bg-background px-3 py-2.5 text-sm">
                <p className="font-medium text-foreground">{saasService.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {saasService.description}
                </p>
              </div>
            )}
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">1. Cadrage &amp; maquette</p>
                <p className="text-xs text-muted-foreground">
                  Identification des personas, des parcours clés et des premiers écrans à livrer.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">2. MVP en production</p>
                <p className="text-xs text-muted-foreground">
                  Une première version exploitable, sécurisée et monitorée, prête pour vos
                  premiers utilisateurs.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">3. Itérations &amp; scalabilité</p>
                <p className="text-xs text-muted-foreground">
                  Améliorations continues, nouvelles features et optimisation des performances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus & formules */}
      <section className="px-4 py-14 md:py-16 border-t border-border/40">
        <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Comment on construit votre SaaS
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Mon rôle est de vous aider à sortir un produit fonctionnel, qui traite un
              problème bien identifié chez vos clients, avec une base technique saine.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="font-medium text-foreground">Phase 1 · Découverte</p>
                <p className="text-xs text-muted-foreground">
                  Analyse du besoin, de votre modèle d&apos;abonnement, des rôles utilisateurs
                  et des premiers écrans indispensables (dashboard, backoffice, etc.).
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Phase 2 · Développement (30 jours)</p>
                <p className="text-xs text-muted-foreground">
                  Mise en place de l&apos;architecture (API, base de données, authentification),
                  développement des fonctionnalités essentielles et mise en ligne d&apos;un MVP
                  exploitable.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Phase 3 · Retours &amp; itérations</p>
                <p className="text-xs text-muted-foreground">
                  Recueil des retours utilisateurs, corrections, ajout de fonctionnalités
                  secondaires et accompagnement sur la suite.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Des formules adaptées à la maturité de votre projet
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Formule MVP landing.</span>{" "}
                Une page de vente pour tester l&apos;intérêt du marché avant d&apos;investir dans
                tout le produit.
              </li>
              <li>
                <span className="font-medium text-foreground">Formule MVP SaaS.</span>{" "}
                Première version simplifiée de votre plateforme avec les fonctionnalités
                essentielles et les premiers abonnés.
              </li>
              <li>
                <span className="font-medium text-foreground">Formule template.</span>{" "}
                Basée sur une base existante (template ou boilerplate) personnalisée pour vos
                besoins, pour limiter le temps de développement.
              </li>
              <li>
                <span className="font-medium text-foreground">Formule illimitée.</span>{" "}
                Développement plus poussé, incluant fonctionnalités avancées, automatisations
                et intégrations spécifiques à votre métier.
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Stack principale : React, Next.js, Node.js / TypeScript, PostgreSQL, Redis,
              TailwindCSS, intégrations IA (OpenAI, Azure, Google…) et éventuellement
              Bubble.io pour certains modules.
            </p>
          </div>
        </div>
      </section>

      {/* Projets SaaS / data */}
      {highlightedProjects.length > 0 && (
        <section className="px-4 py-16 md:py-20 bg-secondary/40">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground text-center sm:text-3xl">
              Projets proches d&apos;un produit SaaS
            </h2>
            <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto text-sm">
              Plateformes web, interfaces d&apos;administration, intégrations de données en temps
              réel et fonctionnalités avancées côté backoffice.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {highlightedProjects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
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

      {/* Témoignages globaux */}
      <TestimonialsSection />

      {/* CTA final */}
      <section className="px-4 py-16 md:py-20 bg-primary/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Vous préparez un SaaS ou une plateforme B2B ?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            Parlez-moi de votre produit, de vos clients et de vos enjeux techniques. Nous
            voyons ensemble comment structurer un premier MVP solide.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Discuter sur WhatsApp
            </a>
            <AnimatedBaseButton render={<Link href="/" />} variant="outline">
              Voir la page principale
            </AnimatedBaseButton>
          </div>
        </div>
      </section>
    </main>
  );
}


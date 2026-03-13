import Link from "next/link";
import { projects } from "@/lib/data";
import { AnimatedBaseButton } from "@/components/ui/AnimatedBaseButton";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

export const metadata = {
  title: "Développement d'applications mobiles | Maximilien Digital",
  description:
    "Création d'applications mobiles iOS et Android sur mesure : conception, design, développement et mise en production.",
};

export default function MobileAppsLandingPage() {
  const mobileProjects = projects.filter((p) => p.tags.includes("Mobile"));

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Applications mobiles · MVP en 30 jours
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Une application mobile fonctionnelle en 30 jours.
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Je m&apos;adresse aux entreprises, porteurs de projets et entrepreneurs qui
              souhaitent lancer une application mobile ou une PWA, simple ou complexe. iOS,
              Android ou les deux : je conçois et développe des apps rapides à mettre sur
              le marché, avec la possibilité d&apos;intégrer de l&apos;intelligence artificielle.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Discuter de mon app sur WhatsApp
              </a>
              <AnimatedBaseButton render={<Link href="/#estimation" />} variant="outline">
                Estimer le budget de mon app
              </AnimatedBaseButton>
              <AnimatedBaseButton
                render={<Link href="/financement" />}
                className="bg-white/5 font-medium text-white hover:bg-white/10 ring-1 ring-white/10"
              >
                Trouver un financement
              </AnimatedBaseButton>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>• MVP d&apos;application en moins de 30 jours.</li>
              <li>• Un seul code pour iOS &amp; Android (React Native / Expo) ou Bubble.io.</li>
              <li>• Intégration IA (chatbots, assistants, génération de contenu…).</li>
              <li>• Publication sur l&apos;App Store, Google Play ou en PWA.</li>
            </ul>
          </div>

          <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-foreground">
              Un accompagnement complet pour votre application
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Nous clarifions ensemble les fonctionnalités prioritaires, puis je construis un
              MVP robuste que l&apos;on peut faire évoluer. L&apos;objectif : publier rapidement
              une première version, mesurer l&apos;usage, puis itérer.
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">1. Cadrage produit</p>
                <p className="text-xs text-muted-foreground">
                  Atelier rapide pour clarifier la cible, les parcours utilisateurs et
                  identifier les écrans essentiels.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">2. Prototype &amp; design</p>
                <p className="text-xs text-muted-foreground">
                  Maquettes interactives pour valider les parcours avant de coder.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-medium text-foreground">3. Développement &amp; lancement</p>
                <p className="text-xs text-muted-foreground">
                  Développement, tests, publication, puis suivi pour les premières versions.
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
              Ce que je fais pour votre app mobile
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Mon objectif est de livrer une application réellement utilisable par vos
              clients, pas seulement une maquette. Nous allons traiter un problème à la fois
              et prioriser les fonctionnalités qui créent de la valeur.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="font-medium text-foreground">Phase 1 · Découverte</p>
                <p className="text-xs text-muted-foreground">
                  Présentation de votre projet, compréhension de votre modèle économique et
                  des cas d&apos;usage. On clarifie ensemble la version 1 de l&apos;application.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Phase 2 · Développement (30 jours)</p>
                <p className="text-xs text-muted-foreground">
                  Développement en React Native / Expo ou Bubble.io, avec échanges réguliers
                  pour rester alignés sur votre vision.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Phase 3 · Retours &amp; retouches</p>
                <p className="text-xs text-muted-foreground">
                  Mise en production, analyse des premiers retours utilisateurs et série de
                  retouches pour ajuster l&apos;app sans repartir de zéro.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Formules possibles pour votre app
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Formule MVP landing.</span>{" "}
                Une page de vente en ligne pour tester l&apos;intérêt avant de développer
                l&apos;application complète.
              </li>
              <li>
                <span className="font-medium text-foreground">Formule MVP app.</span>{" "}
                Une première version simplifiée avec les fonctionnalités essentielles, idéale
                pour valider votre idée auprès de vrais utilisateurs.
              </li>
              <li>
                <span className="font-medium text-foreground">Formule template.</span>{" "}
                App basée sur une template existante, personnalisée à votre cas, pour
                réduire le temps de développement et le budget.
              </li>
              <li>
                <span className="font-medium text-foreground">Formule illimitée.</span>{" "}
                Application plus poussée, avec ensemble des fonctionnalités essentielles et
                secondaires, publication sur les stores et accompagnement dans la durée.
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Stack principale : React / React Native, TypeScript, Node.js, Next.js,
              TailwindCSS, PostgreSQL, Firebase, Bubble.io, intégration IA (OpenAI, Azure,
              Google…).
            </p>
          </div>
        </div>
      </section>

      {/* Projets mobiles */}
      {mobileProjects.length > 0 && (
        <section className="px-4 py-16 md:py-20 bg-secondary/40">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground text-center sm:text-3xl">
              Exemples d&apos;applications mobiles
            </h2>
            <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto text-sm">
              Quelques projets sur lesquels j&apos;ai travaillé, mêlant expérience utilisateur,
              temps réel et intégrations métier.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mobileProjects.map((project) => (
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
            Vous avez une idée d&apos;application mobile ?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            Envoyez-moi un message avec quelques mots sur votre projet. On voit ensemble
            comment passer de l&apos;idée à une application utilisée par vos clients.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AnimatedBaseButton render={<Link href="/#contact" />}>
              Parler de mon projet
            </AnimatedBaseButton>
            <AnimatedBaseButton render={<Link href="/" />} variant="outline">
              Voir la page principale
            </AnimatedBaseButton>
          </div>
        </div>
      </section>
    </main>
  );
}


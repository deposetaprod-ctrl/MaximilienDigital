"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { HeroDynamicForm } from "@/components/sections/HeroDynamicForm";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Footer } from "@/components/sections/Footer";
import { Code2, Zap, Smartphone, Globe, Database, AppWindow, ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Plateforme de suivi étudiant",
    desc: "Planning, QCM, messagerie et espaces étudiants/tuteurs. Centralisation de toute l'expérience éducative.",
    tags: ["Portail Web", "SaaS", "Dashboard"],
    icon: <Globe className="w-8 h-8 text-primary" />
  },
  {
    title: "Outil métier connecté par API",
    desc: "Automatisation d’images et synchronisation API avec l'ERP pour accélérer les processus internes.",
    tags: ["API", "Automatisation", "Métier"],
    icon: <Database className="w-8 h-8 text-primary" />
  },
  {
    title: "Application de mise en relation",
    desc: "Profils, abonnements, carte interactive et notifications en temps réel pour connecter les utilisateurs.",
    tags: ["Web App", "PWA", "Temps réel"],
    icon: <Smartphone className="w-8 h-8 text-primary" />
  }
];

export default function WebAppClient() {
  const formRef = useRef<HTMLDivElement>(null);

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        
        {/* HERO */}
        <section className="relative px-4 py-20 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm shadow-sm"
            >
              <Code2 className="w-4 h-4" /> Création d'Application Web sur Mesure
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]"
            >
              Votre application web sur mesure, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
                prête à être testée rapidement
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-medium"
            >
              Lancez une application responsive accessible sur ordinateur, tablette et mobile, sans passer immédiatement par l'App Store ou Google Play.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-bold text-foreground/80 mb-10 w-full"
            >
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Code source livré</span>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Maquette gratuite</span>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Accompagnement A à Z</span>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={scrollToForm}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/25"
            >
              Recevoir ma maquette gratuite
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </section>

        {/* WHY START WITH WEB APP */}
        <section className="px-4 py-24 bg-secondary/30 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi commencer par une application web ?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">L'approche la plus intelligente pour tester votre marché et générer vos premiers revenus sans attendre des mois de validation.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Zap className="w-8 h-8 text-amber-500" />, title: "Plus rapide à lancer", desc: "Pas de délai de validation par Apple ou Google. Votre application est en ligne dès qu'elle est prête." },
                { icon: <Globe className="w-8 h-8 text-blue-500" />, title: "Accessible sans installation", desc: "Vos utilisateurs accèdent à votre service via une simple URL, depuis n'importe quel appareil (PC, Mac, iOS, Android)." },
                { icon: <AppWindow className="w-8 h-8 text-green-500" />, title: "Plus simple à tester", desc: "Les mises à jour sont instantanées pour tous vos utilisateurs. Idéal pour itérer rapidement selon les retours." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="bg-background rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-sm border border-border">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXEMPLES DE PROJETS */}
        <section className="px-4 py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Exemples de projets</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Des outils métiers concrets, conçus pour automatiser des tâches complexes et faciliter la croissance.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-3xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110"></div>
                  <div className="mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISES AVANCEES (SEO & VALUE PROPS) */}
        <section className="px-4 py-24 bg-background relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise Technique Avancée</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Des technologies de pointe pour rendre votre application SaaS intelligente, sécurisée et conforme.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/20 border border-border rounded-3xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                  <span className="bg-primary/20 p-2 rounded-xl text-primary"><Cpu className="w-6 h-6" /></span>
                  Agent IA & Automatisation
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  En tant que <strong>développeur spécialiste Agent IA</strong>, j'intègre des modèles d'Intelligence Artificielle au cœur de votre SaaS (LLMs, RAG). L'objectif : automatiser vos processus complexes et doter votre outil de capacités d'analyse avancées.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-secondary/20 border border-border rounded-3xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                  <span className="bg-primary/20 p-2 rounded-xl text-primary"><ShieldCheck className="w-6 h-6" /></span>
                  Sécurité & Hébergement RGPD
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  La protection de vos données est primordiale. Hébergement sur <strong>serveur OVH en France</strong>, garantie de conformité <strong>RGPD</strong>, et systèmes d'<strong>authentification sécurisés</strong> (email, OTP) pour un accès protégé.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-secondary/20 border border-border rounded-3xl p-8 shadow-sm md:col-span-2"
              >
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                  <span className="bg-primary/20 p-2 rounded-xl text-primary"><Sparkles className="w-6 h-6" /></span>
                  Design 3D & Expérience Premium
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Démarquez-vous de la concurrence avec des interfaces web de nouvelle génération. J'intègre des éléments de <strong>Design 3D interactifs</strong> fluides dans le navigateur pour une expérience utilisateur (UX) haut de gamme et mémorable.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CE QUI EST INCLUS & METHODE */}
        <section className="px-4 py-24 bg-foreground text-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-background tracking-tight">Ce qui est inclus</h2>
              <p className="text-background/80 mb-10 text-xl font-medium">Un service clé en main, de la première idée à la mise en production, sans surprise ni frais cachés.</p>
              
              <ul className="space-y-6">
                {[
                  "Conception sur mesure & Maquette",
                  "Architecture de base de données robuste",
                  "Connexion avec vos API existantes",
                  "Mise en ligne et configuration serveur",
                  "Propriété intégrale : Code source livré"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background/5 border border-background/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full"></div>
              
              <h2 className="text-3xl font-extrabold mb-10 text-background relative z-10">La Méthode</h2>
              <div className="relative border-l-2 border-primary/30 pl-10 space-y-10 ml-4 z-10">
                {[
                  { title: "Cadrage", desc: "Analyse de vos besoins et de vos processus." },
                  { title: "Maquette", desc: "Design visuel de votre future application." },
                  { title: "Développement", desc: "Création de l'outil avec des technologies modernes." },
                  { title: "Tests", desc: "Vérification rigoureuse avant lancement." },
                  { title: "Livraison", desc: "Mise en production et remise du code source." }
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[51px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground border-[4px] border-foreground shadow-sm">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-xl text-background mb-1">{step.title}</h3>
                    <p className="text-background/70 font-medium">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* FAQ */}
        <section className="px-4 py-24 bg-secondary/30 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { q: "Combien coûte une application web sur mesure ?", a: "Le prix varie selon la complexité, mais l'objectif est toujours de créer un outil qui vous fera gagner du temps ou de l'argent, rentabilisant rapidement l'investissement." },
                { q: "Quels sont les délais de création ?", a: "Entre 2 et 6 semaines selon l'envergure du projet. La méthode de travail itérative vous permet d'avoir accès à une première version testable très rapidement." },
                { q: "Serais-je propriétaire de mon application ?", a: "Oui, à 100%. Le code source vous est entièrement livré à la fin du projet. Vous n'êtes pas lié par un abonnement mensuel contraignant." },
                { q: "Assurez-vous la maintenance ?", a: "Oui, je propose des forfaits de maintenance pour m'assurer que votre application reste sécurisée et évolue avec vos besoins. Mais vous êtes libre de confier ce code à un autre développeur si vous le souhaitez." },
                { q: "Pourra-t-on la transformer en application mobile plus tard ?", a: "Absolument. Les applications web (spécialement les PWA) sont un excellent point de départ. L'architecture backend (API, base de données) sera déjà prête si vous décidez de développer une version iOS/Android native par la suite." }
              ].map((faq, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-8 rounded-3xl shadow-sm"
                >
                  <h3 className="font-bold text-xl mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULAIRE (using HeroDynamicForm from the original site) */}
        <div ref={formRef} className="scroll-m-20 py-16 bg-background relative z-20">
          <div className="max-w-4xl mx-auto px-4 text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à démarrer ?</h2>
            <p className="text-muted-foreground text-lg mb-8">Remplissez le formulaire ci-dessous pour recevoir votre maquette gratuite.</p>
          </div>
          <HeroDynamicForm onScrollDown={() => {}} />
        </div>
      </main>
      <Footer />
    </>
  );
}

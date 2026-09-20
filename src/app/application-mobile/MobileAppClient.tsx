"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroDynamicForm } from "@/components/sections/HeroDynamicForm";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Footer } from "@/components/sections/Footer";
import { Code2, Zap, Smartphone, Globe, Database, AppWindow, ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles, BellRing, Rocket, Bot } from "lucide-react";

const projects = [
  {
    title: "Application E-Commerce",
    desc: "Boutique en ligne avec paiement intégré, notifications push de promotions et suivi de livraison en temps réel.",
    tags: ["iOS & Android", "Paiement", "B2C"],
    icon: <Smartphone className="w-8 h-8 text-primary" />
  },
  {
    title: "Outil pour équipe sur le terrain",
    desc: "Application hors-ligne pour les techniciens, scan de QR codes, signature électronique et synchronisation Cloud.",
    tags: ["Mode Hors-ligne", "B2B", "API"],
    icon: <Database className="w-8 h-8 text-primary" />
  },
  {
    title: "Réseau Social de Niche",
    desc: "Profils utilisateurs, messagerie instantanée, flux d'actualités et géolocalisation pour connecter une communauté.",
    tags: ["Temps réel", "Messagerie", "Communauté"],
    icon: <Globe className="w-8 h-8 text-primary" />
  },
  {
    title: "Application avec Agents IA",
    desc: "Intégration d'IA pour modération, suivi financier, envois d'upsell automatisés et SMS programmés, avec une base de données 100% RGPD.",
    tags: ["Intelligence Artificielle", "Automatisation", "RGPD"],
    icon: <Bot className="w-8 h-8 text-primary" />
  }
];

export default function MobileAppClient() {
  const formRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <Smartphone className="w-4 h-4" /> Création d'Application Mobile sur Mesure
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]"
            >
              Votre application mobile, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
                présente dans la poche de vos clients
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-medium"
            >
              Lancez une application iOS et Android native pour fidéliser vos utilisateurs, envoyer des notifications push et inspirer confiance grâce à votre présence sur l'App Store et Google Play.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-bold text-foreground/80 mb-10 w-full"
            >
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Publication App Store & Google Play</span>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Maquette gratuite</span>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Code source livré</span>
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

        {/* WHY START WITH MOBILE APP */}
        <section className="px-4 py-24 bg-secondary/30 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi créer une application mobile ?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Offrez une expérience inégalée à vos utilisateurs et augmentez considérablement leur engagement grâce aux fonctionnalités natives.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <BellRing className="w-8 h-8 text-amber-500" />, title: "Fidélisation Maximale", desc: "Envoyez des notifications push directement sur l'écran d'accueil pour réengager vos utilisateurs à tout moment." },
                { icon: <Zap className="w-8 h-8 text-blue-500" />, title: "Expérience Premium", desc: "Une fluidité exceptionnelle, des animations fluides et l'accès aux capteurs du téléphone (Caméra, GPS, Bluetooth)." },
                { icon: <Rocket className="w-8 h-8 text-green-500" />, title: "Visibilité sur les Stores", desc: "Profitez du trafic naturel de l'App Store et Google Play pour acquérir de nouveaux clients quotidiennement." }
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

        {/* L'APPROCHE EVOLUTIVE */}
        <section className="px-4 py-24 relative overflow-hidden bg-background">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Stratégie de Lancement Évolutive</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">Chaque projet est unique : nous adaptons cette approche en fonction de vos objectifs pour vous accompagner de la meilleure façon possible.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Ligne de connexion (desktop) */}
              <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-border z-0"></div>
              
              {[
                { step: "01", title: "Le Lancement Rapide", subtitle: "(Web App / MVP)", desc: "On commence par une version accessible sur navigateur. C'est le moyen le plus rapide de tester votre idée et d'acquérir vos premiers clients en quelques semaines." },
                { step: "02", title: "L'Installation Simple", subtitle: "(PWA)", desc: "Votre site web se transforme en application installable d'un simple clic sur l'écran d'accueil du téléphone de vos clients, sans passer par les Stores." },
                { step: "03", title: "La Consécration", subtitle: "(App Store & Google Play)", desc: "Une fois le concept validé et rentable, nous publions officiellement votre application sur iOS et Android pour inspirer une confiance absolue." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-card border border-border rounded-3xl p-8 relative z-10 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md border-4 border-background relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{item.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXEMPLES DE PROJETS */}
        <section className="px-4 py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Exemples d'Applications Mobiles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Des applications iOS & Android conçues pour offrir la meilleure expérience utilisateur possible.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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

        {/* EXPERTISES AVANCEES */}
        <section className="px-4 py-24 bg-background relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise Technique Mobile</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Développement multi-plateforme performant et intégration de fonctionnalités avancées.</p>
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
                  Code Unique (React Native / Flutter)
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Je développe avec des technologies modernes permettant de créer <strong>une seule application compatible iOS et Android</strong> simultanément. Cela divise par deux les coûts et les temps de développement par rapport à du code natif séparé.
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
                  Backend, API & Authentification
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  L'application est toujours accompagnée de son <strong>serveur Backend sécurisé</strong> et de sa base de données (Firebase, Supabase ou Custom Node.js), gérant l'authentification (Apple, Google, Email) et la sécurité de vos données.
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
                  Design UI/UX & Intégration Native
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  L'interface respecte les guidelines strictes d'Apple (Human Interface Guidelines) et de Google (Material Design) pour une prise en main immédiate. J'intègre toutes les fonctionnalités natives : Appareil photo, Géolocalisation, Notifications Push, et Achats In-App (Apple Pay, Google Pay).
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
              <p className="text-background/80 mb-10 text-xl font-medium">De l'idée initiale jusqu'à la présence de l'application sur l'écran d'accueil de vos utilisateurs.</p>
              
              <ul className="space-y-6">
                {[
                  "Design UI/UX Mobile sur mesure",
                  "Développement iOS et Android simultané",
                  "Mise en place de l'API et Base de données",
                  "Publication App Store & Google Play",
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
                  { title: "Cadrage", desc: "Analyse des fonctionnalités et de la faisabilité sur mobile." },
                  { title: "Maquette UI", desc: "Design des écrans de l'application pour validation." },
                  { title: "Développement", desc: "Codage simultané pour iOS et Android." },
                  { title: "Bêta Testing", desc: "Essais sur des téléphones réels via TestFlight et Google Console." },
                  { title: "Publication", desc: "Soumission de l'application pour validation par Apple et Google." }
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
                { q: "Faut-il payer deux fois pour iOS et Android ?", a: "Non, grâce aux technologies modernes (React Native, Flutter), un seul code est écrit pour générer une application fonctionnant à la fois sur iPhone et sur Android. Vous ne payez le développement qu'une seule fois." },
                { q: "Combien de temps prend la publication sur les stores ?", a: "La validation par Google (Play Store) prend généralement entre 3 et 7 jours. La validation par Apple (App Store) est souvent un peu plus stricte et peut prendre entre 3 et 10 jours ouvrés." },
                { q: "Est-ce qu'Apple et Google prennent une commission ?", a: "Oui, si vous vendez des biens virtuels, abonnements digitaux ou services in-app, Apple et Google prélèvent entre 15% et 30% de commission. Si vous vendez des biens physiques (ex: vêtements) ou des services hors de l'application, aucune commission n'est prise." },
                { q: "Qui sera propriétaire du compte Apple Developer et Google Play ?", a: "C'est votre entreprise. Je vous accompagnerai pour créer vos propres comptes (99$/an pour Apple, 25$ à vie pour Google). Ainsi, l'application vous appartient totalement." },
                { q: "Dois-je d'abord faire une Web App ou une App Mobile ?", a: "Si votre objectif est l'acquisition rapide de clients ou le test d'une idée, une Web App (accessible par navigateur) est plus rapide à lancer. Si votre priorité est la fidélisation, l'utilisation fréquente et l'envoi de notifications, l'application Mobile est le meilleur choix. J'ajoute aussi que l'App Store et même le Google Play inspirent confiance et sont davantage une preuve d'autorité." }
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

        {/* FORMULAIRE (using HeroDynamicForm) */}
        <div ref={formRef} className="scroll-m-20 py-16 bg-background relative z-20">
          <div className="max-w-4xl mx-auto px-4 text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Parlez-moi de votre application</h2>
            <p className="text-muted-foreground text-lg mb-8">Remplissez le formulaire ci-dessous pour recevoir une maquette et un devis.</p>
          </div>
          <HeroDynamicForm onScrollDown={() => window.location.href = "/"} />
        </div>
      </main>
      <Footer />
    </>
  );
}

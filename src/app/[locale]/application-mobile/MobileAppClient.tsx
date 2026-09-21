"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroDynamicForm } from "@/components/sections/HeroDynamicForm";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Footer } from "@/components/sections/Footer";
import { Code2, Zap, Smartphone, Globe, Database, AppWindow, ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles, BellRing, Rocket, Bot } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileAppClient() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("mobapp_proj_1_title"),
      desc: t("mobapp_proj_1_desc"),
      tags: ["iOS & Android", "Paiement", "B2C"],
      icon: <Smartphone className="w-8 h-8 text-primary" />
    },
    {
      title: t("mobapp_proj_2_title"),
      desc: t("mobapp_proj_2_desc"),
      tags: ["Mode Hors-ligne", "B2B", "API"],
      icon: <Database className="w-8 h-8 text-primary" />
    },
    {
      title: t("mobapp_proj_3_title"),
      desc: t("mobapp_proj_3_desc"),
      tags: ["Temps réel", "Messagerie", "Communauté"],
      icon: <Globe className="w-8 h-8 text-primary" />
    },
    {
      title: t("mobapp_proj_4_title"),
      desc: t("mobapp_proj_4_desc"),
      tags: ["Intelligence Artificielle", "Automatisation", "RGPD"],
      icon: <Bot className="w-8 h-8 text-primary" />
    }
  ];

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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 relative group cursor-pointer"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-background shadow-2xl overflow-hidden relative z-10 mx-auto bg-primary/10">
                <img src="/max.png" alt="Maximilien" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-foreground text-background text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl z-20 whitespace-nowrap flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Maximilien Godeau
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm shadow-sm"
            >
              <Smartphone className="w-4 h-4" /> {t("mobapp_hero_badge")}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]"
            >
              {t("mobapp_hero_title")} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
                {t("mobapp_hero_title_gradient")}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-medium"
            >
              {t("mobapp_hero_sub")}
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={scrollToForm}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/25 mb-8"
            >
              {t("mobapp_hero_cta")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-bold text-foreground/80 mb-10 w-full"
            >
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> {t("mobapp_trust_store")}</span>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> {t("mobapp_trust_mockup")}</span>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> {t("mobapp_trust_code")}</span>
            </motion.div>
          </div>
        </section>

        {/* LATEST WORK HIGHLIGHT: EVEN CLOCK */}
        <section className="px-4 py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-card/30 backdrop-blur-xl border border-primary/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-12"
            >
              {/* Text content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm shadow-sm uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" /> Portfolio
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">
                  Notre dernière réalisation
                </h2>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Even Clock
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 font-medium">
                  Votre poids, comme une horloge. Une application mobile native <strong>iOS & Android</strong> développée de A à Z par nos soins. Interface moderne, animations fluides et suivi intelligent.
                </p>
                <a 
                  href="/evenclock.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl"
                >
                  Découvrir l'App
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              {/* Images / Mockups */}
              <div className="flex-1 w-full relative min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full"></div>
                
                {/* Images envoyées par le client (générées via shots.so avec cadres intégrés) */}
                <div className="relative z-10 w-full max-w-[280px] md:max-w-sm mx-auto group perspective-1000">
                  
                  {/* Image principale (Premier plan) */}
                  <motion.div 
                    initial={{ rotateY: 15, rotateX: 5, rotateZ: -5 }}
                    whileHover={{ rotateY: 0, rotateX: 0, rotateZ: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-20 w-full shadow-2xl rounded-3xl overflow-hidden cursor-pointer"
                  >
                    <img 
                      src="/286shots_so.png" 
                      alt="Even Clock Dashboard" 
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                  
                  {/* Image secondaire (Arrière plan flottant) */}
                  <motion.div 
                    initial={{ x: 60, y: -40, rotateZ: 10, scale: 0.85, opacity: 0.6 }}
                    whileHover={{ x: 80, y: -60, rotateZ: 15, scale: 0.9, opacity: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute top-0 right-0 -z-10 w-full shadow-xl rounded-3xl overflow-hidden pointer-events-none"
                  >
                    <img 
                      src="/641shots_so.png" 
                      alt="Even Clock History" 
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY START WITH MOBILE APP */}
        <section className="px-4 py-24 bg-secondary/30 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("mobapp_why_title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("mobapp_why_sub")}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <BellRing className="w-8 h-8 text-amber-500" />, title: t("mobapp_why_1_title"), desc: t("mobapp_why_1_desc") },
                { icon: <Zap className="w-8 h-8 text-blue-500" />, title: t("mobapp_why_2_title"), desc: t("mobapp_why_2_desc") },
                { icon: <Rocket className="w-8 h-8 text-green-500" />, title: t("mobapp_why_3_title"), desc: t("mobapp_why_3_desc") }
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("mobapp_strategy_title")}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{t("mobapp_strategy_sub")}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Ligne de connexion (desktop) */}
              <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-border z-0"></div>
              
              {[
                { step: "01", title: t("mobapp_strat_1_title"), subtitle: t("mobapp_strat_1_sub"), desc: t("mobapp_strat_1_desc") },
                { step: "02", title: t("mobapp_strat_2_title"), subtitle: t("mobapp_strat_2_sub"), desc: t("mobapp_strat_2_desc") },
                { step: "03", title: t("mobapp_strat_3_title"), subtitle: t("mobapp_strat_3_sub"), desc: t("mobapp_strat_3_desc") }
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("mobapp_projects_title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("mobapp_projects_sub")}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("mobapp_expertise_title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("mobapp_expertise_sub")}</p>
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
                  {t("mobapp_exp_1_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {/* @ts-ignore */} <span dangerouslySetInnerHTML={{ __html: t("mobapp_exp_1_desc") }} />
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
                  t("mobapp_trust_store"),
                  "Propriété intégrale : " + t("mobapp_trust_code")
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

"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedBaseButton } from "@/components/ui/AnimatedBaseButton";
import { CheckCircle2, Zap, Globe, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { EstimationModal } from "@/components/EstimationModal";
import { ContactFormModal } from "@/components/ContactFormModal";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

export default function OfferPage() {
  const { t } = useLanguage();
  const [estimationOpen, setEstimationOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactInitialDescription, setContactInitialDescription] = useState<string | null>(null);

  function handleRequestContact(projectSummary: string, _developer: string) {
    setContactInitialDescription(projectSummary);
    setContactOpen(true);
  }

  const features = [
    {
      icon: Zap,
      title: t("off_preview_title"),
      desc: t("off_preview_desc"),
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: Globe,
      title: t("off_domain_title"),
      desc: t("off_domain_desc"),
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: ShieldCheck,
      title: t("off_reactivity_title"),
      desc: t("off_reactivity_desc"),
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: CheckCircle2,
      title: t("off_price_title"),
      desc: t("off_price_desc"),
      color: "text-primary",
      bg: "bg-primary/10",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            {t("off_tag")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            {t("off_h1")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-2xl bg-primary text-primary-foreground font-bold text-xl mb-8 shadow-xl shadow-primary/20 rotate-1 hover:rotate-0 transition-transform cursor-pointer"
            onClick={() => setContactOpen(true)}
          >
            <Zap className="fill-current w-5 h-5" />
            <span>MVP Gratuit & Aperçu Immédiat</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("off_intro")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <AnimatedBaseButton onClick={() => setContactOpen(true)}>
              {t("off_cta_main")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </AnimatedBaseButton>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {t("off_cta_whatsapp")}
            </a>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <div className="rounded-3xl bg-primary/5 border border-primary/10 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {t("off_services_title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/saas"
              className="px-6 py-3 rounded-full bg-background border border-border hover:border-primary/50 hover:text-primary transition-all text-sm font-medium"
            >
              {t("off_saas_link")}
            </Link>
            <Link
              href="/applications-mobiles"
              className="px-6 py-3 rounded-full bg-background border border-border hover:border-primary/50 hover:text-primary transition-all text-sm font-medium"
            >
              {t("off_mobile_link")}
            </Link>
            <Link
              href="/#services"
              className="px-6 py-3 rounded-full bg-background border border-border hover:border-primary/50 hover:text-primary transition-all text-sm font-medium"
            >
              {t("off_web_link")}
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-8">Ils nous font confiance</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder logos or icons representing tech/trust */}
                <div className="font-bold text-xl">DatingApp</div>
                <div className="font-bold text-xl">SaaSFlow</div>
                <div className="font-bold text-xl">LuxeConcierge</div>
                <div className="font-bold text-xl">EsportNews</div>
            </div>
        </div>
        </div>

      <EstimationModal
        open={estimationOpen}
        onOpenChange={setEstimationOpen}
        onRequestContact={handleRequestContact}
      />
      <ContactFormModal
        open={contactOpen}
        onOpenChange={(open) => {
          setContactOpen(open);
          if (!open) setContactInitialDescription(null);
        }}
        initialDescription={contactInitialDescription ?? undefined}
      />
    </main>
  );
}

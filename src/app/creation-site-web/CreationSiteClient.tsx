"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedBaseButton } from "@/components/ui/AnimatedBaseButton";
import { ContactFormModal } from "@/components/ContactFormModal";
import { MessageCircle, ArrowRight, Zap, Target, Lock, Bot, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="font-semibold text-foreground group-hover:text-primary transition-colors pr-4">{question}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function CreationSiteClient() {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);

  // Animate on scroll
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    // Query all animated sections after mount — avoids race condition with callback refs
    const sections = document.querySelectorAll<HTMLElement>("[data-animate-section]");
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  const trustItems = [
    { icon: Zap, label: t("web_trust_fast") },
    { icon: Target, label: t("web_trust_custom") },
    { icon: Lock, label: t("web_trust_code") },
    { icon: Bot, label: t("web_trust_ai") },
  ];

  const problemsBad = [
    t("web_problem_bad_1"),
    t("web_problem_bad_2"),
    t("web_problem_bad_3"),
    t("web_problem_bad_4"),
  ];

  const problemsGood = [
    t("web_problem_good_1"),
    t("web_problem_good_2"),
    t("web_problem_good_3"),
    t("web_problem_good_4"),
  ];

  const uspItems = [
    { icon: "🧠", title: t("web_usp1_title"), desc: t("web_usp1_desc") },
    { icon: "⚡", title: t("web_usp2_title"), desc: t("web_usp2_desc") },
    { icon: "🎨", title: t("web_usp3_title"), desc: t("web_usp3_desc") },
    { icon: "📈", title: t("web_usp4_title"), desc: t("web_usp4_desc") },
    { icon: "🔑", title: t("web_usp5_title"), desc: t("web_usp5_desc") },
    { icon: "🤝", title: t("web_usp6_title"), desc: t("web_usp6_desc") },
  ];

  const packs = [
    {
      badge: "🌟 " + t("web_pack1_name"),
      oldPrice: "400€",
      price: "250€",
      tagline: t("web_pack1_tagline"),
      features: [
        t("web_pack1_f1"), t("web_pack1_f2"), t("web_pack1_f3"), t("web_pack1_f4"),
        t("web_pack1_f5"), t("web_pack1_f6"), t("web_pack1_f7"), t("web_pack1_f8"),
      ],
      popular: false,
    },
    {
      badge: "🌟🌟 " + t("web_pack2_name"),
      oldPrice: "700€",
      price: "500€",
      tagline: t("web_pack2_tagline"),
      features: [
        t("web_pack2_f1"), t("web_pack2_f2"), t("web_pack2_f3"), t("web_pack2_f4"),
        t("web_pack2_f5"), t("web_pack2_f6"), t("web_pack2_f7"), t("web_pack2_f8"),
      ],
      popular: true,
    },
    {
      badge: "🌟🌟🌟 " + t("web_pack3_name"),
      oldPrice: "1200€",
      price: "900€",
      tagline: t("web_pack3_tagline"),
      features: [
        t("web_pack3_f1"), t("web_pack3_f2"), t("web_pack3_f3"), t("web_pack3_f4"),
        t("web_pack3_f5"), t("web_pack3_f6"), t("web_pack3_f7"), t("web_pack3_f8"),
        t("web_pack3_f9"),
      ],
      popular: false,
    },
  ];

  const steps = [
    { num: "01", title: t("web_step1_title"), desc: t("web_step1_desc") },
    { num: "02", title: t("web_step2_title"), desc: t("web_step2_desc") },
    { num: "03", title: t("web_step3_title"), desc: t("web_step3_desc") },
    { num: "04", title: t("web_step4_title"), desc: t("web_step4_desc") },
  ];

  const integrations = [
    t("web_integ_1"), t("web_integ_2"), t("web_integ_3"), t("web_integ_4"),
    t("web_integ_5"), t("web_integ_6"), t("web_integ_7"), t("web_integ_8"),
    t("web_integ_9"), t("web_integ_10"), t("web_integ_11"), t("web_integ_12"),
    t("web_integ_13"), t("web_integ_14"), t("web_integ_15"),
  ];

  const faqItems = [
    { q: t("web_faq1_q"), a: t("web_faq1_a") },
    { q: t("web_faq2_q"), a: t("web_faq2_a") },
    { q: t("web_faq3_q"), a: t("web_faq3_a") },
    { q: t("web_faq4_q"), a: t("web_faq4_a") },
    { q: t("web_faq5_q"), a: t("web_faq5_a") },
    { q: t("web_faq6_q"), a: t("web_faq6_a") },
    { q: t("web_faq7_q"), a: t("web_faq7_a") },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative px-4 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            {t("web_hero_badge")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            {t("web_hero_title")}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              {t("web_hero_title_gradient")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("web_hero_sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <AnimatedBaseButton onClick={() => document.getElementById("packs-section")?.scrollIntoView({ behavior: "smooth" })}>
              {t("web_hero_cta1")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </AnimatedBaseButton>
            <AnimatedBaseButton variant="outline" onClick={() => setContactOpen(true)}>
              <MessageCircle className="mr-2 h-4 w-4" />
              {t("web_hero_cta2")}
            </AnimatedBaseButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon className="h-4 w-4 text-primary" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section id="problem" data-animate-section className="px-4 py-16 md:py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            {t("web_problem_title")}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              {t("web_problem_title_gradient")}
            </span>
          </h2>
          <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${isVisible("problem") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5">
              <div className="text-3xl mb-4">🚫</div>
              <h3 className="text-lg font-bold mb-4">{t("web_problem_bad_title")}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {problemsBad.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-3xl border border-green-500/20 bg-green-500/5">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-lg font-bold mb-4">{t("web_problem_good_title")}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {problemsGood.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USP */}
      <section id="usp" data-animate-section className="px-4 py-16 md:py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">
            {t("web_usp_title")}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              {t("web_usp_title_gradient")}
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">{t("web_usp_sub")}</p>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible("usp") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {uspItems.map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section id="packs-section" data-animate-section className="px-4 py-16 md:py-20 border-t border-border/40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">
            {t("web_packs_title")}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              {t("web_packs_title_gradient")}
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("web_packs_sub")}</p>
          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${isVisible("packs-section") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {packs.map((pack, i) => (
              <div key={i} className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:shadow-lg ${
                pack.popular
                  ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border bg-card/50 hover:border-primary/30"
              }`}>
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    ⭐ {t("web_pack_popular")}
                  </div>
                )}
                <div className="mb-6">
                  <span className="text-sm font-semibold">{pack.badge}</span>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground line-through">{pack.oldPrice}</span>
                    <span className="text-3xl font-extrabold text-primary">{pack.price}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{pack.tagline}</p>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {pack.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span dangerouslySetInnerHTML={{ __html: f }} />
                    </li>
                  ))}
                </ul>
                <AnimatedBaseButton
                  variant={pack.popular ? "primary" : "outline"}
                  onClick={() => setContactOpen(true)}
                  className="w-full justify-center"
                >
                  {t("web_pack_cta")}
                </AnimatedBaseButton>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            💡 {t("web_packs_note")}{" "}
            <button onClick={() => setContactOpen(true)} className="text-primary hover:underline cursor-pointer font-medium">
              {t("web_packs_note_link")}
            </button>
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" data-animate-section className="px-4 py-16 md:py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            {t("web_process_title")}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              {t("web_process_title_gradient")}
            </span>
          </h2>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {steps.map((step, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all">
                <div className="text-4xl font-black text-primary/20 mb-3">{step.num}</div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" data-animate-section className="px-4 py-16 md:py-20 border-t border-border/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            {t("web_integ_title")}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              {t("web_integ_title_gradient")}
            </span>
          </h2>
          <div className={`flex flex-wrap justify-center gap-3 transition-all duration-700 ${isVisible("integrations") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {integrations.map((tag, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  i === 12
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" data-animate-section className="px-4 py-16 md:py-20 border-t border-border/40">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            {t("web_faq_title")}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              {t("web_faq_title_gradient")}
            </span>
          </h2>
          <div className={`rounded-3xl border border-border bg-card/50 px-6 md:px-8 transition-all duration-700 ${isVisible("faq") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {faqItems.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 md:py-20 bg-primary/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("web_cta_title")}</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">{t("web_cta_sub")}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <AnimatedBaseButton onClick={() => setContactOpen(true)} className="text-base px-8 py-4">
              💬 {t("web_cta_message")}
            </AnimatedBaseButton>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("web_cta_whatsapp")}
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            🎁 {t("web_cta_bonus")}
          </p>
        </div>
      </section>

      <ContactFormModal
        open={contactOpen}
        onOpenChange={setContactOpen}
      />
    </main>
  );
}

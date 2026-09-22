"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircleQuestion, Plus, Minus } from "lucide-react";

export const FaqSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs = [
    { q: t("comeup_faq_1_q"), a: t("comeup_faq_1_a") },
    { q: t("comeup_faq_2_q"), a: t("comeup_faq_2_a") },
    { q: t("comeup_faq_3_q"), a: t("comeup_faq_3_a") },
    { q: t("comeup_faq_4_q"), a: t("comeup_faq_4_a") },
    { q: t("comeup_faq_5_q"), a: t("comeup_faq_5_a") },
  ];

  return (
    <section className="px-4 py-24 bg-secondary/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm shadow-sm uppercase tracking-widest mx-auto">
            <MessageCircleQuestion className="w-4 h-4" /> {t("comeup_faq_badge")}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            {t("comeup_faq_title")} <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
              {t("comeup_faq_title_gradient")}
            </span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-card border-primary/40 shadow-md' : 'bg-card/50 border-border hover:border-primary/30'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className={`font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-muted-foreground font-medium leading-relaxed text-lg border-t border-border/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

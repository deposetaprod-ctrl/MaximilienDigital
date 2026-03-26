"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Footer } from "@/components/sections/Footer";
import { SimplifiedContactModal } from "@/components/SimplifiedContactModal";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Share2, MessageSquare } from "lucide-react";

export default function ArticleClient({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);

  // In a real app, we'd fetch the article based on slug.
  // For now, we only have one article.
  if (slug !== "comment-creer-un-mvp") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-primary hover:underline">Retour au blog</Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: t("article_mvp_title"),
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié !");
    }
  };

  return (
    <>
      <main className="min-h-screen pt-32 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {t("blog_back")}
            </Link>
          </motion.div>

          {/* Header */}
          <header className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary mb-6"
            >
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">Stratégie</span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={14} className="text-primary/60" />
                <span>{t("article_mvp_date")}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground border-l border-border pl-4">
                <Clock size={14} className="text-primary/60" />
                <span>5 min de lecture</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold mb-10 leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
            >
              {t("article_mvp_title")}
            </motion.h1>

            {/* Author & Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-between gap-6 p-8 rounded-[2rem] bg-secondary/20 border border-border backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary/20 bg-primary/10 flex items-center justify-center font-bold text-xl text-primary shadow-inner">
                  MD
                </div>
                <div>
                  <div className="font-bold text-base">Maximilien Digital</div>
                  <div className="text-sm text-muted-foreground font-medium">Lead Developer · Expert MVP</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleShare}
                  className="p-4 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all active:scale-95 flex items-center gap-2 text-sm font-bold group"
                >
                  <Share2 size={18} className="group-hover:text-primary transition-colors" />
                  <span>Partager</span>
                </button>
              </div>
            </motion.div>
          </header>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="mb-20 rounded-[3rem] overflow-hidden aspect-[16/9] relative border border-border group"
          >
            <Image 
              src="/images/blog/mvp-hero.png" 
              alt={t("article_mvp_title")}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-primary max-w-none 
              prose-h2:text-3xl prose-h2:font-extrabold prose-h2:tracking-tight prose-h2:mb-8
              prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:mb-8
              prose-strong:text-foreground prose-strong:font-bold
              prose-em:text-primary prose-em:not-italic prose-em:font-medium
              prose-div:my-16 prose-div:p-10 prose-div:transition-all"
            dangerouslySetInnerHTML={{ __html: t("article_mvp_content") }}
          />

          {/* CTA footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-32 p-10 md:p-16 rounded-[4rem] bg-gradient-to-br from-primary/20 via-primary/5 to-secondary/20 border border-primary/20 text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8 animate-bounce">
                <MessageSquare size={40} />
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">{t("finalcta_title")}</h3>
              <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">{t("finalcta_subtitle")}</p>
              <button 
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground text-lg font-extrabold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/30"
              >
                {t("finalcta_cta")}
              </button>
            </div>
          </motion.div>
        </article>
      </main>

      <SimplifiedContactModal open={contactOpen} onOpenChange={setContactOpen} />
      <Footer />
    </>
  );
}

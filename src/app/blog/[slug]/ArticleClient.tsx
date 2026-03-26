"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

export default function ArticleClient({ slug }: { slug: string }) {
  const { t } = useLanguage();

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

  return (
    <>
      <main className="min-h-screen pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
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
          <header className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary mb-6"
            >
              <span className="px-2 py-0.5 rounded-md bg-primary/10">Stratégie</span>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar size={14} />
                <span>{t("article_mvp_date")}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock size={14} />
                <span>5 min</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight"
            >
              {t("article_mvp_title")}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between p-6 rounded-3xl bg-secondary/30 border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  MD
                </div>
                <div>
                  <div className="font-bold text-sm">Maximilien Digital</div>
                  <div className="text-xs text-muted-foreground">Lead Developer · Expert MVP</div>
                </div>
              </div>
              <button 
                className="p-3 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors"
                aria-label="Partager"
              >
                <Share2 size={18} />
              </button>
            </motion.div>
          </header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-primary max-w-none 
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-bold
              prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: t("article_mvp_content") }}
          />

          {/* CTA footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">{t("finalcta_title")}</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{t("finalcta_subtitle")}</p>
            <Link 
              href="/offre" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform"
            >
              {t("hero_cta")}
            </Link>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
}

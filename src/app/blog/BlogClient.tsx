"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";

export default function BlogClient() {
  const { t } = useLanguage();

  const articles = [
    {
      slug: "comment-creer-un-mvp",
      title: t("article_mvp_title"),
      description: t("article_mvp_description"),
      date: t("article_mvp_date"),
      readTime: "5 min",
      category: "Stratégie",
    },
    {
      slug: "mvp-gratuit-strategie-lancement",
      title: t("article_free_mvp_title"),
      description: t("article_free_mvp_description"),
      date: t("article_free_mvp_date"),
      readTime: "4 min",
      category: "Offre",
    },
    {
      slug: "creer-son-site-internet-3-etapes",
      title: t("article_website_title"),
      description: t("article_website_description"),
      date: t("article_website_date"),
      readTime: "6 min",
      category: "Développement",
    },
    {
      slug: "combien-coute-application-mobile-2026",
      title: t("article_app_cost_title"),
      description: t("article_app_cost_description"),
      date: t("article_app_cost_date"),
      readTime: "4 min",
      category: "Mobile",
    },
    {
      slug: "creer-mvp-rapidement-sans-developpeur",
      title: t("article_no_code_mvp_title"),
      description: t("article_no_code_mvp_description"),
      date: t("article_no_code_mvp_date"),
      readTime: "3 min",
      category: "Stratégie",
    },
    {
      slug: "pourquoi-experts-comptables-doivent-digitaliser",
      title: t("article_accounting_digital_title"),
      description: t("article_accounting_digital_description"),
      date: t("article_accounting_digital_date"),
      readTime: "4 min",
      category: "SaaS & IA",
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
            >
              <BookOpen size={14} />
              <span>Blog</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
            >
              {t("blog_title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {t("blog_subtitle")}
            </motion.p>
          </div>

          {/* Articles Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article) => (
              <motion.div
                key={article.slug}
                variants={itemVariants}
                className="group relative"
              >
                <Link href={`/blog/${article.slug}`} className="block h-full">
                  <div className="h-full flex flex-col p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 rounded-full bg-secondary text-[10px] font-bold uppercase tracking-tight text-secondary-foreground">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-8 line-clamp-3 text-sm leading-relaxed">
                      {article.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-primary" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} className="text-primary" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { translations } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  if (slug === "comment-creer-un-mvp") {
    return {
      title: translations.fr.article_mvp_title + " | Blog Maximilien Digital",
      description: translations.fr.article_mvp_description,
      openGraph: {
        title: translations.fr.article_mvp_title,
        description: translations.fr.article_mvp_description,
        images: ["/images/blog/mvp-hero.png"],
      },
    };
  }

  if (slug === "mvp-gratuit-strategie-lancement") {
    return {
      title: translations.fr.article_free_mvp_title + " | Blog Maximilien Digital",
      description: translations.fr.article_free_mvp_description,
      openGraph: {
        title: translations.fr.article_free_mvp_title,
        description: translations.fr.article_free_mvp_description,
        images: ["/images/blog/free-mvp-hero.png"],
      },
    };
  }

  if (slug === "creer-son-site-internet-3-etapes") {
    return {
      title: translations.fr.article_website_title + " | Blog Maximilien Digital",
      description: translations.fr.article_website_description,
      openGraph: {
        title: translations.fr.article_website_title,
        description: translations.fr.article_website_description,
        images: ["/images/blog/website-hero.png"],
      },
    };
  }

  if (slug === "combien-coute-application-mobile-2026") {
    return {
      title: translations.fr.article_app_cost_title + " | Blog Maximilien Digital",
      description: translations.fr.article_app_cost_description,
      openGraph: {
        title: translations.fr.article_app_cost_title,
        description: translations.fr.article_app_cost_description,
        images: ["/images/blog/mvp-hero.png"],
      },
    };
  }

  if (slug === "creer-mvp-rapidement-sans-developpeur") {
    return {
      title: translations.fr.article_no_code_mvp_title + " | Blog Maximilien Digital",
      description: translations.fr.article_no_code_mvp_description,
      openGraph: {
        title: translations.fr.article_no_code_mvp_title,
        description: translations.fr.article_no_code_mvp_description,
        images: ["/images/blog/free-mvp-hero.png"],
      },
    };
  }

  if (slug === "pourquoi-experts-comptables-doivent-digitaliser") {
    return {
      title: translations.fr.article_accounting_digital_title + " | Blog Maximilien Digital",
      description: translations.fr.article_accounting_digital_description,
      openGraph: {
        title: translations.fr.article_accounting_digital_title,
        description: translations.fr.article_accounting_digital_description,
        images: ["/images/blog/website-hero.png"],
      },
    };
  }

  return {
    title: "Article | Maximilien Digital",
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticleClient slug={slug} />;
}

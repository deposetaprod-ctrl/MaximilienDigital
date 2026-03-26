import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { translations } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  // Simple check for our first article
  if (slug === "comment-creer-un-mvp") {
    return {
      title: translations.fr.article_mvp_title,
      description: translations.fr.article_mvp_description,
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

import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { translations } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Simple check for our first article
  if (params.slug === "comment-creer-un-mvp") {
    return {
      title: translations.fr.article_mvp_title,
      description: translations.fr.article_mvp_description,
    };
  }
  return {
    title: "Article | Maximilien Digital",
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return <ArticleClient slug={params.slug} />;
}

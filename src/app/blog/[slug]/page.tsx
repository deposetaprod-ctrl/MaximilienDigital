import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { translations } from "@/lib/i18n";

const BASE_URL = "https://maximilien.digital";

const BLOG_ARTICLES = [
  {
    slug: "comment-creer-un-mvp",
    titleKey: "article_mvp_title" as const,
    descriptionKey: "article_mvp_description" as const,
    image: "/images/blog/mvp-hero.png",
    datePublished: "2026-03-15",
    category: "Stratégie",
  },
  {
    slug: "mvp-gratuit-strategie-lancement",
    titleKey: "article_free_mvp_title" as const,
    descriptionKey: "article_free_mvp_description" as const,
    image: "/images/blog/free-mvp-hero.png",
    datePublished: "2026-03-16",
    category: "Offre",
  },
  {
    slug: "creer-son-site-internet-3-etapes",
    titleKey: "article_website_title" as const,
    descriptionKey: "article_website_description" as const,
    image: "/images/blog/website-hero.png",
    datePublished: "2026-03-20",
    category: "Développement",
  },
  {
    slug: "combien-coute-application-mobile-2026",
    titleKey: "article_app_cost_title" as const,
    descriptionKey: "article_app_cost_description" as const,
    image: "/images/blog/mvp-hero.png",
    datePublished: "2026-03-25",
    category: "Mobile",
  },
  {
    slug: "creer-mvp-rapidement-sans-developpeur",
    titleKey: "article_no_code_mvp_title" as const,
    descriptionKey: "article_no_code_mvp_description" as const,
    image: "/images/blog/free-mvp-hero.png",
    datePublished: "2026-03-28",
    category: "Stratégie",
  },
  {
    slug: "pourquoi-experts-comptables-doivent-digitaliser",
    titleKey: "article_accounting_digital_title" as const,
    descriptionKey: "article_accounting_digital_description" as const,
    image: "/images/blog/website-hero.png",
    datePublished: "2026-03-28",
    category: "SaaS & IA",
  },
];

// SSG: pre-render all blog article pages at build time
export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article | Maximilien Digital" };
  }

  const title = translations.fr[article.titleKey];
  const description = translations.fr[article.descriptionKey];
  const url = `${BASE_URL}/blog/${slug}`;
  const imageUrl = `${BASE_URL}${article.image}`;

  return {
    title: `${title} | Blog Maximilien Digital`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Maximilien Digital",
      locale: "fr_FR",
      type: "article",
      publishedTime: article.datePublished,
      authors: ["Maximilien Digital"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Maximilien Digital`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // JSON-LD Article structured data (rendered in SSR HTML for Google)
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  const jsonLd = article
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": `${BASE_URL}/`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${BASE_URL}/blog`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": translations.fr[article.titleKey],
                "item": `${BASE_URL}/blog/${slug}`
              }
            ]
          },
          {
            "@type": "Article",
            "headline": translations.fr[article.titleKey],
            "description": translations.fr[article.descriptionKey],
            "image": `${BASE_URL}${article.image}`,
            "datePublished": article.datePublished,
            "dateModified": article.datePublished,
            "author": {
              "@type": "Person",
              "name": "Maximilien",
              "url": BASE_URL,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Maximilien Digital",
              "url": BASE_URL,
              "logo": {
                "@type": "ImageObject",
                "url": `${BASE_URL}/icon.png`,
              },
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${BASE_URL}/blog/${slug}`,
            },
          }
        ]
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ArticleClient slug={slug} />
    </>
  );
}

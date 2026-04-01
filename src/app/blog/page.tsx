import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | Maximilien Digital",
  description: "Conseils et stratégies pour réussir votre produit digital. Articles sur le développement SaaS, mobile, MVP et intelligence artificielle.",
  alternates: {
    canonical: "https://maximilien.digital/blog",
  },
  openGraph: {
    title: "Blog — Maximilien Digital",
    description:
      "Conseils et stratégies pour réussir votre produit digital. Articles SaaS, mobile, MVP et IA.",
    url: "https://maximilien.digital/blog",
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://maximilien.digital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog Maximilien Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Maximilien Digital",
    description:
      "Conseils et stratégies pour réussir votre produit digital.",
    images: ["https://maximilien.digital/og-image.png"],
  },
};


export default function BlogPage() {
  return <BlogClient />;
}

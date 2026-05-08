import type { Metadata } from "next";
import CreationSiteClient from "./CreationSiteClient";

export const metadata: Metadata = {
  title: "Création Site Web Professionnel Sur-Mesure | Livré en 7 à 15 jours",
  description:
    "Développeur & entrepreneur, je crée votre site web professionnel sur-mesure. Design premium, SEO optimisé, livraison rapide en 7 à 15 jours. À partir de 250€.",
  keywords: [
    "création site web",
    "site internet professionnel",
    "site web sur-mesure",
    "développeur site web",
    "site internet pas cher",
    "site web SEO optimisé",
    "création site internet rapide",
    "site vitrine professionnel",
  ],
  alternates: {
    canonical: "https://maximilien.digital/creation-site-web",
  },
  openGraph: {
    title: "Site Web Professionnel Sur-Mesure — Livré en 7 à 15 jours",
    description:
      "Design premium, SEO optimisé, code source inclus. Sites web professionnels à partir de 250€.",
    url: "https://maximilien.digital/creation-site-web",
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://maximilien.digital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — Création de Sites Web Professionnels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Web Professionnel Sur-Mesure | Maximilien Digital",
    description:
      "Design premium, SEO optimisé. Sites web professionnels à partir de 250€, livrés en 7 à 15 jours.",
    images: ["https://maximilien.digital/og-image.png"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://maximilien.digital/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Création de Site Web",
            item: "https://maximilien.digital/creation-site-web",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Création de Site Web Professionnel Sur-Mesure",
        description:
          "Sites web professionnels sur-mesure, design premium, SEO optimisé, livrés en 7 à 15 jours. À partir de 250€.",
        url: "https://maximilien.digital/creation-site-web",
        provider: {
          "@type": "LocalBusiness",
          name: "Maximilien Digital",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Packs de création de site web",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Pack Essentiel",
              price: "250",
              priceCurrency: "EUR",
              description: "Site one-page professionnel, livré en 7 jours",
            },
            {
              "@type": "Offer",
              name: "Pack Pro",
              price: "500",
              priceCurrency: "EUR",
              description: "Site multi-pages premium, livré en 10 jours",
            },
            {
              "@type": "Offer",
              name: "Pack Business",
              price: "900",
              priceCurrency: "EUR",
              description: "Site complet avec paiement et blog, livré en 15 jours",
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CreationSiteClient />
    </>
  );
}

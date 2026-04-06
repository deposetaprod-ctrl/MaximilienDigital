import type { Metadata } from "next";
import OffreClient from "./OffreClient";

export const metadata: Metadata = {
  title: "MVP Gratuit Application Mobile & SaaS | Maximilien Digital",
  description:
    "Obtenez votre MVP gratuit et un aperçu immédiat de votre projet digital. Lancement d'application et SaaS à partir de 1000€. Livraison sous 30 jours. Expertise locale.",
  keywords: [
    "MVP gratuit",
    "application mobile 1000€",
    "développement SaaS pas cher",
    "aperçu immédiat projet digital",
    "développeur freelance 1000€",
    "création MVP rapide",
  ],
  alternates: {
    canonical: "https://maximilien.digital/offre",
  },
  openGraph: {
    title: "MVP Gratuit — Application Mobile & SaaS",
    description:
      "MVP gratuit + aperçu immédiat. Lancement d'application et SaaS à partir de 1000€, livraison sous 30 jours.",
    url: "https://maximilien.digital/offre",
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://maximilien.digital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — MVP Gratuit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Gratuit Application Mobile & SaaS | Maximilien Digital",
    description:
      "MVP gratuit + aperçu immédiat. Apps et SaaS à partir de 1000€, livraison 30 jours.",
    images: ["https://maximilien.digital/og-image.png"],
  },
};


export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://maximilien.digital/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Offre MVP Gratuit",
            "item": "https://maximilien.digital/offre"
          }
        ]
      },
      {
        "@type": "Offer",
        "name": "MVP Gratuit Application Mobile & SaaS",
        "description": "Obtenez votre MVP gratuit et un aperçu immédiat de votre projet digital. Lancement d'application et SaaS à partir de 1000€.",
        "url": "https://maximilien.digital/offre",
        "offeredBy": {
          "@type": "LocalBusiness",
          "name": "Maximilien Digital"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OffreClient />
    </>
  );
}

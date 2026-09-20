import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Création de Portail Client pour Expert-Comptable",
  description:
    "Développement de portails clients sécurisés pour cabinets comptables. Automatisez la collecte de documents et les relances clients.",
  keywords: [
    "portail client expert comptable",
    "extranet cabinet comptable",
    "outil relance automatique pièces comptables",
    "application collecte factures client",
    "automatisation collecte document expert comptable",
  ],
  alternates: {
    canonical: "https://maximilien.digital/portail-client-expert-comptable",
  },
  openGraph: {
    title: "Création de Portail Client pour Expert-Comptable",
    description:
      "Automatisez la collecte de vos pièces comptables grâce à un portail client sur-mesure.",
    url: "https://maximilien.digital/portail-client-expert-comptable",
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://maximilien.digital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — Portail Client Comptable",
      },
    ],
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
            "name": "Portail Client Comptable",
            "item": "https://maximilien.digital/portail-client-expert-comptable"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Création de Portail Client pour Cabinet Comptable",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Maximilien Digital"
        },
        "description": "Portail web sécurisé et automatisé pour la collecte de documents des experts-comptables.",
        "url": "https://maximilien.digital/portail-client-expert-comptable"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Client />
    </>
  );
}

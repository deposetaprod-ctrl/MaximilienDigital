import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "CRM & Outil Interne pour Cabinet d'Expertise Comptable",
  description:
    "Développement d'outils internes et CRM sur-mesure pour experts-comptables. Onboarding, suivi des temps, lettres de mission et interconnexion API.",
  keywords: [
    "crm cabinet expertise comptable",
    "logiciel gestion interne expert comptable",
    "automatisation cabinet comptable",
    "lettre de mission automatique",
    "suivi de temps collaborateur comptable",
  ],
  alternates: {
    canonical: "https://maximilien.digital/logiciel-expert-comptable",
  },
  openGraph: {
    title: "CRM & Outil Interne pour Cabinet d'Expertise Comptable",
    description:
      "Développement d'outils internes et CRM sur-mesure pour experts-comptables.",
    url: "https://maximilien.digital/logiciel-expert-comptable",
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://maximilien.digital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — Logiciel Expert Comptable",
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
            "name": "CRM & Outil Interne Comptable",
            "item": "https://maximilien.digital/logiciel-expert-comptable"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Création CRM & Outil Interne pour Experts-Comptables",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Maximilien Digital"
        },
        "description": "Développement de logiciels internes sur-mesure pour les cabinets comptables.",
        "url": "https://maximilien.digital/logiciel-expert-comptable"
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

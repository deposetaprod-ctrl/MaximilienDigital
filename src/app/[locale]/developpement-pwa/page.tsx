import type { Metadata } from "next";
import PwaClient from "./PwaClient";

export const metadata: Metadata = {
  title: "Développement de PWA & Web Apps Métier | Maximilien Digital",
  description:
    "Création de Web Apps et PWA sur-mesure pour les PME. Automatisez vos processus, gérez vos stocks et créez des portails clients sans les coûts des stores.",
  keywords: [
    "développement pwa",
    "web app métier",
    "application web sur mesure",
    "outil interne entreprise",
    "automatisation pme",
  ],
  alternates: {
    canonical: "https://maximilien.digital/developpement-pwa",
  },
  openGraph: {
    title: "Développement de PWA & Web Apps Métier",
    description:
      "Automatisez vos processus avec des PWA sur-mesure pour les PME.",
    url: "https://maximilien.digital/developpement-pwa",
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://maximilien.digital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — Développement PWA",
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
            "name": "Développement PWA",
            "item": "https://maximilien.digital/developpement-pwa"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Développement de PWA & Web Apps Métier",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Maximilien Digital"
        },
        "description": "Création de Web Apps et PWA sur-mesure pour les PME à prix réduit.",
        "url": "https://maximilien.digital/developpement-pwa"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PwaClient />
    </>
  );
}

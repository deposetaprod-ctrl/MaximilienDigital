import type { Metadata } from "next";
import MobileClient from "./MobileClient";

export const metadata: Metadata = {
  title: "Développement d'Applications Mobiles iOS & Android | Maximilien Digital",
  description:
    "Création d'applications mobiles performantes par Maximilien Digital. MVP livré en 30 jours, prêt pour l'App Store et Google Play.",
  keywords: [
    "développement application mobile",
    "développeur React Native freelance",
    "création app iOS Android",
    "expert Expo mobile",
    "MVP mobile 30 jours",
  ],
  alternates: {
    canonical: "https://maximilien.digital/applications-mobiles",
  },
  openGraph: {
    title: "Développement d'Applications Mobiles iOS & Android",
    description:
      "Création d'apps mobiles performantes. MVP livré en 30 jours, prêt pour l'App Store et Google Play.",
    url: "https://maximilien.digital/applications-mobiles",
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://maximilien.digital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — Applications Mobiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Applications Mobiles iOS & Android | Maximilien Digital",
    description:
      "MVP mobile livré en 30 jours. Développeur React Native & Expo freelance.",
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
            "name": "Applications Mobiles",
            "item": "https://maximilien.digital/applications-mobiles"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Développement d'Applications Mobiles iOS & Android",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Maximilien Digital"
        },
        "description": "Création d'apps mobiles performantes. MVP livré en 30 jours, prêt pour l'App Store et Google Play.",
        "url": "https://maximilien.digital/applications-mobiles"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MobileClient />
    </>
  );
}

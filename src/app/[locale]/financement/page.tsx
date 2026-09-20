import type { Metadata } from "next";
import FinancementClient from "./FinancementClient";

export const metadata: Metadata = {
  title: "Aide au Financement de votre Application | Maximilien Digital",
  description:
    "Besoin d'aide pour financer votre projet SaaS ou mobile ? Découvrez nos conseils pour obtenir des aides (BPI, banques, investisseurs) et chiffrer votre projet.",
  keywords: [
    "aide financement application mobile",
    "financement projet SaaS",
    "subvention BPI digital",
    "chiffrage projet informatique",
  ],
  alternates: {
    canonical: "https://maximilien.digital/financement",
  },
  openGraph: {
    title: "Aide au Financement de votre Application",
    description:
      "Conseils pour financer votre projet SaaS ou mobile. Aides BPI, banques, investisseurs — chiffrage gratuit.",
    url: "https://maximilien.digital/financement",
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://maximilien.digital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — Financement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financement Application Mobile & SaaS | Maximilien Digital",
    description:
      "Conseils pour financer votre projet digital. Aides BPI, banques, investisseurs.",
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
            "name": "Aides au Financement",
            "item": "https://maximilien.digital/financement"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FinancementClient />
    </>
  );
}

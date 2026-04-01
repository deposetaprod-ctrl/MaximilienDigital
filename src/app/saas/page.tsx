import type { Metadata } from "next";
import SaasClient from "./SaasClient";

export const metadata: Metadata = {
  title: "Développement SaaS & Plateformes Web sur mesure | Maximilien Digital",
  description:
    "Expert en développement de plateformes SaaS, logiciels web complexes et backoffice. Livraison d'un MVP fonctionnel en 30 jours par Maximilien Digital.",
  keywords: [
    "développement SaaS freelance",
    "création plateforme web",
    "expert Next.js",
    "MVP SaaS 30 jours",
    "logiciel sur mesure",
  ],
  alternates: {
    canonical: "https://maximilien.digital/saas",
  },
  openGraph: {
    title: "Développement SaaS & Plateformes Web sur mesure",
    description:
      "Expert en développement de plateformes SaaS, logiciels web complexes et backoffice. MVP livré en 30 jours.",
    url: "https://maximilien.digital/saas",
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://maximilien.digital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — Développement SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développement SaaS & Plateformes Web | Maximilien Digital",
    description:
      "MVP SaaS livré en 30 jours. Expert Next.js, logiciels web complexes et backoffice.",
    images: ["https://maximilien.digital/og-image.png"],
  },
};


export default function Page() {
  return <SaasClient />;
}

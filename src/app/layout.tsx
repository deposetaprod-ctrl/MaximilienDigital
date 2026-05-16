import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";
import "./globals.css";

const OG_IMAGE_URL = "https://maximilien.digital/og-image.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://maximilien.digital";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Maximilien Digital | Outils Métier & Automatisation IA sur-mesure",
    template: "%s | Maximilien Digital",
  },
  description:
    "J'aide les PME, experts-comptables et indépendants à automatiser leurs opérations avec des outils IA sur-mesure. Portail client, automatisation administrative, remplacement d'Excel.",
  keywords: [
    "automatisation cabinet comptable",
    "portail client expert-comptable",
    "outil IA PME",
    "application métier sur mesure",
    "remplacer Excel par application",
    "automatisation administrative IA",
    "OCR factures IA",
    "Maximilien Digital",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      fr: BASE_URL,
      en: BASE_URL,
      "x-default": BASE_URL,
    },
  },
  openGraph: {
    title: "Maximilien Digital | Outils Métier & Automatisation IA",
    description:
      "J'aide les PME à automatiser leurs opérations avec des outils IA sur-mesure. MVP en 14 jours, portail client, remplacement d'Excel.",
    type: "website",
    url: BASE_URL,
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — Outils Métier IA sur-mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximilien Digital | Outils Métier & Automatisation IA",
    description:
      "J'aide les PME à automatiser leurs opérations avec des outils IA sur-mesure. MVP en 14 jours, portail client, remplacement d'Excel.",
    images: [OG_IMAGE_URL],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://maximilien.digital/#person",
        name: "Maximilien",
        url: "https://maximilien.digital",
        jobTitle: "Créateur d'outils métier IA sur-mesure",
        description:
          "J'aide les PME à automatiser leurs opérations avec des outils IA sur-mesure.",
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://maximilien.digital/#business",
        name: "Maximilien Digital",
        url: "https://maximilien.digital",
        telephone: "+33766074746",
        email: "maximilien.godeau.off@gmail.com",
        description:
          "Création d'outils métier IA sur-mesure, portails clients, automatisation administrative.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "FR",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portail client intelligent" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatisation IA administrative" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remplacement d'Excel par une app" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://maximilien.digital/#website",
        url: "https://maximilien.digital",
        name: "Maximilien Digital",
        description: "Outils Métier & Automatisation IA sur-mesure",
        publisher: {
          "@id": "https://maximilien.digital/#person"
        },
        inLanguage: "fr-FR"
      }
    ],
  };

  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RZL7R8MYVS"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RZL7R8MYVS');
          `,
        }}
      />
      <body
        className={`${geistSans.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

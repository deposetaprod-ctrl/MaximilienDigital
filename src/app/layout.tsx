import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
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
    default: "Développeur et Architecte d'Applications | Application Web & Maquette Gratuite",
    template: "%s | Maximilien Digital",
  },
  description:
    "Développeur et Architecte d'Applications. Création d'applications web sur mesure. Obtenez votre maquette gratuite et propulsez votre métier grâce à l'Intelligence Artificielle.",
  keywords: [
    "développeur IA",
    "développeur claude",
    "créer application avec IA",
    "développement avec claude",
    "maquette gratuite",
    "application web métier",
    "application sur mesure",
    "PWA",
    "automatisation processus métier",
    "connexion API",
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
    title: "Maximilien Digital | Applications Web Métier & PWA",
    description:
      "Création d'Applications Web Métier et PWA sur-mesure. Développement rapide, connexion API, automatisation des processus métier.",
    type: "website",
    url: BASE_URL,
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — Applications Web Métier & PWA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximilien Digital | Applications Web Métier & PWA",
    description:
      "Création d'Applications Web Métier et PWA sur-mesure. Développement rapide, connexion API, automatisation des processus métier.",
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
        jobTitle: "Développeur d'Applications Web Métier & PWA",
        description:
          "Création d'Applications Web Métier et PWA sur-mesure pour automatiser les processus d'entreprise.",
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
          "Studio de développement d'applications web métier, PWA, connexion API et automatisation de processus.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "FR",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Développement d'Application Web Métier" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création de Progressive Web App (PWA)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Connexion API et Automatisation" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://maximilien.digital/#website",
        url: "https://maximilien.digital",
        name: "Maximilien Digital",
        description: "Applications Web Métier, PWA & Automatisation",
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
        <Analytics />
      </body>
    </html>
  );
}

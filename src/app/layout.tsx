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
    default: "Maximilien Digital | Développeur SaaS, Mobile & IA — Freelance",
    template: "%s | Maximilien Digital",
  },
  description:
    "Développeur freelance spécialisé en SaaS, applications mobiles iOS/Android et intelligence artificielle. MVP livré en 30 jours. Basé en France.",
  keywords: [
    "développeur freelance",
    "développement SaaS",
    "application mobile",
    "React Native",
    "Next.js",
    "intelligence artificielle",
    "MVP",
    "startup",
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
    title: "Maximilien Digital | Développeur SaaS, Mobile & IA",
    description:
      "MVP livré en 30 jours. Développeur freelance spécialisé SaaS, apps mobiles et IA.",
    type: "website",
    url: BASE_URL,
    siteName: "Maximilien Digital",
    locale: "fr_FR",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Maximilien Digital — Développeur SaaS, Mobile & IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximilien Digital | Développeur SaaS, Mobile & IA",
    description:
      "MVP livré en 30 jours. Développeur freelance spécialisé SaaS, apps mobiles et IA.",
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
        jobTitle: "Développeur Freelance SaaS, Mobile & IA",
        description:
          "Développeur freelance spécialisé en SaaS, applications mobiles et intelligence artificielle. MVP livré en 30 jours.",
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
          "Développement SaaS, applications mobiles iOS/Android et solutions d'intelligence artificielle sur mesure.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "FR",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services de développement",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Développement SaaS" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Applications mobiles iOS & Android" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intégration Intelligence Artificielle" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://maximilien.digital/#website",
        url: "https://maximilien.digital",
        name: "Maximilien Digital",
        description: "Développeur Freelance SaaS, Mobile & IA",
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

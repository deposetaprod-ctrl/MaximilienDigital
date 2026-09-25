import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { AIChatbot } from "@/components/AIChatbot";
import { LanguageProvider } from "@/context/LanguageContext";
import { NextIntlClientProvider } from "next-intl";
import { translations, type Locale } from "@/lib/i18n";
import Script from "next/script";
import "../globals.css";
import "../../styles/premium-design.css";
import { PremiumBriefDialog } from "@/components/sections/premium-home/PremiumBriefDialog";
import { ExistingMockupDialog } from "@/components/ExistingMockupDialog";
import { MobileBottomNav } from "@/components/MobileBottomNav";

const OG_IMAGE_URL = "https://maximilien.digital/og-image.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://maximilien.digital";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = (key: string) => (translations as any)[locale]?.[key] || key;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t("seo_title_default") || "Développeur Web Fullstack | Création App Mobile & Web",
      template: "%s | Maximilien Digital",
    },
    description: t("seo_desc") || "Développeur web fullstack et mobile sur mesure.",
    keywords: [
      "développeur web",
      "développeur fullstack",
      "développeur application mobile",
      "développeur application web",
      "création application mobile",
      "développeur IA",
      "créer application avec IA",
      "agents IA et chatbots",
      "base de données RGPD",
      "tableaux de bord administrateur",
      "stratégie MVP",
      "Minimum Viable Product",
      "MVP application",
      "modules de paiement et abonnements",
      "Google Ads et optimisation SEO",
      "publication App Store et Google Play",
      "design UX/UI sur mesure",
      "automatisation emails SMS",
      "développement SaaS",
      "maquette gratuite",
      "application web métier",
      "application sur mesure",
      "application mobile sur mesure",
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
        en: BASE_URL + "/en",
        "x-default": BASE_URL,
      },
    },
    openGraph: {
      title: "Agence Web Maximilien Digital | Création Site Internet & App Mobile",
      description: "Agence de développement web experte en création de sites internet et applications mobile sur mesure. Développement rapide, PWA, application iOS & Android, et automatisation.",
      type: "website",
      url: BASE_URL,
      siteName: "Maximilien Digital",
      locale: locale === 'en' ? "en_US" : "fr_FR",
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: "Maximilien Digital — Applications Web & Mobile sur mesure",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Agence Web Maximilien Digital | Création Site Internet & App Mobile",
      description: "Agence de développement web experte en création de sites internet et applications mobile sur mesure. Développement rapide, PWA, application iOS & Android, et automatisation.",
      images: [OG_IMAGE_URL],
    },
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/cellequejeprefere_rounded.png" },
        { url: "/cellequejeprefere_rounded.png", sizes: "32x32", type: "image/png" },
        { url: "/cellequejeprefere_rounded.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [
        { url: "/cellequejeprefere_rounded.png" },
      ],
    },
  };
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }>
) {
  const { children, params } = props;
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://maximilien.digital/#person",
        name: "Maximilien",
        url: "https://maximilien.digital",
        jobTitle: "Développeur d'Applications Web & Mobile",
        description:
          "Création d'applications web et mobile sur mesure. Développement de PWA, d'applications iOS & Android et d'agents IA pour automatiser les processus d'entreprise.",
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
          "Studio de développement d'applications web et mobile sur mesure. Création d'apps iOS & Android, PWA, SaaS, agents IA, connexion API et automatisation de processus.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "FR",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Développement d'Application Web sur mesure" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création d'Application Mobile iOS & Android" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création de Progressive Web App (PWA)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Développement SaaS & Agents IA" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Connexion API et Automatisation" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://maximilien.digital/#website",
        url: "https://maximilien.digital",
        name: "Maximilien Digital",
        description: "Création d'applications web et mobile sur mesure, PWA, SaaS & Automatisation IA",
        publisher: {
          "@id": "https://maximilien.digital/#person"
        },
        inLanguage: "fr-FR"
      }
    ],
  };

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
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
            gtag('config', 'AW-11307841019');
          `,
        }}
      />
      {process.env.NEXT_PUBLIC_CLARITY_ID && (
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `,
          }}
        />
      )}
      <body
        className={`${geistSans.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={{}}>
          {/* @ts-ignore */}
          <LanguageProvider initialLocale={locale}>
          <Navigation />
          {children}
          <AIChatbot />
          <MobileBottomNav />
          </LanguageProvider>
        </NextIntlClientProvider>
        <PremiumBriefDialog />
        <ExistingMockupDialog />
      </body>
    </html>
  );
}

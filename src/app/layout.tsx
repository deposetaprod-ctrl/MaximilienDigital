import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maximilien Digital | Développeur SaaS, Mobile & IA",
  description:
    "Expert en développement SaaS, applications mobiles et solutions d'intelligence artificielle. Transformons votre idée en produit digital performant.",
  keywords: [
    "développeur",
    "SaaS",
    "application mobile",
    "intelligence artificielle",
    "freelance",
  ],
  openGraph: {
    title: "Maximilien Digital | Développeur SaaS, Mobile & IA",
    description:
      "Transformons votre idée en produit digital performant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
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
      </head>
      <body
        className={`${geistSans.variable} font-sans antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}

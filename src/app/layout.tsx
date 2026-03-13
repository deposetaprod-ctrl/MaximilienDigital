import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navigation } from "@/components/Navigation";
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

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
};

export default function Page() {
  return <SaasClient />;
}

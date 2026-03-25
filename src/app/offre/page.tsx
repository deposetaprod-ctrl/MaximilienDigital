import type { Metadata } from "next";
import OffreClient from "./OffreClient";

export const metadata: Metadata = {
  title: "MVP Gratuit Application Mobile & SaaS | Maximilien Digital",
  description:
    "Obtenez votre MVP gratuit et un aperçu immédiat de votre projet digital. Lancement d'application et SaaS à partir de 1000€. Livraison sous 30 jours. Expertise locale.",
  keywords: [
    "MVP gratuit",
    "application mobile 1000€",
    "développement SaaS pas cher",
    "aperçu immédiat projet digital",
    "développeur freelance 1000€",
    "création MVP rapide",
  ],
};

export default function Page() {
  return <OffreClient />;
}

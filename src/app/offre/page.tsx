import type { Metadata } from "next";
import OffreClient from "./OffreClient";

export const metadata: Metadata = {
  title: "Offre MVP Gratuit & Application à partir de 1000€ | Maximilien Digital",
  description:
    "Lancement spécial : Votre MVP gratuit immédiatement, application ou site web à partir de 1000€. Livraison sous 30 jours. Profitez de l'expertise de Maximilien Digital.",
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

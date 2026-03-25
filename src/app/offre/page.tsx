import type { Metadata } from "next";
import OffreClient from "./OffreClient";

export const metadata: Metadata = {
  title: "Offre Spéciale : Votre Projet Digital à Prix Bas | Maximilien Digital",
  description:
    "Profitez de l'offre limitée de Maximilien Digital : prototype gratuit, nom de domaine offert et tarifs ultra-compétitifs pour votre SaaS, application mobile ou site web.",
  keywords: [
    "offre spéciale développement",
    "création site internet pas cher",
    "développement SaaS prix bas",
    "application mobile prototype gratuit",
    "nom de domaine offert",
  ],
};

export default function Page() {
  return <OffreClient />;
}

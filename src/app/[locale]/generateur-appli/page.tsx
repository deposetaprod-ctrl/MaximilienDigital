import type { Metadata } from "next";
import { GenerateurAppliClient } from "./GenerateurAppliClient";

export const metadata: Metadata = {
  title: "Génération d'application sur mesure | Maximilien Digital",
  description: "Décrivez brièvement votre projet d'application et recevez une estimation et une stratégie de développement personnalisée.",
};

export default function GenerateurAppliPage() {
  return <GenerateurAppliClient />;
}

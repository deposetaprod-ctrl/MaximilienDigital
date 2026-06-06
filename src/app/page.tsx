import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // Title and description are inherited from layout but we can be explicit if we want to override
  title: "Maximilien Digital | Applications Web Métier & PWA sur-mesure",
  description:
    "Développement rapide d'Applications Web Métier et de Progressive Web Apps (PWA). Connexion API, tableaux de bord et automatisation de processus pour experts-comptables et PME.",
};

export default function Home() {
  return <HomeClient />;
}

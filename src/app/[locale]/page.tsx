import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // Title and description are inherited from layout but we can be explicit if we want to override
  title: "Agence Web & Freelance : Création Site Internet, App Mobile iOS / Android",
  description:
    "Agence Web et freelance : création de site internet et application web sur mesure (SaaS, mobile IOS & Android...). Intégration d'Agent IA, RGPD. Maquette gratuite.",
};

export default function Home() {
  return <HomeClient />;
}

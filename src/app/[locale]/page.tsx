import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // Title and description are inherited from layout but we can be explicit if we want to override
  title: "Création Site Internet & MVP (Minimum Viable Product), App Mobile",
  description:
    "Agence Web et freelance : stratégie MVP (Minimum Viable Product), création de site internet et application web sur mesure (SaaS, mobile). Intégration IA. Maquette gratuite.",
};

export default function Home() {
  return <HomeClient />;
}

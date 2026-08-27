import type { Metadata } from "next";
import WebAppClient from "./WebAppClient";

export const metadata: Metadata = {
  title: "Création d'Application Web & SaaS | Développeur Agent IA | Maquette Gratuite",
  description:
    "Développeur d'application web sur mesure et SaaS. Intégration d'Agent IA, conformité RGPD, hébergement France (OVH), Design 3D et sécurisation. Recevez une maquette gratuite.",
  keywords: ["développeur Agent IA", "SaaS Agent IA", "application web sur mesure", "automatisation IA", "développeur web RGPD", "hébergement OVH France", "développement SaaS", "authentification sécurisée", "design 3D web"],
};

export default function WebAppPage() {
  return <WebAppClient />;
}

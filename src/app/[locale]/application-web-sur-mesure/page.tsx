import type { Metadata } from "next";
import WebAppClient from "./WebAppClient";

export const metadata: Metadata = {
  title: "Agence Web : Création Site Internet, Web App & SaaS | Maquette Gratuite",
  description:
    "Agence Web : création de site internet premium et application sur mesure (SaaS). Intégration d'Agent IA, RGPD, hébergement France (OVH). Maquette gratuite.",
  keywords: ["développeur Agent IA", "SaaS Agent IA", "application web sur mesure", "automatisation IA", "développeur web RGPD", "hébergement OVH France", "développement SaaS", "authentification sécurisée", "design 3D web"],
};

export default function WebAppPage() {
  return <WebAppClient />;
}

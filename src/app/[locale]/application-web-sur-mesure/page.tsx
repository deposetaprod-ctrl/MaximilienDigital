import type { Metadata } from "next";
import WebAppClient from "./WebAppClient";

export const metadata: Metadata = {
  title: "Agence Web : Création Site Internet, Web App & SaaS | Maquette Gratuite",
  description:
    "Votre Agence web de confiance pour la création de site internet premium, d'application web (SaaS) et PWA sur mesure. Obtenez une maquette gratuite pour valider votre projet.",
  keywords: ["développeur Agent IA", "SaaS Agent IA", "application web sur mesure", "automatisation IA", "développeur web RGPD", "hébergement OVH France", "développement SaaS", "authentification sécurisée", "design 3D web"],
};

export default function WebAppPage() {
  return <WebAppClient />;
}

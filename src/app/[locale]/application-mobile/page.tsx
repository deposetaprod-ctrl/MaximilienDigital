import type { Metadata } from "next";
import MobileAppClient from "./MobileAppClient";

export const metadata: Metadata = {
  title: "Développeur Web Freelance | Application Mobile iOS & Android sur Mesure",
  description:
    "Développeur web fullstack et freelance spécialisé en création d'applications mobiles iOS et Android sur mesure. Design UX/UI, publication App Store & Google Play, code source livré. Maquette gratuite.",
  keywords: [
    "développeur web freelance",
    "développeur fullstack",
    "développeur web",
    "développeur application mobile",
    "création application iOS",
    "création application Android",
    "développement mobile sur mesure",
    "freelance développeur mobile",
    "publication App Store",
    "publication Google Play",
    "design UI mobile",
    "développeur React Native",
  ],
};

export default function MobileAppPage() {
  return <MobileAppClient />;
}

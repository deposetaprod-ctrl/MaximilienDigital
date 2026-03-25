import type { Metadata } from "next";
import MobileClient from "./MobileClient";

export const metadata: Metadata = {
  title: "Développement d'Applications Mobiles iOS & Android | MVP en 30 jours",
  description:
    "Création d'applications mobiles performantes avec React Native. MVP livré en 30 jours, prêt pour l'App Store et Google Play.",
  keywords: [
    "développement application mobile",
    "développeur React Native freelance",
    "création app iOS Android",
    "expert Expo mobile",
    "MVP mobile 30 jours",
  ],
};

export default function Page() {
  return <MobileClient />;
}

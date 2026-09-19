import type { Metadata } from "next";
import MobileAppClient from "./MobileAppClient";

export const metadata: Metadata = {
  title: "Création d'Application Mobile | Développeur iOS & Android | Maquette Gratuite",
  description:
    "Développeur d'application mobile sur mesure iOS et Android. Design UX/UI, publication sur les stores (App Store, Google Play), et hébergement sécurisé. Recevez une maquette gratuite.",
  keywords: ["développeur application mobile", "création application iOS", "création application Android", "développement mobile sur mesure", "publication App Store", "publication Google Play", "design UI mobile"],
};

export default function MobileAppPage() {
  return <MobileAppClient />;
}

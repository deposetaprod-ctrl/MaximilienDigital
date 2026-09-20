import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // Title and description are inherited from layout but we can be explicit if we want to override
  title: "Développeur d'Applications Web & Mobile | Maquette Gratuite",
  description:
    "Développeur d'applications web et mobile sur mesure. Création d'application web, PWA et application mobile iOS & Android. Remplissez le formulaire et recevez une maquette gratuite de votre projet sous 24h.",
};

export default function Home() {
  return <HomeClient />;
}

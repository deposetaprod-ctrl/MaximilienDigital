import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // Title and description are inherited from layout but we can be explicit if we want to override
  title: "Maximilien Digital | Maquette Gratuite Application Web Métier",
  description:
    "Développement d'Applications Web Métier et PWA. Remplissez le formulaire et recevez une maquette gratuite de votre projet sous 24h.",
};

export default function Home() {
  return <HomeClient />;
}

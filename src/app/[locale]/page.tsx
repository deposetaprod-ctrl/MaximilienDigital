import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // Title and description are inherited from layout but we can be explicit if we want to override
  title: "Agence Web & Freelance : Création Site Internet, App Mobile iOS / Android",
  description:
    "Agence Web et freelance / création de site internet & application web & application mobile IOS et android. Demandez votre maquette gratuite sous 24h",
};

export default function Home() {
  return <HomeClient />;
}

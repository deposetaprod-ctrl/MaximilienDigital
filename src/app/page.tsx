import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // Title and description are inherited from layout but we can be explicit if we want to override
  title: "Maximilien Digital | Outils Métier & Automatisation IA sur-mesure",
  description:
    "J'aide les PME et les experts-comptables à automatiser leurs opérations avec des outils IA sur-mesure. Portail client, automatisation OCR, remplacement d'Excel.",
};

export default function Home() {
  return <HomeClient />;
}

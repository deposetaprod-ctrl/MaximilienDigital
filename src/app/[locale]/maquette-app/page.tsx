import { Metadata } from "next";
import { MaquetteAppClient } from "./MaquetteAppClient";

export const metadata: Metadata = {
  title: "Transformez votre maquette en application",
  description: "Importez votre maquette et obtenez gratuitement une première estimation de votre projet.",
  robots: { index: false, follow: false }, // Prevent SEO indexing for ads landing page
};

export default function MaquetteAppPage() {
  return <MaquetteAppClient />;
}

import type { Metadata } from "next";
import DevisClient from "./DevisClient";

export const metadata: Metadata = {
  title: "Générateur de Devis Informatique",
  description: "Générateur de devis sur-mesure pour Maximilien Digital.",
};

export default function Devis() {
  return <DevisClient />;
}

import type { Metadata } from "next";
import WebAppClient from "./WebAppClient";

export const metadata: Metadata = {
  title: "Création d'Application Web sur Mesure | Maquette Gratuite",
  description:
    "Développeur d'application web sur mesure. Lancez votre application responsive, PWA, MVP et logiciel métier. Recevez une maquette gratuite.",
};

export default function WebAppPage() {
  return <WebAppClient />;
}

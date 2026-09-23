import { setRequestLocale } from "next-intl/server";
import FormationClient from "./FormationClient";

export function generateMetadata() {
  return {
    title: "HTML to App : Transformez votre maquette en application | Maximilien Digital",
    description: "Vous avez une maquette (HTML, Figma, IA) ? Je vous guide pas à pas pour développer votre application, ou je la code pour vous. Formation HTML to App.",
  };
}

export default function FormationPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <FormationClient />;
}

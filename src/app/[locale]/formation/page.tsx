import { setRequestLocale } from "next-intl/server";
import FormationClient from "./FormationClient";

export function generateMetadata() {
  return {
    title: "Formation Développeur Indépendant | Maximilien Digital",
    description: "Je vous apprends tout pour développer votre propre application. Outils, bonnes pratiques, design et monétisation.",
  };
}

export default function FormationPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return <FormationClient />;
}

import type { Metadata } from "next";
import FinancementClient from "./FinancementClient";

export const metadata: Metadata = {
  title: "Aide au Financement de votre Application | Maximilien Digital",
  description:
    "Besoin d'aide pour financer votre projet SaaS ou mobile ? Découvrez nos conseils pour obtenir des aides (BPI, banques, investisseurs) et chiffrer votre projet.",
  keywords: [
    "aide financement application mobile",
    "financement projet SaaS",
    "subvention BPI digital",
    "chiffrage projet informatique",
  ],
};

export default function Page() {
  return <FinancementClient />;
}

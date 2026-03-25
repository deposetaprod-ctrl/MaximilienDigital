import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  // Title and description are inherited from layout but we can be explicit if we want to override
  title: "Maximilien Digital | Développeur SaaS, Mobile & IA — Freelance",
  description:
    "Développeur freelance spécialisé en SaaS, applications mobiles iOS/Android et intelligence artificielle. MVP livré en 30 jours. Basé en France.",
};

export default function Home() {
  return <HomeClient />;
}

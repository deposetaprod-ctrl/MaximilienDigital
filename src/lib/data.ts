import { Code, Smartphone, Brain, type LucideIcon } from "lucide-react";

// --- Services ---

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Code,
    title: "Développement SaaS",
    description:
      "Applications web sur mesure, performantes et scalables. De l'idée au déploiement, je construis votre plateforme SaaS avec les technologies les plus modernes.",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Applications iOS et Android intuitives et fluides. Une expérience utilisateur soignée pour fidéliser vos clients et simplifier votre activité.",
  },
  {
    icon: Brain,
    title: "Solutions IA",
    description:
      "Intégration d'intelligence artificielle dans vos outils existants. Automatisation, analyse de données et chatbots intelligents pour optimiser vos processus.",
  },
];

// --- Projets ---

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    title: "EsportNews.fr",
    description:
      "Plateforme média dédiée à l'esport, proposant actualités, suivi des scores en direct et analyses approfondies de la scène compétitive.",
    tags: ["Média", "Esport", "Live Data"],
    image: "esportnews.png",
  },
  {
    title: "Application de livraison locale",
    description:
      "Application mobile connectant commerçants locaux et livreurs pour une livraison rapide en centre-ville.",
    tags: ["Mobile", "React Native", "API"],
    image: "",
  },
  {
    title: "Assistant IA pour cabinet comptable",
    description:
      "Chatbot intelligent capable de répondre aux questions courantes des clients et de pré-traiter les documents comptables.",
    tags: ["IA", "Python", "GPT"],
    image: "",
  },
];

// --- Témoignages ---

export interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Romain",
    content:
      "Maximilien a su être à l'écoute de mes besoins pour mon application. Nous avons fait plusieurs appels durant le mois, afin qu'il s'assure lui-même du bon avancement de l'application et il a su accompagner pas à pas. Je vous recommande fortement Maximilien pour votre futur projet!",
  },
  {
    name: "Junior",
    company: "APetitPrix",
    content:
      "service professionnel à l'écoute , top et livré dans les délais. Je recommande.",
  },
  {
    name: "René",
    content:
      "Je recommande Maxilien qui est très à l'écoute, très patient et surtout très professionnel. Une bonne manière de penser et de fonctionner pour une satisfaction client assurée. Vraiment agréablement surpris. Merci encore.",
  },
];

// --- Options budget (formulaire de contact) ---

export const budgetOptions = [
  { value: "", label: "Sélectionnez un budget" },
  { value: "< 5k", label: "Moins de 5 000 €" },
  { value: "5k-10k", label: "5 000 - 10 000 €" },
  { value: "10k-25k", label: "10 000 - 25 000 €" },
  { value: "25k-50k", label: "25 000 - 50 000 €" },
  { value: "> 50k", label: "Plus de 50 000 €" },
  { value: "unknown", label: "Je ne sais pas encore" },
];

// --- Infos de contact (placeholders) ---

export const contactInfo = {
  email: "contact@maximiliengodeau.com",
  linkedin: "#",
  github: "#",
  twitter: "#",
};

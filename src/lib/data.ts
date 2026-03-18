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
    title: "Application de rencontre",
    description:
      "Une application mobile repensant l'expérience de dating avec une interface moderne, intuitive et des algorithmes de connexion.",
    tags: ["Mobile", "React Native", "Dating"],
    image: "/rencontre.png",
  },
  {
    title: "Assistant pour coach sportif",
    description:
      "Une plateforme complète permettant à un coach sportif de suivre ses élèves, partager des plans d'entrainement et analyser leurs performances.",
    tags: ["Mobile", "SaaS", "Sport"],
    image: "/coach.png",
  },
  {
    title: "Traitement de factures",
    description:
      "Une application web interne pour automatiser la lecture, le traitement et la validation de factures grâce à l'intelligence artificielle.",
    tags: ["SaaS", "IA", "Automatisation"],
    image: "/factures.png",
  },
  {
    title: "Application Majordome",
    description:
      "Une application de service haut de gamme offrant des prestations de conciergerie privée, avec une interface très premium.",
    tags: ["Mobile", "Luxe", "UX Premium"],
    image: "/majordome.png",
  },
  {
    title: "EsportNews.fr",
    description:
      "Plateforme média dédiée à l'esport, proposant actualités, suivi des scores en direct et analyses approfondies de la scène compétitive.",
    tags: ["Média", "Esport", "Live Data"],
    image: "esportnews.png",
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
    name: "Humbert",
    content:
      "Merci à Maximilien pour l'accompagnement, il a été très réactif, à l'écoute.",
  },
  {
    name: "Satoschi",
    content: "RAS",
  },
  {
    name: "Marcus Cadasse",
    content: "Très pro",
  },
  {
    name: "apetitsprix",
    content:
      "Service professionnel à l'écoute, top et livré dans les délais. Je recommande.",
  },
  {
    name: "Thomas Le Berre",
    content: "Très bon développement d'une application complexe",
  },
  {
    name: "Mathieu",
    company: "mnmarketing",
    content: "Excellent prestataire je recommande à 100%",
  },
  {
    name: "Thomas Le Berre",
    content: "Très bon travail",
  },
  {
    name: "René",
    content:
      "Je recommande Maximilien qui est très à l'écoute, très patient et surtout très professionnel. Une bonne manière de penser et de fonctionner pour une satisfaction client assurée. Vraiment agréablement surpris. Merci encore.",
  },
  {
    name: "Romain",
    content:
      "Maximilien a su être à l'écoute de mes besoins pour mon application. Nous avons fait plusieurs appels durant le mois, afin qu'il s'assure lui-même du bon avancement de l'application et il a su accompagner pas à pas. Je vous recommande fortement Maximilien pour votre futur projet !",
  },
  {
    name: "reyvax",
    content:
      "Maximilien a bien répondu à mes attentes, il prend les choses à cœur, et est très agréable !",
  },
  {
    name: "Rudy Lemoine",
    content:
      "Très bon contact, je recommande :) a exactement sorti ce que je voulais ! Merci Maximilien",
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

// --- Choix développeur (demande de devis) ---

export interface DeveloperOption {
  value: string;
  name: string;
  description: string;
  image: string;
  /** Points clés affichés en puces (ex. dans la modale d'estimation) */
  bullets: string[];
}

export const developerOptions: DeveloperOption[] = [
  {
    value: "jules",
    name: "Jules",
    description: "Un peu plus cher · Très réactif · Fullstack · Très disponible",
    image: "/jules-v2.jpg",
    bullets: ["Prix ★★", "Disponibilité ★★", "Efficacité ★★"],
  },
  {
    value: "mathieu",
    name: "Mathieu",
    description: "Un peu moins cher · Fullstack · Un peu moins disponible",
    image: "/mathieu-v2.jpg",
    bullets: ["Prix ★", "Disponibilité ★", "Efficacité ★★"],
  },
];

// --- Infos de contact (placeholders) ---

export const contactInfo = {
  email: "maximilien.godeau.off@gmail.com",
  linkedin: "#",
  github: "#",
  twitter: "#",
  comeup: "https://comeup.com/fr/service/382688/vous-developper-une-application-mobile-saas-avec-ou-sans-intelligence-artificielle",
};

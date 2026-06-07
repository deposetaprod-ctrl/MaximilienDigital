import type { MetadataRoute } from "next";

const BASE_URL = "https://maximilien.digital";

const pages = [
  { path: "", priority: 1 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-30" },
  { path: "/blog", priority: 0.8 as const, changeFrequency: "weekly" as const, lastModified: "2026-03-28" },
  { path: "/blog/developper-application-sur-mesure-avec-claude", priority: 0.8 as const, changeFrequency: "monthly" as const, lastModified: "2026-06-07" },
  { path: "/blog/comment-creer-un-mvp", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
  { path: "/blog/mvp-gratuit-strategie-lancement", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-16" },
  { path: "/blog/creer-son-site-internet-3-etapes", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
  { path: "/blog/combien-coute-application-mobile-2026", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
  { path: "/blog/creer-mvp-rapidement-sans-developpeur", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-28" },
  { path: "/blog/pourquoi-experts-comptables-doivent-digitaliser", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-28" },
  { path: "/developpement-pwa", priority: 0.9 as const, changeFrequency: "weekly" as const, lastModified: "2026-06-06" },
  { path: "/logiciel-expert-comptable", priority: 0.9 as const, changeFrequency: "weekly" as const, lastModified: "2026-06-07" },
  { path: "/portail-client-expert-comptable", priority: 0.9 as const, changeFrequency: "weekly" as const, lastModified: "2026-06-07" },
  { path: "/financement", priority: 0.5 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-10" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}

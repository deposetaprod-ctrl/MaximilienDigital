import type { MetadataRoute } from "next";

const BASE_URL = "https://maximilien.digital";

const pages = [
  { path: "", priority: 1 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-30" },
  { path: "/saas", priority: 0.9 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
  { path: "/applications-mobiles", priority: 0.9 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
  { path: "/offre", priority: 1 as const, changeFrequency: "weekly" as const, lastModified: "2026-03-30" },
  { path: "/blog", priority: 0.8 as const, changeFrequency: "weekly" as const, lastModified: "2026-03-28" },
  { path: "/blog/comment-creer-un-mvp", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-15" },
  { path: "/blog/mvp-gratuit-strategie-lancement", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-16" },
  { path: "/blog/creer-son-site-internet-3-etapes", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-20" },
  { path: "/blog/combien-coute-application-mobile-2026", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-25" },
  { path: "/blog/creer-mvp-rapidement-sans-developpeur", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-28" },
  { path: "/blog/pourquoi-experts-comptables-doivent-digitaliser", priority: 0.7 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-28" },
  { path: "/financement", priority: 0.5 as const, changeFrequency: "monthly" as const, lastModified: "2026-03-10" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        fr: `${BASE_URL}${path}`,
        en: `${BASE_URL}${path}`,
        "x-default": `${BASE_URL}${path}`,
      },
    },
  }));
}

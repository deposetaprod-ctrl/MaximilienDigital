import type { MetadataRoute } from "next";

const BASE_URL = "https://maximilien.digital";

const pages = [
  { path: "", priority: 1 as const, changeFrequency: "monthly" as const },
  { path: "/saas", priority: 0.9 as const, changeFrequency: "monthly" as const },
  { path: "/applications-mobiles", priority: 0.9 as const, changeFrequency: "monthly" as const },
  { path: "/offre", priority: 1 as const, changeFrequency: "always" as const },
  { path: "/blog", priority: 0.8 as const, changeFrequency: "weekly" as const },
  { path: "/blog/comment-creer-un-mvp", priority: 0.7 as const, changeFrequency: "monthly" as const },
  { path: "/financement", priority: 0.5 as const, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
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

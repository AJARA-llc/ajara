import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ajara.co.jp";
  const now = new Date("2026-06-12");

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/aioru`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/aioru/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/aioru/blog/ai-search-growth`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/aioru/blog/structured-data-and-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/aioru/blog/eeat-and-ai-citation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hintl`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/hintl/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/hintl/blog/ai-coaching-science`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hintl/blog/cbt-and-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hintl/blog/career-decision-psychology`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/creative`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ajara.co.jp";
  const now = new Date("2026-06-12");
  const reskillingUpdated = new Date("2026-10-13");

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
    { url: `${base}/reskilling`, lastModified: reskillingUpdated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/reskilling/office-operations`, lastModified: reskillingUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reskilling/backoffice-improvement`, lastModified: reskillingUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reskilling/information-management`, lastModified: reskillingUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reskilling/generative-ai-practice`, lastModified: reskillingUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/news/hintl-launch`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/news/hintl-press-release`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/legal/tokushoho`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/subsidy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}

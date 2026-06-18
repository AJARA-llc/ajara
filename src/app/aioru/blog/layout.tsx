import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIO インサイト — AI検索最適化コラム | aioru by AJARA",
  description:
    "ChatGPT・Perplexity・Google AI Overview などAI検索最適化（AIO）に関する最新の調査・研究・実践知見。構造化データ・E-E-A-T・LLMO戦略をわかりやすく解説。",
  openGraph: {
    title: "AIO インサイト — AI検索最適化コラム | aioru by AJARA",
    description: "AIO（AI検索最適化）の実践知見。構造化データ・E-E-A-T・LLMO戦略を解説。",
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp/aioru/blog",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "AIO インサイト by AJARA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIO インサイト | aioru by AJARA",
    description: "AI検索最適化（AIO）の実践知見コラム。",
    images: ["/images/ogp.png"],
  },
};

const schemaCollectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "AIO インサイト — AI検索最適化コラム",
  "url": "https://ajara.co.jp/aioru/blog",
  "description": "ChatGPT・Perplexity・Google AI Overviewなど生成AI検索最適化（AIO）に関する調査・研究・実践知見をまとめたコラム集。",
  "publisher": { "@id": "https://ajara.co.jp/#organization" },
  "inLanguage": "ja",
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "AJARA", "item": "https://ajara.co.jp" },
    { "@type": "ListItem", "position": 2, "name": "AIO コンサルティング", "item": "https://ajara.co.jp/aioru" },
    { "@type": "ListItem", "position": 3, "name": "AIO インサイト", "item": "https://ajara.co.jp/aioru/blog" },
  ],
};

const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AIO インサイト 記事一覧",
  "url": "https://ajara.co.jp/aioru/blog",
  "numberOfItems": 3,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://ajara.co.jp/aioru/blog/ai-search-growth",
      "name": "生成AI検索の急成長——ChatGPT・Perplexity が変えた「検索」の定義",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "url": "https://ajara.co.jp/aioru/blog/structured-data-and-ai",
      "name": "構造化データとAI引用率の関係——Schema.org 実装がもたらす可視性の差",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "url": "https://ajara.co.jp/aioru/blog/eeat-and-ai-citation",
      "name": "E-E-A-T と AI引用率——Googleの品質評価基準が生成AI検索を支配する理由",
    },
  ],
};

export default function AioruBlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCollectionPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }} />
      {children}
    </>
  );
}

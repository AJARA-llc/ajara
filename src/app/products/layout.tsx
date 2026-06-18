import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロダクト一覧 — hintl・aioru・AEGIS OSS | AJARA",
  description:
    "合同会社AJARAが開発・運営するプロダクト。AIライフコーチング「hintl」・AIO診断ツール「aioru」・AIエージェントOSS「AEGIS」の3プロダクトを公開中。",
  openGraph: {
    title: "プロダクト一覧 | AJARA",
    description: "hintl（AIライフコーチング）・aioru（AIO診断）・AEGIS OSS（AIエージェント）の3プロダクト。",
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp/products",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "AJARA Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "プロダクト一覧 | AJARA",
    description: "hintl・aioru・AEGIS OSSの3プロダクトを公開中。",
    images: ["/images/ogp.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "name": "AJARA プロダクト一覧",
      "url": "https://ajara.co.jp/products",
      "numberOfItems": 3,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "hintl",
            "description": "AIライフコーチングサービス。キャリア・お金・人間関係・メンタルなど20+ジャンルに対応。月980円で専任AIアドバイザーが伴走。",
            "url": "https://hintl.jp",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "980", "priceCurrency": "JPY" },
            "author": { "@id": "https://ajara.co.jp/#organization" },
          },
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "aioru",
            "description": "AI検索最適化（AIO）診断ツール。URLを入力するだけで生成AI検索への最適化スコアを19項目で即診断。無料。",
            "url": "https://aioru.net",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
            "author": { "@id": "https://ajara.co.jp/#organization" },
          },
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareApplication",
            "name": "AEGIS OSS",
            "description": "マルチAIエージェント組織を構築するオープンソースフレームワーク。CEO・CTO・CFOなど役割を持ったエージェントが協調して複雑なタスクを実行。",
            "url": "https://github.com/ajara-llc",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
            "author": { "@id": "https://ajara.co.jp/#organization" },
          },
        },
      ],
    },
    {
      "@type": "WebPage",
      "name": "プロダクト一覧 | AJARA",
      "url": "https://ajara.co.jp/products",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AJARA", "item": "https://ajara.co.jp" },
          { "@type": "ListItem", "position": 2, "name": "プロダクト", "item": "https://ajara.co.jp/products" },
        ],
      },
    },
  ],
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

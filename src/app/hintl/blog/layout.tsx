import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hintl インサイト — エビデンス × AIコーチングコラム | AJARA",
  description:
    "認知科学・行動心理学・CBTなどのエビデンスとAIコーチングの融合を解説するコラム集。キャリア・メンタル・意思決定をテーマに、hintlが実践するエビデンスベースのアプローチを紹介。",
  openGraph: {
    title: "hintl インサイト — エビデンス × AIコーチングコラム",
    description: "認知科学・行動心理学・CBTのエビデンスとAIコーチングの融合を解説するコラム集。",
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp/hintl/blog",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "hintl インサイト by AJARA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "hintl インサイト | AJARA",
    description: "エビデンス × AIコーチングの実践知見コラム。",
    images: ["/images/ogp.png"],
  },
};

const schemaCollectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "hintl インサイト — エビデンス × AIコーチングコラム",
  "url": "https://ajara.co.jp/hintl/blog",
  "description": "認知科学・行動心理学・CBTなどのエビデンスとAIコーチングの融合を解説するコラム集。",
  "publisher": { "@id": "https://ajara.co.jp/#organization" },
  "inLanguage": "ja",
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "AJARA", "item": "https://ajara.co.jp" },
    { "@type": "ListItem", "position": 2, "name": "hintl", "item": "https://ajara.co.jp/hintl" },
    { "@type": "ListItem", "position": 3, "name": "hintl インサイト", "item": "https://ajara.co.jp/hintl/blog" },
  ],
};

const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "hintl インサイト 記事一覧",
  "url": "https://ajara.co.jp/hintl/blog",
  "numberOfItems": 3,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://ajara.co.jp/hintl/blog/ai-coaching-science",
      "name": "AIコーチングの科学——エビデンスが変える「アドバイス」の定義",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "url": "https://ajara.co.jp/hintl/blog/cbt-and-ai",
      "name": "認知行動療法（CBT）とAI——行動変容を加速するエビデンスの使い方",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "url": "https://ajara.co.jp/hintl/blog/career-decision-psychology",
      "name": "キャリア転換の心理学——不確実な選択で後悔しないための意思決定フレームワーク",
    },
  ],
};

export default function HintlBlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCollectionPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItemList) }} />
      {children}
    </>
  );
}

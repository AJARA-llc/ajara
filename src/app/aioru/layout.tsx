import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIO コンサルティング（aioru）| AI検索最適化 — AJARA",
  description:
    "ChatGPT・Perplexity・Gemini で引用される企業へ。AJARA の AIO（AI検索最適化）コンサルティング。診断レポート¥150,000〜・戦略策定¥300,000〜・継続支援¥500,000〜/月。",
  openGraph: {
    title: "AIO コンサルティング（aioru）| AJARA",
    description: "生成AI検索での引用・推薦を最大化するAIO診断・戦略策定・継続支援。診断レポート¥150,000〜。",
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp/aioru",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "aioru AIO コンサルティング" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIO コンサルティング | aioru by AJARA",
    description: "ChatGPT・Perplexity・Gemini で引用される企業へ。AIO診断から継続支援まで。",
    images: ["/images/ogp.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ajara.co.jp/#organization",
      "name": "合同会社AJARA",
      "alternateName": "AJARA",
      "url": "https://ajara.co.jp",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@ajara.co.jp",
        "availableLanguage": "Japanese",
        "areaServed": "JP",
      },
    },
    {
      "@type": "ProfessionalService",
      "name": "AJARA AIO コンサルティング",
      "description": "ChatGPT・Perplexity・Google AI Overview など生成AI検索での引用・推薦を最大化するAIO（AI Index Optimization）コンサルティング。診断レポート・改善戦略策定・継続支援の3段階で提供。",
      "url": "https://ajara.co.jp/aioru",
      "provider": { "@id": "https://ajara.co.jp/#organization" },
      "serviceType": "AI検索最適化（AIO）コンサルティング",
      "areaServed": { "@type": "Country", "name": "JP" },
      "availableLanguage": "Japanese",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AIO コンサルティング サービス一覧",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO 診断レポート",
              "description": "現状のAIOスコアを19指標で測定し、改善機会マップとROI試算を含む診断レポートを48時間以内に納品",
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "150000",
              "priceCurrency": "JPY",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO 改善戦略策定",
              "description": "診断結果を基にした3ヶ月の改善ロードマップ・優先施策・KPI設計",
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "300000",
              "priceCurrency": "JPY",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO 継続支援",
              "description": "月次測定・施策実行支援・レポーティングによる継続的なAIO改善サポート",
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "500000",
              "priceCurrency": "JPY",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "name": "AIO コンサルティング | aioru by AJARA",
      "url": "https://ajara.co.jp/aioru",
      "description": "ChatGPT・Perplexity・Gemini で引用される企業へ。AJARA が AIO（AI検索最適化）診断から戦略策定・継続支援まで伴走します。",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AJARA", "item": "https://ajara.co.jp" },
          { "@type": "ListItem", "position": 2, "name": "AIO コンサルティング", "item": "https://ajara.co.jp/aioru" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "AIO（AI検索最適化）とは何ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AIO（AI Index Optimization）は、ChatGPT・Perplexity・Google AI Overview などの生成AI検索で自社サイトが「引用・推薦される」よう最適化する手法です。従来のSEOとは異なる評価軸を持ち、構造化データ・E-E-A-Tシグナル・回答ファースト型コンテンツが評価されます。",
          },
        },
        {
          "@type": "Question",
          "name": "SEO対策をしていればAIOは不要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "いいえ。SEO対策済みのサイトでも、構造化データ・E-E-A-Tシグナル・コンテンツの回答性が不足している場合、AI検索では引用されないケースが大半です。aioru の無料診断で現状スコアを確認できます。",
          },
        },
        {
          "@type": "Question",
          "name": "aioru はどのように使いますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "URL を入力するだけで、19項目にわたるAIOスコアを即座に診断できます。技術実装・コンテンツ品質・パフォーマンスの3カテゴリで採点し、改善ポイントをわかりやすく表示します。診断は無料です。",
          },
        },
        {
          "@type": "Question",
          "name": "診断スコアが低い場合はどうすればよいですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "診断レポートにスコアの根拠と改善の方向性が含まれます。専門的な改善支援が必要な場合は、AJARA の AIO コンサルティングサービス（診断レポート・改善戦略策定・継続支援）をご活用ください。",
          },
        },
        {
          "@type": "Question",
          "name": "費用はかかりますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "aioru の基本診断ツールは無料です。AJARA による有償コンサルティング（AIO診断レポート¥150,000〜、改善戦略策定¥300,000〜、継続支援¥500,000〜/月）は別途ご相談ください。",
          },
        },
      ],
    },
  ],
};

export default function AioruLayout({ children }: { children: React.ReactNode }) {
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

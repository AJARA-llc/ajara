import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "法人向けAI研修・リスキリング — 生成AI活用の実践研修と導入伴走 | AJARA",
  description:
    "中小企業向けの生成AI活用研修と導入伴走。汎用講座で終わらせず、御社の業務・ツールの中で成果が測れる形までAIを定着させます。各種リスキリング助成金の対象要件を満たす設計。無料診断から。",
  openGraph: {
    title: "法人向けAI研修・リスキリング | AJARA",
    description:
      "中小企業向けの生成AI活用研修と導入伴走。現場で使えるまで支援。各種リスキリング助成金の対象要件を満たす設計。",
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp/reskilling",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "AJARA 法人向けAI研修・リスキリング" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "法人向けAI研修・リスキリング | AJARA",
    description: "中小企業向けの生成AI活用研修と導入伴走。現場で使えるまで支援します。",
    images: ["/images/ogp.png"],
  },
};

// 静的・信頼済みの構造化データ（ユーザー入力なし）。creative/hintl/aioru の各 layout と同一パターン。
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "AJARA 法人向けAI研修・リスキリング",
      "description":
        "中小企業向けに、生成AI活用の実践研修とAI導入の現場伴走を提供。汎用的なプロンプト講座で終わらせず、顧客の実業務・実ツールの中でワークフローを構築し、成果が測れる形まで定着を支援。各種リスキリング助成金の対象要件を満たす設計。",
      "url": "https://ajara.co.jp/reskilling",
      "provider": { "@id": "https://ajara.co.jp/#organization" },
      "serviceType": "法人向けAI研修・リスキリング・AI導入コンサルティング",
      "areaServed": { "@type": "Country", "name": "JP" },
      "availableLanguage": "Japanese",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI研修・リスキリング 料金表",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "AI活用 無料診断（60分）" },
            "priceSpecification": { "@type": "PriceSpecification", "price": "0", "priceCurrency": "JPY" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "パイロット研修（半日・単一部門）" },
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": "180000", "priceCurrency": "JPY" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "実践ハンズオン研修（1日）" },
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": "350000", "priceCurrency": "JPY" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "AI導入伴走コンサル（月額顧問・3ヶ月〜）" },
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": "200000", "priceCurrency": "JPY" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "業種特化カリキュラム開発（一括）" },
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": "300000", "priceCurrency": "JPY" },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "name": "法人向けAI研修・リスキリング — 生成AI活用の実践研修と導入伴走 | AJARA",
      "url": "https://ajara.co.jp/reskilling",
      "description":
        "中小企業向けの生成AI活用研修と導入伴走。各種リスキリング助成金の対象要件を満たす設計。",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AJARA", "item": "https://ajara.co.jp" },
          { "@type": "ListItem", "position": 2, "name": "法人向けAI研修・リスキリング", "item": "https://ajara.co.jp/reskilling" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "研修は助成金の対象になりますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "当社の研修は、人材開発支援助成金（事業展開等リスキリング支援コース等）や東京都DXリスキリング助成金などの対象要件を満たすよう設計しています。人材開発支援助成金の場合、OFF-JTの実訓練時間が10時間以上であることが基本要件です。ただし助成金を受給されるのは研修を受ける企業（雇用主）であり、受給の可否は各企業の申請内容と労働局等の審査により決まります。当社が支給を保証するものではありません。研修費は御社が全額をお支払いいただくことが前提で、当社からの割戻し等は一切行いません。申請手続きは御社の顧問社労士または労働局・財団の窓口をご利用いただき、当社は要件を満たす研修設計と申請用資料のご提供を担当します。",
          },
        },
        {
          "@type": "Question",
          "name": "どのくらいの規模から相談できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "単一部門・数名からご相談いただけます。いきなり全社導入ではなく、成功指標を1つ決めた半日のパイロット研修から始め、効果を確認してから広げる進め方を推奨しています。",
          },
        },
        {
          "@type": "Question",
          "name": "汎用的な『ChatGPTの使い方』講座とは何が違いますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "座学で終わらせず、御社の実際の業務・実際のツールの中でワークフローを構築し、実際に使われるまで隔週で伴走する点が異なります。特定ツールに依存しない設計のため、値上げや仕様変更にも強い体制になります。",
          },
        },
      ],
    },
  ],
};

export default function ReskillingLayout({ children }: { children: React.ReactNode }) {
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

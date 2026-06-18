import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI映像制作 — ブランドCM・ショート動画 | AJARA Creative",
  description:
    "生成AIによるブランドCM・ショート動画制作。素材ゼロから最短1週間、¥50,000〜。Kling AI・Runway・Soraを駆使した圧倒的なビジュアル品質を実現。",
  openGraph: {
    title: "AI映像制作 — ブランドCM・ショート動画 | AJARA Creative",
    description: "生成AIによるブランドCM・ショート動画制作。素材ゼロから最短1週間、¥50,000〜。",
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp/creative",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "AJARA AI映像制作" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI映像制作 | AJARA Creative",
    description: "生成AIによるブランドCM・ショート動画制作。素材ゼロから最短1週間。",
    images: ["/images/ogp.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "AJARA AI映像制作",
      "description": "Kling AI・Runway・Soraなど生成AIを活用したブランドCM・ショート動画制作サービス。素材ゼロから最短1週間で高品質な映像を制作。",
      "url": "https://ajara.co.jp/creative",
      "provider": { "@id": "https://ajara.co.jp/#organization" },
      "serviceType": "AI映像制作",
      "areaServed": { "@type": "Country", "name": "JP" },
      "availableLanguage": "Japanese",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI映像制作 料金表",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "ブランドCM 15秒" },
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": "80000", "priceCurrency": "JPY" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "ブランドCM 30秒" },
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": "150000", "priceCurrency": "JPY" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "ブランドCM 60秒" },
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": "250000", "priceCurrency": "JPY" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "ショート動画 15〜30秒" },
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": "50000", "priceCurrency": "JPY" },
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "ショート動画 月3本パック" },
            "priceSpecification": { "@type": "PriceSpecification", "minPrice": "120000", "priceCurrency": "JPY" },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "name": "AI映像制作 — ブランドCM・ショート動画 | AJARA Creative",
      "url": "https://ajara.co.jp/creative",
      "description": "生成AIによるブランドCM・ショート動画制作。素材ゼロから最短1週間、¥50,000〜。",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AJARA", "item": "https://ajara.co.jp" },
          { "@type": "ListItem", "position": 2, "name": "AI映像制作", "item": "https://ajara.co.jp/creative" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "素材がなくても映像制作できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい。AIで映像・画像を生成するため、素材ゼロから制作可能です。ブランドの世界観・ターゲット・目的をヒアリングした上で、AIが映像・画像を生成します。",
          },
        },
        {
          "@type": "Question",
          "name": "納期はどのくらいかかりますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ショート動画は最短1週間〜、ブランドCM（15秒）は2〜3週間〜、ブランドCM（30〜60秒）は3〜5週間〜が目安です。",
          },
        },
        {
          "@type": "Question",
          "name": "修正回数の制限はありますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "基本2回まで修正対応します。追加修正は別途ご相談ください。",
          },
        },
      ],
    },
  ],
};

export default function CreativeLayout({ children }: { children: React.ReactNode }) {
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

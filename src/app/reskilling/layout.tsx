import type { Metadata } from "next";
import { COURSES } from "@/data/reskillingCourses";

export const metadata: Metadata = {
  title: "総務・事務職向け 法人研修・リスキリング（人材開発支援助成金対応）— 12時間 eラーニング4コース | AJARA",
  description:
    "総務・事務職向けの法人研修。社内業務管理・バックオフィス業務改善・情報管理・生成AI活用実務の4コース（各12時間・全12章・eラーニング）。人材開発支援助成金の人材育成支援コース／事業展開等リスキリング支援コースの対象要件を満たす設計。LMSで進捗管理、修了証発行。無料相談から。",
  openGraph: {
    title: "総務・事務職向け 法人研修・リスキリング | AJARA",
    description:
      "社内業務管理・バックオフィス改善・情報管理・生成AI活用の4コース。各12時間のeラーニング。人材開発支援助成金の対象要件を満たす設計。",
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp/reskilling",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp-reskilling.jpg", width: 1200, height: 630, alt: "AJARA 総務・事務職向け 法人研修・リスキリング" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "総務・事務職向け 法人研修・リスキリング | AJARA",
    description: "社内業務管理・バックオフィス改善・情報管理・生成AI活用の4コース。各12時間のeラーニング。人材開発支援助成金の対象要件を満たす設計。",
    images: ["/images/ogp-reskilling.jpg"],
  },
};

// 静的・信頼済みの構造化データ（ユーザー入力なし）。creative/hintl/aioru の各 layout と同一パターン。
// コース一覧・価格は src/data/reskillingCourses.ts を単一の情報源とする。
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "AJARA 総務・事務職向け 法人研修・リスキリング",
      "description":
        "総務・事務職向けに、社内業務管理・バックオフィス業務改善・情報管理・生成AI活用実務の4コース（各12時間・eラーニング）を提供。人材開発支援助成金（人材育成支援コース／事業展開等リスキリング支援コース）の対象要件を満たす設計。LMSで学習進捗を管理し、修了証を発行。",
      "url": "https://ajara.co.jp/reskilling",
      "provider": { "@id": "https://ajara.co.jp/#organization" },
      "serviceType": "法人向け研修・リスキリング（総務・事務職）",
      "areaServed": { "@type": "Country", "name": "JP" },
      "availableLanguage": "Japanese",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "法人研修・リスキリング 料金表",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "無料相談（オンライン・60分）" },
            "priceSpecification": { "@type": "PriceSpecification", "price": "0", "priceCurrency": "JPY" },
          },
          ...COURSES.map((c) => ({
            "@type": "Offer",
            "url": `https://ajara.co.jp/reskilling/${c.slug}`,
            "itemOffered": {
              "@type": "Course",
              "name": c.title,
              "description": c.short,
              "provider": { "@id": "https://ajara.co.jp/#organization" },
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "online",
                "courseWorkload": "PT12H",
              },
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": String(c.priceValue),
              "priceCurrency": "JPY",
              "valueAddedTaxIncluded": true,
            },
          })),
        ],
      },
    },
    {
      "@type": "WebPage",
      "name": "総務・事務職向け 法人研修・リスキリング（人材開発支援助成金対応）| AJARA",
      "url": "https://ajara.co.jp/reskilling",
      "description":
        "社内業務管理・バックオフィス業務改善・情報管理・生成AI活用実務の4コース。各12時間のeラーニング。人材開発支援助成金の対象要件を満たす設計。",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AJARA", "item": "https://ajara.co.jp" },
          { "@type": "ListItem", "position": 2, "name": "法人研修・リスキリング", "item": "https://ajara.co.jp/reskilling" },
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
            "text": "当社の研修は、人材開発支援助成金の人材育成支援コース（社内業務管理・バックオフィス業務改善・情報管理の3研修）および事業展開等リスキリング支援コース（生成AI活用実務研修）、東京都DXリスキリング助成金などの対象要件を満たすよう設計しています。人材開発支援助成金の場合、OFF-JTの実訓練時間が10時間以上であることが基本要件です。ただし助成金を受給されるのは研修を受ける企業（雇用主）であり、受給の可否は各企業の申請内容と労働局等の審査により決まります。当社が支給を保証するものではありません。研修費は御社が全額をお支払いいただくことが前提で、当社からの割戻し等は一切行いません。申請手続きは御社の顧問社労士または労働局・財団の窓口をご利用いただき、当社は要件を満たす研修設計と申請用資料のご提供を担当します。",
          },
        },
        {
          "@type": "Question",
          "name": "どのコースから受ければよいですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "社内業務の抜け漏れや属人化が課題なら社内業務管理研修、業務量の削減や標準化ならバックオフィス業務改善研修、個人情報や機密情報の扱いに不安があれば情報管理業務研修、生成AIを事務に活かしたいなら生成AI活用実務研修が出発点です。無料相談で現状をうかがい、一緒に決めます。",
          },
        },
        {
          "@type": "Question",
          "name": "どのくらいの規模から相談できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "単一部門・数名からご相談いただけます。いきなり全社導入ではなく、まず1部門でコースを受講し、効果を確認してから対象を広げる進め方を推奨しています。",
          },
        },
        {
          "@type": "Question",
          "name": "受講方式と期間は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "各コース12時間（全12章・各1時間）のeラーニングです。学習日時・学習時間・進捗はLMSで管理し、修了後に修了証を発行します。契約期間はいずれのコースも6か月です。講師派遣・オンライン（Zoom）での実施にも対応します。",
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

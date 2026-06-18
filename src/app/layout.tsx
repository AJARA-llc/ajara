import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ajara.co.jp"),
  title: "合同会社AJARA | AIで、ビジネスの次の一手を共創する",
  description:
    "合同会社AJARAは、AI検索最適化（AIO）コンサルティング・AIライフコーチング（hintl）・AI映像制作の3事業を展開。ChatGPT・Perplexity・Geminiで引用される企業へ。",
  alternates: {
    canonical: "https://ajara.co.jp",
  },
  icons: {
    icon: [{ url: "/images/logo-full.png", type: "image/png" }],
    shortcut: "/images/logo-full.png",
    apple: "/images/logo-full.png",
  },
  openGraph: {
    title: "合同会社AJARA | AIで、ビジネスの次の一手を共創する",
    description:
      "AI検索最適化（AIO）コンサルティング・AIライフコーチング・AI映像制作。アイデアをAIとテクノロジーで事業へ。",
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "合同会社AJARA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "合同会社AJARA | AIで、ビジネスの次の一手を共創する",
    description: "AI検索最適化（AIO）コンサルティング・AIライフコーチング・AI映像制作。",
    images: ["/images/ogp.png"],
  },
};

// ── 個別スクリプトに分割（@graph 非対応パーサー対策）────────────────────────

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ajara.co.jp/#organization",
  "name": "合同会社AJARA",
  "legalName": "合同会社AJARA",
  "alternateName": "AJARA",
  "url": "https://ajara.co.jp",
  "logo": {
    "@type": "ImageObject",
    "url": "https://ajara.co.jp/images/logo-full.webp",
    "width": 800,
    "height": 200,
  },
  "description": "AI検索最適化（AIO）コンサルティング・AIライフコーチング（hintl）・AI映像制作の3事業を展開する合同会社。ChatGPT・Perplexity・Google AI Overviewなど生成AI検索で引用される企業づくりを支援。",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "JP",
    "addressLocality": "日本",
  },
  "areaServed": { "@type": "Country", "name": "JP" },
  "knowsAbout": [
    "AI検索最適化（AIO）",
    "LLMO（Large Language Model Optimization）",
    "生成AI検索",
    "構造化データ・スキーママークアップ",
    "E-E-A-T",
    "AIライフコーチング",
    "AI映像制作",
  ],
  "sameAs": ["https://aioru.net", "https://hintl.jp"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@ajara.co.jp",
    "availableLanguage": "Japanese",
    "areaServed": "JP",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AJARAサービス一覧",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AIO コンサルティング（aioru）",
          "url": "https://ajara.co.jp/aioru",
          "description": "ChatGPT・Perplexity・Google AI Overviewなど生成AI検索での引用・推薦を最大化するAIOコンサルティング",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AIライフコーチング（hintl）",
          "url": "https://ajara.co.jp/hintl",
          "description": "月980円で専任AIアドバイザーが伴走するキャリア・お金・メンタルなど20+ジャンルのライフコーチングサービス",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI映像制作",
          "url": "https://ajara.co.jp/creative",
          "description": "生成AIによるブランドCM・ショート動画制作。素材ゼロから最短1週間で高品質な映像を制作",
        },
      },
    ],
  },
};

const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ajara.co.jp/#author",
  "name": "AJARA編集部",
  "url": "https://ajara.co.jp",
  "worksFor": { "@id": "https://ajara.co.jp/#organization" },
  "knowsAbout": [
    "AI検索最適化（AIO）",
    "LLMO",
    "生成AI検索",
    "構造化データ",
    "E-E-A-T",
    "ChatGPT",
    "Perplexity",
    "Google AI Overview",
  ],
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ajara.co.jp/#website",
  "url": "https://ajara.co.jp",
  "name": "合同会社AJARA",
  "publisher": { "@id": "https://ajara.co.jp/#organization" },
  "inLanguage": "ja",
};

const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ajara.co.jp/#webpage",
  "url": "https://ajara.co.jp",
  "name": "合同会社AJARA | AIで、ビジネスの次の一手を共創する",
  "description": "AI検索最適化（AIO）コンサルティング・AIライフコーチング（hintl）・AI映像制作の3事業を展開する合同会社AJARA。",
  "isPartOf": { "@id": "https://ajara.co.jp/#website" },
  "about": { "@id": "https://ajara.co.jp/#organization" },
  "inLanguage": "ja",
  "dateModified": "2026-06-12",
};

const schemaBlog = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "AIO インサイト",
  "url": "https://ajara.co.jp/aioru/blog",
  "publisher": { "@id": "https://ajara.co.jp/#organization" },
  "inLanguage": "ja",
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "生成AI検索の急成長——ChatGPT・Perplexity が変えた「検索」の定義",
      "url": "https://ajara.co.jp/aioru/blog/ai-search-growth",
      "datePublished": "2025-06-01",
      "dateModified": "2026-06-12",
      "author": { "@id": "https://ajara.co.jp/#author" },
      "publisher": { "@id": "https://ajara.co.jp/#organization" },
      "inLanguage": "ja",
    },
    {
      "@type": "BlogPosting",
      "headline": "構造化データとAI引用率の関係——Schema.org 実装がもたらす可視性の差",
      "url": "https://ajara.co.jp/aioru/blog/structured-data-and-ai",
      "datePublished": "2025-05-01",
      "dateModified": "2026-06-12",
      "author": { "@id": "https://ajara.co.jp/#author" },
      "publisher": { "@id": "https://ajara.co.jp/#organization" },
      "inLanguage": "ja",
    },
    {
      "@type": "BlogPosting",
      "headline": "E-E-A-T と AI引用率——Googleの品質評価基準が生成AI検索を支配する理由",
      "url": "https://ajara.co.jp/aioru/blog/eeat-and-ai-citation",
      "datePublished": "2025-04-01",
      "dateModified": "2026-06-12",
      "author": { "@id": "https://ajara.co.jp/#author" },
      "publisher": { "@id": "https://ajara.co.jp/#organization" },
      "inLanguage": "ja",
    },
  ],
};

const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "AIに引用されるサイトを作る3ステップ",
  "description": "ChatGPT・Perplexity・Google AI OverviewなどのAI検索で引用されるようになるための具体的な手順。",
  "author": { "@id": "https://ajara.co.jp/#author" },
  "publisher": { "@id": "https://ajara.co.jp/#organization" },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "AIOスコアを無料診断する",
      "text": "aioru.net でURLを入力。19項目のAIOスコアを無料で即時診断し、技術実装・コンテンツ品質・パフォーマンスの改善ポイントを把握します。",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "構造化データを実装する",
      "text": "Organization・FAQPage・BreadcrumbList・BlogPosting などのSchema.orgスキーマを実装。AI検索エンジンが「信頼できる情報源」と判断するシグナルを強化します。",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "コンテンツをAI最適化する",
      "text": "回答ファースト型の構造・E-E-A-Tシグナル・llms.txt を整備。AI検索で引用・推薦されるコンテンツへ改善し、継続的に測定・改善を繰り返します。",
    },
  ],
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "合同会社AJARAはどのような会社ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "合同会社AJARAは、AI検索最適化（AIO）コンサルティング・AIライフコーチング（hintl）・AI映像制作の3事業を展開する会社です。ChatGPT・Perplexity・Google AI Overviewなど生成AI検索で引用される企業づくりを支援しています。",
      },
    },
    {
      "@type": "Question",
      "name": "AJARAのサービスはどれから始めればよいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "まずは aioru（https://aioru.net）の無料AIOスコア診断をお試しください。URLを入力するだけで19項目のAIO対応度を即時診断でき、自社サイトの改善ポイントが明確になります。AI検索での引用率向上を目指す場合はAIOコンサルティング、個人の人生相談にはhintl、映像制作にはAI映像制作サービスをご利用ください。",
      },
    },
    {
      "@type": "Question",
      "name": "AJARAへの相談・問い合わせはどうすればよいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "contact@ajara.co.jp までメールにてお問い合わせください。AIO診断・AI映像制作・hintlの法人利用など、どのサービスに関してもお気軽にご相談いただけます。",
      },
    },
    {
      "@type": "Question",
      "name": "AIに引用されるサイトにするにはどうすればよいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AIO（AI Index Optimization）対策として、①llms.txt の設置、②Organization・FAQPage・BreadcrumbList などの構造化データ実装、③E-E-A-Tシグナルの強化、④回答ファースト型コンテンツ設計の4要素が核心です。AJARA の aioru で無料診断した後、必要に応じてAIOコンサルティングで対策を進めることをお勧めします。",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased bg-navy-dark text-snow">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBlog) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
        {children}
      </body>
    </html>
  );
}

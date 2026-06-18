import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hintl | AIライフコーチング — エビデンスベースの人生相談",
  description:
    "月980円で専任AIアドバイザーが伴走するライフコーチング。キャリア・お金・人間関係・メンタルなど20+ジャンルに対応。3メッセージ無料体験あり。",
  openGraph: {
    title: "hintl | AIライフコーチング",
    description: "月980円で専任AIアドバイザーが伴走。エビデンスベースのライフコーチング。3メッセージ無料。",
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp/hintl",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "hintl AIライフコーチング" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "hintl | AIライフコーチング",
    description: "月980円で専任AIアドバイザーが伴走するライフコーチング。20+ジャンル対応。",
    images: ["/images/ogp.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "hintl",
      "description": "AI × エビデンスのパーソナルライフコーチングプラットフォーム。キャリア・お金・人間関係・メンタル・睡眠・美容など20以上のジャンルに対応。",
      "url": "https://hintl.jp",
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "980",
        "priceCurrency": "JPY",
        "description": "¥980/月/ジャンル。AIアドバイザー 1 名指名込み。",
      },
      "author": { "@id": "https://ajara.co.jp/#organization" },
      "brand": { "@type": "Brand", "name": "hintl" },
    },
    {
      "@type": "WebPage",
      "name": "hintl | AIライフコーチング — エビデンスベースの人生相談",
      "url": "https://ajara.co.jp/hintl",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AJARA", "item": "https://ajara.co.jp" },
          { "@type": "ListItem", "position": 2, "name": "hintl", "item": "https://ajara.co.jp/hintl" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "hintl はどんなサービスですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "キャリア・お金・人間関係・メンタル・睡眠・美容など20以上のジャンルで、AI × エビデンスに基づく人生コーチングを提供するプラットフォームです。「どう生きるか」を一緒に考えるパーソナルアドバイザーが、いつでも伴走します。",
          },
        },
        {
          "@type": "Question",
          "name": "無料で試せますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "はい。登録後、各アドバイザーに対して 3 メッセージまで無料でやり取りできます。使い心地を確かめてから有料プランへの移行をご検討ください。",
          },
        },
        {
          "@type": "Question",
          "name": "料金はどのくらいですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "¥980/月/ジャンルでご利用いただけます。AIアドバイザー 1 名まで指名込みのシンプルな料金体系です。複数ジャンルを利用する場合はジャンルごとの契約となります。",
          },
        },
        {
          "@type": "Question",
          "name": "医療相談や法律相談もできますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "hintl は医療・法律の専門的な診断や代替を行うサービスではなく、日々の意思決定や行動変容をサポートするライフコーチングサービスです。医療・法律に関わる深刻なお悩みは、必ず専門家にご相談ください。",
          },
        },
        {
          "@type": "Question",
          "name": "AJARA との関係は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "hintl は AJARA が開発・運営するプロダクトです。AIエンジンの設計・エビデンスデータベースの構築・プラットフォーム開発まで、AJARA が一貫して手がけています。",
          },
        },
      ],
    },
  ],
};

export default function HintlLayout({ children }: { children: React.ReactNode }) {
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hintl | エビデンスで選ぶ — 研究に基づく無料診断メディア",
  description:
    "健康・美容などの選択を『広告ではなく公開研究』から比較。論文数と研究間の一貫性からエビデンスを100点満点で可視化し、1分の無料診断で研究報告のある選択肢を確認できます。利用は無料。",
  openGraph: {
    title: "hintl | エビデンスで選ぶ意思決定エンジン",
    description:
      "広告ではなく公開研究から比較。エビデンスを100点満点で可視化し、1分の無料診断で研究報告のある選択肢を確認できます。利用は無料。",
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp/hintl",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "hintl エビデンスで選ぶ意思決定エンジン" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "hintl | エビデンスで選ぶ意思決定エンジン",
    description: "広告ではなく公開研究から比較。エビデンスを100点満点で可視化する無料診断メディア。",
    images: ["/images/ogp.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "hintl",
      "description": "健康・美容などの選択を公開研究から比較できるエビデンスベースの意思決定エンジン。論文数と研究間の一貫性からエビデンスを100点満点で可視化し、1分の無料診断で研究報告のある選択肢を確認できる。睡眠・メンタル・栄養・脳・集中・美容・仕事など複数領域に対応。",
      "url": "https://hintl.net",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "JPY",
        "description": "診断・情報閲覧は無料。",
      },
      "author": { "@id": "https://ajara.co.jp/#organization" },
      "brand": { "@type": "Brand", "name": "hintl" },
    },
    {
      "@type": "WebPage",
      "name": "hintl | エビデンスで選ぶ — 研究に基づく無料診断メディア",
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
            "text": "健康・美容などの選択を「広告ではなく公開研究」から比較できる、エビデンスベースの意思決定エンジンです。論文数と研究間の一貫性からエビデンスを100点満点で可視化し、1分の無料診断で研究報告のある選択肢を確認できます。",
          },
        },
        {
          "@type": "Question",
          "name": "料金はかかりますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "いいえ。診断も、エビデンス情報の閲覧も無料でご利用いただけます。",
          },
        },
        {
          "@type": "Question",
          "name": "エビデンススコアはどう決まりますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "各テーマについて公開されている研究を集め、論文の数と、研究どうしの結論の一貫性をもとに100点満点で算出します。あわせて信頼度も表示し、どれだけ確からしいかが分かるようにしています。",
          },
        },
        {
          "@type": "Question",
          "name": "医療相談や診断はできますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "hintl は研究に基づく情報を提供するサービスであり、医療行為・診断・治療や、特定の効果を保証するものではありません。健康上の判断は必ず専門家にご相談ください。",
          },
        },
        {
          "@type": "Question",
          "name": "AJARA との関係は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "hintl は合同会社AJARA が開発・運営するプロダクトです。エビデンスデータベースの構築からプラットフォーム開発まで、AJARA が一貫して手がけています。",
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

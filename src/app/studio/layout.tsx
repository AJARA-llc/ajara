import type { Metadata } from "next";

const title = "開発伴走 — アプリ・ゲーム・AI開発の相談と伴走 | AJARA Studio";
const description =
  "アプリ・ゲーム・AI開発を、もっと身近に。初心者から個人開発者・事業者まで、月額¥6,980〜の相談・学習支援と、完成まで伴走するプロジェクト支援。30分の無料オンライン相談受付中。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://ajara.co.jp/studio" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ja_JP",
    url: "https://ajara.co.jp/studio",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "AJARA Studio 開発伴走" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "開発伴走 | AJARA Studio",
    description: "アプリ・ゲーム・AI開発の相談と伴走。30分の無料オンライン相談受付中。",
    images: ["/images/ogp.png"],
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}

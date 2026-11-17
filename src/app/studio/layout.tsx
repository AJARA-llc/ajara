import type { Metadata } from "next";
import { StudioFooter, StudioHeader } from "@/components/studio/StudioChrome";

const title = "AJARA Studio｜AIアプリ開発スクール・アプリ開発コーチング";
const description =
  "AIでアプリを作れるようになりたい人も、作りたいアイデアがある人も。AJARA Studio は、AIアプリ開発の学習と開発コーチングを提供するオンラインスタジオです。30分の無料相談を受付中。";

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
    siteName: "AJARA Studio",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630, alt: "AJARA Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "AIアプリ開発の学習と開発コーチング。30分の無料相談を受付中。",
    images: ["/images/ogp.png"],
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-studio-cream text-studio-ink font-sans">
      <StudioHeader />
      <main>{children}</main>
      <StudioFooter />
    </div>
  );
}

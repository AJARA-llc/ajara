import type { Metadata } from "next";
import { StudioFooter, StudioHeader } from "@/components/studio/StudioChrome";
import { studioShare } from "@/components/studio/share";

const title = "AJARA Studio｜AIアプリ開発スクール・アプリ開発コーチング";
const description =
  "AIでアプリを作れるようになりたい人も、作りたいアイデアがある人も。AJARA Studio は、AIアプリ開発の学習と開発コーチングを提供するオンラインスタジオです。30分の無料相談を受付中。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://ajara.co.jp/studio" },
  icons: {
    icon: [
      { url: "/images/studio/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/studio/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/studio/apple-touch-icon.png",
  },
  ...studioShare("/studio", title, description, "top"),
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-studio-bg text-studio-ink font-sans">
      <StudioHeader />
      <main>{children}</main>
      <StudioFooter />
    </div>
  );
}

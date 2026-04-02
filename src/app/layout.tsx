import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "合同会社AJARA | AIで、ビジネスの次の一手を共創する",
  description:
    "合同会社AJARAは、AIエージェントシステム開発・AI戦略コンサルティング・ラピッドプロトタイピングを通じて、クライアントの課題解決を支援する会社です。",
  icons: {
    icon: [{ url: "/images/logo-full.png", type: "image/png" }],
    shortcut: "/images/logo-full.png",
    apple: "/images/logo-full.png",
  },
  openGraph: {
    title: "合同会社AJARA | AIで、ビジネスの次の一手を共創する",
    description:
      "仮説検証型のアプローチとマルチAIエージェント技術で、貴社のDX・AI活用を戦略から実装まで支援します。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased bg-navy-dark text-snow">{children}</body>
    </html>
  );
}

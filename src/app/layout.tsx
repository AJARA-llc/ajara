import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社AJARA | 戯が誠になるわいな — Where Play Becomes Product",
  description:
    "株式会社AJARAは、遊び心や発想から生まれたアイデアをAIとテクノロジーによって実験し、社会に価値あるプロダクトへと育てていく会社です。",
  openGraph: {
    title: "株式会社AJARA | 戯が誠になるわいな",
    description: "Where Play Becomes Product — AIとテクノロジーで戯れから価値を生む",
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

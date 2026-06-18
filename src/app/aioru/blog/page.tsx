"use client";

import Image from "next/image";
import Link from "next/link";
import AioruNavigation from "@/components/AioruNavigation";

const ARTICLES = [
  {
    slug: "ai-search-growth",
    date: "2025年6月",
    tag: "市場動向",
    title: "生成AI検索の急成長——ChatGPT・Perplexity が変えた「検索」の定義",
    excerpt:
      "ChatGPT は公開からわずか2ヶ月でMAU 1億人を突破。Perplexity は月間クエリ数が1年で10倍超に成長。従来の SEO 戦略だけでは、AI検索時代に生き残れない理由をデータで解説します。",
    readTime: "5分",
  },
  {
    slug: "structured-data-and-ai",
    date: "2025年5月",
    tag: "技術解説",
    title: "構造化データとAI引用率の関係——Schema.org 実装がもたらす可視性の差",
    excerpt:
      "Google・Microsoft・Yahoo・Yandex が共同設立した Schema.org の構造化データは、AI検索エンジンが「信頼できる情報源」を判断する核心的シグナルです。実装の有無でAI引用率に大きな差が生まれます。",
    readTime: "6分",
  },
  {
    slug: "eeat-and-ai-citation",
    date: "2025年4月",
    tag: "SEO × AIO",
    title: "E-E-A-T と AI引用率——Googleの品質評価基準が生成AI検索を支配する理由",
    excerpt:
      "2022年12月、Google は検索品質評価ガイドラインに「Experience（経験）」を追加し E-E-A-T に拡張。この変更は SEO だけでなく、ChatGPT・Gemini など生成AIが引用先を選ぶ基準とも深く連動しています。",
    readTime: "7分",
  },
];

const BRAND = "linear-gradient(135deg, #5BA4F5, #6C5CE7)";

export default function BlogPage() {
  return (
    <div style={{ background: "#ffffff", color: "#1B2340", minHeight: "100vh", fontFamily: '-apple-system,"Inter","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif' }}>
      <AioruNavigation />

      <div style={{ paddingTop: "100px", paddingBottom: "80px" }} className="px-6">
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A97C0", marginBottom: "12px" }}>
              AJARA COLUMN
            </p>
            <h1 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: "#1B2340", letterSpacing: "-0.5px", marginBottom: "12px" }}>
              AIO インサイト
            </h1>
            <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.7 }}>
              AI検索最適化に関する最新の調査・研究をもとに、実践的な知見をお届けします。
            </p>
          </div>

          {/* Articles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/aioru/blog/${a.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#F4F5FB",
                    border: "1px solid rgba(91,164,245,0.12)",
                    borderRadius: "20px",
                    padding: "32px 36px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(91,164,245,0.35)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(91,164,245,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(91,164,245,0.12)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: "999px",
                        background: "linear-gradient(135deg, rgba(91,164,245,0.15), rgba(108,92,231,0.15))",
                        color: "#6C5CE7",
                      }}
                    >
                      {a.tag}
                    </span>
                    <span style={{ fontSize: "12px", color: "#8A97C0" }}>{a.date}</span>
                    <span style={{ fontSize: "12px", color: "#8A97C0" }}>· 読了 {a.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#1B2340", marginBottom: "10px", lineHeight: 1.45, letterSpacing: "-0.2px" }}>
                    {a.title}
                  </h2>
                  <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.8 }}>
                    {a.excerpt}
                  </p>
                  <p style={{ fontSize: "13px", marginTop: "16px", color: "#5BA4F5", fontWeight: 500 }}>
                    続きを読む →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "64px",
              borderRadius: "24px",
              padding: "48px 40px",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(91,164,245,0.1), rgba(108,92,231,0.1))",
              border: "1px solid rgba(91,164,245,0.2)",
            }}
          >
            <Image
              src="/images/aioru-logo-vertical.webp"
              alt="aioru"
              width={881}
              height={679}
              style={{ height: "80px", width: "auto", objectFit: "contain", margin: "0 auto 20px" }}
            />
            <p style={{ fontSize: "15px", color: "#4A5568", marginBottom: "24px", lineHeight: 1.7 }}>
              あなたのサイトの AIO スコアを今すぐ確認。<br />
              URL を入力するだけ、19項目・無料で診断できます。
            </p>
            <a
              href="https://aioru.net"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "13px 36px",
                borderRadius: "999px",
                background: BRAND,
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(91,164,245,0.4)",
              }}
            >
              aioru.net で無料診断する
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

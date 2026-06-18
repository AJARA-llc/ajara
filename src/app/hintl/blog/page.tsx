"use client";

import Image from "next/image";
import Link from "next/link";
import HintlNavigation from "@/components/HintlNavigation";

const ARTICLES = [
  {
    slug: "ai-coaching-science",
    date: "2025年6月",
    tag: "科学 × コーチング",
    title: "AIコーチングの科学——エビデンスが変える「アドバイス」の定義",
    excerpt:
      "人間のコーチングはなぜ効くのか。心理学・認知科学の研究が示すコーチング効果のメカニズムと、それを AI に統合することで何が変わるのかを解説します。",
    readTime: "5分",
  },
  {
    slug: "cbt-and-ai",
    date: "2025年5月",
    tag: "心理学的エビデンス",
    title: "認知行動療法（CBT）とAI——行動変容を加速するエビデンスの使い方",
    excerpt:
      "CBT は数百件の臨床試験で有効性が証明された心理療法です。その原則をデジタル × AI コーチングにどう応用するか、実証研究をもとに詳説します。",
    readTime: "6分",
  },
  {
    slug: "career-decision-psychology",
    date: "2025年4月",
    tag: "キャリア × 意思決定",
    title: "キャリア転換の心理学——不確実な選択で後悔しないための意思決定フレームワーク",
    excerpt:
      "転職・独立・キャリアチェンジ。心理学が明らかにした意思決定の落とし穴と、AI アドバイザーが提供できる客観的視点を行動経済学の知見とともに解説します。",
    readTime: "7分",
  },
];

const BRAND = "linear-gradient(135deg, #0066ff, #00c4b4)";
const BRAND_SOFT = "linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,196,180,0.1))";

export default function HintlBlogPage() {
  return (
    <div style={{ background: "#ffffff", color: "#1B2340", minHeight: "100vh", fontFamily: '-apple-system,"Inter","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif' }}>
      <HintlNavigation />

      <div style={{ paddingTop: "100px", paddingBottom: "80px" }} className="px-6">
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A97C0", marginBottom: "12px" }}>
              AJARA COLUMN
            </p>
            <h1 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: "#1B2340", letterSpacing: "-0.5px", marginBottom: "12px" }}>
              hintl インサイト
            </h1>
            <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.7 }}>
              AI × エビデンスに基づくライフコーチングの研究・知見をお届けします。
            </p>
          </div>

          {/* Articles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/hintl/blog/${a.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#F4F5FB",
                    border: "1px solid rgba(0,102,255,0.12)",
                    borderRadius: "20px",
                    padding: "32px 36px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,102,255,0.3)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,102,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,102,255,0.12)";
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
                        background: BRAND_SOFT,
                        color: "#0066ff",
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
                  <p style={{ fontSize: "13px", marginTop: "16px", color: "#0066ff", fontWeight: 500 }}>
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
              background: BRAND_SOFT,
              border: "1px solid rgba(0,102,255,0.2)",
            }}
          >
            <Image
              src="/images/hintl-logo.webp"
              alt="hintl"
              width={631}
              height={797}
              style={{ height: "80px", width: "auto", objectFit: "contain", margin: "0 auto 20px" }}
            />
            <p style={{ fontSize: "15px", color: "#4A5568", marginBottom: "24px", lineHeight: 1.7 }}>
              AI × エビデンスのコーチングを今すぐ体験。<br />
              6 つの質問で、あなたに合ったアドバイザーを無料で提案します。
            </p>
            <a
              href="https://hintl.jp"
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
                boxShadow: "0 4px 20px rgba(0,102,255,0.35)",
              }}
            >
              hintl.jp で無料で試す
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

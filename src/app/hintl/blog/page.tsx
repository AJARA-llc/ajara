"use client";

import Image from "next/image";
import Link from "next/link";
import HintlNavigation from "@/components/HintlNavigation";

// Restyled 2026-09-03 to match the hintl.net design system (DESIGN.md —
// /Users/takuyahirata/Workspace/AJARA/hintl/DESIGN.md: "a bright,
// evidence-lit clinic desk"). Flat teal (no cyan/blue gradients), ink-navy
// type, white cards on hairline borders — mirrors the "Blog Insights" card
// pattern already shipped on /hintl (src/app/hintl/page.tsx). Content, slugs,
// and JSON-LD (layout.tsx) are unchanged — this is a visual re-skin only.

const TEAL = "#0d7377";
const TEAL_TINT = "#e6f4f5";
const TEAL_TINT_BORDER = "#9fd6d8";
const INK = "#0d1b3e";
const SLATE_600 = "#475569";
const SLATE_500 = "#64748b";
const BORDER = "#e4e7ec";
const HERO_WASH = "#f1f8f8";
const TEAL_SHADOW = "0 8px 24px -8px rgba(13,115,119,0.35)";

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

export default function HintlBlogPage() {
  const font = '"Noto Sans JP","Hiragino Kaku Gothic ProN",sans-serif';

  return (
    <div style={{ background: "#ffffff", color: INK, minHeight: "100vh", fontFamily: font }}>
      <HintlNavigation />

      {/* ── Header ───────────────────────────────────────────── */}
      <section
        style={{ textAlign: "center", backgroundImage: `linear-gradient(to bottom, ${HERO_WASH}, #ffffff)` }}
        className="px-5 sm:px-6 pt-24 sm:pt-28 pb-10 sm:pb-14"
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", color: TEAL, marginBottom: "16px" }}>
            AJARA COLUMN
          </p>
          <h1 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: INK, letterSpacing: "-0.01em", marginBottom: "14px" }}>
            hintl インサイト
          </h1>
          <p style={{ fontSize: "15px", color: SLATE_600, lineHeight: 1.8 }}>
            AI × エビデンスに基づくライフコーチングの研究・知見をお届けします。
          </p>
        </div>
      </section>

      <div className="px-5 sm:px-6 pb-16 sm:pb-24">
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          {/* Articles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/hintl/blog/${a.slug}`} style={{ textDecoration: "none" }}>
                <div
                  className="p-5 sm:px-7 sm:py-6"
                  style={{
                    background: "#ffffff",
                    border: `1px solid ${BORDER}`,
                    borderRadius: "16px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = TEAL_TINT_BORDER;
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px -8px rgba(15,23,42,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = BORDER;
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1" style={{ marginBottom: "14px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: "999px",
                        background: TEAL_TINT,
                        color: TEAL,
                      }}
                    >
                      {a.tag}
                    </span>
                    <span style={{ fontSize: "12px", color: SLATE_500 }}>{a.date}</span>
                    <span style={{ fontSize: "12px", color: SLATE_500 }}>· 読了 {a.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: "18px", fontWeight: 700, color: INK, marginBottom: "10px", lineHeight: 1.45, letterSpacing: "-0.01em" }}>
                    {a.title}
                  </h2>
                  <p style={{ fontSize: "14px", color: SLATE_600, lineHeight: 1.8 }}>
                    {a.excerpt}
                  </p>
                  <p style={{ fontSize: "13px", marginTop: "16px", color: TEAL, fontWeight: 600 }}>
                    続きを読む →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div
            className="p-8 sm:px-12 sm:py-14"
            style={{
              marginTop: "56px",
              borderRadius: "16px",
              textAlign: "center",
              background: HERO_WASH,
              border: `1px solid ${TEAL_TINT_BORDER}`,
            }}
          >
            <Image
              src="/images/hintl-logo.webp"
              alt="hintl"
              width={631}
              height={797}
              style={{ height: "64px", width: "auto", objectFit: "contain", margin: "0 auto 20px" }}
            />
            <p style={{ fontSize: "15px", color: SLATE_600, marginBottom: "24px", lineHeight: 1.8 }}>
              AI × エビデンスのコーチングを今すぐ体験。<br />
              6 つの質問で、あなたに合ったアドバイザーを無料で提案します。
            </p>
            <a
              href="https://hintl.net"
              target="_blank"
              rel="noreferrer"
              className="hover:bg-teal-dark hover:-translate-y-0.5 active:scale-95 transition"
              style={{
                display: "inline-block",
                padding: "13px 36px",
                borderRadius: "999px",
                background: TEAL,
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: TEAL_SHADOW,
              }}
            >
              hintl.net で無料で試す
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

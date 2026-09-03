"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HintlNavigation from "@/components/HintlNavigation";

// Restyled 2026-09-03 to match the hintl.net design system (DESIGN.md —
// /Users/takuyahirata/Workspace/AJARA/hintl/DESIGN.md: "a bright,
// evidence-lit clinic desk"). Flat teal (no cyan gradients), ink-navy type,
// white cards on hairline borders, one hero kicker instead of per-section
// eyebrows. Content, links, sections and JSON-LD (layout.tsx) are unchanged —
// this is a visual re-skin only.

const TEAL = "#0d7377";
const TEAL_TINT = "#e6f4f5";
const TEAL_TINT_BORDER = "#9fd6d8";
const INK = "#0d1b3e";
const SLATE_600 = "#475569";
const SLATE_500 = "#64748b";
const BORDER = "#e4e7ec";
const SURFACE = "#f7f8fa";
const HERO_WASH = "#f1f8f8";
const TEAL_SHADOW = "0 8px 24px -8px rgba(13,115,119,0.35)";
const CARD_SHADOW = "0 1px 2px rgba(15,23,42,0.05)";

const FEATURES = [
  {
    title: "全記事を3層構造で構成",
    desc: "「結論」→「どんな研究？」→「専門的には」の順で、専門用語を知らなくても読み通せる構成にしています。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <rect x="4" y="4" width="16" height="4" rx="1"/><rect x="4" y="10" width="16" height="4" rx="1"/><rect x="4" y="16" width="16" height="4" rx="1"/>
      </svg>
    ),
  },
  {
    title: "専門用語のワンタップ解説",
    desc: "RCT・メタ分析・プラセボなど、研究用語にはタップで表示されるやさしい説明を付けています。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 3.5"/><circle cx="12" cy="16.5" r="0.6" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: "「効果あり/なし」ではなく「どれくらい確からしいか」",
    desc: "研究の裏付けの強さをスコアで表示し、裏付けが弱い場合も正直にそのまま表示します。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    title: "無料のセルフチェック診断",
    desc: "睡眠・メンタル・栄養など6ジャンルで、自分のタイプと関連する研究情報がわかる無料診断です（医療上の診断ではありません）。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
  {
    title: "研究情報にもとづく「AIに相談する」機能",
    desc: "自分のタイプに合わせてAIが話し方を変え、サイト内に整理された研究情報だけを根拠に答えます。登録なしでも1回無料で試せます（医療上の診断は行いません）。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M4 4h16v12H8l-4 4V4z"/>
      </svg>
    ),
  },
  {
    title: "AI検索時代に対応した情報設計",
    desc: "研究の要点・スコア・引用元を構造化データとして整理しており、生成AIの検索・要約でも参照されやすい設計です。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
  },
];

const GENRES = [
  "睡眠", "メンタル", "栄養", "脳・集中", "仕事", "美容",
];

const STEPS = [
  {
    title: "気になる領域を選ぶ",
    desc: "睡眠・メンタル・栄養など、いま知りたいテーマを選びます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "1分の無料診断を受ける",
    desc: "簡単な質問に答えると、あなたに関連する選択肢が絞り込まれます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: "エビデンスで確かめる",
    desc: "各選択肢のエビデンススコアと研究の裏付けを見て、自分に合うものを選べます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "hintl はどんなサービスですか？",
    a: "健康・美容などの選択を「広告ではなく公開研究」から比較できる、エビデンスベースの意思決定エンジンです。全記事を「結論→どんな研究？→専門的には」の3層構造で構成し、研究用語にはタップで表示されるやさしい説明を付けています。1分の無料診断で研究報告のある選択肢を確認できます。2026年9月1日に正式リリースしました。",
  },
  {
    q: "料金はかかりますか？",
    a: "いいえ。診断も、エビデンス情報の閲覧も無料でご利用いただけます。",
  },
  {
    q: "エビデンススコアはどう決まりますか？",
    a: "各テーマについて公開されている研究を集め、論文の数と、研究どうしの結論の一貫性をもとに100点満点で算出します。あわせて信頼度も表示し、どれだけ確からしいかが分かるようにしています。",
  },
  {
    q: "医療相談や診断はできますか？",
    a: "hintl は研究に基づく情報を提供するサービスであり、医療行為・診断・治療や、特定の効果を保証するものではありません。健康上の判断は必ず専門家にご相談ください。",
  },
  {
    q: "AJARA との関係は？",
    a: "hintl は合同会社AJARA が開発・運営するプロダクトです。エビデンスデータベースの構築からプラットフォーム開発まで、AJARA が一貫して手がけています。",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "#ffffff",
        border: `1px solid ${open ? TEAL_TINT_BORDER : BORDER}`,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "20px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 500, color: INK }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            flexShrink: 0,
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: `1px solid ${TEAL_TINT_BORDER}`,
            background: open ? TEAL_TINT : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: TEAL,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                padding: "0 24px 20px",
                fontSize: "14px",
                color: SLATE_600,
                lineHeight: 1.8,
                borderTop: `1px solid ${BORDER}`,
                paddingTop: "16px",
                marginTop: "0",
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HintlPage() {
  const font = '"Noto Sans JP","Hiragino Kaku Gothic ProN",sans-serif';

  return (
    <div style={{ background: "#ffffff", color: INK, minHeight: "100vh", fontFamily: font }}>
      <HintlNavigation />

      {/* ── Launch Announcement Band ────────────────────────────── */}
      <div
        style={{
          textAlign: "center",
          background: TEAL_TINT,
          borderBottom: `1px solid ${TEAL_TINT_BORDER}`,
        }}
        className="mt-14 sm:mt-16 px-5 py-2.5 sm:px-6"
      >
        {/* Mobile: one compact line, one link */}
        <p className="sm:hidden" style={{ fontSize: "13px", color: INK, margin: 0, lineHeight: 1.6 }}>
          <span
            style={{
              display: "inline-block",
              padding: "2px 10px",
              borderRadius: "999px",
              background: TEAL,
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "0.05em",
              marginRight: "8px",
              verticalAlign: "middle",
            }}
          >
            NEWS
          </span>
          9/1 正式リリース。プレスリリース配信中
          <Link href="/news/hintl-launch" style={{ marginLeft: "8px", color: TEAL, textDecoration: "underline", textUnderlineOffset: "3px" }}>
            詳しく見る →
          </Link>
        </p>

        {/* sm+: both full sentences */}
        <p className="hidden sm:block" style={{ fontSize: "13px", color: INK, margin: 0, lineHeight: 1.6 }}>
          <span
            style={{
              display: "inline-block",
              padding: "2px 10px",
              borderRadius: "999px",
              background: TEAL,
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "0.05em",
              marginRight: "8px",
              verticalAlign: "middle",
            }}
          >
            NEWS
          </span>
          hintl は <strong>2026年9月1日</strong> に正式リリースしました。
          <Link href="/news/hintl-launch" style={{ marginLeft: "8px", color: TEAL, textDecoration: "underline", textUnderlineOffset: "3px" }}>
            詳しく見る →
          </Link>
        </p>
        <p className="hidden sm:block" style={{ fontSize: "12px", color: INK, margin: "6px 0 0", lineHeight: 1.6, opacity: 0.85 }}>
          「答えるAIから、エビデンスで伴走するAIへ。hintl誕生」プレスリリースを配信しました（自社配信のプレスリリース）。
          <Link href="/news/hintl-press-release" style={{ marginLeft: "8px", color: TEAL, textDecoration: "underline", textUnderlineOffset: "3px" }}>
            詳しく見る →
          </Link>
        </p>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `linear-gradient(to bottom, ${HERO_WASH}, #ffffff)`,
        }}
        className="px-5 sm:px-6 pt-12 sm:pt-[72px] pb-16 sm:pb-[100px]"
      >
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", color: TEAL, marginBottom: "20px" }}>
            AJARA Product — エビデンスで選ぶ
          </p>

          <div style={{ marginBottom: "28px", display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/hintl-logo.webp"
              alt="hintl"
              width={631}
              height={797}
              style={{ height: "100px", width: "auto", objectFit: "contain" }}
              priority
            />
          </div>

          <h1
            style={{
              fontSize: "clamp(30px,7vw,54px)",
              fontWeight: 900,
              color: INK,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
              textWrap: "balance",
            }}
          >
            来た時より、
            <br />
            少しだけいい人生を。
          </h1>

          <p
            style={{
              fontSize: "clamp(15px,4vw,18px)",
              color: SLATE_600,
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 32px",
              textWrap: "pretty",
            }}
          >
            健康・美容の情報を、広告ではなく公開研究から比較。
            エビデンスを100点満点で可視化する意思決定エンジン。
          </p>

          {/* Evidence score — 表示イメージ */}
          <div
            style={{
              maxWidth: "380px",
              margin: "0 auto 36px",
              background: "#ffffff",
              border: `1px solid ${BORDER}`,
              borderRadius: "16px",
              padding: "20px 22px",
              boxShadow: CARD_SHADOW,
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
              <span style={{ fontSize: "12px", color: SLATE_500 }}>エビデンススコア（表示イメージ）</span>
              <span style={{ fontSize: "11px", color: TEAL, fontWeight: 600 }}>信頼度：高</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "12px" }}>
              <span style={{ fontSize: "34px", fontWeight: 800, color: TEAL, lineHeight: 1 }}>82</span>
              <span style={{ fontSize: "14px", color: SLATE_500 }}>/ 100</span>
            </div>
            <div style={{ height: "8px", borderRadius: "999px", background: TEAL_TINT, overflow: "hidden" }}>
              <div style={{ width: "82%", height: "100%", background: TEAL, borderRadius: "999px" }} />
            </div>
            <p style={{ fontSize: "11px", color: SLATE_500, marginTop: "10px", lineHeight: 1.6 }}>
              論文数と研究間の一貫性から算出。数値は例示です。
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-[60px]"
          >
            <a
              href="https://hintl.net"
              target="_blank"
              rel="noreferrer"
              className="hover:bg-teal-dark hover:-translate-y-0.5 active:scale-95 transition w-full sm:w-auto text-center"
              style={{
                padding: "14px 36px",
                borderRadius: "999px",
                background: TEAL,
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: TEAL_SHADOW,
                display: "inline-block",
              }}
            >
              無料で診断する
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto text-center rounded-full border sm:border-0 no-underline sm:underline px-9 py-3.5 sm:p-0 text-[15px] sm:text-sm font-semibold sm:font-normal"
              style={{
                color: SLATE_600,
                borderColor: BORDER,
                textUnderlineOffset: "4px",
              }}
            >
              サービス詳細を見る →
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "48px" }}>
            {[
              { value: "100点", label: "エビデンススコア" },
              { value: "1分", label: "無料診断" },
              { value: "¥0", label: "利用料金" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <p className="text-2xl sm:text-[28px]" style={{ fontWeight: 800, color: INK, marginBottom: "4px" }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: "12px", color: SLATE_500 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────── */}
      <section id="features" style={{ background: SURFACE }} className="px-5 sm:px-6 py-14 sm:py-20">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 900, color: INK, letterSpacing: "-0.01em", marginBottom: "12px" }}>
              hintl が選ばれる理由
            </h2>
            <p style={{ fontSize: "15px", color: SLATE_600 }}>宣伝や体験談ではなく、公開研究の裏付けで選べるように。</p>
          </div>

          <div className="grid gap-4 sm:gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="p-5 sm:p-7"
                style={{
                  background: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "16px",
                }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  style={{
                    borderRadius: "12px",
                    background: TEAL_TINT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    color: TEAL,
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: INK, marginBottom: "8px" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", color: SLATE_600, lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Genres ────────────────────────────────────────────── */}
      <section id="genres" className="px-5 sm:px-6 py-14 sm:py-20">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 900, color: INK, letterSpacing: "-0.01em", marginBottom: "12px" }}>
            気になる領域から、研究で確かめる。
          </h2>
          <p style={{ fontSize: "15px", color: SLATE_600, marginBottom: "40px" }}>
            暮らしに関わる複数の領域で、研究報告のある選択肢を確認できます。
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {GENRES.map((genre) => (
              <span
                key={genre}
                style={{
                  fontSize: "14px",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  border: `1px solid ${BORDER}`,
                  color: SLATE_600,
                  background: "#ffffff",
                }}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section id="how" style={{ background: SURFACE }} className="px-5 sm:px-6 py-14 sm:py-20">
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 900, color: INK, letterSpacing: "-0.01em" }}>
              3 ステップではじめる
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="p-5 sm:p-7"
                style={{
                  background: "#ffffff",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "16px",
                  textAlign: "center",
                }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  style={{
                    borderRadius: "12px",
                    background: TEAL_TINT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    color: TEAL,
                  }}
                >
                  {step.icon}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: INK, marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "15px", color: SLATE_600, lineHeight: 1.8 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AJARA Column ──────────────────────────────────────── */}
      <section id="column" className="px-5 sm:px-6 py-14 sm:py-20">
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, color: INK, textAlign: "center", marginBottom: "8px", letterSpacing: "-0.01em" }}>
            なぜ今、「エビデンスで選ぶ」ことが必要なのか
          </h2>
          <p style={{ fontSize: "12px", color: SLATE_500, textAlign: "center", marginBottom: "40px" }}>
            AJARA編集部
          </p>

          <div
            className="p-5 sm:px-11 sm:py-10"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              fontSize: "15px",
              lineHeight: 1.9,
              color: SLATE_600,
            }}
          >
            <p>
              サプリ、睡眠法、スキンケア——健康や美容の選択肢は溢れていますが、そのほとんどは
              広告や体験談として語られます。「本当に効くのか」を確かめようとしても、根拠にたどり着くのは簡単ではありません。
            </p>
            <p>
              問題は情報の量ではなく、<strong style={{ color: INK }}>「何が、どれだけ確からしいか」</strong>が見えないことです。
              宣伝の強さと、研究の裏付けの強さは、必ずしも一致しません。
            </p>
            <p>
              hintl は、公開されている研究をもとに、選択肢のエビデンスを
              <strong style={{ color: INK }}>100点満点のスコア</strong>で可視化します。論文の数と、研究どうしの結論の一貫性から算出し、
              信頼度もあわせて提示。広告ではなく研究から、落ち着いて選べる状態をつくります。
            </p>
            <p>
              合同会社AJARA が開発・運営する <strong style={{ color: INK }}>hintl</strong> は、
              1分の無料診断から研究報告のある選択肢を確認できる意思決定エンジンです。利用はすべて無料です。
            </p>
            <div style={{ paddingTop: "16px", borderTop: `1px solid ${BORDER}`, display: "flex", justifyContent: "center" }}>
              <a
                href="https://hintl.net"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-teal-dark transition-colors"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 22px",
                  borderRadius: "999px",
                  background: TEAL,
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px -4px rgba(13,115,119,0.4)",
                }}
              >
                hintl でエビデンスを見る
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Insights ─────────────────────────────────────── */}
      <section id="blog" className="px-5 sm:px-6 pb-14 sm:pb-20">
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: INK, textAlign: "center", marginBottom: "36px", letterSpacing: "-0.01em" }}>
            エビデンスとAIについて学ぶ
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                slug: "ai-coaching-science",
                tag: "科学 × コーチング",
                date: "2025年6月",
                readTime: "5分",
                title: "AIコーチングの科学——エビデンスが変える「アドバイス」の定義",
                excerpt: "人間のコーチングはなぜ効くのか。心理学・認知科学のエビデンスをAIに統合することで何が変わるのかを解説します。",
              },
              {
                slug: "cbt-and-ai",
                tag: "心理学的エビデンス",
                date: "2025年5月",
                readTime: "6分",
                title: "認知行動療法（CBT）とAI——行動変容を加速するエビデンスの使い方",
                excerpt: "CBT は数百件の臨床試験で有効性が証明された心理療法です。その原則を AI コーチングにどう応用するかを詳説します。",
              },
              {
                slug: "career-decision-psychology",
                tag: "キャリア × 意思決定",
                date: "2025年4月",
                readTime: "7分",
                title: "キャリア転換の心理学——不確実な選択で後悔しないための意思決定フレームワーク",
                excerpt: "転職・独立・キャリアチェンジ。心理学が明らかにした意思決定の落とし穴と、AI アドバイザーが提供できる客観的視点を解説します。",
              },
            ].map((a) => (
              <Link
                key={a.slug}
                href={`/hintl/blog/${a.slug}`}
                style={{ textDecoration: "none" }}
              >
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
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
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
                    <span style={{ fontSize: "13px", color: SLATE_500 }}>{a.date}</span>
                    <span style={{ fontSize: "13px", color: SLATE_500 }}>· 読了 {a.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: INK, marginBottom: "8px", lineHeight: 1.45, letterSpacing: "-0.01em" }}>
                    {a.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: SLATE_600, lineHeight: 1.7 }}>{a.excerpt}</p>
                  <p style={{ fontSize: "13px", marginTop: "12px", color: TEAL, fontWeight: 500 }}>続きを読む →</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <Link href="/hintl/blog" style={{ fontSize: "14px", color: SLATE_600, textDecoration: "underline", textUnderlineOffset: "4px" }}>
              インサイト一覧を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section id="faq" className="px-5 sm:px-6 py-14 sm:py-20">
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 900, color: INK, letterSpacing: "-0.01em" }}>
              よくある質問
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="px-5 sm:px-6 pb-14 sm:pb-20">
        <div
          className="p-8 sm:px-12 sm:py-14"
          style={{
            maxWidth: "680px",
            margin: "0 auto",
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
            style={{ height: "72px", width: "auto", objectFit: "contain", margin: "0 auto 20px" }}
          />
          <h2 style={{ fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: INK, letterSpacing: "-0.01em", marginBottom: "12px" }}>
            まず、1分の無料診断から。
          </h2>
          <p style={{ fontSize: "14px", color: SLATE_600, lineHeight: 1.7, marginBottom: "32px" }}>
            気になる領域を選んで質問に答えるだけ。<br />
            研究報告のある選択肢を、無料で確認できます。
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }} className="sm:flex-row sm:justify-center">
            <a
              href="https://hintl.net"
              target="_blank"
              rel="noreferrer"
              className="hover:bg-teal-dark hover:-translate-y-0.5 active:scale-95 transition"
              style={{
                display: "inline-block",
                padding: "13px 32px",
                borderRadius: "999px",
                background: TEAL,
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                boxShadow: TEAL_SHADOW,
              }}
            >
              hintl でいますぐ試す
            </a>
            <a
              href="mailto:contact@ajara.co.jp"
              className="hover:border-slate-300 transition-colors"
              style={{
                display: "inline-block",
                padding: "13px 32px",
                borderRadius: "999px",
                border: "1px solid " + BORDER,
                background: "#ffffff",
                color: SLATE_600,
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              法人のご相談 →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer
        className="px-5 sm:px-6 py-7"
        style={{
          textAlign: "center",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <p style={{ fontSize: "12px", color: SLATE_500 }}>
          hintl — by{" "}
          <Link href="https://ajara.co.jp" style={{ color: TEAL, textDecoration: "underline", textUnderlineOffset: "3px" }}>
            AJARA
          </Link>
        </p>
      </footer>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HintlNavigation from "@/components/HintlNavigation";

// Restyled 2026-09-03 to match the hintl.net design system (DESIGN.md —
// /Users/takuyahirata/Workspace/AJARA/hintl/DESIGN.md: "a bright,
// evidence-lit clinic desk"). Flat teal (no cyan/blue gradients), ink-navy
// headings, article body set to hintl.net's own reading typography (17px /
// line-height 2.0 / 24px paragraph gap) with the key-sentence highlighter
// wash reserved for a few evidence figures. Content, references, JSON-LD and
// metadata are unchanged — this is a visual re-skin only.

const TEAL = "#0d7377";
const TEAL_TINT = "#e6f4f5";
const TEAL_TINT_BORDER = "#9fd6d8";
const INK = "#0d1b3e";
const SLATE_600 = "#475569";
const SLATE_500 = "#64748b";
const BORDER = "#e4e7ec";
const HERO_WASH = "#f1f8f8";
const TEAL_SHADOW = "0 8px 24px -8px rgba(13,115,119,0.35)";
const HIGHLIGHT = "rgba(255,196,32,0.32)";

const h2Style: React.CSSProperties = { fontSize: "20px", fontWeight: 700, color: INK, letterSpacing: "-0.01em", marginBottom: "16px", marginTop: "48px" };
const bodyStyle: React.CSSProperties = { fontSize: "17px", color: INK, lineHeight: 2, marginBottom: "24px" };

export const metadata: Metadata = {
  title: "認知行動療法（CBT）とAI——行動変容を加速するエビデンスの使い方 | hintl インサイト",
  description: "認知行動療法（CBT）のエビデンスをAIコーチングに応用することで行動変容を加速する方法。思考の歪みの特定から行動実験まで、AIがサポートするCBTプロセス。",
  openGraph: {
    title: "認知行動療法（CBT）とAI——行動変容を加速するエビデンスの使い方",
    description: "CBTのエビデンスをAIコーチングに応用。思考の歪みの特定から行動変容まで、AIがサポートする方法。",
    type: "article",
    locale: "ja_JP",
    url: "https://ajara.co.jp/hintl/blog/cbt-and-ai",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "CBT と AI | hintl インサイト", images: ["/images/ogp.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "認知行動療法（CBT）とAI——行動変容を加速するエビデンスの使い方",
  "description": "認知行動療法（CBT）のエビデンスをAIコーチングに応用することで行動変容を加速する方法。思考の歪みの特定から行動実験まで、AIがサポートするCBTプロセス。",
  "url": "https://ajara.co.jp/hintl/blog/cbt-and-ai",
  "datePublished": "2025-05-01",
  "dateModified": "2026-06-12",
  "inLanguage": "ja",
  "author": { "@type": "Organization", "name": "AJARA編集部", "url": "https://ajara.co.jp" },
  "publisher": { "@id": "https://ajara.co.jp/#organization" },
  "keywords": ["認知行動療法", "CBT", "AI", "行動変容", "心理学", "ライフコーチング"],
  "articleSection": "心理学的エビデンス",
  "isPartOf": { "@type": "Blog", "name": "hintl インサイト", "url": "https://ajara.co.jp/hintl/blog" },
};

export default function ArticleCbtAndAi() {
  const font = '"Noto Sans JP","Hiragino Kaku Gothic ProN",sans-serif';

  return (
    <div style={{ background: "#ffffff", color: INK, minHeight: "100vh", fontFamily: font }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <HintlNavigation />

      <article className="px-5 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-24">
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>

          {/* Back */}
          <Link
            href="/hintl/blog"
            className="hover:text-teal transition-colors"
            style={{ fontSize: "13px", color: SLATE_500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", padding: "6px 0", marginBottom: "28px" }}
          >
            ← hintl インサイト一覧
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1" style={{ marginBottom: "20px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px", background: TEAL_TINT, color: TEAL }}>
              心理学的エビデンス
            </span>
            <span style={{ fontSize: "12px", color: SLATE_500 }}>2025年5月 · 読了 6分 · AJARA編集部</span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "clamp(24px,3.5vw,34px)", fontWeight: 900, color: INK, lineHeight: 1.35, letterSpacing: "-0.01em", marginBottom: "28px" }}>
            認知行動療法（CBT）とAI——行動変容を加速するエビデンスの使い方
          </h1>

          {/* Lead */}
          <p style={{ fontSize: "17px", color: SLATE_600, lineHeight: 1.9, borderLeft: `3px solid ${TEAL}`, paddingLeft: "20px", marginBottom: "40px" }}>
            認知行動療法（CBT）は世界で最も研究されている心理療法のひとつだ。
            500件以上の臨床試験で有効性が検証されたその原則を AI コーチングに組み込むことで、
            デジタルツールは「感覚的サポート」を超えた存在になる。
          </p>

          {/* Section 1 */}
          <h2 style={h2Style}>CBTとは何か——認知と行動を変えるメカニズム</h2>
          <p style={bodyStyle}>
            CBT（Cognitive Behavioral Therapy：認知行動療法）は、1960年代に Aaron Beck が開発した心理療法だ。
            「思考（認知）」が「感情」と「行動」に影響を与えるというモデルに基づき、
            非適応的な思考パターンを特定し、より現実的・建設的な思考に置き換えることで、
            不安やうつ、行動の問題を改善する。
          </p>
          <p style={bodyStyle}>
            APA（アメリカ心理学会）は CBT を多数の精神疾患に対する「エビデンスベース治療（EBT）」として認定しており、
            <mark style={{ background: HIGHLIGHT }}>うつ病・不安障害・PTSD・摂食障害など幅広い領域での有効性</mark>が確認されている。
          </p>

          {/* Callout */}
          <div style={{ background: TEAL_TINT, border: `1px solid ${TEAL_TINT_BORDER}`, borderRadius: "16px", padding: "24px 28px", margin: "32px 0" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: TEAL, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Key Data</p>
            <p style={{ fontSize: "15px", color: INK, lineHeight: 1.7 }}>
              CBT の有効性を検証した臨床試験は <strong>500件超</strong>（Hofmann et al., 2012）<br />
              うつ病・不安障害・摂食障害など幅広い領域で効果を確認
            </p>
          </div>

          {/* Section 2 */}
          <h2 style={h2Style}>デジタル CBT（dCBT）：アプリ・AI での応用</h2>
          <p style={bodyStyle}>
            2010年代以降、CBT の原則をデジタル環境に移植した「デジタル CBT（dCBT）」の研究が急増している。
            Lancet Psychiatry に掲載された Richards et al.（2020）のメタ分析では、
            dCBT はうつ病症状の軽減において対面 CBT と同程度の効果量を示した（d = 0.56）。
          </p>
          <p style={bodyStyle}>
            特に AI チャットボットを用いた研究では、Woebot（CBT ベースのチャットボット）を使った群が
            対照群と比較して、2週間後の不安スコアと抑うつスコアの有意な改善を示した（Fitzpatrick et al., 2017）。
          </p>

          {/* Section 3 */}
          <h2 style={h2Style}>CBT の具体的な技法——AI コーチングへの応用</h2>
          <p style={bodyStyle}>
            CBT には具体的な技法が多数ある。AI コーチングに特に応用しやすいのは以下の3つだ。
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              { term: "認知の再構成", def: "「どうせ自分はダメだ」という自動思考を「今回の失敗から何を学べるか？」という建設的な問いに置き換える。AI は問いかけのパターンを学習し、個人の思考傾向に合わせて提示できる。" },
              { term: "行動活性化", def: "気分が落ち込んでいるときでも、小さな達成感をもたらす行動を計画的に実行する技法。AI は日々のチェックインを通じて、行動の記録と強化を継続的に支援できる。" },
              { term: "暴露法（段階的アプローチ）", def: "不安の対象に段階的に近づき、回避行動を減らしていく。キャリア変更や人間関係の改善においても、AI が「次の一歩」を設定するサポートに応用できる。" },
            ].map((item) => (
              <li key={item.term} style={{ background: "#ffffff", border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "20px 24px" }}>
                <p style={{ fontSize: "15px", fontWeight: 700, color: INK, marginBottom: "6px" }}>{item.term}</p>
                <p style={{ fontSize: "14px", color: SLATE_600, lineHeight: 1.8 }}>{item.def}</p>
              </li>
            ))}
          </ul>

          <div style={{ background: TEAL_TINT, border: `1px solid ${TEAL_TINT_BORDER}`, borderRadius: "16px", padding: "24px 28px", margin: "32px 0" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: TEAL, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Key Insight</p>
            <p style={{ fontSize: "15px", color: INK, lineHeight: 1.7 }}>
              デジタル CBT の効果量 d = <strong>0.56</strong>（Lancet Psychiatry, 2020）<br />
              対面 CBT と同等の効果を、低コスト・高アクセシビリティで実現
            </p>
          </div>

          {/* Section 4 */}
          <h2 style={h2Style}>「日常の悩み」への応用——臨床外でも機能するエビデンス</h2>
          <p style={bodyStyle}>
            CBT はもともと臨床心理学の文脈で開発されたが、近年は「サブクリニカル」（診断閾値以下）の
            悩みへの応用も研究されている。睡眠の問題、職場のストレス、人間関係の摩擦、
            体重管理——これらに対して CBT の原則を応用したプログラムが一定の効果を示している。
          </p>
          <p style={bodyStyle}>
            hintl が対応する 20 以上のジャンル（キャリア・お金・恋愛・メンタル・睡眠・美容など）は、
            まさにこの「日常の悩み」カテゴリに当たる。臨床的介入が必要なレベルではないが、
            放置すれば慢性化しやすい問題に対し、エビデンスベースのアプローチを提供する。
          </p>

          {/* Conclusion */}
          <h2 style={h2Style}>まとめ</h2>
          <p style={bodyStyle}>
            CBT は世界で最も検証された心理療法であり、その原則はデジタル環境でも有効だ。
            AI がこれらのエビデンスを統合することで、臨床心理士が担ってきた「認知と行動への働きかけ」を、
            日常の悩みのレベルで誰でも手軽に受けられるようになる。
          </p>
          <p style={{ ...bodyStyle, marginBottom: "40px" }}>
            感覚論ではなく、科学が積み上げた知見に基づく伴走。それが hintl の提供する価値だ。
          </p>

          {/* References */}
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "24px", marginBottom: "48px" }}>
            <p style={{ fontSize: "12px", color: SLATE_500, marginBottom: "8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>参考資料</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Hofmann, S. G., Asnaani, A., Vonk, I. J., Sawyer, A. T., & Fang, A. (2012). The efficacy of cognitive behavioral therapy: A review of meta-analyses. Cognitive Therapy and Research.",
                "Richards, D., et al. (2020). Computer-based psychological treatments for depression. Lancet Psychiatry.",
                "Fitzpatrick, K. K., Darcy, A., & Vierhile, M. (2017). Delivering cognitive behavior therapy to young adults with symptoms of depression and anxiety using a fully automated conversational agent. JMIR Mental Health.",
                "Beck, A. T. (1979). Cognitive therapy of depression. Guilford Press.",
                "APA Division 12 — List of Evidence-Based Psychological Treatments (2023 update).",
              ].map((ref) => (
                <li key={ref} style={{ fontSize: "12px", color: SLATE_500, lineHeight: 1.6 }}>· {ref}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div
            className="p-8 sm:px-12 sm:py-14"
            style={{ borderRadius: "16px", textAlign: "center", background: HERO_WASH, border: `1px solid ${TEAL_TINT_BORDER}` }}
          >
            <Image
              src="/images/hintl-logo.webp"
              alt="hintl"
              width={631}
              height={797}
              style={{ height: "64px", width: "auto", objectFit: "contain", margin: "0 auto 16px" }}
            />
            <p style={{ fontSize: "15px", color: SLATE_600, lineHeight: 1.7, marginBottom: "8px" }}>
              CBT のエビデンスを取り入れた AI コーチングを体験。
            </p>
            <p style={{ fontSize: "13px", color: SLATE_500, marginBottom: "24px" }}>
              6 つの質問に答えるだけで、あなたに合ったアドバイザーを無料で提案します。
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
              hintl.net で今すぐ試す
            </a>
          </div>

          {/* Back link */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/hintl/blog" style={{ fontSize: "14px", color: SLATE_600, textDecoration: "underline", textUnderlineOffset: "4px" }}>
              ← 記事一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

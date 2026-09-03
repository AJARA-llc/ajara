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
  title: "AIコーチングの科学——エビデンスが変える「アドバイス」の定義 | hintl インサイト",
  description: "認知科学・行動心理学のエビデンスをAIに組み込むことで、ライフコーチングはどう変わるか。hintlが実践するエビデンスベースのコーチング手法を解説。",
  openGraph: {
    title: "AIコーチングの科学——エビデンスが変える「アドバイス」の定義",
    description: "エビデンスベースのAIコーチングが従来のアドバイスを変える。認知科学・行動心理学の知見とAIの組み合わせ。",
    type: "article",
    locale: "ja_JP",
    url: "https://ajara.co.jp/hintl/blog/ai-coaching-science",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "AIコーチングの科学 | hintl インサイト", images: ["/images/ogp.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "AIコーチングの科学——エビデンスが変える「アドバイス」の定義",
  "description": "認知科学・行動心理学のエビデンスをAIに組み込むことで、ライフコーチングはどう変わるか。hintlが実践するエビデンスベースのコーチング手法を解説。",
  "url": "https://ajara.co.jp/hintl/blog/ai-coaching-science",
  "datePublished": "2025-06-01",
  "dateModified": "2026-06-12",
  "inLanguage": "ja",
  "author": { "@type": "Organization", "name": "AJARA編集部", "url": "https://ajara.co.jp" },
  "publisher": { "@id": "https://ajara.co.jp/#organization" },
  "keywords": ["AIコーチング", "エビデンス", "ライフコーチング", "認知科学", "行動心理学", "hintl"],
  "articleSection": "科学 × コーチング",
  "isPartOf": { "@type": "Blog", "name": "hintl インサイト", "url": "https://ajara.co.jp/hintl/blog" },
};

export default function ArticleAiCoachingScience() {
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
              科学 × コーチング
            </span>
            <span style={{ fontSize: "12px", color: SLATE_500 }}>2025年6月 · 読了 5分 · AJARA編集部</span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "clamp(24px,3.5vw,34px)", fontWeight: 900, color: INK, lineHeight: 1.35, letterSpacing: "-0.01em", marginBottom: "28px" }}>
            AIコーチングの科学——エビデンスが変える「アドバイス」の定義
          </h1>

          {/* Lead */}
          <p style={{ fontSize: "17px", color: SLATE_600, lineHeight: 1.9, borderLeft: `3px solid ${TEAL}`, paddingLeft: "20px", marginBottom: "40px" }}>
            コーチングはなぜ人の行動を変えるのか。心理学・認知科学の研究が積み重ねてきた答えを、
            AI の文脈に置き換えると何が見えてくるのか。「感覚的なアドバイス」との根本的な違いを解説する。
          </p>

          {/* Section 1 */}
          <h2 style={h2Style}>コーチングの効果：メタ分析が示すデータ</h2>
          <p style={bodyStyle}>
            2019年に International Coaching Psychology Review に掲載されたメタ分析（Theeboom et al.）では、
            コーチングを受けた群は受けなかった群と比べ、目標達成率・ウェルビーイング・自己効力感のすべてにおいて
            統計的に有意な改善が見られた（効果量 <mark style={{ background: HIGHLIGHT }}>d = 0.43〜0.68</mark>）。
          </p>
          <p style={bodyStyle}>
            効果をもたらす鍵は「目標の明確化」と「フィードバックの即時性」にある。
            コーチが問いかけることで、本人が自己認識を深め、具体的な行動プランを立てやすくなる。
            この過程は、認知的リアプレイザル（cognitive reappraisal）と呼ばれる心理メカニズムと深く関連している。
          </p>

          {/* Callout */}
          <div style={{ background: TEAL_TINT, border: `1px solid ${TEAL_TINT_BORDER}`, borderRadius: "16px", padding: "24px 28px", margin: "32px 0" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: TEAL, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Key Data</p>
            <p style={{ fontSize: "15px", color: INK, lineHeight: 1.7 }}>
              コーチングの効果量 d = <strong>0.43〜0.68</strong>（Theeboom et al., 2019）<br />
              目標達成・ウェルビーイング・自己効力感のすべてで有意な改善
            </p>
          </div>

          {/* Section 2 */}
          <h2 style={h2Style}>「エビデンス」が欠けたアドバイスの問題</h2>
          <p style={bodyStyle}>
            SNS や書籍で流通するアドバイスの多くは、特定個人の成功体験（N=1のエビデンス）や感覚論に基づいている。
            これは「生存者バイアス」を含むことが多く、同じ手法を試みた人全員がうまくいくとは限らない。
          </p>
          <p style={bodyStyle}>
            対照的に、学術研究で使われるランダム化比較試験（RCT）では、介入あり群と対照群を比較することで
            「その手法が本当に効果的かどうか」を統計的に検証する。
            科学的エビデンスとは、この検証を複数回・複数の研究者が繰り返して得られた知見のことだ。
          </p>

          {/* Section 3 */}
          <h2 style={h2Style}>AIがパーソナライズを可能にする理由</h2>
          <p style={bodyStyle}>
            従来のコーチングが高コストだった理由は「1対1の対話」にある。時間・場所の制約があり、
            継続的なフォローには費用もかかる。AI はこの制約を取り払う。
          </p>
          <p style={bodyStyle}>
            AI がエビデンスを統合する際に重要なのは「文脈理解」だ。同じ「転職したい」という悩みでも、
            年齢・業種・家族構成・経済状況によって最適なアドバイスは異なる。
            AI はこれらの変数を入力として受け取り、エビデンスをパーソナライズして返すことができる。
          </p>

          <div style={{ background: TEAL_TINT, border: `1px solid ${TEAL_TINT_BORDER}`, borderRadius: "16px", padding: "24px 28px", margin: "32px 0" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: TEAL, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Key Insight</p>
            <p style={{ fontSize: "15px", color: INK, lineHeight: 1.7 }}>
              AI コーチングの核心は「エビデンス × パーソナライズ」の組み合わせ<br />
              一般論ではなく、<strong>あなたの状況に合わせた根拠あるアドバイス</strong>を提供する
            </p>
          </div>

          {/* Section 4 */}
          <h2 style={h2Style}>hintl のアプローチ：継続性が変化をもたらす</h2>
          <p style={bodyStyle}>
            行動変容研究が示すもうひとつの重要な知見は「継続的なフォローアップ」の効果だ。
            Journal of Consulting and Clinical Psychology の研究では、介入後の追跡（フォローアップ）の頻度が
            高いほど、長期的な行動変容の維持率が<mark style={{ background: HIGHLIGHT }}>高い</mark>ことが示されている。
          </p>
          <p style={bodyStyle}>
            hintl が月額サブスクリプションモデルを採用しているのはこのためだ。
            「1回のアドバイス」ではなく「継続的な伴走」を提供することが、
            実際の行動変容につながる。
          </p>

          {/* Conclusion */}
          <h2 style={h2Style}>まとめ</h2>
          <p style={bodyStyle}>
            コーチングの有効性は科学的に証明されており、その核心は「目標明確化」「即時フィードバック」「継続的サポート」にある。
            AI がエビデンスを統合することで、これらの要素をパーソナライズされた形で、
            誰もが手軽に利用できるコストで提供することが初めて可能になった。
          </p>
          <p style={{ ...bodyStyle, marginBottom: "40px" }}>
            「感覚的なアドバイス」から「根拠あるコーチング」へ。hintl はその転換を実現するプラットフォームだ。
          </p>

          {/* References */}
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "24px", marginBottom: "48px" }}>
            <p style={{ fontSize: "12px", color: SLATE_500, marginBottom: "8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>参考資料</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Theeboom, T., Beersma, B., & Van Vianen, A. E. M. (2019). Does coaching work? A meta-analysis on the effects of coaching on individual level outcomes. Journal of Positive Psychology.",
                "Grant, A. M. (2014). The efficacy of executive coaching in times of organisational change. Journal of Change Management.",
                "Gross, J. J. (2015). Emotion regulation: Current status and future prospects. Psychological Inquiry.",
                "Lally, P., & Gardner, B. (2013). Promoting habit formation. Health Psychology Review.",
                "Michie, S., et al. (2013). The behavior change wheel: A new method for characterising and designing behavior change interventions. Implementation Science.",
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
              エビデンスベースのAIコーチングを体験してみませんか？
            </p>
            <p style={{ fontSize: "13px", color: SLATE_500, marginBottom: "24px" }}>
              6 つの質問に答えるだけ。あなたに合ったアドバイザーを無料で提案します。
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

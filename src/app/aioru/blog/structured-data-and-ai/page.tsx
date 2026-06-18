import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AioruNavigation from "@/components/AioruNavigation";

const BRAND = "linear-gradient(135deg, #5BA4F5, #6C5CE7)";

export const metadata: Metadata = {
  title: "構造化データとAI引用率の関係——Schema.org 実装がもたらす可視性の差 | AIO インサイト",
  description: "Schema.org の構造化データ実装が生成AI検索での引用率に与える影響を解説。FAQPage・Organization・Article スキーマの実装方法も紹介。",
  openGraph: {
    title: "構造化データとAI引用率の関係——Schema.org 実装がもたらす可視性の差",
    description: "Schema.org の構造化データ実装で生成AI検索での引用率が向上する仕組みと実装方法。",
    type: "article",
    locale: "ja_JP",
    url: "https://ajara.co.jp/aioru/blog/structured-data-and-ai",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "構造化データとAI引用率 | AIO インサイト", images: ["/images/ogp.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "構造化データとAI引用率の関係——Schema.org 実装がもたらす可視性の差",
  "description": "Schema.org の構造化データ実装が生成AI検索での引用率に与える影響を解説。FAQPage・Organization・Article スキーマの実装方法も紹介。",
  "url": "https://ajara.co.jp/aioru/blog/structured-data-and-ai",
  "datePublished": "2025-05-01",
  "dateModified": "2026-06-12",
  "inLanguage": "ja",
  "author": { "@type": "Organization", "name": "AJARA編集部", "url": "https://ajara.co.jp" },
  "publisher": { "@id": "https://ajara.co.jp/#organization" },
  "keywords": ["構造化データ", "Schema.org", "AI引用率", "AIO", "FAQPage", "JSON-LD"],
  "articleSection": "技術解説",
  "isPartOf": { "@type": "Blog", "name": "AIO インサイト", "url": "https://ajara.co.jp/aioru/blog" },
};

export default function ArticleStructuredData() {
  return (
    <div style={{ background: "#ffffff", color: "#1B2340", minHeight: "100vh", fontFamily: '-apple-system,"Inter","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <AioruNavigation />

      <article style={{ paddingTop: "100px", paddingBottom: "80px" }} className="px-6">
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <Link href="/aioru/blog" style={{ fontSize: "13px", color: "#8A97C0", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", marginBottom: "32px" }}>
            ← AIO インサイト一覧
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px", background: "linear-gradient(135deg, rgba(91,164,245,0.15), rgba(108,92,231,0.15))", color: "#6C5CE7" }}>
              技術解説
            </span>
            <span style={{ fontSize: "12px", color: "#8A97C0" }}>2025年5月 · 読了 6分 · AJARA編集部</span>
          </div>

          <h1 style={{ fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 800, color: "#1B2340", lineHeight: 1.35, letterSpacing: "-0.5px", marginBottom: "28px" }}>
            構造化データとAI引用率の関係——Schema.org 実装がもたらす可視性の差
          </h1>

          <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.9, borderLeft: "3px solid #5BA4F5", paddingLeft: "20px", marginBottom: "40px" }}>
            Google・Microsoft・Yahoo・Yandex が 2011年に共同設立した Schema.org は、
            もともと検索エンジンがコンテンツを「理解」するために作られた仕様だ。
            しかし今日、その役割は大きく拡張され、生成AI が「引用に値する情報源」を選ぶ際の重要なシグナルになっている。
          </p>

          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            Schema.org とは何か
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            Schema.org は、Web ページのコンテンツに対して「機械が読める意味」を付与する語彙（ボキャブラリー）の標準仕様だ。
            JSON-LD・Microdata・RDFa の3形式で実装でき、現在 1,000 以上のタイプ定義が公開されている。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            Web Technology Surveys の調査によれば、2024年時点で上位 1,000万サイトの約半数が Schema.org マークアップを採用している。
            ただし、AIO（AI検索最適化）に直接有効な <code style={{ background: "#F4F5FB", padding: "2px 6px", borderRadius: "4px", fontSize: "13px" }}>Organization</code>・
            <code style={{ background: "#F4F5FB", padding: "2px 6px", borderRadius: "4px", fontSize: "13px" }}>FAQPage</code>・
            <code style={{ background: "#F4F5FB", padding: "2px 6px", borderRadius: "4px", fontSize: "13px" }}>Article</code> スキーマを正しく実装しているサイトは依然として少数派だ。
          </p>

          <div style={{ background: "linear-gradient(135deg, rgba(91,164,245,0.08), rgba(108,92,231,0.08))", border: "1px solid rgba(91,164,245,0.2)", borderRadius: "16px", padding: "24px 28px", margin: "32px 0" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#6C5CE7", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Key Data</p>
            <p style={{ fontSize: "15px", color: "#1B2340", lineHeight: 1.7 }}>
              上位1,000万サイトの約<strong>50%</strong>が何らかの Schema.org マークアップを採用（W3Techs, 2024）<br />
              AIO有効スキーマの正確な実装率はさらに低い水準
            </p>
          </div>

          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            AI 検索が構造化データを重視する理由
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            ChatGPT・Gemini・Perplexity などの生成AI は、Web クローリングで取得したコンテンツを学習・参照する際、
            非構造化テキストよりも構造化データを優先的に処理する傾向がある。
            これは、機械学習モデルが「文脈の明確な情報」をより信頼できるシグナルとして扱うためだ。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            特に <code style={{ background: "#F4F5FB", padding: "2px 6px", borderRadius: "4px", fontSize: "13px" }}>Organization</code> スキーマは、企業の正式名称・所在地・連絡先・SNSアカウントを
            JSON-LD で明示することで、AI が「この企業は実在する信頼できる組織」と判断する根拠になる。
            Kalicube.com の調査では、Organization スキーマを正しく実装したサイトは AI 検索での引用可能性が向上するとされている。
          </p>

          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            AIO に効果的な3つのスキーマ
          </h2>

          {[
            {
              name: "Organization スキーマ",
              code: "Organization",
              desc: "企業情報（名称・URL・ロゴ・SNS・連絡先）を明示。AI が「引用元として信頼できる組織」と判断するための基盤。特に sameAs プロパティで Wikipedia や公式 SNS を紐付けることで Knowledge Panel 形成を促進する。",
            },
            {
              name: "FAQPage スキーマ",
              code: "FAQPage",
              desc: "質疑応答形式のコンテンツをマークアップ。AI は回答を直接引用しやすい形式を好むため、FAQPage はユーザーの質問に対して自社コンテンツが採用される確率を高める。Google の公式ドキュメントでも Rich Results の対象として認定されている。",
            },
            {
              name: "Article / BlogPosting スキーマ",
              code: "Article",
              desc: "著者情報（author）・公開日（datePublished）・更新日（dateModified）を明示することで、コンテンツの鮮度と信頼性を AI に伝える。E-E-A-T（Experience・Expertise・Authoritativeness・Trustworthiness）シグナルの一部としても機能する。",
            },
          ].map((s) => (
            <div key={s.name} style={{ background: "#F4F5FB", border: "1px solid rgba(91,164,245,0.12)", borderRadius: "14px", padding: "24px 28px", marginBottom: "16px" }}>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#1B2340", marginBottom: "6px" }}>
                <code style={{ background: "linear-gradient(135deg, rgba(91,164,245,0.15), rgba(108,92,231,0.15))", padding: "2px 8px", borderRadius: "4px", fontSize: "12px", color: "#6C5CE7", marginRight: "8px" }}>{s.code}</code>
                {s.name}
              </p>
              <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.8 }}>{s.desc}</p>
            </div>
          ))}

          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            llms.txt — AI クローラーへの新しいシグナル
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            2024年9月、AI 研究者の Jeremy Howard（answer.ai）が提案した <code style={{ background: "#F4F5FB", padding: "2px 6px", borderRadius: "4px", fontSize: "13px" }}>llms.txt</code> 仕様は、
            robots.txt の AI 版とも言える新しい標準だ。サイトルートに設置することで、AI クローラーに対して
            「このサイトのどのコンテンツを優先して参照すべきか」を明示できる。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            Anthropic・Perplexity など複数の AI プロバイダーが llms.txt への対応を表明しており、
            今後 AI 検索のデファクトスタンダードになる可能性が高い。今から実装することで先行者優位を確保できる。
          </p>

          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            まとめ：構造化データは「AI への自己紹介状」
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            SEO の文脈では「あって当然」だった構造化データが、AI 検索の文脈では「引用される企業」と「されない企業」を分ける
            決定的な差異になりつつある。実装コストは低く、対費用効果は高い。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "40px" }}>
            まず自社サイトの現状を把握することから始めよう。aioru の19項目診断では、
            構造化データの実装状況も評価対象に含まれている。
          </p>

          <div style={{ borderTop: "1px solid rgba(91,164,245,0.1)", paddingTop: "24px", marginBottom: "48px" }}>
            <p style={{ fontSize: "12px", color: "#8A97C0", marginBottom: "8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>参考資料</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Schema.org — Official Specification and Documentation (schema.org)",
                "W3Techs — \"Usage Statistics of Schema.org\" (2024)",
                "Kalicube.com — \"Entity SEO and Knowledge Panel Research\" (2023–2024)",
                "Jeremy Howard / answer.ai — llms.txt Proposal (September 2024, llmstxt.org)",
                "Google Search Central — \"Structured Data: FAQPage\" (developers.google.com)",
                "Google Search Central — \"Introduction to Structured Data\" (developers.google.com)",
              ].map((ref) => (
                <li key={ref} style={{ fontSize: "12px", color: "#8A97C0", lineHeight: 1.6 }}>· {ref}</li>
              ))}
            </ul>
          </div>

          <div style={{ borderRadius: "24px", padding: "48px 40px", textAlign: "center", background: "linear-gradient(135deg, rgba(91,164,245,0.1), rgba(108,92,231,0.1))", border: "1px solid rgba(91,164,245,0.2)" }}>
            <Image src="/images/aioru-logo-vertical.webp" alt="aioru" width={881} height={679} style={{ height: "80px", width: "auto", objectFit: "contain", margin: "0 auto 16px" }} />
            <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.7, marginBottom: "8px" }}>
              自社サイトの構造化データは正しく実装されていますか？
            </p>
            <p style={{ fontSize: "13px", color: "#8A97C0", marginBottom: "24px" }}>
              aioru の無料診断で Organization・FAQ・Article スキーマの実装状況を即確認。
            </p>
            <a
              href="https://aioru.net"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-block", padding: "13px 36px", borderRadius: "999px", background: BRAND, color: "#ffffff", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 4px 20px rgba(91,164,245,0.4)" }}
            >
              aioru.net で今すぐ診断する
            </a>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/aioru/blog" style={{ fontSize: "14px", color: "#8A97C0", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              ← 記事一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

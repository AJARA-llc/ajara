import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AioruNavigation from "@/components/AioruNavigation";

const BRAND = "linear-gradient(135deg, #5BA4F5, #6C5CE7)";

export const metadata: Metadata = {
  title: "生成AI検索の急成長——ChatGPT・Perplexity が変えた「検索」の定義 | AIO インサイト",
  description: "ChatGPT・Perplexityの急成長で検索行動が変わった。AI検索が引用するサイトはごく一部——AIO対策が今すぐ必要な理由を解説。",
  openGraph: {
    title: "生成AI検索の急成長——ChatGPT・Perplexity が変えた「検索」の定義",
    description: "AI検索が引用するのは全体の数%。SEOとAIOの違いと、今すぐ対策すべき理由。",
    type: "article",
    locale: "ja_JP",
    url: "https://ajara.co.jp/aioru/blog/ai-search-growth",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "生成AI検索の急成長 | AIO インサイト", images: ["/images/ogp.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "生成AI検索の急成長——ChatGPT・Perplexity が変えた「検索」の定義",
  "description": "ChatGPT・Perplexityの急成長で検索行動が変わった。AI検索が引用するサイトはごく一部——AIO対策が今すぐ必要な理由を解説。",
  "url": "https://ajara.co.jp/aioru/blog/ai-search-growth",
  "datePublished": "2025-06-01",
  "dateModified": "2026-06-12",
  "inLanguage": "ja",
  "author": { "@type": "Organization", "name": "AJARA編集部", "url": "https://ajara.co.jp" },
  "publisher": { "@id": "https://ajara.co.jp/#organization" },
  "keywords": ["AIO", "AI検索", "ChatGPT", "Perplexity", "生成AI検索", "SEO"],
  "articleSection": "市場動向",
  "isPartOf": { "@type": "Blog", "name": "AIO インサイト", "url": "https://ajara.co.jp/aioru/blog" },
};

export default function ArticleAiSearchGrowth() {
  return (
    <div style={{ background: "#ffffff", color: "#1B2340", minHeight: "100vh", fontFamily: '-apple-system,"Inter","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <AioruNavigation />

      <article style={{ paddingTop: "100px", paddingBottom: "80px" }} className="px-6">
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Back */}
          <Link href="/aioru/blog" style={{ fontSize: "13px", color: "#8A97C0", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", marginBottom: "32px" }}>
            ← AIO インサイト一覧
          </Link>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px", background: "linear-gradient(135deg, rgba(91,164,245,0.15), rgba(108,92,231,0.15))", color: "#6C5CE7" }}>
              市場動向
            </span>
            <span style={{ fontSize: "12px", color: "#8A97C0" }}>2025年6月 · 読了 5分 · AJARA編集部</span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 800, color: "#1B2340", lineHeight: 1.35, letterSpacing: "-0.5px", marginBottom: "28px" }}>
            生成AI検索の急成長——ChatGPT・Perplexity が変えた「検索」の定義
          </h1>

          {/* Lead */}
          <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.9, borderLeft: "3px solid #5BA4F5", paddingLeft: "20px", marginBottom: "40px" }}>
            2022年末以降、検索の主戦場が静かに変わりはじめた。Google に代わって ChatGPT や Perplexity に質問するユーザーが急増し、
            従来の SEO 最適化だけでは「検索結果に存在しない」企業が続出している。
          </p>

          {/* Section 1 */}
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            ChatGPT：史上最速で1億 MAU を突破
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            OpenAI が 2022年11月に公開した ChatGPT は、公開からわずか2ヶ月で月間アクティブユーザー（MAU）1億人を突破した。
            これはTikTokが同数に到達するまでに要した9ヶ月、Instagramの2.5年を大きく上回るペースである（UBS, 2023年2月調査）。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            Reuters/Ipsos が2023年に実施した調査では、米国の成人のうち約28%が過去1ヶ月以内に ChatGPT を使用したと回答。
            特に「製品・サービスの情報収集」用途での利用が増加しており、従来の検索エンジンが担ってきた役割を一部代替しはじめている。
          </p>

          {/* Callout */}
          <div style={{ background: "linear-gradient(135deg, rgba(91,164,245,0.08), rgba(108,92,231,0.08))", border: "1px solid rgba(91,164,245,0.2)", borderRadius: "16px", padding: "24px 28px", margin: "32px 0" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#6C5CE7", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Key Data</p>
            <p style={{ fontSize: "15px", color: "#1B2340", lineHeight: 1.7 }}>
              ChatGPT は公開2ヶ月で MAU <strong>1億人</strong>突破（UBS調査, 2023）<br />
              消費者向けアプリとして史上最速の成長速度を記録
            </p>
          </div>

          {/* Section 2 */}
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            Perplexity AI：1年でクエリ数10倍超
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            2022年創業の Perplexity AI は「回答エンジン」を標榜し、従来型の検索結果リストではなく、
            出典付きの要約回答を即座に提供する。2024年時点での月間クエリ数は数億件規模に達し、
            Softbank・Nvidia・IVP など複数のティア1 VC から累計5億ドル超の資金調達を完了している。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            特筆すべきは B2B 利用の拡大だ。Perplexity for Business の提供開始により、企業の調査・リサーチ業務に
            組み込まれるケースが増加。ここで引用されるかどうかが、企業の「発見可能性」を左右しはじめている。
          </p>

          {/* Section 3 */}
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            Google AI Overview：84% のクエリに表示
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            Google は 2024年5月の Google I/O で AI Overview（旧 Search Generative Experience）を米国全土に正式展開した。
            BrightEdge の調査によれば、展開直後に主要クエリの84%に AI Overview が表示され、その後も安定的に高い表示率を維持している。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            AI Overview に引用されたサイトは通常のオーガニック検索より高い視認性を得る一方、
            引用されなかったサイトへのクリックは減少する傾向が報告されている。
            SparkToro の調査では、AI Overview 表示後のゼロクリック検索比率がさらに上昇したことが示されている。
          </p>

          <div style={{ background: "linear-gradient(135deg, rgba(91,164,245,0.08), rgba(108,92,231,0.08))", border: "1px solid rgba(91,164,245,0.2)", borderRadius: "16px", padding: "24px 28px", margin: "32px 0" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#6C5CE7", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Key Data</p>
            <p style={{ fontSize: "15px", color: "#1B2340", lineHeight: 1.7 }}>
              Google AI Overview は展開直後から主要クエリの <strong>84%</strong> に表示（BrightEdge, 2024）<br />
              AI Overview 非引用サイトへのクリック率は低下傾向
            </p>
          </div>

          {/* Section 4 */}
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            SEO と AIO の決定的な違い
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            従来の SEO は「検索結果の上位に表示されること」を目標にしてきた。ユーザーはリストを見て自分でクリックし、
            情報を判断する。一方 AI 検索は、AIがコンテンツを読み込んで「回答の素材」として選択する。
            この時点でゲームのルールが根本的に変わっている。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            AI に選ばれるために必要なのは、<strong style={{ color: "#1B2340" }}>構造化データ・E-E-A-T シグナル・回答ファースト設計</strong>の3要素だ。
            これらを欠いたサイトは、たとえ SEO スコアが高くても AI 検索では「存在しないサイト」に等しい扱いを受ける。
          </p>

          {/* Conclusion */}
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            まとめ
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            ChatGPT の爆発的普及、Perplexity の急成長、Google AI Overview の本格展開——この3つのトレンドが重なり、
            2024年は「AI検索元年」と呼べる転換点になった。来年以降、この流れが逆転することは考えにくい。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "40px" }}>
            自社サイトが現時点でどの程度 AI 検索に最適化されているかを把握することが、まず取り組むべき第一歩だ。
          </p>

          {/* References */}
          <div style={{ borderTop: "1px solid rgba(91,164,245,0.1)", paddingTop: "24px", marginBottom: "48px" }}>
            <p style={{ fontSize: "12px", color: "#8A97C0", marginBottom: "8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>参考資料</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "UBS Evidence Lab — \"ChatGPT: A Growth Story\" (February 2023)",
                "Reuters/Ipsos — \"AI Tools Usage Survey\" (2023)",
                "BrightEdge — \"AI Search Impact Report\" (2024)",
                "SparkToro / Rand Fishkin — \"Zero-Click Searches Study\" (2024)",
                "OpenAI — Official ChatGPT product announcements (2022–2024)",
                "Perplexity AI — Funding announcements and product releases (2023–2024)",
              ].map((ref) => (
                <li key={ref} style={{ fontSize: "12px", color: "#8A97C0", lineHeight: 1.6 }}>· {ref}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div
            style={{
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
              style={{ height: "80px", width: "auto", objectFit: "contain", margin: "0 auto 16px" }}
            />
            <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.7, marginBottom: "8px" }}>
              あなたのサイトは AI 検索に最適化されていますか？
            </p>
            <p style={{ fontSize: "13px", color: "#8A97C0", marginBottom: "24px" }}>
              URL を入力するだけ。19項目・無料で AIO スコアを診断できます。
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
              aioru.net で今すぐ診断する
            </a>
          </div>

          {/* Back link */}
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

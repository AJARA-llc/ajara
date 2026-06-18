import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AioruNavigation from "@/components/AioruNavigation";

const BRAND = "linear-gradient(135deg, #5BA4F5, #6C5CE7)";

export const metadata: Metadata = {
  title: "E-E-A-T と AI引用率——Googleの品質評価基準が生成AI検索を支配する理由 | AIO インサイト",
  description: "E-E-A-TシグナルはGoogle検索だけでなく生成AI検索にも影響する。AI引用率を高めるE-E-A-T強化の具体的な方法を解説。",
  openGraph: {
    title: "E-E-A-T と AI引用率——Googleの品質評価基準が生成AI検索を支配する理由",
    description: "E-E-A-Tシグナルを強化することで生成AI検索での引用率が向上する理由と方法。",
    type: "article",
    locale: "ja_JP",
    url: "https://ajara.co.jp/aioru/blog/eeat-and-ai-citation",
    siteName: "合同会社AJARA",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "E-E-A-T と AI引用率 | AIO インサイト", images: ["/images/ogp.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "E-E-A-T と AI引用率——Googleの品質評価基準が生成AI検索を支配する理由",
  "description": "E-E-A-TシグナルはGoogle検索だけでなく生成AI検索にも影響する。AI引用率を高めるE-E-A-T強化の具体的な方法を解説。",
  "url": "https://ajara.co.jp/aioru/blog/eeat-and-ai-citation",
  "datePublished": "2025-04-01",
  "dateModified": "2026-06-12",
  "inLanguage": "ja",
  "author": { "@type": "Organization", "name": "AJARA編集部", "url": "https://ajara.co.jp" },
  "publisher": { "@id": "https://ajara.co.jp/#organization" },
  "keywords": ["E-E-A-T", "AI引用率", "AIO", "SEO", "Google品質評価", "生成AI検索"],
  "articleSection": "SEO × AIO",
  "isPartOf": { "@type": "Blog", "name": "AIO インサイト", "url": "https://ajara.co.jp/aioru/blog" },
};

export default function ArticleEeatAndAi() {
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
              SEO × AIO
            </span>
            <span style={{ fontSize: "12px", color: "#8A97C0" }}>2025年4月 · 読了 7分 · AJARA編集部</span>
          </div>

          <h1 style={{ fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 800, color: "#1B2340", lineHeight: 1.35, letterSpacing: "-0.5px", marginBottom: "28px" }}>
            E-E-A-T と AI引用率——Googleの品質評価基準が生成AI検索を支配する理由
          </h1>

          <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.9, borderLeft: "3px solid #5BA4F5", paddingLeft: "20px", marginBottom: "40px" }}>
            2022年12月、Google は検索品質評価ガイドライン（Search Quality Evaluator Guidelines）を更新し、
            従来の E-A-T（Expertise・Authoritativeness・Trustworthiness）に
            「Experience（経験）」を加えた E-E-A-T 概念を導入した。
            この変更は SEO にとどまらず、ChatGPT・Gemini・Perplexity が引用先を選定する基準とも深く連動している。
          </p>

          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            E-E-A-T とは何か
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            Google の検索品質評価ガイドラインは非公開の内部ドキュメントではなく、同社が公式に公開している170ページ超の文書だ。
            Google の評価者（Quality Raters）がコンテンツを採点する際に使用するルーブリックであり、
            同時に検索アルゴリズムが目指す品質の方向性を示している。
          </p>

          {[
            { letter: "E", label: "Experience（経験）", desc: "コンテンツ作成者がトピックについて実際の経験を持っているか。製品レビューであれば実際に使用したか、医療情報であれば当事者経験を持つかどうか。2022年に追加された概念。" },
            { letter: "E", label: "Expertise（専門性）", desc: "コンテンツが専門的な知識に基づいているか。YMYL（Your Money or Your Life）分野では特に高い水準が求められる。" },
            { letter: "A", label: "Authoritativeness（権威性）", desc: "その分野における権威として認知されているか。他サイトからの引用・メディア掲載・受賞歴などが評価対象。" },
            { letter: "T", label: "Trustworthiness（信頼性）", desc: "サイト全体として信頼できるか。プライバシーポリシー・会社情報・連絡先・HTTPS 対応などが評価される最重要軸。" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "16px", background: "#F4F5FB", border: "1px solid rgba(91,164,245,0.12)", borderRadius: "14px", padding: "20px 24px" }}>
              <div style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%", background: BRAND, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "16px" }}>
                {item.letter}
              </div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#1B2340", marginBottom: "4px" }}>{item.label}</p>
                <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}

          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            なぜ E-E-A-T が AI 引用率に直結するのか
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            ChatGPT や Perplexity が回答を生成する際、Web からの情報をそのまま使用するわけではない。
            信頼性の高い情報源を優先的に参照・引用する仕組みが組み込まれており、その判断基準は
            Google の E-E-A-T と多くの部分で重複している。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            Authoritas が2024年に実施した調査では、Google AI Overview に引用されたサイトの特徴を分析した結果、
            <strong style={{ color: "#1B2340" }}>明確な著者情報・組織情報・正確な連絡先</strong>を持つサイトの引用比率が
            そうでないサイトの約2倍以上だったと報告されている。
          </p>

          <div style={{ background: "linear-gradient(135deg, rgba(91,164,245,0.08), rgba(108,92,231,0.08))", border: "1px solid rgba(91,164,245,0.2)", borderRadius: "16px", padding: "24px 28px", margin: "32px 0" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#6C5CE7", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Key Data</p>
            <p style={{ fontSize: "15px", color: "#1B2340", lineHeight: 1.7 }}>
              著者・組織情報が明確なサイトは AI Overview 引用率が<strong>約2倍</strong>以上（Authoritas, 2024）<br />
              Trustworthiness が E-E-A-T の中で最も重要な軸と位置付けられている
            </p>
          </div>

          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            YMYL コンテンツにおける E-E-A-T の重要性
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            Google は特定のカテゴリを「Your Money or Your Life（YMYL）」と定義し、
            医療・法律・金融・安全情報など人の人生や財産に影響するコンテンツについては
            特に高い E-E-A-T 水準を求めている。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            AI 検索においても YMYL コンテンツは慎重に扱われる。Gemini や ChatGPT が
            医療・投資・法律に関する回答を生成する場合、権威性の高いサイトのみを引用し、
            不確かな情報源を排除する傾向がある。この分野で AI に引用されることは、
            従来の SEO 上位表示よりもはるかに高い信頼性の証明となる。
          </p>

          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            E-E-A-T を強化するための具体的アクション
          </h2>

          {[
            { num: "01", title: "著者情報の明示", desc: "記事・コンテンツの著者名・プロフィール・資格・SNSリンクを必ず掲載。匿名コンテンツは AI から信頼されにくい。" },
            { num: "02", title: "Organization スキーマの実装", desc: "JSON-LD で企業名・所在地・設立年・連絡先・sameAs（Wikipedia・SNS）を構造化。Knowledge Panel 形成を促進する。" },
            { num: "03", title: "外部権威サイトからの言及獲得", desc: "業界メディア・学術機関・政府サイトなどからの被リンクや引用は、権威性（Authoritativeness）の最強シグナル。" },
            { num: "04", title: "コンテンツの更新・鮮度維持", desc: "dateModified を Article スキーマに明示し、定期的にコンテンツを更新。鮮度は AI が引用先を選ぶ際の重要な判断軸。" },
            { num: "05", title: "サイト全体の Trustworthiness 強化", desc: "HTTPS 必須・プライバシーポリシー完備・会社情報ページの整備・連絡先明示。これらはブランドの実在性を証明する。" },
          ].map((item) => (
            <div key={item.num} style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
              <div style={{ flexShrink: 0, fontSize: "22px", fontWeight: 800, color: "rgba(91,164,245,0.3)", lineHeight: 1.2 }}>{item.num}</div>
              <div style={{ background: "#F4F5FB", border: "1px solid rgba(91,164,245,0.1)", borderRadius: "12px", padding: "16px 20px", flex: 1 }}>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#1B2340", marginBottom: "4px" }}>{item.title}</p>
                <p style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}

          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1B2340", letterSpacing: "-0.3px", marginBottom: "16px", marginTop: "48px" }}>
            まとめ
          </h2>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
            E-E-A-T は Google が10年以上かけて精緻化してきた品質基準であり、
            生成AI がその考え方を踏襲していることは偶然ではない。AI 検索に最適化することは、
            本質的には「より信頼性の高い情報源になること」に他ならない。
          </p>
          <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.9, marginBottom: "40px" }}>
            まず自社サイトが現時点で E-E-A-T / AIO の観点でどの水準にあるかを把握しよう。
            aioru の無料診断は、この評価を19項目・即時に可視化する。
          </p>

          <div style={{ borderTop: "1px solid rgba(91,164,245,0.1)", paddingTop: "24px", marginBottom: "48px" }}>
            <p style={{ fontSize: "12px", color: "#8A97C0", marginBottom: "8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>参考資料</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Google — \"Search Quality Evaluator Guidelines\" (公開ドキュメント, 最新版)",
                "Google Search Central — \"Creating helpful, reliable, people-first content\"",
                "Authoritas — \"AI Overview Citation Study\" (2024)",
                "Google Search Central Blog — \"More content by people, for people in Search\" (August 2022)",
                "Google Search Central Blog — \"December 2022 helpful content update\" (E-E-A-T追加)",
                "Semrush — \"State of Search\" Annual Report (2024)",
              ].map((ref) => (
                <li key={ref} style={{ fontSize: "12px", color: "#8A97C0", lineHeight: 1.6 }}>· {ref}</li>
              ))}
            </ul>
          </div>

          <div style={{ borderRadius: "24px", padding: "48px 40px", textAlign: "center", background: "linear-gradient(135deg, rgba(91,164,245,0.1), rgba(108,92,231,0.1))", border: "1px solid rgba(91,164,245,0.2)" }}>
            <Image src="/images/aioru-logo-vertical.webp" alt="aioru" width={881} height={679} style={{ height: "80px", width: "auto", objectFit: "contain", margin: "0 auto 16px" }} />
            <p style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.7, marginBottom: "8px" }}>
              自社サイトの E-E-A-T スコアを今すぐ確認。
            </p>
            <p style={{ fontSize: "13px", color: "#8A97C0", marginBottom: "24px" }}>
              aioru が著者情報・Organization スキーマ・信頼性シグナルの実装状況を19項目で診断します。
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

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AioruNavigation from "@/components/AioruNavigation";

// ── Design tokens ─────────────────────────────────────────────────────────────
// bg: #ffffff  surface: #F4F5FB  navy: #1B2340  blue: #5BA4F5  violet: #6C5CE7
// text-sub: #4A5568  text-muted: #8A97C0

const BRAND = "linear-gradient(135deg, #5BA4F5, #6C5CE7)";
const BRAND_SOFT = "linear-gradient(135deg, rgba(91,164,245,0.12), rgba(108,92,231,0.12))";

const FAQS = [
  {
    q: "AIO（AI検索最適化）とは何ですか？",
    a: "AIO（AI Index Optimization）は、ChatGPT・Perplexity・Google AI Overview などの生成AI検索で自社サイトが「引用・推薦される」よう最適化する手法です。従来の SEO とは異なる評価軸を持ち、構造化データ・E-E-A-T シグナル・回答ファースト型コンテンツが評価されます。",
  },
  {
    q: "SEO 対策をしていれば AIO は不要ですか？",
    a: "いいえ。SEO 対策済みのサイトでも、構造化データ・E-E-A-T シグナル・コンテンツの回答性が不足している場合、AI 検索では引用されないケースが大半です。aioru の無料診断で現状スコアを確認できます。",
  },
  {
    q: "aioru はどのように使いますか？",
    a: "URL を入力するだけで、19 項目にわたる AIO スコアを即座に診断できます。技術実装・コンテンツ品質・パフォーマンスの 3 カテゴリで採点し、改善ポイントをわかりやすく表示します。診断は無料です。",
  },
  {
    q: "診断スコアが低い場合はどうすればよいですか？",
    a: "診断レポートにスコアの根拠と改善の方向性が含まれます。専門的な改善支援が必要な場合は、AJARA の AIO コンサルティングサービス（診断レポート・改善戦略策定・継続支援）をご活用ください。",
  },
  {
    q: "費用はかかりますか？",
    a: "aioru の基本診断ツールは無料です。AJARA による有償コンサルティング（AIO診断レポート¥150,000〜、改善戦略策定¥300,000〜、継続支援¥500,000〜/月）は別途ご相談ください。",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: open ? "#F4F5FB" : "#ffffff",
        border: "1px solid",
        borderColor: open ? "rgba(91,164,245,0.3)" : "rgba(91,164,245,0.12)",
        borderRadius: "14px",
        transition: "all 0.2s ease",
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
          textAlign: "left",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span style={{ color: "#1B2340", fontSize: "14px", fontWeight: 500 }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            flexShrink: 0,
            width: "22px",
            height: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            lineHeight: 1,
            border: "1.5px solid rgba(91,164,245,0.4)",
            borderRadius: "50%",
            color: "#5BA4F5",
          }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                padding: "0 24px 20px",
                color: "#4A5568",
                fontSize: "14px",
                lineHeight: 1.8,
                borderTop: "1px solid rgba(91,164,245,0.1)",
                paddingTop: "16px",
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

export default function AioruPage() {
  return (
    <div
      style={{
        background: "#ffffff",
        color: "#1B2340",
        fontFamily: '-apple-system,"Inter","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif',
        minHeight: "100vh",
      }}
    >
      <AioruNavigation />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        style={{ paddingTop: "120px", paddingBottom: "80px", textAlign: "center", position: "relative", overflow: "hidden" }}
        className="px-6"
      >
        {/* Soft background blobs */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "radial-gradient(ellipse at 20% 0%, rgba(91,164,245,0.1) 0%, transparent 55%)," +
              "radial-gradient(ellipse at 80% 10%, rgba(108,92,231,0.08) 0%, transparent 50%)",
          }}
        />

        {/* Logo — vertical variant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "36px" }}
        >
          <Image
            src="/images/aioru-logo-vertical.webp"
            alt="aioru — AI VISIBILITY SCORE"
            width={881}
            height={679}
            style={{ height: "180px", width: "auto", objectFit: "contain" }}
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "20px",
            maxWidth: "680px",
            margin: "0 auto 20px",
            letterSpacing: "-1.5px",
            fontSize: "clamp(36px, 5.5vw, 64px)",
            color: "#1B2340",
          }}
        >
          AIに選ばれる
          <span
            style={{
              display: "block",
              background: BRAND,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            企業になる。
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.8, maxWidth: "460px", margin: "0 auto 12px" }}
        >
          ChatGPT・Perplexity・Gemini が回答する時代。<br />
          SEO の次は <strong style={{ color: "#1B2340" }}>AIO（AI検索最適化）</strong> です。
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          style={{ fontSize: "13px", color: "#8A97C0", marginBottom: "40px" }}
        >
          URL を入力するだけ。19項目で即診断・無料。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
          className="sm:flex-row"
        >
          <a
            href="https://aioru.net"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              borderRadius: "999px",
              background: BRAND,
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(91,164,245,0.4)",
              letterSpacing: "-0.2px",
            }}
          >
            aioru で無料診断する
          </a>
          <a
            href="#article"
            style={{ fontSize: "14px", color: "#6C5CE7", textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            なぜ今 AIO なのか →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{ display: "flex", justifyContent: "center", gap: "48px", marginTop: "56px" }}
        >
          {[
            { value: "19項目", label: "診断チェック" },
            { value: "即時", label: "スコア表示" },
            { value: "無料", label: "診断費用" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  background: BRAND,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.5px",
                }}
              >
                {stat.value}
              </p>
              <p style={{ fontSize: "12px", color: "#8A97C0", marginTop: "4px" }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Article ─────────────────────────────────────────── */}
      <section id="article" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8A97C0",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            AJARA Column
          </p>
          <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 700, color: "#1B2340", textAlign: "center", marginBottom: "8px", letterSpacing: "-0.5px" }}>
            なぜ、今こそ AIO に取り組むべきなのか
          </h2>
          <p style={{ fontSize: "12px", color: "#8A97C0", textAlign: "center", marginBottom: "40px" }}>
            2026年 — AJARA編集部
          </p>

          <div
            style={{
              background: "#F4F5FB",
              border: "1px solid rgba(91,164,245,0.12)",
              borderRadius: "20px",
              padding: "40px 44px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              fontSize: "14px",
              lineHeight: 1.9,
              color: "#4A5568",
            }}
          >
            <p>
              2024年、世界の検索行動が静かに変わりはじめました。Google の AI Overview、ChatGPT の Web ブラウジング、Perplexity の台頭——
              ユーザーは「検索して選ぶ」のではなく「AI に聞いて答えをもらう」スタイルへと移行しています。
            </p>
            <p>
              問題は、<strong style={{ color: "#1B2340" }}>AI が引用するサイトはごく一部に限られる</strong>という点です。
              SEO で上位表示されていても、構造化データが不足していたり E-E-A-T シグナルが弱かったりすると、AI の回答には登場しません。
            </p>
            <p>
              AI 検索が優先するのは「信頼できる情報源」です。Organization スキーマ・llms.txt・FAQPage スキーマといった技術的実装と、
              回答ファーストのコンテンツ設計が、AI に「引用に値する」と判断させる鍵になります。これが AIO の核心です。
            </p>
            <p>
              AJARA が開発した <strong style={{ color: "#1B2340" }}>aioru</strong> は、この AIO 対応度を URL 入力だけで即座にスコアリングする無料ツールです。
              19 項目で現状を可視化し、競合に差をつけるための最初の一歩を提供します。
            </p>
            <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(91,164,245,0.12)", display: "flex", justifyContent: "center" }}>
              <a
                href="https://aioru.net"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 22px",
                  borderRadius: "999px",
                  background: BRAND,
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(91,164,245,0.35)",
                }}
              >
                aioru で今すぐ診断する
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Insights ────────────────────────────────────── */}
      <section id="blog" style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8A97C0",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Insights
          </p>
          <h2 style={{ fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: "#1B2340", textAlign: "center", marginBottom: "36px", letterSpacing: "-0.3px" }}>
            AIO を深く知る
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                slug: "ai-search-growth",
                tag: "市場動向",
                date: "2026年6月",
                readTime: "5分",
                title: "生成AI検索の急成長——ChatGPT・Perplexity が変えた「検索」の定義",
                excerpt: "検索行動の変化とAI引用の仕組みを解説。SEOだけでは不十分な理由と、AIOが必要な背景をデータで示します。",
              },
              {
                slug: "structured-data-and-ai",
                tag: "技術解説",
                date: "2026年5月",
                readTime: "6分",
                title: "構造化データとAI引用率の関係——Schema.org 実装がもたらす可視性の差",
                excerpt: "FAQPage・Organization・Article スキーマの実装が生成AI検索での引用確率を高める仕組みを技術的に解説します。",
              },
              {
                slug: "eeat-and-ai-citation",
                tag: "SEO × AIO",
                date: "2026年4月",
                readTime: "7分",
                title: "E-E-A-T と AI引用率——Googleの品質評価基準が生成AI検索を支配する理由",
                excerpt: "E-E-A-Tシグナルが生成AI検索にも影響する理由と、Authority を高めるコンテンツ戦略を解説します。",
              },
            ].map((a) => (
              <a
                key={a.slug}
                href={`/aioru/blog/${a.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#F4F5FB",
                    border: "1px solid rgba(91,164,245,0.12)",
                    borderRadius: "16px",
                    padding: "24px 28px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(91,164,245,0.3)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(91,164,245,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(91,164,245,0.12)";
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
                        background: BRAND_SOFT,
                        color: "#6C5CE7",
                      }}
                    >
                      {a.tag}
                    </span>
                    <span style={{ fontSize: "12px", color: "#8A97C0" }}>{a.date}</span>
                    <span style={{ fontSize: "12px", color: "#8A97C0" }}>· 読了 {a.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1B2340", marginBottom: "8px", lineHeight: 1.45, letterSpacing: "-0.2px" }}>
                    {a.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#4A5568", lineHeight: 1.7 }}>{a.excerpt}</p>
                  <p style={{ fontSize: "13px", marginTop: "12px", color: "#5BA4F5", fontWeight: 500 }}>続きを読む →</p>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <a href="/aioru/blog" style={{ fontSize: "14px", color: "#4A5568", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              インサイト一覧を見る →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8A97C0",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            FAQ
          </p>
          <h2 style={{ fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: "#1B2340", textAlign: "center", marginBottom: "36px", letterSpacing: "-0.3px" }}>
            よくある質問
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            borderRadius: "24px",
            padding: "56px 48px",
            textAlign: "center",
            background: BRAND_SOFT,
            border: "1px solid rgba(91,164,245,0.2)",
          }}
        >
          <h2 style={{ fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: "#1B2340", marginBottom: "12px", letterSpacing: "-0.3px" }}>
            まず、現状を知ることから。
          </h2>
          <p style={{ fontSize: "14px", color: "#4A5568", marginBottom: "32px", lineHeight: 1.7 }}>
            aioru の無料診断でスコアを確認。改善が必要なら AJARA にご相談ください。
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }} className="sm:flex-row sm:justify-center">
            <a
              href="https://aioru.net"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "13px 32px",
                borderRadius: "999px",
                background: BRAND,
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(91,164,245,0.35)",
              }}
            >
              aioru で無料診断する
            </a>
            <a
              href="mailto:contact@ajara.co.jp"
              style={{
                display: "inline-block",
                padding: "13px 32px",
                borderRadius: "999px",
                border: "1px solid rgba(91,164,245,0.3)",
                color: "#4A5568",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              有償コンサルのご相談 →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer
        style={{
          padding: "28px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(91,164,245,0.1)",
        }}
      >
        <p style={{ fontSize: "12px", color: "#8A97C0" }}>
          aioru — by{" "}
          <Link href="https://ajara.co.jp" style={{ color: "#6C5CE7", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            AJARA
          </Link>
        </p>
      </footer>
    </div>
  );
}

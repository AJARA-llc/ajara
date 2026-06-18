"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HintlNavigation from "@/components/HintlNavigation";

const BRAND = "linear-gradient(135deg, #0066ff, #00c4b4)";
const BRAND_SOFT = "linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,196,180,0.1))";
const SURFACE = "#F4F5FB";
const TEXT = "#1B2340";
const MUTED = "#4A5568";
const ACCENT = "#0066ff";

const FEATURES = [
  {
    title: "AI × エビデンス",
    desc: "感覚や経験則ではなく、エビデンスに基づいた回答を提供。「なぜそうするのか」が理解できるアドバイスです。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    title: "20以上のジャンル",
    desc: "キャリア・お金・恋愛・メンタル・睡眠・美容など、人生の悩みを幅広くカバー。あなたの課題に特化したアドバイザーが伴走します。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    title: "パーソナライズ診断",
    desc: "6 つの質問に答えるだけで、あなたに最適なアドバイザーを無料で提案。迷わずすぐに始められます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
  {
    title: "手軽な料金設計",
    desc: "¥980/月/ジャンル。AIアドバイザー 1 名指名込みのシンプルプラン。まず 3 メッセージを無料で試せます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
  },
];

const GENRES = [
  "キャリア・転職", "お金・節約", "投資", "恋愛・人間関係",
  "メンタルヘルス", "ストレス・疲労回復", "育児・子育て", "人生設計",
  "睡眠改善", "ダイエット・食事", "美容・スキンケア", "腸活",
];

const STEPS = [
  { num: "01", title: "AI 診断を受ける", desc: "6 つの質問に答えるだけ。あなたに合ったアドバイザーを無料で提案します。" },
  { num: "02", title: "アドバイザーを指名", desc: "提案された中から気に入ったアドバイザーを選び、チャットを開始。" },
  { num: "03", title: "毎日の相談へ", desc: "テキストで気軽に相談。回答はエビデンスをベースに、あなた向けにパーソナライズされます。" },
];

const FAQS = [
  {
    q: "hintl はどんなサービスですか？",
    a: "キャリア・お金・人間関係・メンタル・睡眠・美容など20以上のジャンルで、AI × エビデンスに基づく人生コーチングを提供するプラットフォームです。「どう生きるか」を一緒に考えるパーソナルアドバイザーが、いつでも伴走します。",
  },
  {
    q: "無料で試せますか？",
    a: "はい。登録後、各アドバイザーに対して 3 メッセージまで無料でやり取りできます。使い心地を確かめてから有料プランへの移行をご検討ください。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "¥980/月/ジャンルでご利用いただけます。AIアドバイザー 1 名まで指名込みのシンプルな料金体系です。複数ジャンルを利用する場合はジャンルごとの契約となります。",
  },
  {
    q: "医療相談や法律相談もできますか？",
    a: "hintl は医療・法律の専門的な診断や代替を行うサービスではなく、日々の意思決定や行動変容をサポートするライフコーチングサービスです。医療・法律に関わる深刻なお悩みは、必ず専門家にご相談ください。",
  },
  {
    q: "AJARA との関係は？",
    a: "hintl は AJARA が開発・運営するプロダクトです。AI エンジンの設計・エビデンスデータベースの構築・プラットフォーム開発まで、AJARA が一貫して手がけています。",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "#ffffff",
        border: open ? "1px solid rgba(0,102,255,0.3)" : "1px solid rgba(0,102,255,0.1)",
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
        <span style={{ fontSize: "15px", fontWeight: 500, color: TEXT }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            flexShrink: 0,
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "1px solid rgba(0,102,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            lineHeight: 1,
            color: ACCENT,
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
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                padding: "0 24px 20px",
                fontSize: "14px",
                color: MUTED,
                lineHeight: 1.8,
                borderTop: "1px solid rgba(0,102,255,0.06)",
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
  const font = '-apple-system,"Inter","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif';

  return (
    <div style={{ background: "#ffffff", color: TEXT, minHeight: "100vh", fontFamily: font }}>
      <HintlNavigation />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="px-6"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 25% 50%, rgba(0,102,255,0.06) 0%, transparent 60%)," +
              "radial-gradient(ellipse at 75% 50%, rgba(0,196,180,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A97C0", marginBottom: "20px" }}>
            AJARA Product — ライフコーチング
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
              fontSize: "clamp(32px,5vw,54px)",
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.2,
              letterSpacing: "-1px",
              marginBottom: "20px",
            }}
          >
            来た時より、
            <br />
            <span style={{ background: BRAND, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              少しだけいい人生を。
            </span>
          </h1>

          <p style={{ fontSize: "18px", color: MUTED, lineHeight: 1.7, marginBottom: "40px", maxWidth: "520px", margin: "0 auto 40px" }}>
            AI × エビデンスで、あなたの人生を伴走する<br />
            パーソナルコーチングプラットフォーム。
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "60px" }}>
            <a
              href="https://hintl.jp"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "14px 36px",
                borderRadius: "999px",
                background: BRAND,
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(0,102,255,0.3)",
              }}
            >
              無料で診断する
            </a>
            <a
              href="#features"
              style={{ fontSize: "14px", color: MUTED, textDecoration: "underline", textUnderlineOffset: "4px" }}
            >
              サービス詳細を見る →
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "48px" }}>
            {[
              { value: "20+", label: "対応ジャンル" },
              { value: "¥980〜", label: "/月/ジャンル" },
              { value: "3通", label: "無料メッセージ" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "28px", fontWeight: 800, background: BRAND, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "4px" }}>
                  {stat.value}
                </p>
                <p style={{ fontSize: "12px", color: "#8A97C0" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────── */}
      <section id="features" style={{ padding: "80px 0", background: SURFACE }} className="px-6">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A97C0", marginBottom: "10px" }}>Features</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 800, color: TEXT, letterSpacing: "-0.5px", marginBottom: "12px" }}>
              hintl が選ばれる理由
            </h2>
            <p style={{ fontSize: "15px", color: MUTED }}>感覚ではなく根拠のあるアドバイスを、手軽に・継続的に。</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,102,255,0.1)",
                  borderRadius: "20px",
                  padding: "28px 24px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,196,180,0.1))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    color: ACCENT,
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Genres ────────────────────────────────────────────── */}
      <section id="genres" style={{ padding: "80px 0" }} className="px-6">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A97C0", marginBottom: "10px" }}>Genres</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 800, color: TEXT, letterSpacing: "-0.5px", marginBottom: "12px" }}>
            あなたの悩みに、専門の AI を。
          </h2>
          <p style={{ fontSize: "15px", color: MUTED, marginBottom: "40px" }}>
            20 以上のジャンルから、今の自分に合ったアドバイザーを選べます。
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {GENRES.map((genre) => (
              <span
                key={genre}
                style={{
                  fontSize: "14px",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(0,102,255,0.15)",
                  color: MUTED,
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
      <section id="how" style={{ padding: "80px 0", background: SURFACE }} className="px-6">
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A97C0", marginBottom: "10px" }}>How it works</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 800, color: TEXT, letterSpacing: "-0.5px" }}>
              3 ステップではじめる
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {STEPS.map((step) => (
              <div
                key={step.num}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,102,255,0.1)",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "32px", fontWeight: 800, marginBottom: "12px", background: BRAND, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: 0.4 }}>
                  {step.num}
                </p>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.8 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AJARA Column ──────────────────────────────────────── */}
      <section id="column" style={{ padding: "80px 24px" }}>
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
            なぜ今、「エビデンスベースのAIコーチング」が求められるのか
          </h2>
          <p style={{ fontSize: "12px", color: "#8A97C0", textAlign: "center", marginBottom: "40px" }}>
            2025年 — AJARA編集部
          </p>

          <div
            style={{
              background: SURFACE,
              border: "1px solid rgba(0,102,255,0.12)",
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
              人生の岐路に立つ時、誰もが「正解」を探します。転職すべきか、投資を始めるべきか、
              ダイエット法はどれが正しいのか——情報は溢れていますが、「根拠あるアドバイス」は意外と少ないのが現実です。
            </p>
            <p>
              問題は情報の量ではなく、<strong style={{ color: "#1B2340" }}>「信頼性」と「パーソナライズ」</strong>の欠如です。
              SNS を流れる体験談や感覚論は、あなたの状況に当てはまらないことが多く、
              専門家へのアクセスはコストや時間の壁がある。
            </p>
            <p>
              hintl が採用するのは、心理学・医学・行動経済学の学術研究に裏打ちされたエビデンスベースのアプローチです。
              認知行動療法（CBT）・行動変容ステージモデル・プロスペクト理論——各ジャンルの専門知識を AI に統合し、
              「なぜそうするのか」が理解できるアドバイスを継続的に届けます。
            </p>
            <p>
              AJARA が開発した <strong style={{ color: "#1B2340" }}>hintl</strong> は、このアプローチを ¥980/月という手軽な価格で実現するパーソナルコーチングプラットフォームです。
              まず 3 メッセージ無料でお試しいただけます。
            </p>
            <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(0,102,255,0.1)", display: "flex", justifyContent: "center" }}>
              <a
                href="https://hintl.jp"
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
                  boxShadow: "0 2px 12px rgba(0,102,255,0.3)",
                }}
              >
                hintl で今すぐ試す
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Insights ─────────────────────────────────────── */}
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
                  style={{
                    background: SURFACE,
                    border: "1px solid rgba(0,102,255,0.12)",
                    borderRadius: "16px",
                    padding: "24px 28px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,102,255,0.3)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(0,102,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,102,255,0.12)";
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
                        color: "#0066ff",
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
                  <p style={{ fontSize: "13px", marginTop: "12px", color: "#0066ff", fontWeight: 500 }}>続きを読む →</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <Link href="/hintl/blog" style={{ fontSize: "14px", color: "#4A5568", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              インサイト一覧を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "80px 0" }} className="px-6">
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A97C0", marginBottom: "10px" }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 800, color: TEXT, letterSpacing: "-0.5px" }}>
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
      <section style={{ padding: "0 24px 80px" }}>
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            borderRadius: "24px",
            padding: "56px 48px",
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
            style={{ height: "72px", width: "auto", objectFit: "contain", margin: "0 auto 20px" }}
          />
          <h2 style={{ fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: TEXT, letterSpacing: "-0.3px", marginBottom: "12px" }}>
            まず、3 メッセージ試してみる。
          </h2>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, marginBottom: "32px" }}>
            登録後すぐに試せます。6 つの質問に答えるだけで、<br />
            あなたに合ったアドバイザーを無料で提案します。
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }} className="sm:flex-row sm:justify-center">
            <a
              href="https://hintl.jp"
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
                boxShadow: "0 4px 20px rgba(0,102,255,0.3)",
              }}
            >
              hintl.jp でいますぐ試す
            </a>
            <a
              href="mailto:contact@ajara.co.jp"
              style={{
                display: "inline-block",
                padding: "13px 32px",
                borderRadius: "999px",
                border: "1px solid rgba(0,102,255,0.25)",
                color: MUTED,
                fontSize: "14px",
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
        style={{
          padding: "28px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(0,102,255,0.08)",
        }}
      >
        <p style={{ fontSize: "12px", color: "#8A97C0" }}>
          hintl — by{" "}
          <Link href="https://ajara.co.jp" style={{ color: "#0066ff", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            AJARA
          </Link>
        </p>
      </footer>
    </div>
  );
}

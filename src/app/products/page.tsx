"use client";

import { motion } from "framer-motion";
import LPNavigation from "@/components/LPNavigation";
import FadeInSection from "@/components/FadeInSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const products = [
  {
    name: "Hintl",
    subtitle: "AI-Powered Influencer Monetization Platform",
    description:
      "インフルエンサーが紹介商品をチャンネルに掲載し、ファンの購買を通じて収益化できるプラットフォーム。Amazon・楽天などの主要 EC と連携し、フォロワー数に関わらず信頼を収益に変えます。",
    status: "公開中",
    statusColor: "bg-emerald-500/20 text-emerald-400",
    tags: ["InfluencerTech", "EC連携", "Monetization"],
    features: [
      "Amazon・楽天など EC 5サイト対応",
      "インフルエンサー向けチャンネルページ",
      "アフィリエイト報酬の自動管理",
      "AI 時代の発見エンジン対応設計",
    ],
    link: "https://hintl.jp",
    gradient: "from-blue-900/20 to-cyan-900/10",
  },
  {
    name: "aioru",
    subtitle: "AI Search Optimization Diagnostic Tool",
    description:
      "URLを入力するだけで、生成AI検索（ChatGPT・Perplexity・Google AI）への最適化スコアを19項目で即診断。AIO対応の課題を可視化し、競合に差をつける改善ロードマップを提供します。",
    status: "公開中",
    statusColor: "bg-emerald-500/20 text-emerald-400",
    tags: ["AIO", "SEO", "AI診断"],
    features: [
      "19項目のAIO診断スコアリング",
      "技術実装・コンテンツ・パフォーマンス評価",
      "改善ヒントのレポート出力",
      "無料で即時診断",
    ],
    link: "https://aioru.net",
    gradient: "from-orange-900/20 to-red-900/10",
  },
  {
    name: "AEGIS OSS",
    subtitle: "Open Source AI Agent Framework",
    description:
      "マルチAIエージェント組織を構築するオープンソースフレームワーク。CEO・CTO・CFOなど役割を持ったエージェントが協調して複雑なタスクを実行します。",
    status: "公開中",
    statusColor: "bg-emerald-500/20 text-emerald-400",
    tags: ["OSS", "AI Agent", "Multi-Agent"],
    features: [
      "役割ベースのAIエージェント設計",
      "Claude・GPT・Gemini マルチLLM対応",
      "エージェント間の非同期協調",
      "プロダクト/セキュリティ/コンテンツ org 標準実装",
    ],
    link: "https://github.com/ajara-llc",
    gradient: "from-violet-900/20 to-purple-900/10",
  },
];

const stats = [
  { value: "3+", label: "プロダクト公開中" },
  { value: "2026", label: "設立年" },
  { value: "AI-first", label: "開発思想" },
];

export default function ProductsPage() {
  return (
    <>
      <ScrollProgress />
      <LPNavigation ctaLabel="プロダクト相談" ctaHref="#contact" />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 60% 40%, #E8600A 0%, transparent 45%), radial-gradient(circle at 30% 70%, #1E3A5F 0%, transparent 40%)",
            }}
          />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-accent text-sm tracking-[0.2em] uppercase font-sans mb-6"
            >
              Products — AJARA
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-snow leading-tight mb-6"
            >
              アイデアを、
              <br />
              <span className="text-accent">プロダクトに変える。</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-slate-400 text-lg sm:text-xl mb-4"
            >
              ItoB — Idea to Business.
              <br className="hidden sm:block" />
              遊び心が誠になる、プロダクトたち。
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-slate-500 text-sm max-w-xl mx-auto mb-12 leading-relaxed"
            >
              AIの力で、常識を問い直す。
              AJARAが開発・運営するプロダクト群をご紹介します。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-center justify-center gap-12"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-accent/60" />
            </motion.div>
          </motion.div>
        </section>

        <div className="section-divider" />

        {/* Products */}
        <section id="products" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Our Products
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                開発・リリース済プロダクト
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
                それぞれが独立した事業として成長を目指しています。
              </p>
            </FadeInSection>

            <div className="space-y-8">
              {products.map((product, i) => (
                <FadeInSection key={product.name} delay={i * 0.1}>
                  <div className={`glass p-8 bg-gradient-to-br ${product.gradient} hover:border-accent/30 transition-all duration-300`}>
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-snow">
                            {product.name}
                          </h3>
                          <span className={`text-xs px-3 py-1 rounded-full ${product.statusColor}`}>
                            {product.status}
                          </span>
                        </div>
                        <p className="text-accent/70 text-sm tracking-wider mb-4">{product.subtitle}</p>
                        <p className="text-slate-400 leading-relaxed mb-6">{product.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {product.link && (
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
                          >
                            サービスを見る
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                            </svg>
                          </a>
                        )}
                      </div>

                      <div className="md:w-64 flex-shrink-0">
                        <p className="text-xs text-slate-500 tracking-wider uppercase mb-3">主な機能</p>
                        <ul className="space-y-2">
                          {product.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-slate-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0 mt-1.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Contact / CTA */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
                Contact
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow mb-4">
                プロダクト活用・連携のご相談
              </h2>
              <p className="text-slate-400 mb-12 max-w-lg mx-auto">
                導入・連携・共同開発のご相談はお気軽に。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@ajara.co.jp"
                  className="bg-accent hover:bg-accent-light text-navy-dark font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
                >
                  contact@ajara.co.jp
                </a>
                <a
                  href="/"
                  className="text-slate-400 hover:text-snow text-sm transition-colors underline underline-offset-4"
                >
                  会社概要を見る →
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

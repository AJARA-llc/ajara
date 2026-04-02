"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const achievements = [
  {
    category: "自社サービス",
    title: "Hintl",
    subtitle: "AI-Powered Health Evidence Platform",
    description:
      "PubMedの査読済み論文をAIが分析し、エビデンスに基づいた信頼性の高い健康情報を届けるプラットフォーム。第一弾は「腸活」をテーマに、AIアドバイザーへの相談・診断クイズ・匿名コミュニティなど多機能を展開中。",
    metrics: [
      { value: "PubMed", label: "論文データベース" },
      { value: "Claude AI", label: "分析エンジン" },
      { value: "腸活", label: "第一弾テーマ" },
    ],
    tags: ["Evidence-Based", "Health Tech", "AI-Powered", "Claude API", "コミュニティ"],
    gradient: "from-accent/20 to-transparent",
    href: "https://hintl.net",
  },
  {
    category: "自社開発",
    title: "AEGIS",
    subtitle: "Autonomous Enterprise Governance & Intelligence System",
    description:
      "50以上のAIエージェントが6つの組織ユニットで連携する自律型ガバナンスシステム。戦略立案・実装・品質管理・セキュリティ審査まで全工程をAIが自律実行します。私たち自身の開発プロセスで日常的に運用中です。",
    metrics: [
      { value: "50+", label: "AI Agents" },
      { value: "6", label: "組織ユニット" },
      { value: "全工程", label: "対応範囲" },
    ],
    tags: ["Multi-Agent System", "Autonomous Governance", "Constitutional AI", "Self-Operated"],
    gradient: "from-slate-400/15 to-transparent",
    href: undefined,
  },
  {
    category: "開発手法",
    title: "少数精鋭 × AI開発",
    subtitle: "AI-Augmented Development Methodology",
    description:
      "1人のエンジニアとAIエージェント組織が協働し、通常の大規模チームに匹敵する開発を実現。仮説検証型のアプローチとAIによる分析・コードレビュー・品質管理の自動化で、スピードと品質を両立しています。",
    metrics: [
      { value: "1人", label: "エンジニア" },
      { value: "50+", label: "AIエージェント" },
      { value: "全工程", label: "AI活用範囲" },
    ],
    tags: ["Remote-First", "AI-Augmented", "Hypothesis-Driven", "Async Communication"],
    gradient: "from-slate-500/10 to-transparent",
    href: undefined,
  },
];

const supporters: { name: string; type: string; description: string }[] = [];

export default function ProductsSection() {
  return (
    <section id="achievements" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
            Products & Achievements
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow mb-4">
            プロダクト・実績
          </h2>
          <p className="text-slate-400 mb-16 max-w-2xl">
            自ら課題に向き合い、解決するためのサービスとシステムを構築しています。
            この実践が、クライアントへの提供価値の基盤です。
          </p>
        </FadeInSection>

        <div className="space-y-8">
          {achievements.map((item, i) => (
            <FadeInSection key={item.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass p-8 sm:p-10 relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block text-xs text-accent/80 border border-accent/20 rounded-full px-3 py-1 mb-4">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <h3 className="font-sans text-2xl sm:text-3xl font-bold text-snow">
                        {item.title}
                      </h3>
                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent/60 hover:text-accent transition-colors"
                          aria-label={`${item.title} サイトへ`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
                  {item.description}
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl font-bold text-accent mb-1 font-sans">
                        {metric.value}
                      </p>
                      <p className="text-slate-500 text-xs tracking-wider uppercase">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-500 bg-white/[0.03] rounded-md px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {supporters.length > 0 && (
          <FadeInSection delay={0.25}>
            <div className="mt-16 mb-8">
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
                Supported Partners
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-snow mb-4">
                サポート企業・自治体
              </h3>
              <p className="text-slate-400 mb-8 max-w-2xl text-sm">
                私たちの技術と伴走型サポートで、地域・企業のデジタル変革を支援しています。
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {supporters.map((s) => (
                  <div key={s.name} className="glass p-6 group transition-all duration-300 hover:translate-y-[-2px]">
                    <span className="inline-block text-xs text-accent/70 border border-accent/20 rounded-full px-3 py-1 mb-3">
                      {s.type}
                    </span>
                    <h4 className="font-sans text-lg font-medium text-snow mb-2">{s.name}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                  </div>
                ))}
                <div className="glass p-6 border-dashed border-white/10 flex flex-col items-center justify-center text-center min-h-[120px]">
                  <p className="text-slate-600 text-sm">掲載希望の方は</p>
                  <a href="#contact" className="text-accent/70 hover:text-accent text-sm mt-1 transition-colors">
                    お問い合わせください →
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        )}

        <FadeInSection delay={0.3}>
          <div className="glass p-8 mt-8">
            <h4 className="font-serif text-lg text-snow mb-4">
              この技術力を、貴社のプロジェクトに
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              AEGISの開発で培ったマルチエージェント設計と、AI駆動型開発手法の知見を、
              クライアントプロジェクトに直接活用しています。
              「自分たちが使うもの」を作り続けることで、技術力は常にアップデートされています。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors group"
            >
              <span>まずはお気軽にご相談ください</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

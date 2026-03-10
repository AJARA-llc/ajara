"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const achievements = [
  {
    category: "自社開発",
    title: "AEGIS",
    subtitle: "AI Agent Organizational Framework",
    description:
      "CEO・CTO・CFOなど24のAIエージェントが連携する多層型意思決定システム。分析・設計・実装・品質管理を自律的に実行し、プロダクト開発を加速します。私たち自身の開発プロセスで日常的に運用中です。",
    metrics: [
      { value: "24", label: "AI Agents" },
      { value: "6", label: "組織ユニット" },
      { value: "4", label: "対応工程" },
    ],
    tags: ["Multi-Agent System", "Autonomous Decision Making", "Quality Assurance", "Strategic Analysis"],
    gradient: "from-accent/20 to-transparent",
  },
  {
    category: "開発手法",
    title: "少数精鋭 × AI開発",
    subtitle: "AI-Augmented Development Methodology",
    description:
      "2人のエンジニアとAIエージェント組織が協働し、通常の大規模チームに匹敵する開発を実現。仮説検証型のアプローチとAIによる分析・コードレビュー・品質管理の自動化で、スピードと品質を両立しています。",
    metrics: [
      { value: "2人", label: "エンジニア" },
      { value: "24", label: "AIエージェント" },
      { value: "全工程", label: "AI活用範囲" },
    ],
    tags: ["Remote-First", "AI-Augmented", "Hypothesis-Driven", "Async Communication"],
    gradient: "from-slate-500/10 to-transparent",
  },
];

export default function ProductsSection() {
  return (
    <section id="achievements" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
            Achievements
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow mb-4">
            実績
          </h2>
          <p className="text-slate-400 mb-16 max-w-2xl">
            自ら課題に向き合い、解決するためのシステムと手法を構築しています。
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
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-snow">
                      {item.title}
                    </h3>
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

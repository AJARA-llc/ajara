"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const capabilities = [
  { label: "AIエージェント", value: "24" },
  { label: "組織ユニット", value: "6" },
  { label: "対応領域", value: "分析・設計・実装・品質管理" },
];

export default function ProductsSection() {
  return (
    <section id="case-study" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
            Case Study
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow mb-4">
            自社開発が証明する技術力
          </h2>
          <p className="text-slate-400 mb-16 max-w-2xl">
            私たちは自ら課題に向き合い、解決するためのシステムを構築しています。
            この実践が、クライアントへの提供価値の基盤です。
          </p>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="glass p-8 sm:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/20 to-transparent" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <span className="inline-block text-xs text-accent/80 border border-accent/20 rounded-full px-3 py-1 mb-4">
                  自社プロダクト
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-snow">
                  AEGIS
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  AI Agent Organizational Framework
                </p>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-600 group-hover:text-accent transition-colors shrink-0 mt-2"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>

            <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
              CEO・CTO・CFOなど24のAIエージェントが連携する多層型意思決定システム。
              分析・設計・実装・品質管理を自律的に実行し、プロダクト開発を加速します。
              このフレームワークは、私たち自身の開発プロセスで日常的に使用しています。
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {capabilities.map((cap) => (
                <div key={cap.label} className="text-center sm:text-left">
                  <p className="text-2xl font-bold text-accent mb-1 font-sans">
                    {cap.value}
                  </p>
                  <p className="text-slate-500 text-xs tracking-wider uppercase">
                    {cap.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Multi-Agent System",
                "Autonomous Decision Making",
                "Quality Assurance",
                "Strategic Analysis",
              ].map((tag) => (
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

        <FadeInSection delay={0.3}>
          <div className="glass p-8 mt-8">
            <h4 className="font-serif text-lg text-snow mb-4">
              この技術が、貴社のプロジェクトでも活きます
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              AEGISの開発で培ったマルチエージェント設計、自律型AI、品質管理の知見を、
              クライアントプロジェクトに直接活用しています。
              「自分たちが使うもの」を作り続けることで、技術力は常にアップデートされています。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors group"
            >
              <span>同じ技術力を貴社のプロジェクトに</span>
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

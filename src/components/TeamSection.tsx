"use client";

import FadeInSection from "./FadeInSection";

export default function TeamSection() {
  return (
    <section id="team" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
            Team
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow mb-4">
            少数精鋭 × AI
          </h2>
          <p className="text-slate-400 mb-16 max-w-lg">
            経験豊富なエンジニアがAIエージェントを活用し、
            少人数でも高い生産性と品質を実現します。
          </p>
        </FadeInSection>

        {/* Founders */}
        <div className="grid sm:grid-cols-2 gap-8 mb-8">
          <FadeInSection delay={0.1}>
            <div className="glass p-8 text-center group transition-all duration-300 hover:translate-y-[-4px]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-serif text-accent">平</span>
              </div>
              <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">
                共同代表
              </p>
              <h3 className="font-sans text-lg font-medium text-snow mb-2">
                Takuya Hirata
              </h3>
              <p className="text-slate-500 text-sm font-serif mb-4">平田 拓也</p>
              <p className="text-slate-500 text-xs leading-relaxed text-left">
                AEGIS OS開発を主導し、そのシステムを駆使した自社サービスの発想・開発・運用まで一貫して担当。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="glass p-8 text-center group transition-all duration-300 hover:translate-y-[-4px]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-serif text-accent">本</span>
              </div>
              <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">
                共同代表
              </p>
              <h3 className="font-sans text-lg font-medium text-snow mb-2">
                Keisuke Motoishi
              </h3>
              <p className="text-slate-500 text-sm font-serif mb-4">本石 啓介</p>
              <p className="text-slate-500 text-xs leading-relaxed text-left">
                リアルの現場に根ざした営業・マーケティングを統括。パートナーシップと事業成長を牽引。
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* AI as Infrastructure */}
        <FadeInSection delay={0.3}>
          <div className="glass p-8 transition-all duration-300">
            <h3 className="font-sans text-lg font-medium text-snow mb-4 text-center">
              開発基盤 — AEGIS
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed text-center max-w-md mx-auto mb-6">
              50以上のAIエージェントによる分析・設計・実装・品質管理の自動化基盤。
              少人数でも大規模な開発を可能にする、私たちの競争優位の源泉です。
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { label: "AI Agents", value: "50+" },
                { label: "組織ユニット", value: "6" },
                { label: "対応工程", value: "全工程" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-accent mb-1 font-sans">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-xs tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

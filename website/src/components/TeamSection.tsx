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
            仲間
          </h2>
          <p className="text-slate-400 mb-16 max-w-lg">
            人間とAIエージェントが協働する、小さくて強いチーム。
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
                CEO
              </p>
              <h3 className="font-sans text-lg font-medium text-snow mb-2">
                Takuya Hirata
              </h3>
              <p className="text-slate-500 text-sm font-serif">平田 拓也</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="glass p-8 text-center group transition-all duration-300 hover:translate-y-[-4px]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-serif text-accent">本</span>
              </div>
              <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">
                COO
              </p>
              <h3 className="font-sans text-lg font-medium text-snow mb-2">
                Keisuke Motoishi
              </h3>
              <p className="text-slate-500 text-sm font-serif">本石 啓介</p>
            </div>
          </FadeInSection>
        </div>

        {/* AI Agents */}
        <FadeInSection delay={0.3}>
          <div className="glass p-8 text-center group transition-all duration-300 hover:translate-y-[-4px]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 mx-auto mb-5 flex items-center justify-center">
              <span className="text-xl font-serif text-accent">智</span>
            </div>
            <h3 className="font-sans text-lg font-medium text-snow mb-2">
              AI Agents — AEGIS
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
              24のAIエージェントが分析・設計・実装・品質管理を担当。
              戯れを誠にする加速装置。
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="mt-16 glass p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { label: "AI Agents", value: "24" },
                { label: "Organizations", value: "6" },
                { label: "Philosophy", value: "EDO" },
                { label: "Technology", value: "AI" },
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

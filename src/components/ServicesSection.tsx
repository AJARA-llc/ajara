"use client";

import FadeInSection from "./FadeInSection";

const services = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E8600A"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "AIエージェントシステム開発",
    subtitle: "AI Agent System Development",
    description:
      "貴社の業務に最適化されたAIエージェントを設計・開発します。単なるチャットボットではなく、分析・判断・実行を自律的に行うマルチエージェントシステムを構築します。",
    features: ["マルチエージェント設計", "業務プロセス自動化", "意思決定支援システム"],
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E8600A"
        strokeWidth="2"
      >
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "ラピッドプロトタイピング",
    subtitle: "Rapid Prototyping",
    description:
      "アイデアを最短で形にします。仮説検証型のアプローチで、小さく素早くプロトタイプを構築し、市場フィードバックをもとに改善を繰り返します。",
    features: ["MVP開発・仮説検証", "ユーザーフィードバック分析", "反復的な改善サイクル"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
            Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
            貴社の課題を、AIと共に解決する
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            実験的なアプローチと最新のAI技術を組み合わせ、
            従来の手法では実現できなかった課題解決を提供します。
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeInSection key={service.subtitle} delay={i * 0.1}>
              <div className="glass p-8 h-full group transition-all duration-300 hover:translate-y-[-4px]">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl text-snow mb-1">
                  {service.title}
                </h3>
                <p className="text-accent/60 text-xs mb-4 tracking-wider">
                  {service.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-slate-500 text-sm"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#E8600A"
                        strokeWidth="2"
                        className="shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-navy-dark font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
            >
              サービスについて相談する
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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

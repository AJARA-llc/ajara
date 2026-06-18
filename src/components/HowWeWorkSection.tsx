"use client";

import FadeInSection from "./FadeInSection";

const steps = [
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
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "課題の深掘り",
    subtitle: "Discovery",
    description:
      "貴社のビジネス課題をヒアリングし、AI適用の可能性を評価。本質的な課題を特定します。",
    number: "01",
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
    title: "仮説設計・プロトタイプ",
    subtitle: "Prototype",
    description:
      "小さく素早くプロトタイプを構築。仮説を立て、最小限のコストで検証可能な形にします。",
    number: "02",
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
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "検証・改善",
    subtitle: "Validate & Iterate",
    description:
      "実際のデータとフィードバックをもとに検証。効果を測定し、反復的に改善を重ねます。",
    number: "03",
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
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "本番展開・運用",
    subtitle: "Deploy & Scale",
    description:
      "検証済みのソリューションを本番環境に展開。運用支援とスケーリングまでサポートします。",
    number: "04",
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="process" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
            Process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
            仮説検証型の開発プロセス
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            小さく試し、速く学ぶ。実験的アプローチで確実に成果を積み上げます。
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeInSection key={step.number} delay={i * 0.1}>
              <div className="glass p-6 h-full group transition-all duration-300 hover:translate-y-[-4px]">
                <span className="text-5xl font-bold text-white/[0.03] font-sans block mb-4 group-hover:text-accent/10 transition-colors">
                  {step.number}
                </span>
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-serif text-lg text-snow mb-1">
                  {step.title}
                </h3>
                <p className="text-accent/60 text-xs mb-3 tracking-wider">
                  {step.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

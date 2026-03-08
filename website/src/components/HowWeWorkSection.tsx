"use client";

import FadeInSection from "./FadeInSection";

const values = [
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
    title: "実験主義",
    subtitle: "Experimentalism",
    description: "小さく試し、速く学ぶ。すべては戯れから始まる。",
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
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "利益は次の挑戦の燃料",
    subtitle: "Fuel for the Next Challenge",
    description:
      "利益は終点ではない。次の実験と成長を生むためのエネルギー。",
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
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "生活の豊かさを大切にする",
    subtitle: "Enriching Lives",
    description:
      "会社の成長は、仲間の生活の豊かさと共にある。",
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
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "遊び心を忘れない",
    subtitle: "Never Lose Playfulness",
    description: "革新は余白から生まれる。",
    number: "04",
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
            Values
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
            私たちの価値観
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-lg mx-auto">
            小さな戯れから価値を生み、利益を生み、その利益によって仲間と社会の生活をより豊かにする。
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <FadeInSection key={value.number} delay={i * 0.1}>
              <div className="glass p-6 h-full group transition-all duration-300 hover:translate-y-[-4px]">
                <span className="text-5xl font-bold text-white/[0.03] font-sans block mb-4 group-hover:text-accent/10 transition-colors">
                  {value.number}
                </span>
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-serif text-lg text-snow mb-1">
                  {value.title}
                </h3>
                <p className="text-accent/60 text-xs mb-3 tracking-wider">
                  {value.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

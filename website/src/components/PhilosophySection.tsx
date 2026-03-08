"use client";

import FadeInSection from "./FadeInSection";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
            Philosophy
          </p>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-snow leading-tight mb-8">
            遊びの中に仕事があり、
            <br />
            仕事の中に生活がある。
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-2xl">
            「戯（あじゃら）が誠になるわいな」——
            これは江戸の言葉で、最初は遊びや冗談だったものが、やがて本物になるという意味です。
            私たちはこの精神を、現代のテクノロジーとAIによって実現します。
          </p>
        </FadeInSection>

        <div className="section-divider my-16" />

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <FadeInSection delay={0.1}>
            <div className="glass p-8 h-full transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E8600A"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3 className="text-sm text-accent tracking-[0.15em] uppercase mb-3">
                Mission
              </h3>
              <p className="font-serif text-2xl text-snow mb-4">
                戯れから価値を生み、
                <br />
                生活を豊かにする。
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                AIとテクノロジーによって小さなアイデアを実験し、社会と人々の生活を少しずつ豊かにする。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="glass p-8 h-full transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E8600A"
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-sm text-accent tracking-[0.15em] uppercase mb-3">
                Vision
              </h3>
              <p className="font-serif text-2xl text-snow mb-4">
                遊び心から
                <br />
                次の産業をつくる。
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                働くことが消耗ではなく、創造と楽しさにつながる世界をプロダクトによって実現する。
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

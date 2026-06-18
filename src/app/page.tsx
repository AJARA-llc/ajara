import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import FadeInSection from "@/components/FadeInSection";
import Footer from "@/components/Footer";

const pillars = [
  {
    name: "hintl",
    tag: "自社サービス",
    tagline: "AI × ライフコーチング",
    description:
      "キャリア・お金・人間関係・メンタルなど20+ジャンルに対応。月980円で専任AIアドバイザーがあなたの「よりよい毎日」を伴走します。",
    href: "/hintl",
    cta: "サービスを見る",
  },
  {
    name: "aioru",
    tag: "AIOコンサル",
    tagline: "AI検索最適化（AIO）",
    description:
      "ChatGPT・Perplexity・Gemini に引用される企業へ。AIOスコア診断から改善戦略・継続支援まで、AJARA が伴走します。",
    href: "/aioru",
    cta: "サービスを見る",
  },
  {
    name: "映像制作",
    tag: "クリエイティブ",
    tagline: "AI 映像制作",
    description:
      "生成AIによるブランドCM・ショート動画制作。素材ゼロから圧倒的なビジュアルクオリティを最短1週間で実現。",
    href: "/creative",
    cta: "制作事例を見る",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />

        <section id="services" className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Services
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                AJARAの3つの事業とは？
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-lg mx-auto">
                AIを核に、ライフコーチング・AIO診断ツール・AI映像制作の3分野で独自プロダクトを展開しています。
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <FadeInSection key={p.name} delay={i * 0.1}>
                  <a
                    href={p.href}
                    className="glass p-8 flex flex-col h-full group hover:border-accent/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="inline-block text-xs px-3 py-1 rounded-full border border-accent/20 text-accent/70 mb-6 font-sans self-start">
                      {p.tag}
                    </span>
                    <h3 className="font-sans text-2xl font-bold text-snow mb-1">
                      {p.name}
                    </h3>
                    <p className="text-xs tracking-wider text-slate-500 mb-4">
                      {p.tagline}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-accent mt-6 group-hover:gap-2.5 transition-all duration-200">
                      {p.cta}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </FadeInSection>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-500 text-sm mb-2">どのサービスか迷っている方は</p>
              <a
                href="#contact"
                className="text-accent hover:text-snow text-sm transition-colors underline underline-offset-4"
              >
                お気軽にご相談ください →
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Stats — crawler-readable statistics for AI citation density */}
        <section id="why-aio" className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">Data</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-snow text-center mb-4">
              なぜ今、AI検索最適化が必要なのか？
            </h2>
            <p className="text-slate-400 text-center text-sm mb-12 max-w-lg mx-auto">
              検索行動は「AIに聞く」形へ移行しています。AI検索で引用されるサイトと引用されないサイトの差は、今後さらに広がります。
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  stat: "1億人",
                  label: "ChatGPT MAU",
                  note: "公開わずか2ヶ月で到達。史上最速（UBS, 2023）",
                },
                {
                  stat: "84%",
                  label: "AI Overview 表示率",
                  note: "Google 主要クエリの84%にAI Overviewが表示（BrightEdge, 2024）",
                },
                {
                  stat: "10倍超",
                  label: "Perplexity クエリ成長",
                  note: "1年間で月間クエリ数が10倍超に成長（2023〜2024）",
                },
              ].map((item) => (
                <div key={item.label} className="glass p-6 text-center">
                  <p className="font-serif text-3xl font-bold text-accent mb-1">{item.stat}</p>
                  <p className="text-snow text-sm font-semibold mb-2">{item.label}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ — crawler-readable, AIO signal */}
        <section id="faq" className="py-24 px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">FAQ</p>
            <h2 className="font-serif text-3xl font-semibold text-snow text-center mb-12">よくある質問</h2>
            <dl className="flex flex-col gap-6">
              {[
                {
                  q: "合同会社AJARAはどのような会社ですか？",
                  a: "AI検索最適化（AIO）コンサルティング・AIライフコーチング（hintl）・AI映像制作の3事業を展開する会社です。ChatGPT・Perplexity・Google AI Overviewなど生成AI検索で引用される企業づくりを支援しています。",
                },
                {
                  q: "AIに引用されるサイトにするにはどうすればよいですか？",
                  a: "AIO（AI Index Optimization）対策として、①llms.txt の設置、②Organization・FAQPage などの構造化データ実装、③E-E-A-T シグナルの強化、④回答ファースト型コンテンツ設計の4要素が核心です。aioru の無料診断で現状スコアを確認した上で対策を進めることをお勧めします。",
                },
                {
                  q: "AJARAのサービスはどれから始めればよいですか？",
                  a: "AI検索での引用率向上を目指す企業には AIOコンサルティング（aioru）、個人のキャリア・メンタルなどライフ全般の相談には hintl、映像コンテンツ制作には AI映像制作サービスをご利用ください。迷っている方はまず無料相談をどうぞ。",
                },
                {
                  q: "問い合わせ・相談はどうすればよいですか？",
                  a: "contact@ajara.co.jp へメールにてお問い合わせください。AIOコンサル・AI映像制作・hintl法人利用など、どのサービスでもお気軽にご相談いただけます。",
                },
              ].map(({ q, a }) => (
                <div key={q} className="glass p-6">
                  <dt className="font-sans font-semibold text-snow mb-3">{q}</dt>
                  <dd className="text-slate-400 text-sm leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="section-divider" />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

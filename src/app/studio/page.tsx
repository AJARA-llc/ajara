import Navigation from "@/components/Navigation";
import FadeInSection from "@/components/FadeInSection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import StudioConsultForm from "@/components/StudioConsultForm";
import {
  studioExtraServices,
  studioFaq,
  studioPlans,
  studioPricingNotes,
} from "@/data/studio";

const features = [
  {
    title: "気軽に相談できる",
    desc: "「何から始めればいい？」の段階から相談OK。専門用語を使わず、今のあなたに合わせて一緒に考えます。",
  },
  {
    title: "自分の手で作れるようになる",
    desc: "代わりに作るのではなく、設計・技術選定・コードレビューで、あなたが作り切れるように支えます。",
  },
  {
    title: "完成・公開まで伴走",
    desc: "企画・要件整理から開発計画、公開準備まで。途中で止まりがちなところを、定期的な相談で前に進めます。",
  },
];

const buildables = [
  { title: "アプリ", desc: "スマホアプリ・Webアプリ・業務ツール" },
  { title: "ゲーム", desc: "ブラウザ・スマホ・PC向けのゲーム" },
  { title: "AIツール", desc: "生成AIを使ったサービスやチャットボット" },
  { title: "自動化", desc: "AIを使った日々の作業・業務の自動化" },
];

const audiences = [
  "アイデアはあるけれど、何から手をつければいいかわからない",
  "独学で作り始めたが、途中で行き詰まっている",
  "副業や個人開発で、アプリやゲームを公開してみたい",
  "クリエイターとして、自分の作品をゲームやアプリにしたい",
  "事業者として、新しいサービスや社内ツールを形にしたい",
];

const flow = [
  { step: "01", title: "フォームで相談内容を送る", desc: "作りたいもの・今の状況を選ぶだけ。1分ほどで終わります。" },
  { step: "02", title: "日時を予約する", desc: "空いている日時から選ぶと、オンライン相談のURL（Google Meet）が届きます。" },
  { step: "03", title: "30分の無料相談", desc: "やりたいこと・開発経験・ご予算・必要な支援の範囲をお聞きします。" },
  { step: "04", title: "プランのご提案", desc: "合う月額プラン、または個別のお見積もりをご案内します。" },
];

export default function StudioPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <span className="inline-block text-xs px-3 py-1 rounded-full border border-accent/20 text-accent/80 mb-8 font-sans">
                アプリ・ゲーム・AI開発の相談と伴走
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-snow leading-tight mb-6">
                そのアイデア、
                <br />
                一緒につくろう。
              </h1>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                アプリ・ゲーム・AI開発を、もっと身近に。初心者から個人開発者・事業者まで、気軽に相談しながらアイデアを形にできる、月額制の開発支援・個別伴走サービスです。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#consult"
                  className="bg-accent hover:bg-accent-light text-navy-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                >
                  無料で相談する（30分）
                </a>
                <a
                  href="#pricing"
                  className="px-8 py-4 rounded-full border border-white/15 text-slate-300 hover:border-white/30 hover:text-snow transition-all duration-300"
                >
                  料金を見る
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>

        <div className="section-divider" />

        {/* Features */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">Features</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-16">
                AJARA Studio の特徴
              </h2>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <FadeInSection key={f.title} delay={i * 0.1}>
                  <div className="glass p-8 h-full">
                    <p className="font-serif text-3xl text-accent mb-4">0{i + 1}</p>
                    <h3 className="text-snow font-semibold text-lg mb-3">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Buildables + audiences */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">What You Can Build</p>
              <h2 className="font-serif text-3xl font-semibold text-snow mb-10">どんなものを作れる？</h2>
              <div className="grid grid-cols-2 gap-4">
                {buildables.map((b) => (
                  <div key={b.title} className="glass p-6">
                    <h3 className="text-snow font-semibold mb-2">{b.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">For You</p>
              <h2 className="font-serif text-3xl font-semibold text-snow mb-10">こんな人におすすめ</h2>
              <ul className="space-y-3">
                {audiences.map((a) => (
                  <li key={a} className="glass px-5 py-4 flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8600A" strokeWidth="2.5" className="shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <div className="section-divider" />

        {/* Pricing */}
        <section id="pricing" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">Pricing</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">料金プラン</h2>
              <p className="text-slate-400 text-center mb-16">入会金0円。月額制で、必要な分だけ相談できます。</p>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {studioPlans.map((p, i) => (
                <FadeInSection key={p.id} delay={i * 0.1}>
                  <div
                    className={`glass relative p-8 h-full flex flex-col ${
                      p.featured ? "border-accent/50 shadow-lg shadow-accent/10" : ""
                    }`}
                  >
                    {p.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-accent text-navy-dark font-semibold whitespace-nowrap">
                        主力プラン
                      </span>
                    )}
                    <p className="text-xs tracking-widest text-slate-500 mb-2">{p.label}</p>
                    <h3 className="text-snow text-xl font-bold">{p.name}</h3>
                    <p className="text-accent/80 text-sm mb-6">{p.tagline}</p>
                    <p className="mb-6">
                      <span className="font-serif text-4xl font-bold text-snow">{p.price}</span>
                      <span className="text-slate-500 text-sm ml-1">{p.priceSuffix}</span>
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.description}</p>
                    <ul className="space-y-2.5 text-sm text-slate-300 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="text-accent shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#consult"
                      className={`mt-8 text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                        p.featured
                          ? "bg-accent hover:bg-accent-light text-navy-dark"
                          : "border border-white/15 text-slate-200 hover:border-accent/50"
                      }`}
                    >
                      無料相談で相談する
                    </a>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection>
              <div className="glass p-6 sm:p-8 mt-8">
                <h3 className="text-snow font-semibold mb-4">その他のサービス</h3>
                <dl className="grid sm:grid-cols-2 gap-4 mb-6">
                  {studioExtraServices.map((s) => (
                    <div key={s.name} className="flex justify-between gap-4 border-b border-white/5 pb-3">
                      <dt className="text-slate-300 text-sm">{s.name}</dt>
                      <dd className="text-snow text-sm font-semibold whitespace-nowrap">{s.price}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="space-y-1.5 text-slate-500 text-xs leading-relaxed">
                  {studioPricingNotes.map((n) => (
                    <li key={n}>※ {n}</li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </section>

        <div className="section-divider" />

        {/* Flow */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">Flow</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-16">
                ご利用開始までの流れ
              </h2>
            </FadeInSection>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flow.map((f, i) => (
                <FadeInSection key={f.step} delay={i * 0.1}>
                  <li className="glass p-6 h-full list-none">
                    <p className="font-serif text-2xl text-accent mb-3">{f.step}</p>
                    <h3 className="text-snow font-semibold mb-2">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </li>
                </FadeInSection>
              ))}
            </ol>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section id="faq" className="py-24 px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">FAQ</p>
            <h2 className="font-serif text-3xl font-semibold text-snow text-center mb-12">よくある質問</h2>
            <dl className="flex flex-col gap-6">
              {studioFaq.map(({ q, a }) => (
                <div key={q} className="glass p-6">
                  <dt className="font-sans font-semibold text-snow mb-3">{q}</dt>
                  <dd className="text-slate-400 text-sm leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="section-divider" />

        {/* Consult form */}
        <section id="consult" className="py-24 px-6 scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">Free Consultation</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                まずは30分、無料で相談
              </h2>
              <p className="text-slate-400 text-center mb-12">
                3つの質問に答えるだけ。オンライン（Google Meet）で、作りたいものについてお話ししましょう。
              </p>
            </FadeInSection>
            <StudioConsultForm />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA href="#consult" />
    </>
  );
}

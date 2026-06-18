"use client";

import FadeInSection from "./FadeInSection";

const creativePricing = [
  {
    title: "AI映像・ブランドCM",
    subtitle: "Brand Film & Commercial",
    items: [
      { label: "15秒 / 1本", price: "¥80,000〜" },
      { label: "30秒 / 1本", price: "¥150,000〜" },
      { label: "60秒 / 1本", price: "¥250,000〜" },
    ],
  },
  {
    title: "ショート動画・SNS映像",
    subtitle: "Short Video & SNS Content",
    items: [
      { label: "15〜30秒 / 1本", price: "¥50,000〜" },
      { label: "月3本パック", price: "¥120,000〜" },
      { label: "月10本パック", price: "¥350,000〜" },
    ],
  },
];

const techPricing = [
  { label: "ラピッドプロトタイピング", note: "MVP開発 / スプリント単位", price: "¥200,000〜 / sprint" },
  { label: "サービス構築・導入支援", note: "プロジェクト型", price: "¥500,000〜" },
  { label: "AIコンサルティング", note: "単発ワークショップ（半日）", price: "¥150,000〜" },
  { label: "AIコンサルティング月次顧問", note: "月次契約", price: "¥200,000〜 / 月" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
            Pricing
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
            参考価格
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto text-sm">
            すべての案件はご要件に応じてお見積もりします。
            <br className="hidden sm:block" />
            まずはお気軽にご相談ください。
          </p>
        </FadeInSection>

        {/* Creative Pricing */}
        <FadeInSection>
          <p className="text-slate-500 text-xs tracking-[0.15em] uppercase mb-6 font-sans">
            Creative
          </p>
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {creativePricing.map((plan, i) => (
            <FadeInSection key={plan.subtitle} delay={i * 0.1}>
              <div className="glass p-8 h-full">
                <h3 className="font-serif text-snow text-lg mb-1">{plan.title}</h3>
                <p className="text-accent/60 text-xs tracking-wider mb-6">{plan.subtitle}</p>
                <ul className="space-y-3">
                  {plan.items.map((item) => (
                    <li key={item.label} className="flex items-center justify-between gap-4">
                      <span className="text-slate-400 text-sm">{item.label}</span>
                      <span className="text-snow font-medium text-sm whitespace-nowrap">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Tech Pricing */}
        <FadeInSection>
          <p className="text-slate-500 text-xs tracking-[0.15em] uppercase mb-6 font-sans">
            Technology
          </p>
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <div className="glass p-8">
            <ul className="divide-y divide-white/5">
              {techPricing.map((item) => (
                <li key={item.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-snow text-sm font-medium">{item.label}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.note}</p>
                  </div>
                  <span className="text-accent font-medium text-sm whitespace-nowrap">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-slate-500 text-xs text-center mt-8">
            ※ 表示価格は税抜・参考価格です。規模・要件により変動します。
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}

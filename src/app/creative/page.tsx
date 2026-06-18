"use client";

import { motion } from "framer-motion";
import CreativeNavigation from "@/components/CreativeNavigation";
import FadeInSection from "@/components/FadeInSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useState, FormEvent } from "react";

const services = [
  {
    title: "AI映像・ブランドCM制作",
    subtitle: "Brand Film & Commercial",
    description:
      "Kling AI・Runway・Soraなど最先端の生成AIを駆使し、ブランドの世界観を映像化。撮影コストを抑えながら、圧倒的なビジュアル品質を実現します。",
    items: ["15秒・30秒・60秒 CM制作", "ブランドムービー", "商品・サービス紹介映像", "I2V（画像→動画）生成"],
    price: "¥80,000〜",
    priceNote: "15秒 / 1本",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="4" y="10" width="40" height="28" rx="3" stroke="#E8600A" strokeWidth="2" />
        <path d="M20 17l12 7-12 7V17z" fill="#E8600A" />
      </svg>
    ),
  },
  {
    title: "ショート動画・SNS映像制作",
    subtitle: "Short Video & SNS Content",
    description:
      "Instagram Reels・TikTok・YouTube Shortsに最適化したショート動画を量産。月次パックで継続的なSNSマーケティングを支援します。",
    items: ["SNS縦型ショート動画", "月次コンテンツパック", "広告クリエイティブ", "プロモーション映像"],
    price: "¥50,000〜",
    priceNote: "15〜30秒 / 1本",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="14" y="4" width="20" height="40" rx="4" stroke="#E8600A" strokeWidth="2" />
        <path d="M22 18l8 6-8 6V18z" fill="#E8600A" />
      </svg>
    ),
  },
];

const process = [
  { step: "01", title: "ヒアリング", desc: "ブランドの世界観・ターゲット・目的を丁寧にヒアリング" },
  { step: "02", title: "企画・台本", desc: "AIを活用したコンセプト策定と台本・絵コンテ作成" },
  { step: "03", title: "AI映像生成", desc: "生成AIで複数パターンを高速生成・試行錯誤" },
  { step: "04", title: "編集・仕上げ", desc: "音楽・テロップ・カラーグレーディングで完成度を高める" },
  { step: "05", title: "納品", desc: "各プラットフォーム向けの最適フォーマットで納品" },
];

const pricing = [
  { label: "15秒 / 1本", price: "¥80,000〜" },
  { label: "30秒 / 1本", price: "¥150,000〜" },
  { label: "60秒 / 1本", price: "¥250,000〜" },
  { label: "ショート動画 15〜30秒 / 1本", price: "¥50,000〜" },
  { label: "ショート動画 月3本パック", price: "¥120,000〜" },
  { label: "ショート動画 月10本パック", price: "¥350,000〜" },
];

const CONTACT_EMAIL = "contact@ajara.co.jp";

export default function CreativePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = encodeURIComponent(`【AJARAクリエイティブご相談】${name}`);
    const body = encodeURIComponent(
      `会社名: ${company || "未入力"}\n氏名: ${name}\nメールアドレス: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <ScrollProgress />
      <CreativeNavigation />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 60%, #E8600A 0%, transparent 50%), radial-gradient(circle at 70% 30%, #F07A2A 0%, transparent 40%)",
            }}
          />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-accent text-sm tracking-[0.2em] uppercase font-sans mb-6"
            >
              AI Creative — AJARA
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-snow leading-tight mb-6"
            >
              映像の常識を、
              <br />
              <span className="text-accent">AIが塗り替える。</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-slate-400 text-lg sm:text-xl mb-4"
            >
              ブランドCMからSNS動画まで。
              <br className="hidden sm:block" />
              生成AIが、あなたのビジョンを映像に変える。
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-slate-500 text-sm max-w-xl mx-auto mb-12 leading-relaxed"
            >
              撮影コストを抑えながら、圧倒的なビジュアル品質を。
              AJARAのAI映像制作が、貴社のクリエイティブ戦略を加速します。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#contact"
                className="bg-accent hover:bg-accent-light text-navy-dark font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
              >
                制作を相談する（無料）
              </a>
              <a
                href="#pricing"
                className="text-slate-400 hover:text-snow text-sm transition-colors underline underline-offset-4"
              >
                料金を見る →
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-accent/60" />
            </motion.div>
          </motion.div>
        </section>

        <div className="section-divider" />

        {/* Services */}
        <section id="services" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Services
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                AI映像制作サービス
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
                最先端の生成AI技術で、あらゆる映像ニーズに対応します。
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((svc, i) => (
                <FadeInSection key={svc.subtitle} delay={i * 0.1}>
                  <div className="glass p-8 h-full hover:border-accent/30 transition-all duration-300">
                    <div className="mb-6">{svc.icon}</div>
                    <h3 className="font-serif text-xl text-snow mb-1">{svc.title}</h3>
                    <p className="text-accent/60 text-xs tracking-wider mb-4">{svc.subtitle}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{svc.description}</p>
                    <ul className="space-y-2 mb-6">
                      {svc.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-white/5">
                      <span className="text-accent font-medium text-sm">{svc.price}</span>
                      <span className="text-slate-500 text-xs ml-2">({svc.priceNote})</span>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        <GallerySection />

        <div className="section-divider" />

        {/* Process */}
        <section id="process" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Process
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                制作の流れ
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
                ご依頼からお届けまで、最短2週間。
              </p>
            </FadeInSection>

            <div className="relative">
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden sm:block" />
              <div className="space-y-8">
                {process.map((step, i) => (
                  <FadeInSection key={step.step} delay={i * 0.08}>
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                        <span className="text-accent text-xs font-mono font-bold">{step.step}</span>
                      </div>
                      <div className="glass p-5 flex-1">
                        <h3 className="text-snow font-medium mb-1">{step.title}</h3>
                        <p className="text-slate-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Pricing */}
        <section id="pricing" className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Pricing
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                参考価格
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto text-sm">
                すべての案件はご要件に応じてお見積もりします。
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="glass p-8">
                <ul className="divide-y divide-white/5">
                  {pricing.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="text-slate-400 text-sm">{item.label}</span>
                      <span className="text-snow font-medium text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-slate-500 text-xs text-center mt-6">
                ※ 表示価格は税抜・参考価格です。規模・要件により変動します。
              </p>
            </FadeInSection>
          </div>
        </section>

        <div className="section-divider" />

        {/* Contact */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans">
                Contact
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow mb-4">
                制作のご相談、お気軽に
              </h2>
              <p className="text-slate-400 mb-16 max-w-lg">
                予算・期間・イメージがまだ固まっていなくても構いません。
                まずはお話しをお聞かせください。
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-12">
              <FadeInSection delay={0.1}>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="company" className="block text-sm text-slate-400 mb-2">
                        会社名
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow placeholder-slate-600 focus:outline-none focus:border-accent/40 transition-colors"
                        placeholder="株式会社○○"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                        お名前 <span className="text-accent/60">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow placeholder-slate-600 focus:outline-none focus:border-accent/40 transition-colors"
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                        メールアドレス <span className="text-accent/60">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow placeholder-slate-600 focus:outline-none focus:border-accent/40 transition-colors"
                        placeholder="mail@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                        ご相談内容 <span className="text-accent/60">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow placeholder-slate-600 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                        placeholder="制作したい映像のイメージ、ご予算、スケジュールなどをお聞かせください"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-light text-navy-dark font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                    >
                      メールで送信する
                    </button>
                    <p className="text-slate-600 text-xs text-center">
                      ※ ボタンを押すとメールアプリが開きます
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass p-8 flex flex-col items-center justify-center h-full text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8600A" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl text-snow mb-2">メールアプリが開きました</h3>
                    <p className="text-slate-400 text-sm">内容を確認の上、そのまま送信してください。</p>
                  </motion.div>
                )}
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <div className="space-y-6">
                  <div className="glass p-6">
                    <h3 className="text-sm text-accent tracking-wider uppercase mb-3">Email</h3>
                    <p className="text-snow">contact@ajara.co.jp</p>
                  </div>
                  <div className="glass p-6">
                    <h3 className="text-sm text-accent tracking-wider uppercase mb-3">納期の目安</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex justify-between">
                        <span>ショート動画</span><span className="text-snow">最短1週間〜</span>
                      </li>
                      <li className="flex justify-between">
                        <span>ブランドCM（15秒）</span><span className="text-snow">2〜3週間〜</span>
                      </li>
                      <li className="flex justify-between">
                        <span>ブランドCM（30〜60秒）</span><span className="text-snow">3〜5週間〜</span>
                      </li>
                    </ul>
                  </div>
                  <div className="glass p-6">
                    <h3 className="text-sm text-accent tracking-wider uppercase mb-3">よくある質問</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-snow">素材がなくても制作できますか？</p>
                        <p className="text-slate-400 mt-1">はい。AIで映像・画像を生成するため、素材ゼロから制作可能です。</p>
                      </div>
                      <div>
                        <p className="text-snow">修正回数の制限はありますか？</p>
                        <p className="text-slate-400 mt-1">基本2回まで。追加修正は別途ご相談ください。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

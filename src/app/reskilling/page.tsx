"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import ReskillingNavigation from "@/components/ReskillingNavigation";
import FadeInSection from "@/components/FadeInSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const problems = [
  { n: "01", title: "研修がやりっぱなし", desc: "座学で終わり、翌週には誰も使っていない。定着の仕組みがない。" },
  { n: "02", title: "効果が測れない", desc: "満足度アンケート止まりで、業務が速く・楽になったのか分からない。" },
  { n: "03", title: "汎用講座が刺さらない", desc: "「AIの基本」は聞いたが、自社のあの業務にどう使うかが結びつかない。" },
  { n: "04", title: "始め方が分からない", desc: "社内にDX人材がいない。何から手をつければいいか判断できない。" },
];

const services = [
  {
    title: "生成AI 基礎研修",
    subtitle: "Literacy Workshop",
    description: "全社リテラシーの底上げ。特定ツールに依存しない、実務で使える基礎を半日で。",
    items: ["半日・〜20名", "ツール非依存の実務基礎", "現場の業務例で解説"],
    price: "¥150,000〜",
    priceNote: "半日",
  },
  {
    title: "実践ハンズオン研修",
    subtitle: "Hands-on Training",
    description: "御社の実ツール内でワークフローを構築。現場がそのまま使える状態にします。",
    items: ["1日・実務ハンズオン", "御社ツール内で構築", "成果指標を設定"],
    price: "¥350,000〜",
    priceNote: "1日",
  },
  {
    title: "AI導入伴走コンサル",
    subtitle: "Adoption Partner",
    description: "隔週チェックインで定着と内製化を支援。研修で終わらせず、使われ続ける状態へ。",
    items: ["月額顧問・3ヶ月〜", "隔週チェックイン", "内製化サポート"],
    price: "¥200,000〜",
    priceNote: "月額",
  },
  {
    title: "業種特化カリキュラム開発",
    subtitle: "Custom Curriculum",
    description: "士業・建設・製造など、御社業種の実務に合わせたカリキュラムを設計します。",
    items: ["一括・業種特化", "実業務に合わせて設計", "再現性のある教材化"],
    price: "¥300,000〜",
    priceNote: "一括",
  },
];

const reasons = [
  { title: "現場伴走", desc: "研修イベントで終わらせず、実際に使われるまで隔週で伴走。最大の不安「ROI不明」に正面から答えます。" },
  { title: "実運用に踏み込む", desc: "汎用プロンプトでなく、御社のツール・テンプレートの中でワークフローを構築します。" },
  { title: "助成金対応の設計", desc: "研修を各種リスキリング助成金の対象要件を満たす設計でご提供し、申請に使える資料をお渡しします。" },
  { title: "ツール非依存", desc: "特定サービスに縛られない原理と複数ツールを扱うため、値上げや仕様変更に強い体制になります。" },
];

const process = [
  { step: "01", title: "無料診断（60分）", desc: "現状をヒアリングし、「どの業務にAIを向けるか」を1つご提示します。" },
  { step: "02", title: "パイロット研修（半日）", desc: "単一部門・成功指標1つで実施。効果を測れる形で最初の一歩を。" },
  { step: "03", title: "実践ハンズオン（1日）", desc: "御社ツール内でのワークフロー構築。現場が使える状態にします。" },
  { step: "04", title: "導入伴走（月額顧問）", desc: "隔週で定着と内製化を支援。使われ続ける状態を作ります。" },
];

const pricing = [
  { label: "AI活用 無料診断（60分）", price: "無料" },
  { label: "パイロット研修（半日・単一部門）", price: "¥180,000〜" },
  { label: "生成AI 基礎研修（半日・〜20名）", price: "¥150,000〜" },
  { label: "実践ハンズオン研修（1日）", price: "¥350,000〜" },
  { label: "AI導入伴走コンサル（月額・3ヶ月〜）", price: "¥200,000〜" },
  { label: "業種特化カリキュラム開発（一括）", price: "¥300,000〜" },
  { label: "オンライン席単価（小規模コホート）", price: "¥20,000〜 / 人" },
];

const CONTACT_EMAIL = "contact@ajara.co.jp";

export default function ReskillingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = encodeURIComponent(`【AJARA AI研修ご相談】${name}`);
    const body = encodeURIComponent(
      `会社名: ${company || "未入力"}\n氏名: ${name}\nメールアドレス: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <ScrollProgress />
      <ReskillingNavigation />

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
              AI Reskilling — AJARA
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-snow leading-tight mb-6"
            >
              「導入したのに、
              <br />
              使いこなせない」を
              <br />
              <span className="text-accent">終わらせる。</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-slate-400 text-lg sm:text-xl mb-4"
            >
              中小企業のための、生成AI活用研修と導入伴走。
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-slate-500 text-sm max-w-xl mx-auto mb-12 leading-relaxed"
            >
              汎用的な「使い方」講座では終わらせません。御社の実業務・実ツールの中で、
              成果が測れる形までAIを定着させます。各種リスキリング助成金の対象要件を満たす設計。
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
                まず無料診断（60分）
              </a>
              <a
                href="#services"
                className="text-slate-400 hover:text-snow text-sm transition-colors underline underline-offset-4"
              >
                サービスを見る →
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

        {/* Problem */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Challenge
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                ツールは契約した。でも、業務は変わっていない。
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
                多くの中小企業は「アクセスはあるのに、どの業務に向ければいいか分からない」段階で止まっています。
              </p>
            </FadeInSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((p, i) => (
                <FadeInSection key={p.n} delay={i * 0.08}>
                  <div className="glass p-6 h-full">
                    <span className="text-accent/70 text-xs font-mono font-bold tracking-widest">{p.n}</span>
                    <h3 className="text-snow font-medium mt-3 mb-2">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
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
                研修ではなく、「使えるようになる」を納品する
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
                入口の研修から、定着までの伴走まで。段階に合わせてご提供します。
              </p>
            </FadeInSection>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((svc, i) => (
                <FadeInSection key={svc.subtitle} delay={i * 0.1}>
                  <div className="glass p-8 h-full hover:border-accent/30 transition-all duration-300">
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

        {/* Why */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Why AJARA
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-16">
                大手ベンダーでも、格安ギグでもない選択肢
              </h2>
            </FadeInSection>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((r, i) => (
                <FadeInSection key={r.title} delay={i * 0.08}>
                  <div className="glass p-6 h-full flex gap-4">
                    <span className="w-1.5 self-stretch rounded-full bg-accent/40 flex-shrink-0" />
                    <div>
                      <h3 className="text-snow font-medium mb-2">{r.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Process */}
        <section id="process" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Process
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                小さく始めて、成果を見てから広げる
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
                いきなり全社導入は提案しません。単一部門・成功指標1つのパイロットから。
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

        {/* Subsidy */}
        <section id="subsidy" className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Subsidy
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                研修費の負担を、制度で下げられる場合があります
              </h2>
              <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto text-sm">
                御社が対象となり得る制度の一例：東京都 DXリスキリング助成金（経費3/4）、
                人材開発支援助成金（事業展開等リスキリング支援コース／経費 中小75%＋賃金助成）など。
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="glass p-8">
                <p className="text-slate-500 text-xs tracking-[0.15em] uppercase mb-4">試算例（研修費30万円／10名・中小企業の場合）</p>
                <ul className="divide-y divide-white/5 mb-6">
                  <li className="flex items-center justify-between py-3 first:pt-0">
                    <span className="text-slate-400 text-sm">研修費（御社お支払い）</span>
                    <span className="text-snow text-sm">¥300,000</span>
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <span className="text-slate-400 text-sm">経費助成（75%）</span>
                    <span className="text-snow text-sm">− ¥225,000</span>
                  </li>
                  <li className="flex items-center justify-between py-3 last:pb-0">
                    <span className="text-accent font-medium text-sm">経費の実質負担（25%）</span>
                    <span className="text-accent font-medium text-sm">約 ¥75,000</span>
                  </li>
                </ul>
                <p className="text-slate-500 text-xs leading-relaxed border-l-2 border-accent/30 pl-4">
                  ※ 人材開発支援助成金の対象となるには、OFF-JTの実訓練時間が10時間以上であることが基本要件です。
                  助成金を受給されるのは研修を受ける御社（雇用主）で、研修費は全額をお支払いいただくことが前提です。
                  支給の可否は御社の申請内容と労働局等の審査により決まり、当社が受給を保証するものではありません。
                  計画届は訓練開始の原則1ヶ月前までの提出が必要です。助成率・上限は制度改正で変わる場合があります。
                  申請手続きは御社の顧問社労士または労働局・財団の窓口をご利用ください。
                </p>
              </div>
            </FadeInSection>
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
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-16">
                料金の目安
              </h2>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div className="glass p-8">
                <ul className="divide-y divide-white/5">
                  {pricing.map((item) => (
                    <li key={item.label} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="text-slate-400 text-sm">{item.label}</span>
                      <span className="text-snow font-medium text-sm whitespace-nowrap">{item.price}</span>
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

        {/* Important notice / disclaimer */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <div className="glass p-6 border border-white/10">
                <p className="text-slate-500 text-xs tracking-[0.15em] uppercase mb-3">重要なお知らせ</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  AI研修・リスキリング事業は2026年に立ち上げた新規事業です。現時点で、認定職業訓練等の公的な認定は取得しておりません
                  （必要に応じて申請を準備中です）。当ページに記載の助成金は、各制度の対象要件を満たすよう研修を設計するものであり、
                  助成金の支給可否は受給企業（雇用主）の申請内容と労働局・自治体等の審査により決まります。当社が支給を保証するものではありません。
                  制度の要件・助成率・上限は改正される場合があるため、最新の内容は厚生労働省・各労働局・各自治体の公式情報および御社の顧問社労士にてご確認ください。
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  <a href="/legal/subsidy" className="text-accent hover:text-accent-light text-xs transition-colors underline underline-offset-4">
                    助成金に関する表示 →
                  </a>
                  <a href="/legal/tokushoho" className="text-slate-500 hover:text-snow text-xs transition-colors underline underline-offset-4">
                    特定商取引法に基づく表記
                  </a>
                  <a href="/legal/terms" className="text-slate-500 hover:text-snow text-xs transition-colors underline underline-offset-4">
                    利用規約
                  </a>
                </div>
              </div>
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
                まずは無料診断から
              </h2>
              <p className="text-slate-400 mb-16 max-w-lg">
                売り込みではなく、まず現状を一緒に整理します。60分で、御社の「AIで変えられる業務」を1つ見つけます。オンライン可。
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
                        placeholder="現状の課題、対象部門・人数、ご検討中の内容などをお聞かせください"
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
                    <h3 className="text-snow font-medium mb-2">メールで相談する</h3>
                    <p className="text-slate-400 text-sm mb-3">
                      フォームの代わりに、直接メールでもお気軽にどうぞ。
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("AI研修・リスキリングのご相談")}`}
                      className="text-accent hover:text-accent-light text-sm transition-colors underline underline-offset-4"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  <div className="glass p-6">
                    <h3 className="text-snow font-medium mb-2">対象・進め方</h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                        単一部門・数名からご相談可能
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                        オンライン／対面いずれも対応
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                        助成金の対象要件を満たす設計でご提案
                      </li>
                    </ul>
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

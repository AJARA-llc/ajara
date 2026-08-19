"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import ReskillingNavigation from "@/components/ReskillingNavigation";
import FadeInSection from "@/components/FadeInSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Link from "next/link";
import { COURSES } from "@/data/reskillingCourses";

const problems = [
  { n: "01", title: "導入したのに使われていない", desc: "ツールは契約したのに、社員が日々の仕事で使っていない。" },
  { n: "02", title: "どの業務に使えばいいか分からない", desc: "「AIが便利」とは聞くが、自社のどの業務に使えばいいのか判断できない。" },
  { n: "03", title: "研修しても定着しない", desc: "一度研修をしたが、翌週には誰も使わず元に戻ってしまった。" },
  { n: "04", title: "社内に詳しい人がいない", desc: "AIにくわしい社員がいないため、何から手をつければいいか分からない。" },
];

// 研修で実際に「できるようになること」を具体的に。
const skills = [
  "メール・議事録・報告書の下書きと要約",
  "企画書・資料のたたき台づくり",
  "長い資料やデータの要約・整理",
  "問い合わせ・接客対応の文章作成",
  "自社の業務で使える「プロンプト」の作り方",
  "情報漏えい・著作権など、安全に使うための注意点",
];

const reasons = [
  { title: "「使えるようになる」まで伴走", desc: "研修イベントで終わらせず、実際に社内で使われるまで隔週でサポートします。" },
  { title: "実際の業務で練習する", desc: "一般論ではなく、御社の実際の仕事を題材に学ぶので、そのまま現場で使えます。" },
  { title: "助成金に対応した設計", desc: "各種リスキリング助成金の対象要件を満たす形でご提供し、申請に使える書類もお渡しします。" },
  { title: "特定のツールに縛られない", desc: "ChatGPTなど複数のツールを扱うので、値上げや仕様変更があっても困りません。" },
];

const process = [
  { step: "01", title: "無料相談（60分）", desc: "オンラインで現状をうかがい、御社に合うコースと対象の部署・人数を一緒に決めます。" },
  { step: "02", title: "お申し込み・計画届", desc: "受講内容を確定します。助成金を使う場合は、訓練開始の原則1ヶ月前までに計画届を提出します（顧問社労士と連携可）。" },
  { step: "03", title: "コース受講（12時間）", desc: "60分×12コマのカリキュラムを、eラーニング・オンライン・対面のいずれかで受講します。" },
  { step: "04", title: "修了・申請サポート", desc: "受講者名簿・カリキュラム・実施記録など、助成金申請に必要な資料をお渡しします。" },
];

const pricing = [
  { label: "AI活用 無料相談（60分）", price: "無料" },
  { label: "生成AI 基礎コース（12時間）", price: "¥400,000 / 人" },
  { label: "生成AI 実践・応用コース（12時間）", price: "¥400,000 / 人" },
  { label: "生成AI 業務定着・運用コース（12時間）", price: "¥400,000 / 人" },
];

const faqs = [
  {
    q: "生成AIを触ったことがない社員でも大丈夫ですか？",
    a: "はい。「そもそも生成AIとは何か」という基礎から始めるので、はじめての方でも問題ありません。",
  },
  {
    q: "何人から依頼できますか？",
    a: "数名の部門単位からご相談いただけます。まずは1部門からのスモールスタートをおすすめしています。",
  },
  {
    q: "オンラインでもできますか？",
    a: "はい。全国どこでもオンラインで対応します。対面をご希望の場合もご相談ください。",
  },
  {
    q: "どのAIツールを使いますか？",
    a: "特定のツールに縛らず、御社が使える環境に合わせます。ChatGPTなど、実務でよく使われるものを中心に扱います。",
  },
  {
    q: "「無料相談」では何をしますか？",
    a: "オンラインで60分、御社の現状をうかがい、「どの業務にAIを使うと効果が出そうか」をご提案します。何かの診断ツールに答えていただく形式ではありません。",
  },
  {
    q: "助成金は必ずもらえますか？",
    a: "いいえ。助成金を受け取るのは御社（雇用主）で、支給されるかどうかは御社の申請内容と労働局・自治体の審査で決まります。当社が受給を保証するものではありません（詳しくは「助成金に関する表示」をご覧ください）。",
  },
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
              社員が、生成AIを
              <br />
              <span className="text-accent">仕事で使える</span>ようになる研修。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-slate-400 text-lg sm:text-xl mb-4"
            >
              ChatGPTなどの生成AIを、御社の毎日の業務で実際に使えるようにする、法人向けの研修です。
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-slate-500 text-sm max-w-xl mx-auto mb-12 leading-relaxed"
            >
              「使い方」の座学で終わらせません。基礎から、実際の業務での使い方まで、少人数で丁寧に。
              各種リスキリング助成金の対象要件を満たす設計です。
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
                まず無料相談（オンライン・60分）
              </a>
              <a
                href="#courses"
                className="text-slate-400 hover:text-snow text-sm transition-colors underline underline-offset-4"
              >
                コースを見る →
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
                こんなお悩みはありませんか？
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
                多くの中小企業が、「ツールはあるのに、どう使えばいいか分からない」段階で止まっています。
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

        {/* What you learn */}
        <section id="curriculum" className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Curriculum
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                研修で「できるようになる」こと
              </h2>
              <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
                生成AIを、こんな身近な仕事に使えるようになります。
              </p>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div className="glass p-8">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {skills.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="text-accent mt-0.5 flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </section>

        <div className="section-divider" />

        {/* Courses */}
        <section id="courses" className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Courses
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                3つの生成AIコース
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
                基礎 → 実践 → 運用の3段階。各コース12時間（60分×12コマ）で、
                リスキリング助成金の対象要件（OFF-JT 10時間以上）を満たす設計です。
              </p>
            </FadeInSection>
            <div className="space-y-6">
              {COURSES.map((c, i) => (
                <FadeInSection key={c.slug} delay={i * 0.08}>
                  <Link
                    href={`/reskilling/${c.slug}`}
                    className="glass p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 hover:border-accent/30 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 sm:w-28">
                      <span className="text-accent/70 font-mono font-bold text-xs">{c.step}</span>
                      <span className="text-slate-500 text-xs">{c.hours}・全12コマ</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xl text-snow mb-1">{c.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{c.short}</p>
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-between sm:flex-col sm:items-end gap-4 sm:gap-1">
                      <span className="text-accent font-medium text-sm whitespace-nowrap">
                        {c.price}
                        <span className="text-slate-500 text-xs ml-1">/ 人</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-accent text-sm group-hover:gap-2 transition-all">
                        カリキュラムを見る
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
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
                AJARAが選ばれる理由
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
                はじめかた
              </h2>
              <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
                いきなり全社導入はしません。まず1部門・目標1つの小さなスタートから。
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

        {/* Delivery */}
        <section id="delivery" className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                Delivery
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-4">
                学習の提供方法
              </h2>
              <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
                eラーニング（動画教育）とLMSでの進捗管理を基本に、講師派遣・オンライン研修にも対応します。
              </p>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div className="glass p-8 space-y-6 text-slate-400 text-sm leading-[1.9]">
                <div>
                  <h3 className="text-snow font-medium mb-2">提供形態</h3>
                  <p>
                    各学習コンテンツは、<strong className="text-slate-200">eラーニング（動画教育）</strong>にて提供します。受講者の学習状況は、<strong className="text-slate-200">LMS（学習進捗管理システム）</strong>にて、学習日時・学習時間・進捗状況をすべて管理いたします。
                  </p>
                  <p className="mt-3">
                    eラーニングに加え、研修会場等への<strong className="text-slate-200">講師派遣</strong>、<strong className="text-slate-200">オンライン（Web会議ツール：Zoom）</strong>による研修実施にも対応しております。
                  </p>
                  <p className="text-slate-500 text-xs mt-2">※ 研修会場等にて受講を希望される場合は、会場等にかかる費用および講師の交通費等をご負担いただきます。</p>
                </div>
                <div>
                  <h3 className="text-snow font-medium mb-2">受講の流れ（eラーニング以外での受講の場合）</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>受講希望の研修コースにてお申し込みいただく</li>
                    <li>研修会場・オンライン等の受講方法をご指定いただく</li>
                    <li>受講者様と講師の間で日程を調整</li>
                    <li>日程表（スクーリング表）を作成し決定</li>
                  </ol>
                  <p className="text-slate-500 text-xs mt-2">※ オンライン受講の場合は、招待メールを受講者様に送信いたします。</p>
                  <p className="mt-3">詳しくは、弊社の研修サポート係までお問い合わせください。</p>
                </div>
                <div>
                  <h3 className="text-snow font-medium mb-2">お申し込み</h3>
                  <p>
                    下記より「申込書」および「業務委託契約書」をダウンロードのうえ、必要事項をご記入ください。お申し込みは、必要事項をご記入の上、E-mail：
                    <a href="mailto:contact@ajara.co.jp" className="text-accent underline underline-offset-4">contact@ajara.co.jp</a>
                    {" "}宛に送付をお願いいたします。不明点がある場合はお気軽にお問い合わせください。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <a href="/forms/ai-reskilling-application.pdf" className="bg-accent hover:bg-accent-light text-navy-dark font-medium px-6 py-2.5 rounded-full text-center text-sm transition-colors">
                      申込書ダウンロード
                    </a>
                    <a href="/forms/ai-reskilling-agreement.pdf" className="glass px-6 py-2.5 rounded-full text-snow text-center text-sm hover:border-accent/30 transition-all">
                      業務委託契約書ダウンロード
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
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
                研修費は、助成金で下げられる場合があります
              </h2>
              <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto text-sm">
                御社が対象となり得る制度の一例：東京都 DXリスキリング助成金（経費3/4）、
                人材開発支援助成金（事業展開等リスキリング支援コース／経費 中小75%＋賃金助成）など。
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="glass p-8">
                <p className="text-slate-500 text-xs tracking-[0.15em] uppercase mb-4">試算例（1コース ¥400,000／1名・中小企業の場合）</p>
                <ul className="divide-y divide-white/5 mb-6">
                  <li className="flex items-center justify-between py-3 first:pt-0">
                    <span className="text-slate-400 text-sm">受講料（御社お支払い）</span>
                    <span className="text-snow text-sm">¥400,000</span>
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <span className="text-slate-400 text-sm">経費助成（75%）</span>
                    <span className="text-snow text-sm">− ¥300,000</span>
                  </li>
                  <li className="flex items-center justify-between py-3 last:pb-0">
                    <span className="text-accent font-medium text-sm">経費の実質負担（25%）</span>
                    <span className="text-accent font-medium text-sm">約 ¥100,000</span>
                  </li>
                </ul>
                <p className="text-slate-500 text-xs leading-relaxed border-l-2 border-accent/30 pl-4">
                  ※ 人材開発支援助成金の対象となるには、OFF-JTの実訓練時間が10時間以上であることが基本要件です。
                  助成金を受給されるのは研修を受ける御社（雇用主）で、研修費は全額をお支払いいただくことが前提です。
                  支給の可否は御社の申請内容と労働局等の審査により決まり、当社が受給を保証するものではありません。
                  計画届は訓練開始の原則1ヶ月前までの提出が必要です。助成率・上限は制度改正で変わる場合があります。
                  申請手続きは御社の顧問社労士または労働局・財団の窓口をご利用ください。
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
                ※ 表示価格は税抜・参考価格です。規模・ご要望により変わります。
              </p>
            </FadeInSection>
          </div>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section id="faq" className="py-32 px-6">
          <div className="max-w-2xl mx-auto">
            <FadeInSection>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-6 font-sans text-center">
                FAQ
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-snow text-center mb-12">
                よくある質問
              </h2>
            </FadeInSection>
            <dl className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <FadeInSection key={faq.q} delay={i * 0.05}>
                  <div className="glass p-6">
                    <dt className="text-snow font-medium mb-2">{faq.q}</dt>
                    <dd className="text-slate-400 text-sm leading-relaxed">{faq.a}</dd>
                  </div>
                </FadeInSection>
              ))}
            </dl>
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
                まずは無料相談から
              </h2>
              <p className="text-slate-400 mb-16 max-w-lg">
                売り込みではありません。オンラインで60分、御社の現状をうかがい、「AIで変えられそうな業務」を一緒に1つ見つけます。
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
                        数名・単一部門からご相談可能
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

import Link from "next/link";
import {
  StudioButton,
  StudioCTABand,
  StudioMobileBar,
  StudioSectionTitle,
} from "@/components/studio/StudioChrome";
import { STUDIO_CTA_SUB, studioFaq, studioServices } from "@/data/studio";

const worries = [
  "初心者でも大丈夫？",
  "何から始めればいい？",
  "AIでどこまで作れるの？",
  "途中で止まってしまった…",
  "アイデアを形にする方法がわからない",
  "リリースまでの道筋が見えない",
];

const features = [
  {
    title: "AIを使って作る",
    desc: "最新のAI開発ツールを使い、少ないコードでも動くアプリを作る方法を身につけます。",
    color: "bg-studio-purple text-white",
  },
  {
    title: "実践重視",
    desc: "教科書を読むだけで終わらせず、実際にアプリを作り、動かし、公開するところまで進めます。",
    color: "bg-studio-yellow text-studio-ink",
  },
  {
    title: "オンラインで伴走",
    desc: "どこからでも参加できるオンライン中心のサポート。つまずいたら一緒に解決します。",
    color: "bg-studio-coral text-white",
  },
];

const flow = [
  { step: "1", title: "30分の無料相談", desc: "Google Meet で、やってみたいことや今の状況をお聞きします。" },
  { step: "2", title: "ご提案", desc: "スクールとコーチングのどちらが合うか、進め方と内容をご案内します。" },
  { step: "3", title: "サポート開始", desc: "納得いただけたらスタート。あなたのペースで一緒に進めます。" },
];

const accentBg = { purple: "bg-studio-purple", coral: "bg-studio-coral" } as const;

export default function StudioTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <span aria-hidden className="absolute top-10 -right-16 w-56 h-56 rounded-full bg-studio-lavender" />
        <span aria-hidden className="absolute bottom-6 -left-10 w-32 h-32 rounded-full bg-studio-yellow/60" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 font-rounded font-bold text-sm bg-white border-2 border-studio-ink rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-studio-coral" />
              オンライン・30分・無料
            </p>
            <h1 className="font-rounded font-black text-[2.1rem] leading-[1.3] sm:text-5xl xl:text-[3.6rem] sm:leading-[1.2] mb-6">
              そのアイデア、
              <br />
              <span className="whitespace-nowrap">
              <span className="relative inline-block">
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-4 sm:h-5 bg-studio-yellow -z-0 rounded" />
                <span className="relative">一緒にカタチ</span>
              </span>
              にしよう。
              </span>
            </h1>
            <p className="text-studio-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              AIでアプリを作れるようになりたい人も、作りたいアイデアがある人も。学ぶことから、リリースすることまで。
            </p>
            <StudioButton />
            <p className="text-studio-muted text-sm mt-4">Google Meet で気軽に相談できます</p>
          </div>

          <div aria-hidden className="relative mx-auto w-full max-w-md">
            <div className="rounded-[1.75rem] bg-white border-2 border-studio-ink shadow-[8px_8px_0_#1F1A3D] p-5 rotate-[2deg]">
              <div className="flex gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-studio-coral" />
                <span className="w-3 h-3 rounded-full bg-studio-yellow" />
                <span className="w-3 h-3 rounded-full bg-studio-purple" />
              </div>
              <div className="rounded-2xl bg-studio-lavender p-4 mb-3">
                <p className="font-rounded font-bold text-sm mb-1">💡 アイデア</p>
                <p className="text-xs text-studio-muted">近所のカフェの空席がわかるアプリ</p>
              </div>
              <div className="rounded-2xl bg-studio-purple text-white p-4 mb-3 ml-8">
                <p className="font-rounded font-bold text-sm mb-1">🤖 AIと一緒に設計</p>
                <p className="text-xs text-white/80">画面・データ・機能を整理</p>
              </div>
              <div className="rounded-2xl bg-studio-yellow p-4 mr-8">
                <p className="font-rounded font-bold text-sm mb-1">🚀 リリース！</p>
                <p className="text-xs text-studio-ink/70">みんなに使ってもらえる</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 Services */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-white border-y-2 border-studio-ink/10">
        <div className="max-w-6xl mx-auto">
          <StudioSectionTitle eyebrow="01｜2つのサービス" title="学びたい人にも、作りたい人にも。" />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {studioServices.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className="group rounded-[1.75rem] bg-studio-cream border-2 border-studio-ink p-7 sm:p-9 shadow-[6px_6px_0_#1F1A3D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#1F1A3D] transition-all"
              >
                <span className={`inline-block text-xs font-bold text-white rounded-full px-3 py-1 mb-5 ${accentBg[s.accent]}`}>
                  {s.label}
                </span>
                <h3 className="font-rounded font-black text-2xl sm:text-3xl mb-2">{s.name}</h3>
                <p className="font-rounded font-bold text-studio-purple mb-4">{s.short}</p>
                <p className="text-studio-muted leading-relaxed mb-6">{s.summary}</p>
                <span className="inline-flex items-center gap-1 font-bold text-sm group-hover:gap-2 transition-all">
                  くわしく見る →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Worries */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <StudioSectionTitle eyebrow="02｜こんなお悩みありませんか？" title="そのモヤモヤ、相談してください。" />
          <ul className="flex flex-wrap justify-center gap-3 mt-12">
            {worries.map((w, i) => (
              <li
                key={w}
                className={`font-rounded font-bold rounded-full border-2 border-studio-ink px-5 py-3 text-sm sm:text-base ${
                  i % 3 === 0 ? "bg-white" : i % 3 === 1 ? "bg-studio-lavender" : "bg-studio-yellow/70"
                }`}
              >
                {w}
              </li>
            ))}
          </ul>
          <p className="text-center text-studio-muted mt-10 leading-relaxed">{STUDIO_CTA_SUB}</p>
        </div>
      </section>

      {/* 03 Features */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-studio-lavender">
        <div className="max-w-6xl mx-auto">
          <StudioSectionTitle eyebrow="03｜AJARA Studio の特徴" title="AIで、作れる人になる。" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {features.map((f, i) => (
              <div key={f.title} className="rounded-[1.5rem] bg-white border-2 border-studio-ink p-7">
                <span className={`w-12 h-12 rounded-2xl grid place-items-center font-rounded font-black text-xl mb-5 ${f.color}`}>
                  {i + 1}
                </span>
                <h3 className="font-rounded font-black text-xl mb-3">{f.title}</h3>
                <p className="text-studio-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Flow */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <StudioSectionTitle eyebrow="04｜ご利用までの流れ" title="まずは話すところから。" />
          <ol className="grid md:grid-cols-3 gap-6 mt-12">
            {flow.map((f) => (
              <li key={f.step} className="relative rounded-[1.5rem] bg-white border-2 border-studio-ink p-7">
                <span className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-studio-yellow border-2 border-studio-ink grid place-items-center font-rounded font-black">
                  {f.step}
                </span>
                <h3 className="font-rounded font-black text-lg mt-3 mb-2">{f.title}</h3>
                <p className="text-studio-muted text-sm leading-relaxed">{f.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 FAQ */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-white border-y-2 border-studio-ink/10">
        <div className="max-w-3xl mx-auto">
          <StudioSectionTitle eyebrow="05｜よくある質問" title="気になること、先にお答えします。" />
          <div className="mt-12 space-y-3">
            {studioFaq.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border-2 border-studio-ink bg-studio-cream px-5 py-4 open:bg-studio-lavender">
                <summary className="cursor-pointer list-none flex justify-between gap-4 font-rounded font-bold">
                  <span>Q. {q}</span>
                  <span className="text-studio-purple text-xl leading-none group-open:rotate-45 transition-transform">＋</span>
                </summary>
                <p className="text-studio-muted text-sm leading-relaxed mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <StudioCTABand />
      <StudioMobileBar />
    </>
  );
}

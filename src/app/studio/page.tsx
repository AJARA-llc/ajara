import Link from "next/link";
import {
  BigNum,
  CalendarIcon,
  SectionHeading,
  StudioButton,
  StudioCTABand,
  StudioMobileBar,
  StudioTrustRow,
} from "@/components/studio/StudioChrome";
import { studioFaq, studioServices } from "@/data/studio";

const ideas = [
  { icon: "icon-coffee", text: ["近所のカフェの", "空席がわかるアプリ"] },
  { icon: "icon-heart", text: ["推し活をもっと楽しく", "管理できるアプリ"] },
  { icon: "icon-check", text: ["習慣化をサポートする", "アプリ"] },
  { icon: "icon-calendar", text: ["お店の予約や", "顧客管理をラクにするアプリ"] },
];

const reasons = [
  { icon: "icon-robot", title: "AIでぐっと身近に", desc: "むずかしい開発も、AIの力でスムーズに。" },
  { icon: "icon-bolt", title: "実践で身につく", desc: "学ぶだけでなく、実際にアプリを作りながら進める。" },
  { icon: "icon-team", title: "最後まで伴走", desc: "わからないことも、一緒に考え、解決していきます。" },
];

const flow = [
  { step: "01", title: "30分の無料相談", desc: "Google Meet で、やってみたいことや今の状況をお聞きします。" },
  { step: "02", title: "ご提案", desc: "スクールとコーチングのどちらが合うか、進め方と内容をご案内します。" },
  { step: "03", title: "サポート開始", desc: "納得いただけたらスタート。あなたのペースで一緒に進めます。" },
];

const cardTheme = {
  purple: {
    card: "bg-gradient-to-br from-[#F4EDFF] to-[#EADFFF] border-[#DCCBFF]",
    tag: "bg-studio-purple",
    arrow: "bg-studio-purple",
  },
  orange: {
    card: "bg-gradient-to-br from-[#FFF4EC] to-[#FFE6D8] border-[#FFD3B8]",
    tag: "bg-studio-orange",
    arrow: "bg-[#F5455C]",
  },
} as const;

function Img({ name, className, alt = "" }: { name: string; className: string; alt?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/images/studio/${name}.webp`} alt={alt} width={256} height={256} loading="lazy" className={className} />;
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 24" className={`w-8 sm:w-10 text-studio-purple ${className}`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12h38M33 5l8 7-8 7" />
    </svg>
  );
}

export default function StudioTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F3ECFF] via-[#F7E9FA] to-[#FFF1E8]">
        <span aria-hidden className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/60 blur-3xl" />
        <span aria-hidden className="absolute top-40 right-1/3 w-80 h-80 rounded-full bg-[#E4D3FF]/70 blur-3xl" />
        <span aria-hidden className="absolute -bottom-24 right-0 w-[28rem] h-72 rounded-full bg-white/70 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 lg:pb-20 grid lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-4 items-center">
          <div className="lg:py-10">
            <p className="inline-flex items-center gap-2 font-rounded font-bold text-sm text-studio-purple bg-white/80 rounded-full px-4 py-2 mb-6 shadow-sm">
              <CalendarIcon className="w-4 h-4" />
              オンラインで気軽に相談
            </p>
            <h1 className="font-rounded font-black text-studio-ink text-[2.2rem] leading-[1.28] sm:text-[3.3rem] sm:leading-[1.22] mb-6 tracking-tight">
              そのアイデア、
              <br />
              <span className="whitespace-nowrap">
                一緒に
                <span className="relative inline-block">
                  アプリ
                  <svg aria-hidden viewBox="0 0 140 24" preserveAspectRatio="none" className="absolute left-0 -bottom-2 w-full h-4 sm:h-5">
                    <path d="M4 15c30-8 70-11 130-6M18 20c30-5 60-6 100-3" fill="none" stroke="#FFC83D" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
                に
              </span>
              <br />
              しよう。
            </h1>
            <p className="text-studio-ink/85 text-[0.95rem] sm:text-lg leading-[1.9] mb-8 font-medium">
              AIを使ってアプリを作れるようになりたい人も、
              <br className="hidden sm:inline" />
              作りたいアイデアをリリースしたい人も。
              <br />
              AJARA Studio が、最初の一歩から伴走します。
            </p>
            <StudioButton />
            <StudioTrustRow className="mt-6" />
          </div>

          <div className="relative min-h-[22rem] sm:min-h-[30rem] lg:min-h-[34rem]">
            <div aria-hidden className="absolute top-0 inset-x-0 flex items-center justify-center lg:justify-end gap-1 sm:gap-2 z-10">
              <div className="-rotate-6 w-[4.5rem] sm:w-24 aspect-square rounded-md bg-[#FFE992] shadow-md flex flex-col items-center justify-center">
                <Img name="icon-bulb" className="w-9 sm:w-12 h-auto" />
                <span className="font-rounded font-bold text-[0.65rem] sm:text-xs text-studio-ink">アイデア!</span>
              </div>
              <Arrow />
              <div className="rotate-3 w-14 sm:w-[4.5rem] aspect-[3/4] rounded-xl bg-white shadow-md border border-studio-ink/10 p-2 flex flex-col gap-1.5">
                <span className="h-1.5 rounded bg-studio-ink/20" />
                <span className="flex-1 rounded-md border-2 border-dashed border-studio-ink/20" />
                <span className="h-1.5 w-2/3 rounded bg-studio-ink/20" />
                <span className="h-1.5 rounded bg-studio-ink/20" />
              </div>
              <Arrow />
              <Img name="icon-phone" className="w-16 sm:w-24 h-auto drop-shadow-md" />
              <Arrow />
              <Img name="icon-rocket" className="w-16 sm:w-24 h-auto -translate-y-3" />
            </div>
            <p aria-hidden className="absolute top-[5.5rem] sm:top-28 right-0 z-10 rotate-[-8deg] font-rounded font-black text-studio-ink text-base sm:text-2xl text-center leading-tight bg-white/70 sm:bg-transparent rounded-xl px-2 py-1">
              リリース！
              <br />
              <span className="text-sm sm:text-lg">（公開！）</span>
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/studio/hero-girl.webp"
              alt="ノートパソコンでアプリ作りを楽しむ女性"
              width={900}
              height={900}
              fetchPriority="high"
              className="absolute bottom-0 left-[42%] -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-24 w-[17rem] sm:w-[24rem] lg:w-[28rem] h-auto"
            />
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 inset-x-0 w-full h-8 sm:h-12 text-studio-bg">
          <path d="M0 40c240-30 480-30 720-8s480 26 720-6v34H0z" fill="currentColor" />
        </svg>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 px-4 sm:px-6 pt-12 sm:pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>
            あなたの目的に合わせて選べる<BigNum>2</BigNum>つのサービス
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12">
            {studioServices.map((s) => {
              const t = cardTheme[s.accent];
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  className={`group relative rounded-3xl border ${t.card} px-5 sm:px-7 pt-10 pb-7 shadow-[0_12px_30px_-18px_rgba(46,10,114,0.35)] hover:-translate-y-1 transition-transform`}
                >
                  <span className={`absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full text-white font-rounded font-bold text-sm px-5 py-1.5 ${t.tag}`}>
                    {s.tag}
                  </span>
                  <div className="flex items-center gap-3 sm:gap-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.icon} alt="" width={256} height={256} loading="lazy" className="w-16 sm:w-32 h-auto shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-rounded font-black text-[1.15rem] sm:text-[1.65rem] text-studio-ink mb-2 min-[375px]:whitespace-nowrap">{s.name}</h3>
                      <p className="text-studio-ink/80 text-sm sm:text-[0.95rem] leading-relaxed">{s.summary}</p>
                    </div>
                    <span className={`w-9 h-9 shrink-0 rounded-full text-white grid place-items-center self-end group-hover:translate-x-1 transition-transform ${t.arrow}`}>
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Idea examples */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>こんなアプリのアイデアも、実現できます</SectionHeading>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-10">
            {ideas.map((i) => (
              <li key={i.icon} className="rounded-2xl bg-white border border-studio-ink/[0.06] shadow-[0_10px_24px_-16px_rgba(46,10,114,0.3)] px-3 py-6 text-center">
                <Img name={i.icon} className="w-14 sm:w-16 h-auto mx-auto mb-3" />
                <p className="font-rounded font-bold text-studio-ink text-[0.82rem] sm:text-base leading-snug">
                  {i.text[0]}
                  <br />
                  {i.text[1]}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-center text-studio-muted text-xs mt-4">※ アイデアの一例です。</p>
        </div>
      </section>

      {/* Reasons */}
      <section id="features" className="scroll-mt-20 px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>
            AJARA Studio が選ばれる<BigNum>3</BigNum>つの理由
          </SectionHeading>
          <ul className="grid md:grid-cols-3 gap-4 sm:gap-6 mt-10">
            {reasons.map((r) => (
              <li key={r.title} className="flex items-center gap-4 rounded-2xl bg-white border border-studio-ink/[0.06] shadow-[0_10px_24px_-16px_rgba(46,10,114,0.3)] px-5 py-6">
                <Img name={r.icon} className="w-16 h-auto shrink-0" />
                <div>
                  <h3 className="font-rounded font-black text-lg sm:text-xl text-studio-ink mb-1">{r.title}</h3>
                  <p className="text-studio-ink/75 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="scroll-mt-20 px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <SectionHeading>ご利用までの流れ</SectionHeading>
          <ol className="grid md:grid-cols-3 gap-4 sm:gap-6 mt-10">
            {flow.map((f, i) => (
              <li key={f.step} className="relative rounded-2xl bg-white border border-studio-ink/[0.06] shadow-[0_10px_24px_-16px_rgba(46,10,114,0.3)] p-6">
                <span className="inline-block font-rounded font-black text-transparent bg-clip-text bg-gradient-to-r from-studio-purple to-studio-orange text-3xl mb-2">
                  {f.step}
                </span>
                <h3 className="font-rounded font-black text-lg text-studio-ink mb-2">{f.title}</h3>
                <p className="text-studio-ink/75 text-sm leading-relaxed">{f.desc}</p>
                {i < flow.length - 1 && (
                  <span aria-hidden className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 z-10 text-studio-purple">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M8 4l10 8-10 8z" /></svg>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>よくある質問</SectionHeading>
          <div className="mt-10 space-y-3">
            {studioFaq.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl bg-white border border-studio-ink/[0.06] shadow-[0_8px_20px_-16px_rgba(46,10,114,0.35)] px-5 py-4 open:bg-studio-lavender/60">
                <summary className="cursor-pointer list-none flex justify-between gap-4 font-rounded font-bold text-studio-ink">
                  <span>
                    <span className="text-studio-purple mr-1">Q.</span>
                    {q}
                  </span>
                  <span className="w-7 h-7 shrink-0 rounded-full bg-studio-lavender text-studio-purple grid place-items-center text-lg leading-none group-open:rotate-45 transition-transform">
                    ＋
                  </span>
                </summary>
                <p className="text-studio-ink/75 text-sm leading-relaxed mt-3">{a}</p>
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

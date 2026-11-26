import Link from "next/link";
import {
  ArrowCircle,
  SectionHeading,
  SectionTag,
  StudioButton,
  StudioCTABand,
  StudioIcon,
  StudioMobileBar,
  StudioTrustRow,
  display,
  type StudioIconName,
} from "@/components/studio/StudioChrome";
import { studioFaq, studioInstructor, studioServices } from "@/data/studio";

const marquee = ["AI APP", "PRODUCT DEVELOPMENT", "LEARNING", "COACHING"];

const ideas: { icon: StudioIconName; text: string[] }[] = [
  { icon: "coffee", text: ["近所のカフェの", "空席がわかるアプリ"] },
  { icon: "heart", text: ["推し活を", "もっと楽しく", "管理できるアプリ"] },
  { icon: "check", text: ["習慣化を", "サポートする", "アプリ"] },
  { icon: "calendar", text: ["お店の予約や", "顧客管理を", "ラクにするアプリ"] },
];

const reasons: { icon: StudioIconName; title: string; desc: string }[] = [
  { icon: "spark", title: "AIでぐっと身近に", desc: "むずかしい開発も、AIの力でスムーズに。" },
  { icon: "bolt", title: "実践で身につく", desc: "学ぶだけでなく、実際にアプリを作りながら進める。" },
  { icon: "team", title: "最後まで伴走", desc: "わからないことも、一緒に考え、解決していきます。" },
];

const flow = [
  { step: "01", title: "30分の無料相談", desc: "Google Meet で、やってみたいことや今の状況をお聞きします。" },
  { step: "02", title: "ご提案", desc: "スクールとコーチングのどちらが合うか、進め方と内容をご案内します。" },
  { step: "03", title: "サポート開始", desc: "納得いただけたらスタート。あなたのペースで一緒に進めます。" },
];

/** Keeps a Japanese phrase on one line so headings never break mid-word. */
function Ph({ children }: { children: React.ReactNode }) {
  return <span className="inline-block">{children}</span>;
}

const card = "rounded-3xl border-2 border-studio-line bg-white";

// 20x20 pixel rocket. K = outline, W = body, P = lilac, . = empty.
const ROCKET = [
  "....................",
  "..............KKKKK.",
  "............KKPPPPK.",
  "...........KWWPPPPK.",
  "..........KWWWWPPPK.",
  ".........KWWWWWWPK..",
  "..KKKKKKKWWKKKWWWK..",
  "..KPPPPKWWKPPPKWWK..",
  "..KPPPKWWWKPPPKWK...",
  "...KPKWWWWKPPPKWK...",
  "....KWWWWWWKKKWK....",
  "....KWWWWWWWWWWK....",
  "...KWWWWWWWWWKKK....",
  "..KKWWWWWWWWKPPK....",
  "....KWWWWWWKKPPK....",
  ".K...KWWWWK.KPPK....",
  "...K..KKKK..KPPK....",
  ".K..K.......KPK.....",
  "..K..........KK.....",
  "....................",
];
const ROCKET_FILL: Record<string, string> = { K: "#111111", W: "#FFFFFF", P: "#C9B6FF" };

function PixelRocket({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" shapeRendering="crispEdges" className={className} aria-hidden>
      {ROCKET.flatMap((row, y) =>
        row.split("").map((c, x) => (c === "." ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" fill={ROCKET_FILL[c]} />)),
      )}
    </svg>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" shapeRendering="crispEdges" className={className} aria-hidden>
      <path fill="#111" d="M5 0h2v3h1v1h1v1h3v2H9v1H8v1H7v3H5V9H4V8H3V7H0V5h3V4h1V3h1z" />
      <path fill="#D2FB2E" d="M5.5 2.5h1v2h1v1h2v1h-2v1h-1v2h-1v-2h-1v-1h-2v-1h2v-1h1z" />
    </svg>
  );
}

function PixelCursor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 16" shapeRendering="crispEdges" className={className} aria-hidden>
      <path fill="#fff" d="M1 1v12l3-3 2 5 2-1-2-5h4z" />
      <path fill="#111" d="M0 0h1v14H0zM1 1h1v1H1zM2 2h1v1H2zM3 3h1v1H3zM4 4h1v1H4zM5 5h1v1H5zM6 6h1v1H6zM7 7h1v1H7zM8 8h1v1H8zM9 9h1v1H9zM6 10h5v1H6zM1 13h1v1H1zM2 12h1v1H2zM3 11h1v1H3zM4 11h1v2H4zM5 13h1v2H5zM6 15h2v1H6zM8 13h1v2H8zM7 11h1v2H7z" />
    </svg>
  );
}

function CrossGrid({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} fill="none" stroke="#111" strokeOpacity="0.14" strokeWidth="1" aria-hidden>
      {[15, 45, 75, 105].flatMap((x) => [15, 45, 75].map((y) => <path key={`${x}-${y}`} d={`M${x - 9} ${y}h18M${x} ${y - 9}v18`} />))}
    </svg>
  );
}

function HeroArt() {
  return (
    <div aria-hidden className="relative mx-auto aspect-[10/9] w-full max-w-[34rem] lg:max-w-none">
      {/* code window */}
      <div className="absolute left-[4%] top-[9%] w-[62%] rotate-[8deg] rounded-[1.1rem] border-[3px] border-studio-lime bg-[#161616] p-[4%] pb-[17%] shadow-[0_18px_40px_-22px_rgba(0,0,0,0.6)]">
        <div className="flex gap-[0.4em] text-[clamp(0.5rem,1.5vw,0.8rem)]">
          <span className="h-[1em] w-[1em] rounded-full bg-[#FF5147]" />
          <span className="h-[1em] w-[1em] rounded-full bg-[#9BE21B]" />
          <span className="h-[1em] w-[1em] rounded-full bg-[#1FB6F5]" />
        </div>
        <pre className="mt-[9%] font-code font-medium leading-[1.75] text-[clamp(0.62rem,1.75vw,1.05rem)] text-[#C9B6FF]">
          {">_ AI × Development\n"}
          <span className="text-[#8E7BFF]">{"> "}</span>
          <span className="text-[#FFE45C]">create</span>
          <span className="text-white/80">{"();\n"}</span>
          <span className="text-[#8E7BFF]">{"> "}</span>
          <span className="text-[#B8F53A]">build</span>
          <span className="text-white/80">{"();\n"}</span>
          <span className="text-[#8E7BFF]">{"> "}</span>
          <span className="text-[#5BE36A]">release</span>
          <span className="text-white/80">();</span>
        </pre>
      </div>

      {/* starburst */}
      <div className="absolute right-[-3%] top-[-3%] w-[34%] rotate-[-7deg]">
        <svg viewBox="0 0 200 200" className="w-full text-studio-lime">
          <path fill="currentColor" d="M100 0l14 30 27-19 1 33 32-7-12 31 33 7-24 22 28 18-31 11 18 28-33-2 5 33-30-14-10 32-18-28-18 28-10-32-30 14 5-33-33 2 18-28-31-11 28-18-24-22 33-7-12-31 32 7 1-33 27 19z" />
        </svg>
        <p className="absolute inset-0 grid place-content-center text-center font-studio font-black uppercase leading-[1.15] text-studio-ink text-[clamp(0.5rem,1.45vw,0.92rem)]">
          <span className="text-[1.5em] leading-none">AI</span>
          Development
          <br />
          Studio
        </p>
      </div>

      {/* 3D letter */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/studio/hero-a.webp"
        alt=""
        width={900}
        height={900}
        fetchPriority="high"
        className="absolute bottom-[-2%] right-[2%] w-[70%] h-auto animate-studio-bob drop-shadow-[0_24px_30px_rgba(107,63,224,0.22)]"
      />

      {/* AI tile */}
      <div className="absolute left-[-1%] top-[49%] grid aspect-square w-[21%] rotate-[-9deg] place-items-center rounded-[22%] bg-gradient-to-br from-white to-[#DCCBFF] shadow-[5px_8px_0_#B9A4F5,0_18px_26px_-12px_rgba(60,30,140,0.45)]">
        <span className={`${display} italic text-studio-ink text-[clamp(1.2rem,4.4vw,2.9rem)] leading-none`}>AI</span>
      </div>

      {/* code tile */}
      <div className="absolute bottom-[6%] left-[-10%] grid aspect-[4/3] w-[20%] rotate-[9deg] place-items-center rounded-[20%] bg-studio-lime shadow-[4px_7px_0_#A9D400,0_16px_24px_-12px_rgba(90,120,0,0.5)]">
        <span className="font-code font-bold text-studio-ink text-[clamp(0.9rem,3vw,2rem)] leading-none">{"</>"}</span>
      </div>

      <Sparkle className="absolute right-[-3%] top-[32%] w-[9%]" />
      <PixelCursor className="absolute bottom-[1%] right-[22%] w-[8%]" />
    </div>
  );
}

function MessageArt() {
  return (
    <div aria-hidden className="relative mx-auto aspect-[6/4] w-full max-w-[36rem]">
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full text-studio-lime">
        <path fill="currentColor" d="M318 6c58-16 96 52 148 86 50 33 122 46 128 112 6 62-58 82-106 120-56 44-108 82-190 74-86-8-176 4-232-52-48-48-46-126-6-176 34-42 70-56 112-92 46-40 84-56 146-72z" />
      </svg>
      <CrossGrid className="absolute -left-[16%] top-[4%] w-[26%]" />
      <CrossGrid className="absolute -right-[2%] -top-[6%] w-[22%]" />
      <div className="absolute left-[10%] top-[12%] w-[58%] rotate-[-7deg] rounded-[1.6rem] bg-white p-[2.2%] shadow-[0_22px_40px_-20px_rgba(0,0,0,0.45)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/studio/photo-laptop.webp" alt="" width={800} height={600} loading="lazy" className="aspect-[4/3] w-full rounded-[1.15rem] object-cover" />
      </div>
      <div className="absolute right-[4%] top-[22%] w-[45%] rotate-[7deg] rounded-[1.6rem] bg-white p-[2.2%] shadow-[0_22px_40px_-20px_rgba(0,0,0,0.45)]">
        <div className="grid aspect-square place-items-center rounded-[1.15rem] bg-studio-lime">
          <PixelRocket className="w-[74%]" />
        </div>
      </div>
      <svg viewBox="0 0 60 60" className="absolute right-[20%] top-[2%] w-[9%]" fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round">
        <path d="M10 8l6 22M32 12 24 34M52 26 36 42" />
      </svg>
    </div>
  );
}

export default function StudioTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-x-clip">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-12 lg:pb-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-4 items-center">
          <div className="relative">
            <p className="font-studio font-bold text-[0.8rem] sm:text-[1.05rem] tracking-[0.07em] text-studio-ink">AI DEVELOPMENT &amp; CREATIVE STUDIO</p>
            <svg aria-hidden viewBox="0 0 200 110" className="absolute right-0 top-4 hidden w-40 text-studio-lime sm:block lg:-right-16 lg:w-48" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
              <path d="M4 22c40-22 78 2 66 40-8 26-44 26-42 4 2-24 52-34 74-8 14 18 0 44-16 40-18-4 0-40 44-40 26 0 44 6 66-2" />
            </svg>
            <h1 className={`${display} relative mt-3 uppercase text-studio-ink text-[clamp(3.1rem,15.5vw,5.9rem)] leading-[0.9] tracking-[-0.035em]`}>
              Build
              <br />
              Your
              <br />
              <span className="relative inline-block -rotate-[4deg] px-[0.12em] pb-[0.04em] pt-[0.1em] italic">
                <span aria-hidden className="absolute -inset-x-[0.14em] inset-y-0 -z-10 -skew-x-[8deg] bg-studio-lime" />
                Future.
              </span>
            </h1>
            <p className="mt-8 font-studio font-black text-studio-ink text-[clamp(1.35rem,6.9vw,1.65rem)] sm:text-[2.35rem] leading-tight">AIで、アイデアを現実に。</p>
            <p className="mt-5 text-studio-ink text-[0.95rem] sm:text-[1.05rem] leading-[1.9] font-medium">
              学ぶだけで終わらない。
              <br />
              アイデアを、実際のプロダクトとして
              <br />
              <Ph>世の中に届けるところまで</Ph>
              <Ph>支援するAI開発スタジオです。</Ph>
            </p>
            <div className="mt-8">
              <StudioButton />
            </div>
            <StudioTrustRow className="mt-5" />
          </div>
          <HeroArt />
        </div>

        {/* marquee band */}
        <div className="relative -mx-[2vw] -rotate-[1.8deg] bg-studio-lime py-3 sm:py-4 overflow-hidden" aria-hidden>
          <div className="flex w-max animate-marquee">
            {[0, 1, 2, 3].map((n) => (
              <ul key={n} className="flex shrink-0 items-center font-studio font-bold text-sm sm:text-[1.05rem] tracking-[0.06em] text-studio-ink">
                {marquee.map((m) => (
                  <li key={m} className="flex items-center">
                    <span className="px-6 sm:px-9">{m}</span>
                    <span>/</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Message */}
      <section id="message" className="scroll-mt-24 pt-16 sm:pt-24 pb-12 overflow-x-clip">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-6 items-center">
          <div>
            <SectionTag>MESSAGE</SectionTag>
            <h2 className="mt-5 font-studio font-black text-studio-ink text-[2.9rem] sm:text-[4.6rem] leading-[1.14] tracking-[-0.01em]">
              誰もが、
              <br />
              つくる側へ。
            </h2>
            <p className="mt-6 text-studio-ink text-[0.95rem] sm:text-[1.05rem] leading-[2] font-medium">
              <Ph>AIの登場によって、</Ph>
              <Ph>アイデアを実現するための</Ph>
              <br className="hidden sm:inline" />
              <Ph>ハードルは大きく変わった。</Ph>
              <br />
              <Ph>AJARA STUDIOは、</Ph>
              <br className="hidden sm:inline" />
              <Ph>新しい時代の挑戦を支援します。</Ph>
            </p>
          </div>
          <MessageArt />
        </div>
      </section>

      {/* Instructor */}
      <section id="instructor" className="scroll-mt-24 py-12 sm:py-16 overflow-x-clip">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
          <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-[22rem]">
            <svg aria-hidden viewBox="0 0 200 200" className="absolute -left-[16%] -top-[12%] w-[46%] text-studio-lime">
              <path fill="currentColor" d="M100 0l14 30 27-19 1 33 32-7-12 31 33 7-24 22 28 18-31 11 18 28-33-2 5 33-30-14-10 32-18-28-18 28-10-32-30 14 5-33-33 2 18-28-31-11 28-18-24-22 33-7-12-31 32 7 1-33 27 19z" />
            </svg>
            <div className="relative -rotate-3 rounded-[1.8rem] bg-white p-[3.5%] shadow-[0_22px_40px_-20px_rgba(0,0,0,0.45)]">
              {studioInstructor.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={studioInstructor.photo} alt={`講師 ${studioInstructor.name}`} width={720} height={900} loading="lazy" className="aspect-[4/5] w-full rounded-[1.3rem] object-cover" />
              ) : (
                <div className="grid aspect-[4/5] w-full place-items-center rounded-[1.3rem] border-2 border-dashed border-studio-ink/30 bg-studio-lavender">
                  <span className="font-code font-bold text-sm text-studio-ink/60">PHOTO</span>
                </div>
              )}
            </div>
            <p aria-hidden className={`${display} absolute -bottom-4 -right-3 rotate-[5deg] bg-studio-ink px-4 py-2 text-sm text-studio-lime sm:text-base`}>
              {studioInstructor.nameEn}
            </p>
          </div>
          <div>
            <SectionTag>INSTRUCTOR</SectionTag>
            <h2 className="mt-5 font-studio font-black text-studio-ink text-[clamp(1.6rem,8vw,2.2rem)] sm:text-[3rem] leading-[1.25]">
              <Ph>つくってきた人が、</Ph>
              <Ph>隣で教える。</Ph>
            </h2>
            <p className="mt-6 font-studio font-black text-studio-ink text-xl sm:text-2xl">
              {studioInstructor.name}
              <span className="ml-3 align-middle text-xs sm:text-sm font-bold text-studio-muted">{studioInstructor.role}</span>
            </p>
            <div className="mt-4 space-y-3 text-studio-ink text-[0.95rem] sm:text-[1.05rem] leading-[1.95] font-medium">
              {studioInstructor.bio.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {studioInstructor.points.map((pt) => (
                <li key={pt} className="rounded-full bg-studio-lavender px-3.5 py-1.5 text-xs sm:text-sm font-bold text-studio-ink">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading tag="SERVICE">
            <Ph>AIで、</Ph>
            <Ph>つくる・学ぶ・届ける。</Ph>
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-5 mt-9">
            {studioServices.map((s) => (
              <Link key={s.id} href={s.href} className={`group ${card} px-4 py-6 sm:px-8 sm:py-8 transition-colors duration-200 hover:border-studio-ink`}>
                <div className="flex items-center gap-3 sm:gap-6">
                  <StudioIcon name={s.icon} className="w-10 h-10 sm:w-16 sm:h-16" />
                  <h3 className="flex-1 font-studio font-black text-studio-ink text-[clamp(0.85rem,4.4vw,1.2rem)] sm:text-[1.6rem] leading-snug">{s.name}</h3>
                  <ArrowCircle />
                </div>
                <p className="mt-5 inline-block rounded-full bg-studio-lavender px-3 py-1 text-xs font-bold text-studio-ink">{s.tag}</p>
                <p className="mt-3 text-studio-ink/80 text-sm sm:text-[0.95rem] leading-[1.85]">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Idea examples */}
      <section id="ideas" className="scroll-mt-24 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading tag="IDEAS">
            <Ph>こんなアイデアも、</Ph>
            <Ph>アプリにできます。</Ph>
          </SectionHeading>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-9">
            {ideas.map((i) => (
              <li key={i.icon} className={`${card} px-3 min-[360px]:px-4 py-6 sm:px-6 sm:py-7`}>
                <StudioIcon name={i.icon} className="w-11 h-11 sm:w-12 sm:h-12" />
                <p className="mt-4 font-studio font-black text-studio-ink text-[0.72rem] min-[360px]:text-[0.85rem] sm:text-[1.05rem] leading-snug">
                  {i.text.map((t) => (
                    <Ph key={t}>{t}</Ph>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-studio-muted text-xs mt-4">※ アイデアの一例です。</p>
        </div>
      </section>

      {/* Reasons */}
      <section id="features" className="scroll-mt-24 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading tag="WHY">
            <Ph>AJARA STUDIO の</Ph>
            <Ph>3つの特徴。</Ph>
          </SectionHeading>
          <ul className="grid md:grid-cols-3 gap-4 sm:gap-5 mt-9">
            {reasons.map((r) => (
              <li key={r.title} className={`${card} px-6 py-7`}>
                <StudioIcon name={r.icon} />
                <h3 className="mt-4 font-studio font-black text-xl text-studio-ink">{r.title}</h3>
                <p className="mt-2 text-studio-ink/80 text-sm leading-[1.85]">{r.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="scroll-mt-24 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading tag="PROCESS">ご利用までの流れ。</SectionHeading>
          <ol className="grid md:grid-cols-3 gap-4 sm:gap-5 mt-9">
            {flow.map((f) => (
              <li key={f.step} className={`${card} px-6 py-7`}>
                <span className={`${display} inline-block -rotate-2 bg-studio-lime px-2.5 text-3xl leading-[1.25] text-studio-ink`}>{f.step}</span>
                <h3 className="mt-4 font-studio font-black text-xl text-studio-ink">{f.title}</h3>
                <p className="mt-2 text-studio-ink/80 text-sm leading-[1.85]">{f.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading tag="FAQ">よくある質問。</SectionHeading>
          <div className="mt-9 max-w-4xl space-y-3">
            {studioFaq.map(({ q, a }) => (
              <details key={q} className={`group ${card} px-5 py-4 sm:px-7 sm:py-5 open:border-studio-ink`}>
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4 font-studio font-black text-studio-ink sm:text-lg">
                  <span className="flex gap-3 [word-break:auto-phrase]">
                    <span className="font-code text-studio-purple">Q.</span>
                    {q}
                  </span>
                  <span aria-hidden className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-studio-lime text-xl leading-none transition-transform duration-200 group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="mt-3 pl-8 text-studio-ink/80 text-sm sm:text-[0.95rem] leading-[1.9]">{a}</p>
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

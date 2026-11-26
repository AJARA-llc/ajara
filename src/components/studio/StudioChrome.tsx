import Link from "next/link";
import { STUDIO_CTA } from "@/data/studio";
import StudioMenu from "./StudioMenu";

export const studioNav = [
  { href: "/studio#message", label: "ABOUT" },
  { href: "/studio#services", label: "SERVICE" },
  { href: "/studio#ideas", label: "IDEAS" },
  { href: "/studio#flow", label: "PROCESS" },
  { href: "/studio#faq", label: "FAQ" },
];

export const studioPages = [
  { href: "/studio/school", label: "AIアプリ開発スクール" },
  { href: "/studio/coaching", label: "アプリ開発コーチング" },
  { href: "/studio/consultation", label: "30分の無料相談" },
];

const legalLinks = [
  { href: "/legal/privacy", label: "プライバシーポリシー" },
  { href: "/legal/terms", label: "利用規約" },
  { href: "/legal/tokushoho", label: "特定商取引法に基づく表記" },
];

/** Display type: wide, heavy Archivo for Latin; Noto Sans JP Black for Japanese. */
export const display = "font-studio font-black [font-stretch:125%]";

export function ArrowUpRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function StudioLogo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={`${display} inline-block uppercase leading-[0.88] tracking-[-0.01em] text-[1.35rem] sm:text-[1.6rem] ${tone === "dark" ? "text-studio-ink" : "text-white"} ${className}`}>
      AJARA
      <br />
      STUDIO<span className="text-studio-lime [-webkit-text-stroke:0]">.</span>
    </span>
  );
}

export function StudioButton({
  href = "/studio/consultation",
  children = STUDIO_CTA,
  size = "lg",
  variant = "ink",
}: {
  href?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "ink" | "lime";
}) {
  const sizing = {
    sm: "px-4 py-2.5 text-[0.8rem] gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-5 min-[360px]:px-7 sm:px-10 py-4 sm:py-[1.15rem] text-sm min-[360px]:text-base sm:text-xl gap-2 sm:gap-3",
  }[size];
  const tone =
    variant === "ink"
      ? "bg-studio-ink text-white hover:bg-studio-lime hover:text-studio-ink"
      : "bg-studio-lime text-studio-ink hover:bg-studio-ink hover:text-studio-lime";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center rounded-full font-studio font-black tracking-wide whitespace-nowrap transition-colors duration-200 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-studio-purple ${tone} ${sizing}`}
    >
      <span>{children}</span>
      <ArrowUpRight className={`${size === "lg" ? "w-5 h-5" : "w-4 h-4"} transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
    </Link>
  );
}

const trust = ["Google Meet", "30分", "無料", "無理な勧誘なし"];

export function StudioTrustRow({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 text-xs sm:text-[0.8rem] font-bold ${className}`}>
      {trust.map((t) => (
        <li
          key={t}
          className={`rounded-full border px-3 py-1 ${tone === "dark" ? "border-studio-ink/25 text-studio-ink" : "border-white/30 text-white"}`}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function StudioHeader() {
  return (
    <header className="sticky top-0 z-50 bg-studio-bg border-b border-studio-ink/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[68px] sm:h-[84px] flex items-center justify-between gap-3">
        <Link href="/studio" className="shrink-0" aria-label="AJARA STUDIO トップ">
          <StudioLogo />
        </Link>
        <nav className="hidden lg:flex items-center gap-9" aria-label="ページ内メニュー">
          {studioNav.map((l) => (
            <Link key={l.href} href={l.href} className="font-studio font-bold text-[0.82rem] tracking-[0.08em] text-studio-ink underline-offset-8 decoration-studio-lime-dark decoration-[3px] hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-5">
          <div className="hidden sm:block">
            <StudioButton size="md" variant="lime">無料相談を予約する</StudioButton>
          </div>
          <div className="sm:hidden">
            <StudioButton size="sm" variant="lime">無料相談</StudioButton>
          </div>
          <StudioMenu nav={studioNav} pages={studioPages} />
        </div>
      </div>
    </header>
  );
}

/** Lime marker label, e.g. `</ MESSAGE >`. */
export function SectionTag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block -rotate-1 rounded-[4px] bg-studio-lime px-4 py-1.5 font-code font-bold text-[0.8rem] sm:text-sm tracking-wide text-studio-ink whitespace-nowrap ${className}`}>
      {"</ "}
      {children}
      {" >"}
    </span>
  );
}

export function SectionHeading({ tag, children, id }: { tag: string; children: React.ReactNode; id?: string }) {
  return (
    <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-10">
      <SectionTag>{tag}</SectionTag>
      <h2 id={id} className="font-studio font-black text-studio-ink text-[clamp(1.4rem,7.2vw,1.7rem)] leading-[1.3] sm:text-[2.5rem] tracking-[-0.01em]">
        {children}
      </h2>
    </div>
  );
}

const iconPaths: Record<string, React.ReactNode> = {
  cap: (
    <>
      <path d="M12 22v9c0 3 5.4 6 12 6s12-3 12-6v-9" fill="#fff" />
      <path d="m4 18 20-9 20 9-20 9z" />
      <path d="M40 20v10" fill="none" />
    </>
  ),
  layers: (
    <>
      <path d="m6 31 18 9 18-9" fill="none" />
      <path d="m6 23 18 9 18-9" fill="none" />
      <path d="m24 6 18 9-18 9-18-9z" />
    </>
  ),
  coffee: (
    <>
      <path d="M10 18h24v10a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10z" />
      <path d="M34 21h3a5 5 0 0 1 0 10h-3M17 8v5M24 6v7M31 8v5M8 43h28" fill="none" />
    </>
  ),
  heart: <path d="M24 40S7 29 7 18a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 11-17 22-17 22z" />,
  check: (
    <>
      <rect x="7" y="7" width="34" height="34" rx="9" />
      <path d="m15 24 6 6 12-13" fill="none" />
    </>
  ),
  calendar: (
    <>
      <rect x="6" y="10" width="36" height="32" rx="7" />
      <path d="M6 20h36M16 5v9M32 5v9M15 28h.01M24 28h.01M33 28h.01M15 35h.01M24 35h.01" fill="none" />
    </>
  ),
  spark: (
    <>
      <path d="M22 8c2 10 6 14 16 16-10 2-14 6-16 16-2-10-6-14-16-16 10-2 14-6 16-16z" />
      <path d="M39 5v8M35 9h8" fill="none" />
    </>
  ),
  bolt: <path d="M27 4 9 27h12l-3 17 19-24H25z" />,
  team: (
    <>
      <circle cx="17" cy="15" r="7" />
      <path d="M4 41c0-8 6-13 13-13s13 5 13 13z" />
      <path d="M31 9a6 6 0 0 1 0 12M35 29c5 1 9 5 9 12h-7" fill="none" />
    </>
  ),
};

export type StudioIconName = "cap" | "layers" | "coffee" | "heart" | "check" | "calendar" | "spark" | "bolt" | "team";

/** Line icon with a lilac fill, matching the service-card icons in the mock. */
export function StudioIcon({ name, className = "w-12 h-12" }: { name: StudioIconName; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="#C9B6FF" stroke="#111" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`} aria-hidden>
      {iconPaths[name]}
    </svg>
  );
}

export function ArrowCircle({ className = "" }: { className?: string }) {
  return (
    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-studio-ink text-studio-ink transition-colors duration-200 group-hover:bg-studio-ink group-hover:text-studio-lime ${className}`}>
      <ArrowUpRight className="w-4 h-4" />
    </span>
  );
}

export function StudioCTABand() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-studio-ink px-4 min-[360px]:px-6 py-12 sm:px-14 sm:py-16">
        <svg aria-hidden viewBox="0 0 200 200" className="absolute -right-8 -top-10 -z-10 w-32 xl:-right-10 xl:-top-12 xl:w-64 text-studio-lime">
          <path fill="currentColor" d="M100 0l14 30 27-19 1 33 32-7-12 31 33 7-24 22 28 18-31 11 18 28-33-2 5 33-30-14-10 32-18-28-18 28-10-32-30 14 5-33-33 2 18-28-31-11 28-18-24-22 33-7-12-31 32 7 1-33 27 19z" />
        </svg>
        <SectionTag>CONTACT</SectionTag>
        <h2 className="mt-5 font-studio font-black text-white text-[clamp(1.4rem,7.2vw,1.75rem)] leading-[1.35] sm:text-[2.6rem]">
          <span className="inline-block">まずは、気軽に</span>
          <span className="inline-block">話してみませんか？</span>
        </h2>
        <p className="mt-4 max-w-xl text-white/80 leading-[1.9]">
          「こんなこと、相談していいのかな？」という段階でも大丈夫です。アイデアの整理から、一緒にお話ししましょう。
        </p>
        <div className="mt-8">
          <StudioButton variant="lime" />
        </div>
        <StudioTrustRow tone="light" className="mt-6" />
      </div>
    </section>
  );
}

export function StudioMobileBar() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-studio-bg border-t border-studio-ink/10 px-4 py-3">
      <Link
        href="/studio/consultation"
        className="flex items-center justify-center gap-2 rounded-full bg-studio-ink py-3.5 font-studio font-black text-white"
      >
        {STUDIO_CTA}
        <ArrowUpRight />
      </Link>
    </div>
  );
}

export function StudioFooter() {
  return (
    <footer className="bg-studio-ink text-white/80 pt-14 pb-28 sm:pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <StudioLogo tone="light" className="mb-4" />
          <p className="text-sm leading-relaxed text-white/70">
            <span className="inline-block">AIアプリ開発の学習と開発コーチングを</span>
            <span className="inline-block">提供するオンラインスタジオ。</span>
          </p>
          <p className="text-xs text-white/60 mt-4">
            運営：
            <Link href="/" className="underline underline-offset-4 hover:text-white">
              合同会社AJARA
            </Link>
          </p>
        </div>
        <ul className="space-y-2 text-sm">
          {studioPages.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-studio-lime">{l.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 text-sm">
          {legalLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-studio-lime">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-6xl mx-auto px-4 sm:px-6 text-xs text-white/50 mt-12">&copy; {new Date().getFullYear()} AJARA LLC.</p>
    </footer>
  );
}

import Link from "next/link";
import { STUDIO_CTA } from "@/data/studio";

const navLinks = [
  { href: "/studio#services", label: "サービス" },
  { href: "/studio#features", label: "特徴" },
  { href: "/studio#flow", label: "ご利用の流れ" },
  { href: "/studio#faq", label: "よくある質問" },
];

const legalLinks = [
  { href: "/legal/privacy", label: "プライバシーポリシー" },
  { href: "/legal/terms", label: "利用規約" },
  { href: "/legal/tokushoho", label: "特定商取引法に基づく表記" },
];

export function CalendarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" />
    </svg>
  );
}

function ArrowIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function StudioButton({
  href = "/studio/consultation",
  children = STUDIO_CTA,
  size = "lg",
}: {
  href?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const sizing = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-5 py-3 text-sm sm:text-base gap-2",
    lg: "px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-xl gap-2.5 sm:gap-3",
  }[size];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center rounded-full font-rounded font-bold text-white bg-gradient-to-r from-studio-orange to-studio-orange-light shadow-[0_10px_24px_-8px_rgba(255,122,31,0.7)] hover:shadow-[0_14px_30px_-8px_rgba(255,122,31,0.8)] hover:-translate-y-0.5 transition-all duration-200 ${sizing}`}
    >
      <CalendarIcon className={size === "lg" ? "w-6 h-6 sm:w-7 sm:h-7" : "w-5 h-5"} />
      <span>{children}</span>
      <ArrowIcon className={`${size === "lg" ? "w-5 h-5 sm:w-6 sm:h-6" : "w-4 h-4"} group-hover:translate-x-1 transition-transform`} />
    </Link>
  );
}

const trust = [
  {
    label: "Google Meet",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
        <rect x="2" y="6" width="13" height="12" rx="3" fill="#8B4CF6" />
        <path d="M15 10.5 21 7v10l-6-3.5z" fill="#FF7A1F" />
      </svg>
    ),
  },
  {
    label: "30分",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "無料",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="w-5 h-5" aria-hidden>
        <path d="M6 4l6 8 6-8M12 12v8M8 13h8M8 16.5h8" />
      </svg>
    ),
  },
  {
    label: "無理な勧誘なし",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z" fill="#A78BFA" />
        <path d="m8.5 12 2.5 2.5 4.5-5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function StudioTrustRow({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold text-studio-ink ${className}`}>
      {trust.map((t) => (
        <li key={t.label} className="inline-flex items-center gap-1.5">
          <span className="text-studio-purple">{t.icon}</span>
          {t.label}
        </li>
      ))}
    </ul>
  );
}

export function StudioHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_1px_0_rgba(46,10,114,0.06)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-[72px] flex items-center justify-between gap-4">
        <Link href="/studio" className="shrink-0" aria-label="AJARA Studio トップ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/studio/logo.png" alt="AJARA Studio" width={720} height={152} className="h-8 sm:h-9 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-bold text-studio-ink hover:text-studio-purple transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <StudioButton size="md" />
        </div>
        <div className="sm:hidden">
          <StudioButton size="sm">無料相談</StudioButton>
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="relative text-center font-rounded font-black text-[1.45rem] leading-snug sm:text-[2rem] text-studio-ink px-8">
      <span aria-hidden className="hidden sm:inline-block align-middle mr-3 -mt-2">
        <Sparks />
      </span>
      {children}
      <span aria-hidden className="hidden sm:inline-block align-middle ml-3 -mt-2 -scale-x-100">
        <Sparks />
      </span>
    </h2>
  );
}

export function BigNum({ children }: { children: React.ReactNode }) {
  return <span className="text-studio-purple text-[1.5em] leading-none mx-0.5 align-[-0.08em]">{children}</span>;
}

function Sparks() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#FFC83D" strokeWidth="3" strokeLinecap="round">
      <path d="M6 6l5 5M3 15h6M12 3l1 5" />
    </svg>
  );
}

export function StudioCTABand() {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#E9DDFF] via-[#F6DDF2] to-[#FFE6D6]">
        <span aria-hidden className="absolute -top-20 right-24 w-72 h-72 rounded-full bg-white/40 blur-2xl" />
        <div className="relative grid md:grid-cols-[0.9fr_1.1fr] items-end">
          <div className="relative order-2 md:order-1 flex justify-center md:justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/studio/cta-boy.webp" alt="" width={720} height={720} loading="lazy" className="w-64 sm:w-80 md:w-[26rem] h-auto -mb-1" />
            <span aria-hidden className="absolute top-6 right-6 md:right-2 rotate-6 w-24 sm:w-28 rounded-[1.6rem] bg-white shadow-xl p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/studio/icon-phone.webp" alt="" width={256} height={256} loading="lazy" className="w-full h-auto" />
            </span>
          </div>
          <div className="order-1 md:order-2 px-6 pt-10 pb-4 sm:px-10 md:py-14 text-center md:text-left">
            <h2 className="font-rounded font-black text-2xl sm:text-[2rem] leading-snug text-studio-ink mb-4">
              まずは、気軽に話してみませんか？
            </h2>
            <p className="text-studio-ink/80 leading-relaxed mb-8">
              「こんなこと、相談していいのかな？」という段階でも大丈夫です。
              <br className="hidden sm:inline" />
              アイデアの整理から、一緒にお話ししましょう。
            </p>
            <StudioButton />
            <StudioTrustRow className="justify-center md:justify-start mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function StudioMobileBar() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 shadow-[0_-6px_20px_rgba(46,10,114,0.08)] px-4 py-3">
      <Link
        href="/studio/consultation"
        className="flex items-center justify-center gap-2 rounded-full font-rounded font-bold py-3.5 text-white bg-gradient-to-r from-studio-orange to-studio-orange-light"
      >
        <CalendarIcon />
        {STUDIO_CTA}
      </Link>
    </div>
  );
}

export function StudioFooter() {
  return (
    <footer className="bg-studio-ink text-white/80 px-4 sm:px-6 pt-14 pb-28 sm:pb-14">
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/studio/logo-mark.png" alt="" width={256} height={187} className="h-8 w-auto" />
            <span className="font-rounded font-black text-xl text-white">AJARA Studio</span>
          </p>
          <p className="text-sm leading-relaxed text-white/70">AIアプリ開発の学習と開発コーチングを提供するオンラインスタジオ。</p>
          <p className="text-xs text-white/50 mt-4">
            運営：
            <Link href="/" className="underline underline-offset-4 hover:text-white">
              合同会社AJARA
            </Link>
          </p>
        </div>
        <ul className="space-y-2 text-sm">
          <li><Link href="/studio/school" className="hover:text-white">AIアプリ開発スクール</Link></li>
          <li><Link href="/studio/coaching" className="hover:text-white">アプリ開発コーチング</Link></li>
          <li><Link href="/studio/consultation" className="hover:text-white">30分無料相談</Link></li>
        </ul>
        <ul className="space-y-2 text-sm">
          {legalLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-6xl mx-auto text-xs text-white/40 mt-12">&copy; {new Date().getFullYear()} AJARA LLC.</p>
    </footer>
  );
}

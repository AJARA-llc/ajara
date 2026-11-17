import Link from "next/link";
import { STUDIO_CTA, STUDIO_CTA_SUB } from "@/data/studio";

const navLinks = [
  { href: "/studio/school", label: "スクール" },
  { href: "/studio/coaching", label: "コーチング" },
];

const legalLinks = [
  { href: "/legal/privacy", label: "プライバシーポリシー" },
  { href: "/legal/terms", label: "利用規約" },
  { href: "/legal/tokushoho", label: "特定商取引法に基づく表記" },
];

export function StudioLogo() {
  return (
    <Link href="/studio" className="flex items-center gap-2 shrink-0" aria-label="AJARA Studio トップ">
      <span className="w-8 h-8 rounded-xl bg-studio-purple grid place-items-center rotate-[-8deg] shadow-[3px_3px_0_#1F1A3D]">
        <span className="w-2.5 h-2.5 rounded-full bg-studio-yellow" />
      </span>
      <span className="font-rounded font-black text-lg tracking-tight text-studio-ink">
        AJARA <span className="text-studio-purple">Studio</span>
      </span>
    </Link>
  );
}

export function StudioButton({
  href = "/studio/consultation",
  children = STUDIO_CTA,
  size = "lg",
  variant = "primary",
}: {
  href?: string;
  children?: React.ReactNode;
  size?: "sm" | "lg";
  variant?: "primary" | "ghost";
}) {
  const sizing = size === "lg" ? "px-7 py-4 text-base sm:text-lg" : "px-4 py-2 text-sm";
  const look =
    variant === "primary"
      ? "bg-studio-yellow text-studio-ink border-2 border-studio-ink shadow-[4px_4px_0_#1F1A3D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1F1A3D]"
      : "bg-white text-studio-ink border-2 border-studio-ink hover:bg-studio-lavender";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-rounded font-bold transition-all duration-150 ${sizing} ${look}`}
    >
      {children}
    </Link>
  );
}

export function StudioHeader() {
  return (
    <header className="sticky top-0 z-50 bg-studio-cream border-b-2 border-studio-ink/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <StudioLogo />
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden sm:inline-block px-3 py-2 rounded-full text-sm font-bold text-studio-ink hover:bg-studio-lavender transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <StudioButton size="sm">無料相談</StudioButton>
        </nav>
      </div>
    </header>
  );
}

export function StudioCTABand({ title = "まずは30分、気軽に話してみよう。" }: { title?: string }) {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto relative overflow-hidden rounded-[2rem] bg-studio-purple text-white px-6 py-12 sm:px-12 sm:py-16 text-center border-2 border-studio-ink shadow-[6px_6px_0_#1F1A3D]">
        <span aria-hidden className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-studio-coral/80" />
        <span aria-hidden className="absolute -bottom-12 -right-8 w-40 h-40 rounded-full bg-studio-yellow/90" />
        <div className="relative">
          <p className="inline-block font-rounded font-bold text-sm bg-white/15 rounded-full px-4 py-1 mb-5">
            オンライン・30分・無料
          </p>
          <h2 className="font-rounded font-black text-2xl sm:text-4xl leading-snug mb-4">{title}</h2>
          <p className="text-white/85 text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">{STUDIO_CTA_SUB}</p>
          <StudioButton />
          <p className="text-white/70 text-xs mt-4">Google Meet で気軽に相談できます</p>
        </div>
      </div>
    </section>
  );
}

export function StudioMobileBar() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-studio-cream/95 border-t-2 border-studio-ink/10 px-4 py-3">
      <Link
        href="/studio/consultation"
        className="block text-center rounded-full font-rounded font-bold py-3.5 bg-studio-yellow text-studio-ink border-2 border-studio-ink"
      >
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
          <p className="font-rounded font-black text-xl text-white mb-2">
            AJARA <span className="text-studio-yellow">Studio</span>
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            AIアプリ開発の学習と開発コーチングを提供するオンラインスタジオ。
          </p>
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

export function StudioSectionTitle({ eyebrow, title, center = true }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="inline-block font-rounded font-bold text-xs tracking-widest text-studio-purple bg-studio-lavender rounded-full px-3 py-1 mb-4">
        {eyebrow}
      </p>
      <h2 className="font-rounded font-black text-2xl sm:text-4xl text-studio-ink leading-snug">{title}</h2>
    </div>
  );
}

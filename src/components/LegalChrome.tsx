import Link from "next/link";
import Footer from "./Footer";

/**
 * 法務ページ共通シェル（特商法表記 / プライバシーポリシー / 利用規約 / 助成金表示）。
 * サーバーコンポーネント（静的コンテンツのみ・ユーザー入力なし）。
 */
export default function LegalChrome({
  title,
  subtitle,
  updated,
  children,
}: {
  title: string;
  subtitle?: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Minimal top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/85 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            合同会社AJARA
          </Link>
          <Link
            href="/reskilling"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            AI研修・リスキリング
          </Link>
        </div>
      </header>

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-sans">Legal</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-snow mb-3">{title}</h1>
          {subtitle && <p className="text-slate-400 text-sm leading-relaxed mb-4">{subtitle}</p>}
          <p className="text-slate-600 text-xs mb-12">最終改定日：{updated}</p>

          <div className="space-y-10">{children}</div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-x-6 gap-y-2">
            {[
              { href: "/legal/tokushoho", label: "特定商取引法に基づく表記" },
              { href: "/legal/privacy", label: "プライバシーポリシー" },
              { href: "/legal/terms", label: "利用規約" },
              { href: "/legal/subsidy", label: "助成金に関する表示" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-500 hover:text-accent text-xs transition-colors underline underline-offset-4"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

/** セクション見出し + 本文ブロック。 */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-lg text-snow mb-4 pb-2 border-b border-white/5">{heading}</h2>
      <div className="text-slate-400 text-sm leading-[1.9] space-y-3">{children}</div>
    </section>
  );
}

/** 定義リスト（特商法表記の項目 / 値）。 */
export function DefTable({ rows }: { rows: [string, React.ReactNode][] }) {
  return (
    <dl className="glass divide-y divide-white/5">
      {rows.map(([label, value], i) => (
        <div key={i} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-4 px-5 py-4">
          <dt className="text-slate-500 text-xs sm:text-sm font-medium pt-0.5">{label}</dt>
          <dd className="text-slate-300 text-sm leading-relaxed">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * 事業者が公開前に実データを記入する必要がある箇所を視覚的に明示。
 * 本番公開までにすべて実際の値へ差し替えること。
 */
export function Fill({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-accent/15 text-accent rounded px-1.5 py-0.5 not-italic font-medium">
      【要記入：{children}】
    </mark>
  );
}

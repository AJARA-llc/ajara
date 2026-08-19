import Link from "next/link";
import Footer from "./Footer";
import FadeInSection from "./FadeInSection";
import ScrollProgress from "./ScrollProgress";
import { COURSES, type Course } from "@/data/reskillingCourses";

export default function CourseDetail({ course }: { course: Course }) {
  const others = COURSES.filter((c) => c.slug !== course.slug);

  return (
    <>
      <ScrollProgress />

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/85 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/reskilling" className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            AI研修 トップ
          </Link>
          <Link href="/reskilling#contact" className="text-xs bg-accent hover:bg-accent-light text-navy-dark font-medium px-4 py-2 rounded-full transition-colors">
            無料相談する
          </Link>
        </div>
      </header>

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <FadeInSection>
            <p className="text-accent text-xs tracking-[0.2em] uppercase mb-3 font-sans">
              {course.step} — {course.eyebrow}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-snow leading-tight mb-4">
              {course.title}
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mb-8">{course.summary}</p>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-3 mb-2">
              {[
                { label: "研修時間", value: `${course.hours}（${course.sessions}）` },
                { label: "形式", value: "オンライン／対面" },
                { label: "受講料", value: `${course.price}（${course.priceNote}）` },
              ].map((m) => (
                <div key={m.label} className="glass px-4 py-3">
                  <p className="text-slate-500 text-[11px] tracking-wide mb-0.5">{m.label}</p>
                  <p className="text-snow text-sm font-medium">{m.value}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Audience */}
          <FadeInSection delay={0.05}>
            <section className="mt-14">
              <h2 className="font-serif text-lg text-snow mb-4 pb-2 border-b border-white/5">こんな方におすすめ</h2>
              <ul className="space-y-2.5">
                {course.audience.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </section>
          </FadeInSection>

          {/* Curriculum */}
          <FadeInSection delay={0.1}>
            <section className="mt-14">
              <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-white/5">
                <h2 className="font-serif text-lg text-snow">カリキュラム</h2>
                <span className="text-slate-500 text-xs">全12コマ・各60分</span>
              </div>
              <ol className="space-y-2">
                {course.modules.map((m, i) => (
                  <li key={m.title} className="glass px-5 py-4 flex gap-4">
                    <span className="text-accent/70 font-mono font-bold text-xs w-8 flex-shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-slate-200 text-sm font-medium leading-snug">{m.title}</h3>
                        <span className="text-slate-600 text-[11px] flex-shrink-0 hidden sm:block pt-0.5">60分</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed mt-1.5">{m.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </FadeInSection>

          {/* Subsidy eligibility */}
          <FadeInSection delay={0.15}>
            <section className="mt-14 glass p-6 border border-accent/15">
              <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">助成金の対象要件について</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                本コースは<strong className="text-snow">1コース12時間</strong>（OFF-JTの実訓練時間10時間以上）で構成しており、
                人材開発支援助成金（事業展開等リスキリング支援コース）などの
                <strong className="text-snow">対象要件を満たす設計</strong>です。受講者名簿・カリキュラム・実施記録など、申請に必要な資料をお渡しします。
              </p>
              <p className="text-slate-500 text-xs leading-relaxed border-l-2 border-accent/30 pl-4">
                ※ 助成金を受給されるのは受講される御社（雇用主）で、支給の可否は御社の申請内容と労働局・自治体等の審査により決まります。当社が支給を保証するものではありません。計画届は訓練開始の原則1ヶ月前までの提出が必要です。制度の要件・助成率・上限は改正される場合があります。
              </p>
              <div className="mt-4">
                <Link href="/legal/subsidy" className="text-accent hover:text-accent-light text-xs transition-colors underline underline-offset-4">
                  助成金に関する表示を見る →
                </Link>
              </div>
            </section>
          </FadeInSection>

          {/* CTA */}
          <FadeInSection delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/reskilling#contact"
                className="bg-accent hover:bg-accent-light text-navy-dark font-medium px-8 py-3 rounded-full text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                このコースについて無料相談する
              </Link>
              <Link
                href="/reskilling#courses"
                className="glass px-8 py-3 rounded-full text-snow text-center hover:border-accent/30 transition-all duration-300"
              >
                コース一覧に戻る
              </Link>
            </div>
          </FadeInSection>

          {/* Other courses */}
          <FadeInSection delay={0.25}>
            <section className="mt-16 pt-8 border-t border-white/5">
              <p className="text-slate-500 text-xs tracking-[0.15em] uppercase mb-4">ほかのコース</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {others.map((c) => (
                  <Link key={c.slug} href={`/reskilling/${c.slug}`} className="glass p-5 hover:border-accent/30 transition-all duration-300 group">
                    <p className="text-accent/70 text-[11px] font-mono mb-1">{c.step}</p>
                    <h3 className="text-snow font-medium mb-1">{c.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{c.short}</p>
                    <span className="inline-flex items-center gap-1 text-accent text-xs mt-3 group-hover:gap-2 transition-all">
                      詳しく見る
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </FadeInSection>
        </div>
      </main>

      <Footer />
    </>
  );
}

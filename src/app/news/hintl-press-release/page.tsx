import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title:
    "「答えるAIから、エビデンスで伴走するAIへ。hintl誕生」プレスリリースを配信しました | 合同会社AJARA",
  description:
    "合同会社AJARAは、エビデンスベースの意思決定エンジン「hintl（ヒントル）」の正式リリースにあわせ、プレスリリース「答えるAIから、エビデンスで伴走するAIへ。hintl誕生」をPR FREE・Zero Press・ツナググの3プラットフォームで自社配信しました。",
  alternates: { canonical: "https://ajara.co.jp/news/hintl-press-release" },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "「答えるAIから、エビデンスで伴走するAIへ。hintl誕生」プレスリリースを配信しました | 合同会社AJARA",
    description:
      "hintl正式リリースにあわせ、プレスリリースをPR FREE・Zero Press・ツナググの3プラットフォームで自社配信しました。",
    type: "article",
    locale: "ja_JP",
    url: "https://ajara.co.jp/news/hintl-press-release",
    siteName: "合同会社AJARA",
  },
};

const DATELINE = "2026年9月1日";

const distributions: [string, string][] = [
  ["PR FREE", "https://pr-free.jp/2026/180551/"],
  ["Zero Press", "https://zero-press.net/p/prfree-180551"],
  ["ツナググ", "https://press.portal-th.com/archives/52934"],
];

export default function HintlPressReleaseNews() {
  return (
    <>
      <Navigation />

      <main className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <FadeInSection>
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1.5 mb-8"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              合同会社AJARA トップへ
            </Link>

            <p className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-sans">
              News / お知らせ
            </p>
            <p className="text-slate-500 text-sm mb-4">
              <span className="text-accent/80">{DATELINE}</span>
              <span className="mx-2 text-slate-700">|</span>
              合同会社AJARA
              <span className="ml-3 inline-block text-[11px] px-2 py-0.5 rounded-full border border-accent/20 text-accent/70">
                自社配信のプレスリリース
              </span>
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-snow leading-tight mb-8">
              「答えるAIから、エビデンスで伴走するAIへ。
              <br className="hidden sm:block" />
              hintl誕生」プレスリリースを配信しました
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="text-slate-300 text-[15px] leading-[1.95] space-y-6">
              <p>
                合同会社AJARAは、
                <Link href="/news/hintl-launch" className="text-accent underline underline-offset-4">
                  2026年9月1日に正式リリースしたエビデンスベースの意思決定エンジン「hintl（ヒントル）」
                </Link>
                について、プレスリリース
                <strong className="text-snow">
                  「答えるAIから、エビデンスで伴走するAIへ。hintl誕生」
                </strong>
                を作成し、{DATELINE}に下記3プラットフォームへ<strong className="text-snow">自社配信</strong>
                しました。
              </p>
              <p className="text-slate-500 text-sm">
                ※ 本ページは自社が作成・配信したプレスリリースの掲載先一覧であり、報道機関によるメディア掲載を示すものではありません。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <section className="mb-12">
              <h2 className="font-serif text-xl text-snow mb-5 pb-2 border-b border-white/5">
                配信先（自社配信のプレスリリース）
              </h2>
              <dl className="glass divide-y divide-white/5">
                {distributions.map(([label, url]) => (
                  <div
                    key={label}
                    className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4 px-5 py-4"
                  >
                    <dt className="text-slate-500 text-xs sm:text-sm font-medium pt-0.5">{label}</dt>
                    <dd className="text-slate-300 text-sm leading-relaxed break-words">
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent underline underline-offset-4 break-all"
                      >
                        {url}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="https://hintl.net"
                target="_blank"
                rel="noreferrer"
                className="bg-accent hover:bg-accent-light text-navy-dark font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 text-center"
              >
                hintl を見る（無料診断）
              </a>
              <a
                href="mailto:contact@ajara.co.jp?subject=hintl%20プレスリリースについて"
                className="glass px-8 py-3 rounded-full text-snow text-center hover:border-accent/30 transition-all duration-300"
              >
                取材・お問い合わせ
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <section className="border-t border-white/5 pt-8">
              <h2 className="text-slate-500 text-xs tracking-[0.15em] uppercase mb-3">会社概要</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                合同会社AJARA（アジャラ）は、AI検索最適化（AIO）コンサルティング、法人向けAI研修・リスキリング、
                AI映像制作、そしてエビデンスベースの意思決定エンジン「hintl」を提供する会社です。
                「戯が誠になるわいな — Where Play Becomes Product」を掲げ、遊びから生まれた発想を実際のプロダクトへと育てています。
              </p>
              <p className="text-slate-500 text-xs mt-4">
                お問い合わせ：
                <a href="mailto:contact@ajara.co.jp" className="text-accent underline underline-offset-4">contact@ajara.co.jp</a>
                　/
                <a href="https://ajara.co.jp" className="text-accent underline underline-offset-4">https://ajara.co.jp</a>
              </p>
            </section>
          </FadeInSection>
        </article>
      </main>

      <Footer />
    </>
  );
}

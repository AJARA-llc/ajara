import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "エビデンスベースの意思決定エンジン「hintl」提供開始のお知らせ | 合同会社AJARA",
  description:
    "合同会社AJARAは、健康・美容などの選択を『広告ではなく公開研究』から比較できるエビデンスベースの意思決定エンジン「hintl（ヒントル）」の提供を開始します。論文数と研究間の一貫性からエビデンスを100点満点で可視化し、1分の無料診断で研究報告のある選択肢を確認できます。",
  alternates: { canonical: "https://ajara.co.jp/news/hintl-launch" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "エビデンスベースの意思決定エンジン「hintl」提供開始のお知らせ | 合同会社AJARA",
    description:
      "健康・美容などの選択を『広告ではなく公開研究』から比較。エビデンスを100点満点で可視化し、1分の無料診断で研究報告のある選択肢を確認できます。",
    type: "article",
    locale: "ja_JP",
    url: "https://ajara.co.jp/news/hintl-launch",
    siteName: "合同会社AJARA",
  },
};

// 発表日は未定（operator確定待ち）。確定したら DATELINE を実際の日付に置き換える。
const DATELINE = "2026年【　】月【　】日";

const facts: [string, string][] = [
  ["サービス名", "hintl（ヒントル）"],
  ["種別", "エビデンスベースの意思決定エンジン（無料診断メディア）"],
  ["提供領域", "睡眠 / メンタル / 栄養 / 脳・集中 / 美容 / 仕事・働き方 ほか"],
  ["利用料金", "無料（診断・情報閲覧）"],
  ["URL", "https://hintl.net"],
  ["提供・運営", "合同会社AJARA"],
];

export default function HintlLaunchNews() {
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
                発表日は確定次第更新します
              </span>
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-snow leading-tight mb-8">
              エビデンスベースの意思決定エンジン
              <br className="hidden sm:block" />
              「hintl（ヒントル）」提供開始のお知らせ
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="text-slate-300 text-[15px] leading-[1.95] space-y-6">
              <p>
                合同会社AJARA（本社：日本、代表社員：平田拓也）は、健康・美容をはじめとする日々の選択を
                <strong className="text-snow">「広告ではなく、公開されている研究」から比較</strong>
                できる、エビデンスベースの意思決定エンジン「hintl（ヒントル）」の提供を開始します。
              </p>
              <p>
                hintlは、論文の数と研究間の一貫性からエビデンスを
                <strong className="text-snow">100点満点のスコアで可視化</strong>
                し、<strong className="text-snow">1分の無料診断</strong>
                を通じて、研究報告のある選択肢をどなたでも確認できるサービスです。何がどれだけ確からしいのかを、宣伝や体験談ではなく、公開研究の裏付けとともに提示します。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="glass p-6 my-12">
              <p className="font-serif text-lg text-snow mb-2">来た時より、少しだけいい人生を。</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                情報が増えるほど選ぶのが難しくなる時代に、「どれが自分にとって確からしいか」を静かに支える。
                それがhintlの目指すところです。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <section className="mb-12">
              <h2 className="font-serif text-xl text-snow mb-5 pb-2 border-b border-white/5">
                hintlの特徴
              </h2>
              <div className="space-y-5">
                {[
                  {
                    t: "広告ではなく研究から比較",
                    d: "成分・習慣・製品などの選択肢を、広告や口コミではなく、公開されている研究をもとに整理します。",
                  },
                  {
                    t: "エビデンスを100点満点で可視化",
                    d: "論文数と研究間の一貫性から算出したエビデンススコアと信頼度を提示し、どれだけ確からしいかを一目で確認できます。",
                  },
                  {
                    t: "1分の無料診断",
                    d: "簡単な質問に答えるだけで、あなたに関連する領域と、研究報告のある選択肢を無料で確認できます。",
                  },
                  {
                    t: "複数領域をカバー",
                    d: "睡眠・メンタル・栄養・脳・集中・美容・仕事など、暮らしに関わる複数の領域に対応します。",
                  },
                ].map((f) => (
                  <div key={f.t} className="flex gap-4">
                    <span className="w-1.5 self-stretch rounded-full bg-accent/40 flex-shrink-0" />
                    <div>
                      <h3 className="text-snow font-medium mb-1">{f.t}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{f.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.25}>
            <section className="mb-12">
              <h2 className="font-serif text-xl text-snow mb-5 pb-2 border-b border-white/5">
                サービス概要
              </h2>
              <dl className="glass divide-y divide-white/5">
                {facts.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4 px-5 py-4">
                    <dt className="text-slate-500 text-xs sm:text-sm font-medium pt-0.5">{label}</dt>
                    <dd className="text-slate-300 text-sm leading-relaxed break-words">
                      {label === "URL" ? (
                        <a href="https://hintl.net" target="_blank" rel="noreferrer" className="text-accent underline underline-offset-4">
                          https://hintl.net
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                ※ hintlは診断結果や記事を通じて情報提供を行うサービスであり、医療行為・診断・治療や、特定の効果を保証するものではありません。健康上の判断は専門家にご相談ください。
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.3}>
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
                href="mailto:contact@ajara.co.jp?subject=hintl%20について"
                className="glass px-8 py-3 rounded-full text-snow text-center hover:border-accent/30 transition-all duration-300"
              >
                取材・お問い合わせ
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.35}>
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

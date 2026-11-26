import Link from "next/link";
import {
  SectionHeading,
  SectionTag,
  StudioButton,
  StudioCTABand,
  StudioIcon,
  StudioMobileBar,
  StudioTrustRow,
} from "@/components/studio/StudioChrome";
import { studioComparison, studioServices } from "@/data/studio";

type Props = {
  serviceId: "school" | "coaching";
  lead: string;
  audiences: string[];
  contentTitle: string;
  contents: { title: string; desc: string }[];
  note: { title: string; body: string };
};

const card = "rounded-3xl bg-white border-2 border-studio-line";

export default function StudioServicePage({ serviceId, lead, audiences, contentTitle, contents, note }: Props) {
  const service = studioServices.find((s) => s.id === serviceId)!;
  const other = studioServices.find((s) => s.id !== serviceId)!;

  return (
    <>
      <section className="relative overflow-hidden border-b border-studio-ink/[0.06]">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-14 sm:pt-12 sm:pb-20 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-sm mb-6 text-studio-muted">
              <Link href="/studio" className="hover:text-studio-ink underline underline-offset-4">AJARA Studio</Link>
              <span> ／ {service.name}</span>
            </p>
            <SectionTag>{service.label}</SectionTag>
            <p className="font-studio font-black text-studio-ink mt-5 mb-2">
              {service.name}
              <span className="ml-3 inline-block rounded-full bg-studio-lavender px-3 py-1 text-xs font-bold align-middle">{service.tag}</span>
            </p>
            <h1 className="font-studio font-black text-studio-ink text-[2rem] leading-[1.3] sm:text-5xl sm:leading-[1.25] mb-6">
              {service.catch}
            </h1>
            <p className="text-studio-ink/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">{lead}</p>
            <StudioButton />
            <StudioTrustRow className="mt-5" />
          </div>
          <div aria-hidden className="hidden md:grid w-56 lg:w-64 aspect-square rotate-6 place-items-center rounded-[2.2rem] bg-studio-lime">
            <StudioIcon name={service.icon} className="w-32 h-32 lg:w-36 lg:h-36 -rotate-6" />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <SectionHeading tag="FOR YOU">こんな人におすすめ</SectionHeading>
          <ul className="grid sm:grid-cols-2 gap-3 mt-10">
            {audiences.map((a) => (
              <li key={a} className={`flex gap-3 items-center px-5 py-4 font-studio font-bold text-studio-ink ${card}`}>
                <span className="w-7 h-7 shrink-0 rounded-full bg-studio-lime text-studio-ink grid place-items-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="m5 12 4.5 4.5L19 7" />
                  </svg>
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <SectionHeading tag="CONTENTS">{contentTitle}</SectionHeading>
          <ol className="mt-10 space-y-4">
            {contents.map((c, i) => (
              <li key={c.title} className={`flex gap-4 p-5 sm:p-6 ${card}`}>
                <span className="w-10 h-10 shrink-0 rounded-xl grid place-items-center font-studio font-black text-studio-ink bg-studio-lime">{i + 1}</span>
                <div>
                  <h3 className="font-studio font-black text-lg text-studio-ink mb-1">{c.title}</h3>
                  <p className="text-studio-ink/75 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-2xl bg-studio-lavender p-6">
            <p className="font-studio font-bold text-studio-ink mb-2">{note.title}</p>
            <p className="text-studio-ink/75 text-sm leading-relaxed">{note.body}</p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <SectionHeading tag="COMPARE">スクールとコーチングの違い</SectionHeading>
          <div className={`mt-10 overflow-hidden ${card}`}>
            <table className="w-full text-sm">
              <thead>
                <tr className="font-studio">
                  <th className="p-3 sm:p-4 text-left font-bold bg-studio-lavender/60 text-studio-ink w-[28%]">比較</th>
                  <th className={`p-3 sm:p-4 text-left font-bold ${serviceId === "school" ? "bg-studio-ink text-studio-lime" : "bg-studio-lavender/60 text-studio-ink"}`}>スクール</th>
                  <th className={`p-3 sm:p-4 text-left font-bold ${serviceId === "coaching" ? "bg-studio-ink text-studio-lime" : "bg-studio-lavender/60 text-studio-ink"}`}>コーチング</th>
                </tr>
              </thead>
              <tbody>
                {studioComparison.map((row) => (
                  <tr key={row.label} className="border-t border-studio-line">
                    <th scope="row" className="p-3 sm:p-4 text-left font-bold text-studio-ink">{row.label}</th>
                    <td className={`p-3 sm:p-4 ${serviceId === "school" ? "text-studio-ink font-bold" : "text-studio-ink/70"}`}>{row.school}</td>
                    <td className={`p-3 sm:p-4 ${serviceId === "coaching" ? "text-studio-ink font-bold" : "text-studio-ink/70"}`}>{row.coaching}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-studio-ink/75 text-sm mt-6 leading-relaxed">
            料金・回数などの具体的な内容は、無料相談でお話を伺ったうえでご案内します。どちらが合うか迷っている方も、そのままご相談ください。
          </p>
          <p className="mt-5">
            <Link href={other.href} className="font-studio font-bold text-studio-purple underline underline-offset-4">
              {other.name}を見る →
            </Link>
          </p>
        </div>
      </section>

      <StudioCTABand />
      <StudioMobileBar />
    </>
  );
}

import Link from "next/link";
import {
  SectionHeading,
  StudioButton,
  StudioCTABand,
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

const theme = {
  purple: { tag: "bg-studio-purple", num: "bg-studio-purple", hero: "from-[#F1E8FF] via-[#F5ECFD] to-[#FBF9FF]" },
  orange: { tag: "bg-studio-orange", num: "bg-studio-orange", hero: "from-[#FFEFE3] via-[#FBEAF5] to-[#FBF9FF]" },
} as const;

const card = "rounded-2xl bg-white border border-studio-ink/[0.06] shadow-[0_10px_24px_-16px_rgba(46,10,114,0.3)]";

export default function StudioServicePage({ serviceId, lead, audiences, contentTitle, contents, note }: Props) {
  const service = studioServices.find((s) => s.id === serviceId)!;
  const other = studioServices.find((s) => s.id !== serviceId)!;
  const t = theme[service.accent];

  return (
    <>
      <section className={`relative overflow-hidden bg-gradient-to-b ${t.hero}`}>
        <span aria-hidden className="absolute -top-20 right-10 w-80 h-80 rounded-full bg-white/60 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-14 sm:pt-12 sm:pb-20 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-sm mb-6 text-studio-muted">
              <Link href="/studio" className="hover:text-studio-ink underline underline-offset-4">AJARA Studio</Link>
              <span> ／ {service.name}</span>
            </p>
            <span className={`inline-block rounded-full text-white font-rounded font-bold text-sm px-4 py-1.5 mb-5 ${t.tag}`}>
              {service.tag}
            </span>
            <p className="font-rounded font-bold text-studio-ink/70 mb-2">{service.name}</p>
            <h1 className="font-rounded font-black text-studio-ink text-[2rem] leading-[1.3] sm:text-5xl sm:leading-[1.25] mb-6">
              {service.catch}
            </h1>
            <p className="text-studio-ink/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">{lead}</p>
            <StudioButton />
            <StudioTrustRow className="mt-5" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.icon} alt="" width={256} height={256} className="hidden md:block w-56 lg:w-64 h-auto" />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>こんな人におすすめ</SectionHeading>
          <ul className="grid sm:grid-cols-2 gap-3 mt-10">
            {audiences.map((a) => (
              <li key={a} className={`flex gap-3 items-center px-5 py-4 font-rounded font-bold text-studio-ink ${card}`}>
                <span className="w-7 h-7 shrink-0 rounded-full bg-studio-lavender text-studio-purple grid place-items-center">
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
          <SectionHeading>{contentTitle}</SectionHeading>
          <ol className="mt-10 space-y-4">
            {contents.map((c, i) => (
              <li key={c.title} className={`flex gap-4 p-5 sm:p-6 ${card}`}>
                <span className={`w-10 h-10 shrink-0 rounded-xl grid place-items-center font-rounded font-black text-white ${t.num}`}>{i + 1}</span>
                <div>
                  <h3 className="font-rounded font-black text-lg text-studio-ink mb-1">{c.title}</h3>
                  <p className="text-studio-ink/75 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-2xl bg-studio-lavender p-6">
            <p className="font-rounded font-bold text-studio-ink mb-2">{note.title}</p>
            <p className="text-studio-ink/75 text-sm leading-relaxed">{note.body}</p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>スクールとコーチングの違い</SectionHeading>
          <div className={`mt-10 overflow-hidden ${card}`}>
            <table className="w-full text-sm">
              <thead>
                <tr className="font-rounded">
                  <th className="p-3 sm:p-4 text-left font-bold bg-studio-lavender/60 text-studio-ink w-[28%]">比較</th>
                  <th className={`p-3 sm:p-4 text-left font-bold ${serviceId === "school" ? "bg-studio-purple text-white" : "bg-studio-lavender/60 text-studio-ink"}`}>スクール</th>
                  <th className={`p-3 sm:p-4 text-left font-bold ${serviceId === "coaching" ? "bg-studio-orange text-white" : "bg-studio-lavender/60 text-studio-ink"}`}>コーチング</th>
                </tr>
              </thead>
              <tbody>
                {studioComparison.map((row) => (
                  <tr key={row.label} className="border-t border-studio-ink/[0.06]">
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
            <Link href={other.href} className="font-rounded font-bold text-studio-purple underline underline-offset-4">
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

import Link from "next/link";
import {
  StudioButton,
  StudioCTABand,
  StudioMobileBar,
  StudioSectionTitle,
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

export default function StudioServicePage({ serviceId, lead, audiences, contentTitle, contents, note }: Props) {
  const service = studioServices.find((s) => s.id === serviceId)!;
  const other = studioServices.find((s) => s.id !== serviceId)!;
  const accent = service.accent === "purple" ? "bg-studio-purple" : "bg-studio-coral";

  return (
    <>
      <section className="relative overflow-hidden px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <span aria-hidden className={`absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-15 ${accent}`} />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-sm mb-6">
            <Link href="/studio" className="text-studio-muted hover:text-studio-ink underline underline-offset-4">
              AJARA Studio
            </Link>
            <span className="text-studio-muted"> ／ {service.name}</span>
          </p>
          <span className={`inline-block text-xs font-bold text-white rounded-full px-3 py-1 mb-5 ${accent}`}>
            {service.label}　{service.name}
          </span>
          <h1 className="font-rounded font-black text-[2rem] leading-[1.3] sm:text-5xl sm:leading-[1.25] mb-6">
            {service.catch}
          </h1>
          <p className="text-studio-muted text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">{lead}</p>
          <StudioButton />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white border-y-2 border-studio-ink/10">
        <div className="max-w-4xl mx-auto">
          <StudioSectionTitle eyebrow="FOR YOU" title="こんな人におすすめ" />
          <ul className="grid sm:grid-cols-2 gap-3 mt-10">
            {audiences.map((a) => (
              <li key={a} className="flex gap-3 items-start rounded-2xl border-2 border-studio-ink bg-studio-cream px-5 py-4 font-bold">
                <span className="w-6 h-6 shrink-0 rounded-full bg-studio-yellow border-2 border-studio-ink grid place-items-center text-xs">✓</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <StudioSectionTitle eyebrow="WHAT YOU GET" title={contentTitle} />
          <ol className="mt-10 space-y-4">
            {contents.map((c, i) => (
              <li key={c.title} className="flex gap-4 rounded-2xl bg-white border-2 border-studio-ink p-5 sm:p-6">
                <span className={`w-10 h-10 shrink-0 rounded-xl grid place-items-center font-rounded font-black text-white ${accent}`}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-rounded font-black text-lg mb-1">{c.title}</h3>
                  <p className="text-studio-muted text-sm leading-relaxed">{c.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-2xl bg-studio-lavender p-6">
            <p className="font-rounded font-bold mb-2">{note.title}</p>
            <p className="text-studio-muted text-sm leading-relaxed">{note.body}</p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white border-y-2 border-studio-ink/10">
        <div className="max-w-4xl mx-auto">
          <StudioSectionTitle eyebrow="COMPARE" title="スクールとコーチングの違い" />
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-studio-ink">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-studio-ink text-white font-rounded">
                  <th className="p-3 sm:p-4 text-left font-bold w-[28%]">比較</th>
                  <th className={`p-3 sm:p-4 text-left font-bold ${serviceId === "school" ? "text-studio-yellow" : ""}`}>スクール</th>
                  <th className={`p-3 sm:p-4 text-left font-bold ${serviceId === "coaching" ? "text-studio-yellow" : ""}`}>コーチング</th>
                </tr>
              </thead>
              <tbody>
                {studioComparison.map((row, i) => (
                  <tr key={row.label} className={i % 2 ? "bg-studio-cream" : "bg-white"}>
                    <th scope="row" className="p-3 sm:p-4 text-left font-bold">{row.label}</th>
                    <td className="p-3 sm:p-4 text-studio-muted">{row.school}</td>
                    <td className="p-3 sm:p-4 text-studio-muted">{row.coaching}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-studio-muted text-sm mt-6 leading-relaxed">
            料金・回数などの具体的な内容は、無料相談でお話を伺ったうえでご案内します。どちらが合うか迷っている方も、そのままご相談ください。
          </p>
          <p className="mt-6">
            <Link href={other.href} className="font-bold underline underline-offset-4 hover:text-studio-purple">
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

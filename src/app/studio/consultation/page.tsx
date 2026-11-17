import type { Metadata } from "next";
import StudioConsultForm from "@/components/studio/StudioConsultForm";

export const metadata: Metadata = {
  title: "30分の無料相談｜AJARA Studio",
  description: "AIアプリ開発スクール・アプリ開発コーチングの30分無料相談。Google Meet でオンライン、まだアイデアがまとまっていなくても大丈夫です。",
  alternates: { canonical: "https://ajara.co.jp/studio/consultation" },
};

const badges = ["30分", "Google Meet", "無料"];

export default function ConsultationPage() {
  return (
    <section className="px-4 sm:px-6 pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-rounded font-black text-3xl sm:text-5xl mb-4">30分の無料相談</h1>
          <p className="text-studio-muted mb-6">あなたの「やってみたい」を聞かせてください。</p>
          <ul className="flex justify-center gap-2">
            {badges.map((b, i) => (
              <li
                key={b}
                className={`font-rounded font-bold text-sm rounded-full border-2 border-studio-ink px-4 py-1.5 ${
                  ["bg-studio-lavender", "bg-white", "bg-studio-yellow"][i]
                }`}
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
        <StudioConsultForm />
        <p className="text-studio-muted text-xs text-center mt-6 leading-relaxed">
          入力は1分ほどで終わります。無理な勧誘はしませんので、お気軽にどうぞ。
        </p>
      </div>
    </section>
  );
}

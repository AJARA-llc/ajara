import type { Metadata } from "next";
import StudioConsultComplete from "@/components/studio/StudioConsultComplete";

export const metadata: Metadata = {
  title: "相談日時の予約｜AJARA Studio",
  robots: { index: false },
};

export default function ConsultationCompletePage() {
  return (
    <section className="px-4 sm:px-6 pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-rounded font-black text-3xl sm:text-4xl text-center mb-10">ありがとうございます！</h1>
        <StudioConsultComplete />
      </div>
    </section>
  );
}

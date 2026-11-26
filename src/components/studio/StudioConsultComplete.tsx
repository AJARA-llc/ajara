"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { STUDIO_BOOKING_URL } from "@/data/studio";
import { ConsultAnswers, clearConsult, consultMailto, loadConsult } from "./consultStore";

export default function StudioConsultComplete() {
  const [answers, setAnswers] = useState<ConsultAnswers | null | undefined>(undefined);

  useEffect(() => {
    setAnswers(loadConsult());
  }, []);

  if (answers === undefined) return <div className="min-h-[24rem]" />;

  if (answers === null) {
    return (
      <div className="rounded-3xl bg-white border-2 border-studio-line p-8 text-center">
        <p className="font-studio font-black text-xl mb-3">相談内容が見つかりませんでした</p>
        <p className="text-studio-muted text-sm mb-6">お手数ですが、もう一度フォームから入力してください。</p>
        <Link href="/studio/consultation" className="font-bold text-studio-purple underline underline-offset-4">
          無料相談フォームへ
        </Link>
      </div>
    );
  }

  const rows = [
    ["相談目的", answers.purpose],
    ["現在の状況", answers.level],
    ["お名前", answers.name],
    ["メールアドレス", answers.email],
  ];

  return (
    <div className="rounded-3xl bg-white border-2 border-studio-line p-5 sm:p-10">
      <p className="inline-block font-studio font-bold text-xs text-studio-ink bg-studio-lime rounded-full px-3 py-1 mb-4">
        STEP 4 / 4
      </p>
      <h2 className="font-studio font-black text-2xl sm:text-3xl mb-3">
        {STUDIO_BOOKING_URL ? "相談の日時を選びましょう" : "メールで送信してください"}
      </h2>
      <p className="text-studio-muted leading-relaxed mb-8">
        {STUDIO_BOOKING_URL
          ? "空いている30分枠から選ぶと、Google Meet の参加URLが入った予約確定メールが届きます。"
          : "ボタンを押すとメールアプリが開きます。内容を確認してそのまま送信してください。2営業日以内に、相談日時の候補と Google Meet の案内をお送りします。"}
      </p>

      <dl className="rounded-2xl bg-studio-lavender/60 p-5 mb-8 space-y-2 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex gap-3">
            <dt className="text-studio-muted w-28 shrink-0">{k}</dt>
            <dd className="font-bold break-all">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-4">
        {STUDIO_BOOKING_URL ? (
          <>
            <a
              href={STUDIO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center rounded-full font-studio font-bold py-4 text-white bg-studio-ink hover:bg-studio-lime hover:text-studio-ink transition-colors"
            >
              空いている日時を見る
            </a>
            <p className="text-studio-muted text-xs text-center leading-relaxed">
              予約画面ではお名前・メールアドレスをもう一度入力してください。相談内容もメールで送っておくと、当日の話がスムーズです。
            </p>
            <a href={consultMailto(answers)} className="text-center text-sm font-bold text-studio-purple underline underline-offset-4">
              相談内容をメールでも送っておく（任意）
            </a>
          </>
        ) : (
          <a
            href={consultMailto(answers)}
            className="text-center rounded-full font-studio font-bold py-4 text-white bg-studio-ink hover:bg-studio-lime hover:text-studio-ink transition-colors"
          >
            メールで送信する
          </a>
        )}
        <Link
          href="/studio/consultation"
          onClick={() => clearConsult()}
          className="text-center text-xs text-studio-muted hover:text-studio-ink"
        >
          入力をやり直す
        </Link>
      </div>
    </div>
  );
}

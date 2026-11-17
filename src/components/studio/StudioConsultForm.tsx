"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { STUDIO_BOOKING_URL, studioLevels, studioPurposes } from "@/data/studio";
import { ConsultAnswers, saveConsult } from "./consultStore";

const EMPTY: ConsultAnswers = { purpose: "", level: "", detail: "", name: "", email: "" };
const STEPS = ["相談目的", "現在の状況", "相談内容・連絡先"];

const inputClass =
  "w-full rounded-2xl border-2 border-studio-ink bg-white px-4 py-3.5 text-base text-studio-ink placeholder-studio-muted/60 focus:outline-none focus:ring-4 focus:ring-studio-purple/25";

function Choice({ selected, onClick, label, hint }: { selected: boolean; onClick: () => void; label: string; hint: string }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={`w-full text-left rounded-2xl border-2 border-studio-ink px-5 py-4 transition-all duration-150 ${
        selected ? "bg-studio-purple text-white shadow-[4px_4px_0_#1F1A3D]" : "bg-white hover:bg-studio-lavender"
      }`}
    >
      <span className="block font-rounded font-bold">{label}</span>
      <span className={`block text-xs mt-1 ${selected ? "text-white/80" : "text-studio-muted"}`}>{hint}</span>
    </button>
  );
}

export default function StudioConsultForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ConsultAnswers>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  const set = (patch: Partial<ConsultAnswers>) => {
    setAnswers((prev) => ({ ...prev, ...patch }));
    setError("");
  };

  const choose = (patch: Partial<ConsultAnswers>) => {
    set(patch);
    setStep((s) => s + 1);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = answers.name.trim();
    const email = answers.email.trim();
    if (!name) return setError("お名前を入力してください。");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("メールアドレスを正しく入力してください。");
    if (!consent) return setError("個人情報の取り扱いへの同意が必要です。");
    saveConsult({ ...answers, name, email, detail: answers.detail.trim() });
    router.push("/studio/consultation/complete");
  };

  return (
    <form onSubmit={submit} noValidate className="rounded-[1.75rem] bg-white border-2 border-studio-ink shadow-[6px_6px_0_#1F1A3D] p-5 sm:p-10">
      <div className="mb-8">
        <div className="flex justify-between text-xs font-bold mb-2">
          <span className="text-studio-purple">
            STEP {step + 1} / {STEPS.length}
          </span>
          <span className="text-studio-muted">{STEPS[step]}</span>
        </div>
        <div
          className="h-3 rounded-full bg-studio-lavender border-2 border-studio-ink overflow-hidden"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={STEPS.length}
          aria-valuenow={step + 1}
          aria-label="入力の進み具合"
        >
          <div
            className="h-full bg-studio-yellow transition-all duration-500"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {step === 0 && (
        <fieldset>
          <legend className="font-rounded font-black text-xl sm:text-2xl mb-6">相談したいことは？</legend>
          <div className="grid gap-3" role="radiogroup">
            {studioPurposes.map((p) => (
              <Choice key={p.value} selected={answers.purpose === p.value} onClick={() => choose({ purpose: p.value })} label={p.label} hint={p.hint} />
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset>
          <legend className="font-rounded font-black text-xl sm:text-2xl mb-6">今の状況に近いものは？</legend>
          <div className="grid sm:grid-cols-2 gap-3" role="radiogroup">
            {studioLevels.map((l) => (
              <Choice key={l.value} selected={answers.level === l.value} onClick={() => choose({ level: l.value })} label={l.label} hint={l.hint} />
            ))}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="space-y-5">
          <legend className="font-rounded font-black text-xl sm:text-2xl mb-6">あと少しです！</legend>
          <div>
            <label htmlFor="studio-name" className="block text-sm font-bold mb-2">
              お名前 <span className="text-studio-coral">必須</span>
            </label>
            <input id="studio-name" type="text" autoComplete="name" maxLength={100} value={answers.name} onChange={(e) => set({ name: e.target.value })} className={inputClass} placeholder="山田 太郎" />
          </div>
          <div>
            <label htmlFor="studio-email" className="block text-sm font-bold mb-2">
              メールアドレス <span className="text-studio-coral">必須</span>
            </label>
            <input id="studio-email" type="email" inputMode="email" autoComplete="email" maxLength={254} value={answers.email} onChange={(e) => set({ email: e.target.value })} className={inputClass} placeholder="mail@example.com" />
          </div>
          <div>
            <label htmlFor="studio-detail" className="block text-sm font-bold mb-2">
              相談したい内容 <span className="text-studio-muted font-normal">任意</span>
            </label>
            <textarea id="studio-detail" rows={4} maxLength={1000} value={answers.detail} onChange={(e) => set({ detail: e.target.value })} className={`${inputClass} resize-none`} placeholder="例：趣味のアイデアをアプリにして公開してみたい" />
          </div>
          <label className="flex items-start gap-3 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                setError("");
              }}
              className="mt-0.5 w-5 h-5 shrink-0 accent-[#6D4AFF]"
            />
            <span>
              <a href="/legal/privacy" target="_blank" className="font-bold text-studio-purple underline underline-offset-4">
                プライバシーポリシー
              </a>
              に沿った個人情報の取り扱いに同意します
            </span>
          </label>
        </fieldset>
      )}

      <p role="alert" className="text-studio-coral font-bold text-sm min-h-[1.5rem] mt-5">
        {error}
      </p>

      <div className="flex gap-3 mt-2">
        {step > 0 && (
          <button
            type="button"
            onClick={() => {
              setError("");
              setStep((s) => s - 1);
            }}
            className="px-6 py-4 rounded-full border-2 border-studio-ink font-rounded font-bold bg-white hover:bg-studio-lavender"
          >
            戻る
          </button>
        )}
        {step === STEPS.length - 1 && (
          <button
            type="submit"
            className="flex-1 rounded-full font-rounded font-bold py-4 bg-studio-yellow border-2 border-studio-ink shadow-[4px_4px_0_#1F1A3D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1F1A3D] transition-all"
          >
            {STUDIO_BOOKING_URL ? "相談日時の予約へ進む" : "入力内容を確認する"}
          </button>
        )}
      </div>
    </form>
  );
}

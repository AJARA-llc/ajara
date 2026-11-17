"use client";

import { useEffect, useState, FormEvent } from "react";
import {
  STUDIO_BOOKING_URL,
  STUDIO_CONTACT_EMAIL,
  studioBuildKinds,
  studioStages,
} from "@/data/studio";

type Answers = {
  kind: string;
  stage: string;
  detail: string;
  name: string;
  email: string;
};

const STORAGE_KEY = "ajara-studio-consult";
const EMPTY: Answers = { kind: "", stage: "", detail: "", name: "", email: "" };
const STEP_LABELS = ["作りたいもの", "今の状況", "連絡先"];

function loadSaved(): Answers | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Answers) : null;
  } catch {
    return null;
  }
}

function save(answers: Answers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {}
}

function clearSaved() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

function mailtoHref(a: Answers) {
  const subject = encodeURIComponent(`【開発伴走 無料相談】${a.kind} - ${a.name}`);
  const body = encodeURIComponent(
    `お名前: ${a.name}\nメールアドレス: ${a.email}\n作りたいもの: ${a.kind}\n今の状況: ${a.stage}\n\nご相談内容:\n${a.detail || "（未入力）"}`
  );
  return `mailto:${STUDIO_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

const inputClass =
  "w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-snow placeholder-slate-600 focus:outline-none focus:border-accent/40 transition-colors";

function Choice({
  selected,
  onClick,
  label,
  hint,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  hint?: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={`w-full text-left rounded-xl border px-5 py-4 transition-all duration-200 ${
        selected
          ? "border-accent bg-accent/10 text-snow"
          : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25"
      }`}
    >
      <span className="block font-semibold">{label}</span>
      {hint && <span className="block text-xs text-slate-500 mt-1">{hint}</span>}
    </button>
  );
}

export default function StudioConsultForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const saved = loadSaved();
    if (saved) {
      setAnswers(saved);
      setDone(true);
    }
  }, []);

  const set = (patch: Partial<Answers>) => {
    setAnswers((prev) => ({ ...prev, ...patch }));
    setError("");
  };

  const next = () => {
    if (step === 0 && !answers.kind) return setError("作りたいものを1つ選んでください。");
    if (step === 1 && !answers.stage) return setError("今の状況を1つ選んでください。");
    setError("");
    setStep((s) => s + 1);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = answers.name.trim();
    const email = answers.email.trim();
    if (!name) return setError("お名前を入力してください。");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("メールアドレスを正しく入力してください。");
    if (!consent) return setError("プライバシーポリシーへの同意が必要です。");
    const finalAnswers = { ...answers, name, email };
    setAnswers(finalAnswers);
    save(finalAnswers);
    setDone(true);
  };

  const restart = () => {
    clearSaved();
    setAnswers(EMPTY);
    setConsent(false);
    setStep(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className="glass p-8 sm:p-10 text-center">
        <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-sans">Last Step</p>
        <h3 className="font-serif text-2xl text-snow mb-3">
          {STUDIO_BOOKING_URL ? "相談の日時を選んでください" : "メールで送信してください"}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          {STUDIO_BOOKING_URL
            ? "空いている日時から選ぶと、Google Meet のURLが入った確定メールが届きます。相談は30分・無料です。"
            : "ボタンを押すとメールアプリが開きます。内容を確認してそのまま送信してください。2営業日以内に、相談日時の候補をご連絡します。"}
        </p>

        <dl className="text-left text-sm bg-white/[0.03] border border-white/10 rounded-xl p-5 mb-8 space-y-2 max-w-md mx-auto">
          <div className="flex gap-3">
            <dt className="text-slate-500 shrink-0 w-24">作りたいもの</dt>
            <dd className="text-snow">{answers.kind}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="text-slate-500 shrink-0 w-24">今の状況</dt>
            <dd className="text-snow">{answers.stage}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="text-slate-500 shrink-0 w-24">お名前</dt>
            <dd className="text-snow break-all">{answers.name}</dd>
          </div>
        </dl>

        <div className="flex flex-col gap-3 max-w-md mx-auto">
          {STUDIO_BOOKING_URL ? (
            <>
              <a
                href={STUDIO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-accent hover:bg-accent-light text-navy-dark font-semibold py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                空いている日時を見る
              </a>
              <a
                href={mailtoHref(answers)}
                className="text-slate-400 hover:text-snow text-sm underline underline-offset-4 transition-colors"
              >
                相談内容をメールでも送っておく（任意）
              </a>
            </>
          ) : (
            <a
              href={mailtoHref(answers)}
              className="w-full bg-accent hover:bg-accent-light text-navy-dark font-semibold py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              メールで送信する
            </a>
          )}
          <button
            type="button"
            onClick={restart}
            className="text-slate-500 hover:text-slate-300 text-xs mt-2 transition-colors"
          >
            入力をやり直す
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="glass p-6 sm:p-10">
      <div className="mb-8">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>
            STEP {step + 1} / {STEP_LABELS.length}
          </span>
          <span>{STEP_LABELS[step]}</span>
        </div>
        <div
          className="h-1.5 rounded-full bg-white/10 overflow-hidden"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={STEP_LABELS.length}
          aria-valuenow={step + 1}
        >
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / STEP_LABELS.length) * 100}%` }}
          />
        </div>
      </div>

      {step === 0 && (
        <fieldset>
          <legend className="font-serif text-xl sm:text-2xl text-snow mb-6">何を作りたいですか？</legend>
          <div className="grid sm:grid-cols-2 gap-3" role="radiogroup">
            {studioBuildKinds.map((k) => (
              <Choice
                key={k.value}
                selected={answers.kind === k.value}
                onClick={() => set({ kind: k.value })}
                label={k.label}
                hint={k.hint}
              />
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset>
          <legend className="font-serif text-xl sm:text-2xl text-snow mb-6">今はどんな状況ですか？</legend>
          <div className="grid gap-3 mb-8" role="radiogroup">
            {studioStages.map((s) => (
              <Choice
                key={s.value}
                selected={answers.stage === s.value}
                onClick={() => set({ stage: s.value })}
                label={s.label}
              />
            ))}
          </div>
          <label htmlFor="studio-detail" className="block text-sm text-slate-400 mb-2">
            相談したいこと <span className="text-slate-600">（任意）</span>
          </label>
          <textarea
            id="studio-detail"
            rows={4}
            maxLength={1000}
            value={answers.detail}
            onChange={(e) => set({ detail: e.target.value })}
            className={`${inputClass} resize-none`}
            placeholder="例：趣味で作っているゲームを公開まで持っていきたい"
          />
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="space-y-6">
          <legend className="font-serif text-xl sm:text-2xl text-snow mb-6">ご連絡先を教えてください</legend>
          <div>
            <label htmlFor="studio-name" className="block text-sm text-slate-400 mb-2">
              お名前 <span className="text-accent/60">*</span>
            </label>
            <input
              id="studio-name"
              type="text"
              autoComplete="name"
              maxLength={100}
              value={answers.name}
              onChange={(e) => set({ name: e.target.value })}
              className={inputClass}
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label htmlFor="studio-email" className="block text-sm text-slate-400 mb-2">
              メールアドレス <span className="text-accent/60">*</span>
            </label>
            <input
              id="studio-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={254}
              value={answers.email}
              onChange={(e) => set({ email: e.target.value })}
              className={inputClass}
              placeholder="mail@example.com"
            />
          </div>
          <label className="flex items-start gap-3 text-sm text-slate-400 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                setError("");
              }}
              className="mt-1 accent-[#E8600A] w-4 h-4 shrink-0"
            />
            <span>
              <a href="/legal/privacy" target="_blank" className="text-accent underline underline-offset-4">
                プライバシーポリシー
              </a>
              に同意します
            </span>
          </label>
        </fieldset>
      )}

      <p role="alert" className="text-accent-light text-sm min-h-[1.5rem] mt-6">
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
            className="px-6 py-4 rounded-full border border-white/15 text-slate-300 hover:border-white/30 transition-colors"
          >
            戻る
          </button>
        )}
        {step < STEP_LABELS.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="flex-1 bg-accent hover:bg-accent-light text-navy-dark font-semibold py-4 rounded-full transition-all duration-300"
          >
            次へ
          </button>
        ) : (
          <button
            type="submit"
            className="flex-1 bg-accent hover:bg-accent-light text-navy-dark font-semibold py-4 rounded-full transition-all duration-300"
          >
            {STUDIO_BOOKING_URL ? "日時の選択へ進む" : "入力内容を確認する"}
          </button>
        )}
      </div>
    </form>
  );
}

import { STUDIO_CONTACT_EMAIL } from "@/data/studio";

export type ConsultAnswers = {
  purpose: string;
  level: string;
  detail: string;
  name: string;
  email: string;
};

const STORAGE_KEY = "ajara-studio-consult";

export function loadConsult(): ConsultAnswers | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsultAnswers) : null;
  } catch {
    return null;
  }
}

export function saveConsult(answers: ConsultAnswers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {}
}

export function clearConsult() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

export function consultMailto(a: ConsultAnswers) {
  const subject = encodeURIComponent(`【AJARA Studio 無料相談】${a.purpose} - ${a.name}`);
  const body = encodeURIComponent(
    `お名前: ${a.name}\nメールアドレス: ${a.email}\n相談目的: ${a.purpose}\n現在の状況: ${a.level}\n\n相談したい内容:\n${a.detail || "（未入力）"}`
  );
  return `mailto:${STUDIO_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

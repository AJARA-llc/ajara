import type { Metadata } from "next";
import CourseDetail from "@/components/CourseDetail";
import { getCourse } from "@/data/reskillingCourses";

const course = getCourse("ai-application")!;

export const metadata: Metadata = {
  title: `${course.title} — 法人向けAI研修（リスキリング助成金対象）| AJARA`,
  description:
    "実際の業務を題材に生成AIを使いこなす実践コース。12時間（60分×12コマ）・全12モジュールのカリキュラム。人材開発支援助成金など各種リスキリング助成金の対象要件を満たす設計。",
  alternates: { canonical: `https://ajara.co.jp/reskilling/${course.slug}` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <CourseDetail course={course} />;
}

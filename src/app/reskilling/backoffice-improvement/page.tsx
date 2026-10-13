import type { Metadata } from "next";
import CourseDetail from "@/components/CourseDetail";
import { getCourse } from "@/data/reskillingCourses";

const course = getCourse("backoffice-improvement")!;

export const metadata: Metadata = {
  title: `${course.title} — 総務・事務職向け法人研修（${course.trackLabel} 対応）| AJARA`,
  description:
    "改善対象の選定・工程分析・業務量測定・ムダの発見・原因分析・標準化・効果測定・改善計画まで、バックオフィス業務改善を学ぶeラーニング。12時間・全12章。人材開発支援助成金（人材育成支援コース）の対象要件を満たす設計。",
  alternates: { canonical: `https://ajara.co.jp/reskilling/${course.slug}` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <CourseDetail course={course} />;
}

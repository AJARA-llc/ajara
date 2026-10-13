import type { Metadata } from "next";
import CourseDetail from "@/components/CourseDetail";
import { getCourse } from "@/data/reskillingCourses";

const course = getCourse("information-management")!;

export const metadata: Metadata = {
  title: `${course.title} — 総務・事務職向け法人研修（${course.trackLabel} 対応）| AJARA`,
  description:
    "情報の分類・文書と電子データの管理・アクセス権限・引継ぎ・個人情報保護・機密情報・誤送信防止・インシデント対応まで、総務・事務職の情報管理を学ぶeラーニング。12時間・全12章。人材開発支援助成金（人材育成支援コース）の対象要件を満たす設計。",
  alternates: { canonical: `https://ajara.co.jp/reskilling/${course.slug}` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <CourseDetail course={course} />;
}

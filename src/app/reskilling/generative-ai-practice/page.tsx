import type { Metadata } from "next";
import CourseDetail from "@/components/CourseDetail";
import { getCourse } from "@/data/reskillingCourses";

const course = getCourse("generative-ai-practice")!;

export const metadata: Metadata = {
  title: `${course.title} — 総務・事務職向け法人研修（${course.trackLabel} 対応）| AJARA`,
  description:
    "社内文書・問い合わせ・議事録・契約書類・勤怠・経費・備品・採用事務・管理資料・業務フロー改善まで、総務・事務職の実務に生成AIを組み込むeラーニング。12時間・全12章。人材開発支援助成金（事業展開等リスキリング支援コース）の対象要件を満たす設計。",
  alternates: { canonical: `https://ajara.co.jp/reskilling/${course.slug}` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <CourseDetail course={course} />;
}

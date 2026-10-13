import type { Metadata } from "next";
import CourseDetail from "@/components/CourseDetail";
import { getCourse } from "@/data/reskillingCourses";

const course = getCourse("office-operations")!;

export const metadata: Metadata = {
  title: `${course.title} — 総務・事務職向け法人研修（${course.trackLabel} 対応）| AJARA`,
  description:
    "役割分担・依頼受付・期限管理・申請・文書・発注・会議運営・問い合わせ対応・ミス防止・改善まで、総務・事務職の社内業務管理を体系的に学ぶeラーニング。12時間・全12章。人材開発支援助成金（人材育成支援コース）の対象要件を満たす設計。",
  alternates: { canonical: `https://ajara.co.jp/reskilling/${course.slug}` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <CourseDetail course={course} />;
}

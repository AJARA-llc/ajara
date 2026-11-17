import type { Metadata } from "next";
import { studioShare } from "@/components/studio/share";
import StudioServicePage from "@/components/studio/StudioServicePage";

const title = "アプリ開発コーチング｜AJARA Studio";
const description =
  "作りたいアプリのアイデアを、企画から開発・公開までコーチング形式で伴走。アイデア整理・要件定義・技術選定・UI/UX設計の助言・進捗確認・テスト・公開支援まで。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://ajara.co.jp/studio/coaching" },
  ...studioShare("/studio/coaching", title, description, "coaching"),
};

export default function CoachingPage() {
  return (
    <StudioServicePage
      serviceId="coaching"
      lead="作りたいアプリのアイデアを持つ方に、企画から開発・公開までコーチング形式で伴走します。必要な知識は、プロジェクトを進めながら個別に身につけていきます。"
      audiences={[
        "アプリのアイデアはあるが、実現方法がわからない",
        "開発を始めたが、途中で止まっている",
        "技術選定や仕様設計で悩んでいる",
        "リリースまでの道筋を整理したい",
      ]}
      contentTitle="サポートすること"
      contents={[
        { title: "アイデア整理・要件定義", desc: "やりたいことを言葉にして、最初に作る範囲と必要な機能を決めます。" },
        { title: "技術選定", desc: "目的と経験に合った開発方法・ツール・サービスを一緒に選びます。" },
        { title: "UI/UX設計の助言", desc: "使う人にとってわかりやすい画面や流れになっているかを一緒に確認します。" },
        { title: "進捗確認・課題解決", desc: "定期的に進み具合を確認し、詰まっているところを一緒に解決します。" },
        { title: "テスト・公開支援", desc: "公開前の確認から、ストアやWebへのリリースまでをサポートします。" },
      ]}
      note={{
        title: "開発するのは、あなた自身です",
        body: "コーチングでは、原則としてご本人が開発の主体です。AJARA Studio は助言・レビュー・進行のサポートを担当し、あなたが自分の力でリリースまでたどり着けるように支えます。",
      }}
    />
  );
}

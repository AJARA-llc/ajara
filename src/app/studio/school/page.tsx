import type { Metadata } from "next";
import { studioShare } from "@/components/studio/share";
import StudioServicePage from "@/components/studio/StudioServicePage";

const title = "AIアプリ開発スクール｜AJARA Studio";
const description =
  "AIを活用して、自分でアプリを開発できるスキルを身につける塾形式の継続型サービス。AI開発ツールの使い方から企画・設計・開発・デバッグ・公開までを段階的に学べます。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://ajara.co.jp/studio/school" },
  ...studioShare("/studio/school", title, description, "school"),
};

export default function SchoolPage() {
  return (
    <StudioServicePage
      serviceId="school"
      lead="AIを活用して、自分でアプリを開発できるスキルを身につける塾形式の継続型サービスです。AI開発ツールの使い方から、企画・設計・開発・デバッグ・公開まで、段階的に学んでいきます。"
      audiences={[
        "アプリを作れるようになりたい初心者",
        "AIを活用した開発に興味がある",
        "副業・起業につながるスキルを身につけたい",
        "自分でサービスを開発・公開したい",
      ]}
      contentTitle="学べること"
      contents={[
        { title: "AI開発ツールの使い方", desc: "AIと対話しながらアプリを作るための、ツールの選び方と使い方を身につけます。" },
        { title: "アプリの企画・設計", desc: "作りたいものを、画面・機能・データに分けて整理する考え方を学びます。" },
        { title: "実践的な開発", desc: "実際に手を動かしてアプリを作り、動くものを完成させる経験を積みます。" },
        { title: "デバッグ", desc: "うまく動かないときの原因の見つけ方と、AIを使った直し方を学びます。" },
        { title: "公開", desc: "作ったアプリをインターネットに公開し、人に使ってもらうところまで進めます。" },
      ]}
      note={{
        title: "学び方",
        body: "定期的なオンライン指導・質問対応・制作物のレビューを組み合わせて、一人で止まらずに学び続けられる形を予定しています。具体的な内容は無料相談でご案内します。",
      }}
    />
  );
}

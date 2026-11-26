// Google カレンダーの予約スケジュール（予約ページ）の共有URL。空のままだと相談はメール送信にフォールバックする。
export const STUDIO_BOOKING_URL = "";

export const STUDIO_CONTACT_EMAIL = "contact@ajara.co.jp";

export const STUDIO_CTA = "30分の無料相談を予約する";
export const STUDIO_CTA_SUB = "まだアイデアがまとまっていなくても大丈夫。まずは気軽に話してみませんか？";

export const studioServices = [
  {
    id: "school",
    href: "/studio/school",
    label: "SERVICE 01",
    name: "AIアプリ開発スクール",
    catch: "AIアプリ開発者になろう。",
    short: "自分で作れるようになる",
    tag: "学んで作れるようになりたい",
    icon: "cap" as const,
    summary: "AIを活用して、自分の手でアプリを作れる力を身につける学びの場です。",
  },
  {
    id: "coaching",
    href: "/studio/coaching",
    label: "SERVICE 02",
    name: "アプリ開発コーチング",
    catch: "そのアイデア、リリースまで一緒に。",
    short: "アイデアを実現する",
    tag: "アイデアを実現したい",
    icon: "layers" as const,
    summary: "やりたいアイデアをもとに、設計から開発・リリースまで一緒に伴走するプランです。",
  },
];

// 講師紹介。photo が空のあいだは仮の枠を表示する（公開前に必ず写真を入れること）。
// 写真は public/images/studio/ に置き、"/images/studio/instructor.webp" のように指定する。
export const studioInstructor = {
  name: "平田 拓也",
  nameEn: "TAKUYA HIRATA",
  role: "合同会社AJARA 代表",
  photo: "",
  // 下書き（要確認）。事実として確認できる内容だけにしている。
  bio: [
    "AIを活用して、Webサービスやアプリ、ゲームの企画から開発・公開までを自ら手がけています。",
    "「学んで終わり」ではなく、自分のアイデアが実際に動き、人に届くところまで。つまずきやすいポイントを知っている立場から、一人ひとりのペースに合わせて伴走します。",
  ],
  points: ["企画から公開まで自分で開発", "AI開発ツールを日常的に活用", "オンラインで直接サポート"],
};

export const studioComparison = [
  { label: "主な目的", school: "AIアプリ開発スキルの習得", coaching: "特定のアプリのリリース" },
  { label: "出発点", school: "学びたい", coaching: "作りたいものがある" },
  { label: "進め方", school: "カリキュラム型", coaching: "プロジェクト型" },
  { label: "学習内容", school: "基礎から実践まで", coaching: "必要な知識を個別に習得" },
  { label: "成果目標", school: "自分で開発できる力", coaching: "アプリの完成・公開" },
];

export const studioPurposes = [
  { value: "スクール", label: "AIアプリ開発者になりたい", hint: "自分で作れるようになりたい" },
  { value: "コーチング", label: "作りたいアプリのアイデアがある", hint: "リリースまで進めたい" },
  { value: "未定", label: "まだ決まっていない", hint: "何から始めればいいか相談したい" },
];

export const studioLevels = [
  { value: "初心者", label: "初心者", hint: "アプリ開発もAIツールもこれから" },
  { value: "AIツールの利用経験あり", label: "AIツールを使ったことがある", hint: "ChatGPT などを使っている" },
  { value: "開発経験あり", label: "開発経験がある", hint: "プログラミングをしたことがある" },
  { value: "すでに開発中", label: "すでに開発中", hint: "作り始めているものがある" },
];

export const studioFaq = [
  {
    q: "プログラミング未経験でも大丈夫ですか？",
    a: "大丈夫です。AIアプリ開発スクールは、AI開発ツールの使い方から段階的に学べるように進めます。今の経験に合わせた始め方を、無料相談でご提案します。",
  },
  {
    q: "まだ作りたいものが決まっていなくても相談できますか？",
    a: "はい。「何から始めればいいかわからない」という段階のご相談も歓迎です。お話を伺いながら、スクールとコーチングのどちらが合うかも一緒に考えます。",
  },
  {
    q: "どんな開発環境が必要ですか？",
    a: "インターネットにつながるパソコンがあれば始められます。使うAIツールや開発環境は、作りたいものや目的に合わせて無料相談でご案内します。",
  },
  {
    q: "無料相談では何を話しますか？",
    a: "Google Meet で30分、やってみたいこと・今の経験・作りたいアプリについてお聞きし、合う進め方をご提案します。無理な勧誘はしません。",
  },
  {
    q: "料金はいくらですか？",
    a: "ご希望の内容や期間によって変わるため、無料相談でお話を伺ったうえで、具体的な内容と料金をご案内します。",
  },
  {
    q: "アプリの開発を代わりにやってもらえますか？",
    a: "AJARA Studio は、ご自身が開発の主体となって作れるように支援するサービスです。AJARA Studio は助言・レビュー・進行のサポートを担当します。",
  },
];

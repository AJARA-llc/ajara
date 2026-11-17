// Google カレンダーの予約スケジュール（予約ページ）の共有URL。空のままだと相談フォームはメール送信にフォールバックする。
export const STUDIO_BOOKING_URL = "";

export const STUDIO_CONTACT_EMAIL = "contact@ajara.co.jp";

export type StudioPlan = {
  id: string;
  label: string;
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  featured: boolean;
};

export const studioPlans: StudioPlan[] = [
  {
    id: "light",
    label: "PLAN 01",
    name: "ライト",
    tagline: "気軽につくる",
    price: "¥6,980",
    priceSuffix: "/月（税込）",
    description: "まずは学びながら作ってみたい初心者向けの、学習・コミュニティ型プランです。",
    features: ["月2回のグループ相談会", "教材・テンプレート", "会員コミュニティ", "共通質問チャンネル"],
    featured: false,
  },
  {
    id: "standard",
    label: "PLAN 02",
    name: "スタンダード",
    tagline: "一緒につくる",
    price: "¥19,800",
    priceSuffix: "/月（税込）",
    description: "自分で開発しながら、要所で専門家に相談したい方向けの主力プランです。",
    features: [
      "ライトプランの全内容",
      "月2回・各45分の個別相談",
      "月10件までのチャット質問",
      "設計・技術選定・開発レビュー",
    ],
    featured: true,
  },
  {
    id: "project",
    label: "PLAN 03",
    name: "プロジェクト伴走",
    tagline: "完成を目指す",
    price: "¥39,800〜",
    priceSuffix: "/月（税込）",
    description: "アプリ・ゲームの完成や公開をゴールに、企画から公開まで伴走します。",
    features: [
      "企画・要件定義・仕様設計",
      "開発計画・進捗確認",
      "定期オンライン相談",
      "開発レビュー・公開支援",
      "支援内容に応じて個別見積もり",
    ],
    featured: false,
  },
];

export const studioExtraServices = [
  { name: "プロジェクト管理付き伴走", price: "月額 ¥79,800〜（税込）" },
  { name: "開発代行", price: "個別見積もり" },
];

export const studioPricingNotes = [
  "入会金は無料です。",
  "月額プランは相談・学習支援のサービスです。開発作業の代行は含みません（開発代行は別途お見積もり）。",
  "支援回数・対応範囲・契約期間は、お申し込み前に書面でご案内します。",
  "プロジェクト伴走以上のプランは、無料相談のあとに正式なお見積もりをお出しします。",
];

export const studioBuildKinds = [
  { value: "アプリ開発", label: "アプリ", hint: "スマホアプリ・Webアプリ" },
  { value: "ゲーム開発", label: "ゲーム", hint: "スマホ・PC・ブラウザゲーム" },
  { value: "AI活用", label: "AIを使ったもの", hint: "AIツール・業務の自動化" },
  { value: "何から始めればよいかわからない", label: "まだ決まっていない", hint: "何から始めればいいか相談したい" },
];

export const studioStages = [
  { value: "アイデアだけある", label: "アイデアだけある" },
  { value: "勉強中・作り始めたところ", label: "勉強中・作り始めたところ" },
  { value: "開発中で行き詰まっている", label: "開発中で、行き詰まっている" },
  { value: "公開済みで改善したい", label: "公開済みで、改善したい" },
];

export const studioFaq = [
  {
    q: "プログラミング未経験でも相談できますか？",
    a: "はい、できます。「何から始めればいいかわからない」という段階のご相談も歓迎です。無料相談で今の状況とやりたいことをお聞きし、無理のない進め方をご提案します。",
  },
  {
    q: "無料相談では何をしますか？",
    a: "30分のオンライン相談（Google Meet）です。作りたいもの・開発経験・ご予算・必要な支援の範囲をお聞きし、合うプランや進め方をご案内します。無理な勧誘はしません。",
  },
  {
    q: "月額プランで開発を代わりにやってもらえますか？",
    a: "月額プランは、ご自身で作るための相談・学習支援です。開発作業そのものの代行は含みません。代わりに作ってほしい場合は、開発代行として個別にお見積もりします。",
  },
  {
    q: "どんなものを作れますか？",
    a: "スマホアプリ・Webアプリ、ブラウザやスマホ向けのゲーム、生成AIを使ったツールや業務の自動化などのご相談に対応しています。内容によってはお受けできない場合もあるため、まずはご相談ください。",
  },
  {
    q: "法人でも利用できますか？",
    a: "はい。個人の方だけでなく、事業者・法人の方の新規サービス開発や社内ツール開発のご相談も承ります。社員向けの研修をご検討の場合は、法人研修（リスキリング）もご覧ください。",
  },
];

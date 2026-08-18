import type { Metadata } from "next";
import LegalChrome, { LegalSection, Fill } from "@/components/LegalChrome";

export const metadata: Metadata = {
  title: "助成金に関する表示について | 合同会社AJARA",
  description:
    "合同会社AJARAのAI研修・リスキリング事業における、リスキリング助成金・人材開発支援助成金等に関する表示と免責事項。誇大な表現を避け、正確な情報をご案内します。",
  alternates: { canonical: "https://ajara.co.jp/legal/subsidy" },
  robots: { index: true, follow: true },
};

export default function SubsidyPage() {
  return (
    <LegalChrome
      title="助成金に関する表示について"
      subtitle="当社の研修・リスキリング事業に関連する助成金の取り扱いと、広告表示上の免責事項をご案内します。景品表示法・特定商取引法の趣旨に沿い、誤認を招かない表示を心がけています。"
      updated="2026年8月18日"
    >
      <LegalSection heading="1. 助成金を受給されるのはお客様（事業主）です">
        <p>
          当社ページに記載する「助成金対象」「リスキリング助成金の対象要件を満たす設計」等の表現は、
          <strong className="text-slate-200">当社の研修が各種助成金の対象要件を満たすよう設計されていること</strong>
          を意味します。助成金を申請・受給されるのは、研修を受講される事業主（雇用主）ご自身であり、当社が事業主に代わって助成金を受給・給付するものではありません。
        </p>
      </LegalSection>

      <LegalSection heading="2. 支給を保証するものではありません">
        <p>
          助成金の支給可否・支給額は、事業主の申請内容、労働者の要件、事業所の状況、および各労働局・自治体・実施機関の審査によって決定されます。
          <strong className="text-slate-200">当社は助成金の支給・採択を保証しません。</strong>
          審査の結果、支給されない場合や、支給額が想定と異なる場合があります。研修費は助成金の支給状況にかかわらず、ご契約条件に従って全額お支払いいただくことが前提です。
        </p>
      </LegalSection>

      <LegalSection heading="3. 制度・助成率・上限は改正されます">
        <p>
          ページ内で例示する制度（例：東京都 DXリスキリング助成金、人材開発支援助成金 事業展開等リスキリング支援コース 等）の名称・助成率・上限額・対象要件・申請期限は、
          <strong className="text-slate-200">予告なく改正・終了される場合があります。</strong>
          試算例は一定の前提に基づく参考値であり、実際の支給額を約束するものではありません。最新かつ正確な内容は、必ず厚生労働省・各都道府県労働局・各自治体・各実施機関の公式情報をご確認ください。
        </p>
      </LegalSection>

      <LegalSection heading="4. 申請手続きの主体">
        <p>
          助成金の計画届・支給申請等の手続きは、原則として事業主ご自身、または事業主が委任される社会保険労務士が行います。当社は、研修の実施と、申請に必要となる実施記録・カリキュラム・受講者名簿・請求書等の資料のご提供までを担います。
          <strong className="text-slate-200">当社は社会保険労務士ではなく、助成金申請の代行・代理は行いません。</strong>
          申請そのものの可否判断・書類作成代行が必要な場合は、御社の顧問社労士または各窓口をご利用ください。
        </p>
      </LegalSection>

      <LegalSection heading="5. 当社の認定状況（重要）">
        <p>
          AI研修・リスキリング事業は当社が2026年に立ち上げた新規事業です。現時点で、当社の講座は
          <strong className="text-slate-200">認定職業訓練・教育訓練給付制度の指定講座・その他の公的認定を取得したものではありません</strong>
          （<Fill>必要に応じて申請を準備中／取得済みの場合は認定名・認定番号を記載</Fill>）。教育訓練給付（受講者個人向け）の対象講座ではない点にご注意ください。当社研修が対象となり得るのは、主に事業主向けの人材開発支援助成金や自治体のリスキリング関連助成金です。
        </p>
      </LegalSection>

      <LegalSection heading="6. 個別要件は事前にご確認ください">
        <p>
          助成金には、OFF-JTの実訓練時間（例：人材開発支援助成金では10時間以上が基本）、対象労働者、賃金要件、計画届の事前提出期限（例：訓練開始の原則1ヶ月前まで）など、制度ごとに細かな要件があります。御社が対象となり得るか、どの制度が適するかは、無料診断時に一緒に整理し、最終的な判断は各窓口・顧問社労士のご確認をもって行ってください。
        </p>
      </LegalSection>

      <LegalSection heading="お問い合わせ">
        <p>
          助成金対応を含むご相談は{" "}
          <a href="mailto:contact@ajara.co.jp" className="text-accent underline underline-offset-4">
            contact@ajara.co.jp
          </a>{" "}
          または{" "}
          <a href="/reskilling#contact" className="text-accent underline underline-offset-4">
            無料診断のお問い合わせフォーム
          </a>{" "}
          からお気軽にどうぞ。
        </p>
      </LegalSection>
    </LegalChrome>
  );
}

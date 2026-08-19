import type { Metadata } from "next";
import LegalChrome, { LegalSection } from "@/components/LegalChrome";

export const metadata: Metadata = {
  title: "利用規約 | 合同会社AJARA",
  description:
    "合同会社AJARAが提供するAI研修・リスキリング・AI導入コンサルティング等のサービスに関する利用規約。",
  alternates: { canonical: "https://ajara.co.jp/legal/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalChrome
      title="利用規約"
      subtitle="本規約は、合同会社AJARA（以下「当社」）が提供するAI研修・リスキリング・AI導入コンサルティング等のサービス（以下「本サービス」）に適用されます。"
      updated="2026年8月18日"
    >
      <LegalSection heading="第1条（適用）">
        <p>
          本規約は、本サービスの利用に関する当社とお客様との間の一切の関係に適用されます。個別の契約書・見積書・仕様書等で本規約と異なる定めをした場合は、当該個別の定めが優先します。
        </p>
      </LegalSection>

      <LegalSection heading="第2条（定義）">
        <ul className="list-disc pl-5 space-y-1">
          <li>「本サービス」とは、当社が提供する研修、ハンズオン、導入伴走コンサルティング、カリキュラム開発、無料診断等を指します。</li>
          <li>「お客様」とは、本サービスの提供を受ける法人・団体・個人事業主を指します。</li>
        </ul>
      </LegalSection>

      <LegalSection heading="第3条（申込みと契約の成立）">
        <p>
          お客様が当社所定の方法で申込みを行い、当社がこれを承諾する旨を通知した時点、または当社とお客様が契約書・発注書等を取り交わした時点で、本サービスに関する契約が成立します。無料診断は、原則として契約成立前のご相談として提供します。
        </p>
      </LegalSection>

      <LegalSection heading="第4条（料金および支払い）">
        <p>
          本サービスの料金、支払方法および支払時期は、各サービスページ・お見積書・ご契約書の定めによります。料金は税抜表示とし、別途消費税を申し受けます。振込手数料はお客様のご負担とします。
        </p>
      </LegalSection>

      <LegalSection heading="第5条（役務の提供・キャンセル・中途解約）">
        <p>
          本サービスの提供時期は両者協議のうえ決定します。役務の性質上、提供後の返金はお受けできません。実施日前のキャンセル料、継続契約の中途解約条件は、
          <a href="/legal/tokushoho" className="text-accent underline underline-offset-4">特定商取引法に基づく表記</a>
          および個別のご契約書の定めによります。
        </p>
      </LegalSection>

      <LegalSection heading="第6条（助成金の取り扱い）">
        <p>
          当社の研修は各種助成金の対象要件を満たすよう設計しますが、助成金を受給されるのはお客様（事業主）であり、当社が支給を保証するものではありません。詳細は
          <a href="/legal/subsidy" className="text-accent underline underline-offset-4">助成金に関する表示について</a>
          に定めるとおりとします。
        </p>
      </LegalSection>

      <LegalSection heading="第7条（知的財産権）">
        <p>
          当社が提供する研修教材・資料・カリキュラム・ツール等に関する著作権その他の知的財産権は、当社または正当な権利者に帰属します。お客様は、社内利用の範囲を超えて、当社の事前の書面による同意なく、これらを複製・改変・第三者へ提供・再配布してはなりません。お客様の業務データ・成果物に関する権利はお客様に帰属します。
        </p>
      </LegalSection>

      <LegalSection heading="第8条（秘密保持）">
        <p>
          当社およびお客様は、本サービスの提供に関連して知り得た相手方の秘密情報を、相手方の事前の同意なく第三者に開示せず、本サービスの目的以外に利用しません。生成AIの利用にあたっては、当社は、お客様の機密情報・個人情報の取り扱いについて事前に協議し、適切な範囲で利用します。
        </p>
      </LegalSection>

      <LegalSection heading="第9条（禁止事項）">
        <p>お客様は、本サービスの利用にあたり、次の行為をしてはなりません。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>法令または公序良俗に違反する行為</li>
          <li>当社または第三者の権利・利益を侵害する行為</li>
          <li>当社の提供物を許諾範囲を超えて利用・転載・再販する行為</li>
          <li>虚偽の情報を用いて助成金等の申請を行い、または当社にこれを求める行為</li>
        </ul>
      </LegalSection>

      <LegalSection heading="第10条（免責）">
        <p>
          当社は、本サービスの提供にあたり合理的な注意を尽くしますが、生成AIの出力の正確性・完全性・特定目的への適合性、および本サービスによって得られる業務改善・成果を保証するものではありません。当社の責めに帰すべき事由による損害賠償責任は、法令上許容される範囲で、お客様が当該サービスについて当社に支払った金額を上限とします。ただし、当社の故意または重過失による場合はこの限りではありません。
        </p>
      </LegalSection>

      <LegalSection heading="第11条（反社会的勢力の排除）">
        <p>
          当社およびお客様は、自らが暴力団等の反社会的勢力に該当せず、将来にわたっても該当しないことを表明・確約します。相手方が本条に違反した場合、催告なく契約を解除できます。
        </p>
      </LegalSection>

      <LegalSection heading="第12条（本規約の変更）">
        <p>
          当社は、必要と判断した場合、本規約を変更することがあります。変更後の規約は本ページに掲載した時点で効力を生じます。
        </p>
      </LegalSection>

      <LegalSection heading="第13条（準拠法および管轄）">
        <p>
          本規約は日本法に準拠します。本サービスに関して当社とお客様との間に紛争が生じた場合は、
          東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </LegalSection>
    </LegalChrome>
  );
}

import type { Metadata } from "next";
import LegalChrome, { LegalSection, Fill } from "@/components/LegalChrome";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 合同会社AJARA",
  description:
    "合同会社AJARAの個人情報の取り扱いについて。取得する情報、利用目的、第三者提供、開示請求の窓口等を定めます。",
  alternates: { canonical: "https://ajara.co.jp/legal/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalChrome
      title="プライバシーポリシー"
      subtitle="合同会社AJARA（以下「当社」）は、お客様の個人情報を適切に取り扱うため、以下の方針を定めます。"
      updated="2026年8月18日"
    >
      <LegalSection heading="1. 事業者情報">
        <p>
          事業者名：合同会社AJARA
          <br />
          代表社員：平田 拓也
          <br />
          所在地：〒<Fill>登記上の本店所在地</Fill>
          <br />
          連絡先：contact@ajara.co.jp
        </p>
      </LegalSection>

      <LegalSection heading="2. 取得する個人情報">
        <p>当社は、お問い合わせ・お申し込みの際に、次の情報を取得することがあります。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>会社名・団体名</li>
          <li>お名前</li>
          <li>メールアドレス</li>
          <li>ご相談内容・お問い合わせ内容に含まれる情報</li>
          <li>研修・コンサルティングの実施に伴い提供いただく業務関連情報</li>
        </ul>
        <p className="text-slate-500 text-xs">
          ※ 当ページのお問い合わせフォームは、送信時にお客様のメールソフトを起動する方式（mailto）を採用しており、入力内容が当社Webサーバーに自動送信・蓄積されることはありません。実際に送信されたメールは、当社のメール環境で受信・保管します。
        </p>
      </LegalSection>

      <LegalSection heading="3. 利用目的">
        <ul className="list-disc pl-5 space-y-1">
          <li>お問い合わせ・ご相談への回答、および連絡のため</li>
          <li>研修・コンサルティング等のサービス提供、およびその品質向上のため</li>
          <li>お見積り・ご契約・請求等の事務手続きのため</li>
          <li>助成金の対象要件を満たす研修設計・実施記録の作成のため（該当する場合）</li>
          <li>法令・ガイドラインに基づく対応のため</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. 第三者への提供">
        <p>
          当社は、次の場合を除き、あらかじめご本人の同意を得ることなく個人情報を第三者に提供しません。
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>法令に基づく場合</li>
          <li>人の生命・身体・財産の保護に必要で、本人の同意取得が困難な場合</li>
          <li>
            助成金の申請支援に関連して、ご本人（事業主）の同意のうえ、御社の顧問社会保険労務士・労働局・自治体・実施機関等へ必要な範囲で情報を連携する場合
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. 業務委託・外部サービス">
        <p>
          サービス提供に必要な範囲で、業務の一部を外部に委託し、または外部サービスを利用することがあります。委託先・利用サービスに対しては、適切な監督・契約を行います。
          （利用する外部サービスの例：メール送受信サービス、Webサイトのホスティング事業者 等。
          <Fill>アクセス解析（Google Analytics 等）や外部フォームを導入する場合は、その名称と目的をここに追記</Fill>）
        </p>
        <p className="text-slate-500 text-xs">
          ※ 実際に利用しているサービスのみを記載する方針です。導入していない解析ツール等は記載しません。
        </p>
      </LegalSection>

      <LegalSection heading="6. Cookie等の利用">
        <p>
          当サイトは、表示・動作の最適化のためにCookie等を利用する場合があります。ブラウザの設定によりCookieを無効化できますが、一部機能が利用できなくなる場合があります。
          <Fill>広告・解析目的のCookieを利用する場合は、その旨と用途をここに明記</Fill>。
        </p>
      </LegalSection>

      <LegalSection heading="7. 保存期間">
        <p>
          取得した個人情報は、利用目的の達成に必要な期間、および法令で保存が求められる期間（帳票類等）保管し、不要となった後は適切に消去または廃棄します。
        </p>
      </LegalSection>

      <LegalSection heading="8. 開示・訂正・利用停止等の請求">
        <p>
          ご本人からの個人情報の開示・訂正・追加・削除・利用停止・第三者提供の停止のご請求には、ご本人であることを確認のうえ、法令に従い遅滞なく対応します。窓口は
          <a href="mailto:contact@ajara.co.jp" className="text-accent underline underline-offset-4">contact@ajara.co.jp</a>
          です。
        </p>
      </LegalSection>

      <LegalSection heading="9. 安全管理措置">
        <p>
          当社は、個人情報の漏えい・滅失・毀損の防止その他の安全管理のために、必要かつ適切な措置を講じます。
        </p>
      </LegalSection>

      <LegalSection heading="10. 本ポリシーの改定">
        <p>
          当社は、法令の変更や事業内容の変更等に応じて本ポリシーを改定することがあります。改定後の内容は本ページに掲載した時点で効力を生じます。
        </p>
      </LegalSection>
    </LegalChrome>
  );
}

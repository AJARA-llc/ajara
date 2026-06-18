# AJARA - コーポレートサイト

合同会社AJARAの公式ウェブサイト。モダンなデザインとアニメーションで企業理念・サービス・チームを紹介するランディングページです。

## 主な機能

- **WebGL パーティクルアニメーション** - Hero セクションのインタラクティブキャンバス
- **スクロールアニメーション** - Framer Motion によるフェードイン・進捗インジケーター
- **レスポンシブデザイン** - 320px〜1440px 対応
- **日英バイリンガル** - 日本語・英語コンテンツ

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript 5 |
| UI | React 18, Tailwind CSS 3.4 |
| アニメーション | Framer Motion 12 |
| フォント | DM Sans, Noto Sans JP, Noto Serif JP |

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## プロジェクト構成

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ランディングページ
│   └── globals.css         # グローバルスタイル
└── components/
    ├── HeroSection.tsx      # ヒーローセクション
    ├── HeroCanvas.tsx       # WebGL パーティクル
    ├── Navigation.tsx       # ヘッダーナビ
    ├── ServicesSection.tsx   # サービス紹介
    ├── HowWeWorkSection.tsx  # ワークフロー紹介
    ├── ProductsSection.tsx   # プロダクト紹介
    ├── PhilosophySection.tsx # 企業理念
    ├── TeamSection.tsx       # チーム紹介
    ├── ContactSection.tsx    # お問い合わせ
    ├── FadeInSection.tsx     # スクロールアニメーション
    ├── ScrollProgress.tsx    # 進捗インジケーター
    ├── FloatingCTA.tsx       # フローティングCTA
    └── Footer.tsx            # フッター
```

## AEGIS サブモジュール

`aegis/` ディレクトリに自律エージェント基盤 (24エージェント × 6部門) を含みます。詳細は `aegis/ALP_VISION.md` を参照してください。

## スクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | プロダクションビルド |
| `npm run start` | プロダクションサーバー起動 |
| `npm run lint` | ESLint 実行 |

## ライセンス

Private - All rights reserved.

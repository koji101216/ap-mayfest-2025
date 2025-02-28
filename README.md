# 五月祭2025 工学博覧会

![Next.js](https://img.shields.io/badge/Next.js-15.2.0-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6)

東京大学五月祭2025における工学博覧会の公式ウェブサイトリポジトリです。各種展示や企画の紹介、開催情報を掲載するサイトのソースコードを管理しています。

## 機能

- 最新の技術スタックを使用した高品質なUI
- レスポンシブデザイン対応
- 各種セクション（概要、展示一覧、アクセス情報など）
- アニメーションと視覚効果

## 技術スタック

- **フレームワーク**: Next.js 15, React 19
- **スタイリング**: Tailwind CSS 4
- **言語**: TypeScript 5
- **アニメーション**: Framer Motion
- **3Dグラフィック**: Three.js

## 始め方

### 必要環境

- Node.js 20.x 以降
- npm

### セットアップ手順

```bash
# リポジトリをクローン
git clone https://github.com/your-username/ap-mayfest-2025.git
cd ap-mayfest-2025

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) にアクセスすると開発環境でサイトが表示されます。

### ビルドと本番環境

```bash
# 本番用ビルド
npm run build

# ビルド済みアプリケーションの起動
npm run start
```

## プロジェクト構成

```
ap-mayfest-2025/
├── app/                # Next.jsアプリケーション
│   ├── page.tsx        # メインページ
│   └── layout.tsx      # レイアウト
├── components/         # UIコンポーネント
│   ├── Hero.tsx        # ヒーローセクション
│   ├── About.tsx       # 概要セクション
│   ├── ExhibitionList.tsx  # 展示リスト
│   └── ...             # その他コンポーネント
├── lib/                # ユーティリティ
└── public/             # 静的アセット
```

## スクリプト

- `npm run dev` - 開発サーバーの起動
- `npm run build` - 本番用ビルド
- `npm run start` - ビルド済みアプリケーションの起動
- `npm run lint` - コード品質チェック
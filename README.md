# Frobnitz

Vue + TypeScript モノレポ for Webアプリケーションフロントエンド開発

## 概要

このプロジェクトは、Vue.js + TypeScriptを使用したWebアプリケーションフロントエンド開発のためのモノレポ構成です。パッケージは以下の3つに分かれています：

- **Controls** (`@frobnitz/controls`): UIコンポーネントライブラリ
- **Common** (`@frobnitz/common`): 共通関数とユーティリティ
- **Pages** (`@frobnitz/pages`): ページ固有のコンポーネント

## プロジェクト構成

```
Frobnitz/
├── packages/
│   ├── controls/          # UIコントロール・コンポーネント
│   ├── common/           # 共通関数・ユーティリティ
│   └── pages/            # ページごとのコンポーネント
├── apps/
│   └── web-app/          # サンプルWebアプリケーション
├── package.json          # ルートパッケージ設定
├── tsconfig.json         # TypeScript設定
└── vite.config.ts        # Vite設定
```

## セットアップ

### 前提条件

- Node.js 16.0.0以上
- npm 8.0.0以上

### インストール

```bash
npm install
```

## 開発

### 全てのパッケージをビルド

```bash
npm run build
```

### 開発モード（ウォッチモード）

```bash
npm run dev
```

### サンプルアプリケーションの実行

```bash
cd apps/web-app
npm run dev
```

### リント

```bash
npm run lint
```

## パッケージ詳細

### @frobnitz/controls

UIコンポーネントライブラリ。再利用可能なUIコントロールを提供します。

**含まれるコンポーネント:**
- `FbButton`: カスタマイズ可能なボタンコンポーネント
- `FbInput`: 入力フィールドコンポーネント

**使用例:**
```vue
<template>
  <FbButton variant="primary" size="large" @click="handleClick">
    クリック
  </FbButton>
  <FbInput v-model="email" type="email" label="メールアドレス" />
</template>

<script setup>
import { FbButton, FbInput } from '@frobnitz/controls'
</script>
```

### @frobnitz/common

共通ユーティリティ関数ライブラリ。

**含まれる機能:**
- 日付フォーマット関数 (`formatDate`, `formatDateTime`, `getRelativeTime`)
- バリデーション関数 (`isValidEmail`, `validatePassword`, `isRequired`)
- ユーティリティ関数 (`debounce`, `throttle`, `deepClone`, `generateUUID`)

**使用例:**
```typescript
import { formatDate, isValidEmail, debounce } from '@frobnitz/common'

const today = formatDate(new Date(), 'ja-JP')
const isEmailValid = isValidEmail('test@example.com')
const debouncedFunction = debounce(myFunction, 300)
```

### @frobnitz/pages

ページ固有のコンポーネントライブラリ。

**含まれるページ:**
- `LoginPage`: ログインページコンポーネント
- `DashboardPage`: ダッシュボードページコンポーネント

**使用例:**
```vue
<template>
  <LoginPage @login="handleLogin" />
  <DashboardPage :user-name="userName" @logout="handleLogout" />
</template>

<script setup>
import { LoginPage, DashboardPage } from '@frobnitz/pages'
</script>
```

## 技術スタック

- **Vue.js 3**: リアクティブフレームワーク
- **TypeScript**: 型安全性
- **Vite**: 高速ビルドツール
- **NPM Workspaces**: モノレポ管理

## 開発ガイドライン

### 新しいコンポーネントの追加

1. 適切なパッケージ（controls, common, pages）にコンポーネントを作成
2. `src/index.ts`にエクスポートを追加
3. TypeScriptの型定義を適切に設定
4. ビルドとリントを実行して確認

### パッケージ間の依存関係

- `@frobnitz/common`: 依存関係なし（基底パッケージ）
- `@frobnitz/controls`: Vue.jsのみに依存
- `@frobnitz/pages`: `@frobnitz/controls`と`@frobnitz/common`に依存

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
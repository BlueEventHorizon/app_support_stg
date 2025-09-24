# アプリサポートサイト

iOSアプリケーションのサポートサイトです。静的サイトジェネレーターを使わず、純粋なHTML/JavaScript/CSSで構築されています。

## 特徴

- 📱 iOS専用アプリのサポート
- 🚀 ビルドプロセス不要の静的サイト
- 📝 Markdownファイルによるドキュメント管理
- 🔧 JSONベースのコンテンツ管理（app-info.json）
- 📧 シンプルなmailtoリンクによるお問い合わせフォーム
- ⚙️ 中央集約型の設定管理（config.js）

## ディレクトリ構成

```
docs/
├── index.html                    # トップページ
├── privacy.html                  # サイト全体のプライバシーポリシー
├── assets/
│   ├── css/
│   │   └── style.css            # サイト全体のスタイル
│   └── js/
│       ├── config.js            # 中央設定ファイル
│       ├── home-loader.js       # トップページ用データローダー
│       ├── app-loader.js        # アプリ詳細ページ用ローダー
│       ├── markdown-loader.js   # Markdownファイルローダー
│       └── mailto-form.js      # メールフォームハンドラー
└── apps/
    └── contact-b/               # アプリごとのディレクトリ
        ├── app-info.json        # アプリの全情報
        ├── index.html           # アプリ詳細ページ
        ├── support.html         # サポートページ
        ├── privacy.md           # プライバシーポリシー
        ├── privacy.html         # プライバシーポリシー表示用
        ├── terms.md            # 利用規約
        ├── terms.html          # 利用規約表示用
        └── assets/
            └── images/
                └── contact-b-icon.png  # アプリアイコン
```

## セットアップ

### 1. 基本設定

`docs/assets/js/config.js` を編集して、サイト全体の設定を行います：

```javascript
const CONFIG = {
    // 会社・サービス情報
    company: {
        name: "あなたの組織名",
        copyright: "© 2025 あなたの組織名. All rights reserved."
    },

    // 連絡先情報
    contact: {
        mainEmail: "contact.btype@gmail.com",
        supportEmail: "contact.btype@gmail.com"
    }
};
```

### 2. お問い合わせフォームの仕組み

シンプルなmailtoリンクを使用したフォーム実装：

✅ **メリット**:
- サーバー不要
- 完全無料
- ユーザーが送信内容を確認可能
- プライバシー保護（データを保存しない）

**仕組み**:
1. ユーザーがフォームに入力
2. 送信ボタンクリックでJavaScriptが内容を取得
3. mailtoリンクを生成してメールクライアントを起動
4. ユーザーがメールを送信

### 3. ローカルサーバーでの動作確認

Markdownファイルの読み込みには HTTPサーバーが必要です：

```bash
# Python 3
cd docs
python3 -m http.server 8000

# Node.js
npx http-server

# VS Code
# Live Server拡張機能を使用
```

ブラウザで http://localhost:8000 にアクセスして確認。

## 新しいアプリの追加

1. テンプレートを参照： [APP_TEMPLATE.md](APP_TEMPLATE.md)
2. `docs/apps/your-app-id/` ディレクトリを作成
3. 必要なファイルを配置（app-info.json が最重要）
4. トップページ（index.html）にアプリカードを追加

## カスタマイズ

詳細なカスタマイズ方法は [CUSTOMIZE.md](CUSTOMIZE.md) を参照してください。

### アプリ情報の管理

各アプリの情報は `app-info.json` で一元管理されています：

- アプリの基本情報（名前、説明、アイコン）
- 機能一覧
- 動作環境
- 料金体系
- よくある質問
- 各種リンク

詳細は [APP_INFO_GUIDE.md](APP_INFO_GUIDE.md) を参照してください。

## 主な機能

### 動的コンテンツ読み込み

- `data-app` 属性：app-info.json からデータを自動読み込み
- `data-config` 属性：config.js から設定を自動適用
- `data-markdown` 属性：Markdownファイルを自動変換・表示

### アイコン表示

アプリアイコンは3種類の方法で設定可能：

1. 画像ファイル（推奨）
2. Font Awesomeアイコン
3. 絵文字

App Store標準の22.5%角丸が自動適用されます。

## トラブルシューティング

### Markdownが読み込まれない

- `file://` プロトコルではCORS制限により読み込めません
- HTTPサーバー経由でアクセスしてください

### アイコンが表示されない

- 画像パスが正しいか確認
- app-info.json の設定を確認
- ブラウザの開発者ツールでエラーを確認

### メールクライアントが開かない

- ブラウザの設定でメールクライアントが設定されているか確認
- 代替案：表示されたメールアドレスに直接送信

## 現在のステータス

### ✅ 実装済み機能

- お問い合わせフォーム（mailtoリンク方式）
- アプリ詳細ページ（連絡先【B】）
- プライバシーポリシー・利用規約
- 動的コンテンツ読み込み（JSON/Markdown）
- レスポンシブデザイン

### 📝 今後の追加予定

- 追加アプリのサポートページ
- FAQ の充実
- 多言語対応（必要に応じて）

## 技術スタック

- **HTML5** - 構造
- **CSS3** - スタイリング
- **JavaScript (ES6+)** - 動的機能
- **Font Awesome** - アイコン
- **Marked.js** - Markdown変換

## ライセンス

© 2025 Beowulf-Technology. All rights reserved.

## 関連ドキュメント

- [APP_INFO_GUIDE.md](APP_INFO_GUIDE.md) - app-info.json の詳細仕様
- [APP_TEMPLATE.md](APP_TEMPLATE.md) - 新規アプリ追加の完全ガイド
- [CUSTOMIZE.md](CUSTOMIZE.md) - カスタマイズガイド
# カスタマイズガイド

このドキュメントでは、アプリサポートサイトのカスタマイズ方法について説明します。

## 目次
1. [設定ファイル (config.js)](#設定ファイル-configjs)
2. [アプリ情報の管理 (app-info.json)](#アプリ情報の管理-app-infojson)
3. [新しいアプリの追加](#新しいアプリの追加)

## 設定ファイル (config.js)

`/docs/assets/js/config.js` で全サイト共通の設定を一元管理できます。

### 主な設定項目

```javascript
const CONFIG = {
    // 会社・サービス情報
    company: {
        name: "Beowulf-Technology",  // 屋号・組織名
        copyright: "© 2025 Beowulf-Technology. All rights reserved.",
        year: "2025"
    },

    // 連絡先情報
    contact: {
        mainEmail: "contact.btype@gmail.com",     // メインの問い合わせ先
        privacyEmail: "contact.btype@gmail.com",  // プライバシー関連
        supportEmail: "contact.btype@gmail.com"   // サポート用
    },

    // Google Apps Script設定（お問い合わせフォーム用）
    googleAppsScript: {
        url: "YOUR_GOOGLE_APPS_SCRIPT_URL"  // Google Apps ScriptのWeb App URL
    },

    // 各アプリの情報
    apps: {
        contactB: {
            name: "連絡先【B】",
            copyright: "© 2025 Beowulf-Technology. All rights reserved.",
            description: "シンプルで使いやすい連絡先管理アプリです。"
        }
    }
};
```

### 設定の反映方法

HTMLファイルで `data-config` 属性を使用すると、自動的に設定値が反映されます：

```html
<!-- メールアドレスの表示 -->
<span data-config="contact.mainEmail">メールアドレス</span>

<!-- 著作権表記 -->
<p data-copyright="main">著作権</p>
```

## アプリ情報の管理 (app-info.json)

各アプリの詳細情報は `/docs/apps/{app-id}/app-info.json` で管理します。

### 基本構造

```json
{
  "app": {
    "id": "contact-b",
    "name": "連絡先【B】",
    "tagline": "シンプルで使いやすい連絡先管理アプリ",
    "description": "説明文",
    "icon": {
      "type": "image",  // "image", "fontawesome", "emoji"のいずれか
      "value": "assets/images/contact-b-icon.png"  // アイコンのパスまたは値
    },
    "version": "2.1.0",
    "lastUpdated": "2025-09-24"
  },

  "features": {
    "main": [
      {
        "title": "機能名",
        "icon": "fas fa-users",
        "description": "機能の説明"
      }
    ],
    "additional": ["追加機能1", "追加機能2"]
  },

  "requirements": {
    "ios": {
      "minVersion": "17.6",
      "devices": ["iPhone", "iPad"],
      "languages": ["日本語"],
      "universal": true
    }
  },

  "pricing": {
    "type": "free",  // "free", "paid", "freemium", "subscription", "iap"
    "note": "完全無料でご利用いただけます"
  },

  "faq": [
    {
      "question": "質問",
      "answer": "回答"
    }
  ],

  "links": {
    "appStore": "App StoreのURL",
    "googlePlay": "",  // 未対応の場合は空文字
    "support": "support.html",
    "privacy": "privacy.html",
    "terms": "terms.html"
  },

  "metadata": {
    "category": "ユーティリティ",
    "contentRating": "4+",
    "developer": "Beowulf-Technology"
  }
}
```

### アイコンの設定

アイコンは3種類の方法で設定できます：

1. **画像ファイル** (推奨)
```json
"icon": {
  "type": "image",
  "value": "assets/images/contact-b-icon.png"
}
```
画像は `/docs/apps/{app-id}/assets/images/` に配置します。

2. **Font Awesomeアイコン**
```json
"icon": {
  "type": "fontawesome",
  "value": "fa-address-book",
  "gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}
```

3. **絵文字**
```json
"icon": {
  "type": "emoji",
  "value": "📱",
  "gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}
```

## 新しいアプリの追加

### 1. アプリディレクトリの作成

```bash
mkdir -p docs/apps/your-app-id/assets/images
```

### 2. 必要なファイルを作成

- `app-info.json` - アプリ情報
- `index.html` - アプリ詳細ページ
- `support.html` - サポートページ
- `privacy.md` - プライバシーポリシー
- `terms.md` - 利用規約

### 3. トップページに追加

`/docs/index.html` のアプリ一覧セクションに追加：

```html
<div class="card app-card">
    <div class="app-header">
        <div class="app-icon" data-app-icon="your-app-id">
            <!-- アイコンは自動読み込み -->
        </div>
        <h3 data-app-name="your-app-id">アプリ名</h3>
    </div>
    <p class="app-description" data-app-desc="your-app-id">
        説明文（自動読み込み）
    </p>
    <div class="app-links">
        <a href="apps/your-app-id/" class="link-item">
            <span>📋</span> アプリ概要
        </a>
        <!-- その他のリンク -->
    </div>
</div>
```

### 4. config.jsに追加

必要に応じて、アプリ固有の設定を追加：

```javascript
apps: {
    yourAppId: {
        name: "アプリ名",
        copyright: "© 2025 Your Name. All rights reserved.",
        description: "アプリの説明"
    }
}
```

## 注意事項

### ローカル開発環境

Markdownファイルの動的読み込みを使用する場合、ローカルサーバーが必要です：

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server

# VS Code
# Live Server拡張機能を使用
```

### ファイル更新時の注意

- `app-info.json` を更新すると、自動的に各ページに反映されます
- アイコン画像は App Store 標準の 22.5% 角丸が自動適用されます
- プライバシーポリシーと利用規約は Markdown 形式で記述できます

## トラブルシューティング

### アイコンが表示されない

1. 画像ファイルが正しい場所にあるか確認
2. `app-info.json` のパスが正しいか確認
3. ブラウザの開発者ツールでエラーを確認

### Markdownが読み込まれない

- ローカルで `file://` プロトコルで開いている場合は、HTTPサーバーを使用してください
- CORSエラーが発生している可能性があります

### 設定が反映されない

1. ブラウザキャッシュをクリア
2. `config.js` の構文エラーがないか確認
3. `data-config` 属性の値が正しいか確認
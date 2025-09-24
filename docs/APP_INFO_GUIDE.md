# app-info.json 設定ガイド

このガイドでは、アプリ情報を管理する `app-info.json` ファイルの詳細な記述方法を説明します。

## 基本構造

```json
{
  "app": {},        // アプリ基本情報
  "features": {},   // 機能説明
  "requirements": {}, // 動作環境
  "pricing": {},    // 料金プラン
  "faq": [],        // よくある質問
  "links": {},      // 各種リンク
  "screenshots": [], // スクリーンショット
  "metadata": {}    // メタデータ
}
```

## 1. app セクション（必須）

アプリの基本情報を設定します。

```json
"app": {
  "id": "contact-b",           // アプリID（フォルダ名と一致させる）
  "name": "連絡先【B】",        // アプリ名
  "tagline": "シンプルで使いやすい連絡先管理アプリ", // キャッチコピー
  "description": "大切な連絡先を安全に管理します",   // 詳細説明
  "icon": {
    "type": "fontawesome",     // "fontawesome" | "emoji" | "image"
    "value": "fa-address-book", // Font Awesomeクラス、絵文字、または画像URL
    "gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  "version": "2.1.0",          // 現在のバージョン
  "lastUpdated": "2025-09-24"  // 最終更新日
}
```

### アイコンタイプ

- **fontawesome**: Font Awesomeのアイコンクラス（例: "fa-users"）
- **emoji**: 絵文字（例: "📱"）
- **image**: 画像URL（例: "assets/images/app-icon.png"）

## 2. features セクション（推奨）

アプリの機能を説明します。

```json
"features": {
  "main": [  // メイン機能（3-5個推奨）
    {
      "title": "連絡先管理",
      "icon": "fas fa-users",  // Font Awesomeクラス
      "description": "名前、電話番号、メールアドレスなどを一元管理"
    }
  ],
  "additional": [  // 追加機能（文字列の配列）
    "写真付き連絡先",
    "メモ機能",
    "お気に入り登録"
  ]
}
```

## 3. requirements セクション（必須）

動作環境を指定します。

```json
"requirements": {
  "ios": {
    "minVersion": "14.0",       // 最小バージョン
    "devices": ["iPhone", "iPad", "iPod touch"],  // 対応デバイス
    "languages": ["日本語"],     // 対応言語
    "universal": true,          // ユニバーサルアプリかどうか
    "note": "現在iOS版のみ"    // 補足情報（オプション）
  },
  "android": {
    "available": false          // Androidに対応していない場合
  }
}
```

## 4. pricing セクション（必須）

料金プランを設定します。以下の5つのタイプから選択：

### タイプ1: 完全無料（free）

```json
"pricing": {
  "type": "free",
  "note": "完全無料でご利用いただけます"
}
```

### タイプ2: 買い切り（paid）

```json
"pricing": {
  "type": "paid",
  "price": "¥600",
  "note": "買い切り型のアプリです"
}
```

### タイプ3: フリーミアム（freemium）

無料版と有料版がある場合：

```json
"pricing": {
  "type": "freemium",
  "base": {
    "price": "無料",
    "features": [
      "基本的な連絡先管理",
      "最大1,000件まで登録可能",
      "ローカルバックアップ"
    ]
  },
  "premium": {
    "price": "月額 ¥380",
    "features": [
      "無制限の連絡先登録",
      "クラウドバックアップ",
      "広告非表示",
      "優先サポート"
    ]
  },
  "note": "※ 価格はApp Store内課金での金額です"
}
```

### タイプ4: サブスクリプション（subscription）

定期購読のみの場合：

```json
"pricing": {
  "type": "subscription",
  "plans": [
    {
      "name": "月額プラン",
      "price": "¥480/月",
      "features": ["全機能利用可能"]
    },
    {
      "name": "年額プラン",
      "price": "¥4,800/年",
      "features": ["全機能利用可能", "2ヶ月分お得"]
    }
  ],
  "trial": "7日間の無料トライアル",
  "note": "いつでもキャンセル可能"
}
```

### タイプ5: アプリ内課金（iap）

個別購入アイテムがある場合：

```json
"pricing": {
  "type": "iap",
  "base": "無料",
  "purchases": [
    {
      "name": "広告除去",
      "price": "¥250",
      "description": "すべての広告を非表示にします"
    },
    {
      "name": "プロ機能パック",
      "price": "¥600",
      "description": "高度な機能をアンロック"
    },
    {
      "name": "追加テーマ",
      "price": "¥120",
      "description": "10種類の新しいテーマ"
    }
  ],
  "note": "必要な機能だけを購入できます"
}
```

## 5. faq セクション（推奨）

よくある質問を設定します。

```json
"faq": [
  {
    "question": "アプリは無料ですか？",
    "answer": "基本機能は無料でご利用いただけます。"
  },
  {
    "question": "データはどこに保存されますか？",
    "answer": "端末内に安全に保存されます。"
  }
]
```

## 6. links セクション（オプション）

各種リンクを設定します。

```json
"links": {
  "appStore": "https://apps.apple.com/app/id123456789",
  "googlePlay": "https://play.google.com/store/apps/details?id=com.example",
  "website": "https://example.com",
  "support": "support.html",  // 相対パス
  "privacy": "privacy.html",  // 相対パス
  "terms": "terms.html"       // 相対パス
}
```

## 7. screenshots セクション（オプション）

スクリーンショット情報を設定します（未実装）。

```json
"screenshots": [
  {
    "url": "assets/images/screenshot1.png",
    "caption": "ホーム画面"
  },
  {
    "url": "assets/images/screenshot2.png",
    "caption": "連絡先詳細"
  }
]
```

## 8. metadata セクション（オプション）

アプリのメタデータを設定します。

```json
"metadata": {
  "category": "ユーティリティ",  // App Storeカテゴリ
  "contentRating": "4+",         // 年齢制限
  "developer": "Beowulf-Technology", // 開発元
  "compatibility": "iOS 14.0以降", // 互換性情報
  "releaseDate": "2024-01-01",   // リリース日（オプション）
  "updateFrequency": "月1回程度"  // 更新頻度（オプション）
}
```

## 使用方法

1. `docs/apps/[アプリ名]/` フォルダに `app-info.json` を作成
2. 上記のフォーマットに従って情報を記入
3. `index.html` に以下のスクリプトを追加：
   ```html
   <script src="../../assets/js/app-loader.js"></script>
   ```
4. HTMLテンプレートに `data-app` 属性を設定して、動的に情報を表示

## 注意事項

- **必須項目**: `app`、`requirements`、`pricing` セクションは必須です
- **JSON形式**: 正しいJSON形式で記述してください（末尾のカンマに注意）
- **相対パス**: リンクは`index.html`からの相対パスで記述します
- **文字エンコード**: UTF-8で保存してください
- **更新時**: `lastUpdated` を更新することを忘れずに

## テンプレート例

最小限の設定例：

```json
{
  "app": {
    "id": "my-app",
    "name": "マイアプリ",
    "tagline": "便利なアプリです",
    "description": "このアプリは便利な機能を提供します",
    "icon": {
      "type": "emoji",
      "value": "📱",
      "gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    "version": "1.0.0",
    "lastUpdated": "2025-09-24"
  },
  "requirements": {
    "ios": {
      "minVersion": "14.0",
      "devices": ["iPhone"],
      "languages": ["日本語"],
      "universal": false
    }
  },
  "pricing": {
    "type": "free"
  }
}
```
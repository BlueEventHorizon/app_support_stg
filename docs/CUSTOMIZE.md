# カスタマイズガイド

## 🚀 簡単設定（推奨）

**重要**: 2025年9月以降、すべての設定は `docs/assets/js/config.js` ファイル1箇所で管理できるようになりました。

### config.js での一括設定

`docs/assets/js/config.js` ファイルを開いて、以下の項目を変更するだけです：

```javascript
// 1. メールアドレスの設定
contact: {
    mainEmail: "support@yourcompany.com",     // メインの問い合わせ
    privacyEmail: "privacy@yourcompany.com",  // プライバシー関連
    supportEmail: "support@yourcompany.com",  // サポート専用
}

// 2. Formspreeの設定
formspree: {
    formId: "xdojwvyz"  // Formspreeで取得したForm ID
}

// 3. 会社情報
company: {
    name: "株式会社〇〇",
    copyright: "© 2025 株式会社〇〇. All rights reserved.",
}
```

これで全ページの表示が自動的に更新されます！

### Formspree設定の手順
1. [Formspree](https://formspree.io)でアカウント作成
2. 新しいフォームを作成
3. Form IDを取得（URLの `https://formspree.io/f/XXXXX` の XXXXX 部分）
4. `config.js` の `formspree.formId` に設定

## 📝 config.js で設定可能な項目一覧

```javascript
// 会社・サービス情報
company: {
    name: "アプリサポートセンター",
    copyright: "© 2025 アプリサポートセンター. All rights reserved.",
}

// 連絡先情報
contact: {
    mainEmail: "support@example.com",
    privacyEmail: "privacy@example.com",
    supportEmail: "support@example.com",
    businessHours: "平日 9:00 - 18:00",
    responseTime: "2-3営業日"
}

// 法的情報
legal: {
    companyFullName: "株式会社〇〇",
    companyAddress: "東京都〇〇区〇〇",
    latePaymentRate: "14.6%",
    childAgeLimit: "13歳"
}

// アプリ情報
apps: {
    contactB: {
        name: "連絡先【B】",
        copyright: "© 2025 連絡先【B】. All rights reserved.",
    }
}
```

## ✅ 設定変更の確認方法

1. `config.js` を編集
2. ブラウザで `docs/index.html` を開く
3. メールアドレスや著作権表記が変更されていることを確認

## 手動設定が必要な項目

#### 利用規約（terms.html）で確認すべき項目：
- 運営者名/会社名
- 本店所在地（第15条）
- 支払い方法（第4条）
- 遅延損害金の利率（第4条2項: 現在14.6%）

#### プライバシーポリシー（privacy.html）で確認すべき項目：
- データ保護責任者の連絡先
- データ保存場所の詳細
- 第三者サービスの具体名
- Cookie使用の詳細
- 子どもの年齢制限（現在13歳）

## 推奨追加項目

### 1. ロゴ画像の追加
```html
<!-- ナビゲーションバーにロゴを追加 -->
<li class="nav-brand">
    <a href="/">
        <img src="/assets/images/logo.png" alt="会社ロゴ" style="height: 30px; vertical-align: middle;">
        アプリサポートセンター
    </a>
</li>
```

### 2. ファビコンの追加
全HTMLファイルの`<head>`タグ内に追加：
```html
<link rel="icon" type="image/png" href="/assets/images/favicon.png">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
```

### 3. OGP（Open Graph Protocol）タグの追加
SNS共有時の表示を最適化：
```html
<meta property="og:title" content="連絡先【B】 - アプリサポート">
<meta property="og:description" content="連絡先管理アプリのサポート情報">
<meta property="og:image" content="https://yourdomain.com/assets/images/og-image.png">
<meta property="og:url" content="https://yourdomain.com/apps/contact-b/">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

### 4. Google Analytics / タグマネージャー
アクセス解析用（全HTMLファイルの`</head>`前に追加）：
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 5. アプリダウンロードリンク
`docs/apps/contact-b/index.html`に追加：
```html
<div class="card" style="text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
    <h2 style="color: white;">今すぐダウンロード</h2>
    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
        <a href="https://apps.apple.com/app/idXXXXXXXXX" target="_blank">
            <img src="/assets/images/app-store-badge.png" alt="App Store" style="height: 50px;">
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.example.contactb" target="_blank">
            <img src="/assets/images/google-play-badge.png" alt="Google Play" style="height: 50px;">
        </a>
    </div>
</div>
```

### 6. よくある質問（FAQ）の拡充
現在の基本的なFAQに以下を追加：
- パスワードを忘れた場合の対処法
- データのエクスポート方法
- 退会方法
- 課金の解約方法
- 対応言語について

### 7. スクリーンショット/デモ動画
アプリ概要ページに追加：
```html
<div class="card">
    <h2>アプリ画面</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <img src="/assets/images/screenshot1.png" alt="ホーム画面" style="width: 100%; border-radius: 10px;">
        <img src="/assets/images/screenshot2.png" alt="連絡先詳細" style="width: 100%; border-radius: 10px;">
        <img src="/assets/images/screenshot3.png" alt="検索機能" style="width: 100%; border-radius: 10px;">
    </div>
</div>
```

### 8. 更新履歴ページの追加
`docs/apps/contact-b/changelog.html`を新規作成：
```html
<div class="legal-content">
    <h1>更新履歴</h1>

    <h2>バージョン 2.1.0（2025年1月15日）</h2>
    <ul>
        <li>新機能: ダークモード対応</li>
        <li>改善: 検索速度の向上</li>
        <li>修正: 特定条件でのクラッシュを修正</li>
    </ul>

    <!-- 以下、過去のバージョン -->
</div>
```

### 9. 多言語対応
英語版ページの追加（`/en/`ディレクトリ）：
```
docs/
├── index.html (日本語)
├── en/
│   ├── index.html (English)
│   └── apps/
│       └── contact-b/
└── apps/
```

### 10. サポート営業時間のタイムゾーン明記
```html
<ul>
    <li>平日: 9:00 - 18:00 (JST)</li>
    <li>土日祝日: お休み</li>
    <li>返信目安: 2-3営業日以内</li>
</ul>
```

### 11. ソーシャルメディアリンク
フッターに追加：
```html
<div class="social-links" style="margin-top: 1rem;">
    <a href="https://twitter.com/yourcompany" style="color: white; margin: 0 10px;">
        <i class="fab fa-twitter"></i> Twitter
    </a>
    <a href="https://www.facebook.com/yourcompany" style="color: white; margin: 0 10px;">
        <i class="fab fa-facebook"></i> Facebook
    </a>
</div>
```

### 12. アクセシビリティ向上
- `alt`属性を全画像に追加
- `aria-label`を重要なボタンに追加
- スキップリンクの追加
- キーボードナビゲーション対応

### 13. セキュリティヘッダー（.htaccessまたはサーバー設定）
```apache
# Content Security Policy
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://formspree.io"

# その他のセキュリティヘッダー
Header set X-Frame-Options "SAMEORIGIN"
Header set X-Content-Type-Options "nosniff"
```

## チェックリスト

### 必須項目 🅱️
- [ ] `config.js` でメールアドレスを設定
- [ ] `config.js` でFormspree IDを設定
- [ ] `config.js` で会社名/サービス名を設定
- [ ] 利用規約の法的内容を確認
- [ ] プライバシーポリシーの内容を確認

### 推奨項目 💡
- [ ] ロゴ/ファビコンを追加
- [ ] App Store/Google Playリンクを追加
- [ ] Google Analytics設定 (`config.js` の `analytics.gaId`)
- [ ] OGPタグ設定
- [ ] スクリーンショット追加
- [ ] FAQ内容の充実
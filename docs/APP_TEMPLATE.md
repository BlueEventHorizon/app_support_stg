# 新規アプリ追加テンプレート

## 1. ディレクトリ構造

新しいアプリを追加する場合、以下のディレクトリ構造を作成してください：

```
docs/
└── apps/
    └── [app-folder-name]/     # 例: task-manager, photo-editor など
        ├── app-info.json       # アプリ情報（料金、機能、FAQなど）
        ├── index.html          # アプリ概要ページ
        ├── terms.md            # 利用規約（マークダウン）
        ├── terms.html          # 利用規約（表示用HTML）
        ├── privacy.md          # プライバシーポリシー（マークダウン）
        ├── privacy.html        # プライバシーポリシー（表示用HTML）
        └── support.html        # サポートフォーム
```

## 2. トップページへの追加

`docs/index.html` のアプリ一覧セクションに以下のカードを追加：

### 基本テンプレート

```html
<!-- [アプリ名]アプリ -->
<div class="card app-card">
    <div class="app-header">
        <div class="app-icon" style="background: linear-gradient(135deg, #[色1] 0%, #[色2] 100%);">
            [絵文字]
        </div>
        <h3>[アプリ名]</h3>
    </div>
    <p class="app-description">[アプリの説明文（50-100文字程度）]</p>
    <div class="app-features">
        <span class="feature-tag">[特徴1]</span>
        <span class="feature-tag">[特徴2]</span>
        <span class="feature-tag">[特徴3]</span>
    </div>
    <div class="app-links">
        <a href="apps/[app-folder-name]/" class="link-item">
            <span>📋</span> アプリ概要
        </a>
        <a href="apps/[app-folder-name]/support.html" class="link-item">
            <span>💬</span> サポート
        </a>
        <a href="apps/[app-folder-name]/terms.html" class="link-item">
            <span>📜</span> 利用規約
        </a>
        <a href="apps/[app-folder-name]/privacy.html" class="link-item">
            <span>🔒</span> プライバシー
        </a>
    </div>
    <div class="app-actions">
        <a href="apps/[app-folder-name]/" class="btn btn-primary">詳細を見る</a>
    </div>
</div>
```

### カラーグラデーション例

```css
/* ブルー系 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* ピンク系 */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* グリーン系 */
background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);

/* オレンジ系 */
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);

/* パープル系 */
background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);

/* レッド系 */
background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);

/* ティール系 */
background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);

/* イエロー系 */
background: linear-gradient(135deg, #fddb92 0%, #d1fdff 100%);
```

## 3. 各ページのテンプレート

### 共通ナビゲーション

すべてのページに以下のナビゲーションを含めてください：

```html
<header>
    <nav class="container">
        <ul>
            <li class="nav-brand">
                <a href="../../">アプリサポートセンター</a>
            </li>
            <li><a href="../../">ホーム</a></li>
            <li><a href="index.html">[アプリ名]</a></li>
            <li><a href="terms.html">利用規約</a></li>
            <li><a href="privacy.html">プライバシーポリシー</a></li>
            <li><a href="support.html">サポート</a></li>
        </ul>
    </nav>
</header>
```

### 共通フッター

```html
<footer>
    <div class="container">
        <p>&copy; 2025 [アプリ名]. All rights reserved.</p>
        <p>
            <a href="privacy.html" style="color: white; margin-right: 1rem;">プライバシーポリシー</a>
            <a href="terms.html" style="color: white;">利用規約</a>
        </p>
    </div>
</footer>
```

## 4. 実装例（タスク管理アプリ）

```html
<!-- タスク管理Proアプリ -->
<div class="card app-card">
    <div class="app-header">
        <div class="app-icon" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
            ✅
        </div>
        <h3>タスク管理Pro</h3>
    </div>
    <p class="app-description">効率的なタスク管理で生産性を向上。チームでの共有も簡単です。</p>
    <div class="app-features">
        <span class="feature-tag">タスク管理</span>
        <span class="feature-tag">チーム共有</span>
        <span class="feature-tag">リマインダー</span>
    </div>
    <div class="app-links">
        <a href="apps/task-manager/" class="link-item">
            <span>📋</span> アプリ概要
        </a>
        <a href="apps/task-manager/support.html" class="link-item">
            <span>💬</span> サポート
        </a>
        <a href="apps/task-manager/terms.html" class="link-item">
            <span>📜</span> 利用規約
        </a>
        <a href="apps/task-manager/privacy.html" class="link-item">
            <span>🔒</span> プライバシー
        </a>
    </div>
    <div class="app-actions">
        <a href="apps/task-manager/" class="btn btn-primary">詳細を見る</a>
    </div>
</div>
```

## 5. app-info.json の作成

アプリの情報（機能、料金、FAQ等）を `app-info.json` で管理します。
詳細な記述方法は [APP_INFO_GUIDE.md](APP_INFO_GUIDE.md) を参照してください。

### 最小限の例

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
    "type": "free"  // "free" | "paid" | "freemium" | "subscription" | "iap"
  }
}
```

## 6. マークダウンファイルのテンプレート

### privacy.md と terms.md

利用規約とプライバシーポリシーはマークダウンファイル（.md）で管理します。
`docs/apps/contact-b/` 内の `privacy.md` と `terms.md` を参考にして作成してください。

HTMLファイル（privacy.html, terms.html）は以下のテンプレートを使用：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[ページタイトル] - [アプリ名]</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../../assets/css/style.css">
    <script src="../../assets/js/config.js"></script>
    <script src="../../assets/js/markdown-loader.js"></script>
</head>
<body>
    <header>
        <!-- ナビゲーション -->
    </header>
    <main class="container">
        <div class="legal-content" id="[content-id]" data-markdown="[markdown-file].md">
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-spinner fa-spin"></i> 読み込み中...
            </div>
        </div>
    </main>
    <footer>
        <!-- フッター -->
    </footer>
</body>
</html>
```

## 7. 設定ファイルの更新

`docs/assets/js/config.js` に新しいアプリの情報を追加：

```javascript
apps: {
    // 既存のアプリ...
    [appKey]: {
        name: "[アプリ名]",
        copyright: "© 2025 [会社名]. All rights reserved.",
        description: "[アプリの説明]"
    }
}
```

## 8. チェックリスト

新しいアプリを追加する際のチェックリスト：

- [ ] `docs/apps/[app-folder-name]/` ディレクトリを作成
- [ ] **app-info.json を作成**（料金、機能、FAQ等を設定）
- [ ] index.html（概要ページ）を作成
- [ ] terms.md と terms.html を作成
- [ ] privacy.md と privacy.html を作成
- [ ] support.html（サポートフォーム）を作成
- [ ] 各ページのナビゲーションリンクを正しく設定
- [ ] config.js にアプリ情報を追加
- [ ] トップページ（docs/index.html）にアプリカードを追加
- [ ] アプリアイコンの絵文字とカラーを選定
- [ ] 機能タグを3-5個設定
- [ ] すべてのリンクが正しく動作することを確認
- [ ] レスポンシブデザインの確認

## 9. 推奨絵文字

アプリの種類に応じた絵文字の例：

- 📱 連絡先・電話系
- ✅ タスク・TODO系
- 📷 写真・カメラ系
- 🎵 音楽・メディア系
- 💰 金融・家計簿系
- 🏃 健康・フィットネス系
- 📚 教育・学習系
- 🎮 ゲーム系
- 🗺️ 地図・ナビゲーション系
- 💬 チャット・SNS系
- 📊 ビジネス・分析系
- 🎨 クリエイティブ系
- ⚡ ユーティリティ系
- 🔒 セキュリティ系
- 📰 ニュース・情報系
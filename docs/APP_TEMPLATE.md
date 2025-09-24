# 新規アプリ追加テンプレート

このドキュメントでは、新しいアプリをサポートサイトに追加する手順を説明します。

## 必要なファイル構成

```
docs/apps/your-app-id/
├── app-info.json       # アプリの全情報を管理
├── index.html           # アプリ詳細ページ
├── support.html         # サポートページ
├── privacy.md           # プライバシーポリシー（Markdown）
├── privacy.html         # プライバシーポリシー表示用HTML
├── terms.md            # 利用規約（Markdown）
├── terms.html          # 利用規約表示用HTML
└── assets/
    └── images/
        └── your-app-icon.png  # アプリアイコン画像
```

## 1. app-info.json の作成

最も重要なファイルです。このファイルから全ページに情報が自動的に展開されます。

```json
{
  "app": {
    "id": "your-app-id",
    "name": "アプリ名",
    "tagline": "キャッチコピー",
    "description": "アプリの説明文",
    "icon": {
      "type": "image",
      "value": "assets/images/your-app-icon.png"
    },
    "version": "1.0.0",
    "lastUpdated": "2025-09-24"
  },

  "features": {
    "main": [
      {
        "title": "主要機能1",
        "icon": "fas fa-star",
        "description": "機能の説明"
      },
      {
        "title": "主要機能2",
        "icon": "fas fa-heart",
        "description": "機能の説明"
      }
    ],
    "additional": [
      "追加機能1",
      "追加機能2",
      "追加機能3"
    ]
  },

  "requirements": {
    "ios": {
      "minVersion": "17.0",
      "devices": ["iPhone", "iPad"],
      "languages": ["日本語"],
      "universal": true
    }
  },

  "pricing": {
    "type": "free",
    "note": "完全無料でご利用いただけます"
  },

  "faq": [
    {
      "question": "よくある質問1",
      "answer": "回答1"
    },
    {
      "question": "よくある質問2",
      "answer": "回答2"
    }
  ],

  "links": {
    "appStore": "https://apps.apple.com/jp/app/...",
    "googlePlay": "",
    "support": "support.html",
    "privacy": "privacy.html",
    "terms": "terms.html"
  },

  "metadata": {
    "category": "カテゴリ名",
    "contentRating": "4+",
    "developer": "開発者名"
  }
}
```

## 2. index.html の作成

アプリ詳細ページのテンプレート：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>アプリ名 - アプリサポートセンター</title>
    <meta name="description" content="アプリの説明">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../../assets/css/style.css">
    <script src="../../assets/js/config.js"></script>
    <script src="../../assets/js/app-loader.js"></script>

    <style>
        .app-header-section {
            text-align: center;
            padding: 3rem 0;
            background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
            border-radius: 10px;
            margin-bottom: 2rem;
        }

        .app-icon-large {
            width: 120px;
            height: 120px;
            margin: 0 auto 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 25px;
            font-size: 3rem;
            color: white;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }

        .feature-item {
            text-align: center;
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
        }
    </style>
</head>
<body>
    <header>
        <nav class="container">
            <ul>
                <li class="nav-brand">
                    <a href="../../">アプリサポートセンター</a>
                </li>
                <li><a href="../../">ホーム</a></li>
                <li><a href="index.html" class="active">アプリ名</a></li>
                <li><a href="terms.html">利用規約</a></li>
                <li><a href="privacy.html">プライバシーポリシー</a></li>
                <li><a href="support.html">サポート</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <!-- アプリヘッダー -->
        <section class="app-header-section">
            <div class="app-icon-large" data-app="icon">
                <i class="fas fa-mobile-alt"></i>
            </div>
            <h1 data-app="title">アプリ名</h1>
            <p data-app="tagline">キャッチコピー</p>
            <p data-app="description" style="max-width: 600px; margin: 1rem auto;">説明文</p>

            <div style="margin-top: 2rem;">
                <a href="#" data-app="link-appstore" style="display:none;">
                    <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                         alt="App Store" style="height: 50px;">
                </a>
            </div>
        </section>

        <!-- 主な機能 -->
        <section>
            <div class="card">
                <h2>主な機能</h2>
                <div class="feature-grid" data-app="features-main">
                    <!-- JavaScriptで動的に生成 -->
                </div>
            </div>
        </section>

        <!-- その他の機能 -->
        <section>
            <div class="card">
                <h2>その他の機能</h2>
                <div data-app="features-additional">
                    <!-- JavaScriptで動的に生成 -->
                </div>
            </div>
        </section>

        <!-- 動作環境 -->
        <section>
            <div class="card">
                <h2>動作環境</h2>
                <div data-app="requirements">
                    <!-- JavaScriptで動的に生成 -->
                </div>
            </div>
        </section>

        <!-- 料金プラン -->
        <section>
            <div class="card">
                <h2>料金プラン</h2>
                <div data-app="pricing">
                    <!-- JavaScriptで動的に生成 -->
                </div>
            </div>
        </section>

        <!-- よくある質問 -->
        <section>
            <div class="card">
                <h2>よくある質問</h2>
                <div data-app="faq">
                    <!-- JavaScriptで動的に生成 -->
                </div>
            </div>
        </section>

        <!-- アプリ情報 -->
        <section>
            <div class="card">
                <h2>アプリ情報</h2>
                <div data-app="metadata">
                    <!-- JavaScriptで動的に生成 -->
                </div>
            </div>
        </section>

        <!-- サポート情報 -->
        <section style="margin-top: 3rem;">
            <div class="card" style="text-align: center;">
                <h2>サポート情報</h2>
                <p>ご不明な点やお困りの際は、お気軽にお問い合わせください。</p>
                <div style="margin-top: 2rem;">
                    <a href="support.html" class="btn">お問い合わせフォーム</a>
                </div>
                <div style="margin-top: 2rem;">
                    <a href="terms.html" style="margin-right: 2rem;">利用規約</a>
                    <a href="privacy.html">プライバシーポリシー</a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p data-copyright="main">&copy; 2025 Beowulf-Technology. All rights reserved.</p>
            <p>
                <a href="privacy.html" style="color: white; margin-right: 1rem;">プライバシーポリシー</a>
                <a href="terms.html" style="color: white;">利用規約</a>
            </p>
        </div>
    </footer>
</body>
</html>
```

## 3. privacy.md の作成

```markdown
# プライバシーポリシー

## 1. 個人情報の取り扱いについて

本アプリは、ユーザーの個人情報を一切収集しません。

## 2. データの保存について

アプリの設定情報は端末内に保存されます。これらの情報は、アプリをアンインストールすると削除されます。

## 3. 権限について

本アプリは以下の権限を使用します：

- 必要な権限をここに記載

## 4. 第三者への提供

本アプリは、いかなる個人情報も第三者に提供、共有、販売することはありません。

## 5. お問い合わせ

プライバシーポリシーに関するご質問は、[サポートページ](support.html)のお問い合わせフォームからご連絡ください。

---

最終更新日: 2025年9月24日
```

## 4. privacy.html の作成

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>プライバシーポリシー - アプリ名</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../../assets/css/style.css">
    <script src="../../assets/js/config.js"></script>
    <script src="../../assets/js/markdown-loader.js"></script>
</head>
<body>
    <header>
        <nav class="container">
            <ul>
                <li class="nav-brand">
                    <a href="../../">アプリサポートセンター</a>
                </li>
                <li><a href="../../">ホーム</a></li>
                <li><a href="index.html">アプリ名</a></li>
                <li><a href="terms.html">利用規約</a></li>
                <li><a href="privacy.html" class="active">プライバシーポリシー</a></li>
                <li><a href="support.html">サポート</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <div class="legal-content" id="privacy-content" data-markdown="privacy.md">
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-spinner fa-spin"></i> 読み込み中...
            </div>
        </div>
    </main>

    <footer>
        <div class="container">
            <p data-copyright="main">&copy; 2025 Beowulf-Technology. All rights reserved.</p>
            <p>
                <a href="privacy.html" style="color: white; margin-right: 1rem;">プライバシーポリシー</a>
                <a href="terms.html" style="color: white;">利用規約</a>
            </p>
        </div>
    </footer>
</body>
</html>
```

## 5. トップページへの追加

`/docs/index.html` のアプリ一覧セクションに以下を追加：

```html
<div class="card app-card">
    <div class="app-header">
        <div class="app-icon" data-app-icon="your-app-id">
            <i class="fas fa-mobile-alt"></i>
        </div>
        <h3 data-app-name="your-app-id">アプリ名</h3>
    </div>
    <p class="app-description" data-app-desc="your-app-id">
        アプリの説明文
    </p>
    <div class="app-links">
        <a href="apps/your-app-id/" class="link-item">
            <span>📋</span> アプリ概要
        </a>
        <a href="apps/your-app-id/support.html" class="link-item">
            <span>💬</span> サポート
        </a>
        <a href="apps/your-app-id/terms.html" class="link-item">
            <span>📜</span> 利用規約
        </a>
        <a href="apps/your-app-id/privacy.html" class="link-item">
            <span>🔒</span> プライバシー
        </a>
    </div>
    <div class="app-actions">
        <a href="apps/your-app-id/" class="btn btn-primary">詳細を見る</a>
    </div>
</div>
```

## 注意点

1. **app-info.json が最重要** - 全ての動的コンテンツの元データ
2. **アイコン画像** - App Store標準の22.5%角丸が自動適用
3. **Markdownファイル** - HTTPサーバー経由でのみ動作（file://では読み込めない）
4. **data属性による自動読み込み** - `data-app`、`data-app-icon`、`data-app-desc`など

## チェックリスト

- [ ] app-info.json を作成
- [ ] index.html を作成
- [ ] support.html を作成
- [ ] privacy.md と privacy.html を作成
- [ ] terms.md と terms.html を作成
- [ ] アイコン画像を配置
- [ ] トップページに追加
- [ ] config.js に必要な設定を追加（任意）
- [ ] ローカルサーバーで動作確認
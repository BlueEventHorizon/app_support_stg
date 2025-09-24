# 新規アプリ追加テンプレート

## 1. ディレクトリ構造

新しいアプリを追加する場合、以下のディレクトリ構造を作成してください：

```
docs/
└── apps/
    └── [app-folder-name]/     # 例: task-manager, photo-editor など
        ├── index.html          # アプリ概要ページ
        ├── terms.html          # 利用規約
        ├── privacy.html        # プライバシーポリシー
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

## 5. チェックリスト

新しいアプリを追加する際のチェックリスト：

- [ ] `docs/apps/[app-folder-name]/` ディレクトリを作成
- [ ] 4つの必須HTMLファイルを作成（index, terms, privacy, support）
- [ ] 各ページのナビゲーションリンクを正しく設定
- [ ] Formspree Form IDを新規作成して設定
- [ ] トップページにアプリカードを追加
- [ ] 利用規約・プライバシーポリシーをアプリに合わせて更新
- [ ] サポートフォームのカテゴリーを適切に設定
- [ ] アプリアイコンの絵文字とカラーを選定
- [ ] 機能タグを3-5個設定
- [ ] すべてのリンクが正しく動作することを確認
- [ ] レスポンシブデザインの確認

## 6. 推奨絵文字

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
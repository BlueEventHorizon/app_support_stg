# アイコンカスタマイズガイド

## 🎨 3つのアイコン表示方法

### 1. 絵文字アイコン（シンプル）

```html
<div class="app-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    📱
</div>
```

**よく使う絵文字:**
- 📱 スマートフォン
- 👥 連絡先
- ✅ タスク
- 📷 カメラ
- 🎵 音楽
- 💰 金融
- 🏃 健康
- 📚 教育
- 💬 チャット
- 🔒 セキュリティ

### 2. Font Awesomeアイコン（プロフェッショナル）

HTMLの`<head>`タグ内に追加:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

アイコンの使用例:
```html
<div class="app-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <i class="fas fa-address-book"></i>
</div>
```

**Font Awesomeアイコン例:**
- `fa-address-book` - 連絡先
- `fa-tasks` - タスク管理
- `fa-camera` - カメラ
- `fa-music` - 音楽
- `fa-chart-line` - 分析
- `fa-gamepad` - ゲーム
- `fa-shopping-cart` - ショッピング
- `fa-heart` - 健康
- `fa-graduation-cap` - 教育
- `fa-comments` - チャット

アイコン検索: https://fontawesome.com/icons

### 3. カスタム画像アイコン（ブランディング）

#### Step 1: 画像ファイルを配置
```
docs/
└── assets/
    └── images/
        └── icons/
            ├── contact-b-icon.png  (推奨: 120x120px)
            └── task-manager-icon.png
```

#### Step 2: HTMLを修正
```html
<div class="app-icon custom-icon">
    <img src="assets/images/icons/contact-b-icon.png" alt="連絡先【B】">
</div>
```

#### Step 3: CSSを追加
```css
/* カスタムアイコン用スタイル */
.app-icon.custom-icon {
    background: transparent !important;
    padding: 0;
}

.app-icon.custom-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}
```

## 🎨 背景グラデーションのカスタマイズ

### 基本構文
```css
background: linear-gradient(135deg, #開始色 0%, #終了色 100%);
```

### カラーパレット例

#### ブルー系
```css
/* 深い青 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 明るい青 */
background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);

/* 紺色 */
background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
```

#### グリーン系
```css
/* エメラルド */
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);

/* ミント */
background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);

/* 森 */
background: linear-gradient(135deg, #134e5e 0%, #71b280 100%);
```

#### レッド・ピンク系
```css
/* ローズ */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* サンセット */
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);

/* ピーチ */
background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
```

#### パープル系
```css
/* ロイヤルパープル */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* ラベンダー */
background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);

/* ディープパープル */
background: linear-gradient(135deg, #6a3093 0%, #a044ff 100%);
```

#### モノトーン
```css
/* ダークグレー */
background: linear-gradient(135deg, #434343 0%, #000000 100%);

/* シルバー */
background: linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%);

/* 単色（グラデーションなし） */
background: #3498db;
```

## 🔧 実装例

### 連絡先【B】用のカスタマイズ例

#### オプション1: Font Awesomeで統一
```html
<div class="app-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <i class="fas fa-address-book"></i>
</div>
```

#### オプション2: ブランドカラーに変更
```html
<div class="app-icon" style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);">
    <i class="fas fa-users"></i>
</div>
```

#### オプション3: アニメーション追加
```css
/* CSSに追加 */
.app-icon {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}
```

## 📱 レスポンシブ対応

モバイルでアイコンサイズを調整:
```css
@media (max-width: 768px) {
    .app-icon {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
    }
}
```

## 🚀 アイコン変更の手順

1. **アイコンの種類を決める**
   - 絵文字: すぐに使える、軽量
   - Font Awesome: プロフェッショナル、豊富な選択肢
   - カスタム画像: ブランディング、完全カスタマイズ

2. **背景色を選ぶ**
   - アプリのテーマカラーに合わせる
   - 他のアプリと区別しやすい色を選ぶ

3. **実装する**
   - HTMLを更新
   - 必要に応じてCSSを追加
   - ブラウザで確認

4. **全ページに反映**
   - トップページ
   - 各アプリの個別ページ（必要に応じて）
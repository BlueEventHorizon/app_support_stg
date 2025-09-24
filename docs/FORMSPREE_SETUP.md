# Formspree セットアップガイド

Formspreeを使用してお問い合わせフォームを設定する手順を説明します。

## 1. アカウント作成

### 手順

1. **Formspreeにアクセス**
   - https://formspree.io/ にアクセス
   - 右上の「Sign up」または「Get Started」をクリック

2. **アカウント登録**
   - メールアドレスとパスワードを入力
   - または、GitHubやGoogleアカウントでサインアップ
   - メール認証を完了

3. **プラン選択**
   - 無料プラン（Free）で十分です
   - 月50件まで無料で受信可能
   - 必要に応じて有料プランへアップグレード

## 2. フォーム作成

### 手順

1. **新規フォーム作成**
   - ダッシュボードで「+ New Form」をクリック
   - フォーム名を入力（例：「アプリサポート問い合わせ」）

2. **Form IDの取得**
   - フォーム作成後、エンドポイントURLが表示されます
   - 例：`https://formspree.io/f/xyzabc123`
   - この`xyzabc123`部分がForm IDです

3. **通知設定**
   - Email Notifications で通知先メールアドレスを設定
   - デフォルトはアカウントのメールアドレス
   - 複数のメールアドレスを追加可能（有料プラン）

## 3. サイトへの実装

### config.js を更新

```javascript
// docs/assets/js/config.js
formspree: {
    formId: "xyzabc123"  // あなたのForm IDに置き換え
}
```

### HTMLフォームの設定

フォームは自動的にconfig.jsから読み込まれます：

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" data-config="formspree.formId">
    <!-- フォーム内容 -->
</form>
```

## 4. 推奨設定

### Formspreeダッシュボードでの設定

1. **Spam Protection**
   - reCAPTCHA を有効化（推奨）
   - Honeypot を有効化（推奨）

2. **Email Settings**
   - Reply-To: 送信者のメールアドレスを設定
   - Subject: カスタマイズ可能（例：「[アプリサポート] お問い合わせ」）

3. **Autoresponder**（自動返信）
   - 有効にすると送信者に確認メールを送信
   - 日本語でカスタマイズ可能

### 自動返信メッセージの例

```
件名: お問い合わせありがとうございます

本文:
この度はお問い合わせいただき、誠にありがとうございます。
内容を確認の上、担当者より返信させていただきます。

なお、お問い合わせの内容によっては、
返信にお時間をいただく場合がございます。

何卒ご了承くださいますようお願い申し上げます。

---
アプリサポートセンター
```

## 5. フォームのカスタマイズ

### 必須フィールド

```html
<input type="text" name="name" required>
<input type="email" name="email" required>
<textarea name="message" required></textarea>
```

### 追加可能なフィールド

```html
<!-- アプリ選択 -->
<select name="app">
    <option value="contact-b">連絡先【B】</option>
    <option value="other">その他</option>
</select>

<!-- デバイス情報 -->
<select name="device">
    <option value="iphone">iPhone</option>
    <option value="ipad">iPad</option>
</select>

<!-- OSバージョン -->
<input type="text" name="os_version" placeholder="例: iOS 17.6">
```

## 6. テスト送信

1. **ローカルサーバーを起動**
   ```bash
   cd docs
   python3 -m http.server 8000
   ```

2. **テストフォーム送信**
   - http://localhost:8000 でサイトにアクセス
   - サポートページからテスト送信
   - Formspreeダッシュボードで受信確認

3. **メール通知確認**
   - 設定したメールアドレスに通知が届くか確認
   - 自動返信が設定通り送信されるか確認

## 7. よくある質問

### Q: 無料プランの制限は？
**A:** 月50件まで無料。1フォームのみ。カスタムドメイン不可。

### Q: フォーム送信後のリダイレクトは？
**A:** Formspreeの設定で、送信成功後のリダイレクトURLを指定できます。
```html
<input type="hidden" name="_next" value="https://yourdomain.com/thanks">
```

### Q: ファイル添付は可能？
**A:** 有料プラン（$10/月〜）で可能です。

### Q: 複数のアプリで別々のフォームを使いたい
**A:**
- 無料プラン：1フォームのみ（全アプリ共通）
- 有料プラン：複数フォーム作成可能

### Q: スパム対策は？
**A:** reCAPTCHAとHoneypotが利用可能（無料プランでも）

## 8. トラブルシューティング

### フォームが送信されない
- Form IDが正しいか確認
- `method="POST"`が設定されているか確認
- ローカルファイル（file://）ではなく、HTTPサーバー経由でアクセス

### メールが届かない
- Formspreeダッシュボードで受信確認
- 通知設定でメールアドレスが正しいか確認
- 迷惑メールフォルダを確認

### 文字化けする
- HTMLに`<meta charset="UTF-8">`が設定されているか確認
- フォームに`accept-charset="UTF-8"`を追加

## まとめ

1. Formspreeアカウント作成（無料）
2. 新規フォーム作成
3. Form IDを`config.js`に設定
4. テスト送信して動作確認

これで、お問い合わせフォームが機能するようになります。
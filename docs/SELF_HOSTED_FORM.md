# 自作お問い合わせフォーム実装ガイド

Formspreeを使わずに、無料でお問い合わせフォームを実装する方法をいくつか紹介します。

## 方法1: Google Apps Script + Google Sheets（完全無料）

### 必要なもの
- Googleアカウント（contact.btype@gmail.com を使用）
- このアカウントがメール送信元になります

### 手順

#### 1. Googleスプレッドシートを作成

1. contact.btype@gmail.com でGoogleにログイン
2. Google Driveで新規スプレッドシートを作成
2. シート名を「お問い合わせ」に変更
3. 1行目にヘッダーを追加：
   - A1: 日時
   - B1: 名前
   - C1: メール
   - D1: カテゴリ
   - E1: デバイス
   - F1: メッセージ

#### 2. Google Apps Scriptを作成

**重要**: contact.btype@gmail.com のGoogleアカウントでログインしてスプレッドシートとApps Scriptを作成してください。
メール送信元がこのアカウントになります。

1. 拡張機能 → Apps Script を選択
2. 以下のコードを貼り付け：

```javascript
// Google Apps Script コード
function doPost(e) {
  try {
    // スプレッドシートを開く
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // フォームデータを取得
    const data = JSON.parse(e.postData.contents);

    // 新しい行にデータを追加
    sheet.appendRow([
      new Date(), // タイムスタンプ
      data.name,
      data.email,
      data.category,
      data.device,
      data.message
    ]);

    // メール通知を送信
    sendEmailNotification(data);

    // 成功レスポンス
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'お問い合わせを受け付けました'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // エラーレスポンス
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  // 送信元は自動的にこのスクリプトを実行しているGoogleアカウントのメールアドレスになります
  const recipient = 'contact.btype@gmail.com'; // 通知を受け取るメールアドレス（送信元と同じでOK）
  const subject = '[アプリサポート] 新しいお問い合わせ';

  const body = `
新しいお問い合わせが届きました。

名前: ${data.name}
メール: ${data.email}
カテゴリ: ${data.category}
デバイス: ${data.device}

メッセージ:
${data.message}

---
このメールは自動送信されています。
  `;

  // メール送信
  GmailApp.sendEmail(recipient, subject, body, {
    replyTo: data.email,
    name: 'アプリサポートシステム'
  });

  // 自動返信メール
  const autoReplySubject = 'お問い合わせありがとうございます';
  const autoReplyBody = `
${data.name} 様

この度はお問い合わせいただき、誠にありがとうございます。
内容を確認の上、担当者より返信させていただきます。

なお、お問い合わせの内容によっては、
返信にお時間をいただく場合がございます。

何卒ご了承くださいますようお願い申し上げます。

---
アプリサポートセンター
  `;

  GmailApp.sendEmail(data.email, autoReplySubject, autoReplyBody, {
    name: 'アプリサポートセンター',
    noReply: true
  });
}
```

#### 3. ウェブアプリとしてデプロイ

1. デプロイ → 新しいデプロイ
2. 種類: ウェブアプリ
3. 実行ユーザー: 自分
4. アクセスできるユーザー: 全員
5. デプロイをクリック
6. URLをコピー（これがエンドポイント）

#### 4. 設定ファイルを更新

`docs/assets/js/config.js` に Google Apps Script の URL を設定：

```javascript
// Google Apps Script設定
googleAppsScript: {
    url: "YOUR_GOOGLE_APPS_SCRIPT_URL"  // ここにデプロイしたURLを入力
},
```

#### 5. フォームハンドラーの実装

`docs/assets/js/contact-handler.js` はすでに実装済みです。
このファイルは自動的に config.js から URL を読み取り、フォーム送信を処理します。

## 方法2: Netlify Forms（Netlifyでホスティングする場合）

### 手順

1. **フォームにnetlify属性を追加**

```html
<form name="contact" method="POST" netlify netlify-honeypot="bot-field">
  <!-- スパム対策のhoneypot -->
  <input type="hidden" name="form-name" value="contact">
  <p style="display:none">
    <label>Don't fill this out: <input name="bot-field"></label>
  </p>

  <!-- 通常のフォームフィールド -->
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>

  <button type="submit">送信</button>
</form>
```

2. **GitHubにプッシュ**
3. **Netlifyでデプロイ**
4. **Netlifyダッシュボードで通知設定**

### メリット
- 月100件まで無料
- スパムフィルター内蔵
- CSVダウンロード可能
- メール通知設定可能

## 方法3: GitHub Issues API（開発者向け）

### 概要
お問い合わせをGitHub Issuesとして自動作成

```javascript
async function createGitHubIssue(formData) {
  const token = 'YOUR_GITHUB_TOKEN'; // GitHub Personal Access Token
  const owner = 'your-username';
  const repo = 'app-support-issues';

  const issue = {
    title: `お問い合わせ: ${formData.name}`,
    body: `
## お問い合わせ内容

**名前:** ${formData.name}
**メール:** ${formData.email}
**カテゴリ:** ${formData.category}

### メッセージ
${formData.message}
    `,
    labels: ['お問い合わせ', formData.category]
  };

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
    {
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issue)
    }
  );

  return response.json();
}
```

## 方法4: EmailJS（月200件まで無料）

### 手順

1. **EmailJSアカウント作成**
   - https://www.emailjs.com/

2. **サービス設定**
   - GmailまたはOutlookと連携

3. **テンプレート作成**

4. **実装**

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init('YOUR_PUBLIC_KEY');

  function sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm('service_id', 'template_id', event.target)
      .then(function(response) {
        alert('送信完了！');
      }, function(error) {
        alert('送信失敗: ' + error);
      });
  }
</script>
```

## 比較表

| 方法 | 無料枠 | 設定難易度 | メール通知 | データ保存 | スパム対策 |
|------|--------|------------|------------|------------|------------|
| Google Apps Script | 無制限* | 中 | ✓ | Sheets | 要実装 |
| Netlify Forms | 100件/月 | 簡単 | ✓ | ✓ | ✓ |
| GitHub Issues | 無制限 | 難 | ✓ | Issues | △ |
| EmailJS | 200件/月 | 簡単 | ✓ | × | △ |
| Formspree | 50件/月 | 簡単 | ✓ | ✓ | ✓ |

*Google Apps Scriptは実行時間に制限あり（6分/実行、90分/日）

## おすすめ

1. **初心者向け**: Formspree または EmailJS
2. **Googleユーザー**: Google Apps Script（推奨）
3. **Netlifyユーザー**: Netlify Forms
4. **開発者向け**: GitHub Issues API

## まとめ

自作する場合のベストな選択：
- **Google Apps Script + Sheets**: 完全無料で実用的（推奨）
- **Netlify Forms**: Netlifyでホスティングするなら最も簡単

### Google Apps Script使用時の注意点

- メール送信元は、Apps Scriptを作成したGoogleアカウントのメールアドレスになります
- contact.btype@gmail.com から送信したい場合は、そのアカウントでApps Scriptを作成してください
- 無料で無制限に使える最良の選択肢です
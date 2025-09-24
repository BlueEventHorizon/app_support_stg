// Mailtoリンクでフォーム送信を行うハンドラー
function sendViaMailto(event) {
    event.preventDefault();

    const form = event.target;

    // フォームデータを取得
    const name = form.name.value;
    const email = form.email.value;
    const category = form.category.value;
    const device = form.device?.value || '未選択';
    const osVersion = form.os_version?.value || '未記入';
    const appVersion = form.app_version?.value || '未記入';
    const subject = form.subject?.value || 'お問い合わせ';
    const message = form.message.value;

    // メール件名
    const mailSubject = `【連絡先B】${subject}`;

    // メール本文を構成
    const mailBody = `
お名前: ${name}
メールアドレス: ${email}

【お問い合わせ種別】
${category}

【デバイス情報】
デバイス: ${device}
OSバージョン: ${osVersion}
アプリバージョン: ${appVersion}

【お問い合わせ内容】
${message}

---
このメールはアプリサポートサイトから送信されました
`;

    // mailtoリンクを生成
    const mailto = `mailto:contact.btype@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    // メールクライアントを開く
    window.location.href = mailto;

    // 成功メッセージを表示
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.innerHTML = `
            <div class="alert alert-success">
                <h3>メールクライアントが開きました</h3>
                <p>メール送信ボタンを押してお問い合わせを完了してください。</p>
                <p>メールクライアントが開かない場合は、以下のアドレスに直接お問い合わせください：</p>
                <p><strong>contact.btype@gmail.com</strong></p>
            </div>
        `;
        formMessage.style.display = 'block';
    }

    // フォームをリセット（オプション）
    // 送信後もフォームを残したい場合はコメントアウト
    setTimeout(() => {
        if (confirm('フォームをリセットしますか？')) {
            form.reset();
        }
    }, 1000);
}

// DOMContentLoadedイベントでフォームにリスナーを追加
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', sendViaMailto);
    }
});
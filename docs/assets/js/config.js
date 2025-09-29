/**
 * サイト全体の設定ファイル
 * このファイルの値を変更することで、全ページの表示内容を一括で変更できます
 */
const CONFIG = {
    // 会社・サービス情報
    company: {
        name: "Beowulf-Technology",
        copyright: "© 2025 Beowulf-Technology. All rights reserved.",
        year: "2025"
    },

    // 連絡先情報
    contact: {
        // メインの問い合わせメール
        mainEmail: "contact.btype@gmail.com",

        // プライバシー関連の問い合わせ
        privacyEmail: "contact.btype@gmail.com",

        // サポート専用メール
        supportEmail: "contact.btype@gmail.com"
    },

    // 各アプリの情報
    apps: {
        contactB: {
            name: "連絡先【B】",
            copyright: "© 2025 Beowulf-Technology. All rights reserved.",
            description: "シンプルで使いやすい連絡先管理アプリです"
        },
        sirudoor: {
            name: "しるドア",
            copyright: "© 2025 Beowulf-Technology. All rights reserved.",
            description: "音を検知して通知"
        }
    },

    // ソーシャルメディア（オプション）
    social: {
        twitter: "", // 例: "https://twitter.com/yourcompany"
        facebook: "", // 例: "https://www.facebook.com/yourcompany"
        instagram: "" // 例: "https://www.instagram.com/yourcompany"
    },

    // Google Analytics（オプション）
    analytics: {
        gaId: "" // 例: "GA_MEASUREMENT_ID"
    }
};

// 設定を適用する関数
function applyConfig() {
    // data-config属性を持つ要素を全て取得
    document.querySelectorAll('[data-config]').forEach(element => {
        const configPath = element.getAttribute('data-config');
        const value = getConfigValue(configPath);

        if (value) {
            if (element.tagName === 'A' && configPath.includes('Email')) {
                // メールアドレスの場合はmailtoリンクも設定
                element.href = `mailto:${value}`;
                element.textContent = value;
            } else {
                // その他のテキスト要素
                element.textContent = value;
            }
        }
    });

    // 特別な処理が必要な要素
    // フッターの著作権表記
    document.querySelectorAll('[data-copyright]').forEach(element => {
        const appName = element.getAttribute('data-copyright');
        if (appName === 'main') {
            element.textContent = CONFIG.company.copyright;
        } else if (appName === 'contactB') {
            element.textContent = CONFIG.apps.contactB.copyright;
        } else if (appName === 'sirudoor') {
            element.textContent = CONFIG.apps.sirudoor.copyright;
        }
    });
}

// 設定パスから値を取得する関数
function getConfigValue(path) {
    const keys = path.split('.');
    let value = CONFIG;

    for (const key of keys) {
        if (value && value[key] !== undefined) {
            value = value[key];
        } else {
            return null;
        }
    }

    return value;
}

// ページ読み込み時に設定を適用
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
} else {
    applyConfig();
}
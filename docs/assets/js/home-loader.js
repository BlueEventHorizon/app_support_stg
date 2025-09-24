/**
 * トップページでapp-info.jsonの情報を読み込んで表示する
 */

async function loadAppDescriptions() {
    // data-app-desc属性を持つ要素を全て取得
    const elements = document.querySelectorAll('[data-app-desc]');

    for (const element of elements) {
        const appId = element.getAttribute('data-app-desc');

        try {
            // 各アプリのapp-info.jsonを読み込み
            const response = await fetch(`apps/${appId}/app-info.json`);

            if (response.ok) {
                const data = await response.json();

                // 説明文を更新
                if (data.app && data.app.description) {
                    element.textContent = data.app.description;
                }

                // アイコンも更新（同じアプリIDのdata-app-icon要素を探す）
                const iconElement = document.querySelector(`[data-app-icon="${appId}"]`);
                if (iconElement && data.app && data.app.icon) {
                    const icon = data.app.icon;
                    if (icon.type === 'image') {
                        iconElement.style.background = 'transparent';
                        iconElement.style.padding = '0';
                        iconElement.style.overflow = 'hidden';
                        iconElement.style.borderRadius = '22.5%';
                        const iconPath = `apps/${appId}/${icon.value}`;
                        iconElement.innerHTML = `<img src="${iconPath}" alt="${data.app.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
                    }
                }

                // 名前も更新（同じアプリIDのdata-app-name要素を探す）
                const nameElement = document.querySelector(`[data-app-name="${appId}"]`);
                if (nameElement && data.app && data.app.name) {
                    nameElement.textContent = data.app.name;
                }
            }
        } catch (error) {
            console.error(`Failed to load app-info.json for ${appId}:`, error);
            // エラーが発生した場合は既存のテキストをそのまま使用
        }
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', loadAppDescriptions);
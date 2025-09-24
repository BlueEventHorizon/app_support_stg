/**
 * app-info.json を読み込んでHTMLに反映する
 */

async function loadAppInfo() {
    try {
        // app-info.json のパスを取得
        const response = await fetch('app-info.json');
        if (!response.ok) {
            throw new Error(`Failed to load app-info.json: ${response.status}`);
        }

        const data = await response.json();

        // アプリ基本情報を反映
        renderAppBasicInfo(data.app);

        // 機能一覧を描画
        renderFeatures(data.features);

        // 動作環境を描画
        renderRequirements(data.requirements);

        // 料金プランを描画
        renderPricing(data.pricing);

        // FAQを描画
        renderFAQ(data.faq);

        // リンクを設定
        setupLinks(data.links);

        // メタデータを反映
        renderMetadata(data.metadata);

    } catch (error) {
        console.error('Error loading app info:', error);
    }
}

function renderAppBasicInfo(app) {
    // ページタイトル
    const titleElement = document.querySelector('[data-app="title"]');
    if (titleElement) titleElement.textContent = app.name;

    // タグライン
    const taglineElement = document.querySelector('[data-app="tagline"]');
    if (taglineElement) taglineElement.textContent = app.tagline;

    // 説明
    const descElement = document.querySelector('[data-app="description"]');
    if (descElement) descElement.textContent = app.description;

    // アイコン
    const iconElement = document.querySelector('[data-app="icon"]');
    if (iconElement && app.icon) {
        iconElement.style.background = app.icon.gradient;
        if (app.icon.type === 'fontawesome') {
            iconElement.innerHTML = `<i class="fas ${app.icon.value}"></i>`;
        } else if (app.icon.type === 'emoji') {
            iconElement.textContent = app.icon.value;
        } else if (app.icon.type === 'image') {
            iconElement.innerHTML = `<img src="${app.icon.value}" alt="${app.name}">`;
        }
    }
}

function renderFeatures(features) {
    // メイン機能
    const mainFeaturesElement = document.querySelector('[data-app="features-main"]');
    if (mainFeaturesElement && features.main) {
        mainFeaturesElement.innerHTML = features.main.map(feature => `
            <div class="feature-item">
                <div class="feature-icon">
                    <i class="${feature.icon}"></i>
                </div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `).join('');
    }

    // 追加機能リスト
    const additionalFeaturesElement = document.querySelector('[data-app="features-additional"]');
    if (additionalFeaturesElement && features.additional) {
        additionalFeaturesElement.innerHTML = `
            <ul>
                ${features.additional.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
    }
}

function renderRequirements(requirements) {
    const reqElement = document.querySelector('[data-app="requirements"]');
    if (!reqElement) return;

    let html = '';

    if (requirements.ios && requirements.ios.available !== false) {
        html += `
            <div class="requirement-section">
                <h4>iOS版</h4>
                <ul>
                    <li>iOS ${requirements.ios.minVersion}以降</li>
                    <li>${requirements.ios.devices.join('、')}対応</li>
                    <li>${requirements.ios.languages.join('、')}対応</li>
                    ${requirements.ios.universal ? '<li>ユニバーサルアプリ（iPhone/iPad両対応）</li>' : ''}
                </ul>
                ${requirements.ios.note ? `<p class="note">${requirements.ios.note}</p>` : ''}
            </div>
        `;
    }

    if (requirements.android && requirements.android.available !== false) {
        html += `
            <div class="requirement-section">
                <h4>Android版</h4>
                <ul>
                    <li>Android ${requirements.android.minVersion}以降</li>
                    <li>${requirements.android.devices.join('、')}対応</li>
                    <li>${requirements.android.languages.join('、')}対応</li>
                </ul>
                ${requirements.android.note ? `<p class="note">${requirements.android.note}</p>` : ''}
            </div>
        `;
    }

    reqElement.innerHTML = html;
}

function renderPricing(pricing) {
    const pricingElement = document.querySelector('[data-app="pricing"]');
    if (!pricingElement) return;

    let html = '';

    if (pricing.type === 'free') {
        // 完全無料
        html = `<p>${pricing.note || '完全無料でご利用いただけます。'}</p>`;

    } else if (pricing.type === 'paid') {
        // 買い切り
        html = `
            <div class="pricing-paid">
                <p class="price">${pricing.price}</p>
                ${pricing.note ? `<p class="pricing-note">${pricing.note}</p>` : ''}
            </div>
        `;

    } else if (pricing.type === 'freemium') {
        // フリーミアム（無料＋有料版）
        html = `
            <div class="pricing-plans">
                <div class="plan free-plan">
                    <h4>無料プラン</h4>
                    <p class="price">${pricing.base.price}</p>
                    <ul>
                        ${pricing.base.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                <div class="plan premium-plan">
                    <h4>プレミアムプラン</h4>
                    <p class="price">${pricing.premium.price}</p>
                    <ul>
                        ${pricing.premium.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
            ${pricing.note ? `<p class="pricing-note">${pricing.note}</p>` : ''}
        `;

    } else if (pricing.type === 'subscription') {
        // サブスクリプション
        html = `
            <div class="pricing-plans">
                ${pricing.plans.map(plan => `
                    <div class="plan">
                        <h4>${plan.name}</h4>
                        <p class="price">${plan.price}</p>
                        ${plan.features ? `
                            <ul>
                                ${plan.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
            ${pricing.trial ? `<p class="pricing-trial">${pricing.trial}</p>` : ''}
            ${pricing.note ? `<p class="pricing-note">${pricing.note}</p>` : ''}
        `;

    } else if (pricing.type === 'iap') {
        // アプリ内課金
        html = `
            <div class="pricing-iap">
                <p>基本: ${pricing.base}</p>
                <h4>追加購入オプション</h4>
                <div class="iap-items">
                    ${pricing.purchases.map(item => `
                        <div class="iap-item">
                            <span class="iap-name">${item.name}</span>
                            <span class="iap-price">${item.price}</span>
                            ${item.description ? `<p class="iap-desc">${item.description}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
                ${pricing.note ? `<p class="pricing-note">${pricing.note}</p>` : ''}
            </div>
        `;
    }

    pricingElement.innerHTML = html;
}

function renderFAQ(faq) {
    const faqElement = document.querySelector('[data-app="faq"]');
    if (!faqElement || !faq) return;

    faqElement.innerHTML = faq.map((item, index) => `
        <div class="faq-item">
            <h3>Q: ${item.question}</h3>
            <p>A: ${item.answer}</p>
        </div>
    `).join('');
}

function setupLinks(links) {
    // App Store リンク
    const appStoreElement = document.querySelector('[data-app="link-appstore"]');
    if (appStoreElement && links.appStore) {
        appStoreElement.href = links.appStore;
        appStoreElement.style.display = 'inline-block';
    } else if (appStoreElement) {
        appStoreElement.style.display = 'none';
    }

    // Google Play リンク
    const playStoreElement = document.querySelector('[data-app="link-playstore"]');
    if (playStoreElement && links.googlePlay) {
        playStoreElement.href = links.googlePlay;
        playStoreElement.style.display = 'inline-block';
    } else if (playStoreElement) {
        playStoreElement.style.display = 'none';
    }
}

function renderMetadata(metadata) {
    const metaElement = document.querySelector('[data-app="metadata"]');
    if (!metaElement || !metadata) return;

    const items = [];
    if (metadata.category) items.push(`カテゴリ: ${metadata.category}`);
    if (metadata.contentRating) items.push(`年齢: ${metadata.contentRating}`);
    if (metadata.developer) items.push(`開発元: ${metadata.developer}`);
    if (metadata.compatibility) items.push(`互換性: ${metadata.compatibility}`);

    if (items.length > 0) {
        metaElement.innerHTML = `
            <div class="metadata-info">
                ${items.map(item => `<span class="meta-item">${item}</span>`).join(' | ')}
            </div>
        `;
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', loadAppInfo);
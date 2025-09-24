/**
 * マークダウンファイルを読み込んでHTMLに変換する
 */

// 簡易的なMarkdownパーサー
function parseMarkdown(markdown) {
    let html = markdown;

    // エスケープ処理
    const escapeHtml = (text) => {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    };

    // コードブロックを一時的に保護
    const codeBlocks = [];
    html = html.replace(/```[\s\S]*?```/g, (match) => {
        codeBlocks.push(match);
        return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
    });

    // インラインコードを保護
    const inlineCodes = [];
    html = html.replace(/`[^`]+`/g, (match) => {
        inlineCodes.push(match);
        return `__INLINE_CODE_${inlineCodes.length - 1}__`;
    });

    // 見出し（h1-h6）
    html = html.replace(/^###### (.*?)$/gm, '<h6>$1</h6>');
    html = html.replace(/^##### (.*?)$/gm, '<h5>$1</h5>');
    html = html.replace(/^#### (.*?)$/gm, '<h4>$1</h4>');
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

    // 太字と斜体
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // リンク
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // 水平線
    html = html.replace(/^---$/gm, '<hr>');

    // リスト処理
    const lines = html.split('\n');
    const processedLines = [];
    let inList = false;
    let listType = null;
    let currentIndent = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // 番号付きリスト
        const orderedMatch = line.match(/^(\s*)(\d+)\.\s+(.*)/);
        if (orderedMatch) {
            const indent = orderedMatch[1].length;
            const content = orderedMatch[3];

            if (!inList || listType !== 'ol' || indent !== currentIndent) {
                if (inList) {
                    processedLines.push(listType === 'ol' ? '</ol>' : '</ul>');
                }
                processedLines.push('<ol>');
                inList = true;
                listType = 'ol';
                currentIndent = indent;
            }
            processedLines.push(`<li>${content}</li>`);
            continue;
        }

        // 箇条書きリスト
        const unorderedMatch = line.match(/^(\s*)[-*]\s+(.*)/);
        if (unorderedMatch) {
            const indent = unorderedMatch[1].length;
            const content = unorderedMatch[2];

            if (!inList || listType !== 'ul' || indent !== currentIndent) {
                if (inList) {
                    processedLines.push(listType === 'ol' ? '</ol>' : '</ul>');
                }
                processedLines.push('<ul>');
                inList = true;
                listType = 'ul';
                currentIndent = indent;
            }
            processedLines.push(`<li>${content}</li>`);
            continue;
        }

        // リストの終了
        if (inList && !line.match(/^\s*[-*\d]/)) {
            processedLines.push(listType === 'ol' ? '</ol>' : '</ul>');
            inList = false;
            listType = null;
        }

        processedLines.push(line);
    }

    if (inList) {
        processedLines.push(listType === 'ol' ? '</ol>' : '</ul>');
    }

    html = processedLines.join('\n');

    // 段落
    html = html.replace(/\n\n([^<\n][^\n]*)/g, '\n\n<p>$1</p>');

    // インラインコードを復元
    inlineCodes.forEach((code, index) => {
        const content = code.slice(1, -1);
        html = html.replace(`__INLINE_CODE_${index}__`, `<code>${escapeHtml(content)}</code>`);
    });

    // コードブロックを復元
    codeBlocks.forEach((block, index) => {
        const content = block.slice(3, -3).trim();
        html = html.replace(`__CODE_BLOCK_${index}__`, `<pre><code>${escapeHtml(content)}</code></pre>`);
    });

    return html;
}

// マークダウンファイルを読み込んで表示
async function loadMarkdown(mdFile, targetElementId) {
    try {
        const response = await fetch(mdFile);
        if (!response.ok) {
            throw new Error(`Failed to load ${mdFile}: ${response.status}`);
        }

        const markdown = await response.text();
        const html = parseMarkdown(markdown);

        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading markdown:', error);
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = '<p>コンテンツの読み込みに失敗しました。</p>';
        }
    }
}

// ページ読み込み時にdata-markdown属性を持つ要素を処理
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-markdown]');
    elements.forEach(element => {
        const mdFile = element.getAttribute('data-markdown');
        if (mdFile) {
            loadMarkdown(mdFile, element.id);
        }
    });
});
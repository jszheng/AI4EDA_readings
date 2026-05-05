/**
 * convert_to_iframe.js v1
 * 把所有 content/*.html 内容片段转换成完整的 HTML 文档
 * 这样 iframe 加载时能正确引用 CSS 和 toggle.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/peiji/Documents/AI4EDA_readings';

// 需要处理的目录及其相对于 ROOT 的 CSS/JS 路径
const dirs = [
  { dir: 'content/dates',    cssPath: '../../style.css',  jsPath: '../../toggle.js' },
  { dir: 'content/latest',   cssPath: '../../style.css',  jsPath: '../../toggle.js' },
  { dir: 'content/news',     cssPath: '../style.css',   jsPath: '../toggle.js' },
  { dir: 'content',          cssPath: '../style.css',    jsPath: '../toggle.js', files: ['overview.html', 'timeline.html', 'tracking.html'] }
];

let converted = 0;

dirs.forEach(spec => {
  const fullDir = path.join(ROOT, spec.dir);
  if (!fs.existsSync(fullDir)) {
    console.log(`跳过不存在的目录: ${spec.dir}`);
    return;
  }

  let files;
  if (spec.files) {
    files = spec.files.map(f => path.join(fullDir, f));
  } else {
    files = fs.readdirSync(fullDir)
      .filter(f => f.endsWith('.html'))
      .map(f => path.join(fullDir, f));
  }

  files.forEach(filePath => {
    const original = fs.readFileSync(filePath, 'utf8').trim();

    // 检查是否已经是完整 HTML 文档
    if (original.startsWith('<!DOCTYPE') || original.startsWith('<html')) {
      console.log(`⏭️  跳过（已是完整HTML）: ${path.relative(ROOT, filePath)}`);
      return;
    }

    // 构建完整的 HTML 文档
    const html = [
      '<!DOCTYPE html>',
      '<html lang="zh-CN">',
      '<head>',
      '  <meta charset="UTF-8" />',
      `  <link rel="stylesheet" href="${spec.cssPath}" />`,
      `  <script src="${spec.jsPath}"></script>`,
      '</head>',
      '<body>',
      original,
      '</body>',
      '</html>',
      ''
    ].join('\n');

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ 已转换: ${path.relative(ROOT, filePath)}`);
    converted++;
  });
});

console.log(`\n完成: ${converted} 个文件已转换为完整 HTML 文档`);

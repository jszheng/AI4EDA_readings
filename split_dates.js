/**
 * split_dates.js v7 - 从原始 index.html 提取缺失的日期文件
 * 使用更简单可靠的标记匹配
 */

const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/peiji/Documents/AI4EDA_readings';
const ORIGINAL = path.join(ROOT, 'index.html');
const OUTPUT_DIR = path.join(ROOT, 'content/dates');

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 读取原始文件
const html = fs.readFileSync(ORIGINAL, 'utf8');

console.log(`文件总大小: ${html.length} 字符`);

// 使用正则表达式找到"论文"部分的起止位置（更健壮）
const papersMatch = html.match(/<!--\s*═*[═\s]*论文[═\s]*═*\s*-->/);
const newsMatch = html.match(/<!--\s*═*[═\s]*行业动态[═\s]*═*\s*-->/);

console.log('论文标记:', papersMatch ? `找到 (位置 ${papersMatch.index})` : '未找到');
console.log('行业动态标记:', newsMatch ? `找到 (位置 ${newsMatch.index})` : '未找到');

if (!papersMatch || !newsMatch) {
  console.log('错误: 无法找到必要的标记');
  process.exit(1);
}

const papersStart = papersMatch.index;
const newsStart = newsMatch.index;
const papersSection = html.substring(papersStart, newsStart);

console.log(`论文部分: ${papersStart} - ${newsStart} (${papersSection.length} 字符)`);

// 所有需要提取的日期
const datesToExtract = [
  '2026-04-12', '2026-04-11', '2026-04-10', '2026-04-09',
  '2026-04-08', '2026-04-07', '2026-04-06', '2026-04-05',
  '2026-04-04', '2026-04-03', '2026-04-02', '2026-04-01',
  '2026-03-31', '2026-03-30', '2026-03-29', '2026-03-28',
  '2026-03-27', '2026-03-26', '2026-03-25', '2026-03-24',
  '2026-03-23', '2026-03-22', '2026-03-21', '2026-03-20',
  '2026-03-19', '2026-03-18', '2026-03-17', '2026-03-16',
  '2026-03-15'
];

let successCount = 0;
let skipCount = 0;
let failCount = 0;

datesToExtract.forEach(date => {
  const outputPath = path.join(OUTPUT_DIR, `${date}.html`);
  
  // 跳过已存在的文件
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  跳过 ${date} (已存在)`);
    skipCount++;
    return;
  }
  
  // 在 papersSection 中查找日期标记 - 使用多种模式
  const patterns = [
    `<!-- ── ${date} ── -->`,
    `<!-- ── ${date} 最新更新 ── -->`,
    `<!-- ═══════ ${date} ═══════ -->`,
    `<!-- ── ${date} 补漏批次 ── -->`
  ];
  
  let startPos = -1;
  for (const pattern of patterns) {
    const pos = papersSection.indexOf(pattern);
    if (pos !== -1) {
      startPos = pos;
      console.log(`  找到 ${date} 标记: "${pattern}" at ${pos}`);
      break;
    }
  }
  
  if (startPos === -1) {
    console.log(`⚠️  未找到 ${date} 的起始标记`);
    failCount++;
    return;
  }
  
  // 找到下一个日期标记或章节结束
  const allDatePatterns = [
    '<!-- ── 2026-04', '<!-- ── 2026-03',
    '<!-- ═══════ 行业动态',
    '<!-- ═══════ 时间线',
    '<!-- ═══════ 待追踪'
  ];
  
  let endPos = papersSection.length;
  for (const pattern of allDatePatterns) {
    const pos = papersSection.indexOf(pattern, startPos + 10);
    if (pos !== -1 && pos < endPos) {
      endPos = pos;
    }
  }
  
  // 提取内容
  let content = papersSection.substring(startPos, endPos).trim();
  
  // 找到完整的 date-group div
  const dateGroupStart = content.indexOf('<div class="date-group">');
  if (dateGroupStart !== -1) {
    // 计算 div 嵌套层级，找到匹配的结束标签
    let divCount = 0;
    let endTagPos = -1;
    
    for (let i = dateGroupStart; i < content.length - 6; i++) {
      if (content[i] === '<') {
        if (content.substring(i, i + 21) === '<div class="date-group">') {
          divCount++;
        } else if (content.substring(i, i + 6) === '</div>') {
          divCount--;
          if (divCount === 0) {
            endTagPos = i + 6;
            break;
          }
        }
      }
    }
    
    if (endTagPos !== -1) {
      content = content.substring(0, endTagPos).trim();
    }
  }
  
  // 写入文件
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`✅ 已创建 ${date}.html (${content.length} 字符)`);
  successCount++;
});

console.log(`\n完成: ${successCount} 个文件已创建, ${skipCount} 个已存在, ${failCount} 个失败`);

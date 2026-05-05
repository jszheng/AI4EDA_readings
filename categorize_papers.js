/**
 * categorize_papers_v3.js - 完善分类版
 * 补充更多关键词，减少未分类论文
 */
const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/peiji/Documents/AI4EDA_readings';
const CONTENT_DIR = path.join(ROOT, 'content');
const CAT_DIR = path.join(CONTENT_DIR, 'categories');

if (!fs.existsSync(CAT_DIR)) fs.mkdirSync(CAT_DIR, { recursive: true });

const CATEGORIES = [
  {
    key: 'rtl',
    title: 'RTL生成',
    icon: '⚡',
    desc: 'LLM / AI 辅助 Verilog / RTL 代码生成与调试',
    file: 'content/categories/rtl.html',
    mustHave: ['Verilog', 'RTL', 'HDL', 'Code Generation', 'Skill Library', 'LEGO', 'VerilogEval',
               'SiliconMind', 'RTLCoder', 'RTL-CLAW', 'Assertain', 'AgileAssert', 'Spec2Cov',
               'Natural Language to Silicon', '表示瓶颈', 'IR 选择', 'HWE-Bench', '原理图', '板级']
  },
  {
    key: 'verify',
    title: '功能验证',
    icon: '✅',
    desc: '形式验证、UVM、断言生成、测试生成、覆盖率',
    file: 'content/categories/verify.html',
    mustHave: ['Verification', 'Verify', 'UVM', 'Testbench', 'SVA', 'Assertion', 'Formal',
               'Autoformalization', 'JasperGold', 'FVRuleLearner', '覆盖率', '断言',
               '功能验证', 'AutoPDR', 'Model Checking', '安全断言', '安全验证']
  },
  {
    key: 'physical',
    title: '物理设计',
    icon: '📐',
    desc: '布局布线、PPA 优化、3D-IC、逻辑综合、布图规划',
    file: 'content/categories/physical.html',
    mustHave: ['Placement', 'Routing', 'Physical Design', 'PPA', 'Chip Placement', 'Flow Matching',
               'Global Routing', 'Scheduling Optimization', '布图', '布线', '布局', '3D-IC',
               '逻辑综合', 'ABC', 'TOPCELL', 'Escaping Flatland', 'HYPERHEURIST',
               'CellE', '标准单元', '加法器', 'AXON']
  },
  {
    key: 'analog',
    title: '模拟与架构',
    icon: '🔬',
    desc: '模拟 IC、FPGA、体系结构、电路仿真、多物理场',
    file: 'content/categories/analog.html',
    mustHave: ['Analog', 'FPGA', 'HLS', 'Cache', 'Branch Prediction', 'Prefetching',
               'Architecture Exploration', 'Modular Design', 'Chiplet', 'GPU',
               '电路仿真', 'EMSpice', 'EEspice', '模拟电路', 'GRPO',
               'DeepStack', '3D 堆叠', 'DRL', 'Versal', 'AP-DRL',
               'Causal AI', 'AMS', 'IR-Drop', '多物理场', '温度感知',
               'GNN', 'WarPGNN', 'TSV', '热翘曲', '电热']
  },
  {
    key: 'agent',
    title: 'AI Agent',
    icon: '🤖',
    desc: '智能体框架、多智能体、EDA 自动化流水线',
    file: 'content/categories/agent.html',
    mustHave: ['Agent', 'Agentic', 'CODMAS', 'DRCY', 'AutoEDA', 'MCP',
               'LLM-Assisted EDA', 'Flexible LLM', 'LUMINA', 'AlphaZero',
               '微服务', '辩证多智能体', '原理图审查']
  },
  {
    key: 'industry',
    title: '行业应用',
    icon: '🏭',
    desc: '行业动态、企业合作、综述、方法论',
    file: 'content/categories/industry.html',
    mustHave: ['Cadence', 'Synopsys', 'Siemens', 'TSMC', 'NVIDIA', 'SemiEngineering',
               '创新奇智', '行业', '综述', 'IEEE', '配置', '超参数', 'Configuration Over Selection',
               'ZipServ', '压缩', 'LLM 推理', '重塑芯片设计', '重点名录']
  }
];

function classifyCard(cardHtml) {
  const tagMatches = cardHtml.match(/<span class="tag">([^<]+)<\/span>/g) || [];
  const tags = tagMatches.map(t => t.replace(/<[^>]+>/g, '').trim());
  const catMatches = cardHtml.match(/border-radius:8px;">([^<]+)<\/span>/g) || [];
  const catLabels = catMatches.map(t => t.replace(/<[^>]+>/g, '').trim());
  const titleMatch = cardHtml.match(/abs-title[^>]*>([\s\S]*?)<\/div>/);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  const bodyMatch = cardHtml.match(/abs-body[^>]*>([\s\S]*?)<\/p>/);
  const body = bodyMatch ? bodyMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  const allText = [...tags, ...catLabels, title, body].join(' ').toLowerCase();
  
  for (const cat of CATEGORIES) {
    for (const kw of cat.mustHave) {
      if (allText.includes(kw.toLowerCase())) {
        return cat;
      }
    }
  }
  return null;
}

function readAllContentFiles() {
  const files = [];
  ['latest', 'dates'].forEach(subdir => {
    const dir = path.join(CONTENT_DIR, subdir);
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(fname => {
      if (!fname.endsWith('.html')) return;
      files.push({ path: path.join(dir, fname), subdir, fname, html: fs.readFileSync(path.join(dir, fname), 'utf8') });
    });
  });
  return files;
}

function extractAbsCards(html) {
  const cards = [];
  const regex = /<div class="abs-card">/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const startIdx = match.index;
    let depth = 0, i = startIdx;
    while (i < html.length) {
      if (html.substring(i, i + 4) === '<div') { depth++; i += 4; }
      else if (html.substring(i, i + 6) === '</div>') { depth--; if (depth === 0) { cards.push(html.substring(startIdx, i + 6)); break; } i += 6; }
      else { i++; }
    }
  }
  return cards;
}

const allFiles = readAllContentFiles();
console.log(`读取了 ${allFiles.length} 个内容文件`);

const allCards = [];
const seen = new Set();
allFiles.forEach(file => {
  extractAbsCards(file.html).forEach(cardHtml => {
    const titleMatch = cardHtml.match(/abs-title[^>]*>([\s\S]*?)<\/div>/);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    if (title && !seen.has(title)) { seen.add(title); allCards.push({ cardHtml, title }); }
  });
});
console.log(`提取了 ${allCards.length} 个唯一论文卡片\n`);

const catPapers = {};
CATEGORIES.forEach(cat => { catPapers[cat.key] = []; });
const uncategorized = [];

allCards.forEach(({ cardHtml, title }) => {
  const cat = classifyCard(cardHtml);
  if (cat) { catPapers[cat.key].push({ cardHtml, title }); }
  else { uncategorized.push({ cardHtml, title }); }
});

CATEGORIES.forEach(cat => { console.log(`  ${cat.icon} ${cat.title}: ${catPapers[cat.key].length} 篇`); });
console.log(`  ❓ 未分类: ${uncategorized.length} 篇`);
if (uncategorized.length > 0) {
  console.log('\n未分类论文:');
  uncategorized.forEach(p => console.log(`  - ${p.title}`));
}

// 生成 HTML 文件
CATEGORIES.forEach(cat => {
  const papers = catPapers[cat.key];
  const cardsHtml = papers.map(p => `    ${p.cardHtml}`).join('\n\n');
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="../../style.css?v=20260505" />
  <script src="../../toggle.js"></script>
</head>
<body>
<section id="cat-${cat.key}">
  <div class="section-title"><span class="icon">${cat.icon}</span> ${cat.title}（${papers.length}篇） <span class="line"></span></div>
  <p style="color:var(--muted);font-size:.85rem;margin-bottom:24px;">${cat.desc}</p>
  <div class="abstracts">
${cardsHtml}
  </div>
</section>
</body>
</html>`;
  fs.writeFileSync(path.join(CAT_DIR, cat.key + '.html'), html, 'utf8');
  console.log(`生成: ${cat.key}.html (${papers.length} 篇)`);
});

console.log('\n分类文件生成完毕！');

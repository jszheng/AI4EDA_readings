const fs = require('fs');
const path = require('path');

const filepath = path.resolve('C:/Users/peiji/Documents/AI4EDA_readings/index.html');
let content = fs.readFileSync(filepath, 'utf-8');
const originalLen = content.length;
const changes = [];

// ── Fix 1: abs-abstract -> abs-body ──
const count1 = (content.match(/class="abs-abstract"/g) || []).length;
if (count1) {
    content = content.replace(/class="abs-abstract"/g, 'class="abs-body"');
    changes.push(`abs-abstract->abs-body: ${count1}处`);
}

// ── Fix 2: Add toggleDate function ──
if (!content.includes('function toggleDate')) {
    const toggleDateFunc = `  function toggleDate(el) {
    const dateGroup = el.closest('.date-group');
    const body = dateGroup.querySelector('.date-body');
    const toggle = el.querySelector('.toggle');
    if (body.classList.contains('collapsed')) {
      body.classList.remove('collapsed');
      toggle.textContent = '▼';
    } else {
      body.classList.add('collapsed');
      toggle.textContent = '▶';
    }
  }
`;
    content = content.replace('  function toggleGroup(id)', toggleDateFunc + '  function toggleGroup(id)');
    changes.push('添加 toggleDate 函数');
}

// ── Fix 3: Add LEGO paper card to 04-29 section ──
if (!content.includes('2604.23355')) {
    const legoCard = `      <div class="abs-card">
        <div class="abs-meta">arXiv:2604.23355 · cs.AR / cs.SE · 2026-04-23</div>
        <h3 class="abs-title">LEGO: Learning to Generate Verilog with LLM Skill Libraries</h3>
        <p class="abs-authors">Yuxiang Wei, Wenqian Pei, Zhengrui Zhang, Guoyu Wang, Yu Huang, Bei Yu</p>
        <p class="abs-body">提出 <strong>LEGO</strong>，通过构建 LLM 技能库实现高质量 Verilog 代码生成。核心创新：(1) 将复杂电路设计分解为可复用的基础技能模块（计数器、状态机、流水线等）；(2) LLM 从技能库中检索和组合适当技能来生成目标 RTL；(3) 技能库持续积累和演化，实现"越用越好"。在多个基准上显著优于直接生成方法，为 Agentic EDA 工具链提供可复用的知识组件。</p>
        <div class="abs-links">
          <a href="https://arxiv.org/abs/2604.23355" target="_blank">📄 arXiv</a>
          <a class="local" href="2026-04-29/LEGO_LLMSkill_RTL_2604.23355v1.pdf">📥 本地PDF</a>
          <span style="color:var(--accent4);font-size:.75rem;padding:3px 8px;border:1px solid var(--accent4);border-radius:8px;">LLM + Skill Library</span>
        </div>
        <div class="tags">
          <span class="tag">LLM</span>
          <span class="tag">Skill Library</span>
          <span class="tag">Verilog Generation</span>
          <span class="tag">Modular Design</span>
        </div>
      </div>

`;
    // Insert after AgenticArchitect card, before date-body close
    content = content.replace(
        '    </div>\n  </div>\n\n  <!-- ── 近期重要补充',
        legoCard + '    </div>\n  </div>\n\n  <!-- ── 近期重要补充'
    );
    changes.push('添加 LEGO 论文卡片');
}

// ── Fix 4: Update 04-29 header stats ──
content = content.replace('<span class="badge-hot">2篇新论文</span>', '<span class="badge-hot">3篇新论文</span>');
content = content.replace('⭐ 今日重点论文（2篇精选）', '⭐ 今日重点论文（3篇精选）');
changes.push('更新04-29统计为3篇');

// ── Fix 5: Update header stats ──
content = content.replace('<div class="num">109</div><div class="label">论文收录</div>', '<div class="num">110</div><div class="label">论文收录</div>');
content = content.replace('<div class="num" style="color:var(--accent3);">2</div><div class="label">今日新增</div>', '<div class="num" style="color:var(--accent3);">3</div><div class="label">今日新增</div>');
changes.push('更新header统计数字');

// ── Fix 6: Update all expired countdowns ──
const countdownFixes = [
    ['MLCAD Alpha 倒计时 2 天', 'MLCAD Alpha 已截止（4月30日）'],
    ['MLCAD Alpha 倒计时 7 天', 'MLCAD Alpha 已截止（4月30日）'],
    ['MLCAD Alpha 倒计时 8 天', 'MLCAD Alpha 已截止（4月30日）'],
    ['MLCAD Alpha 倒计时 9 天', 'MLCAD Alpha 已截止（4月30日）'],
    ['MLCAD Alpha 倒计时 10 天', 'MLCAD Alpha 已截止（4月30日）'],
    ['MLCAD Alpha 倒计时 11 天', 'MLCAD Alpha 已截止（4月30日）'],
    ['MLCAD Alpha 倒计时 13 天', 'MLCAD Alpha 已截止（4月30日）'],
    ['Agent4Chip 倒计时 2 天', 'Agent4Chip 已开幕（4月23日）'],
    ['Agent4Chip 倒计时 3 天', 'Agent4Chip 已开幕（4月23日）'],
    ['Agent4Chip 倒计时 4 天', 'Agent4Chip 已开幕（4月23日）'],
    ['Agent4Chip 倒计时 6 天', 'Agent4Chip 已开幕（4月23日）'],
    ['Agent4Chip 倒计时 7 天', 'Agent4Chip 已开幕（4月23日）'],
    ['Agent4Chip 倒计时 8 天', 'Agent4Chip 已开幕（4月23日）'],
    ['Agent4Chip 倒计时 9 天', 'Agent4Chip 已开幕（4月23日）'],
    ['Agent4Chip 倒计时 11 天', 'Agent4Chip 已开幕（4月23日）'],
    ['倒计时6天）', '已开幕（4月23日）'],
    ['倒计时3天）', '已开幕（4月23日）'],
    ['ICCAD截止倒计时1天', 'ICCAD 2026 已截止（4月14日）'],
    ['ICCAD截止倒计时2天', 'ICCAD 2026 已截止（4月14日）'],
    ['ICCAD截止倒计时3天', 'ICCAD 2026 已截止（4月14日）'],
    ['ICCAD 2026 完整论文截止倒计时（4月14日）', 'ICCAD 2026 已截止（4月14日）'],
    ['仅剩 4 天（4月14日截止）', '已于4月14日截止'],
    ['仅剩 3 天（4月14日，AoE）', '已于4月14日截止'],
    ['仅剩3天', '已于4月14日截止'],
    ['Agent4Chip Workshop 倒计时 3 天', 'Agent4Chip Workshop 已开幕（4月23日）'],
    ['Agent4Chip Workshop 倒计时 6 天', 'Agent4Chip Workshop 已开幕（4月23日）'],
    ['Agent4Chip @ ICLR 2026 明日开幕', 'Agent4Chip @ ICLR 2026 已开幕（4月23日）'],
    ['Agent4Chip @ ICLR 2026 今日正式开幕 🎉', 'Agent4Chip @ ICLR 2026 已开幕（4月23日）'],
    ['Agent4Chip Workshop @ ICLR 2026 后天（4月23日）开幕，倒计时 2 天。', 'Agent4Chip Workshop @ ICLR 2026 于4月23日已开幕。'],
    ['明日开幕）</div>', '已开幕（4月23日）</div>'],
    ['倒计时 2 天）</div>', '已开幕（4月23日）</div>'],
    ['（倒计时6天）', '（4月17日倒计时期间）'],
    ['DAC程序4天', 'DAC 2026 程序已公布'],
    ['DAC程序5天', 'DAC 2026 程序已公布'],
    ['Agent4Chip倒计时 · DAC程序4天', 'Agent4Chip 已开幕 · DAC程序已公布'],
    ['Agent4Chip倒计时 · DAC程序5天', 'Agent4Chip 已开幕 · DAC程序已公布'],
    ['Agent4Chip 11天', 'Agent4Chip 已开幕'],
    ['倒计时 2 天 · MLCAD', '已开幕 · MLCAD'],
    // section titles
    ['Agent4Chip Workshop @ ICLR 2026 明日开幕 · Synopsys/Cadence × TSMC 双重公告 · MLCAD Alpha 倒计时 7 天）', 'Agent4Chip Workshop @ ICLR 2026 已开幕 · Synopsys/Cadence × TSMC 双重公告 · MLCAD Alpha 已截止（4月30日）'],
    ['Agent4Chip @ ICLR 2026 明日开幕 · MLCAD Alpha 倒计时 8 天）', 'Agent4Chip @ ICLR 2026 已开幕 · MLCAD Alpha 已截止（4月30日）'],
    ['Agent4Chip 倒计时 2 天 · MLCAD Alpha 倒计时 9 天）', 'Agent4Chip 已开幕 · MLCAD Alpha 已截止（4月30日）'],
    ['Agent4Chip 倒计时 3 天 · MLCAD Alpha 倒计时 10 天）', 'Agent4Chip 已开幕 · MLCAD Alpha 已截止（4月30日）'],
    ['ICCAD 2026 论文截止倒计时2天 · DAC程序5天 · MLCAD竞赛 · Agent4Chip 11天）', 'ICCAD 2026 已截止 · DAC程序已公布 · MLCAD竞赛 · Agent4Chip 已开幕）'],
    ['ICCAD 2026 完整论文截止倒计时3天】', 'ICCAD 2026 已截止（4月14日）】'],
    ['ICCAD 2026 完整论文截止倒计时（4月14日）】', 'ICCAD 2026 已截止（4月14日）】'],
    ['ICCAD 2026 完整论文截止倒计时（4月14日）', 'ICCAD 2026 已截止（4月14日）'],
    // Overview section
    ['🔑 当前最重要的七大趋势（截至 2026-04-23）', '🔑 当前最重要的七大趋势（截至 2026-04-29）'],
    ['MLCAD 2026 竞赛 Alpha 阶段（4月30日截止，倒计时 7 天）：', 'MLCAD 2026 竞赛 Alpha 阶段（4月30日截止）：'],
    ['今日 2 篇新论文（4月23日，Agent4Chip @ ICLR 2026 开幕日）：', '4月23日 2 篇新论文（Agent4Chip @ ICLR 2026 开幕日）：'],
    // Tracking section
    ['🎉 Agent4Chip Workshop @ ICLR 2026（今日-4月27日，里约 Riocentro）正在进行', '🎉 Agent4Chip Workshop @ ICLR 2026（4月23-27日，里约 Riocentro）已结束'],
    ['MLCAD 2026 竞赛 Alpha 阶段（4月30日截止，倒计时 7 天）', 'MLCAD 2026 竞赛 Alpha 阶段（4月30日已截止）'],
    // Timeline labels
    ['📅 重大事件时间线（本周）', '📅 重大事件时间线'],
    // Footer
    ['最后生成：2026-04-23', '最后更新：2026-04-29'],
    // Timeline items
    ['⚠️ MLCAD 2026 Alpha 阶段倒计时 <strong>2 天</strong>（4月30日截止）。', '⚠️ MLCAD 2026 Alpha 阶段已于4月30日截止。'],
    ['MLCAD 2026 Alpha 阶段倒计时 <strong>7 天</strong>（4月30日截止）', 'MLCAD 2026 Alpha 阶段已截止（4月30日）'],
    ['倒计时 <strong>8 天</strong>。', '已截止（4月30日）。'],
    ['倒计时 9 天（4月30日）', '已截止（4月30日）'],
    ['Agent4Chip 倒计时 2 天；MLCAD 2026 Alpha 阶段倒计时 9 天（4月30日）', 'Agent4Chip 已开幕；MLCAD 2026 Alpha 已截止（4月30日）'],
    ['Agent4Chip Workshop @ ICLR 2026 后天（4月23日）开幕，倒计时 2 天', 'Agent4Chip Workshop @ ICLR 2026 已于4月23日开幕'],
    ['Agent4Chip Workshop @ ICLR 2026 本周三（4月23日）开幕，倒计时 3 天', 'Agent4Chip Workshop @ ICLR 2026 已于4月23日开幕'],
    ['倒计时 10 天（4月30日）', '已截止（4月30日）'],
    ['Agent4Chip Workshop @ ICLR 2026 还有 11 天', 'Agent4Chip Workshop @ ICLR 2026 已于4月23日开幕'],
    ['Agent4Chip @ ICLR 2026 倒计时 <strong>8天</strong>', 'Agent4Chip @ ICLR 2026 已开幕'],
    ['Agent4Chip @ ICLR 2026 倒计时 6 天', 'Agent4Chip @ ICLR 2026 已开幕'],
    ['Agent4Chip @ ICLR 2026 <strong>9天后开幕</strong>', 'Agent4Chip @ ICLR 2026 已开幕（4月23日）'],
    ['倒计时2天 · MLCAD', '已开幕 · MLCAD'],
    ['DAC 2026 程序 <strong>4月17日</strong>公布（3天）', 'DAC 2026 程序已于4月17日公布'],
    ['DAC 2026 程序5天后公布（4月17日）', 'DAC 2026 程序已于4月17日公布'],
];

let countdownCount = 0;
for (const [old, newStr] of countdownFixes) {
    const c = (content.match(new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    if (c) {
        content = content.split(old).join(newStr);
        countdownCount += c;
    }
}
if (countdownCount) {
    changes.push(`更新倒计时措辞: ${countdownCount}处`);
}

// ── Fix 7: Update timeline 04-29 entry ──
content = content.replace(
    'RL Expert-level Placement (DAC 2026) + Agentic Architect 开源框架发布</h4>',
    'RL Expert-level Placement (DAC 2026) + Agentic Architect 开源框架 + LEGO LLM 技能库 RTL 生成</h4>'
);
content = content.replace(
    'arXiv 两篇今日论文：RL 奖励模型逆向学习实现专家级布局；首个端到端 Agentic AI 微架构探索框架开源。',
    'arXiv 三篇今日论文：RL 奖励模型逆向学习实现专家级布局；首个端到端 Agentic AI 微架构探索框架开源；LEGO 通过技能库模块化 Verilog 生成。'
);
changes.push('更新时间线04-29条目');

// ── Fix 8: Fix orphan HTML tags near Partcl ──
if (content.includes('<p>Partcl 与 Hudson River Trading')) {
    // The orphan <p> and <a> are between two </div> tags without a parent news-card
    content = content.replace(
        /(<\/div>\n)\s*(<p>Partcl 与 Hudson River Trading 联合举办宏单元布局算法竞赛，总奖金 \$49,000。评估基于 IBM ICCAD04 基准（18个设计）和 OpenROAD 流程，代理成本 = 1\.0×线长 \+ 0\.5×密度 \+ 0\.5×拥塞。前7名进入 NG45 真实流程验证，截止日期 2026年5月21日。允许 SA \/ RL \/ GNN \/ 解析法，代码须开源。\n\s*<a href="https:\/\/github\.com\/partcleda\/macro-place-challenge-2026" target="_blank">→ GitHub 参赛入口<\/a>\n)\s*(<\/div>)/,
        '$1    <div class="news-card">\n      <div class="src"><span class="dot"></span>Partcl / Hudson River Trading · 2026-04-06</div>\n      <h4>🏆 Partcl 宏单元布局算法竞赛：$49,000 奖金，OpenROAD 流程，5月21日截止</h4>\n      $2    </div>\n    </div>$3'
    );
    changes.push('修复孤立HTML标签');
}

// Write back
fs.writeFileSync(filepath, content, 'utf-8');

console.log(`修复完成！原始大小: ${originalLen} 字符，修复后: ${content.length} 字符`);
console.log('变更列表:');
for (const c of changes) {
    console.log(`  ✓ ${c}`);
}

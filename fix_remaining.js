const fs = require('fs');
const fp = 'C:/Users/peiji/Documents/AI4EDA_readings/index.html';
let c = fs.readFileSync(fp, 'utf-8');

function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

const fixes = [
    ['Agent4Chip Workshop 倒计时 4 天', 'Agent4Chip Workshop 已开幕（4月23日）'],
    ['ICCAD 2026截止倒计时1天', 'ICCAD 2026 已截止（4月14日）'],
    ['ICCAD 2026 论文截止倒计时2天', 'ICCAD 2026 已截止（4月14日）'],
    ['ICCAD截止2天 · Agent4Chip倒计时', 'ICCAD已截止 · Agent4Chip已开幕'],
    ['⏰ ICCAD 2026 完整论文截止倒计时：仅剩 <strong>3 天</strong>（4月14日，AoE）', '⏰ ICCAD 2026 完整论文已于4月14日截止'],
    ['Agent4Chip@ICLR 2026 开幕倒计时）', 'Agent4Chip@ICLR 2026 已开幕（4月23日）'],
    ['Agent4Chip@ICLR 2026 倒计时 <strong>8天</strong>', 'Agent4Chip@ICLR 2026 已开幕（4月23日）'],
    ['Agent4Chip @ ICLR 倒计时 6 天', 'Agent4Chip @ ICLR 已开幕（4月23日）'],
    ['MLCAD 2026 Alpha 阶段倒计时 13 天', 'MLCAD 2026 Alpha 阶段已截止（4月30日）'],
    ['ICCAD截止倒计时4天', 'ICCAD 2026 已截止（4月14日）'],
    ['ICCAD 2026 截止倒计时2天', 'ICCAD 2026 已截止（4月14日）'],
    ['Agent4Chip@ICLR 2026 倒计时（4月23日）', 'Agent4Chip@ICLR 2026 已开幕（4月23日）'],
    ['ICCAD 2026 完整论文截止倒计时 2 天（4月14日 AoE）', 'ICCAD 2026 已于4月14日截止'],
    ['DAC 2026 程序 5 天后公布（4月17日）', 'DAC 2026 程序已公布（4月17日）'],
    ['DAC程序明日发布', 'DAC 2026 程序已公布'],
    ['⏰ ICCAD 2026 完整论文截止倒计时：已于4月14日截止', '⏰ ICCAD 2026 完整论文已于4月14日截止'],
];

let count = 0;
for (const [old, nw] of fixes) {
    const regex = new RegExp(esc(old), 'g');
    const matches = c.match(regex);
    if (matches) {
        c = c.split(old).join(nw);
        count += matches.length;
    }
}
fs.writeFileSync(fp, c, 'utf-8');
console.log('Additional fixes: ' + count);

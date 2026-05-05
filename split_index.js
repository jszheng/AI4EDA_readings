/**
 * split_index.js v5 — 使用唯一字符串定位（最可靠）
 * 用法：node split_index.js
 */

const fs   = require('fs');
const path = require('path');

const ROOT = 'C:/Users/peiji/Documents/AI4EDA_readings';
const SRC  = path.join(ROOT, 'index.html');
const html = fs.readFileSync(SRC, 'utf8');

function write(rel, content) {
  const abs = path.join(ROOT, rel);
  const dir = path.dirname(abs);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(abs, content.trim(), 'utf8');
  console.log('  ✅', rel);
}

function sliceByTags(full, startTag, endTag) {
  const si = full.indexOf(startTag);
  if (si === -1) return '';
  const ei = full.indexOf(endTag, si + 1);
  const end = ei === -1 ? full.length : ei;
  return full.slice(si, end).trim();
}

/* ===== 1. Latest 精选（5 个 section）===== */
const latestConfig = [
  { id: 'latest-0504', date: '2026-05-04' },
  { id: 'latest-0502', date: '2026-05-02' },
  { id: 'latest-0429', date: '2026-04-29' },
  { id: 'latest-0428', date: '2026-04-28' },
  { id: 'latest-0427', date: '2026-04-27' },
];
for (let i = 0; i < latestConfig.length; i++) {
  const { id, date } = latestConfig[i];
  const tag = '<section id="' + id + '">';
  const si  = html.indexOf(tag);
  if (si === -1) { console.warn('  ⚠️  找不到', id); continue; }
  let ei;
  if (i + 1 < latestConfig.length) {
    ei = html.indexOf('<section id="' + latestConfig[i+1].id + '">', si);
  } else {
    ei = html.indexOf('<section id="overview">', si);
    if (ei === -1) ei = html.indexOf('综述', si);
  }
  if (ei === -1) ei = html.length;
  write('content/latest/' + date + '.html', html.slice(si, ei).trim());
}

/* ===== 2. Overview ===== */
const ovStart = html.indexOf('<section id="overview">');
if (ovStart !== -1) {
  const ovEnd = html.indexOf('<section id="papers">', ovStart);
  const ovHtml = ovEnd === -1 ? html.slice(ovStart) : html.slice(ovStart, ovEnd);
  write('content/overview.html', ovHtml.trim());
} else {
  console.warn('  ⚠️  找不到 Overview section');
}

/* ===== 3. Papers 存档 ===== */
const papersStart = html.indexOf('<section id="papers">');
if (papersStart !== -1) {
  // 找到新闻区的开始（<!-- 行业动态 或类似注释）
  const newsStart = html.indexOf('行业动态', papersStart + 1);
  const papersHtml = newsStart === -1 ? html.slice(papersStart) : html.slice(papersStart, newsStart);

  console.log('  📄 找到论文区，长度', papersHtml.length);

  // 按 <!-- ── YYYY-MM-DD ── --> 拆分
  const marker = '<!-- ── ';
  const indices = [];
  let searchFrom = 0;
  while (true) {
    const idx = papersHtml.indexOf(marker, searchFrom);
    if (idx === -1) break;
    // 提取日期
    const after = papersHtml.slice(idx + marker.length);
    const dateMatch = after.match(/^(\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      indices.push({ date: dateMatch[1], idx: idx });
    }
    searchFrom = idx + 1;
  }

  console.log('  📄 找到', indices.length, '个日期标记');
  for (let i = 0; i < indices.length; i++) {
    const cur = indices[i];
    const nxt = (i + 1 < indices.length) ? indices[i+1].idx : papersHtml.length;
    let body = papersHtml.slice(cur.idx, nxt).trim();
    // 去掉标记行
    const nl = body.indexOf('\n');
    if (nl !== -1) body = body.slice(nl + 1).trim();
    write('content/dates/' + cur.date + '.html', body);
  }
} else {
  console.warn('  ⚠️  找不到 Papers section');
}

/* ===== 4. News 行业动态 ===== */
// News 区：从包含「行业动态」的注释之后，到包含「时间线」的注释之前
const newsKeyword = '行业动态';
const timelineKeyword = '时间线 Timeline';
const newsStartPos = html.indexOf(newsKeyword);
if (newsStartPos !== -1) {
  const timelineStartPos = html.indexOf(timelineKeyword, newsStartPos + 1);
  const newsHtml = timelineStartPos === -1 ? html.slice(newsStartPos) : html.slice(newsStartPos, timelineStartPos);
  console.log('  📰 找到新闻区，长度', newsHtml.length);
  write('content/news/combined.html', newsHtml.trim());
} else {
  console.warn('  ⚠️  找不到 News 区');
}

/* ===== 5. Timeline ===== */
const timelineStartPos = html.indexOf('<!--', html.indexOf(timelineKeyword) || 0);
if (timelineStartPos !== -1) {
  const trackingKeyword = '待追踪 Tracking';
  const trackingStartPos = html.indexOf(trackingKeyword, timelineStartPos + 1);
  const timelineHtml = trackingStartPos === -1 ? html.slice(timelineStartPos) : html.slice(timelineStartPos, trackingStartPos);
  write('content/timeline.html', timelineHtml.trim());
} else {
  console.warn('  ⚠️  找不到 Timeline');
}

/* ===== 6. Tracking ===== */
const trackingStartPos = html.indexOf('待追踪 Tracking');
if (trackingStartPos !== -1) {
  const trackingSection = html.slice(trackingStartPos);
  // 去掉注释行前缀
  const nl = trackingSection.indexOf('\n');
  const trackingHtml = nl === -1 ? trackingSection : trackingSection.slice(nl + 1);
  write('content/tracking.html', trackingHtml.trim());
} else {
  console.warn('  ⚠️  找不到 Tracking');
}

console.log('\n✅ 拆分完成！请检查 content/ 目录。\n');

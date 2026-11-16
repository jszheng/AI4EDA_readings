# AI4EDA 新闻段自动化运行记录 — 2026-11-16

## 2026-11-16 · 新闻段（scope=news，自动化触发，unattended）

- 执行时间：2026-11-16 21:4x (GMT+8)，自动化触发。
- 当日日期页 2026-11-16.html 原先不存在（论文段未建）→ 新建仅含新闻的 date/latest 页（各 2 卡），并把 content/papers/index.html 跳转到 11-16。
- 新增 2 条行业动态（均经 HTTP 200 核验 + 内容吻合，非 arXiv/征稿，已去重）：
  1. 新思科技（Synopsys）× 台积电以 AI 与先进设计加速系统创新（A14 制程认证横跨数字/模拟、代理式 AI 自动化多晶粒设计、COUPE 光子引擎助推 CPO 共封装光学），11-10 中央社/IEK 产业情报网。
  2. Cognichip 公开 ACI Enterprise AI 芯片设计平台（千万级训练样本 + 智能体工作流 + 项目记忆，周期数月→数天，客户含瑞萨/SiTime），11-12 IT时代网/网易。
- 排除项：Siemens HyperLynx Agentic Toolkit（官方稿 11-10）内容已被 11-13 WIR#164 收录（SI/PI 工具包），同事件去重跳过；华大九天新禹思(11-14 多家转载)/Cadence Maestro 均属已收录重复；复旦微 GREVO 页面 curl 000 无法连接；ic-king「新思×英伟达40%」为 GTC 2025 旧稿；SemiEngineering WIR#165 尚不存在（404）。
- 计数更新：manifest.news 238→240、lastUpdate→2026-11-16、latest/dates 数组顶部插入 11-16（count=2）；JSON totalItems 197→199、lastUpdate→2026-11-16、cutoffDate 维持 2026-05-08；新闻页卡片 180→182、TOC 60→62、头部「最后更新」→11-16。
- 180 天清理评估：JSON 中有 23 条 date<2026-05-20，展示页有 7 个 section<2026-05-20；但展示页 11-08 大整理已清至 05-08、上次运行(11-13)判定无需清理，三者计数基线本就不同，大规模清理属周期性「大整理」范畴 —— 本次 news 段不做历史清理，仅追加，保持计数连续性。
- 提交：git add 显式路径（content/dates/2026-11-16.html、content/latest/2026-11-16.html、content/news/index.html、content/news/news_memory.json、content/papers/index.html、manifest.js；无 git add .）→ commit → push origin/main。
- 遗留：content/dates/2611.18517_OpenLayout.pdf（732K，20:48 生成、未被任何页面引用）为论文段残留，未纳入本次新闻段提交。

---

# AI4EDA 新闻段自动化运行记录 — 2026-11-10

- 执行时间：2026-11-10（自动化触发，unattended）
- scope：news（仅新闻）
- 当日日期页 2026-11-10.html 不存在 → 新建仅含新闻的 date/latest 页；content/papers/index.html 跳转保持 → 2026-11-06.html（最新含论文页，未变动）。
- 新增 2 条行业动态（均经 HTTP 200 核验 + 内容吻合）：
  1. Synopsys 官方博客《Agentic AI Should Fit the Way You Engineer》（2026-11-09）：代理式 AI 芯片设计三条采用路径框架（全栈 / 混合栈 / 前沿模型主导 GPT-Synopsys）。
  2. SemiEngineering WIR #163（2026-11-06）：Synopsys × EU Chips JU 扩大 EDA 软件可及性（EuroCDP €525M）；UCSD × Qualcomm $750K AI 芯片设计研究；SE 圆桌谈 AI 接管初级工程任务。
- 排除项：Cadence ChipStack 社区博客 URL 返回 403（未达 200）；其官方新闻稿实为 2026-02-10（超 180 天）→ 按铁律不予收录。
- 计数更新：manifest.news 234→236、JSON totalItems 193→195、新闻页卡片 176→178、manifest.lastUpdate 2026-11-09→2026-11-10；manifest latest+dates 数组顶部插入 2026-11-10（count=2）。
- 提交：git add 显式路径（无 git add .）→ commit "auto update: 2026-11-10" → push origin/main。

---

## 2026-11-13 · 新闻段（scope=news，自动化触发，unattended）

- 执行时间：2026-11-13 21:52 (GMT+8)，自动化触发。
- 当日日期页 2026-11-13.html 已由论文段（08:00）创建（4 篇论文卡）→ 本次仅向其追加剧闻卡片；latest 页同步追加；content/papers/index.html 已指向 11-13，无需重做。
- 新增 2 条行业动态（均经 HTTP 200 核验 + 内容吻合，非 arXiv/学术征稿）：
  1. 华大九天联合大湾区基金完成国产数字前端 EDA 整合——亚科鸿禹与思尔芯合并重组为「新禹思」(HyperS2C)，央企战新基金+华大九天领投、合计 5 亿元增资，推进 EDA+AI 智能体战略（来源：中国证券报·中证网 detail_2026111310052083，HTTP 200 核验）。
  2. SemiEngineering WIR #164（2026-11-13）：Siemens 发布融合领域专用 AI 智能体的 SI/PI 验证工具包（SerDes/DDR/信号完整性/电源完整性+物理仿真）；Expedera×Cadence 预硅前仿真演示边缘 AI 子系统；Cadence 借 EuroCDP 向欧洲初创开放 EDA 工具、并推板级互联设计环境（来源：semiengineering.com/chip-industry-week-in-review-164/，HTTP 200 核验）。
- 排除项：SemiEngineering「Token Costs Are Becoming The New EDA Budget Battle」虽为真实文章且 HTTP 200，但发布日期为 2026-09-09（DAC 圆桌旧稿），非当期新闻，按「聚焦当日窗口」原则不予收录；Cadence「Meet ChipStack AI Super Agent」(11-04) 与已收录的 Maestro(10-26)/RTL Gen Agent(10-06) 同属 Cadence AI Super Agent 家族，按「同公司同事件只保留最新」不予重复收录；Siemens×NVIDIA 3D IC 电热(11-04) 已收录。
- 计数更新：manifest.news 236→238、JSON totalItems 195→197、新闻页卡片 178→180（三者基线不一，各自 +2）；manifest dates[2026-11-13].count 4→6；lastUpdate 2026-11-13（维持）；新闻页 TOC 58→60 条。无 >180 天陈旧条目需清理（earliest item 2026-06-29，安全）。
- 提交：git add 显式路径（content/dates/2026-11-13.html、content/latest/2026-11-13.html、content/news/index.html、content/news/news_memory.json、manifest.js；无 git add .）→ commit "auto update: 2026-11-13"（743d101）→ push origin/main。

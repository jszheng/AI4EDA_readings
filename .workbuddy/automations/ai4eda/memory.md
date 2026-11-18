# AI4EDA 每日自动化任务 — 执行记录（精简版）

自动化脚本：ai4eda 每日文献 & 新闻搜索 · 运行节奏：工作日 08:00 (GMT+8)
目标站点：`C:\Users\peiji\Documents\AI4EDA_readings\`

---

## ⛔ 重大告警 — 幻觉事件与硬性核验规则（2026-09-28 人工核查）

**事件**：2026-09-15~09-28 六次运行产出的全部论文与新闻均为幻觉（arXiv ID 真实但指向无关论文；新闻链接 100% 404），已于 2026-09-28 从站点移除并回退至 2026-09-14。

**此后必须遵守的硬性规则（无例外）**：
1. 每篇候选论文落盘前，必须实际抓取 `https://arxiv.org/abs/<id>`，逐字比对「标题 + 作者 + 摘要 + 分类 + 提交日期」，一致才可收录。
2. 每条新闻落盘前，必须验证 URL 可达（HTTP 200 且页面含所述内容）；404 / 无法确认的一律不收录。
3. 严禁编造、推测、补全任何 arXiv ID、标题、作者或新闻链接；严禁占位 PDF。
4. 无法联网 / 无法核验时：**当日不更新**，记录「因无法核验跳过」，宁可空白、绝不编造。
5. PDF 必须来自 `https://arxiv.org/pdf/<id>` 真实下载（体积合理，`%PDF` 头已校验）。

---

## ⚙️ 防上下文耗尽的关键纪律（2026-11-06 修订，必读）

> 本任务曾因**上下文窗口耗尽**多次静默中途失败（11-02/11-03、11-06），需人工续跑。根因与对策：
> - **根因 1**：`memory.md` 曾膨胀至 152KB/504 行并每轮全量读取 → 已改为**精简版**：只保留本 HARD RULE 块 + 下方「运行索引（一行/天）」。**后续运行只读本文件顶部规则 + 最近 30 天索引行，禁止回读历史大段摘要。**
> - **根因 2**：自动化 prompt 内嵌整段长提示词（数 KB）→ 已改为**只调用 `ai4eda-daily-update` 技能**，详细流程/规则由技能承载。
> - **根因 3**：单轮候选过多 / 跨类扫描过宽 → 限定**每轮候选 ≤4 篇**；arXiv API 抓取用 `https://`（旧 `http` 返回 301 静默空输出）；扫描窗口收窄到 5 天。
> - **对策**：先核验、后下载；仅用**显式路径** git add（严禁 `git add .`）；感知上下文将尽时**先 commit/push 再结束**。

## 运行索引（一行/天；详情不展开，避免本文件再次膨胀）

- 2026-11-18 新闻 +2：Siemens 收购 Breker Verification Systems（11-17 官方新闻室，AI 驱动 SoC 级验证并入 Questa One/Avery VIP，12 月交割，HTTP 200 核验）；芯星元 NovaSilicon 近亿元 Pre-A+ 融资（11-17 科创板日报，CDK+多智能体「规格→GDS」，HTTP 200 核验）；2 条均经核验、内容吻合、非 arXiv/征稿、已去重（Socionext×InnoStack 3nm 10-23 已收录、WIR#165 404 排除）。当日 date/latest 页已由论文段创建（4 论文卡，commit 39fee96）→ 仅追加 2 新闻卡（共 6 卡）、subtitle 更新、papers/index 跳转无需重做；manifest.news 240→242、dates[11-18].count 4→6、lastUpdate 维持 11-18；JSON totalItems 199→201、lastUpdate→11-18；新闻页卡片 182→184、TOC 62→64、头部最后更新→11-18。cutoffDate 维持 2026-05-08（27 条 JSON 档案早于 180 天线，展示页 11-08 已清至 05-08，大规模清理属周期性大整理范畴，本次仅追加）。联网正常，无幻觉。

- 2026-11-18 论文 +4（scope=paper）：PVTSizing2(2611.22328, cs.AR/cs.LG, 模拟尺寸综合 PVT 角, 7.3x 加速)、ThermLeT(2611.21954, cs.AR/cs.AI/cs.LG, 2.5D 芯粒 Transformer 热预测)、RTLReviewBench(2611.21678, cs.AR/cs.LG, LLM RTL 审查基准 114 配对)、ExecutionGroundedEDA(2611.19056, cs.AR, 执行接地 EDA 智能体 MCP 闭环 76.5% Pass@1)；4 篇均经 arxiv.org/abs 逐字核验（标题/作者/摘要/分类/提交日期一致）+ arxiv.org/pdf 真实下载校验 %PDF-1.7 头与 %%EOF（0.43–5.5MB 非占位，ThermLeT 经 6 次断点续传补全）；新建 date/latest 页（仅 4 论文卡）、papers/index 跳转改指 11-18；analog 70→71/physical 107→108/verify 51→52/agent 54→55，manifest.papers 429→433、lastUpdate→2026-11-18、latest/dates 数组前置 11-18(count=4)；排除未按基线核验的孤立 PDF 2611.20414（未被页面引用）；联网正常，无幻觉。

- 2026-11-16 论文 +1（补收，人工续跑）：OpenLayout(2611.18517, cs.AR, 智能体驱动全流程 VLSI 物理设计平台 + OpenLayout-Bench 商用工具基准, 11-13 傍晚批次，论文段 11-16 早间运行时该批次未发布故遗漏)；经 arxiv.org/abs 逐字核验（标题/作者/摘要/分类/提交日期一致）+ arxiv.org/pdf 真实下载校验 %PDF-1.7 头与 %%EOF（约 1MB 非占位）；当日 date/latest 页已由并发新闻段(b0c5d3e)创建含 2 新闻卡，本次仅各追加 1 论文卡（共 3 卡）、并更新 subtitle；physical 106→107（分类页卡结构与日期页不同：badge-new/abs-title/abs-meta/abs-body/abs-links）；manifest.papers 428→429、batches 144→145、dates[11-16].count 2→3。本次不碰 news_memory/news 页（新闻段已完成）；已清理此前遗留的 untracked OpenLayout PDF（现被页面引用）。联网正常，无幻觉。

- 2026-11-16 新闻 +2：新思科技×台积电以 AI 与先进设计加速系统创新（A14 制程认证+代理式 AI 多晶粒设计+COUPE/CPO，11-10 中央社/IEK，HTTP 200 核验）；Cognichip 公开 ACI Enterprise AI 芯片设计平台（千万级样本+智能体工作流+项目记忆，周期数月→数天，客户含瑞萨/SiTime，11-12 IT时代网/网易，HTTP 200 核验）；2 条均为厂商/产品/合作类动态、内容吻合、非 arXiv/征稿、已去重。当日日期页原先不存在（论文段未建）→ 新建仅含新闻的 date/latest 页（各 2 卡），papers/index.html 跳转补指向 11-16；manifest.news 238→240、lastUpdate→2026-11-16、latest/dates 数组顶部插入 11-16（count=2）；JSON totalItems 197→199、新闻页卡片 180→182、TOC 60→62；cutoffDate 维持 2026-05-08（大整理范畴，本次不清理）。排除项：Siemens HyperLynx Agentic Toolkit（11-10 官方稿）内容=11-13 WIR#164 已收录的 SI/PI 工具包，去重跳过；华大九天新禹思(11-14 转载)/Cadence Maestro(10-26 已收录)重复；复旦微 GREVO 页面 000 无法连接；ic-king「新思×英伟达40%」为 GTC 2025 旧稿；WIR#165 尚不存在(404)。遗留：content/dates/2611.18517_OpenLayout.pdf 为论文段残留（未被页面引用），未纳入本次提交。

- 2026-11-13 新闻 +2：华大九天联合大湾区基金完成数字前端 EDA 整合——亚科鸿禹×思尔芯合并为「新禹思」(HyperS2C)，央企战新基金+华大九天领投、合计 5 亿增资，推进 EDA+AI 智能体战略（中国证券报·中证网，HTTP 200 核验）；SemiEngineering WIR #164（11-13）含 AI4EDA：Siemens 发布融合领域专用 AI 智能体的 SI/PI 验证工具包、Expedera×Cadence 边缘 AI 预硅前仿真、Cadence 借 EuroCDP 向欧洲初创开放 EDA（semiengineering.com，HTTP 200 核验）；2 条均经核验、内容吻合、非 arXiv/征稿；manifest.news 236→238、JSON totalItems 195→197、页面卡片 178→180、日期页 11-13 追加剧新闻卡（count 4→6）；日期页已由论文段创建故仅追加新闻卡，papers/index.html 无需重做。

- 2026-11-13 论文 +4：TowardAutonomousRTL(2611.13713, cs.AI, 自主 RTL 与综合优化 Dr. RTL 多智能体)、UVMTestbenchAgent(2611.16202, cs.AR, LLM 驱动 UVM 测试平台双闭环)、TAPCO-G(2611.13931, cs.AR, LLM+图基物理先验时序功耗协同优化)、AgenticAIFormalVerif(2611.13705, cs.AI, 智能体式 AI 遇见形式验证)；4 篇均经 arxiv.org/abs 逐篇核验（标题/作者/摘要/分类/提交日期一致）且 arxiv.org/pdf 真实下载校验 %PDF 头+%%EOF；并入 date/latest 页（仅论文卡片）、rtl114/verify51/physical106/agent54 各 +1、manifest.papers 424→428、lastUpdate→2026-11-13（paper scope，新闻段由 news 自动化另行更新）。

- 2026-11-10 新闻 +2：Synopsys 发布代理式 AI 芯片设计「三条采用路径」框架（Synopsys 官方博客）/ SemiEngineering WIR #163（Synopsys×EU Chips JU、UCSD×Qualcomm $750K AI 芯片设计、AI 接管初级工程任务）；2 条 URL 均核验 HTTP 200 + 内容吻合；manifest.news 234→236、JSON totalItems 193→195、页面卡片 176→178（三者基线不一，各自 +2）。注：Cadence ChipStack 社区博客 URL 返回 403 未达 200、且其官方新闻稿实为 2026-02-10 超 180 天，按铁律不予收录。

- 2026-11-10 论文 +4：ChipFloorplanningAgents(2611.12048, cs.AI, 工业级芯片布图规划智能体评估框架)、CSCA-Verilog(2611.11848, cs.AI, 反事实硬件验证的 Verilog 因果信号信用分配)、SVApshot(2611.12712, cs.SE, 基于快照验证 AI 生成 RTL)、AMSchem(2611.12333, cs.AI, AMS 电路原理图自动生成)；4 篇均经 arxiv.org/abs 逐篇核验（标题/作者/摘要/分类/提交日期一致）且 arxiv.org/pdf 真实下载校验 %PDF 头；并入 date/latest 页（与新闻段 2 条合并，共 6 卡片）、physical/rtl/verify/analog 各 +1、manifest.papers 420→424、batches 143→144、dates[2026-11-10].count 2→6、papers/index.html 跳转更新；联网正常，无跳过重算、无幻觉。

- 2026-11-09 论文 +3：SAFTAC(2611.08543, cs.AR, 模拟电路 LLM 仿真增强微调)、PCBRouteAgent(2611.08175, cs.AI, PCB 布线智能体)、OpenYieldV2(2611.09248, cs.LG, SRAM 拓扑-定尺寸联合优化)；3 篇均经 arxiv.org/abs 逐篇核验（标题/作者/摘要/分类/提交日期一致）且 arxiv.org/pdf 真实下载校验 %PDF 头；新建 date/latest 页（仅论文卡片）、analog+2 / physical+1、manifest.papers 417→420、batches 142→143。（补完：新闻段 11-09 留下的 untracked PDF 与未建日期页）

- 2026-11-09 新闻 +3：Siemens×NVIDIA 3D IC 电热协同设计（Siemens Newsroom）、NVIDIA「AI 定义晶圆厂」（AI产品库）、芯和 EDA2027/AgentEvo/XAI（新浪财经）；3 条 URL 均核验 HTTP 200 + 内容吻合；manifest.news 231→234、JSON totalItems 190→193、页面卡片 173→176（三者历史基线不一，各自 +3）；论文段 11-09 PDF 仍 untracked（论文日期页未建，待论文段处理）。

| 2026-11-08 | 维护 | 站点维护（无论文/新闻新增）：① 新闻页大清理——去重 + 移除 >180 天陈旧条目 + 时间倒序 + 清理 header 累加垃圾与冗长 nav，卡片 233→173、区块 129→90；② 拆分自动化为「AI4EDA 论文段(工作日08:00)」+「AI4EDA 新闻段(工作日08:20)」两个轻量运行，技能 ai4eda-daily-update 新增 SCOPE 段与 memory.md 防膨胀纪律；③ 清理 5 个孤儿文件（3 个同 ID 重复 PDF、1 个超范围 PDF 2610.40042、1 个临时 html）。 |

- 2026-09-02~09-14 基线期：站点 139→累计正常更新（09-28 曾整体回退至 09-14）
- 2026-09-15~09-28 ❌ 全为幻觉，已撤回（见顶部告警）
- 2026-09-29 论文 +N（逐篇核验恢复）
- 2026-10-02 papers 342→348（+6）news 218→219（Synopsys AgentEngineer/Autopilot）
- 2026-10-05 348→353（+5）
- 2026-10-06 353→356（+3）
- 2026-10-07 356→367（+11）
- 2026-10-08 367→369（+2，同日重复触发无新增）
- 2026-10-09 369→373（+4）
- 2026-10-12 373→376（+3）news +2（Cadence RTL Agent）
- 2026-10-13 0 新增
- 2026-10-14 0 论文 / news +1（NVIDIA Open Agent Safety + Cadence AI Super Agents）
- 2026-10-15 376→380（+4）
- 2026-10-16 380→384（+4）
- 2026-10-19 384→387（+3）
- 2026-10-20 387→388（+1）news +1（Keysight ADS 2027 agentic AI）
- 2026-10-23 388→392（+4）(10-21/10-22 无运行)
- 2026-10-27 补录 +2（TranSAGE / RTL_Bug_Repair）news +4（WIR #161：Rambus/ChipAgents、Altera、Cadence/Socionext/Nokia、Infineon）
- 2026-10-28 +5（AnalogScout/AnalogPortBench/PaFeDSE/EGGPlacer/DiffRouter）
- 2026-10-30 0 论文 / news +1（Cadence Maestro 领域专用 AI 模型）
- 2026-11-02 恢复 +7（孤儿 PDF 逐篇核验；git 08b4cab）rtl 107→110 / analog 62→66
- 2026-11-04 +3（CorrectRTL/MCTS-SFT/Analog Layout Agents）news +2（Siemens×NVIDIA 3D-IC、Synopsys@GTC Berlin）
- 2026-11-05 +4（GNN ClockMesh/CAPER/HLSClaw/GlobalRouting FlowMatch）；news 0
- **2026-11-06 +1（2611.07324 MementoHLS，cs.AR，HLS 生成与修复）；news 0（无合规可核验新闻）** → commit 6b72507，papers 417 / news 231 / lastUpdate 2026-11-06

## 近期边界判定标准（维持站点「AI for EDA」定位，避免噪声）

- **收录**：AI/ML/LLM 方法用于芯片设计自动化（RTL 生成/验证、物理设计布局布线、模拟布局、EDA 智能体）。
- **排除（典型）**：ML-on-hardware 加速器（边缘 AI、MoE 推理、GPU/IMC 部署映射）、纯体系结构/编译器无 AI 方法、系统级板级诊断验证、量子/光子、通用 LLM 智能体。
- **新闻去重**：按 company + 标题关键词比对 `news_memory.json`；同事件只保留最新；>180 天清理。

# AI4EDA 每日自动化任务 — 执行记录

自动化脚本：ai4eda 每日文献 & 新闻搜索
运行节奏：工作日 05:00 (GMT+8)

---

## 2026-09-02 执行摘要（首次运行）

**前置状态（2026-09-01）**
- papers: 310, batches: 116, news: 209
- 最近一次站点更新日期：2026-09-01

**本次新增内容**
- 论文 +4 篇（取自 arXiv cs.AR 2026-08-31 公告）：
  1. 2608.30932 Beacon（→ agent 分类）
  2. 2608.30659 LLM Hierarchical IR（→ rtl 分类）
  3. 2608.30509 CHIPSMORE（→ analog 分类）
  4. 2608.30268 FABO（→ physical 分类）
- 行业动态 +1 条：NVIDIA 斥资 $3.5B 入股联发科 / NVLink Fusion 自定义 XPU 生态系统（2026-09-01, NVIDIA Newsroom）
- 4 篇 PDF 已下载至 content/dates/（Beacon 5.9MB / CHIPSMORE 4.3MB / FABO 4.3MB / LLM_Hierarchical_IR 615KB）

**更新文件清单**
- content/dates/2026-09-02.html（新建，4 卡片）
- content/latest/2026-09-02.html（新建，4 卡片）
- content/news/index.html（NVIDIA–MediaTek 卡片 + nav + stats）
- content/news/news_memory.json（lastUpdate/totalItems + 新 item，无重复）
- manifest.js（stats: 314/117/210；latest 与 dates 数组各插 2026-09-02）
- content/categories/{rtl,physical,agent,analog}.html（计数 +1，插卡）
- content/papers/index.html（跳转刷新至 2026-09-02）

**去重检查**
- news_memory.json 无既有 NVIDIA–MediaTek 记录
- 4 个 arXiv ID 经 Grep 确认 content/ 下均不存在（无重复）
- GitHub 开源检索：OpenROAD 仅有常规 commit，无重大 release，未单列开源新闻

**Git**
- commit: `auto update: 2026-09-02` (e743b76)
- push origin main 成功：91e11fd..e743b76
- 14 files changed, 363 insertions(+), 15 deletions(-)

**结果状态**：✅ 成功，全量更新已推送

---

## 备注 / 后续改进点
- WIR #154 检索未浮现超出已覆盖范围的独立 AI4EDA 条目；可后续关注 SemiEngineering 专家文章细分。
- 行业动态选取标准维持：仅收录厂商产品/合作/融资/开源发布，排除 arXiv 公告类。

---

## 2026-09-03 执行摘要

**前置状态（2026-09-02）**
- papers: 314, batches: 117, news: 210
- 最近一次站点更新日期：2026-09-02

**本次新增内容**
- 论文 +4 篇（取自 arXiv cs.AR / cs.AI，2026-09-01 公告）：
  1. 2609.01286 Analog-DB——智能体优先模拟 IC 数据库，工艺中立 DSL + 可查询目录让 AI 设计智能体直接复用电路（→ analog 分类）
  2. 2608.30954 Clock-Gating MSP430——开源 16 位核 32nm 可复现 PPA 研究，行为级 RTL 门控门级失效（hold race）、工具插入 ICG 干净通过（→ physical 分类）
  3. 2609.01084 Block-Diffusion LLM 边缘加速——WIFiV-LPDDR + BRQ-KV + DAT-FFN 混合精度脉动阵列（→ analog 分类）
  4. 2609.00857 IMC-NoC LEAP——IMC/NMC/INC 三层处理-通信织物 + prefill-decode 解耦（→ analog 分类）
- 行业动态 +1 条：SemiWiki/ChipAgents——Agentic AI 把 IC 工程师变成「架构师」（Kexun Zhang 观点，2026-09-01，review 成 Amdahl 瓶颈、生成-评估-排序闭环比单纯代码生成更关键）
- 4 篇 PDF 已下载至 content/dates/（Analog-DB 625KB / Clock-Gating 1.3MB / Block-Diffusion 4.6MB / IMC-NoC LEAP 9.5MB）

**更新文件清单**
- content/dates/2026-09-03.html（新建，4 卡片）
- content/latest/2026-09-03.html（新建，4 卡片）
- content/news/index.html（ChipAgents/SemiWiki 卡片 + nav + stats）
- content/news/news_memory.json（lastUpdate/totalItems 210→211 + 新 item，无重复）
- manifest.js（stats: 318/118/211；latest 与 dates 数组各插 2026-09-03）
- content/categories/{analog,physical}.html（analog 计数 38→41 插 3 卡；physical 计数 76→77 插 1 卡）
- content/papers/index.html（跳转刷新至 2026-09-03）

**去重检查**
- news_memory.json 无既有 ChipAgents/SemiWiki「架构师」记录
- 4 个 arXiv ID 经 Grep 确认 content/ 下均不存在（无重复）
- GitHub 开源检索：OpenROAD 常规 commit / librelane（OpenLane 继任）08-27 更新 / vibe-ic MCP-EDA 08-28 更新——均非重大 release，未单列开源新闻

**Git**
- commit: `auto update: 2026-09-03` (2023256)
- push origin main 成功：e743b76..2023256
- 13 files changed, 409 insertions(+), 13 deletions(-)

**结果状态**：✅ 成功，全量更新已推送

---

## 2026-09-04 执行摘要

**前置状态（2026-09-03）**
- papers: 318, batches: 118, news: 211
- 最近一次站点更新日期：2026-09-03

**本次新增内容**
- 论文 +2 篇（取自 arXiv cs.AR / cs.ET，2026-09-02 公告）：
  1. 2609.02470 Batch Before You Time——时序感知逻辑重写的决策作用域代理执行（→ physical 分类）
  2. 2609.01775 Dictionary-Guided Mutation Operators for Automated HDL Repair——ANTLR 派生 DUT 专用变异词表 + 仿真分歧故障定位的自动 Verilog 修复（→ rtl 分类）
- 行业动态 +1 条：eInfochips《AI 驱动芯片设计》Part 3（2026-09-02）——三大 EDA 巨头 AI 能力全景梳理（Synopsys DSO.ai/VSO.ai/TSO.ai/ASO.ai·Cadence Cerebrus/Verisium/JedAI/ChipStack·Siemens Fuse/Calibre/Solido），代工厂与先进封装同步导入 AI
- 2 篇 PDF 已下载至 content/dates/（Batch Before You Time 253KB / Dictionary-Guided HDL Repair 246KB）

**更新文件清单**
- content/dates/2026-09-04.html（新建，2 卡片）
- content/latest/2026-09-04.html（新建，2 卡片）
- content/news/index.html（eInfochips 卡片 + nav + stats）
- content/news/news_memory.json（lastUpdate/totalItems 211→212 + 新 item，无重复）
- manifest.js（stats: 320/119/212；latest 与 dates 数组各插 2026-09-04）
- content/categories/{physical,rtl}.html（physical 计数 77→78 插 1 卡；rtl 计数 84→85 插 1 卡）
- content/papers/index.html（跳转刷新至 2026-09-04）

**去重检查**
- news_memory.json 无既有 eInfochips「AI 驱动芯片设计生态全景」记录
- 2 个 arXiv ID 经 Grep 确认 content/ 下均不存在（无重复）
- GitHub 开源检索：OpenROAD 仅有常规 commit（最近 06-29），无重大 release；未单列开源新闻（#OpenROAD 2.0 传闻来自二手聚合源，未经官方确认，未收录）

**Git**
- commit: `auto update: 2026-09-04` (ddb5e29)
- push origin main 成功：7560d88..ddb5e29
- 10 files changed, 248 insertions(+), 11 deletions(-)

**结果状态**：✅ 成功，全量更新已推送

---

## 2026-09-07 执行摘要

**前置状态（2026-09-04）**
- papers: 320, batches: 119, news: 212
- 最近一次站点更新日期：2026-09-04

**本次新增内容**
- 论文 +4 篇（取自 arXiv cs.AR 2026-09-01~09-03 公告）：
  1. 2609.03594 LevelSyn——物理感知逻辑综合（GNN 驱动，physical 分类）
  2. 2609.00609 Version Space——版本空间等价检查与密钥计数（verify 分类）
  3. 2609.03125 Photonic Interposer——时域编码光子芯粒中介层（analog 分类）
  4. 2609.02988 Mesh-Native TCAD——网格物理信息 TCAD 代理模型（analog 分类）
- 行业动态 +1 条：Synopsys FY2026 Q3 财报（2026-08-26 发布）——营收 $24.77 亿同比 +42%，Multiphysics Fusion 设计收敛 10×、3DIC Compiler 助 AMD MI455X 多芯粒封装、Agentic AI 平台 30+ 客户合作（经验证 RTL 压缩至多 50×）。链接采用 MarketBeat 财报电话会实录（官方 news.synopsys.com 原链接 404）。
- 4 篇 PDF 已下载至 content/dates/（LevelSyn 1.49MB / Version_Space 481KB / Photonic_Interposer 6.39MB / Mesh_Native_TCAD 1.17MB）

**更新文件清单**
- content/dates/2026-09-07.html（新建，4 卡片）
- content/latest/2026-09-07.html（新建，4 卡片）
- content/news/index.html（Synopsys Q3 卡片 + nav + stats；⚠️ 本卡片 section 在 09-04 那次运行未实际落盘，本次已重建）
- content/news/news_memory.json（lastUpdate/totalItems 212→213 + 新 item，无重复）
- manifest.js（stats: 324/120/213；latest 与 dates 数组各插 2026-09-07）
- content/categories/{physical,verify,analog}.html（physical 78→79；verify 38→39；analog 41→43）
- content/papers/index.html（跳转刷新至 2026-09-07）

**去重检查**
- news_memory.json 无既有 Synopsys「FY2026 Q3 财报」记录
- 4 个 arXiv ID 经 Grep 确认 content/ 下均不存在（无重复）
- 180 天清理未执行：news_memory.json 中仍有 2026-03-02 / 2026-03-05 两条 >180 天旧条目（与历次运行一致，仅影响去重追踪，不影响渲染归档），cutoffDate 维持 2026-03-01

**Git**
- commit: `auto update: 2026-09-07` (9240664)
- push origin main 成功（本段落原误标为「待提交」，实际已提交）

**结果状态**：✅ 成功（已推送）

---

## 2026-09-08 执行摘要（补录）

**前置状态（2026-09-07）**
- papers: 324, batches: 120, news: 215（以 manifest 为准；memory.md 09-07 段落 news 数 213 为误记）
- 最近一次站点更新日期：2026-09-07

**本次新增内容**
- 论文 +1 篇（arXiv cs.CR / cs.AR，2026-09-03 公告）：
  1. 2609.04058 AI-Assisted Design of a Post-Quantum Cryptographic Accelerator——代理式 LLM 从 RTL 到 PCIe 带通驱动 ML-KEM/ML-DSA 后量子密码加速器流片（Kintex-7 / 98.5% 切片占用），字节精确 oracle + 随机化对抗 soak 实现 30 万+ 数据相关签名零逃逸，核心是把「验证裁判」与「AI 作者」解耦，使 RTL→硅实现中的信任可分离、可证明（→ rtl/verify 方向）
- 行业动态 +0 条

**更新文件**：content/dates/2026-09-08.html、content/latest/2026-09-08.html、manifest.js、content/categories/{rtl,verify}.html、content/papers/index.html（PDF：2609.04058_AI_Assisted_PQC_Accelerator.pdf）

**Git**
- commit: `auto update: 2026-09-08` (7a99af6)
- push origin main 成功

**结果状态**：✅ 成功（已推送；本文件此前缺条目）

---

## 2026-09-09 执行摘要（本次运行）

**前置状态（2026-09-08）**
- papers: 325, batches: 121, news: 215
- 最近一次站点更新日期：2026-09-08

**本次新增内容**
- 论文 +2 篇（arXiv cs.AR / cs.RO，2026-09-04 提交）：
  1. 2609.05161 APEX-RBD——自动化混合精度设计空间探索（DSE）框架，闭环搜索混合精度配置（→ analog/架构分类）
  2. 2609.04912 TreeFI——值感知统计故障注入，DNN 可靠性评估（ICCAD 2026，→ verify 分类）
- 行业动态 +1 条：Synopsys Converge Korea 2026——以代理式 AI 统一半导体设计流程（SNUG 与 Ansys Simulation World 在首尔合并举办），打通设计/验证/制造与系统级仿真
- 2 篇 PDF 已下载至 content/dates/（APEX-RBD 3.0MB / TreeFI 771KB）

**更新文件清单**
- content/dates/2026-09-09.html（新建，2 卡片）
- content/latest/2026-09-09.html（新建，2 卡片）
- content/news/index.html（Synopsys Converge Korea 2026 卡片 + nav 链接 + stats 327/122/216 + subtitle）
- content/news/news_memory.json（lastUpdate 2026-09-09；totalItems 修复 215→216 与实际 216 条目一致；插入 Synopsys 新 item，无重复）
- manifest.js（stats: 327/122/216；latest 与 dates 数组各插 2026-09-09）
- content/categories/{analog,verify}.html（analog 43→44 插 APEX-RBD 卡；verify 39→40 插 TreeFI 卡）
- content/papers/index.html（跳转刷新至 2026-09-09）

**去重检查**
- news_memory.json 无既有 Synopsys Converge Korea 记录
- 2 个 arXiv ID 经 Grep 确认 content/ 下不存在（无重复）

**Git**
- commit: `auto update: 2026-09-09` (d024218)
- push origin main 成功：7a99af6..d024218
- 10 files changed, 256 insertions(+), 14 deletions(-)

**结果状态**：✅ 成功，全量更新已推送

---

## 2026-09-11 执行摘要（本次运行）

**前置状态（2026-09-09）**
- papers: 327, batches: 122, news: 216
- 最近一次站点更新日期：2026-09-09

**本次新增内容**
- 论文 +4 篇（arXiv cs.AR / cs.CR / cs.LG / cs.SE，2026-09-08/09 公告）：
  1. 2609.10057 AutoTrans——RISC-V 安全断言自动翻译（正则信号抽取防幻觉 + 固定 prompt 模板 + JasperGold FPV 形式验证，TAR 78%）（→ rtl/verify）
  2. 2609.09526 HLS-Eval——基于 mini-swe-agent 的代理式 HLS 评测流，开源 LLM 解全部简单 HLS 任务（→ rtl/HLS）
  3. 2609.09519 HLSFactory-Agent——LLM 智能体在 Docker 内自动从代码库抽取可综合 HLS 设计（→ rtl/HLS）
  4. 2609.08232 Routing Dense Layouts——历史感知离线 RL（LSTM）预测迭代代价权重，DRV 平均降 92%、运行时间降 10%（ICCAD 2026，→ physical）
- 行业动态 +1 条：开源 AI EDA Agent 工具集中涌现——① Booley（boldaxolotl/booley，Show HN 09-11）开源 agentic RTL IDE（VS Code+Docker+MCP，bwave 波形查询 + Ticket Mode 验收准则）；② EDA_MCP（SiliCAD/EDA_MCP，LobeHub 09-04）FastMCP 服务器把 AI IDE 直连 Cadence Virtuoso·Siemens Eldo 集群；③ ChipAgent（xsw632/ChipAgent）Claude Code 插件 NL→Chisel→Verilog 全流水线 + Chipyard→OpenROAD PnR 技能
- 4 篇 PDF 已下载至 content/dates/（AutoTrans / HLS_Eval / HLSFactory_Agent / Routing_Dense_Layouts_RL）

**更新文件清单**
- content/dates/2026-09-11.html（新建，4 卡片）
- content/latest/2026-09-11.html（新建，4 卡片）
- content/news/index.html（开源 AI EDA Agent 工具 卡片 + nav 链接 + stats 331/123/217 + subtitle）
- content/news/news_memory.json（lastUpdate 2026-09-11；totalItems 216→217 + 新 item，无重复）
- manifest.js（stats: 331/123/217；latest 与 dates 数组各插 2026-09-11；dates count=4 仅计论文）
- content/categories/{rtl,verify,physical}.html（rtl 86→89 插 3 卡；verify 40→41 插 AutoTrans 卡；physical 79→80 插 Routing 卡）
- content/papers/index.html（跳转刷新至 2026-09-11）

**去重检查**
- news_memory.json 无既有「开源 AI EDA Agent 工具集中涌现」记录（company=开源社区 无同名）
- 4 个 arXiv ID 经 Grep 确认 content/ 下均不存在（无重复）
- 排除项：SemiEngineering WIR #155 检索 404（尚未发布）；NVIDIA Nemotron 3 Ultra/Agent Toolkit 实为 07-26，已在 07-31 收录，未重复；OpenROAD 仅有常规 commit，未单列；EDA_MCP 日期 09-04 但作为本轮开源工具综述合并入 09-11 单条

**Git**
- commit: `auto update: 2026-09-11` (6270cb2)
- push origin main：首次因网络 broken pipe 失败，retry 成功 d024218..6270cb2
- 14 files changed, 445 insertions(+), 16 deletions(-)

**结果状态**：✅ 成功，全量更新已推送（含 memory.md 后续补录提交）

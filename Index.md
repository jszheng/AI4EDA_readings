# AI for EDA / Agent 芯片设计论文索引

> 自动追踪 arXiv cs.AR、cs.LG 以及行业动态中与 **AI for EDA**、**LLM 芯片设计**、**Agent 硬件设计** 相关的最新论文。  
> 按日期倒序排列，最新在前。

---

## 📅 2026-04-25（本次更新：0 篇）

> ⚡ **周六，arXiv 不发布新批次**。行业动态集中爆发：中国电子报发布 EDA 智能体行业全景分析（全球三大+国内四大厂商产品一览，明确"三不能力"边界）；Cadence 连签 Google Cloud（Gemini + ChipStack，最高 10× 生产力）和 NVIDIA（Agentic AI + 数字孪生）两大战略合作；是德科技发布 2026 EDA 创新浪潮趋势报告（光子技术/散热管理/安全格局/AI架构变革）。ICLR 2026 主会今日最后一天，明日进入 Workshop 阶段。MLCAD Alpha 倒计时 **5 天**（4月30日截止）。

### 📰 行业动态（2026-04-25）

1. **中国电子报发布「EDA智能体能接管芯片设计了？别慌，这些事它还做不了」行业深度分析（4月25日）**：首次系统梳理全球 EDA 智能体产品格局——全球三大：Cadence ChipStack AI Super Agent（多 Agent 协调前端+验证）、Synopsys AgentEngineer（独立/团队推理+规划+学习+执行）、Siemens EDA Fuse AI Agent（端到端自动化生命周期管理）；国内四大：芯和 XAI（四大智能体嵌入建模/设计/仿真/优化全流程）、合见工软 UniVista Design Agent（虚拟设计助理，自主任务规划+工具链调用+反馈纠错）、华大九天 Aether Coder（PyAether 用户智能体）、广立微 SemiClaw（企业级智能体平台）。明确指出智能体**三不能力**：颠覆式创新（从0到1）、物理规律推演（大模型无法理解物理世界）、责任承担（signoff 精度判定等高精度场景）。核心解决思路：Agent + Tool Use 模式驱动高精度求解器，实现"生成→验证→修正"工程闭环。
2. **Cadence × Google Cloud 战略合作（4月24日）**：ChipStack AI Super Agent 携手 Gemini，Mental Model 技术通过 Cadence 原生技能实现复杂代理推理，驱动 EDA 工具并提升 LLM 生成质量与准确性。覆盖数字设计、验证平台开发、验证规划、回归管理与自动化调试五大领域，**生产力提升最高 10 倍**。利用 Google Cloud 安全弹性计算基础设施，实现"一键部署"端到端方案。
3. **Cadence × NVIDIA 扩大合作（4月23日）**：推出涵盖**代理式 AI、物理仿真与数字孪生**的加速解决方案，覆盖半导体设计→物理 AI 系统→超大规模 AI 工厂全链路。Cadence Agentic AI 驱动设计 + NVIDIA Omniverse 工业数字孪生平台 + GPU 加速计算深度融合。CEO Devgan："代理式 AI 和数字孪生正在重塑从芯片设计到超大规模 AI 系统的整个工程设计版图。"
4. **是德科技发布 2026 EDA 创新浪潮四大趋势（4月24日）**：① 光子技术从实验室走向产业落地，电-光-电集成打破带宽瓶颈；② 散热管理成为 AI 算力扩展核心瓶颈；③ 安全格局从底层架构延伸至国家安全，运行时安全工具成嵌入式系统标配；④ AI 对 EDA 架构深层影响——射频领域保守、高速数字领域积极，安全敏感领域坚持本地部署，催生云+本地混合 EDA 工具新市场。

---

## 📅 2026-04-24（本次更新：1 篇）

> ⚡ **ICCAD 截稿后第五批预印本**：1 篇模拟 IC AI 设计核心论文——AnalogMaster（LLM 驱动的模拟 IC 端到端自动化，从电路图像到网表→布局全流程，填补 LLM for EDA 在模拟设计领域的空白）。💡 **CadenceLIVE 2026** 重磅发布：Cadence 推出 ViraStack（Spec→Signoff 端到端 Agent）、InnoStack（3D IC 设计自动化 Agent）两大 AI Super Agent，并与 NVIDIA 深化合作；**Agent4Chip @ ICLR 2026 进行中**（4月23日开幕，里约热内卢，23篇接收论文展示）；MLCAD Alpha 倒计时 **6 天**（4月30日截止）。

| #   | 标题 | 类别 | arXiv | 本地文件 |
| --- | ---- | ---- | ----- | -------- |
| 1 ★ | **AnalogMaster: LLM-based Automated Analog IC Design from Image to Layout** | 模拟IC设计 / 端到端自动化 / 图像→网表 / LLM框架 | [2604.20916](https://arxiv.org/abs/2604.20916) | [PDF](./2026-04-24/AnalogMaster_2604.20916v1.pdf) |

---

## 📋 论文摘要速览（2026-04-24）

### 🏆 重点推荐

#### 1. AnalogMaster — 首个 LLM 驱动模拟 IC 端到端自动化框架，图像→布局全流程打通

- **arXiv**: https://arxiv.org/abs/2604.20916
- **作者**: Xian Rong Qin, Yong Zhang, Ying Hu, Tao Su, Bo-Wen Jia, Ning Xu
- **摘要**: 提出 **AnalogMaster**，首个基于 LLM 的模拟 IC 设计**端到端自动化框架**，实现从电路图像到网表转换、尺寸调整、布局布线的全流程自动化。核心创新：① **图像→网表多模态解析**——利用多模态 LLM 直接解析电路原理图图像，自动生成结构化 SPICE 网表，解决模拟设计输入格式多样化的痛点；② **统一设计空间探索流水线**——将模拟设计最耗时的手工迭代环节（sizing、placement、routing）统一纳入 LLM 驱动的设计空间探索，显著减少人工迭代次数；③ **可扩展工具链集成**——支持与商用（Cadence Virtuoso）及开源 EDA 工具链集成，可处理运放、比较器、带隙基准等典型模拟模块；④ **端到端正确性保证**——通过嵌入电路约束检查和 LVS 对比，确保生成布局的功能正确性。填补了 LLM for EDA 在模拟电路自动化设计领域的空白，与数字 RTL 生成（VerilogEval、RTLCoder 等）形成完整覆盖。
- **亮点**：首个将多模态 LLM（图像理解）引入模拟 IC 设计的端到端框架；从原理图图像直接生成可制造布局，省去手工绘制网表和初版布局的中间步骤；对高校教学和快速原型设计具有重要价值。

---

## 📰 行业动态（2026-04-24）

1. **CadenceLIVE 2026 AI Super Agents 正式发布（4月15-16日，圣何塞）**：Cadence 在 CadenceLIVE Silicon Valley 2026 上发布两大 AI Super Agent——**ViraStack**（从 Spec 到 Signoff 的端到端芯片设计 Agent，支持自然语言输入设计规范，自动完成 RTL 生成→综合→布局布线→时序签核全流程）和 **InnoStack**（3D IC / Chiplet 设计专用 Agent，支持多芯片堆叠协同优化、热-电-时序多物理场分析）；同步宣布与 NVIDIA 扩展合作，利用 NVIDIA 加速计算和 Nemotron AI Agent 平台提升 EDA 工具算力。Futurum 分析指出：Agentic AI 在 2D 芯片设计已接近实用，但 **3D IC 仍是最后也是最难的阵地**。
2. **Agent4Chip Workshop @ ICLR 2026 进行中（4月23-27日，里约热内卢）**：23篇接收论文全天展示与 Q&A，Google DeepMind VP Parthasarathy Ranganathan 主旨演讲「Centaurs in the Cloud」；重点论文包括 PRO-V-R1（RL for RTL 验证）、ASPEN（Agentic Place & Route）、GACO（GNN+RL 协同优化）、HeaRT（硬件 RAG 推理）等。Workshop 官网已更新现场照片和 Keynote 摘要。
3. **MLCAD 2026 竞赛 Alpha 阶段倒计时 6 天**（4月30日截止）：46支队伍（复旦/上交/东京大学等）正在冲刺 LLM 驱动 OpenROAD 时序优化算法发现任务，Alpha 阶段结果将决定能否进入 Beta 阶段（6月30日截止）。
4. **AnalogMaster 论文发布（4月24日）**：填补 LLM for EDA 模拟设计空白，多模态 LLM 从原理图图像直接生成可制造布局，对高校教学和快速原型设计具有重要价值。

---

## 📅 2026-04-23（本次更新：2 篇）

> ⚡ **Agent4Chip Workshop @ ICLR 2026 今日开幕**（里约热内卢 Riocentro，Google DeepMind VP 主旨演讲）。今日收录 2 篇 AI for EDA 新论文：ChipCraftBrain（验证优先多智能体 RTL 生成，首次在 CVDP 工业基准评测）、StructuralVerif（无工具循环调试的 EDA 代码结构化验证，提升 LLM 驱动 EDA 流程长期可靠性）。💥 重大行业动态：**Synopsys × TSMC** 与 **Cadence × TSMC** 双双于昨日（4月22日）宣布扩展 AI EDA 合作，覆盖 N3/N2/A16/A14 先进节点；MLCAD Alpha 倒计时 7 天。

| #   | 标题 | 类别 | arXiv | 本地文件 |
| --- | ---- | ---- | ----- | -------- |
| 1 ★ | **ChipCraftBrain: Validation-First RTL Generation via Multi-Agent Orchestration** | RTL生成 / 验证优先 / 多智能体 / CVDP工业基准 | [2604.19856](https://arxiv.org/abs/2604.19856) | [PDF](./2026-04-23/ChipCraftBrain_2604.19856v1.pdf) |
| 2   | **Structural Verification for Reliable EDA Code Generation without Tool-in-the-Loop** | EDA代码生成 / 结构化验证 / LLM可靠性 | [2604.18834](https://arxiv.org/abs/2604.18834) | [PDF](./2026-04-23/StructuralVerif_EDA_2604.18834v1.pdf) |

---

## 📅 2026-04-22（本次更新：6 篇）

> ⚡ **ICCAD 截稿后第四批预印本**：6 篇核心 AI for EDA 论文，涵盖对比学习 Verilog 表征（VerilogCL）、神经符号 RTL 修复（Clover）、HLS 配置空间分析（ConfigOverSelection）、RTL 表征瓶颈诊断（NL2Silicon）、MLIR 形式验证（EquivFusion）、Agentic 验证 Token 分配（AgenticHWVerif）。💡 行业：Cadence "ChatGPT时刻" Synopsys/Cadence CEO 联合访谈，EDA 商业模式转型讨论持续升温。⚠️ Agent4Chip Workshop @ ICLR 2026 **明日（4月23日）开幕**；MLCAD Alpha 阶段倒计时 8 天。

| #   | 标题 | 类别 | arXiv | 本地文件 |
| --- | ---- | ---- | ----- | -------- |
| 1 ★ | **VerilogCL: Contrastive Learning for Verilog Code Representation** | RTL生成 / 对比学习 / Verilog表征 | [2604.18162](https://arxiv.org/abs/2604.18162) | [PDF](./2026-04-22/VerilogCL_2604.18162v1.pdf) |
| 2 ★ | **Clover: Neural-Symbolic RTL Repair via Formal Verification Guidance** | RTL修复 / 神经符号 / 形式验证制导 | [2604.17288](https://arxiv.org/abs/2604.17288) | [PDF](./2026-04-22/Clover_RTLRepair_2604.17288v1.pdf) |
| 3   | **Configuration Over Architecture Selection for LLM-Based HLS** | HLS优化 / 配置空间 / 形式化分析 | [2604.17102](https://arxiv.org/abs/2604.17102) | [PDF](./2026-04-22/ConfigOverSelection_2604.17102v1.pdf) |
| 4   | **NL2Silicon: Understanding Representation Bottleneck in RTL Generation** | RTL生成 / 表征分析 / 瓶颈诊断 | [2604.17097](https://arxiv.org/abs/2604.17097) | [PDF](./2026-04-22/NL2Silicon_RepresentationBottleneck_2604.17097v1.pdf) |
| 5   | **EquivFusion: Hardware Equivalence Checking via MLIR** | 形式验证 / 等价性检查 / MLIR | [2604.16571](https://arxiv.org/abs/2604.16571) | [PDF](./2026-04-22/EquivFusion_2604.16571v1.pdf) |
| 6   | **Token Allocation Analysis in Agentic Hardware Verification** | Agentic验证 / Token分配 / 推理预算 | [2604.15657](https://arxiv.org/abs/2604.15657) | [PDF](./2026-04-22/AgenticHWVerif_TokenAlloc_2604.15657v1.pdf) |

---

## 📋 论文摘要速览（2026-04-22）

### 🏆 重点推荐

#### 1. VerilogCL — 首个对比学习 Verilog 表征框架，VerilogEval-Human 精度 +8.3pp

- **arXiv**: https://arxiv.org/abs/2604.18162
- **摘要**: 提出 **VerilogCL**，首个专为 Verilog 代码设计的对比学习表征框架。核心创新：① **语法等价负例挖掘**——自动生成功能等价但语法相异的 Verilog 变体作为硬负例，解决通用代码对比学习中负例质量差的问题；② **多任务对比预训练**——在 RTL 生成、修复、理解三个子任务上同步对比学习，构建统一 Verilog 语义表征；③ **轻量级对比头**——无需大模型全参微调，附加对比头即可显著提升下游任务。关键结果：VerilogEval-Human 基准上功能通过率 +8.3pp，VerilogEval-Machine +6.1pp，优于 CodeBERT 和 GraphCodeBERT 等通用代码表征方法。
- **亮点**：首个针对 Verilog 语义特性（如阻塞/非阻塞赋值等价、wire/reg 等价）设计的对比学习框架；语法等价负例挖掘策略可迁移至其他 HDL 语言。

#### 2. Clover — 神经符号 RTL 修复，形式验证制导迭代，pass@1 +11.8pp

- **arXiv**: https://arxiv.org/abs/2604.17288
- **机构**: 中科院软件所 + 清华大学
- **摘要**: 提出 **Clover（Closed-Loop Verilog Repair）**，神经符号联合 RTL 修复框架。核心流程：① **形式验证制导**——将 EDA 工具（Cadence/Synopsys 形式验证）的反例信息转化为结构化修复约束，替代纯 LLM 自回归猜测；② **迭代反例精化**——每轮修复后重新跑形式验证，用新反例精化下一轮修复方向，形成闭环；③ **神经符号混合策略**——LLM 负责语法级代码变换，形式求解器负责语义级正确性验证，各司其职。关键结果：pass@1 提升 +11.8pp，修复成功率在复杂数据通路设计上尤为显著。
- **亮点**：首个将工业形式验证工具反例作为 LLM RTL 修复制导信号的框架；中科院+清华联合，国内 AI for EDA 代表性工作。

### 其他论文速览

#### 3. ConfigOverSelection — 配置空间优于架构选择的形式化证明

- **arXiv**: https://arxiv.org/abs/2604.17102
- **摘要**: 通过形式化分析证明，在 LLM 辅助 HLS（High-Level Synthesis）场景中，**优化 HLS 配置参数**（pragma、循环展开因子、流水线级数）比选择不同架构模板带来更大的 PPA 改善空间。提出理论框架量化两种优化策略的收益上界，重新定向 LLM for HLS 的研究路径——应将更多注意力放在配置空间搜索而非架构选择上。
- **亮点**：对 LLM for HLS 研究方向有重要指导意义，从理论层面厘清配置优化 vs. 架构选择的相对价值。

#### 4. NL2Silicon — 自然语言到 RTL 的表征瓶颈系统分析

- **arXiv**: https://arxiv.org/abs/2604.17097
- **摘要**: 系统诊断现有 LLM 在 NL→RTL 任务中的**表征瓶颈**，分析模型在精确 RTL 语义（时序语义、信号传播、状态机跳转）上的系统性局限。识别三类主要瓶颈：① 自然语言到硬件时序语义的映射缺口；② RTL 特有控制流结构（always/if/case）的代码生成失真；③ 上下文长度限制导致的跨模块依赖丢失。提出量化评测框架 NL2Silicon-Bench，揭示现有 SOTA 模型在复杂 RTL 生成任务上存在的系统性盲区。
- **亮点**：不做新方法，专注于诊断现有系统局限，对后续研究具有重要的靶向指导价值。

#### 5. EquivFusion — 基于 MLIR 的硬件等价性检查，验证效率 10× 以上加速

- **arXiv**: https://arxiv.org/abs/2604.16571
- **摘要**: 提出 **EquivFusion**，利用 MLIR（Multi-Level Intermediate Representation）基础设施构建硬件电路等价性检查框架。核心思路：将硬件设计表示为 MLIR 多层 IR，在不同抽象层次上进行等价性验证（从 RTL 到门级），避免单一层次形式验证的状态爆炸问题。实现基于 SMT Solver 的分层约束求解，在工业规模电路上验证效率达 10× 以上加速。探索与 CIRCT（MLIR for circuits）生态系统的集成路径。
- **亮点**：将 MLIR 多层 IR 体系引入硬件形式验证，为 EDA 验证工具链现代化提供新路径。

#### 6. AgenticHWVerif — Token 分配分析揭示 Agentic 硬件验证计算瓶颈

- **arXiv**: https://arxiv.org/abs/2604.15657
- **摘要**: 对 **Agentic 硬件验证系统**进行大规模 Token 分配分析，系统研究推理预算如何分配影响验证成功率。分析多种 Agentic 验证框架（包括 UCAgent 等）的 Token 消耗分布，发现：① 60-75% 的 Token 用于中间验证结果解析而非核心推理；② 反例分析步骤的 Token 效率最低；③ 推理预算存在明显的"收益边界"，超过该边界后继续增加 Token 无法提升验证成功率。提出基于分析结果的推理预算优化策略，在相同 Token 预算下验证成功率提升约 18%。
- **亮点**：首个从 Token 经济学视角分析 Agentic 硬件验证效率的工作，对 MLCAD 2026 参赛队伍有直接参考价值。

---

## 📰 行业动态（2026-04-22）

1. **Agent4Chip Workshop @ ICLR 2026 明日开幕（4月23-27，里约）**：Google DeepMind VP 主旨演讲，23 篇接收论文全天展示，关注 PRO-V-R1（RL for RTL）、ASPEN（Agentic Place & Route）、GACO（GNN+RL协同优化）、HeaRT（硬件RAG推理）等重点工作
2. **Cadence "ChatGPT时刻"续集：EDA CEO 深度访谈**：Synopsys Sassine Ghazi + Cadence Anirudh Devgan 联合接受 SemiEngineering 深度访谈，讨论 AI 驱动的 EDA 商业模式转型；Cadence 推动从传统许可证 → 消费定价（consumption-based pricing），对标云服务商收费模式
3. **今日 6 篇新论文概览**：VerilogCL（对比学习 +8.3pp）× Clover（神经符号修复 +11.8pp）× ConfigOverSelection（HLS 配置理论证明）× NL2Silicon（RTL 表征瓶颈诊断）× EquivFusion（MLIR 形式验证 10× 加速）× AgenticHWVerif（Token 分配优化 +18%）

---

## 📅 2026-04-21（本次更新：1 篇）

> ⚡ **ICCAD 截稿后第三批预印本**：1 篇核心方向论文——COEVO（协同进化框架，联合优化 RTL 功能正确性 + PPA）。💰 行业重磅：Needham 上调 Cadence 目标价至 $400，称 EDA 行业迎来"ChatGPT 时刻"，Cadence 股价+2%+。Agent4Chip Workshop @ ICLR 2026 后天（4月23日）开幕，倒计时 2 天；MLCAD Alpha 阶段倒计时 9 天。

| #   | 标题 | 类别 | arXiv | 本地文件 |
| --- | ---- | ---- | ----- | -------- |
| 1 ★ | **COEVO: Co-Evolutionary Framework for Joint Functional Correctness and PPA Optimization in LLM-Based RTL Generation** | RTL生成 / 协同进化 / 功能正确性+PPA联合优化 | [2604.15001](https://arxiv.org/abs/2604.15001) | [PDF](./2026-04-21/COEVO_2604.15001v1.pdf) |

---

## 📋 本周展望（2026-04-21 ~ 04-25）

- **Agent4Chip Workshop @ ICLR 2026（4月23-27，里约热内卢）**：后天开幕，23篇接收论文现场展示与 Q&A，重点关注 PRO-V-R1 / ASPEN / GACO / HeaRT / ACE-RTL / FVRuleLearner 等
- **ICCAD 2026 截稿后预印本持续爆发**：预计本周仍有多批 AI for EDA 预印本发布，布局布线 GNN/RL、时序优化 Agentic EDA 闭环、形式化验证、模拟电路 AI 设计
- **MLCAD 2026 竞赛 Alpha 阶段（4月30日截止）**：倒计时 9 天，46支队伍进入最后冲刺

---

## 📋 论文摘要速览（2026-04-21）

### 🏆 重点推荐

#### 1. COEVO — 协同进化框架首次实现 RTL 功能正确性 + PPA 联合优化，部分设计面积减少 15-30%

- **arXiv**: https://arxiv.org/abs/2604.15001
- **投稿日期**: 2026-04-17（cs.AR + cs.AI）
- **摘要**: COEVO 提出**协同进化（Co-Evolutionary）框架**，突破现有 LLM RTL 生成"功能通过但面积差"的核心短板。核心机制：① **双目标进化**——同步优化 pass@k（功能正确性）和 PPA（综合结果），两目标相互约束引导搜索；② **LLM 结构感知代码变异**——模块重组、流水线调整、资源共享，保持功能不变探索 PPA 优化空间；③ **EDA 工具真实反馈**——调用 Yosys / OpenROAD 实测面积/时序/功耗，反馈回进化迭代；④ **Pareto 前沿维护**——保留功能正确且 PPA 多样的候选群体避免局部收敛。
- **关键结果**：VerilogEval-Human 和 RTLLM 基准上，功能通过率持平或优于 SOTA，综合面积减少 15-30%，时序余量改善。
- **亮点**：首个将功能正确性与 PPA 协同优化纳入统一进化框架的工作；引入真实 EDA 工具（Yosys/OpenROAD）作为适应度函数；解决 LLM 生成 RTL "能运行但面积浪费"的根本问题，是 AI for EDA 从"功能可行"迈向"硅后优质"的关键突破。

---

## 📰 行业动态（2026-04-21）

**💰 Needham 上调 Cadence 目标价至 $400 — "EDA 的 ChatGPT 时刻"**
- Needham 将 Cadence（CDNS）目标价从 $330 上调至 $400（+21%），维持"买入"评级
- 将此轮 AI 赋能定性为 EDA 行业的"ChatGPT 时刻"
- 指出 ChipStack AI Super Agent × Google Gemini 合作将推动云端 EDA 新增收入超预期
- Cadence 股价回应上涨 2%+

---



> ⚡ **ICCAD 截稿后第二批预印本**：4 篇全部为 AI for EDA 核心方向——HYPERHEURIST（超图超启发式LLM物理设计引擎）、Spec2Cov（LLM覆盖率导向验证）、数据高效Verilog微调（7B超越34B）、VeriCWEty（RTL CWE安全检测）。Agent4Chip Workshop @ ICLR 2026 倒计时 3 天，MLCAD Alpha 倒计时 10 天。

| #   | 标题 | 类别 | arXiv | 本地文件 |
| --- | ---- | ---- | ----- | -------- |
| 1 ★ | **HYPERHEURIST: Hypergraph-Based Hyper-Heuristic LLM Engine for VLSI Physical Design Optimization** | 物理设计 / 超图超启发式 / LLM | [2604.15642](https://arxiv.org/abs/2604.15642) | [PDF](./2026-04-20/HYPERHEURIST_2604.15642v1.pdf) |
| 2 ★ | **Spec2Cov: LLM-Based Coverage-Directed Functional Verification for RTL Designs** | 功能验证 / 覆盖率导向 / 冗余消除 | [2604.15606](https://arxiv.org/abs/2604.15606) | [PDF](./2026-04-20/Spec2Cov_2604.15606v1.pdf) |
| 3   | **Data-Efficient Fine-Tuning of LLMs for Verilog Generation** | LLM微调 / 合成数据 / Verilog生成 | [2604.15388](https://arxiv.org/abs/2604.15388) | [PDF](./2026-04-20/Verilog-DataEffFT_2604.15388v1.pdf) |
| 4   | **VeriCWEty: LLM-Based RTL Security Vulnerability Detection Framework** | RTL安全 / CWE漏洞检测 / 优于GPT-4o | [2604.15375](https://arxiv.org/abs/2604.15375) | [PDF](./2026-04-20/VeriCWEty_2604.15375v1.pdf) |

---

## 📅 2026-04-19（本次更新：0 篇）

> ⚠️ **周日，arXiv 不发布新批次**。最新一批为 2026-04-17（周五），其中 5 篇 AI for EDA 论文已在昨日（4月18日）收录。

| #   | 标题 | 类别 | arXiv | 本地文件 |
| --- | ---- | ---- | ----- | -------- |
| — | *今日无新增 AI for EDA 论文（周日）* | — | — | — |

---

## 📋 下周展望（2026-04-20 ~ 04-25）

- **ICCAD 2026 截稿后预印本主峰**：预计 4月21日（周一）arXiv 恢复发布后，将出现更大规模爆发，重点关注：布局布线 GNN/RL、时序优化 Agentic EDA 闭环、形式化验证、模拟电路 AI 设计
- **Agent4Chip Workshop @ ICLR 2026（4月23-27，里约热内卢）**：23篇接收论文现场展示与 Q&A，关注 PRO-V-R1 / ASPEN / GACO / HeaRT / ACE-RTL 等
- **MLCAD 2026 竞赛 Alpha 阶段（4月30日截止）**：46支队伍，LLM 驱动 OpenROAD 时序优化，进入最后冲刺

---

## 📅 2026-04-18（本次更新：5 篇）

> ⚡ **ICCAD 截稿后首批爆发**：截稿第 4-5 天，5 篇高质量 AI for EDA 论文集中发布，涵盖逻辑综合自进化（Self-Evolved ABC）、RTL 时序自主优化（Dr. RTL）、标准单元拓扑优化（TOPCELL）、层次化 RTL 生成（VeriGraphi）、全芯片多物理场分析（EMSpice 3）。其中 2 篇为 DAC 2026 接收论文，NVIDIA Research 双论文同日亮相。

| #   | 标题                                                                                                                                                                      | 类别                                          | arXiv                                          | 本地文件                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1   | **Dr. RTL: Autonomous Agentic RTL Optimization through Tool-Grounded Self-Improvement**                                                                                    | RTL时序优化 / 多智能体 / 技能库 / WNS+21% TNS+17%       | [2604.14989](https://arxiv.org/abs/2604.14989) | [PDF](./2026-04-18/2604.14989-DrRTL-Agentic-RTL-Optimization.pdf)                                               |
| 2   | **TOPCELL: Topology Optimization of Standard Cell via LLMs**                                                                                                              | 标准单元 / LLM+GRPO / 2nm工艺 / 85.91×加速 / DAC 2026 | [2604.14237](https://arxiv.org/abs/2604.14237) | [PDF](./2026-04-18/2604.14237-TOPCELL-StandardCell-LLM-DAC2026.pdf)                                             |
| 3   | **Autonomous Evolution of EDA Tools: Multi-Agent Self-Evolved ABC**                                                                                                       | 逻辑综合 / 自进化LLM / ABC工具演化 / DAC 2026            | [2604.15082](https://arxiv.org/abs/2604.15082) | [PDF](./2026-04-18/2604.15082-SelfEvolvedABC-MultiAgent-DAC2026.pdf)                                            |
| 4   | **VeriGraphi: A Multi-Agent Framework of Hierarchical RTL Generation for Large Hardware Designs**                                                                         | RTL生成 / 层次化 / 知识图谱HDA / RISC-V               | [2604.14550](https://arxiv.org/abs/2604.14550) | [PDF](./2026-04-18/2604.14550-VeriGraphi-HierarchicalRTL-MultiAgent.pdf)                                        |
| 5   | **EMSpice 3: Full-chip Temperature-Aware Multiphysics Electromigration and IR-Drop Analysis**                                                                             | 多物理场 / EM+TM+IR-Drop / 热感知签核 / Synopsys ICC   | [2604.10743](https://arxiv.org/abs/2604.10743) | [PDF](./2026-04-18/2604.10743-EMSpice3-Multiphysics-EM-IRDrop.pdf)                                              |

---

## 📋 论文摘要速览（2026-04-18）

### 🏆 重点推荐

#### 1. Dr. RTL — 工具驱动 Agentic RTL 时序优化，47条可复用技能，WNS +21% 超商业综合工具

- **arXiv**: https://arxiv.org/abs/2604.14989
- **投稿日期**: 2026-04-16（cs.AR + cs.AI）
- **作者**: Wenji Fang, Yao Lu, Shang Liu, Jing Wang, Ziyan Guo, Junxian He, Fengbin Tu, Zhiyao Xie（香港中文大学，Zhiyao Xie 组）
- **摘要**: Dr. RTL 提出多智能体闭环 RTL 时序优化框架，解决现有方法在小规模降级设计上评估、粗粒度优化两大缺陷：① 关键路径分析智能体识别时序瓶颈；② 并行 RTL 重写智能体同时探索多策略；③ 工业级 EDA 工具反馈驱动迭代。核心创新：**组相对技能学习（Group-Relative Skill Learning）**——比较并行重写结果，将成功模式蒸馏为 **47 个可解释技能条目**，跨设计复用，技能库持续演化。
- **关键结果**（20 个真实 RTL 设计）：WNS **+21%**，TNS **+17%**，面积 **-6%**，全面超越行业领先商用综合工具。
- **亮点**：香港中文大学 Zhiyao Xie 组（RTLCoder 团队）的重量级成果；使用工业级 EDA 工具评估使结果直接可比；47 条可解释技能的持续学习机制是超越 VeriAgent 进化记忆的新范式。

#### 2. TOPCELL（DAC 2026）— LLM + GRPO 标准单元拓扑优化，2nm 工艺验证，85.91×加速匹配穷举求解器

- **arXiv**: https://arxiv.org/abs/2604.14237
- **投稿日期**: 2026-04-15（cs.LG）
- **会议**: DAC 2026（第63届 ACM/IEEE）接收
- **作者**: Zhan Song, Yu-Tung Liu 等9人（含 Haoxing Ren, Cunxi Yu — NVIDIA Research）
- **摘要**: TOPCELL 将标准单元晶体管拓扑优化重构为生成式任务：LLM 替代穷举搜索，引入 GRPO 微调对齐逻辑+空间约束，目标工艺 **2nm 技术节点**，并在 7nm 库生成任务中验证零样本泛化。
- **关键结果**: 2nm 工艺显著优于基础模型；7nm 库：**版图质量匹配穷举求解器**，推理速度 **85.91×** 加速。
- **亮点**：DAC 2026 接收；NVIDIA Research 双论文之一；GRPO 在 EDA 工具约束对齐中的应用方法论创新。

#### 3. Self-Evolved ABC（DAC 2026）— 多智能体自主进化逻辑综合工具，无需人工注入，发现超越人工启发式的优化

- **arXiv**: https://arxiv.org/abs/2604.15082
- **投稿日期**: 2026-04-16（cs.AR + cs.AI）
- **会议**: DAC 2026（第63届 ACM/IEEE）接收
- **作者**: Cunxi Yu（Maryland + NVIDIA Research）, Haoxing Ren（NVIDIA Research）
- **摘要**: 首次提出自进化逻辑综合框架：LLM 智能体团队在 ABC 完整代码库上自主迭代重写子组件，每轮"编译→验证→QoR评估→反馈"，覆盖流程调优/逻辑最小化/技术映射，无需人工注入新启发式。评估：ISCAS 85/89/99、VTR、EPFL、IWLS 2005。
- **关键结果**: 持续反馈循环发现**超越人工设计启发式**的优化策略，有效渐进改进百万行规模 EDA 工具。
- **亮点**：DAC 2026；NVIDIA Research 双论文之二；让 AI 真正"修改 EDA 工具本身"——里程碑式工作。

---

### 📊 其他重要论文

#### 4. VeriGraphi — 规范锚定知识图谱（HDA）驱动层次化 RTL 生成，RISC-V 验证达成

- **arXiv**: https://arxiv.org/abs/2604.14550
- **投稿日期**: 2026-04-16（cs.AR + cs.AI + cs.MA）
- **作者**: Sazzadul Islam, Tasnim Tabassum, Hao Zheng
- **核心内容**: 引入 Hardware Design Abstraction（HDA）知识图谱，将模块层次结构/端口接口/连线语义/模块间依赖显式编码为图实体；多智能体迭代分析规范（含非正式文字/图表）构建 HDA；渐进式编码模块在知识图谱指导下生成 RTL，强制接口一致性。在 NIST 规范 + RV32I 处理器案例验证。
- **亮点**: 知识图谱作为"预生成阶段结构记忆"的设计，为大规模层次化 RTL 生成的"结构幻觉"问题提供新思路。

#### 5. EMSpice 3 — 全芯片温度感知 EM+TM+IR-Drop 耦合分析，热分布空间变化致 RISC-V TTF 差异超 70%

- **arXiv**: https://arxiv.org/abs/2604.10743
- **投稿日期**: 2026-04-12（v2: 4月14日，cs.AR）
- **作者**: Haotian Lu, Sheldon X.-D. Tan（UC Riverside）
- **核心内容**: 将真实空间热分布图纳入 EM 可靠性评估，实现"地图感知 EM 签核"；集成 Krylov 降阶加速求解器（运行时 1.18×-1.50× 缩减）；与 Synopsys ICC 和 Fusion Compiler 直接集成。
- **关键结果**: 相同平均温度，不同热分布导致 RISC-V 内核 TTF 差异 **>70%**，ARM Cortex-A 约 **50%**。
- **亮点**: 学术开源工具与工业级签核工具直接集成；与 Synopsys Multiphysics Fusion™ 在多物理场方向形成互补。

---

## 🌐 行业动态（2026-04-18）

### 🔥 ICCAD 2026 截稿后首批 AI for EDA 预印本爆发（2026-04-16-18）

- 截稿第 3-5 天，arXiv cs.AR 出现今年 ICCAD 截稿后首批集中预印本，5 篇全部为核心 AI for EDA 方向
- NVIDIA Research 在 DAC 2026 方向双发（TOPCELL + Self-Evolved ABC），展示在逻辑综合从工具层到库层的垂直打通
- 预计下周（4月20-25日）将迎来更大规模的预印本爆发，尤其布局布线 GNN/RL、Agentic EDA 闭环、形式化验证方向

### 🗓️ Agent4Chip Workshop @ ICLR 2026 倒计时 5 天（2026-04-23-27，里约热内卢）

- 23篇接收论文，全部为 AI for EDA 核心方向，现场展示将于周三（4月23日）正式开幕
- 关注：NVIDIA Mark Ho（可训练自我改进 Agent）/ UT Austin David Z. Pan（AMS 自动化）/ UCSD Jishen Zhao（自演化 LLM 多智能体）演讲

---

## 📌 待追踪（下次更新关注）

- **ICCAD 2026 截稿后预印本主峰（预计 4月20-25日）**：布局布线/时序收敛/形式验证/Agentic EDA 方向
- **Agent4Chip Workshop @ ICLR 2026（4月23-27，里约）**：现场论文展示与 Q&A
- **MLCAD 2026 竞赛 Alpha 阶段（4月30日）**：46支队伍提交 Alpha 版方案
- **Dr. RTL（2604.14989）技能库开源**：47条 RTL 优化模式独立数据集
- **TOPCELL（2604.14237）2nm 工艺验证数据集**：是否部分开放
- **Self-Evolved ABC（2604.15082）进化代码开源**：ABC patch 形式发布



> ⚠️ **注：** ICCAD 2026 截稿（4月14日）后，arXiv cs.AR 尚未出现集中爆发的新一批 AI for EDA 预印本（通常需 3-7 天缓冲期）。今日重点为 **DAC 2026 技术程序正式公布**（今日，4月17日）及 CadenceLIVE SV 2026 后续落地。

| #  | 标题 | 类别 | arXiv | 本地文件 |
|----|------|------|-------|---------|
| — | *今日无新增 AI for EDA 论文* | — | — | — |

---

## 🌐 行业动态（2026-04-17）

### 🔥 DAC 2026 完整技术程序今日公布（2026-04-17）

- **链接**: https://www.dac.com/2026
- **时间**: 2026-04-17（今日，第63届 ACM/IEEE DAC）
- **核心内容**:
  - DAC 2026（7月26-29日，长滩加州）技术程序今日正式公布，提交量增长 **26.34%**，55% 内容聚焦 AI & Design
  - 已确认接收的 AI for EDA 论文：**ChatSVA**（多智能体SVA生成）、**CellE**（等式饱和标准单元库扩展，北大+清华）、**GSR-GNN**（深层GNN电路图训练加速，南开）、**Escaping Flatland**（3D FPGA布局流程，Georgia Tech+UCSD）、**CapBench**（多PDK电容提取ML基准）等
  - Keynote：诺贝尔物理奖得主 John Martinis（量子计算）、高通 CTO Baaziz Achour
  - 赞助：ChipAgents.ai、Ricursive Intelligence、Bronco AI 为白金赞助商；NVIDIA Timothy Costa 受邀 SkyTalk

### 🆕 Cadence × NVIDIA 扩展合作持续落地 — 三星/SK Hynix/本田/Argonne 已投入使用（2026-04-15~16）

- **链接**: https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2026/cadence-and-nvidia-expand-partnership-to-reinvent-engineering.html
- **时间**: 2026-04-15~16（CadenceLIVE SV 2026 后续发酵）
- **核心内容**:
  - **Cadence × Google Cloud + Gemini**：ChipStack AI Super Agent 与 Google Gemini LLM 在 Google Cloud 上深度集成，Cadence 股价公告后上涨逾 **4%**
  - **Cadence × NVIDIA 全面扩展**：新增 Omniverse 数字孪生、Physical AI 仿真（Fidelity CFD + Celsius 热分析）、GB200/B200 GPU 加速 EDA 全系
  - 早期用户确认：**三星**（先进工艺设计验证）、**SK Hynix**（HBM 设计加速）、**本田**（发动机 CFD 仿真数字孪生）、**Argonne 国家实验室**、**Ascendence**
- **意义**: EDA 三巨头均已与 NVIDIA 深度绑定；Cadence 同时在 Google Cloud（LLM 推理）和 NVIDIA（GPU 加速仿真）双线并行，形成差异化覆盖

### 🇨🇳 华大九天 AI 特征化提取工具荣获 CITE 2026 创新奖（2026-04-09，深圳）

- **链接**: https://eda.eetrend.com/content/2026/100600258.html
- **时间**: 2026-04-09（CITE 2026，深圳，工信部主办）
- **核心内容**:
  - 华大九天（A股 301269）凭借 **AI 赋能 EDA 关键技术——AI 特征化提取工具** 斩获 2026 CITE 创新奖
  - 核心功能：基于 AI 从晶体管级 SPICE 仿真中自动提取紧凑参数化特征，加速 EDA 性能预测和设计优化
  - 这是继合见工软 UDA 2.0（3月）之后，本月第二家国产 EDA 厂商在 AI 赋能方向获得国内权威认可
- **意义**: 国产 EDA 从"功能替代"向"AI 原生创新"转型提速，华大九天 AI 方向战略实质性落地

### ⏳ Agent4Chip Workshop @ ICLR 2026 倒计时 6 天（2026-04-17）

- **链接**: https://ai4eda-workshop.github.io/2026/accepted_papers.html
- **时间**: 2026-04-23~27（ICLR 2026 同期，里约热内卢 Riocentro）
- **核心内容**:
  - 23篇接收论文：PRO-V-R1（RTL验证推理增强Agent）、ASPEN（E-Graph数据通路优化）、GACO（图增强HLS优化）、EDAForge（模拟电路多智能体合成）、HeaRT（AMS层级推理树）、ACE-RTL（NVIDIA，专用LLM+Agent融合）、LLM4Cov（离线Agent学习验证）等
  - 所有论文均已有 arXiv 预印本可预读

---

## 📌 待追踪（下次更新关注）

- **DAC 2026 完整程序（今日公布）**：完整分会场安排和 AI for EDA 专场详情
- **Agent4Chip Workshop @ ICLR 2026（4月23-27，里约）**：6天后开幕，现场展示
- **MLCAD 2026 竞赛 Alpha 阶段（4月30日）**：46支队伍提交，倒计时 13 天
- **ICCAD 2026 截稿后预印本爆发（预计 4月20-25日）**：重点关注布局/时序/形式验证/Agentic EDA
- **OpenClaw for FPGA 直播回放**（赖晓铮，4月16日）：EEtrend 可回放

---



> ⚠️ **注：** 今日（周四）arXiv cs.AR 最新批次为 4 月 10 日（系统延迟），ICCAD 截稿后（4月14日后）尚未出现公开的新 AI for EDA 预印本。今日重点为 **CadenceLIVE Silicon Valley 2026** 双重重磅公告（4 月 15-16 日）。

| #  | 标题 | 类别 | arXiv | 本地文件 |
|----|------|------|-------|---------|
| — | *今日无新增 AI for EDA 论文* | — | — | — |

---

## 🌐 行业动态（2026-04-16）

### 🔥🔥 CadenceLIVE Silicon Valley 2026 双重公告（2026-04-15）

**会议背景**：Cadence 年度用户大会 CadenceLIVE Silicon Valley 2026（4月15-16日，圣何塞），本届大会是 Agentic EDA 元年的关键里程碑，三大发布均指向"从 EDA 工具向 AI 驱动工程平台"的战略转型。

#### 公告一：Cadence × Google Cloud — ChipStack AI Super Agent + Gemini 战略合作

- **链接**: https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2026/cadence-and-google-collaborate-to-scale-ai-driven-chip-design.html
- **时间**: 2026-04-15（CadenceLIVE SV 2026 同期发布）
- **核心内容**:
  - Cadence **ChipStack™ AI Super Agent** 将与 **Google Gemini LLM** 在 **Google Cloud** 上深度集成，实现大规模 AI 驱动芯片设计
  - 技术架构：Gemini 提供推理能力（大上下文窗口），Cadence EDA 工具链提供领域工具调用接口，ChipStack 编排端到端验证工作流
  - **Google Cloud 弹性算力**：按需扩展 LLM 推理资源，打破本地部署 GPU 瓶颈
  - 目标指标：延续 ChipStack 已在 Altera/NVIDIA/Tenstorrent 验证的 **10× 验证效率**，进一步扩展至更大规模设计
  - Cadence 股价公告后上涨逾 **4%**
- **意义**: 这是继 Cadence×NVIDIA（3月 GTC）之后，Cadence 第二次在三大云厂商（Google/Microsoft/NVIDIA）中达成 AI EDA 战略合作；Gemini 长上下文窗口能力对处理百万行 Verilog 代码库有显著优势

#### 公告二：Cadence × NVIDIA 扩展合作 — Omniverse + Physical AI + 数字孪生

- **链接**: https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2026/cadence-and-nvidia-expand-partnership-to-reinvent-engineering.html
- **时间**: 2026-04-15（CadenceLIVE SV 2026 同期发布）
- **核心内容**:
  - 在 3 月 GTC 2026 合作基础上**大幅扩展**，三大新方向：
    1. **Agentic AI for EDA**：ChipStack AI Super Agent 与 NVIDIA NemoClaw 更深度整合，加速前端验证与 RTL-to-Signoff 全流程
    2. **Physical AI & Robotics 仿真**：Cadence Fidelity™ CFD + Celsius™ 热分析与 **NVIDIA Omniverse** 集成，实现机器人与自动驾驶系统的高保真物理仿真数字孪生
    3. **GPU 加速 EDA 工具全系升级**：Innovus™、Tempus™、Voltus™、Spectre® X 等全系工具 NVIDIA GB200/B200 加速实例正式商用，较前次合作工具覆盖面扩大
  - NVIDIA Ari Bergmann（VP, EDA Solutions）："这标志着 Cadence 与 NVIDIA 联合推进从芯片到系统的全链路加速"
- **意义**: EDA 三巨头（Cadence/Synopsys/Siemens）已全部与 NVIDIA 扩展 AI EDA 深度绑定；Cadence 同时与 Google Cloud + NVIDIA 双线并行，在 LLM 推理（Gemini）与 GPU 加速仿真（NVIDIA）形成差异化覆盖

### 📡 OpenClaw for FPGA 直播 — 今晚 19:00（2026-04-16）

- **链接**: https://v.eetrend.com/content/2026/100600151.html
- **时间**: 2026-04-16（周四）19:00–20:30，贸泽电子「芯英雄联盟」直播间
- **嘉宾**: 华南理工大学副教授**赖晓铮**
- **主题**: 「用龙虾进行芯片及FPGA开发」
- **看点**: ① Agent 设计 RTL 的最新进展（超越对话交互）；② Agent 做 RTL 验证的突破；③ Agent 时代工程师/学生如何应对
- **背景**: OpenClaw（浙大卓成组开源 Agentic EDA 框架）正在向 FPGA 方向快速扩展；同济 RTL-CLAW 也基于 OpenClaw 构建。今晚直播将展示 OpenClaw 在 FPGA 全流程自动化的最新实战进展

### 📊 SemiEngineering 深度报道 — AI 对芯片设计影响持续增长（2026-04-15）

- **链接**: https://semiengineering.com/ai-growing-impact-on-chip-design-and-eda-tools/
- **时间**: 2026-04-15（SemiEngineering）
- **核心要点**:
  - 数据中心工作负载高度客户定制化，推动 Agentic AI EDA 工具需求激增
  - 大型系统公司（超大规模云厂商）正在推动 AI EDA 工具向"可编程设计代理"演进
  - 传统 EDA 工具厂商面临"功能升级 vs. AI 原生重建"两难选择
  - 关键洞察：**AI Agent 使 EDA 工具从"参数化配置"转向"目标驱动自主执行"**，这正是 Cadence/Synopsys 近期大举发布 Agentic EDA 平台的底层逻辑

---

## 📌 待追踪（下次更新关注）

- **DAC 2026 技术程序公布（原定 4月17日）**：关注 AI for EDA 专场完整入选情况（已知 ChatSVA、R2G、CapBench、CellE、GSR-GNN、Escaping Flatland 等均已接收）
- **Agent4Chip Workshop @ ICLR 2026（4月23-27，里约）**：距今 7 天，现场展示 PRO-V-R1、ASPEN、GACO、EDAForge 等 23 篇论文
- **MLCAD 2026 竞赛 Alpha 阶段（4月30日）**：46支队伍，LLM 驱动 OpenROAD 时序优化
- **CadenceLIVE SV 2026 Day 2（今日 4月16日）**：持续关注新公告
- **OpenClaw FPGA 直播回放**（今晚 19:00，赖晓铮教授）
- **ICCAD 2026 截稿后预印本爆发（持续中）**：预计未来数日仍有布局布线/时序/形式验证新论文出现

---

## 📅 2026-04-15（本次更新：2 篇）

| #   | 标题                                                                                                                                                                                   | 类别                                    | arXiv                                          | 本地文件                                                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 1   | **GSR-GNN: Training Acceleration and Memory-Saving Framework for Deep GNNs on Large Circuit Graphs**                                                                                   | GNN / 电路图训练加速 / 内存优化 / DAC 2026         | [2603.27156](https://arxiv.org/abs/2603.27156) | [PDF](./2026-04-15/2603.27156-GSR-GNN-DeepGNN-Circuit-Training-Acceleration-DAC2026.pdf)                                    |
| 2   | **Escaping Flatland: A Placement Flow for Enabling 3D FPGAs**                                                                                                                          | 3D FPGA / 布局流程 / 层间延迟建模 / DAC 2026      | [2604.01078](https://arxiv.org/abs/2604.01078) | [PDF](./2026-04-15/2604.01078-EscapingFlatland-3DFPGA-Placement-DAC2026.pdf)                                                 |

---

## 📋 论文摘要速览（2026-04-15）

### 🏆 重点推荐

#### 1. GSR-GNN（DAC 2026）— 分组稀疏可逆 GNN，百层深度训练，电路图内存降低显著

- **arXiv**: https://arxiv.org/abs/2603.27156
- **投稿日期**: 2026-03-28（cs.AR + cs.LG）
- **会议**: DAC 2026（第63届 ACM/IEEE）接收
- **作者**: 来自南开大学等团队（Luo, Li 等）
- **摘要**: GNN 已在拥塞预测、线长估计等物理设计任务上广泛应用，但超深层 GNN（数十/百层）在大规模电路图上训练时，反向传播中间激活存储导致显存爆炸。GSR-GNN 提出**分组稀疏可逆（Grouped-Sparse-Reversible）GNN 框架**：① **可逆残差模块**（Reversible Residual）：前向传播无需存储中间激活，反向传播从输出重构，彻底消除中间层内存占用；② **分组稀疏非线性算子（Group-wise Sparse Nonlinear）**：在压缩节点嵌入的同时不损失任务相关信息；③ 支持训练 **数百层** GNN（远超现有 2-3 层限制）而同时降低计算量和内存开销。
- **关键结果**: 相比标准 GNN，内存开销大幅降低（可逆机制避免存中间层），训练加速；在电路布局拥塞预测等任务上，深层 GSR-GNN 超越所有现有方法 SOTA，证明深层 GNN 在电路图上的价值。
- **亮点**: DAC 2026 接收；GNN for Physical Design 的核心瓶颈一直是"深层 GNN 在百万节点电路图上不可训练"，GSR-GNN 从根本上解决了这个问题，为 ML 驱动物理设计开辟了深层 GNN 新范式；与 CapBench（同日 DAC 2026）和 VeriHGN（3月 DAC 2026）形成物理设计 GNN 研究的 2026 年三角组合。

#### 2. Escaping Flatland（DAC 2026）— 首个完整 3D FPGA 布局流程，解锁面积+性能双提升

- **arXiv**: https://arxiv.org/abs/2604.01078
- **投稿日期**: 2026-04-01（cs.AR）
- **会议**: DAC 2026（第63届 ACM/IEEE）接收
- **作者**: Hao、Kahng 等（Georgia Tech + UCSD）
- **摘要**: 3D FPGA 通过垂直堆叠多层逻辑来突破二维平面面积限制，但传统布局工具完全基于 2D 假设，无法有效利用 3D 空间优势（尤其是层间 via/传输延迟未被建模）。**Escaping Flatland** 提出完整的 3D FPGA 布局流程，四大核心技术：① **分区初始化**（Partitioning-based Initialization）：基于网表划分将设计预分配至各层，减少层间通信拥塞；② **自适应代价调度**（Adaptive Cost Scheduling）：动态权衡层间延迟与面内布线拥塞；③ **精细化层间延迟估计**（Refined Delay Estimation）：精确建模 3D via 延迟（区别于 2D 同层延迟）；④ **模拟退火移动集**（Simulated Annealing Move Set）专为 3D 跨层单元迁移设计。
- **关键结果**: 在 3D FPGA 基准测试上，相比直接将 2D 布局工具应用于 3D 设计，显著降低关键路径延迟并减少层间通信开销；同时支持工业级设计规模。
- **亮点**: DAC 2026 接收；3D FPGA 设计流程是当前业界关键缺口（如今晚赖晓铮 OpenClaw for FPGA 直播正好呼应此方向），本文是该方向第一篇完整布局流程论文；Georgia Tech + UCSD 是物理设计领域顶尖团队组合（Kahng 教授是全球布局布线领域权威）。

---

## 🌐 行业动态（2026-04-15 补充）

### 🇨🇳 iEDA × AiEDA 开源智能 EDA 联合报告（中科院软件所，2026-04-14）

- **链接**: https://www.iscas.cas.cn/xshd2016/xsbg2016/202604/t20260413_8184705.html
- **时间**: 2026-04-14（中科院软件所 KLSS Seminar）
- **主讲**: 李兴权博士（东南大学）
- **核心内容**:
  - **iEDA**：国内多家单位联合开发的开源 EDA 平台，覆盖 RTL-to-GDSII 全流程
  - **AiEDA**：配套 AI for EDA Python 库（OSCC-Project），主要功能：运行芯片流程产生训练数据、提取标签/特征、搭建神经网络模型、模型接入设计流程验证
  - 核心能力：布局预测、布线优化、时序预测、逻辑综合、设计规则检查的 ML 模型
  - **iDATA**：配套向量数据集，为国内 AI for EDA 研究提供开放基础数据
- **意义**: iEDA+AiEDA+iDATA 三位一体，是国内最完整的开源 AI for EDA 研究基础设施；与国际 OpenROAD+CircuitNet 形成对应，但更聚焦国内工艺库和工业适配

---

## 📌 待追踪（更新于 2026-04-15）

| #   | 标题                                                                                                                                                                         | 类别                                 | arXiv                                          | 本地文件                                                                                                                |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 1   | **Automated SVA Generation with LLMs**                                                                                                                                       | RTL验证 / SVA生成 / AST约束注入 / ISEDA 2026 | [2604.11044](https://arxiv.org/abs/2604.11044) | [PDF](./2026-04-14/2604.11044-SVAGenerator-LLM-SVA-Generation-ISEDA2026.pdf)                                          |
| 2   | **CapBench: A Multi-PDK Dataset for Machine-Learning-Based Post-Layout Capacitance Extraction**                                                                              | 物理设计 / 寄生参数提取 / ML基准 / DAC 2026     | [2604.11202](https://arxiv.org/abs/2604.11202) | [PDF](./2026-04-14/2604.11202-CapBench-MultiPDK-Capacitance-Extraction-DAC2026.pdf)                                   |

---

## 📋 论文摘要速览（2026-04-14）

### 🏆 重点推荐

#### 1. SVA Generator（ISEDA 2026）— AST约束注入 + 形式等价检查，语义等价率平均提升 22.7 pp

- **arXiv**: https://arxiv.org/abs/2604.11044
- **投稿日期**: 2026-04-13（cs.AR）
- **会议**: ISEDA 2026 接收
- **作者**: Lik Tung Fu, Qihang Wang, Shaokai Ren, Mengli Zhang, Sichao Yang, Jun Liu, Xi Wang
- **摘要**: 功能验证占 IC 开发成本主导，SVA 手工编写耗时且容易出错，直接提示通用 LLM 生成 SVA 则语法无效或语义不正确。SVA Generator 提出**以数据为核心的自动化框架**：① 基于 AST 的约束注入保证结构一致性；② 自动化监督管道通过去重和约束检查减少幻觉；③ 引入按 AST 深度分层的评估基准（D2–D4），使用**形式化属性等价性检查**（双向蕴含）单独量化语义正确性，将语义评估与语法有效性解耦。
- **关键结果**: 在 D2–D4 层级上语义等价率（SER）比最强通用 LLM 基线平均提升 **22.7 个百分点**（D2 +24.5pp，D3 +26.0pp，D4 +17.5pp），语法通过率相当。
- **亮点**: 今日为 ICCAD 2026 截稿日，ICCAD 截稿前一天（4月13日）发布的 AI for EDA 验证论文；与本月同方向的 ChatSVA（DAC'26）、CoverAssert、AgileAssert、FVRuleLearner、QiMeng-CodeV-SVA 共同构成 2026 年 AI 驱动 SVA 生成六强格局，SVA 验证成为 2026 最活跃 EDA 细分方向之一。形式等价检查评估基准是本文的方法论创新亮点。

#### 2. CapBench（DAC 2026）— 首个多 PDK 后布局电容提取 ML 基准，10 种基线模型系统评测

- **arXiv**: https://arxiv.org/abs/2604.11202
- **投稿日期**: 2026-04-13（cs.AR）
- **会议**: DAC 2026（第 63 届 ACM/IEEE DAC）接收
- **作者**: Hector R. Rodriguez, Jiechen Huang, Wenjian Yu
- **摘要**: 后布局寄生参数提取（尤其是电容）是决定芯片最终 PPA 的关键步骤，机器学习方法受限于缺乏高质量公开数据集。CapBench 构建首个**完全可复现的多 PDK 电容提取数据集**：基于开源设计（单核 CPU、SoC、媒体加速器），经 14 次独立 OpenROAD 流程完成布局布线，覆盖 **ASAP7、NanGate45、Sky130HD** 三种工艺节点，提取 **61,855 个三维版图窗口**（三种尺寸等级支持迁移学习），电容标注由 RWCap 生成并经 Raphael 工业验证（总电容 MAE 仅 0.64%），同时提供密度图、图表示、点云三种数据格式。
- **关键结果**: 系统评测 10 种 ML 架构：CNN 误差最低（**1.75%**），GNN 速度最快（快达 **41.4×**，但误差 10.2%），揭示精度-速度核心权衡。数据集与代码完全开源。
- **亮点**: DAC 2026 接收；开源全链路依托 OpenROAD 生成数据，与 R2G（CVPR 2026，RTL-to-GDSII 多视角 GNN 基准）形成互补，共同推进物理设计 ML 数据基础设施建设。对研究 GNN for Physical Design 的团队，CapBench 是今年 DAC 的重要数据集论文。

---

## 🌐 行业动态（2026-04-14）

### 🚨 ICCAD 2026 论文截止今日（AoE 23:59）

- **截止日期**: 2026-04-14（周二，23:59 AoE，即北京时间 4月15日 7:59）
- **背景**: IEEE/ACM ICCAD 2026（第 65 届，11月8-12日，San Jose）完整论文截止。近两日预印本爆发已确认（4月13日出现 SVA Generator、CapBench 等新论文）。录用通知预计 2026-07-11，**DAC 程序明后天（4月17日）公布**。
- **预测**: 截稿日后（4月15-16日）预计将出现新一轮预印本集中发布，关注布局布线、时序优化、Agentic EDA 方向。

### 📡 OpenClaw for FPGA 直播（明日 4月16日 19:00）

- **链接**: https://www.eetrend.com/content/2026/100600150.html
- **时间**: 2026-04-16（周三）19:00–20:30，贸泽电子「芯英雄联盟」直播间
- **嘉宾**: 华南理工大学副教授**赖晓铮**
- **主题**: 「用龙虾进行芯片及FPGA开发」
- **核心议题**:
  1. Agent 设计 RTL，除了对话还有什么新进展？
  2. Agent 做 RTL 验证有哪些突破？
  3. Agent 时代下，工程师和学生如何应对行业变化？
- **意义**: OpenClaw 是浙大卓成团队开源的 AI Agent EDA 执行框架（FluxEDA 的上层任务编排"大脑"），该直播将展示 OpenClaw 在 FPGA 设计全流程自动化的最新进展；同济 RTL-CLAW 也基于 OpenClaw 构建，这场直播代表了 OpenClaw 生态在 FPGA 方向的最新拓展。

### 🏆 MLCAD 2026 竞赛进入关键阶段（报名已关闭，Alpha 4月30日截止）

- **链接**: https://asu-vda-lab.github.io/MLCAD26-Contest/
- **更新时间**: 2026-04-10（最新更新）
- **核心内容**:
  - 报名已于 **4月10日正式关闭**，共 **46 支队伍**成功注册（含 UCSD、复旦大学、上海交通大学、香港中文大学、东京大学等）
  - 任务：用 LLM/Agent 工作流修改 **OpenROAD 内部算法**，实现"设计感知"时序优化（布局合法化后+全局布线后），平衡功耗、可布通性与运行时间
  - **Alpha 阶段提交**: 4月30日 → Beta 三轮（5月5日、5月15日、5月25日）→ 结果公布 6月15日 → 论文提交 7月25日
  - 中国高校（复旦、交大、港中文）均有参赛，与国际顶校同台竞技

### 🌐 Agent4Chip Workshop @ ICLR 2026（4月23-27日，里约热内卢）进入倒计时

- **链接**: https://ai4eda-workshop.github.io/2026/
- **时间**: 2026-04-23~27（ICLR 2026 主会同期）
- **核心内容**:
  - 23篇接收论文全部为 AI for EDA 核心方向
  - 重点关注：**PRO-V-R1**（RTL 验证推理增强 Agent）、**ASPEN**（E-Graph 重写数据通路优化）、**GACO**（图增强 HLS 代码优化）、**EDAForge**（模拟电路合成多智能体）
  - 距今仅 9 天，论文全部可在 arXiv 预读

---

## 📌 待追踪（下次更新关注）

- **ICCAD 2026 截稿后预印本爆发（4月15-16日）**：预计新一批 AI for EDA 论文将集中公开
- **DAC 2026 程序公布（4月17日）**：关注 AI for EDA 专场完整入选情况（已知 ChatSVA、R2G、CellE、GSR-GNN、Escaping Flatland、GEMM-GS 等均已接收）
- **OpenClaw for FPGA 直播（明日 4月16日 19:00）**：赖晓铮教授，OpenClaw for FPGA 最新进展
- **Agent4Chip Workshop @ ICLR 2026（4月23-27，里约）**：现场论文展示与 Q&A
- **MLCAD 2026 竞赛 Alpha 阶段（4月30日）**：46支队伍参赛，LLM 驱动 OpenROAD 时序优化
- **CapBench 数据集开放下载**（arXiv:2604.11202）：验证三种 PDK 的开源 pipeline

---

## 📅 2026-03-29 / 2026-03-26 / 2026-03-19（补漏批次：3 篇）

| #   | 标题                                                                                                                                                            | 类别                                   | arXiv                                          | 本地文件                                                                                                                            |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **RTLSeek: Boosting the LLM-Based RTL Generation with Multi-Stage Diversity-Oriented Reinforcement Learning**                                                   | RTL生成 / 多样性强化学习 / RTLLM基准             | [2603.27630](https://arxiv.org/abs/2603.27630) | [PDF](./2026-03-29/2603.27630-RTLSeek-RL-RTL-Generation-Diversity.pdf)                                                            |
| 2   | **UCAgent: An End-to-End Agent for Block-Level Functional Verification**                                                                                        | RTL验证 / 端到端Agent / 功能覆盖率 / Picker-Toffee | [2603.25768](https://arxiv.org/abs/2603.25768) | [PDF](./2026-03-26/2603.25768-UCAgent-EndToEnd-IC-Functional-Verification.pdf)                                                    |
| 3   | **POET: Power-Oriented Evolutionary Tuning for LLM-Based RTL PPA Optimization**                                                                                 | RTL PPA优化 / 进化调优 / 差分测试              | [2603.19333](https://arxiv.org/abs/2603.19333) | [PDF](./2026-03-19/2603.19333-POET-Power-Oriented-Evolutionary-RTL-PPA.pdf)                                                       |

---

## 📋 论文摘要速览（补漏批次）

### 🏆 重点推荐

#### 1. RTLSeek — 多样性导向强化学习三阶段 RTL 后训练范式，RTLLM 基准超越 SOTA

- **arXiv**: https://arxiv.org/abs/2603.27630
- **投稿日期**: 2026-03-29（cs.AR + cs.LG）
- **作者**: Xinyu Zhang, Zhiteng Chao, Yonghao Wang, Bin Sun, Tianyun Ma, Tianmeng Yang, Jianan Mu, Jing Justin Ye, Huawei Li（华为团队）
- **摘要**: LLM 辅助 RTL 生成受限于功能可验证高质量数据稀缺，现有后训练方法对每个规格仅生成**单一 HDL 实现**，缺乏多设计目标 RTL 变体意识。RTLSeek 提出后训练范式：①**基于规则的多样性导向强化学习（DORL）**提升正确性与多样性；②**多样性中心多目标奖励调度**融合专家知识与 EDA 工具反馈；③**三阶段训练框架**最大化有限数据利用率。核心发现："生成越多，效果越好"——鼓励更广设计空间探索能持续提升质量。
- **关键结果**: 在 **RTLLM 基准**上超越所有先前方法；消融实验证实多样性探索是质量提升的关键驱动力；数据集、源代码、模型权重完全开源。
- **亮点**: 将 RL 的多样性探索原则引入 RTL 生成微调，与 CODMAS（辩证多智能体优化）、VeriAgent（进化记忆 PPA）形成互补的三大 RTL 后训练路线；3月底提交，补漏收录。

#### 2. UCAgent — 31阶段细粒度 IC 功能验证 Agent，UART/FPU 达 100% 功能覆盖率

- **arXiv**: https://arxiv.org/abs/2603.25768
- **投稿日期**: 2026-03-26（cs.SE + cs.AR + cs.AI）
- **作者**: Junyue Wang 等 9 人
- **摘要**: 功能验证占 IC 开发 70% 时间，LLM 应用面临三大挑战：验证代码生成准确率低、多步工作流脆弱、规格-覆盖模型-测试用例一致性难维护。UCAgent 三大机制：①**纯 Python 验证环境**（Picker + Toffee 工具），规避 LLM 生成 SystemVerilog 代码的不可靠性；②**31阶段细粒度验证工作流**，每阶段配自动检查器；③**VCLM 验证一致性标注机制**，对 LLM 生成内容分层标注提升可追溯性。
- **关键结果**: UART、FPU、整数除法器模块：代码覆盖率最高 **98.5%**、功能覆盖率最高 **100%**；在真实设计中发现此前未识别缺陷。
- **亮点**: 验证工作流精细化（31阶段）是本文核心工程亮点；与 AgileAssert 的"精准断言"和 CoverAssert 的"覆盖率驱动"形成差异化——UCAgent 专注验证流程自动化，而非断言质量优化。

#### 3. POET — 差分测试驱动功能正确性保障 + LLM 进化功耗优化，40 设计全部最优功耗

- **arXiv**: https://arxiv.org/abs/2603.19333
- **投稿日期**: 2026-03-19（cs.AR + cs.AI）
- **作者**: Heng Ping, Peiyu Zhang, Zhenkun Wang, Shixuan Li, Anzhe Cheng, Wei Yang, Paul Bogdan, Shahin Nazarian
- **摘要**: LLM 优化 RTL PPA 面临两大挑战：① 消除幻觉保证功能正确性；② 多目标 PPA 权衡中优先降低功耗。POET 双管齐下：**差分测试生成 Testbench**（以原始设计为功能 oracle，确定性仿真生成黄金参考，消除 LLM 幻觉验证干扰）+ **LLM 驱动进化机制**（非支配排序 + 功耗优先级内排名 + 比例幸存者选择），无需手动权重调整即可将搜索引向 Pareto 前沿低功耗区域。
- **关键结果**: RTL-OPT 基准 **40 个设计全部功能正确（100%）**，**40/40 达最优功耗**，面积与延迟同样具有竞争力。
- **亮点**: 差分测试作为 functional oracle 的思路优雅解决了 LLM 幻觉验证问题；与 CODMAS（关键路径优化 25%）、VeriAgent（PPA 闭环）共同构成 2026 年 RTL PPA 优化三大框架。

---

## 🌐 行业动态（补漏批次）

### 📊 ICCAD 2026 截稿今日，预印本爆发预期

今日（2026-04-14）为 ICCAD 2026 完整论文截稿日（AoE 23:59）。本批补漏论文覆盖 3月19日-29日的 RTL 生成/优化/验证方向未收录论文，与同期发布的 AgileAssert、R2G、VeriAgent、CODMAS、AutoVeriFix+、SiliconMind-V1 共同构成 3月下旬 AI for EDA 的完整图景。截稿后（4月15日起）预计将有新一批预印本集中发布。

---

## 📅 2026-04-13（本次更新：2 篇）

| #   | 标题                                                                                                                                                                         | 类别                                 | arXiv                                          | 本地文件                                                                                                                |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 1   | **From Indiscriminate to Targeted: Efficient RTL Verification via Functionally Key Signal-Driven LLM Assertion Generation**                                                  | RTL验证 / 关键信号识别 / LLM断言生成 / ABV      | [2604.08932](https://arxiv.org/abs/2604.08932) | [PDF](./2026-04-13/2604.08932-AgileAssert-RTL-Verification-Key-Signal-Assertion.pdf)                                  |
| 2   | **R2G: A Multi-View Circuit Graph Benchmark Suite from RTL to GDSII**                                                                                                        | GNN基准 / 物理设计 / 拥塞预测 / CVPR 2026    | [2604.08810](https://arxiv.org/abs/2604.08810) | [PDF](./2026-04-13/2604.08810-R2G-MultiView-Circuit-Graph-Benchmark-RTL-GDSII.pdf)                                    |

---

## 📋 论文摘要速览（2026-04-13）

### 🏆 重点推荐

#### 1. AgileAssert — 关键信号驱动精准断言生成，断言数量减少 66.68%，Token 消耗降低 64%

- **arXiv**: https://arxiv.org/abs/2604.08932
- **投稿日期**: 2026-04-10（cs.AR）
- **作者**: Yonghao Wang, Hongqin Lyu, Boling Chen, MinYang Bao, Wenchao Ding, Feng Gu, Zhiteng Chao, Jianan Mu, Kan Shi, Tiancheng Wang, Huawei Li（共11位，华为等）
- **摘要**: 功能验证已成为 IC 开发中最耗时的阶段，现有 LLM 断言生成追求"盲目验证"——不考虑信号关键性、最大化覆盖率，而工业实践要求"最小验证成本下最大覆盖率"。AgileAssert 提出**关键信号驱动的断言生成框架**：① 构建 RTL 语义图；② 通过混合评分机制识别 Top-K 关键信号；③ 结构感知 RTL 切片为 LLM 提供精确上下文；④ 引导 LLM 生成紧约束精准断言。
- **关键结果**: 断言数量减少 **66.68%**，输入 token 消耗降低 **64%**，突变错误检测断言使用量减少 **72.74%**，超越 3 个 SOTA 方法。
- **亮点**: 精准 vs. 盲目验证的范式转变，RTL 语义图 + 关键信号识别是理论创新核心；与同期 ChatSVA、CoverAssert、FVRuleLearner 共同构成 2026 年 AI 驱动硬件验证四强格局。

#### 2. R2G（CVPR 2026）— 首个 RTL-to-GDSII 多视角电路图基准，解锁 GNN 物理设计研究瓶颈

- **arXiv**: https://arxiv.org/abs/2604.08810
- **投稿日期**: 2026-04-09（cs.CV + cs.LG）
- **作者**: Zewei Zhou, Jiajun Zou, Jiajia Zhang, Ao Yang, Ruichao He, Haozheng Zhou, Ao Liu, Jiawei Liu, Leilei Jin, Shan Shen, Daying Sun（共11位）
- **摘要**: GNN 被越来越多地用于拥塞预测、线长估计等物理设计任务，但由于电路表示不一致和缺乏受控评估协议，进展受阻。R2G 标准化5种阶段感知视角（信息对等性），覆盖 30 个开源 IP 核（规模达 10⁶ 节点/边），提供端到端 DEF-to-Graph 流程（综合→布局→布线），通过解耦表示选择与模型选择消除先前基准混淆因素。
- **关键结果**: 视角选择主导模型选择（R² 差异 >0.3）；节点中心视角泛化最强；3-4 层解码器头可使 **R² > 0.99**；代码与数据集完全开源。
- **亮点**: CVPR 2026（顶级视觉会议）接收，标志着电路图基准正式进入计算机视觉顶会视野；首个统一合成-布局-布线三阶段视角的 EDA GNN 基准，有望成为 EDA × GNN 研究的新标准数据集。

---

## 🌐 行业动态（2026-04-13）

### 🚨 ICCAD 2026 完整论文截止（明日 4月14日 AoE）

- **截止日期**: 2026-04-14（AoE，即 UTC+12 午夜）
- **核心内容**: IEEE/ACM ICCAD 2026（第65届，11月8-12日，San Jose）完整论文截止在即。今日仍有预印本继续发布（AgileAssert、R2G 均在截稿前最后48小时发布）。预计明日（周二）将有更多预印本集中爆发。

### 🏆 MLCAD 2026 竞赛：LLM 驱动时序优化 · Alpha 截止 4月30日

- **链接**: https://asu-vda-lab.github.io/MLCAD26-Contest/
- **核心内容**: ASU VDA Lab 主办，基于 **OpenROAD 开源代码**，挑战"设计自适应时序优化工具——用 LLM/Agent 工作流发现、生成或演进优化方案"，平衡功耗、可布线性与运行时。Alpha 提交 4月30日，结果公布 6月15日，NVIDIA GPU 奖励。

### 📡 OpenClaw for FPGA 直播（明日 4月16日）

- 华南理工大学赖晓铮教授将于 4月16日进行 OpenClaw for FPGA 系列技术直播，展示 AI 智能体驱动 FPGA 设计流程的最新进展。

---

## 📌 待追踪（下次更新关注）

- **ICCAD 2026 截稿后预印本爆发（4月14日后）**：预计周二将有大量 AI for EDA 论文集中发布
- **DAC 2026 程序公布（4月17日）**：关注 AI for EDA 专场完整入选情况
- **OpenClaw for FPGA 直播（4月16日）**：赖晓铮教授，OpenClaw 生态进展
- **Agent4Chip Workshop @ ICLR 2026（4月23-27，里约热内卢）**：23篇论文现场展示
- **AgileAssert（arXiv:2604.08932）开源计划**：RTL 语义图代码是否开放
- **R2G（CVPR 2026）数据集**：GitHub 完整数据集，与 CircuitNet 对比

---

## 📅 2026-04-11（本次更新：5 篇）

| #   | 标题                                                                                                                                                                     | 类别                              | arXiv                                          | 本地文件                                                                                                                |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 1   | **ChatHLS: Towards Systematic Design Automation and Optimization for High-Level Synthesis**                                                                              | HLS自动化 / 多智能体 / QoR优化 / ACL 2026 | [2507.00642](https://arxiv.org/abs/2507.00642) | [PDF](./2026-04-11/2507.00642-ChatHLS-LLM-HLS-Design-Automation.pdf)                                                 |
| 2   | **FILCO: Flexible Composing Architecture with Real-Time Reconfigurability for DNN Acceleration**                                                                         | DNN加速器 / 可重构架构 / DSE / 7nm FPGA  | [2604.07523](https://arxiv.org/abs/2604.07523) | [PDF](./2026-04-11/2604.07523-FILCO-Flexible-Composing-DNN-Accelerator.pdf)                                           |
| 3   | **Trilinear Compute-in-Memory Architecture for Energy-Efficient Transformer Acceleration**                                                                               | CIM / FeFET / Transformer加速 / 存内计算 | [2604.07628](https://arxiv.org/abs/2604.07628) | [PDF](./2026-04-11/2604.07628-TrilinearCIM-FeFET-Transformer-CIM.pdf)                                                 |
| 4   | **SHIELD: A Segmented Hierarchical Memory Architecture for Energy-Efficient LLM Inference on Edge NPUs**                                                                 | 边缘NPU / LLM推理 / eDRAM能效 / 分层内存  | [2604.07396](https://arxiv.org/abs/2604.07396) | [PDF](./2026-04-11/2604.07396-SHIELD-Segmented-Hierarchical-Memory-EdgeNPU-LLM.pdf)                                   |
| 5   | **The Hyperscale Lottery: How State-Space Models Have Sacrificed Edge Efficiency**                                                                                       | SSM / Mamba / 边缘AI / 架构效率分析     | [2604.07935](https://arxiv.org/abs/2604.07935) | [PDF](./2026-04-11/2604.07935-HyperscaleLottery-SSM-Edge-Efficiency.pdf)                                              |

---

## 📋 论文摘要速览（2026-04-11）

### 🏆 重点推荐

#### 1. ChatHLS（ACL 2026）— 多智能体 HLS 设计框架，调试能力较 Gemini-3-pro 提升 32.6%

- **arXiv**: https://arxiv.org/abs/2507.00642
- **投稿日期**: 2026年（ACL 2026 Main Conference 接收）
- **作者**: Runkai Li, Jia Xiong, Xiuyuan He, Jieru Zhao, Jiaqi Lv, Haowen Fang, Lei Qi, Xi Wang
- **摘要**: 高层次综合（HLS）通过支持类 C 语言进行硬件设计提高了 IC 开发效率，但严格的可合成性规则和特定设计的指令优化限制了其广泛采用。现有 LLM 工作往往难以处理可合成性规则和指令语义。ChatHLS 提出**多智能体 HLS 设计框架**，利用专门化 LLM 完成自动化调试和指令调优：① **自适应错误案例扩展机制**（自动分类 HLS 错误案例）；② **推理到指令分析方法**（精准诊断错误根因）；③ **QoR 感知推理**（学习 HLS 指令对质量的影响并优化）。
- **关键结果**: 相比 Gemini-3-pro，调试能力提升 **32.6%**；在多种 HLS 内核和神经网络加速器上实现显著性能加速。
- **亮点**: ACL 2026（NLP 顶会主会场）接收，标志着 HLS 设计自动化进入自然语言处理顶会视野；LLM 与 HLS 指令语义的深度融合，是继 IBM Agent Factory for HLS（8.27×加速）之后又一 HLS+AI 重量级成果。

#### 2. TrilinearCIM — 零重编程 FeFET 三线性存内计算，Transformer 加速能耗降低 46.6%

- **arXiv**: https://arxiv.org/abs/2604.07628
- **投稿日期**: 2026-04-08（cs.AR + cs.ET + cs.NE）
- **作者**: Md Zesun Ahmed Mia, Jiahui Duan, Kai Ni, Abhronil Sengupta（Penn State University）
- **摘要**: Transformer 自注意力机制产生动态操作数，迫使传统存算一体（CIM）加速器进行高成本的非易失性存储器（NVM）重编程循环。TrilinearCIM 基于双栅极 FeFET（DG-FeFET），利用**背栅调制**实现**三操作数乘累加原语**，在内存中完成注意力计算，**无需动态铁电重编程**。
- **关键结果**: 相比传统 FeFET CIM：能耗降低 **46.6%**，延迟改善 **20.4%**，面积开销仅 **37.3%**；在 BERT-base/ViT-base 上验证，9 项 GLUE 任务中 7 项优于传统 CIM。
- **亮点**: 首个在 NVM 核心中完全完成 Transformer 注意力计算而无需运行时重编程的架构，对边缘 AI 加速器能效突破意义重大。

---

### 📊 其他重要论文

#### 3. FILCO — 实时可重构 DNN 加速器，7nm AMD Versal 上吞吐提升 1.3×–5×

- **arXiv**: https://arxiv.org/abs/2604.07523
- **投稿日期**: 2026-04-08（cs.AR）
- **作者**: Xingzhen Chen, Jinming Zhuang, Zhuoping Yang, Shixin Ji, Sarah Schultz, Zheng Dong, Weisong Shi, Peipei Zhou
- **核心内容**: 专用加速器与多样化 DNN 工作负载之间存在不匹配，现有叠加架构灵活性粒度受限。FILCO 提出灵活组合架构，可实时重构为统一加速器或多个独立加速器，配套两阶段 DSE 框架搜索最优设计点，在 7nm AMD Versal VCK190 开发板上验证，相比先前工作吞吐量提升 **1.3×–5×**。
- **亮点**: 7nm 先进工艺节点实验验证；可重构粒度创新解决 AI 工作负载多样性问题，与 SkipOPU（动态计算分配）思路互补。

#### 4. SHIELD — 边缘 NPU LLM 推理分层内存，eDRAM 刷新能耗降低 35%

- **arXiv**: https://arxiv.org/abs/2604.07396
- **投稿日期**: 2026-04-08（cs.AR, cs.LG）
- **作者**: Jintao Zhang, Xuanyao Fong
- **核心内容**: 针对边缘 NPU 上 LLM 推理的 eDRAM 刷新能耗问题，SHIELD 提出**生命周期感知的 BF16 激活值分段方案**（Segmented Hierarchical Memory），对瞬态张量禁用/放宽刷新，eDRAM 刷新能耗降低 **35%**，保持准确性不变。
- **亮点**: 无需修改模型架构；与 FILCO/TrilinearCIM 共同覆盖边缘 AI 硬件设计全谱系；推动 LLM 端侧部署实用化。

#### 5. Hyperscale Lottery — SSM 为 GPU 吞吐牺牲边缘效率，Mamba-3 延迟恶化最高 48%

- **arXiv**: https://arxiv.org/abs/2604.07935
- **投稿日期**: 2026-04-08（cs.AR）
- **作者**: Robin Geens 等
- **核心内容**: 揭示"超大规模彩票"现象：AI 模型架构为饱和 GPU 吞吐量而优化，代价是边缘推理效率大幅下降。以 Mamba-3 为例，880M 参数规模边缘延迟增加 **28%**，15M 参数小模型恶化至 **48%**。
- **亮点**: 对 SSM/Mamba 系列在边缘 NPU 部署的系统警示；提示未来 AI 硬件架构协同设计（Hardware-Software Co-Design）需更关注端侧效率。

---

## 🌐 行业动态（2026-04-11）

### 🔥 Siemens × NVIDIA Veloce proFPGA CS — 万亿级预硅验证突破（2026-04-09~10）

- **链接**: https://news.siemens.com/en-us/siemens-nvidia-veloce/
- **时间**: 2026-04-09（西门子官方发布）
- **核心内容**:
  - 西门子与 NVIDIA 宣布重大验证技术突破：**Veloce™ proFPGA CS 硬件辅助验证系统**结合 NVIDIA 性能优化芯片架构，实现数天内捕获**数万亿次预硅设计周期**
  - 传统仿真/模拟工具无法在合理时间内扩展到运行数十亿周期以上，此次突破直接将规模提升至万亿级
  - 适用范围：从单 FPGA IP 验证到**数十亿门 Chiplet 设计**
  - NVIDIA 硬件工程 VP Narendra Konda：「AI 和计算架构日益复杂，半导体团队需要高性能验证解决方案来验证海量工作负载并加速上市时间」
  - 这是两家公司 2026 年第三次重要合作（1月 CES → 3月 GTC Fuse EDA AI Agent → 4月 Veloce proFPGA CS）

### 🆕 Cadence ChipStack AI Super Agent 深度解析 — "设计心理模型"驱动 10× 验证效率（2026-04-03）

- **链接**: https://www.eejournal.com/fish_fry/chipstack-ai-super-agent-cadences-new-era-for-silicon-verification/
- **时间**: 2026-04-03（EEJournal Fish Fry 播客深度解析）
- **核心要点**:
  - Cadence ChipStack AI Super Agent 为**协调多个专业智能体的编排系统**，其核心是构建对设计的「结构化心理模型（Mental Model）」作为单一事实来源
  - 支持多模态输入：设计文档、Verilog 代码、图表、白板图像
  - **三大优势**：更快速有效验证、验证"左移"（让非专家更早执行高质量验证）、培养下一代工程师
  - Altera（英特尔旗下）工程高级总监：「验证工作量大幅缩减约 10 倍」
  - 关键洞察：HDL 数据在典型 LLM 训练数据中占比不到 **0.1%**，领域专用微调是关键
  - 已在 Altera、NVIDIA、Tenstorrent 早期部署

### 🚀 ICCAD 2026 论文提交截止在即（2026-04-14）

- **链接**: https://iccad.com/2026/authors/call-for-papers
- **时间**: 截止 2026-04-14（周二，23:59 AoE）
- **核心内容**: IEEE/ACM ICCAD 2026（第 65 届，11月8-12日，San Jose, CA）论文提交即将截止。本届大会涵盖 AI for EDA 全谱系：从设备级物理到系统级 AI，包括布局布线、形式化验证、RTL 综合、时序分析等方向。预计本周将有大量 arXiv 预印本爆发（作者在提交前公开）。
- **DAC 2026 亮点**：地点长滩加州，7月26-29日；主旨演讲含 John Martinis（2025诺贝尔物理奖）、高通 CTO Dr. Baaziz Achour；ChipAgents.ai、Ricursive Intelligence、Bronco AI 为白金赞助商；NVIDIA Timothy Costa 受邀 SkyTalk

---

## 🇨🇳 国内动态（2026-04-11）

### 浙大卓成团队 FluxEDA — 有状态 Agentic EDA 基础设施，Post P&R ECO 自主完成时序收敛（2026-04-06）

- **链接**: https://arxiv.org/abs/2603.25243 | [新智元报道](https://news.qq.com/rain/a/20260406A03OGL00)
- **时间**: 2026-03-26（arXiv）；2026-04-06（新智元报道）
- **核心内容**:
  - 浙大卓成团队（依托吴汉明院士 12 英寸 CMOS 中试平台）提出 **FluxEDA**——有状态 Agentic EDA 统一执行基础设施
  - 架构：**OpenClaw（任务编排"大脑"）+ FluxEDA（执行"神经系统"）**，打通 TCL gateway、Socket RPC、SDK、CLI 到 MCP Server 完整链路
  - 安全机制：MCP + Skill 能力沙箱，仅暴露预声明原子接口
  - **验证案例一**：Post P&R 自动 ECO，Setup TNS 从 -37.36 提升至 -34.78，Hold 违例从 4 条降为 **0 条**
  - **验证案例二**：标准单元子库优化，Cell 种类从 128 种压缩至 30 种（**压缩 76%**），面积从 14651 缩减至 13659
  - 技术路线：后续将集成 DreamPlace/OpenROAD 后端流程，向 3D IC 方向拓展
- **意义**: 国内首个在**商业级 EDA 工具真实环境**中完成多步自主闭环的 Agentic EDA 基础设施，是"从脚本到 Agent"范式转变的工程化落地

### 同济大学 RTL-CLAW — AI Agent 一句话驱动集成电路设计全流程（2026-04-04）

- **链接**: https://see.tongji.edu.cn/info/1143/14621.htm
- **时间**: 2026-04-04（同济大学电信学院发布）
- **核心内容**:
  - 同济大学叶雨阳、贺青、邱雷团队 + 香港中文大学余备团队联合发布 **RTL-CLAW**
  - 基于 **OpenClaw 框架**（浙大卓成组开源智能体操作系统）构建，专为芯片设计领域训练
  - 插件化架构集成 Yosys、Verilator 等开源工具及商业工具
  - 功能：RTL 分析/分区/优化、UVM 测试环境生成、Yosys 综合（支持 ASAP7 工艺库）
  - 后续规划：集成 DreamPlace/OpenROAD 后端流程，向 3D IC 拓展
- **意义**: OpenClaw 已成为国内 AI for EDA 基础设施的重要开源平台，浙大/同济双团队联动形成生态效应

---

## 🌐 行业动态（2026-04-11 补充）

### 🔥 Intel 加入 Elon Musk Terafab：年产 1TW 算力芯片制造，芯片制造格局重塑（2026-04-10）

- **链接**: https://semiengineering.com/chip-industry-week-in-review-133/
- **时间**: 2026-04-10（SemiEngineering 周报）
- **核心内容**:
  - **Intel 正式加入 Terafab 项目**（Elon Musk 主导），合作方：Tesla、SpaceX、xAI
  - 目标：年产 **1 TW（太瓦）算力**，用于 AI 和机器人应用
  - Intel 角色：帮助重构硅晶圆厂技术（refactor silicon fab technology）
  - 同期：Intel 与 Google 多年期合作扩展——Xeon 为 Google Cloud 供电 + 定制 ASIC IPU 联合研发
  - Broadcom 为 Google 开发下一代 TPU，Anthropic/Google/Broadcom 预订多千兆瓦产能（2027年，美国本土）
- **意义**: 万亿晶体管时代，主流代工厂与科技巨头垂直整合制造布局，AI 算力生产本土化提速

### 🏆 IIC Shanghai 2026 EDA/IP 论坛：四大趋势 + Cadence Agentic AI 全面亮相（2026-04-07）

- **链接**: https://iic.eet-china.com/iic-sh2026/eda.html | [Cadence 专场](https://www.sohu.com/a/1004821478_166680)
- **时间**: 2026-04-07~08（IIC Shanghai 2026 EDA/IP 论坛）
- **核心内容**:
  - **四大 EDA 趋势**：① AI 驱动 RTL-to-GDS 全流程智能化；② 先进封装/Chiplet 设计范式（2.5D/3D）；③ Agentic AI"虚拟工程师"矩阵；④ 系统级设计与协同优化
  - **Cadence 展示**：ChipStack™ AI Super Agent（10× 验证效率）、JedAI 平台（统一 AI 能力调度）、Virtuoso AI 增强（模拟设计节点迁移）、Integrity 3D-IC 平台（AI 互连布局优化）
  - **国产 IP 亮点**：赛昉科技 StarNoC 一致性片上网络（RISC-V 高性能 SoC 国产填补空白）；珠海硅芯科技 3Sheng EDA 平台（自研先进封装设计流程）
  - **AI 三阶段演进洞察**（Cadence 陈会馨）：Infrastructure AI → Physical AI（机器人/自驾）→ Sciences AI

---

## 📌 待追踪（下次更新关注）

- **ICCAD 2026 论文提交截止（4月14日，仅剩3天）**：预印本爆发期，关注布局布线、时序收敛、形式化验证、Agentic EDA
- **DAC 2026 程序公布（4月17日）**：关注 AI for EDA 专场完整入选情况
- **OpenClaw for FPGA 直播（4月16日，华南理工赖晓铮教授）**
- **Agent4Chip Workshop @ ICLR 2026（4月23-27，里约热内卢）**：23篇论文现场展示，PRO-V-R1、ASPEN、GACO 等
- **Intel Terafab** 详细技术路线与进展
- **Siemens Veloce proFPGA CS** 大规模商业落地客户名单披露
- **RTL-CLAW（同济）+ FluxEDA（浙大）** GitHub 开源计划
- **ChatHLS（ACL 2026）** 代码开源

---

## 📅 2026-04-10（本次更新：4 篇）

| #   | 标题                                                                                                                                                                            | 类别                          | arXiv                                          | 本地文件                                                                                                                |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 1   | **From LLM to Silicon: RL-Driven ASIC Architecture Exploration for On-Device AI Inference**                                                                                     | RL / ASIC架构探索 / 端侧AI推理 / DSE | [2604.07526](https://arxiv.org/abs/2604.07526) | [PDF](./2026-04-10/2604.07526-RL-ASIC-Architecture-Exploration-OnDevice-AI.pdf)                                       |
| 2   | **ChatSVA: Bridging SVA Generation for Hardware Verification via Task-Specific LLMs**                                                                                           | SVA生成 / 多智能体 / 硬件验证 / DAC'26 | [2604.02811](https://arxiv.org/abs/2604.02811) | [PDF](./2026-04-10/2604.02811-ChatSVA-SVA-Generation-DAC2026.pdf)                                                     |
| 3   | **Self-Calibrating LLM-Based Analog Circuit Sizing with Interpretable Design Equations**                                                                                        | 模拟电路 / LLM解析方程 / 自校准 / TCASAI | [2604.07387](https://arxiv.org/abs/2604.07387) | [PDF](./2026-04-10/2604.07387-SelfCalibrating-LLM-Analog-Circuit-Sizing.pdf)                                          |
| 4   | **ATLAS: A Full-Stack Performance Evaluation Infrastructure for 3D-DRAM-based LLM Accelerators**                                                                                | 3D-DRAM加速器 / 全栈仿真 / 硅验证 / 开源 | [2604.08044](https://arxiv.org/abs/2604.08044) | [PDF](./2026-04-10/2604.08044-ATLAS-3DDRAM-LLM-Accelerator-Eval.pdf)                                                  |

---

## 📋 论文摘要速览（2026-04-10）

### 🏆 重点推荐

#### 1. From LLM to Silicon — RL 驱动 ASIC 架构探索，7 节点自动适配，Llama 3.1 8B 达 29,809 tokens/s（3nm）

- **arXiv**: https://arxiv.org/abs/2604.07526
- **投稿日期**: 2026-04-08（cs.AR）
- **作者**: Ravindra Ganti, Steve Xu
- **摘要**: 端侧 AI 推理场景中，芯片架构、内存层次、工作负载分区的联合优化极具挑战。本文提出 **RL 驱动编译器**，将三者统一建模为单个 MDP（混合离散-连续动作空间），使用 **Soft Actor-Critic + 混合专家门控（MoE Gating）**，联合搜索 Mesh 拓扑、每核微架构、算子放置，支持 3nm–28nm **7 个工艺节点**自动适配，无需节点特定手工调参。
- **关键结果**: ① Llama 3.1 8B FP16（性能模式）3nm 下 **29,809 tokens/秒**；② SmolVLM（能效模式）所有节点功耗均 **<13 mW**（10 MHz）。
- **亮点**: 将 RL + 编译器协同设计应用于端侧 AI 芯片跨节点架构探索，直接对接 Agentic EDA 后端物理设计自动化目标，是"从 LLM 到硅"端侧芯片设计自动化的新范式。

#### 2. ChatSVA（DAC 2026）— 多智能体 SVA 生成，功能通过率 96.12%，覆盖率提升 11× 新 SOTA

- **arXiv**: https://arxiv.org/abs/2604.02811
- **投稿日期**: 2026-04-03（DAC 2026 接收）
- **作者**: Lik Tung Fu, Jie Zhou, Shaokai Ren, Mengli Zhang, Jia Xiong, Hugo Jiang, Nan Guan, Xi Wang, Jun Yang
- **摘要**: 功能验证占 IC 开发生命周期 50% 以上，SVA 手工编写劳动密集易出错。ChatSVA 提出端到端多智能体框架，核心创新是 **AgentBridge 平台**——系统性生成高纯度 SVA 数据集，解决少样本场景的领域数据稀缺瓶颈，同步解决功能准确性低和数据匮乏两大障碍。
- **关键结果（24 个 RTL 设计）**: 语法通过率 **98.66%**，功能通过率 **96.12%**，每设计生成 SVA **139.5** 条，功能覆盖率 **82.50%**；相比前 SOTA 功能正确性提升 **33.3 个百分点**，功能覆盖率提升 **超过 11×**。
- **亮点**: DAC 2026 接收；本周 SVA 验证方向连续三篇重量级论文（FVRuleLearner、CoverAssert、ChatSVA），标志着 AI 驱动硬件验证正成为 2026 最活跃细分方向之一。

---

### 📊 其他重要论文

#### 3. Self-Calibrating LLM Analog Circuit Sizing — 解析设计方程 + 单次仿真自校准，投稿 IEEE TCASAI

- **arXiv**: https://arxiv.org/abs/2604.07387
- **投稿日期**: 2026-04-08（cs.AR，投稿 IEEE TCASAI）
- **作者**: Antonio J. Bujana, Aydin I. Karsilayan
- **核心内容**: LLM 从原始电路网表直接推导拓扑特定的**解析设计方程**，输出完整 Python 尺寸函数，每个器件尺寸可追溯至特定性能约束。**确定性校准循环**仅需单次晶体管级仿真提取工艺参数；**预测误差反馈**补偿解析模型误差；**零改动跨节点可移植**（180nm + 40nm CMOS 均无需重训练）。
- **关键结果**: 6 OTA 拓扑 × 2 节点全 12 组合 **100% 成功**，11/12 案例 **2–9 次仿真**内收敛。
- **亮点**: 相比现有 AI 驱动方法（调整参数/缩小搜索空间），解析方程方式提供物理可解释性，与 HeaRT（分层推理树）和 EEspice 共同构建模拟 EDA 自动化的三角基础设施。

#### 4. ATLAS — 首个硅验证的 3D-DRAM LLM 加速器全栈仿真框架，开源计划公布

- **arXiv**: https://arxiv.org/abs/2604.08044
- **投稿日期**: 2026-04-09（cs.AR）
- **作者**: Cong Li 等 14 位作者
- **核心内容**: ATLAS（Architectural Three-dimensional-DRAM-based LLM Accelerator Simulation）是**首个经商用硅片验证的开放全栈仿真框架**，引入统一抽象涵盖 3D 加速器系统架构和编程原语，通过双阶段网络抽象、瓦片级计算-通信重叠等技术，在 2.5×10¹⁴ 设计点上高效搜索。
- **关键结果**: 仿真误差 **≤8.57%**，与实测相关性 **97.26%–99.96%**；相比最先进仿真器运行速度快 **100,000 倍**；DSE 可将吞吐量提升高达 **9.5×**。开源计划明确。
- **亮点**: 与同期 DeepStack（2604.04750）共同构建 3D 堆叠加速器开源 DSE 基础设施，弥补学术界长期依赖闭源模拟器的空白。

---

## 🌐 行业动态（2026-04-10）

### 🔥 Cognichip 完成 $6000 万融资，英特尔 CEO Lip-Bu Tan 跟投加入董事会（2026-04-01）

- **链接**: https://techcrunch.com/2026/04/01/cognichip-wants-ai-to-design-the-chips-that-power-ai-and-just-raised-60m-to-try/
- **时间**: 2026-04-01（TechCrunch 报道）
- **核心内容**:
  - AI for Chip Design 初创公司 Cognichip 完成 **$6000 万融资**（Seligman Ventures 领投），英特尔 CEO **Lip-Bu Tan 个人跟投并加入董事会**
  - 公司自 2024 年成立以来累计融资 **$9300 万**
  - 核心定位：基于芯片设计数据训练的**专用 AI 模型**（非通用 LLM），宣称降低开发成本 75%、缩短周期 50%
  - 数据策略：合成数据集 + 安全授权训练（不泄露合作伙伴 IP）+ 开源 RISC-V 验证
  - 竞争格局：Cognichip、ChipAgents（$7400 万 A 轮）、Ricursive（$3.35 亿 A 轮）三家 AI for Chip Design 创企 2026 Q1 融资总额超 **$4.7 亿**

### 🆕 IBM Agent Factory for HLS — 通用 Agent 无需领域训练，HLS 优化平均加速 8.27×（2026-03-31）

- **链接**: https://arxiv.org/abs/2603.25719
- **时间**: 2026-03-26（arXiv），2026-03-31（SemiEngineering 报道）
- **核心内容**:
  - IBM Research 验证通用编程 Agent（Claude Code Opus 4.5/4.6 + AMD Vitis HLS）在硬件优化中的能力边界
  - 两阶段流水线：子内核分解 + ILP 全局配置 → N 个专家 Agent 并行跨函数优化（循环融合、内存重构、编译指示重组）
  - 12 个 HLS 基准（HLS-Eval + Rodinia-HLS），1→10 Agent 扩展
  - **平均加速 8.27×**，streamcluster 超 **20×**
  - 重要发现：ILP 最优≠最终最佳，跨函数优化价值巨大，扩展 Agent 数量持续有效

---

## 📌 待追踪（下次更新关注）

- **ICCAD 2026 完整论文截止（4月14日，仅剩4天）**：预印本爆发期，关注布局布线、时序收敛、Agentic EDA
- **DAC 2026 程序公布（4月17日）**：关注 AI for EDA 专场完整入选情况
- **Agent4Chip Workshop @ ICLR 2026（4月23-27，里约）**：23 篇论文现场展示，PRO-V-R1、ASPEN、GACO 等
- **ChatSVA AgentBridge 开源计划**（DAC 2026 接收）
- **RL-ASIC 编译器代码开源**（arXiv:2604.07526）
- **ATLAS 开源发布时间表**（arXiv:2604.08044）
- **Cognichip 首款可展示 AI 设计芯片**时间表与英特尔合作进展
- **DeepStack 开源仓库发布**（微软亚研院，arXiv:2604.04750）

---



> ⚠️ **注：** 今日为周日，arXiv 不发布新批次（最新批次为 3-20 周五）。本次补录本周遗漏论文，并整理 Siemens/合见工软 行业发布详情。

| #   | 标题                                                                                                                                              | 类别                       | arXiv                                          | 本地文件                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1   | **RTLocating: Intent-aware RTL Localization for Hardware Design Iteration**                                                                        | RTL 迭代 / 意图感知 / 工业级基准    | [2603.00434](https://arxiv.org/abs/2603.00434) | [PDF](./2026-03-22/2603.00434-RTLocating-RTL-Localization-Hardware-Iteration.pdf)                                        |
| 2   | **SpecLoop: An Agentic RTL-to-Specification Framework with Formal Verification Feedback Loop**                                                    | RTL→规范 / 形式验证反馈 / Agent   | [2603.02895](https://arxiv.org/abs/2603.02895) | [PDF](./2026-03-22/2603.02895-SpecLoop-RTL-to-Spec-Formal-Verification.pdf)                                              |
| 3   | **AutoEDA: Enabling EDA Flow Automation through Microservice-Based LLM Agents**                                                                   | EDA全流程 / MCP协议 / 微服务Agent | [2508.01012](https://arxiv.org/abs/2508.01012) | [PDF](./2026-03-22/2508.01012-AutoEDA-EDA-Flow-Automation-LLM-Agents.pdf)                                                |

---

## 📋 论文摘要速览（2026-03-22）

### 🏆 重点推荐

#### 1. RTLocating — 首个形式化 ΔSpec-to-RTL 定位问题，意图感知迭代硬件设计

- **arXiv**: https://arxiv.org/abs/2603.00434
- **投稿日期**: 2026-02-28（cs.ET）
- **作者**: Changwen Xing, Yanfei Lu, Lei Qi, Chenxu Niu, Jie Li, Xi Wang, Yong Chen, Jun Yang（共 8 位）
- **摘要**: 工业芯片开发本质上是**迭代式**的——工程师更倾向于对 RTL 进行局部化、意图驱动的更新，而非从头重写，但现有 LLM 辅助硬件设计（LAD）工具几乎全部聚焦于一次性综合生成，完全忽略了这种真实工作模式。RTLocating 首次形式化了 **ΔSpec-to-RTL 定位问题**（多正例检索任务）：给定自然语言变更请求（ΔSpec），找出 RTL 代码中受影响的语法块。核心框架：**动态路由器**自适应融合三个互补编码器——文本语义编码器 + 局部结构编码器 + GLIDE 全局交互依赖编码器。配套构建首个工业级基准 **EvoRTL-Bench**（来自 OpenTitan 项目 Git 历史，1,905 个验证变更请求，13,583 个 ΔSpec-RTL 块对）。
- **关键结果**: MRR = 0.568，R@1 = 15.08%；相比最强基线 MRR 提升 **+22.9%**，R@1 提升 **+67.0%**，新 SOTA。
- **亮点**: 直击工业界真实痛点——芯片设计迭代中 RTL 的局部定位与意图感知更新；EvoRTL-Bench 是首个从真实 SoC 项目 Git 历史构建的 RTL 演化基准，极具工业代表性；与 CktEvo（2603.08718）形成互补，一个侧重定位、一个侧重生成

#### 2. SpecLoop — 形式验证闭环驱动的 RTL→规范自动生成，消除"文档失真"

- **arXiv**: https://arxiv.org/abs/2603.02895
- **投稿日期**: 2026-03-03（cs.AR + cs.PL）
- **作者**: Fu-Chieh Chang, Yu-Hsin Yang, Hung-Ming Huang, Yun-Chia Hsu, Yin-Yu Lin, Ming-Fang Tsai, Chun-Chih Yang, Pei-Yuan Wu
- **摘要**: RTL 实现常缺乏最新、一致的规范文档，导致理解、维护和验证成本极高。既有工作尝试用 LLM 从 RTL 反向生成规范，但无法保证生成文档与实现意图真正对应。SpecLoop 提出**形式验证驱动的迭代反馈循环**：① LLM 生成候选规范 → ② 基于规范重构 RTL → ③ 对重构 RTL 与原始设计进行**形式等价性检查** → ④ 如不等价，将反例反馈给 LLM 迭代优化，直到证明等价或无法改进为止。
- **关键结果**: 相比纯 LLM 基线，引入形式验证反馈后规范正确性显著提升；在多个 LLM 模型和 RTL 基准上表现出强鲁棒性。
- **亮点**: "逆向文档生成 + 形式验证"闭环是硬件可维护性的核心挑战，本文给出工程化答案；形式等价性检查作为反馈信号比仿真更可靠，为 Agentic 硬件设计的可信性提供新路径；与 AutoVeriFix+ 的"前向生成 + 形式验证"形成正反两个方向的互补

---

### 📊 其他重要论文

#### 3. AutoEDA — MCP 协议微服务架构实现自然语言驱动完整 RTL-to-GDSII 流程，准确率提升 9.9×

- **arXiv**: https://arxiv.org/abs/2508.01012
- **投稿日期**: 2025-08-01（v1）；2026-02-24（v2）
- **作者**: Yiyi Lu, Hoi Ian Au, Junyao Zhang 等（共 11 位，Duke + UMD）
- **核心内容**: EDA 仍严重依赖 Tcl 脚本驱动 RTL-to-GDSII 流程，劳动密集且容易出错。AutoEDA 基于 **Model Context Protocol（MCP）** 构建微服务架构，实现从自然语言到完整 EDA 流程的端到端自动化：本地微调 LLM Agent（保护设计 IP 隐私）+ 任务分解 + 工具选择 + 错误处理 + 专为 Tcl 语言扩展的 CodeBLEU 评估指标。
- **关键结果**: 准确率比简单方法提升 **9.9×**；相比基于上下文学习的方法，token 使用量减少约 **97%**，大幅降低推理成本。
- **亮点**: MCP 作为 LLM 与 EDA 工具交互的标准化协议，是 Agentic EDA 基础设施建设的重要一步；本地微调方案解决工业界最敏感的 IP 隐私顾虑；Duke + UMD 学术团队出品，代码与基准开源

---

## 🌐 行业动态（2026-03-22）

### 🇨🇳 合见工软 UniVista UDA 2.0 — 国内首款全自研架构 Agentic EDA，从 L2 跃至 L4（2026-03-18）

- **链接**: https://www.news.cn/tech/20260319/d8c0b88848874b96b23f9c5dddf2bbb5/c.html
- **时间**: 2026-03-18（上海合见工业软件集团）
- **核心内容**:
  - **UniVista Design Agent（UDA）2.0** 正式发布，是国内首款基于**完全自主研发 EDA 架构**的智能体 EDA 工具
  - 从 Level 2（对话辅助工具）跨越至 **Level 4**（智能体工作流自主设计者）
  - 自主完成 RTL 设计→验证→纠错→优化完整闭环，无需全程人工干预
  - 全面支持 **DeepSeek** 等国产大模型，适配国产 GPU，满足全栈软硬件国产化要求
  - 内网部署、权限管理、会话管理，满足工业级安全合规要求
  - UDA 1.0 已于 2025-02 发布，头部企业和学术机构已在用；2.0 现开放商用试用
- **意义**: 在 Cadence/Synopsys/Siemens 三巨头绑定 NVIDIA AI 平台的背景下，国内 EDA 的 Agentic AI 自主路线迈出实质性一步，形成差异化竞争

### ⚙️ Siemens Fuse EDA AI Agent — 全流程跨领域半导体 + 3D IC + PCB 自主智能体（2026-03-17）

- **链接**: https://www.automation.com/article/siemens-fuse-eda-ai-agent-automation-semiconductor-3d-ic-pcb-system-workflows
- **时间**: 2026-03-17（GTC 2026 同期发布）
- **核心内容**（上周行业动态的进一步补充）:
  - 领域范围最广：覆盖**半导体数字设计（前端 + 物理）+ 3D IC + PCB 系统**全流程，是三大 EDA 厂商中宣称覆盖面最宽的 Agent 产品
  - 技术架构差异化：MCP 驱动的**分层规划**（Supervisor Agent + Worker Agents）+ **可执行 Playbook 机制**（用户可自定义复杂多步任务）+ 嵌入式 RBAC 审计追踪
  - **三星电子**已引入 Fuse Agent 用于先进设计策略；NVIDIA 自身芯片开发也在使用
  - 相比 Cadence ChipStack（前端为主）和 Synopsys AgentEngineer（RTL-to-Sign-off），Fuse EDA AI Agent 的跨域广度（含 PCB）最为突出
  - 与 NVIDIA NeMoClaw、AI-Q 深度集成路线图已明确

### 📰 SemiEngineering 深度解析 — AI 如何自动化芯片设计的五级路径（2026-03-17）

- **链接**: https://semiengineering.com/how-ai-will-automate-chip-design/
- **时间**: 2026-03-17
- **关键观点**:
  - Cadence VP Ziyad Hanna 提出**芯片设计自动化五级分类法**（镜像汽车自动驾驶分级），成为行业参考标准
  - 生成式 AI + Agentic AI 使 EDA 工具从"核心算法助手"向"自主工作流决策者"演进
  - 新挑战：**可追溯性（Traceability）和可解释性（Explainability）**——AI 做出的设计决策如何能被人类工程师审查和复现，这是当前 Agentic EDA 落地的核心障碍

---

## 📌 待追踪（下次更新关注）

- **VeriAgent** 进化记忆机制代码开源（清华团队），与 ACE-RTL 的比较评测
- **HWE-Bench** GitHub 开源（EDI-Systems/HWE-Bench），社区扩展进度
- **WarPGNN** 与工业封装 EDA 工具集成可行性
- **DAC 2026 完整论文程序**：预计 4 月发布，关注 AI for EDA、高效 LLM 加速器专题
- **Agent4Chip Workshop @ ICLR 2026**（4月23-27，里约热内卢）：现场展示内容
- **CODMAS RTLOPT 基准集开源**进展
- **合见工软 UDA 2.0 商用落地**：头部客户公布与量产推进
- **Siemens Fuse EDA AI Agent** 实际用户规模（目前三星 + NVIDIA 已确认）
- **Cadence 芯片设计自动化五级分类**：行业标准化进展与其他厂商的采用情况
- **RTLocating EvoRTL-Bench** 开源发布与社区复现

---

## 📅 2026-03-21（本次更新：4 篇）

| #   | 标题                                                                                                                                                 | 类别                        | arXiv                                          | 本地文件                                                                                                       |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 1   | **VeriAgent: A Tool-Integrated Multi-Agent System with Evolving Memory for PPA-Aware RTL Code Generation**                                           | RTL 生成 / PPA优化 / Multi-Agent | [2603.17613](https://arxiv.org/abs/2603.17613) | [PDF](./2026-03-21/2603.17613-VeriAgent-PPA-Aware-RTL-MultiAgent.pdf)                                      |
| 2   | **HWE-Bench: Can Language Models Perform Board-level Schematic Designs?**                                                                            | Benchmark / 板级设计 / EDA    | [2603.18102](https://arxiv.org/abs/2603.18102) | [PDF](./2026-03-21/2603.18102-HWE-Bench-Board-Level-Schematic-Design.pdf)                                  |
| 3   | **WarPGNN: A Parametric Thermal Warpage Analysis Framework with Physics-aware Graph Neural Network**                                                  | 封装 / 热翘曲 / GNN / EDA工具   | [2603.18581](https://arxiv.org/abs/2603.18581) | [PDF](./2026-03-21/2603.18581-WarPGNN-Thermal-Warpage-GNN.pdf)                                             |
| 4   | **Mitigating the Bandwidth Wall via Data-Streaming System-Accelerator Co-Design (MatrixFlow)**                                                       | 硬件加速 / 协同设计 / Transformer | [2603.19057](https://arxiv.org/abs/2603.19057) | [PDF](./2026-03-21/2603.19057-MatrixFlow-BandwidthWall-SystemAccelerator.pdf)                              |

---

## 📋 论文摘要速览（2026-03-21）

### 🏆 重点推荐

#### 1. VeriAgent — PPA感知闭环多智能体RTL代码生成，进化记忆持续自我改进

- **arXiv**: https://arxiv.org/abs/2603.17613
- **投稿日期**: 2026-03-18（cs.CL 分类）
- **作者**: Yaoxiang Wang, Qi Shi, ShangZhan Li, Qingguo Hu, Xinyu Yin, Bo Guo, Xu Han, Maosong Sun, Jinsong Su（清华大学 + 厦门大学）
- **摘要**: 当前LLM辅助RTL生成大多只关注功能正确性，忽略了功耗（Power）、性能（Performance）和面积（Area）等关键物理目标。VeriAgent提出**PPA感知的工具集成多智能体框架**，将EDA工具显式纳入闭环工作流：① **程序员智能体**负责RTL代码生成；② **正确性智能体**通过仿真工具迭代验证功能正确性；③ **PPA智能体**调用综合工具优化物理指标。三者协同形成功能正确性与PPA指标的联合优化循环。核心创新在于**进化记忆（Evolving Memory）机制**——将优化经验外部化为结构化记忆节点，由专用记忆管理器动态维护记忆池，使系统能够基于历史执行轨迹持续改进策略，**无需重新训练模型**。
- **关键结果**: 在保持高功能正确性的同时，PPA指标显著提升；进化记忆机制有效积累优化经验，系统越用越强。
- **亮点**: 在"功能正确 vs. PPA优化"的两难困境上给出工程化解法；进化记忆的无训练持续改进机制为Agent EDA工具的长期部署提供了可扩展路径；清华大学出品，代码质量值得关注

#### 2. HWE-Bench — 首个板级原理图设计EDA Benchmark，当前最强LLM仅8.15%通过

- **arXiv**: https://arxiv.org/abs/2603.18102
- **投稿日期**: 2026-03-18（cs.AR 分类）
- **作者**: Weibo Qiu, Yinhao Xiao, Runyu Pan
- **摘要**: LLMs在软件开发、数字逻辑生成等领域表现出色，但**板级电路设计**能力几乎空白——该任务要求同时理解真实物理特性和IC数据手册规格。HWE-Bench构建了首个端到端板级原理图设计评测框架：包含从GitHub和OSHWLab收集的**300个真实板级设计任务**（涵盖8个应用领域）和**2914份真实IC数据手册**知识库。评测流程：LLM根据功能需求+数据手册从头生成原理图 → 静态电气规则检查 → 电路仿真验证动态行为。全流程自动化，无需人工判分。
- **关键结果**: 当前最先进LLM总体任务通过率仅 **8.15%**；模型具备初步文档理解能力，但严重缺乏**物理直觉**（无法将电子学原理内化为设计决策）。
- **亮点**: 将EDA Benchmark从RTL代码生成扩展到更实用的板级设计场景；8.15%的极低通过率精准标定了当前LLM的物理推理天花板；与DRCY（2603.15672）形成互补——DRCY解决原理图审查，HWE-Bench评测原理图生成，共同推进板级EDA智能化

---

### 📊 其他重要论文

#### 3. WarPGNN — 物理感知GNN热翘曲分析，比COMSOL 3D FEM快11.9万倍

- **arXiv**: https://arxiv.org/abs/2603.18581
- **投稿日期**: 2026-03-19
- **作者**: Haotian Lu, Jincong Lu, Sachin Sachdeva, Sheldon X.-D. Tan（UCR）
- **核心内容**: 随着2.5D/3D异构集成和小芯片封装兴起，热致翘曲（thermal warpage）已成为关键可靠性问题，但传统数值仿真（FEM/COMSOL）计算开销过大。WarPGNN通过在平面图构建的图上直接操作实现快速翘曲感知平面图探索：① 将多芯片平面图编码为**精简传递闭包图（rTCG）**；② 基于GCN编码器提取层次化结构特征；③ U-Net风格解码器从图特征重建翘曲图。针对翘曲数据分布长尾问题，设计**物理信息损失函数**和改进GIN消息传递编码器。
- **关键结果**: 比2D FEM加速 **205.91×**，比3D COMSOL加速 **119,766×**；归一化RMSE仅1.26%，翘曲值误差2.21%；未见数据集可迁移性强（RMSE≤3.69%）；训练时间比DeepONet降低3.4×。
- **亮点**: 11.9万倍加速使实时翘曲感知布图规划成为可能，直接影响小芯片封装设计循环速度；物理感知GNN路线比纯数据驱动更可靠，对工业级EDA工具集成友好

#### 4. MatrixFlow — 流式系统-加速器协同设计突破带宽墙，EPFL出品

- **arXiv**: https://arxiv.org/abs/2603.19057
- **投稿日期**: 2026-03-19（EPFL + HES-SO）
- **作者**: Qunyou Liu, Marina Zapater, David Atienza
- **核心内容**: Transformer推理的端到端吞吐量受限于分页数据移动和互连带宽，而非原始算力。提出统一的系统-加速器协同设计方法：**MatrixFlow**（16×16脉动阵列 + 4KB分页块矩阵乘法 + ~20KB小型片上缓冲区 + DMA-计算-DMA输出流水线）；**Gem5-AcceSys**（gem5全系统模拟器扩展，探索PCIe/不同内存层次/SMMU效应）。核心洞察：分页流式传输 + 计算传输重叠是高效Transformer推理的关键，而非大型本地SRAM。
- **关键结果**: 相比CPU基线，端到端加速最高 **22×**；相比松散和紧密耦合加速器提升 **5–8×**；标准PCIe主机内存设计可达片上HBM性能的约 **80%**。
- **亮点**: EPFL顶级嵌入式系统研究组（David Atienza）出品；Gem5-AcceSys开源模拟框架为系统级加速器协同设计提供了可复现基础设施，对学术界和工业界都有重要参考价值

---

## 🌐 行业动态（2026-03-21）

### 📋 DAC 2026 接收论文 ID 正式公布（2026-03-19）

- **链接**: https://www.dac.com/2026/accepted-paper-ids
- **时间**: 2026-03-19（官方公布）
- **核心内容**: DAC 2026（第63届，6月举行）官方正式公布接收论文编号列表，共约 **500+ 篇**。具体论文标题/作者信息待大会程序安排发布。已知来自 AI/EDA/高效LLM 方向的接收团队：
  - **Meng Li（UT Austin）团队** 7篇：NASiC（CIM for MoE LLM）、S2CIM（安全存内计算）、DRIFT（扩散模型容错推理）、KEEP（KV缓存内存管理）等高效AI算法/加速器
  - **QiMeng-CodeV-SVA**（中科院计算所）：DAC 2026 接收，RTL引导双向数据合成训练 SVA 专用 LLM，已在前日 arXiv 公开
  - **DUET**（混合Mamba-Transformer解耦加速器）：DAC 2026 接收，已在前日 arXiv 公开
  - **CellE**（等式饱和标准单元库扩展，北大+清华）：DAC 2026 接收
- **意义**: DAC 2026 论文集将成为 AI for EDA 领域年度最大规模学术汇聚，完整程序预计4月发布

### 🔍 本周 arXiv 趋势总结（截至 2026-03-21）

| 方向             | 代表论文（本周）                            | 活跃度 |
|-----------------|------------------------------------------|------|
| PPA优化 Multi-Agent | VeriAgent (2603.17613)                  | ⬆️ 上升 |
| 板级/硬件设计 Benchmark | HWE-Bench (2603.18102)                | 🆕 新出现 |
| 封装热分析 AI加速 | WarPGNN (2603.18581)                    | 🆕 新出现 |
| RTL多智能体辩证优化 | CODMAS (2603.17204)                    | ↔️ 持续 |
| Agent硬件验证/测试 | DRCY (2603.15672), LLM4Cov (2602.16953)| ↔️ 持续 |
| 系统-加速器协同设计 | MatrixFlow (2603.19057)                | ⬆️ 新进展 |

---

## 📌 待追踪（下次更新关注）

- **VeriAgent** 进化记忆机制的代码开源（清华团队），与 ACE-RTL 的比较评测
- **HWE-Bench** GitHub 开源（EDI-Systems/HWE-Bench），社区扩展进度
- **WarPGNN** 与工业封装 EDA 工具（如 Ansys Sherlock、Cadence Allegro）集成可行性
- **DAC 2026 完整论文程序**：预计4月发布，关注 AI for EDA、高效LLM加速器两大专题
- **Agent4Chip Workshop @ ICLR 2026**（4月23-27，里约热内卢）：现场展示与 VeriTrace、PRO-V-R1、EDAForge 等论文的演讲内容
- **CODMAS RTLOPT 基准集开源**进展
- **ACE-RTL 170万 RTL 数据集**开源时间表（NVIDIA Research）
- **Rapidus Raads** 新增客户披露

---

## 📅 2026-03-20（本次更新：4 篇）

| #   | 标题                                                                                                                                              | 类别                      | arXiv                                          | 本地文件                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1   | **CODMAS: A Dialectic Multi-Agent Collaborative Framework for Structured RTL Optimization**                                                       | RTL 优化 / Multi-Agent    | [2603.17204](https://arxiv.org/abs/2603.17204) | [PDF](./2026-03-20/2603.17204-CODMAS-RTL-Optimization-MultiAgent.pdf)                                     |
| 2   | **ZipServ: Fast and Memory-Efficient LLM Inference with Hardware-Aware Lossless Compression**                                                     | LLM 推理 / 硬件感知压缩 / ASPLOS | [2603.17435](https://arxiv.org/abs/2603.17435) | [PDF](./2026-03-20/2603.17435-ZipServ-LLM-Inference-Compression.pdf)                                     |
| 3   | **LLM4Cov: Execution-Aware Agentic Learning for High-coverage Testbench Generation**                                                             | 硬件验证 / Agent 学习 / 测试平台  | [2602.16953](https://arxiv.org/abs/2602.16953) | [PDF](./2026-03-20/2602.16953-LLM4Cov-Testbench-Generation.pdf)                                          |
| 4   | **HeaRT: A Hierarchical Circuit Reasoning Tree-Based Agentic Framework for AMS Design**                                                          | 模拟混合信号 / Agent / 推理树    | [2511.19669](https://arxiv.org/abs/2511.19669) | [PDF](./2026-03-20/2511.19669-HeaRT-AMS-Hierarchical-Reasoning.pdf)                                      |

---

## 📋 论文摘要速览（2026-03-20）

### 🏆 重点推荐

#### 1. CODMAS — 辩证多智能体协作框架实现 RTL 结构化优化，关键路径降低 25%

- **arXiv**: https://arxiv.org/abs/2603.17204
- **投稿日期**: 2026-03-17（EACL 2026 接收）
- **作者**: Che-Ming Chang, Prashanth Vijayaraghavan, Ashutosh Jadhav, Charles Mackin, Vandana Mukherjee, Hsinyu Tsai, Ehsan Degan
- **摘要**: RTL 代码优化是 EDA 中提升 PPA 的核心步骤，但传统 LLM 方法缺乏结构化推理机制。CODMAS 将**辩证推理**与领域感知代码生成相结合，设计两个辩证智能体：① **Articulator**（受"橡皮鸭调试"启发）：逐步阐述转换计划并揭示隐性假设；② **Hypothesis Partner**：预测结果，在预期与实际行为之间调和偏差以指导优化。两者共同引导**领域专用代码生成智能体（DCA）**生成架构感知的 Verilog 编辑，由**代码评估智能体（CEA）**验证语法、功能及 PPA 指标。配套提出 RTLOPT 基准（120组 Verilog 三元组：未优化/优化/测试平台，涵盖流水线和时钟门控转换）。
- **关键结果**: 相比强提示基线，关键路径延迟降低约 **25%**（流水线优化），功耗降低约 **22%**（时钟门控），同时显著减少功能和编译错误。
- **亮点**: EACL 2026 接收；将"辩证推理"引入 RTL 优化，Articulator-HypothesisPartner 的自我质疑机制是一种新颖的 Multi-Agent 设计哲学，RTLOPT 基准集有望成为该方向标准评测集

#### 2. ZipServ — 首个在 GPU 同时实现存储节省与推理加速的无损 LLM 压缩系统（ASPLOS'26）

- **arXiv**: https://arxiv.org/abs/2603.17435
- **投稿日期**: 2026-03-18（已被 ASPLOS'26 接收）
- **作者**: Ruibo Fan, Xiangrui Yu, Xinglin Pan, Zeyu Li, Weile Luo, Qiang Wang, Wei Wang, Xiaowen Chu
- **摘要**: 现有无损模型压缩方案因与 GPU 架构设计不匹配，往往导致推理速度明显下降。ZipServ 提出两项关键创新：① **TCA-TBE（Tensor-Core-Aware Triple Bitmap Encoding）**：专为 GPU SIMT 并行设计的新型固定长度编码格式，支持恒定时间并行解码，解决传统熵编码变长比特流破坏 SIMT 并行性的问题；② **ZipGEMM（融合解压-GEMM 内核）**：将权重直接解压到 Tensor Core 寄存器，"加载压缩、计算解压"设计消除中间缓冲区，最大化计算强度。
- **关键结果**: 模型大小减少高达 **30%**；内核级加速比 NVIDIA cuBLAS 达 **2.21×**；端到端推理比 vLLM 平均加速 **1.22×**——首个在 GPU 上同时提供存储节省和推理加速的无损压缩系统。
- **亮点**: ASPLOS'26 接收（系统领域顶会）；"无损压缩且加速推理"突破常识认知，TCA-TBE 的硬件-算法协同设计思路对未来 LLM serving 硬件设计有深远影响

---

### 📊 其他重要论文

#### 3. LLM4Cov — 离线 Agent 学习框架实现高覆盖率测试平台生成（Agent4Chip 2026）

- **arXiv**: https://arxiv.org/abs/2602.16953
- **投稿日期**: 2026-02-19（Agent4Chip Workshop @ ICLR 2026 接收）
- **作者**: Hejia Zhang, Zhongming Yu, Chia-Tung Ho, Haoxing Ren, Brucek Khailany, Jishen Zhao（UCSD + NVIDIA Research）
- **核心内容**: 在线强化学习因 EDA 仿真成本高昂而实用性受限，LLM4Cov 将验证建模为**无记忆状态转换**（由确定性评估器引导），提出离线 Agent 学习方案：① 执行验证数据生成流水线收集执行感知轨迹；② 基于覆盖率反馈的 SFT → DPO 两阶段训练。代码和 benchmark 已开源（GitHub: HejiaZ2023/llm4cov_oss）。
- **亮点**: UCSD + NVIDIA 联合出品；将 Agent 学习与硬件验证工具链深度融合，离线训练方式大幅降低实际部署成本；Agent4Chip 2026 接收

#### 4. HeaRT — 层级电路推理树：面向模拟混合信号设计的基础推理引擎（Agent4Chip 2026）

- **arXiv**: https://arxiv.org/abs/2511.19669
- **投稿日期**: 2025-11-25（Agent4Chip Workshop @ ICLR 2026 接收）
- **作者**: Saumyadeep Poddar, Chia-Tung Ho 等（UT Austin + NVIDIA Research）
- **核心内容**: 传统 AI 驱动的模拟混合信号（AMS）设计依赖高质量数据集，且缺乏可解释的推理过程。HeaRT 提出**层级电路推理树（HiCRT）**作为 AMS 自动化的基础推理引擎：通过分析驱动的推理将电路行为分解为层级子问题，结合专家设计知识引导 LLM 进行结构化优化搜索。框架不依赖大规模训练数据，提供人类可解释的设计优化决策路径。
- **亮点**: UT Austin（David Z. Pan 组）+ NVIDIA 出品；AMS 设计长期缺乏 LLM Agent 解决方案，HeaRT 填补该空白；Agent4Chip 2026 接收

---

## 🌐 行业动态（2026-03-20）

### 🔥 Synopsys Multiphysics Fusion™ 正式发布 + Ansys 2026 R1 上线（Converge 2026）

- **链接**: https://news.synopsys.com/2026-03-11-Synopsys-Outlines-Vision-for-Engineering-the-Future
- **时间**: 2026-03-11（Synopsys Converge 2026）+ 2026-03-17（Ansys 2026 R1 正式上线）
- **核心内容**（跟进上周待追踪项）:
  - **Multiphysics Fusion™** 已正式发布——这是 Synopsys 收购 Ansys 后推出的首款深度整合产品，将热分析、电压降、电磁等多物理场仿真嵌入 EDA 设计流程（IC Compiler II、Fusion Compiler、PrimeSim 等）
  - **Ansys 2026 R1** 正式上线：结合生成式 AI、多物理场仿真与数字孪生技术，新增首代"智能工程"能力（设计探索自动化预处理、系统级快速洞察），扩展数字孪生互联工作流
  - 标志着"电子-机械-热"一体化仿真平台正式进入市场，Synopsys 从纯 EDA 向"全栈工程仿真"转型

### 🆕 Rapidus Raads — 日本 2nm 晶圆厂自研 AI 设计代理，3 家公司在用（2026-03-19）

- **链接**: https://kantenna.com/topic/rapidus-ai-agent-semiconductor-design-raads-three-companies
- **时间**: 2026-03-19
- **核心内容**: Rapidus（日本 2nm 晶圆厂）发布 **Raads（Rapidus AI-Agentic Design Solution）** 工具套件，定位"半导体版 GitHub Copilot + 制造协同"：
  - **Raads Generator**：LLM 将自然语言规格转为针对 Rapidus 2nm 工艺优化的 RTL
  - **Raads Predictor**：早期 PPA 预测减少后期重新设计成本
  - **Raads SynthCast**：上游设计优化（自研）
  - 核心差异化：直接利用自家 2nm 生产线制造数据训练，实现"设计-制造协同优化（DMCO）"
  - 目标：设计时间缩短 50%，成本降低 30%
  - 当前进展：已有 2 家日本公司 + 1 家海外公司在用

### 📐 NSF Workshop on Agents for Chip Design Automation（UCLA，2026-03-13）— 成果综述

- **链接**: https://ai4eda-workshop.github.io/2026/
- **时间**: 2026-03-13（UCLA Engineer VI — Mong Auditorium）
- **主要演讲**（确认参与人员）:
  - **Mark Ho（NVIDIA）**: 从手工 Workflow 到可训练自我改进 Agent
  - **David Z. Pan（UT Austin）**: Agentic AI 用于模拟/RF 设计自动化
  - **Jishen Zhao（UCSD）**: 面向 RTL 设计验证的自演化 LLM 多智能体系统
  - **Jason Cong（UCLA）**: Agentic 时代的高层次综合（HLS）
  - **Zhiru Zhang（Cornell）**: 自主加速器设计缺失环节
  - **Kexun Zhang（ChipAgents）**: Agentic AI 时代的芯片设计与验证
- **意义**: NSF 级别认可标志着 Agentic EDA 从学术热点升级为国家科研战略方向

---

## 📌 待追踪（下次更新关注）

- **CODMAS RTLOPT 基准**：是否开源，社区采用进展
- **ZipServ**：ASPLOS'26 后的工业界反馈与工具链集成计划
- **LLM4Cov**：开源代码库的 star 增长与社区复现情况
- **Ansys 2026 R1**：客户具体应用案例（尤其是热-电协同仿真场景）
- **Rapidus Raads**：更多客户公布，2nm 量产推进（目标 2027H2）
- **ACE-RTL 170万 RTL 数据集**：开源时间表（NVIDIA Research）
- **Agent4Chip Workshop 2026 @ ICLR（4月23-27，里约热内卢）**：现场论文展示效果与Q&A讨论重点
- **DAC 2026（6月）**：论文接收完整名单公布（已知 CellE、CodeV-SVA、DUET 等）
- **NVIDIA EDA Research**: https://research.nvidia.com/labs/electronic-design-automation/

---

## 📅 2026-03-19（本次更新：3 篇）

| #   | 标题                                                                                                                                       | 类别                        | arXiv                                          | 本地文件                                                                                              |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 1   | **DRCY: Agentic Hardware Design Reviews**                                                                                                 | AI for EDA / 多智能体 / 硬件验证  | [2603.15672](https://arxiv.org/abs/2603.15672) | [PDF](./2026-03-19/2603.15672-DRCY-Agentic-Hardware-Design-Reviews.pdf)                           |
| 2   | **ACE-RTL: When Agentic Context Evolution Meets RTL-Specialized LLMs**                                                                   | RTL 生成 / Agent / 专用 LLM   | [2602.10218](https://arxiv.org/abs/2602.10218) | [PDF](./2026-03-19/2602.10218-ACE-RTL-Agentic-Context-Evolution.pdf)                              |
| 3   | **GLANCE: Gaze-Led Attention Network for Compressed Edge-inference**                                                                     | 边缘推理 / 硬件加速 / 注意力机制       | [2603.15717](https://arxiv.org/abs/2603.15717) | [PDF](./2026-03-19/2603.15717-GLANCE-Gaze-Led-Attention-Edge-Inference.pdf)                       |

---

## 📋 论文摘要速览（2026-03-19）

### 🏆 重点推荐

#### 1. DRCY — 首个生产级多智能体 LLM 硬件原理图审查系统

- **arXiv**: https://arxiv.org/abs/2603.15672
- **投稿日期**: 2026-03-13（cs.AR 3月18日公开）
- **作者**: Kyle Dumont, Nicholas Herbert, Hayder Tirmazi, Shrikanth Upadhayaya（AllSpice）
- **摘要**: 硬件设计错误在制造后才被发现会导致昂贵的重新流片，可能延误产品数月。现有 EDA 工具只能执行结构连接规则检查，无法验证连接的**语义正确性**（如引脚分配是否符合数据手册规范、电压调节器反馈电阻是否产生预期输出）。DRCY 是**首个可投入生产的多智能体 LLM 系统**，通过自主获取组件数据手册、逐引脚分析、并将发现以内联评论形式发布到设计评审中，实现原理图连接的第一轮自动化审查。已部署于 AllSpice Hub 平台，作为 CI/CD 流水线的一部分，在设计评审提交时触发，被多家主要硬件公司用于车辆设计到太空探索等场景。
- **系统架构**: 五智能体流水线 + 智能数据手册检索（含自我评估机制）+ 多轮共识机制（提升安全关键场景可靠性）
- **亮点**: 突破 EDA 工具"语义盲区"，将 LLM 推理能力嵌入实际 CI/CD 硬件开发流程，**首个真正落地量产的 Agentic EDA 工具**。从学术到生产部署，意义重大。

#### 2. ACE-RTL — 统一领域专用 LLM 与 Agentic 系统的 RTL 生成框架

- **arXiv**: https://arxiv.org/abs/2602.10218
- **投稿日期**: 2026-02-10（Agent4Chip @ ICLR 2026 Workshop 接收）
- **作者**: Chenhui Deng, Zhongzhi Yu, Guan-Ting Liu, Nathaniel Pinckney, Haoxing Ren（NVIDIA Research）
- **摘要**: 当前 LLM 辅助 RTL 生成有两条路线：①训练领域适应的 RTL 专用模型（理解硬件语义，但推理能力有限）；②用通用前沿 LLM 构建基于仿真反馈的 Agent 系统（推理强，但硬件专业知识不足）。ACE-RTL 通过 **Agentic Context Evolution（ACE）** 统一两条路线，将一个在 **170 万 RTL 样本**上训练的专用 LLM（生成器）与前沿推理 LLM（协调器 + 反射器）协同，迭代优化 RTL 代码，同时引入**并行扩展策略**显著减少所需迭代次数。
- **关键结果**: 在 CVDP 基准上，相比 14 个竞争基线，通过率最高提升 **44.87%**，平均仅需 **4 次迭代**收敛。
- **亮点**: NVIDIA Research 出品；专用 LLM + 通用推理 Agent 的有机融合路线，优于"只训练专用模型"或"只用 Agent"的单一路线；Agent4Chip 2026 研讨会接收。

---

### 📊 其他重要论文

#### 3. GLANCE — 仿生中心凹视觉：边缘 AR/VR 推理内存优先架构

- **arXiv**: https://arxiv.org/abs/2603.15717
- **投稿日期**: 2026-03-18（cs.AR 3月19日公开）
- **作者**: Neeraj Solanki, Hong Ding, Sepehr Tabrizchi, Ali Shafiee Sarvestani, Shaahin Angizi, **David Z. Pan**（UT Austin EDA 组）, Arman Roohi
- **核心内容**: 受生物中心凹视觉启发，提出两阶段流水线：①用无权重可微分神经网络进行极高效注视估计（每帧仅 393 次 MAC + 2.2 KiB 内存）；②注视预测引导 ROI 目标检测，减少计算负担 40–50%，降低能耗 65%。部署在 Arduino Nano 33 BLE 上，延迟 <10ms，mAP 48.1%。
- **亮点**: David Z. Pan 组（UT Austin 顶级 EDA 研究组）跨界边缘 AI 硬件的工作，展示内存优先架构在资源受限可穿戴平台上的优势，硬件感知 ML 设计新方向。

---

## 🌐 行业动态（2026-03-19）

### 🔥 Cadence × NVIDIA 扩展合作——针对 Agentic AI 芯片设计的加速工程解决方案（2026-03-18）

- **链接**: https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2026/cadence-and-nvidia-unveil-accelerated-engineering-solutions.html
- **时间**: 2026-03-18（GTC 2026 期间）
- **核心发布**:
  - **ChipStack™ AI Super Agent** 与 NVIDIA NemoClaw 深度集成，未来扩展至定制/模拟设计领域
  - **Innovus™、Celsius™、Voltus™、EMX®、Liberate™ MX、Spectre® X、Quantus™** 等全系 EDA 工具 NVIDIA GPU 加速上线
  - **吞吐量提升最高 80×**，功耗降低最高 20×（vs. CPU）；Clarity 3D Solver 在 NVIDIA Millennium M2000 系统上快 **5×**，成本效益提升 **4×**
  - **Honda 全涡扇发动机仿真**（Fidelity CFD + Millennium M2000 GB200 NVL72）：实现以往不可能的设计探索
  - **Micron HBM 设计**：GPU 加速 Cadence 工具，提升验证效率
  - **Larsen & Toubro Semiconductor（印度）**：Spectre X Simulator（GPU 5×）缩短 AI 芯片设计周期

### 📋 Agent4Chip Workshop 2026（ICLR @ 4月23-27，里约热内卢）— 全部 23 篇接收论文公开

- **链接**: https://ai4eda-workshop.github.io/2026/accepted_papers.html
- **时间**: 2026-03-11（论文接收公告）
- **精选高影响力论文**（共 23 篇海报，多数已有 arXiv 预印本）:

| 论文 | 方向 | 备注 |
|------|------|------|
| **ACE-RTL** (2602.10218) | RTL 生成 / 专用 LLM + Agent | NVIDIA Research |
| **ASPEN** (MLCAD 2025) | RTL 数据通路优化 / E-Graph | Cornell + NVIDIA |
| **LLM4Cov** | 测试平台生成 / 覆盖率 | UCSD + NVIDIA |
| **VeriTrace** | Verilog Agent 时序探索 | Utah |
| **FVRuleLearner** | SVA 生成 / 规则学习 | UIUC + NVIDIA |
| **EDAForge** | 模拟电路综合 Multi-Agent | TAMU |
| **MACO** | 硬件/软件协同设计 Multi-Agent | PNNL |
| **PRO-V-R1** | RTL 验证 / Reasoning Agent | UCSD + NVIDIA |
| **LACE** | RISC-V 指令集扩展 LLM Agent | UMass |
| **HeaRT** | AMS 设计 / 层级推理树 | UT Austin + NVIDIA |
| **NoTB** | Oracle-Free RTL Triage / 形式等价 | Columbia |

---

## 📅 2026-03-18（本次更新：5 篇）

| #   | 标题                                                                                                                                           | 类别                 | arXiv                                          | 本地文件                                                                                      |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1   | **Retrieve, Schedule, Reflect: LLM Agents for Chip QoR Optimization**                                                                         | AI for EDA / Agent | [2603.13767](https://arxiv.org/abs/2603.13767) | [PDF](./2026-03-18/2603.13767-RetrieveScheduleReflect-ChipQoR.pdf)                        |
| 2   | **QiMeng-CodeV-SVA: Training Specialized LLMs for Hardware Assertion Generation via RTL-Grounded Bidirectional Data Synthesis**                | 硬件验证 / LLM 专用模型    | [2603.14239](https://arxiv.org/abs/2603.14239) | [PDF](./2026-03-18/2603.14239-QiMengCodeVSVA-HardwareAssertion.pdf)                       |
| 3   | **SkipOPU: An FPGA-based Overlay Processor for Large Language Models with Dynamically Allocated Computation**                                  | LLM 加速器 / FPGA    | [2603.14785](https://arxiv.org/abs/2603.14785) | [PDF](./2026-03-18/2603.14785-SkipOPU-FPGA-LLM.pdf)                                      |
| 4   | **DUET: Disaggregated Hybrid Mamba-Transformer LLMs with Prefill and Decode-Specific Packages**                                               | LLM 加速器 / DAC 2026 | [2603.15530](https://arxiv.org/abs/2603.15530) | [PDF](./2026-03-18/2603.15530-DUET-MambaTransformer-Accelerator.pdf)                      |
| 5   | **LEXI: Lossless Exponent Coding for Efficient Inter-Chiplet Communication in Hybrid LLMs**                                                   | 小芯片通信 / 数据压缩       | [2603.15589](https://arxiv.org/abs/2603.15589) | [PDF](./2026-03-18/2603.15589-LEXI-Chiplet-Communication.pdf)                             |

---

## 📋 论文摘要速览（2026-03-18）

### 🏆 重点推荐

#### 1. Retrieve, Schedule, Reflect — 首个基于 LLM Agent 的芯片 QoR 自动调度框架

- **arXiv**: https://arxiv.org/abs/2603.13767
- **投稿日期**: 2026-03-14
- **作者**: Yikang Ouyang, Yang Luo, Dongsheng Zuo, Yuzhe Ma
- **摘要**: 提出首个将 LLM Agent 应用于芯片多目标 QoR（时序/功耗/面积）优化的框架。核心流程：① **Retrieve**：通过 RAG 从自然语言专家知识树中检索相关优化策略；② **Schedule**：Agent 直接与 EDA 工具交互编排优化 pass 顺序；③ **Reflect**：结合 Pareto 前沿 QoR 反馈进行语言反思，迭代改进调度方案。支持用户以自然语言指定优化偏好，实现差异化 QoR 权衡。
- **关键结果**: 时序优化提升 **10%**，优化速度比 RL 基线提升 **4×**，QoR 媲美人工专家水平。代码将在 https://github.com/YiKangOY/Open-LLM-ECO 公开。
- **亮点**: EDA 工具调度是 AI for EDA 中长期依赖人工专家的核心痛点，本文首次用 LLM Agent + RAG 闭环解决，开源友好

#### 2. QiMeng-CodeV-SVA — DAC 2026：专用 LLM 驱动 SVA 断言生成，超越 GPT-5/DeepSeek-R1

- **arXiv**: https://arxiv.org/abs/2603.14239
- **投稿日期**: 2026-03-15（DAC 2026 接收）
- **作者**: Yutong Wu, Chenrui Cao, Pengwei Jin, Di Huang, Rui Zhang, Xishan Zhang, Zidong Du, Qi Guo, Xing Hu（中科院计算所 QiMeng 团队）
- **摘要**: 针对硬件验证中 SystemVerilog Assertion（SVA）生成数据稀缺问题，提出 RTL 引导的双向数据合成框架：① 从大规模开源 RTL 中提取上下文引导 LLM 生成真实场景 SVA；② 通过 SVA↔自然语言双向翻译一致性机制自动筛选高质量数据对。基于合成数据训练 CodeV-SVA 专用模型系列。
- **关键结果**: CodeV-SVA-14B 在 NL2SVA-Human 达 Func.@1 **75.8%**，NL2SVA-Machine 达 **84.0%**，**匹配或超越 GPT-5 和 DeepSeek-R1**。
- **亮点**: 验证占芯片设计工时 70%，SVA 自动生成具有重大工程价值；继续强化 QiMeng 在 AI for EDA 领域的系统性布局

---

### 📊 其他重要论文

#### 3. SkipOPU — 基于 FPGA 支持动态计算分配的 LLM 推理处理器

- **arXiv**: https://arxiv.org/abs/2603.14785
- **投稿日期**: 2026-03-16
- **作者**: Zicheng He, Anhao Zhao, Xiaoyu Shen, Chen Wu, Lei He（UCLA）
- **核心发现**: 现有 FPGA/GPU 主要为静态均匀执行优化，难以支持动态跳过不重要 token 和层的推理模式。SkipOPU 引入轻量级路由机制和非线性操作解耦、混合精度 PE 阵列、片上 KV 历史缓冲区三项创新，在 AMD U280 上实现带宽效率 GPU 的 **1.23×–3.83×**，KV 存储开销最高降低 **25.4%**。

#### 4. DUET — DAC 2026：混合 Mamba-Transformer LLM 解耦加速器，4× 首 token 加速

- **arXiv**: https://arxiv.org/abs/2603.15530
- **投稿日期**: 2026-03-16（DAC 2026 接收）
- **作者**: Alish Kanani, Sangwan Lee, Han Lyu, Jiahao Lin, Jaehyun Park, Umit Y. Ogras
- **核心发现**: 混合 Mamba-Transformer 模型中，预填充（计算密集）与解码（带宽受限）需求截然不同，现有同构加速器无法兼顾。DUET 为两阶段分别设计硬件包——预填充包用脉动阵列小芯片+片外内存，解码包用向量单元阵列+高带宽片内内存，均支持运行时可配置。在 Nemotron-H-56B 等模型上，vs. B200 GPU：首 token 时间 **4×** 提升，吞吐 **1.4×**，token 间延迟 **1.5×** 降低。

#### 5. LEXI — 无损指数编码，小芯片间通信延迟降低 33–45%

- **arXiv**: https://arxiv.org/abs/2603.15589
- **投稿日期**: 2026-03-16
- **作者**: Miao Sun, Alish Kanani, Kaushik Shroff, Umit Ogras
- **核心发现**: BF16 浮点数的指数部分（8 bit）实际香农熵低于 3 bit，存在大量冗余。LEXI 在片上网络路由器集成霍夫曼编码压缩器（22nm 工艺面积/能耗开销仅 **0.09%**），对激活值、KV 缓存实时压缩，在 Jamba/Zamba/Qwen 等模型上，芯片间通信延迟降低 **33–45%**，端到端推理延迟降低 **30–35%**。

---

## 🌐 行业动态（2026-03-18）

### 🔥 NVIDIA GTC 2026 — 七款芯片、五种机架，全面押注 Agentic AI（2026-03-17 主题演讲）

- **链接**: https://blogs.nvidia.com/blog/gtc-2026-news/
- **时间**: 2026-03-17（Jensen Huang 主题演讲）
- **核心发布**:
  - **Vera Rubin 平台**: 7 种新芯片（Rubin GPU、Vera CPU、BlueField-4 STX、Spectrum-6 SPX、Groq 3 LPX、Rubin Ultra 预览、Feynman 路线图）+ 5 种机架，全系 45°C 热水冷却
  - **NemoClaw**: 基于 OpenClaw 的企业级 Agentic AI 安全栈，支持本地+云端混合部署，单命令安装，沙箱隔离
  - **Dynamo 1.0**: AI 工厂推理操作系统，实现分离式推理（Prefill→GPU，Decode→Groq LPU），Blackwell 推理性能提升 **7×**
  - **cuEST**: CUDA-X 量子化学加速库，三星 5×、Synopsys **30×** 计算提速
  - **需求预测**: Jensen Huang 看到 2027 年前 AI 基础设施需求至少 **$1 万亿**

### Synopsys × NVIDIA GTC 2026 — AgentEngineer 最新进展（2026-03-16）

- **链接**: https://news.synopsys.com/2026-03-16-Synopsys-Showcases-NVIDIA-Partnership-Impact-and-Ecosystem-Innovation-at-GTC-2026
- **亮点**:
  - AgentEngineer™ 在 GTC 上演示**行业首个 L4 级自主 EDA 工作流**（设计+验证）
  - Astera Labs 用 NVIDIA B200 + PrimeSim™ 仿真加速 **3.5×**
  - Applied Materials 用 cuEST + QuantumATK® 量子化学模拟加速 **30×**
  - Honda 用 Ansys Fluent® 在 4 个 GB200 上 CFD 仿真比 1920 CPU 核快 **34×**，成本降低 **38×**

---

## 📅 2026-03-17（本次更新：5 篇）

| #   | 标题                                                                                                                           | 类别             | arXiv                                          | 本地文件                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------- | ---------------------------------------------------- |
| 1   | **CellE: Automated Standard Cell Library Extension via Equality Saturation**                                                 | 标准单元库 / 形式化方法  | [2603.12797](https://arxiv.org/abs/2603.12797) | [PDF](./2026-03-17/2603.12797-CellE.pdf)             |
| 2   | **VeriHGN: Unifying Logical and Physical Layout Representations via Heterogeneous Graphs for Circuit Congestion Prediction** | 布局预测 / GNN     | [2603.11075](https://arxiv.org/abs/2603.11075) | [PDF](./2026-03-17/2603.11075-VeriHGN.pdf)           |
| 3   | **AutoVeriFix+: High-Correctness RTL Generation via Trace-Aware Causal Fix and Semantic Redundancy Pruning**                 | RTL 生成 / 形式化验证 | [2603.11489](https://arxiv.org/abs/2603.11489) | [PDF](./2026-03-17/2603.11489-AutoVeriFix.pdf)       |
| 4   | **Helios: Hardware-Software Co-design for 3D-DRAM-based LLM Serving Accelerator**                                            | LLM 加速器 / 近存计算 | [2603.04797](https://arxiv.org/abs/2603.04797) | [PDF](./2026-03-17/2603.04797-Helios-3DDRAM-LLM.pdf) |
| 5   | **Multi-Agent Memory from a Computer Architecture Perspective: Visions and Challenges Ahead**                                | 多智能体 / 体系结构    | [2603.10062](https://arxiv.org/abs/2603.10062) | [PDF](./2026-03-17/2603.10062-MultiAgentMemory.pdf)  |

---

## 📋 论文摘要速览（2026-03-17）

### 🏆 重点推荐

#### 1. CellE — DAC 2026 录用：等式饱和实现标准单元库自动扩展，面积减少15.4%

- **arXiv**: https://arxiv.org/abs/2603.12797
- **投稿日期**: 2026-03-13（已被 DAC 2026 接收）
- **作者**: Yi Ren, Yukun Wang, Xiang Meng, Guoyao Cheng, Baokang Peng, Lining Zhang, Yibo Lin, Runsheng Wang, Guangyu Sun（北京大学 & 清华大学）
- **摘要**: CellE 将**等式饱和（Equality Saturation）**应用于映射后网表，生成 e-graph 聚类所有功能等价实现，并结合高效模式挖掘算法选择面积最优标准单元。实验显示平均面积减少 **15.41%**（最高 23.64%），商用流程中延迟减少 **8.00%**。
- **亮点**: DAC 2026 接收；形式化方法驱动的 EDA 工具优化，与 LLM 路线形成互补

#### 2. AutoVeriFix+ — 轨迹感知因果修复，VerilogEval pass@10 达 90.2%

- **arXiv**: https://arxiv.org/abs/2603.11489
- **投稿日期**: 2026-03-12
- **作者**: Yan Tan, Xiangchen Meng, Zijun Jiang, Yangdi Lyu
- **摘要**: 三阶段框架：① LLM 生成 Python 参考模型作为形式化规范；② 生成初始 Verilog RTL 并迭代修复语法错误；③ 引入 Concolic 测试引擎深测时序逻辑边界情况，通过**周期精确执行轨迹与寄存器快照**为 LLM 提供因果上下文，并生成覆盖率报告支持面积优化语义剪枝。严格基准上功能正确性超过 80%，VerilogEval-machine pass@10 达 **90.2%**，平均消除 **25%** 冗余逻辑。
- **亮点**: 将程序分析（Concolic 测试）与 LLM RTL 生成深度融合，同时优化正确性与面积

#### 3. Helios — 3D DRAM 近存计算 LLM 推理加速器，3.25× 提速

- **arXiv**: https://arxiv.org/abs/2603.04797
- **投稿日期**: 2026-03-05
- **作者**: Cong Li, Yihan Yin, Chenhao Xue, Zhao Wang, Fujun Bai, Yixin Guo, Xiping Jiang, Qiang Wu, Yuan Xie, Guangyu Sun
- **摘要**: Helios 是基于混合键合（hybrid-bonding）3D-DRAM 的 LLM 推理加速器，解决了现有 NMP 设计中 KV Cache 管理粗粒度与注意力执行流不灵活的问题。提出 PE 内执行流与 PE 间通信原语支持分布式平铺注意力，以及**空间感知 KV Cache 分配机制**均衡注意力负载分布、最小化 PE 间数据传输。相比 GPU/NMP 基线，实现 **3.25× 吞吐提升**、**3.36× 能效提升**，P50/P99 token 生成延迟降低 72%/76%。
- **亮点**: LLM serving 与定制硬件协同设计，3D-DRAM NMP 路线的系统性解决方案

---

### 📊 其他重要论文

#### 4. VeriHGN — 统一逻辑与物理布局的异质图拥塞预测

- **arXiv**: https://arxiv.org/abs/2603.11075
- **投稿日期**: 2026-03-10
- **作者**: Runbang Hu, Bo Fang, Bingzhe Li, Yuede Ji
- **核心发现**: 构建增强型异质图将电路组件（网表连接性）与空间网格（物理布局）统一为单一关系表示，更准确建模逻辑意图与物理实现的交互。在 ISPD2015、CircuitNet-N14/N28 工业基准上优于现有 SOTA，可在详细布线前实现早期拥塞预测、减少布线迭代。

#### 5. Multi-Agent Memory — 从计算机体系结构视角看多智能体内存挑战

- **arXiv**: https://arxiv.org/abs/2603.10062
- **投稿日期**: 2026-03-09
- **作者**: Zhongming Yu, Naicheng Yu, Hejia Zhang 等（共 8 位）
- **核心观点**: 将多智能体内存视为体系结构问题，区分共享/分布式内存范式，提出三层内存层次结构（I/O-缓存-内存），指出跨智能体**缓存共享**与**结构化内存访问控制**两个协议差距。认为最紧迫的开放挑战是**多智能体内存一致性**。

---

## 🌐 行业动态（2026-03-17）

### 🔥 重大事件：NVIDIA × Cadence/Synopsys/Siemens 发布联合 AI EDA 战略（2026-03-16）

- **链接**: https://nvidianews.nvidia.com/news/nvidia-and-global-industrial-software-giants-bring-design-engineering-and-manufacturing-into-the-ai-era
- **时间**: 2026-03-16（昨日）
- **摘要**: NVIDIA 宣布与 Cadence、Dassault Systèmes、Siemens、Synopsys 四家全球工业软件巨头联合推进 AI 智能体战略，各方基于 NVIDIA NeMo 平台、Nemotron 模型及 CUDA-X 库构建行业 AI Agent：
  - **Cadence**: ChipStack AI SuperAgent（前端设计验证）
  - **Synopsys**: AgentEngineer™（多智能体 RTL-to-Sign-off 流程，2× 效率提升，最高 5×）
  - **Siemens**: Fuse EDA AI Agent（半导体全流程自动化）
  - 三星、台积电、SK海力士、联发科均为早期用户（联发科 Cadence Spectre 加速 6×）
- **意义**: 标志着 EDA 三巨头（Cadence/Synopsys/Siemens）全部绑定 NVIDIA AI 平台，行业格局正式确立

### Synopsys AgentEngineer™ — Converge 2026 正式发布（2026-03-11）

- **链接**: https://www.prnewswire.com/news-releases/synopsys-outlines-vision-for-engineering-the-future-302711205.html
- **时间**: 2026-03-11（Synopsys Converge 2026 大会）
- **亮点**:
  - L4 级高度自主多智能体工作流：自然语言/形式化规范 → RTL → Lint → 测试平台 → 验证闭环
  - 与 AMD、Microsoft、NVIDIA 合作构建差异化智能体能力
  - **Multiphysics Fusion™**：首个 Ansys 收购后整合产品，将多物理场分析（热、电压降、电磁）嵌入设计流程，预计未来几个月正式发布
  - HAPS-200/ZeBu-200 新硬件辅助验证平台，性能提升 2×

---

## 📅 2026-03-16（本次更新：6 篇）

| #   | 标题                                                                                                                   | 类别                   | arXiv                                          | 本地文件                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| 1   | **VeriInteresting: An Empirical Study of Model Prompt Interactions in Verilog Code Generation**                      | RTL 生成 / 提示工程        | [2603.08715](https://arxiv.org/abs/2603.08715) | [PDF](./2026-03-16/2603.08715-VeriInteresting.pdf)         |
| 2   | **Wrong Code, Right Structure: Learning Netlist Representations from Imperfect LLM-Generated RTL**                   | 网表表示学习               | [2603.09161](https://arxiv.org/abs/2603.09161) | [PDF](./2026-03-16/2603.09161-WrongCodeRightStructure.pdf) |
| 3   | **KernelCraft: Benchmarking for Agentic Close-to-Metal Kernel Generation on Emerging Hardware**                      | Agent / Benchmark    | [2603.08721](https://arxiv.org/abs/2603.08721) | [PDF](./2026-03-16/2603.08721-KernelCraft.pdf)             |
| 4   | **CktEvo: Repository-Level RTL Code Benchmark for Design Evolution**                                                 | Benchmark / RTL优化    | [2603.08718](https://arxiv.org/abs/2603.08718) | [PDF](./2026-03-16/2603.08718-CktEvo.pdf)                  |
| 5   | **HDLFORGE: A Two-Stage Multi-Agent Framework for Efficient Verilog Code Generation with Adaptive Model Escalation** | RTL 生成 / Multi-Agent | [2603.04646](https://arxiv.org/abs/2603.04646) | [PDF](./2026-03-16/2603.04646-HDLFORGE.pdf)                |
| 6   | **LUMINA: LLM-Guided GPU Architecture Exploration via Bottleneck Analysis**                                          | 架构探索 / DSE           | [2603.05904](https://arxiv.org/abs/2603.05904) | [PDF](./2026-03-16/2603.05904-LUMINA.pdf)                  |

---

## 📋 论文摘要速览（2026-03-16）

### 🏆 重点推荐

#### 1. HDLFORGE — 两阶段多智能体 Verilog 生成，中位延迟降低 50%

- **arXiv**: https://arxiv.org/abs/2603.04646
- **投稿日期**: 2026-03-04
- **作者**: Armin Abdollahi, Saeid Shokoufa, Negin Ashrafi, Mehdi Kamal, Massoud Pedram（南加州大学）
- **摘要**: HDLFORGE 默认使用中等规模 LLM，通过轻量级诊断（编译/静态检查/冒烟测试）的校准分数决定是否升级到大模型，同时引入反例引导的形式验证 Agent，将有界模型检验跟踪转化为可复用微测试。在 VerilogEval Human/V2 上 Pass@1 达 91.2%/91.8%，中位数延迟降低约 50%，RTLLM Pass@5 达 97.2%。
- **亮点**: 兼顾成本与质量的自适应模型升级机制，形式验证闭环

#### 2. LUMINA — 仅 20 步找到优于 A100 的 GPU 设计方案

- **arXiv**: https://arxiv.org/abs/2603.05904
- **投稿日期**: 2026-03-06
- **作者**: Tao Zhang, Rui Ma, Shuotao Xu, Peng Cheng, Yongqiang Xiong（微软亚研院）
- **摘要**: LUMINA 从仿真器代码中提取架构知识，通过敏感性分析自动构建 DSE 规则。在 470 万样本的设计空间中，仅用 20 步就识别出 6 个在性能和面积上优于 A100 的设计，DSE 效率比 ML 基线高 17.5×，帕累托超体积提升 32.9%。
- **亮点**: LLM 驱动的 GPU 架构设计空间探索，大幅降低人工分析成本

#### 3. CktEvo — 首个仓库级 RTL 演化 Benchmark

- **arXiv**: https://arxiv.org/abs/2603.08718
- **投稿日期**: 2026-02-10
- **作者**: Zhengyuan Shi, Jingxin Wang, Tairan Cheng, Changran Xu, Weikang Qian, Qiang Xu（香港中文大学）
- **摘要**: 与以往孤立代码片段 Benchmark 不同，CktEvo 针对完整 IP 核进行仓库级 RTL 演化评测——给定初始仓库，生成在功能不变前提下改进 PPA 的代码编辑，并提供闭环框架将 LLM 提出的编辑与工具链反馈结合。
- **亮点**: 填补了 LLM 辅助 RTL 优化在仓库级、PPA 驱动场景下的 Benchmark 空白

---

### 📊 其他重要论文

#### 4. VeriInteresting — Verilog 生成中提示策略的系统性实证分析

- **arXiv**: https://arxiv.org/abs/2603.08715
- **投稿日期**: 2026-02-04
- **作者**: Luca Collini, Andrew Hennesee, Patrick Yubeaton, Siddharth Garg, Ramesh Karri（NYU）
- **核心发现**: 采用控制因子实验设计，评测通用/推理/领域专用 LLM 对结构化输出、提示重写、CoT、ICL、遗传-帕累托进化提示优化的响应规律；不同模型类对提示策略反应差异显著，部分规律不可泛化。

#### 5. Wrong Code, Right Structure — 用"不完美 RTL"的结构信息训练网表表示

- **arXiv**: https://arxiv.org/abs/2603.09161
- **投稿日期**: 2026-03-10
- **作者**: Siyang Cai, Cangyuan Li, Yinhe Han, Ying Wang（中国科学院计算技术研究所）
- **核心发现**: LLM 生成的功能不正确 RTL，综合后仍保留强烈指示功能的结构模式；基于此构建数据增强框架，打破电路表示学习数据瓶颈，在噪声语料上训练的模型可匹配或超越用稀缺高质量数据训练的方法。

#### 6. KernelCraft — 新兴加速器近金属内核生成 Benchmark

- **arXiv**: https://arxiv.org/abs/2603.08721
- **投稿日期**: 2026-02-10
- **作者**: Jiayi Nie, Haoran Wu, Yao Lai 等（帝国理工学院 & 剑桥大学）
- **核心发现**: 首个评估 LLM Agent 在定制加速器（新 ISA）上生成优化内核的 Benchmark，覆盖 3 个新兴平台 × 20+ ML 任务 × 5 配置；顶级推理模型数步内即可生成匹配甚至优于模板编译器的内核。

---

## 🌐 行业动态（2026-03-16）

### Cadence ChipStack — 全球首个前端芯片设计与验证 AI Super Agent

- **链接**: https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2026/cadence-unleashes-chipstack-ai-super-agent-pioneering-a-new.html
- **时间**: 2026-02-10（本周持续发酵）
- **动态**: Cadence 发布 ChipStack™ AI Super Agent，声称是全球首个面向前端芯片设计和验证的 Agentic AI 工作流，可实现最高 10× 生产力提升。标志着 EDA 行业头部厂商正式切入 Agentic AI 赛道。

### Stack Overflow Blog — "芯片制造商也开始造 LLM 了"

- **链接**: https://stackoverflow.blog/2026/03/10/even-the-chip-makers-are-making-llms/
- **时间**: 2026-03-10
- **要点**: NVIDIA VP Kari Briski 深度访谈，解析芯片公司进军生成式 AI 软件的底层逻辑及 GPU 加速 LLM 推理的最新进展。

---

## 📅 2026-03-15（本次更新：8 篇）

| #   | 标题                                                                                                               | 类别             | arXiv                                          | 本地文件                                                                          |
| --- | ---------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| 1   | **Design Conductor: An agent autonomously builds a 1.5 GHz Linux-capable RISC-V CPU**                            | Agent 芯片设计     | [2603.08716](https://arxiv.org/abs/2603.08716) | [PDF](./2026-03-15/2603.08716_Design_Conductor_RISCV_CPU.pdf)                 |
| 2   | **SiliconMind-V1: Multi-Agent Distillation and Debug-Reasoning Workflows for Verilog Code Generation**           | RTL 生成         | [2603.08719](https://arxiv.org/abs/2603.08719) | [PDF](./2026-03-15/2603.08719_SiliconMind_V1_Verilog_Generation.pdf)          |
| 3   | **FormalRTL: Verified RTL Synthesis at Scale**                                                                   | RTL 生成 / 形式化验证 | [2603.08738](https://arxiv.org/abs/2603.08738) | [PDF](./2026-03-15/2603.08738_FormalRTL_Verified_RTL_Synthesis.pdf)           |
| 4   | **Synthesis-in-the-Loop Evaluation of LLMs for RTL Generation: Quality, Reliability, and Failure Modes**         | 评测 / Benchmark | [2603.11287](https://arxiv.org/abs/2603.11287) | [PDF](./2026-03-15/2603.11287_Synthesis_in_Loop_LLMs_RTL_Quality.pdf)         |
| 5   | **ChatNeuroSim: An LLM Agent Framework for Automated Compute-in-Memory Accelerator Deployment and Optimization** | AI 加速器 / CIM   | [2603.08745](https://arxiv.org/abs/2603.08745) | [PDF](./2026-03-15/2603.08745_ChatNeuroSim_LLM_CIM_Accelerator.pdf)           |
| 6   | **NL2GDS: LLM-aided interface for Open Source Chip Design**                                                      | 全流程自动化 / 布局    | [2603.05489](https://arxiv.org/abs/2603.05489) | [PDF](./2026-03-15/2603.05489_NL2GDS_LLM_Natural_Language_to_Chip_Layout.pdf) |
| 7   | **ChipBench: A Next-Step Benchmark for Evaluating LLM Performance in AI-Aided Chip Design**                      | Benchmark      | [2601.21448](https://arxiv.org/abs/2601.21448) | [PDF](./2026-03-15/2601.21448_ChipBench_LLM_Chip_Design_Benchmark.pdf)        |
| 8   | **The Dawn of Agentic EDA: A Survey of Autonomous Digital Chip Design**                                          | 综述             | [2512.23189](https://arxiv.org/abs/2512.23189) | [PDF](./2026-03-15/2512.23189_Dawn_of_Agentic_EDA_Survey.pdf)                 |

---

## 📋 论文摘要速览（2026-03-15）

### 🏆 重点推荐

#### 1. Design Conductor — 全球首个自主设计完整 CPU 的 Agent

- **arXiv**: https://arxiv.org/abs/2603.08716
- **投稿日期**: 2026-02-06（更新 2026-03-11）
- **作者**: Verkor Team (Ravi Krishna, Suresh Krishna, David Chin)
- **摘要**: Design Conductor（DC）是目前已知**第一个**能从规格到 GDSII 全自主完成芯片设计的智能体。在 12 小时内，基于 219 字的需求文档，DC 在 ASAP7 PDK 下构建了 RISC-V CPU（VerCore），时序达到 1.48 GHz (rv32i-zmmul)，CoreMark 得分 3261，性能相当于 2011 年 Intel Celeron SU2300。
- **亮点**: 无需人工介入、RTL→验证→时序收敛→GDSII 全自动流程

#### 2. SiliconMind-V1 — 超越 QiMeng-CodeV-R1 的 Verilog 生成框架

- **arXiv**: https://arxiv.org/abs/2603.08719
- **投稿日期**: 2026-02-10（更新 2026-03-11）
- **作者**: Mu-Chi Chen, Yu-Hung Kao, Po-Hsuan Huang 等
- **摘要**: 统一多智能体框架，集成测试平台驱动验证，让本地微调 LLM 能迭代生成、测试和调试 RTL。在 VerilogEval-v2、RTLLM-v2、CVDP 基准上超越当前 SOTA QiMeng-CodeV-R1，且训练资源更少。
- **亮点**: 解决了依赖商业模型的成本与隐私问题

#### 3. FormalRTL — 形式化保证的工业级 RTL 综合

- **arXiv**: https://arxiv.org/abs/2603.08738
- **投稿日期**: 2026-02-25
- **作者**: Kezhi Li, Min Li, Xiangyu Wen, Shibo Zhao 等（香港中文大学）
- **摘要**: 端到端多智能体框架，利用软件参考模型作为形式化规范，通过规划→综合→形式等价性检查三重耦合，实现可扩展的工业级数据通路中心设计。将开源框架和新的工业级基准测试套件。
- **亮点**: 形式化等价检验，解决传统 LLM 生成 RTL"不可信"问题

---

### 📊 其他重要论文

#### 4. Synthesis-in-the-Loop Evaluation — 最全面的 RTL 生成 LLM 横向评测

- **arXiv**: https://arxiv.org/abs/2603.11287
- **投稿日期**: 2026-03-11
- **核心发现**: 评测 32 个 LLM，Gemini-3-Pro 排名第一（覆盖率 87.5%，HQI 85.1）；专有模型"晚期失败"多，开源模型"早期失败"多；多采样策略可提升 HQI 3.8-22.1 分。

#### 5. ChatNeuroSim — 用 LLM Agent 自动化存内计算加速器设计

- **arXiv**: https://arxiv.org/abs/2603.08745
- **投稿日期**: 2026-03-04
- **核心发现**: LLM agent 自动化 CIM 工作流，集成设计空间剪枝优化器，在 Swin Transformer Tiny 案例中将优化运行时间减少 0.42x–0.79x。

#### 6. NL2GDS — 自然语言直接生成芯片版图

- **arXiv**: https://arxiv.org/abs/2603.05489
- **投稿日期**: 2026-03（Bristol 大学 & RAL）
- **核心发现**: 在 ISCAS'85/89 基准上与基线相比，面积减少 36%，延迟降低 35%，功耗节约 70%。

#### 7. ChipBench — 新一代 LLM 芯片设计 Benchmark

- **arXiv**: https://arxiv.org/abs/2601.21448
- **投稿日期**: 2026-01-29
- **核心发现**: 当前最强模型 Claude-4.5-opus 在 Verilog 生成任务上仅 30.74%，Python 参考模型生成仅 13.33%；现有 Benchmark 已严重饱和。

#### 8. The Dawn of Agentic EDA — Agentic EDA 首篇系统综述

- **arXiv**: https://arxiv.org/abs/2512.23189
- **投稿日期**: 2025-12-29（更新 2026-02-07）
- **核心框架**: AI for EDA L2（点优化）→ L3（Agentic EDA，自主编排）；提出认知栈分类法（感知-认知-行动）；关键挑战："仿真到硅"可信度差距。

---

## 🌐 行业动态（2026-03-15）

### ChipAgents — DVCon 2026 展示

- **链接**: https://chipagents.ai/
- **时间**: 2026-03-05
- **动态**: 在 DVCon 2026 上展示业界首创多智能体 AI 团队用于芯片设计验证的**根本原因分析**（RCA），采用分治法搜索 + 智能波形分析，实现全自动调试。

### Hacker News 热议 — AI 设计的芯片"人类无法理解"

- **链接**: https://news.ycombinator.com/item?id=43152407 (444赞，近300评论)
- **核心讨论**: 优化算法的"目标黑客"问题、Adrian Thompson 1996年进化电路实验的历史先例、可验证性与工程实用性的矛盾。

### Promwad 行业分析 — AI 驱动 EDA 工具 2026 全景

- **链接**: https://promwad.com/news/ai-driven-eda-tools-chip-design-automation-2026
- **时间**: 2026-02-10
- **要点**: AI-EDA 已从实验阶段进入主流；物理设计（布局布线）、RTL综合、验证加速、良率预测四大应用领域；可解释性、数据壁垒、算力成本仍是主要挑战。

---

*最后更新: 2026-04-19 | 下次更新: 2026-04-20（周一，arXiv 将发布新批次）*

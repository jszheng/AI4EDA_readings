## 2026-06-18 Execution Summary

**Status:** ✅ Success

**New Papers Added (6 items):**
- AUTOGATE (arXiv:2606.17461) — Yiting Wang, Chenhui Deng, Chia-Tung Ho, Yanqing Zhang, Zhuo Feng, Cunxi Yu, Ang Li, Gang Qu, Brucek Khailany — First agentic framework for industry-grade RTL power optimization via LLM-based clock gating; ML-LLM co-design (ML clustering distills waveform traces → LLM RTL rewriting); hierarchical multi-agent architecture; 49.31% dynamic power reduction (small), 19.34% on NVDLA, 7.96% on BlackParrot, up to 6.86% on production designs; submitted June 16
- PDAGENT-BENCH (arXiv:2606.17253) — Qiufeng Li, Rongqian Chen, Quan Cheng, Chengxuan Wang, Sizhe Tang, Wuxi Li, Duo Ding, Chia-Tung Ho, Haoxing Ren, David Z. Pan, Tian Lan, Weidong Cao — First comprehensive LLM/VLM agent benchmark for VLSI physical design; 353 curated problems; 5 capability dimensions; 11 SOTA models evaluated; key finding: LLMs competitive on conceptual tasks but severely limited in tool-centric execution (42.2% on Innovus script generation); human-skill-enhanced agentic workflows significantly improve performance; submitted June 15
- Shift-Left HLS Verification (arXiv:2606.17128) — Zhihan Xiao, Zhe Zhao, Luke Ztz Hu, Songping Mai — Knowledge-augmented, agent-driven shift-left verification for HLS; Dual-Tier Consistency Checking (static+dynamic); HLS Verification Knowledge Graph; autonomous verification agent; 98.26% coverage, 95.33% consistency on 107 pairs; GitHub: cz-5f/HLS-LeVeri; submitted June 15
- CUTh-Solver (arXiv:2606.17850) — Chenghan Wang, Zhen Zhuang, Shui Jiang, Siyuan Liang, Xiaoman Yang, Kai Zhu, Darong Huang, Luis Costero, Rongmei Chen, Tsung-Wei Huang, David Atienza, Tsung-Yi Ho — GPU-accelerated sparse solver for 3D IC thermal simulation; co-designed PCG framework; DIA storage compression + diagonal SpMV + high-parallelism preconditioning + adaptive mixed-precision; 25.8x faster than COMSOL, 3x faster than NVIDIA AmgX/cuSPARSE/cuDSS; GitHub: Chenghan-Wang/CUTh-Solver; submitted June 16
- ComPart (arXiv:2606.18131) — DAC 2026 accepted — Yugao Zhu, Zhicheng Guo, Yuchao Wu, Mengming Li, Jing Wang, Zhiyao Xie — Community-guided post-coarsening for hypergraph partitioning; first locally-dense decomposition extension to hypergraph domain; submitted June 16
- IMPart (arXiv:2606.18117) — Yugao Zhu, Zhicheng Guo, Shang Liu, Mengming Li, Jing Wang, Zhiyao Xie — Memetic operations integrated into multi-level uncoarsening for large-k-way hypergraph partitioning; collaborative search paradigm; submitted June 16

**New News Added (2 items):**
- kicad-mcp (blwfish/kicad-mcp on GitHub) — Open-source MCP server for KiCad with 17 tools; AI agent-driven full PCB design workflow (schematic→PCB→routing→verification→manufacturing); MIT license; FreeRouter v2.2.4+ integration; 2,000+ tests; supports Claude Code/Cursor/Gemini; June 15
- 算苗科技 3D TokenPU tape-out — First Chinese domestic 3D mixed-stacking AI inference processor A4E taped out on June 15; 16TB/s bandwidth; full domestic supply chain; second chip A4S planned for Feb 2027

**Files Updated:**
- content/dates/2026-06-18.html — New date page (6 papers + 2 news)
- content/latest/2026-06-18.html — New latest page
- content/dates/2026-06-18/ — 7 new PDFs (AUTOGATE, PDAGENT-BENCH, HLS-LeVeri, CUTh-Solver, ComPart, IMPart, PCB-GenAI-Survey)
- content/news/index.html — Added June 18 section with 2 cards (kicad-mcp + 算苗科技)
- content/news/news_memory.json — Added 2 items, totalItems→113
- content/categories/rtl.html — Added AUTOGATE (58 papers now)
- content/categories/physical.html — Added PDAGENT-BENCH, CUTh-Solver, ComPart, IMPart (29 papers now)
- content/categories/verify.html — Added HLS-LeVeri (16 papers now)
- content/categories/agent.html — Added AUTOGATE, PDAGENT-BENCH, HLS-LeVeri (19 papers now)
- manifest.js — Updated stats (papers 168, batches 70, news 113, lastUpdate 2026-06-18)
- Git pushed successfully

**Key Findings:**
- AUTOGATE is a landmark for RTL power optimization: first ML-LLM co-design framework that bridges waveform-level analysis and RTL rewriting, solving the fundamental bottleneck of LLMs processing millions of waveform cycles — practical and results are strong (49.31% on small designs, 19.34% on NVDLA)
- PDAGENT-BENCH fills a critical gap in the ecosystem: while LLM-for-hardware benchmarks have focused on RTL/code generation, there was no standardized benchmark for physical design agents — this reveals that tool-centric execution (42.2% on Innovus scripts) is the key bottleneck, not conceptual understanding
- HLS-LeVeri demonstrates that knowledge graphs + dual-tier consistency checking can achieve near-perfect verification coverage (98.26%) for HLS — the shift-left approach is practical
- CUTh-Solver achieves 25.8x over COMSOL for 3D IC thermal simulation — directly relevant to multi-physics AI analysis for chiplet/3D-IC design
- ComPart/IMPart are DAC 2026 accepted hypergraph partitioning papers — algorithmic advances rather than AI, but relevant to EDA floorplanning
- kicad-mcp is significant: it's the second major open-source MCP server for EDA (after eda-agent for Altium), specifically for KiCad — showing the MCP-based Agentic EDA trend expanding beyond commercial tools
- 算苗科技 3D TokenPU tape-out confirms the industry shift toward 3D mixed-stacking architecture, directly driving demand for 3D-IC EDA tools

**Next Check:** MLCAD Testcase 3 results (June 25), SemiEngineering WIR #143 (expected June 19), DAC 2026 program updates, arXiv cs.AR new papers after weekend

---

## 2026-06-17 Execution Summary

**Status:** ✅ Success

**New Papers Added (2 items):**
- LLM4RTL (arXiv:2606.15500) — Jing Jin, Robert Chu, Ning Yan, Masood S. Mortazavi — Tool-assisted LLM for RTL generation with JRCRC data refinement pipeline; identifies LLM logic reasoning weaknesses; develops preprocessing tool architecture; achieves GPT-4o comparable performance on VerilogEval with much smaller LLM; submitted June 13, 2026
- PANDA (arXiv:2606.15052) — Haoyi Zhang, Weijian Fan, Xiaohan Gao, Bingyang Liu, Runsheng Wang, Yibo Lin (PKU) — LLM-enhanced performance-driven analog design framework; bridges design intent to layout via guided topology synthesis, substructure-aware sizing, constraint-driven layout generation; turnaround time from days/weeks to hours; submitted June 13, 2026

**New News Added (1 item):**
- eda-agent (salitronic/eda-agent on GitHub) — Open-source MCP server for Altium Designer with 300+ tools; Apache 2.0; covers schematic/PCB/library/project/design-agent/routing; batch operations 10-100x faster; 31 design audit checks; DesignPlan JSON auto-generation; latest commit June 15 fixing AD26 compatibility

**Files Updated:**
- content/dates/2026-06-17.html — New date page (2 papers + 1 news)
- content/latest/2026-06-17.html — New latest page
- content/dates/2026-06-17/ — 2 new PDFs (2606.15500_LLM4RTL, 2606.15052_PANDA)
- content/news/index.html — Added eda-agent card in June 17 section (now 2 items)
- content/news/news_memory.json — Added 1 item, totalItems→111
- content/categories/rtl.html — LLM4RTL already present (57 papers)
- content/categories/analog.html — PANDA already present (20 papers + 1)
- manifest.js — Updated stats (papers 162, batches 69, news 111, lastUpdate 2026-06-17)
- Git pushed successfully

**Key Findings:**
- LLM4RTL's JRCRC pipeline is a novel contribution: using a hierarchy of commercial LLMs with different cost/capability tradeoffs to filter and refine training data, then adding tool-assisted preprocessing to compensate for LLM logic reasoning weaknesses — this is a practical approach that could benefit many LLM-for-hardware systems
- PANDA from Yibo Lin's group at PKU is significant: first framework to bridge design intent directly to layout in analog design using LLM, managing cross-stage dependencies proactively rather than treating each stage in isolation
- eda-agent is a major open-source contribution for PCB design: 300+ MCP tools for Altium Designer means AI agents can now fully automate PCB design workflows — directly relevant to the "AI skills/agents for EDA" focus
- Futurum analysis of Cadence vs Synopsys Agentic EDA was already added (from earlier update): Cadence pursuing verification depth (Level-5 autonomy), Synopsys pursuing multi-physics breadth
- No SemiEngineering WIR #143 yet (expected ~June 19)
- MLCAD Testcase 3 deadline is tomorrow (June 18), results June 25

**Next Check:** MLCAD Testcase 3 results (June 25), SemiEngineering WIR #143 (expected June 19), DAC 2026 program updates, arXiv cs.AR new papers after weekend

---

## 2026-06-16 Execution Summary

**Status:** ✅ Success

**New Papers Added (3 items):**
- VHDLSuite (arXiv:2606.13735) — Yijun Shen, Muhammad Shafique (NYU Abu Dhabi) — First unified pipeline for LLM VHDL generation with data synthesis and evaluation; VHDLBench with 200+ VHDL problems; automatic Verilog→VHDL conversion pipeline via VUnit/GHDL; submitted June 11, 2026
- HierSVA (arXiv:2606.13706) — Maohua Nie, C.-J. Richard Shi (UW) — LLM-driven hierarchical hardware formal verification; data synthesis pipeline for SystemVerilog assertions; 342 modules from BaseJump STL; 6-dimension assertion quality benchmark; 12 LLMs evaluated; key finding: recall 0.87 but precision only 0.60 (40% false positive); Agent mode has plateau; GitHub: HierSVAAnon/HierSVACodeAndArtifacts; submitted June 9, 2026
- BigPower (arXiv:2606.13747) — Honghua Zhu, Jianfeng Zhan (ICT CAS) — LLM-based hierarchical source-level CPU module power estimation; no simulation needed at inference; evaluated on XiangShan processor family; submitted June 11, 2026

**New News Added (2 items):**
- Samsung 2nm (SF2Z) EDA certification — Synopsys/Cadence/Siemens EDA simultaneously announced expanded certified design flows, IP, and AI-driven capabilities on Samsung Foundry's 2nm GAA processes (SF2Z/SF2P); from Samsung Foundry Forum, widely reported June 8; Futurum analysis published June 1
- NVIDIA SkillSpector — Open-source security scanner for AI agent skills; 26.1% of public skills contain vulnerabilities, 5.2% likely malicious; 64 vulnerability patterns + optional LLM analysis; supports Claude Code/Codex CLI/Gemini CLI; released June 13, 2026

**Files Updated:**
- content/dates/2026-06-16.html — New date page (3 papers + 2 news)
- content/latest/2026-06-16.html — New latest page
- content/dates/2026-06-16/ — 3 new PDFs (2606.13735, 2606.13706, 2606.13747)
- content/news/index.html — Added June 16 section with 2 cards (Samsung 2nm + SkillSpector)
- content/news/news_memory.json — Added 2 items, totalItems→109
- content/categories/rtl.html — Added VHDLSuite (55 papers now)
- content/categories/verify.html — Added HierSVA (15 papers now)
- content/categories/physical.html — Added BigPower (25 papers now)
- manifest.js — Updated stats (papers 160, batches 68, news 109, lastUpdate 2026-06-16)
- Git pushed successfully

**Key Findings:**
- VHDLSuite fills the VHDL gap in LLM-for-hardware evaluation — while Verilog dominates research, VHDL is critical in defense/aerospace and this is the first systematic benchmark
- HierSVA reveals a fundamental precision problem in LLM-generated formal verification: high recall (0.87) but low precision (0.60) due to 40% false positive rate — this is a significant practical barrier for adoption
- BigPower from ICT CAS (Jianfeng Zhan group) shows LLM representations can replace simulation for power estimation — directly relevant to AI-assisted physical design
- Samsung 2nm EDA certification by all three major vendors marks the shift from "tool support" to "AI-driven co-optimization" at foundry level
- NVIDIA SkillSpector is directly relevant to Agentic EDA security — as EDA tools become skill-based (Siemens Fuse EDA, Cadence ChipStack), security scanning becomes essential infrastructure

**Next Check:** MLCAD Testcase 3 deadline (June 18, day after tomorrow), SemiEngineering WIR #143 (expected ~June 19), DAC 2026 program updates, Si2 DAC panel "Agentic AI in EDA: Who's in Control?" (July 27)

---

## 2026-06-15 Execution Summary

**Status:** ✅ Success

**New Paper Added (1 item):**
- Alpha-RTL (arXiv:2606.05253) — Peilong Zhou, Ying Wang (CAS) — First per-design test-time training framework (TTT-RTL) closing the loop between LLM policy and EDA pipeline for RTL optimization; PPA product reduced 65.1% on RTLLM v2.0; 59.4% ADP reduction on Xuantie C910 FPU; adaptive KL budget controller for stable policy updates

**New News Added (1 item):**
- Cadence × Intel Foundry multi-year DTCO partnership — Agentic AI-driven EDA + Design IP for Intel 14A process optimization, targeting HPC and mobile designs (announced June 8, widely reported June 8-11)

**Files Updated:**
- content/dates/2026-06-15.html — Added Alpha-RTL paper + Cadence×Intel 14A news (now 1 paper + 2 news)
- content/latest/2026-06-15.html — Updated with Alpha-RTL + Cadence×Intel news
- content/dates/2026-06-15/ — 1 new PDF (2606.05253_Alpha-RTL)
- content/news/index.html — Added Cadence×Intel 14A card in June 8 section (now 2 items)
- content/news/news_memory.json — Added 2 items (Alpha-RTL + Cadence×Intel 14A), totalItems→107
- content/categories/rtl.html — Added Alpha-RTL (54 papers now)
- content/categories/agent.html — Added Alpha-RTL (17 papers now)
- manifest.js — Updated stats (papers 157, batches 67, news 107, lastUpdate 2026-06-15)
- Git pushed successfully

**Key Findings:**
- Alpha-RTL is a landmark paper for RTL generation: first test-time training framework for per-design RTL optimization, demonstrating that LLMs can go beyond functional correctness to physical-level optimization when given EDA feedback loops
- Cadence × Intel 14A DTCO partnership extends Agentic AI from design tools to foundry collaboration, showing the industry trend toward AI-driven co-optimization of process and design
- Si2 AI for EDA Ontology (already added in earlier run on June 15) — Apache 2.0 ontology + MCP server for formal EDA reasoning
- MLCAD 2026 Testcase 3 deadline is June 18 (not June 14 as previously recorded), final results June 25
- No new SemiEngineering articles since June 11; WIR #143 expected around June 19
- arXiv cs.AR June 12-15 had no new AI4EDA papers (weekend + no relevant new submissions)
- DAC 2026 registration open (July 26-29, Long Beach)

**Next Check:** MLCAD Testcase 3 deadline (June 18), SemiEngineering WIR #143 (~June 19), DAC 2026 program updates, Synopsys/Cadence/Siemens EDA new product announcements

---

## 2026-06-15 Execution Summary (earlier run)

**Status:** ✅ Success

**New News Added (1 item):**
- Si2 AI for EDA Ontology — Si2 (Siemens EDA/Synopsys/Qualcomm/NXP/IBM/ASU/Drexel/NCSU) — Industry's first formal EDA domain ontology for AI agents; Apache 2.0 open source; includes MCP server for agent discovery & reasoning; GitHub: si2org/AIML_Schema_Ontology (from WIR #142, June 12)

**New Papers:**
- None (June 13-15 weekend)

**Files Updated:**
- content/dates/2026-06-12.html — Added Si2 Ontology news card (now 3 news items)
- content/dates/2026-06-15.html — New date page (1 news item)
- content/latest/2026-06-15.html — New latest page
- content/news/index.html — Added June 12 section with Si2 Ontology card
- content/news/news_memory.json — Added 1 item, totalItems→106
- manifest.js — Updated stats (batches 66, news 106, lastUpdate 2026-06-15)
- Git pushed successfully

**Key Findings:**
- Si2 AI for EDA Ontology is a landmark development: first standardized semantic infrastructure for Agentic EDA, filling the missing "semantic interoperability layer" in the ecosystem. The MCP server integration means AI agents can directly discover and reason about EDA domain knowledge — this is foundational for multi-agent orchestration
- MLCAD Testcase 3 deadline corrected: June 18 (not June 14 as previously stated), results June 25
- SemiEngineering WIR #142 published June 12 with comprehensive industry coverage (also noted Cadence+Intel 14A PDK, Rapidus $943M, PhysicsX $300M, Broadcom $35B, UK AI Hardware plan)
- Weekend (June 13-15): no new arXiv papers, no new SemiEngineering articles as expected
- DAC 2026 Explorer tool now available, no major program updates

**Next Check:** MLCAD Testcase 3 deadline (June 18), MLCAD results (June 25), SemiEngineering WIR #143 (expected June 19), DAC 2026 program, any post-weekend arXiv papers

---

## 2026-06-12 Execution Summary

**Status:** ✅ Success

**New Paper Added (1 item):**
- Physics-informed GenAI for Semiconductor Manufacturing (arXiv:2606.11247) — UBC — Systematic review of enforcing physical constraints in generative models for EDA; 4 integration patterns for genAI + physics simulators; directly relevant to AI-assisted backend physical design

**New News Added (1 item):**
- Can AI Create Missing Models? — SemiEngineering/Brian Bailey — Deep analysis of AI's capability in EDA model creation: analog behavioral modeling (weeks→hours), RL for PPA optimization, LLM for verification plans; covers data deficiency, physical awareness gaps, and maintenance cost challenges

**Files Updated:**
- content/dates/2026-06-11.html — Added Physics-Informed GenAI paper + Brian Bailey news (now 3 papers + 2 news)
- content/latest/2026-06-11.html — Updated with new paper and news
- content/news/index.html — June 11 section expanded to 3 cards (added Brian Bailey article)
- content/news/news_memory.json — Added 1 item, totalItems→105
- manifest.js — Updated stats (papers 156, news 105, lastUpdate 2026-06-12)
- Git pushed successfully

**Key Findings:**
- Brian Bailey's "Can AI Create Missing Models?" is a landmark article synthesizing AI's current capabilities and limitations across the entire EDA model landscape — essential reading for understanding AI-for-EDA's practical boundaries
- Physics-informed GenAI paper bridges the gap between generative AI research and semiconductor manufacturing constraints — significant for guiding AI-assisted physical design verification
- MLCAD contest: Testcase 3 deadline June 14 (unchanged), final results June 22, no new results today
- arXiv cs.AR June 11 had mostly chiplet/LLM-serving papers, not strongly AI4EDA; cs.LG had no AI4EDA papers
- No ESD Alliance Executive Outlook post-event coverage found yet

**Next Check:** MLCAD Testcase 3 deadline (June 14), SemiEngineering WIR #142 (expected June 13), DAC 2026 program, ESD Alliance post-event coverage

---

## 2026-06-11 Execution Summary

**Status:** ✅ Success

**New Papers Added (2 items):**
- EstRTL (arXiv:2606.09867) — NUDT — Functional Estimation Guided RTL Code Generation: 3-stage agent framework (Generate→Estimate→Fix), correctness +3.2%~9.0%, open-source
- OpenRTLSet (arXiv:2606.10285) — UIUC (Deming Chen), ICLAD'25 — Largest fully open-source Verilog dataset: 131K samples (GitHub+VHDL+C translation), DeepSeek-R1 annotations, proves open-source can surpass closed-source

**New News Added (1 item):**
- Building Multi-Agent Systems For ASIC Flows — SemiEngineering/ChipAgents — Kexun Zhang on orchestration, role assignment, problem decomposition for multi-agent ASIC design

**Files Updated:**
- content/dates/2026-06-10.html — Added EstRTL paper + Multi-Agent news (3 papers + 2 news now)
- content/latest/2026-06-10.html — Updated with EstRTL + Multi-Agent news
- content/dates/2026-06-11.html — New date page (EstRTL + OpenRTLSet + Multi-Agent news)
- content/latest/2026-06-11.html — New latest page
- content/dates/2026-06-10/ — 1 new PDF (2606.09867)
- content/dates/2026-06-11/ — 2 PDFs (2606.09867_EstRTL, 2606.10285_OpenRTLSet)
- content/news/index.html — June 10 section updated to 2 cards (added Multi-Agent)
- content/news/news_memory.json — Added 1 item, totalItems→102
- content/categories/rtl.html — Auto-updated (EstRTL + OpenRTLSet, 53 papers)
- manifest.js — Updated stats (papers 155, batches 65, news 102, lastUpdate 2026-06-11)
- Git pushed successfully

**Key Findings:**
- EstRTL addresses the critical gap in LLM-based RTL generation: functional correctness. The 3-agent closed-loop approach is practical and model-agnostic
- OpenRTLSet by Deming Chen's group fills a major void in open-source Verilog training data. At 131K samples with CC BY 4.0 license, it's a landmark contribution for reproducible LLM-for-hardware research
- ChipAgents' multi-agent orchestration discussion signals that the industry is moving from single-agent demos to production-grade multi-agent systems for ASIC flows
- ESD Alliance Executive Outlook (June 10) still has no published post-event coverage — continue monitoring

**Next Check:** ESD Alliance Executive Outlook post-event coverage, MLCAD Beta Testcase 3 deadline (June 14), SemiEngineering WIR #142, DAC 2026 program schedule

---

## 2026-06-10 Execution Summary

**Status:** ✅ Success

**New Papers Added (2 items):**
- LongRTL (arXiv:2606.08944) — CUHK/CUHK(SZ), DATE 2026 — Graph-similarity-guided LLM-driven long context RTL optimization with 3-agent architecture (Partition + Optimize + Reconstruct)
- AttentionCap (arXiv:2606.08161) — Tsinghua (THU-numbda), DAC 2026 — Transformer-based full-chip capacitance matrix learning: self-cap error 0.67%, coupling 3.99%, 192x faster than CNN-Cap

**New News Added (1 item):**
- MLCAD 2026 Beta Testcase 2 partial results: nvdla_a 60.69 highest, 7 designs evaluated, Testcase 3 due June 14

**Duplicate Cleanup:**
- Removed Qualcomm/ByteDance duplicate (2026-05-26 entry, superseded by 2026-06-09 version)

**Files Updated:**
- content/dates/2026-06-10.html — New date page with 2 papers + 1 news card
- content/latest/2026-06-10.html — New latest page
- content/dates/2026-06-10/ — 2 PDF files (2606.08944, 2606.08161)
- content/news/index.html — Added June 10 section (1 card)
- content/news/news_memory.json — Added 1 item, removed 1 duplicate, totalItems→101
- content/categories/physical.html — Auto-updated (AttentionCap)
- content/categories/rtl.html — Auto-updated (LongRTL)
- manifest.js — Updated stats (papers 153, news 101, lastUpdate 2026-06-10)
- Git pushed successfully

**Key Findings:**
- LongRTL is a significant contribution for industrial-scale RTL optimization — 3-agent architecture addressing context window limitations via AST graph decomposition + multimodal RAG
- AttentionCap is DAC 2026 accepted, with strong practical value: pretrained model transfers to new process nodes with only 5K samples + 4K fine-tune steps
- ESD Alliance Executive Outlook happened today (June 10, 5:30 PM PT) — no published results yet, monitor for June 11
- MLCAD Beta Testcase 2 shows competitive landscape: nvdla_a/p >60, mempool_group only 11.9, highlighting design-specific challenges
- DAC 2026 accepted paper IDs published (587 papers), program details on https://63dac.conference-program.com/

**Next Check:** ESD Alliance Executive Outlook results (June 11), MLCAD Beta Testcase 3 deadline (June 14), DAC 2026 program details, SemiEngineering WIR #142

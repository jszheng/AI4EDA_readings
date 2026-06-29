## 2026-06-30 Execution Summary

**Status:** ✅ Success (2 new papers + 3 new industry news)

**New Papers Added (2 items):**
- HORIZON (arXiv:2606.28279) — NVIDIA — Self-evolving RTL agent framework for repository-level code evolution; three stages (Experience Collection, Skill Learning, Inference) with LLM judge + quality filter; achieves 64% Pass@1 on repository-level Verilog refactoring; solves out-of-context memory and task distribution shift in LLM-for-RTL; submitted June 29, cs.AR
- MultModLM (arXiv:2606.27666) — University of Texas at Austin, Columbia University, UCLA — First multimodal benchmark for LLM hardware schematic generation; 1,231 problems across 6 categories; best model reaches 73.0% overall but only 19.1% on layout-conditional generation; reveals schematic understanding as bottleneck; submitted June 28, cs.AR

**New News Added (3 items):**
- Siemens Fuse EDA AI Agent — AgentMarketCap deep analysis — End-to-end autonomous chip design agent from RTL to signoff; MCP orchestration + Agent Skills; 18 autonomous sub-agents; runs in isolated sandbox; integrates Calibre/Valor/Tessent; tracks tasks/skills/artifacts via reasoning graph; industrial deployment with guardrails
- ChipAgents 2026 Entrepreneur of the Year — TSMC 2026 OIP Ecosystem Forum — Recognized for AI-native chip design innovation; multi-agent system deployed across multiple tapeouts; annual event in Santa Clara
- kicad-happy — GitHub open-source skill suite — Multi-agent AI workflow for KiCad; 5 specialized skills (schematic/layout/pcb/review/export); auto ERC/DRC; Gerber/drill/BOM generation; joins growing ecosystem of open-source EDA agent skills

**Files Updated:**
- content/dates/2026-06-30.html — New date page (2 papers + 1 news)
- content/latest/2026-06-30.html — New latest page
- content/papers/index.html — New redirect page to latest date
- content/dates/2606.28279_HORIZON.pdf — Downloaded (NVIDIA, 581KB)
- content/dates/2606.27666_MultModLM.pdf — Downloaded (UT Austin/Columbia/UCLA, 313KB)
- content/news/index.html — Added 2026-06-30 section with 3 cards (Siemens Fuse + ChipAgents award + kicad-happy)
- content/news/news_memory.json — Added 3 items, reconciled totalItems→126, lastUpdate→2026-06-30
- content/categories/rtl.html — Added HORIZON + MultModLM (61→63 papers)
- content/categories/agent.html — Added HORIZON (24→26 papers)
- manifest.js — Updated stats (papers 187, batches 77, news 126, lastUpdate 2026-06-30); added 2026-06-30 to latest and dates arrays
- Git: Committed (8536239 "auto update: 2026-06-30") and pushed to origin/main

**Key Findings:**
- HORIZON is a major step toward repository-level RTL agent systems: unlike prior single-file generation work, it learns reusable skills from historical edits and applies them across an evolving codebase — directly addressing the maintenance-and-refactoring gap that dominates real semiconductor design work
- MultModLM establishes the first rigorous multimodal benchmark for hardware schematic generation and reveals that even the best models struggle with layout-conditioned generation (19.1%), highlighting visual-spatial reasoning as the next frontier for LLM hardware agents
- Siemens Fuse EDA AI Agent represents the most concrete industrial "end-to-end autonomous chip design" system described publicly to date, with explicit MCP orchestration, sandboxed tool execution, and reasoning-graph tracking — it bridges academic Agentic EDA discourse with industrial deployment reality
- ChipAgents' OIP Entrepreneur of the Year award signals TSMC's recognition of AI-native design startups as a strategic ecosystem pillar, not just tool vendors
- kicad-happy shows the open-source EDA agent skill ecosystem is diversifying beyond single MCP servers toward coordinated multi-skill workflows, mirroring Siemens' industrial agent architecture at the hobbyist/small-team level
- arXiv cs.AR June 29-30 produced a strong AI4EDA crop (12 relevant submissions, 2 selected); cs.LG and cs.SE had no EDA-relevant papers in this window, confirming cs.AR as the primary source
- SemiEngineering WIR #145 returned 404 (still not published or URL changed) — continue monitoring; WIR #144 from June 26 was already captured
- Count reconciliation: discovered and fixed inconsistency between news/index.html (128), manifest.js (125), and news_memory.json totalItems (125); actual count is 126 unique items, now aligned across all three files

**Next Check:**
- SemiEngineering WIR #145 (still pending)
- MLCAD 2026 final results (overdue; Beta Testcase 2 published, final results expected soon)
- arXiv cs.AR new papers (July 1 window)
- DAC 2026 program updates (July 26-29, Long Beach)
- Si2 "Agentic AI in EDA: Who's in Control?" panel at DAC (July 27)
- ICML 2026 proceedings (late July)

---



**Status:** ✅ Success (1 new paper + 1 new open-source project news)

**New Paper Added (1 item):**
- CHIA (2606.27350) — UC Berkeley (Shao/Nikolic/Fletcher/Karandikar) — First open-source framework treating co-design workflows as first-class citizens; CHIA Loop directed cyclic graph abstraction; integrates Chipyard/gem5/Hammer (commercial ASIC CAD)/Vivado/AlphaEvolve/AdaEvolve; AI-hardware isolation + profiling + fault tolerance; 5 case studies including auto RTL-to-gem5 alignment, LLM-driven microarchitecture RTL, IPC-aware optimization, evolutionary discovery, agentic issue fixing; submitted June 25, cs.AR

**New News Added (1 item):**
- UC Berkeley CHIA GitHub Release — Open-source Agentic AI hardware/software co-design framework; BSD license; Python 3.10.19; Docker deployment; documentation at docs.chialoops.ai; GitHub: ucb-bar/chia (public June 27)

**No Content from June 27-29 (Weekend):**
- arXiv: No new cs.AR/cs.LG/cs.SE submissions during weekend
- SemiEngineering WIR #144 not yet published (WIR #143 was June 19 — now overdue by ~2 weeks)
- MLCAD 2026 final results still not posted (overdue since June 25 — "Best total score will be updated after Test Case 3 evaluation")
- No new EDA vendor announcements (Cadence/Synopsys/Siemens quiet during weekend)
- DAC 2026 program appears finalized, no major updates (conference July 26-29, Long Beach)

**Files Updated:**
- content/latest/2026-06-26/index.html — Added CHIA paper (now 4 papers + 3 news)
- content/dates/2026-06-26/index.html — Added CHIA paper (count 6→7)
- content/dates/2026-06-26/2606.27350_CHIA.pdf — Downloaded
- content/news/index.html — Added June 27 section with CHIA GitHub card
- content/news/news_memory.json — Added CHIA item, totalItems→124, lastUpdate→2026-06-29
- content/categories/rtl.html — Added CHIA (60→61 papers)
- content/categories/agent.html — Added CHIA (24→25 papers)
- manifest.js — Updated stats (papers 184, news 124, lastUpdate 2026-06-29)
- Git: Committed (859da37) and pushed to origin/main

**Key Observations:**
- CHIA is a landmark infrastructure contribution: unlike all prior LLM-for-RTL tools, CHIA doesn't solve a specific EDA task — it provides the *research infrastructure* for systematically designing, deploying, and evaluating agentic AI-driven co-design workflows. This fills the critical gap between individual demos and reproducible research
- CHIA's integration with Hammer enables commercial ASIC CAD tool access (Cadence/Synopsys) within agentic workflows — bridging open-source research with industrial EDA
- The 5 CHIA loop case studies demonstrate the framework's breadth: from RTL generation to simulation alignment to evolutionary architecture discovery to maintenance automation
- June 27-29 (Friday PM through Sunday) is structurally quiet: no new arXiv submissions, no press releases, no SemiEngineering articles
- MLCAD 2026 final results now 4 days overdue — continue monitoring
- SemiEngineering WIR #144 ~2 weeks overdue — may indicate WIR series is paused or rescheduled

**Next Check:**
- MLCAD 2026 Contest final results (urgently overdue)
- SemiEngineering WIR #144 (overdue ~2 weeks)
- DAC 2026 program (July 26-29, Long Beach — ~4 weeks away)
- arXiv cs.AR/cs.SE/cs.LG new papers (June 30 window)
- ICML 2026 proceedings (late July)
- Si2 "Agentic AI in EDA: Who's in Control?" panel at DAC (July 27)

---

## 2026-06-26 Execution Summary

**Status:** ✅ Success (3 new papers + 3 new industry news)

**New Papers Added (3 items):**
- SafeGen (2606.25296) — LLM-driven assertion generation + fault criticality evaluation for functional safety; HyperKG + FMEDA fusion; gate-to-RTL fault mapping; FPV semantic-level criticality assessment; DAC 2026 accepted; submitted June 24, cs.AR
- Inverse Lithography (2606.25753) — Gradient-based EUV mask ILT via Waveguide Method + Physics-Informed Neural Operator (WGNO); differentiable forward diffraction model; automatic differentiation; 2D/3D absorber (TaBN/La/U) at λ=11.2nm; submitted June 24, cs.LG/cs.AI/math.OC
- Agentic Physically Constrained (2606.25532) — Physically grounded multi-agent discovery engine for hardware-compliant computing; Evolutionary Knowledge Graph + algorithmic CoT; Q-Enhance + MoE-Salient-AQ hardware-aware compression; 235B→dual-A100 75% memory reduction with 0.64% accuracy loss; submitted June 24, cs.AI/cs.AR/cs.LG/cs.MA

**New News Added (3 items):**
- SemiEngineering Executive Outlook: Agentic AI's Impact On Chip Design — 6 executives (ChipAgents/Silvaco/Moores Lab AI/Breker/Verific/Silimate); benchmark & consensus are key infrastructure; June 25
- SemiEngineering Brian Bailey: Verification Methodologies Struggle To Keep Up With AI — AI arms race, agentic workflows 150→400+ equivalent, skill reshaping; June 25
- SemiEngineering Liz Allan: I/O Design Challenges Grow In AI Data Centers And HPC Clusters — Physical I/O bottleneck, chiplet/3D cross-domain coupling, Agent AI assisting physical problems, OCP MRC protocol; June 25

**Files Updated:**
- content/dates/2026-06-26/index.html — 3 papers + 3 news cards
- content/latest/2026-06-26/index.html — 3 papers + 3 news cards
- content/dates/2026-06-26/ — 3 PDFs (SafeGen, InverseLithography, AgenticPhysicallyConstrained)
- content/latest/2026-06-26/ — 3 PDFs copied
- content/news/index.html — June 25 section expanded from 2→3 cards (added I/O Design Challenges)
- content/news/news_memory.json — Added I/O Design item, totalItems→123, lastUpdate→2026-06-26
- content/categories/physical.html — Added InverseLithography (30→32 papers)
- content/categories/agent.html — Added AgenticPhysicallyConstrained (22→24 papers)
- manifest.js — Updated stats (papers 183, batches 75, news 123, lastUpdate 2026-06-26)
- Git: Committed (ea64893) and pushed to origin/main

**Key Observations:**
- SafeGen is the first LLM-driven functional safety framework for automotive chips — extends LLM assertion generation beyond verification to the safety domain, with FPV + HyperKG providing formal traceability
- Inverse Lithography via WGNO represents a new approach to EUV mask optimization — treating waveguide method as differentiable physics engine enables gradient-based ILT without traditional pixel-based optimization
- Agentic Physically Constrained Foundation Models is significant for Agentic EDA: multi-agent + evolutionary knowledge graph + hardware-aware compression — directly applicable to constrained hardware design flows
- Executive Outlook confirms industry consensus: Agentic EDA needs benchmark infrastructure and collaborative frameworks, not just individual tool capabilities
- Verification Methodologies article reveals the fundamental deployment challenge: no one knows how to optimally deploy AI yet, and the junior vs senior engineer debate highlights organizational change barriers
- I/O Design Challenges article documents the emerging role of Agent AI in solving cross-domain physical coupling problems (thermal/electrical/mechanical) — physics-based AI is becoming practical EDA tooling
- MLCAD 2026 Testcase 3 final results still not posted (were expected June 25) — continue monitoring
- SemiEngineering WIR #144 not yet published (expected ~June 26-27)
- arXiv cs.AR June 25 had limited AI4EDA content beyond SafeGen; Croc (2606.25673) is an education paper (open-source silicon course) — not AI4EDA methodology, so not included
- Croc (2606.25673, chip design education) was borderline — decided not to include since it's about education infrastructure rather than AI for EDA methodology

**Next Check:**
- MLCAD 2026 Contest final results (still pending, expected soon)
- SemiEngineering WIR #144 (expected ~June 26-27)
- DAC 2026 program updates (July 26-29, Long Beach)
- arXiv cs.AR/cs.SE new papers (June 26 window)
- ICML 2026 proceedings (late July)

---

## 2026-06-25 Execution Summary

**Status:** ✅ Success (2 new papers, no new industry news)

**New Papers Added (2 items):**
- VeriPilot (2606.23759) — LLM-powered Verilog debugging framework; golden reference model + CDFG for precise bug localization; GPT-4o repair success from 54.3% → 85.71% on NVIDIA CVDP benchmark; 62% less debug time; open-source GitHub: YihanWn/VeriPilot; submitted June 22, cs.AR/cs.SE
- PCB-QA (2606.23704) — First PCB design QA dataset for LLM evaluation; 480 QA pairs from 8 open-source hardware projects; Gemini 3 Flash Preview 93% accuracy; covers schematic understanding, layout rules, component selection, signal integrity; open-source; submitted June 10, cs.AR

**No New Industry News:**
- Cadence blog posts (June 24): "Stylus Compare" tool feature + "Timing Correlation" blog — both are tool-feature blogs, not qualifying as major 行业动态
- SemiEngineering WIR #144 not yet published (WIR #143 was June 19, #144 expected ~June 26)
- MLCAD Testcase 3 results not yet posted (were expected June 25, continue monitoring)
- Blog Review June 24 exists but content (crash test dummies, dummy fill) is not AI4EDA-relevant

**Files Updated:**
- content/dates/2026-06-25.html — New date page (VeriPilot + PCB-QA)
- content/latest/2026-06-25.html — New latest page
- content/dates/2026-06-25/ — 2 PDFs (2606.23759_VeriPilot, 2606.23704_PCB-QA)
- manifest.js — stats updated (papers 178→180, batches 73→74, lastUpdate 2026-06-25)
- Git: Committed (921c1a8) and pushed to origin/main

**Key Observations:**
- VeriPilot is practically significant: it's the first LLM-based Verilog debugging framework using golden reference models (common in verification testbenches) for precision bug localization — the CDFG approach bridges LLM semantic understanding with hardware structural reasoning
- PCB-QA fills a notable gap: while RTL/Verilog LLM datasets are plentiful, PCB design QA datasets have been absent — this opens a new dimension for LLM evaluation in hardware design
- Today is a relatively quiet day (2 papers, 0 news items): June 24-25 period is typically quiet as the ICCAD deadline has passed and DAC is still a month away
- arXiv cs.AR June 22-24 window had limited AI4EDA content beyond these two papers

**Next Check:**
- MLCAD Testcase 3 final results (overdue, expected June 25 — check again June 26)
- SemiEngineering WIR #144 (expected ~June 26)
- DAC 2026 program update (July 26-29, Long Beach)
- arXiv cs.AR new papers (June 25 window)

---

## 2026-06-24 Execution Summary

**Status:** ✅ Success (6 new papers + 1 new news item)

**New Papers Added (6 items):**
- Agentic EDA: A Handoff Perspective (2606.19795) — CUHK Bei Yu — Systematic survey of 82 agentic EDA systems organized around "handoff validity"; three boundary classes (Stage-Bound/Flow-Bound/Organization-Bound); four-dimensional analysis framework; five-layer EACP protocol; submitted June 18, cs.SE/cs.AI (missed in previous cs.AR/cs.LG searches)
- Interpretable and Verifiable Hardware Generation (2606.19387) — UT Austin David Z. Pan — LLM + formal methods stepwise refinement for RTL generation; transformation rules guarantee correctness; first formal-method+LLM combination for RTL; submitted June 16, cs.SE/cs.AI
- LithoGRPO (2606.00228) — CUHK Bei Yu/Ping Luo — First Flow Matching + GRPO RL unified framework for inverse lithography mask optimization; fast shot-counting 130x speedup; ICML 2026 accepted; submitted May 29, cs.LG
- LLM-RTL-Assertions (2606.21451) — Southampton — Quality-aware formal verification closed loop for LLM-generated RTL assertions; mutation-guided refinement; solver-selection; causal narrative synthesis; submitted June 19, cs.AR
- AgentDSE (2606.21836) — Harvard Vijay Janapa Reddi/Yilun Du — LLM coding agent for simulator-in-the-loop DSE; two orders of magnitude fewer evaluations; MLArchSys @ ISCA 2026; submitted June 20, cs.AR
- A3C3 (2606.20869) — UIUC Deming Chen — AI algorithm and accelerator co-design, co-search, co-generation methodology; Springer book chapter; submitted June 18, cs.AR

**New News Added (1 item):**
- Siemens Fuse EDA AI vs Synopsys.ai vs Cadence.AI — DFT engineer Alfonso Marco comparison; three companies now position AI as platform layer across design/verification/implementation/test; practical DFT perspective; LinkedIn, June 21

**Files Updated:**
- content/dates/2026-06-24.html — New date page (6 papers + 1 news)
- content/latest/2026-06-24.html — New latest page (6 papers + 1 news)
- content/dates/2026-06-24/ — 6 new PDFs (AgenticEDA-Handoff, HWGen-StepwiseRefinement, LithoGRPO, LLM-RTL-Assertions, AgentDSE, A3C3)
- content/news/index.html — Added June 24 section with Siemens/Synopsys/Cadence AI comparison card
- content/news/news_memory.json — Added 1 item, totalItems→120
- content/categories/rtl.html — Added HWGen-StepwiseRefinement (60 papers now)
- content/categories/physical.html — Added LithoGRPO (30 papers now)
- content/categories/agent.html — Added AgenticEDA-Handoff + AgentDSE (22 papers now)
- content/categories/verify.html — Added LLM-RTL-Assertions (17 papers now, already synced by parallel run)
- manifest.js — Updated stats (papers 178, batches 73, news 120, lastUpdate 2026-06-24)
- Git: Committed (773c49d "auto update: 2026-06-24"), push pending

**Key Findings:**
- Agentic EDA: A Handoff Perspective is a landmark survey: first to reframe Agentic EDA from "local task automation" to "handoff validity" — this vocabulary change is significant because it reveals that current systems collectively lack infrastructure for cross-boundary reliability (the EACP proposal is a concrete research agenda)
- Interpretable and Verifiable Hardware Generation from David Z. Pan's group is the first LLM + formal methods combination for RTL generation, addressing hallucination concerns — this complements AUTOGATE's ML-LLM co-design by adding formal verification rigor
- LithoGRPO extends Bei Yu's group's ILT work (following their cuLitho contributions) — ICML 2026 acceptance validates the RL+generative approach for lithography, directly connecting NVIDIA cuLitho ecosystem to academic research
- LLM-RTL-Assertions from Southampton addresses the practical gap in LLM-generated formal verification: mutation-guided refinement catches weak/vacuous assertions, solver-selection reduces runtime variability — this is the "quality-aware closure" that existing assertion generators lack
- AgentDSE from Harvard (Yilun Du, Vijay Janapa Reddi) is significant: first LLM-driven DSE framework achieving competitive results with 100x fewer evaluations than traditional methods, accepted at MLArchSys @ ISCA 2026
- A3C3 from Deming Chen (UIUC) is a methodology book chapter, providing a systematic framework for algorithm-accelerator co-design
- Siemens/Synopsys/Cadence AI comparison from DFT engineer perspective confirms industry shift from "AI as tool feature" to "AI as platform layer" — practical engineering evaluation beyond marketing claims
- Note: cs.SE category papers (2606.19795, 2606.19387) were missed in previous searches that only scanned cs.AR/cs.LG — need to expand search scope to include cs.SE for future runs

**Next Check:**
- MLCAD Testcase 3 results (June 25 — tomorrow!)
- SemiEngineering WIR #144 (expected ~June 26)
- DAC 2026 program updates (July 26-29)
- Si2 "Agentic AI in EDA: Who's in Control?" panel at DAC (July 27)
- arXiv cs.SE papers for future EDA searches (new scanning requirement)
- ICML 2026 proceedings (late July)

---

## 2026-06-23 Execution Summary

**Status:** ✅ Success (quiet day — content already synced from earlier run)

**New Papers Added: 0**
- arXiv cs.AR June 19-23: Only AI accelerator hardware designs (2606.19526 SPINE, 2606.19533 Ising Model tool, 2606.19913 Whisper accelerator, 2606.20414 ExSpike) — no EDA methodology papers
- cs.LG: No AI4EDA papers in the June 19-23 window
- Weekend (June 20-22) + Monday (June 23): arXiv is naturally quiet during this period

**New News Added: 0** (all already synced in prior parallel run)
- SemiEngineering "Designing Chips That Can Explain Themselves" (Ann Mutschler, June 17) — already added to HTML + JSON + manifest as June 23 entry
- No WIR #144 yet (expected ~June 26)
- No new EDA vendor announcements (Cadence/Synopsys/Siemens quiet during weekend)

**Sync Tasks Completed:**
- news_memory.json: Already synced (totalItems 118→119, lastUpdate 2026-06-23, cutoffDate 2025-12-23)
- manifest.js: Already synced (news 119, lastUpdate 2026-06-23, latest entry 2026-06-23)
- content/news/index.html: Already updated with June 23 section
- Git: Already committed and pushed (9db05da "auto update: 2026-06-23")

**Key Observations:**
- "Designing Chips That Can Explain Themselves" is a significant industry analysis: on-die telemetry + AI + digital twins creating design-silicon-field closed-loop optimization — bridging the gap between "AI for EDA tools" and "AI for chip lifecycle management"
- The Synopsys blog "Chip Design Tools in GitHub Hardware Development" (May 27, mentioned in Blog Review June 17) outlines GitHub Apps as the agent-to-EDA connector — a practical approach to CI/CD-native EDA without custom MCP servers
- SemiEngineering WIR #143 (June 19) remains the most comprehensive industry update for the week
- June 20-23 (Friday-Monday) is a structurally quiet period: no new arXiv submissions on weekends, no press releases on weekends, SemiEngineering typically publishes WIR on Fridays

**Expired Items Cleanup:**
- Checked: all dated items are from March 2026 onward, within 180-day window
- No items to expire (cutoffDate: 2025-12-23)

**Next Check:**
- MLCAD Testcase 3 results (June 25)
- SemiEngineering WIR #144 (expected ~June 26)
- DAC 2026 full program schedule (late June, conference July 26-29)
- Si2 "Agentic AI in EDA: Who's in Control?" panel at DAC (July 27)
- arXiv cs.AR new papers after Monday (June 23 submissions appear June 24)

---

## 2026-06-22 Execution Summary

**Status:** ✅ Success (git push verified on June 23 re-check)

**New Papers Added (3 items):**
- RTLScout (arXiv:2606.06530) — Felix Arnold, Ryan Amaudruz, Dimitrios Tsaras, Renzo Andri, Lukas Cavigelli — LLM-driven agentic system for joint RTL code + synthesis co-optimization; multi-run elite pool framework; 4 complementary phases; 35% area reduction, 45% delay reduction on FP16 multiplier; Pareto front outperforms commercial tool; submitted June 3
- MailoHLS (arXiv:2606.07246) — Elena Vouvali, Dimosthenis Masouros, Aggelos Ferikoglou, Dimitrios Soudris, Sotirios Xydis — LLM+GNN hybrid framework for HLS pragma optimization; cross-attention fusion + LoRA adapters + Pareto-driven optimization; up to 12.42x speedup; submitted June 5
- HighTide (arXiv:2606.04126) — Benjamin Goldblatt, Paolo Pedroso, Farhad Modaresi, Ethan Sifferman, Matthew R. Guthaus (UCSC) — Agent-curated VLSI benchmark suite; 12 AI agent skills for design lifecycle; Bazel RTL-to-GDS with remote caching; decision logs as long-term tuning memory; submitted June 2

**New News Added (3 items):**
- ChipAgents Renoir — First chip-design-specific fine-tuned LLM; MoE architecture; approaches Claude Opus 4.6 on internal benchmarks (RTL gen/bug localization/spec-to-code); 50%+ cost reduction; air-gapped on-premises deployment; June 17
- Architect Labs $24M seed — AI system for end-to-end chip design + provable verification; Kindred Ventures lead; founding team 80+ tapeouts from Anthropic/xAI/DeepMind/Meta/NVIDIA; "designless semiconductor industry" vision; already deployed with customers, tapeouts expected this year; June 18
- SemiEngineering WIR #143 — VLSI Symposium 2026 coverage: Intel 18A-P risk production, TSMC A16 GAA, Samsung 42nm 3D stacked FET; ChipAgents/Architect Labs/Amazon Trainium/Qualcomm-Tenstorrent/Keysight VPIphotonics; June 19

**Files Updated:**
- content/news/index.html — Added June 19 section with 3 cards (ChipAgents Renoir, Architect Labs, WIR #143)
- content/news/news_memory.json — Added 3 items, totalItems→118
- content/dates/2026-06-19.html — New date page (3 papers + 3 news)
- content/latest/2026-06-19.html — New latest page
- content/dates/2026-06-19/ — 3 new PDFs (RTLScout, MailoHLS, HighTide)
- manifest.js — Updated stats (papers 172, batches 71, news 118, lastUpdate 2026-06-22)
- Git pushed pending verification (large PDF upload may require retry)

**Key Findings:**
- ChipAgents Renoir is a landmark for Domain-Specific LLMs in EDA: first startup to ship a chip-design-specific LLM, proving that fine-tuned open-weight models can be competitive with frontier closed models on semiconductor tasks while enabling air-gapped deployment — this directly addresses the IP-security bottleneck holding back enterprise AI adoption in EDA
- Architect Labs' "designless semiconductor" thesis is the most radical counterpoint to the "Agentic EDA" narrative: instead of building agents for existing fragmented flows, they're rebuilding the design flow itself with AI as first-class citizen. $24M seed with 80+ tapeout experience and tier-1 AI talent from Anthropic/DeepMind/Meta makes them the most credible challenger to Cadence/Synopsys/Siemens
- RTLScout is the first system to truly unify LLM-driven design exploration with synthesis-level optimization in a closed loop, demonstrating that LLM agents + EDA tools can co-optimize rather than just generate functionally-correct RTL
- MailoHLS's LLM+GNN hybrid architecture is a blueprint for future AI4EDA systems: LLMs understand code semantics and intent, GNNs model structural dependencies — this dual-pathway approach overcomes the fundamental limitation of purely text-based LLM reasoning about hardware structure
- HighTide from UCSC's VLSI-DA group is the first work to embed AI agents directly into benchmark curation — this points toward a future where EDA benchmarks self-maintain and evolve, reducing the maintenance burden that has historically caused benchmark stagnation
- arXiv cs.AR June 19-22 (weekend) was quiet for AI4EDA: most new submissions were AI accelerator hardware designs, not EDA methodology papers

**Next Check:** MLCAD Testcase 3 results (June 25), DAC 2026 full program schedule (July 26-29), Si2 "Agentic AI in EDA: Who's in Control?" panel at DAC (July 27), SemiEngineering WIR #144 (expected ~June 26), arXiv cs.AR papers after weekend

---

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

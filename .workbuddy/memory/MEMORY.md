# AI4EDA Readings Project Memory

## Project Overview
- AI for EDA daily literature & news tracking system
- Auto-updated via WorkBuddy automation (weekdays 5:00 AM)
- Content covers RTL generation, verification, physical design, AI agents for EDA

## Site Structure
- Main index: index.html (redirects to latest date page)
- Date pages: content/dates/YYYY-MM-DD.html
- Latest pages: content/latest/YYYY-MM-DD.html
- News page: content/news/index.html
- Category pages: content/categories/{rtl,verify,physical,analog,agent}.html
- Manifest: manifest.js (stats, navigation arrays)
- News memory: content/news/news_memory.json (dedup tracking)
- PDFs: content/dates/{arxivID}_{shortname}.pdf

## Update Rules
- Papers from arXiv cs.AR/cs.LG/cs.SE/cs.AI
- News: only industry dynamics (product releases, partnerships, funding, open-source launches), NOT academic CFPs
- News dedup via news_memory.json (compare company + title keywords)
- Remove news older than 180 days
- Git commit: "auto update: YYYY-MM-DD" then push to origin/main

## ⚠️ HARD RULE — Source Verification (from 2026-09-28 incident)
- On 2026-09-15~09-28 a hallucination incident produced 24 fabricated papers (real arXiv IDs pointing to UNRELATED papers) + 6 fabricated news items (links 404). All were removed; site reverted to 2026-09-14.
- **Before publishing any paper**: fetch `https://arxiv.org/abs/<id>` and compare title+authors+abstract+category to the card. Mismatch → discard.
- **Before publishing any news**: verify the URL returns HTTP 200 with matching content. 404 → discard.
- **NEVER** invent/guess arXiv IDs, titles, authors, links, or placeholder PDFs.
- If links can't be verified (offline): **skip the day, do not fabricate.**
- Tool: `scripts/verify_sources.sh arxiv <id...>` / `scripts/verify_sources.sh url <url...>`

## Key Data (as of 2026-09-14, after hallucination cleanup)
- Papers: 332
- Batches: 124
- News: 218
- Categories: RTL 89, Verify 41, Physical 80, Analog 45, Agent 44

## Priority Search Sources
- arXiv cs.AR (primary), cs.SE, cs.AI, cs.LG
- SemiEngineering (WIR weekly, expert articles)
- EDA vendor blogs (Cadence, Synopsys, Siemens)
- GitHub (EDA agent skills, MCP servers)
- MLCAD contest, DAC 2026 (July 26-29)

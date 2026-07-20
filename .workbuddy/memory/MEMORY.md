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

## Key Data (as of 2026-07-21)
- Papers: 214
- Batches: 91
- News: 160
- Categories: RTL(66*), Verify(25*), Physical(41), Analog(26), Agent(27*)  (* = last verified 07-17)

## Priority Search Sources
- arXiv cs.AR (primary), cs.SE, cs.AI, cs.LG
- SemiEngineering (WIR weekly, expert articles)
- EDA vendor blogs (Cadence, Synopsys, Siemens)
- GitHub (EDA agent skills, MCP servers)
- MLCAD contest, DAC 2026 (July 26-29)

#!/usr/bin/env bash
# AI4EDA 来源真实性核验工具（防幻觉）
# 用法:
#   scripts/verify_sources.sh arxiv 2609.11342 2609.16910 ...
#   scripts/verify_sources.sh url   https://arxiv.org/abs/2608.30932 https://...
#
# 论文: 打印 arXiv 页面真实标题与分类，供人工/智能体逐字比对卡片内容。
#       若 ID 不存在或返回 404，标记 FAIL。
# 网址: 打印 HTTP 状态码；非 200 标记 FAIL。
#
# 规则: 任何 FAIL 的条目一律不得收录；宁缺毋滥，绝不编造。

set -u
UA="Mozilla/5.0 (compatible; AI4EDA-verify/1.0)"
mode="${1:-}"
shift || true

fail=0
case "$mode" in
  arxiv)
    for id in "$@"; do
      html="$(curl -sL --max-time 25 -A "$UA" "https://arxiv.org/abs/$id" 2>/dev/null)"
      # 真实论文页必有 citation_title 元数据；错误页（ID 不存在/未识别）没有
      title="$(printf '%s' "$html" | grep -oP '(?<=<meta name="citation_title" content=")[^"]*' | head -1)"
      if [ -z "$title" ] || printf '%s' "$title" | grep -qi "identifier not recognized"; then
        echo "FAIL  $id  -> 无有效论文页（ID 不存在 / 未被识别）"; fail=$((fail+1))
      else
        echo "OK    $id  -> $title"
      fi
    done
    ;;
  url)
    for u in "$@"; do
      code="$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 20 -A "$UA" "$u" 2>/dev/null)"
      if [ "$code" = "200" ]; then
        echo "OK    $code  $u"
      else
        echo "FAIL  $code  $u"; fail=$((fail+1))
      fi
    done
    ;;
  *)
    echo "用法: $0 arxiv <id...> | $0 url <url...>"; exit 2;;
esac

echo "----"
if [ "$fail" -gt 0 ]; then
  echo "❌ $fail 个条目未通过核验 —— 一律不得收录，禁止编造替代内容。"
  exit 1
else
  echo "✅ 全部通过可达性核验（仍需逐字比对标题/摘要与卡片内容）。"
fi

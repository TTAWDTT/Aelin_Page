---
title: Web Search + Local Memory
slug: /features/web-search-memory
description: Aelin 将本地记忆、Web 检索、文件记忆和媒体摄取整合到同一条可追溯链路。
---

# Web Search + Local Memory

Aelin 的检索不是单一路径，而是“本地语境 + 外部事实 + 文件记忆”协同。

## 本地记忆层

Chat 每轮会构建上下文包，来源包含：

- 会话记忆摘要与重点 note
- Todo / Pin recommendation / Daily brief
- Memory layers（facts / preferences / in_progress）
- Notifications 与最近追踪命中

这让追问不需要重复背景。

## Web 检索层

对于检索型问题，系统会做：

- 意图识别与时间敏感度判断
- 查询分解（query decomposer）
- 本地/网络子代理并行搜索
- 证据去重与引用结构化
- 回答后校验（grounding/coverage/reply verifier）

当证据不足时，verifier 会触发补搜重试。

## 文件记忆桥（File Memory Bridge）

Aelin 会把高价值结果投影为本地 Markdown，并支持检索：

- tracking profile
- snapshots
- changes timeline
- tracking insight
- chat diary / parallel draft / daily rollup
- media insight

检索策略是：

1. 优先尝试 OpenViking（若可用）
2. 失败时回退本地词法评分检索

## 日记树与全文读取

前端 `Diary` 页调用：

- `/api/v1/aelin/tracking/file-memory/tree`
- `/api/v1/aelin/tracking/file-memory/content`

支持按日期浏览、关键词过滤与全文阅读。

## 媒体内容摄取

`/api/v1/aelin/media/ingest` 会对链接做文本抽取，优先级大致为：

- 字幕（manual/auto）
- 平台文本（如抖音页面/API）
- ASR 转写
- 描述文本 fallback

随后生成结构化摘要（overview / evidence / actions）并进行质量门禁：

- `quality_score`
- `quality_reason`
- `quality_usable`
- `needs_review`

质量不过关时可以“处理成功但不写入日记”。

## 边界说明

- 纯视觉信息不会被完整覆盖。
- 受限平台常需要 cookies 或登录引导。
- OpenViking 是可选能力，不是必需依赖。

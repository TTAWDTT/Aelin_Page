---
title: Create a Tracking Flow
slug: /guides/tracking-flow
description: 以一个真实目标为例，从 Chat 建议到持续追踪、变化确认与记忆沉淀，跑通完整闭环。
---

# Create a Tracking Flow

下面用一个标准流程展示 Aelin 的追踪闭环。

## 场景示例

“我想长期关注某个账号/关键词，只要有变化就提醒我，并且后续可以随时回看历史。”

## 步骤 1：在 Chat 发起请求

在 Chat 明确给出：

- 目标对象（账号、URL、关键词）
- 关注范围（例如最近 7 天）
- 你关心的变化类型

系统会返回：

- 初步结论
- 引用来源
- 可执行动作（通常包括追踪建议）

## 步骤 2：确认追踪目标

调用（前端会封装）：

- `POST /api/v1/aelin/track/confirm`

可设置：

- `source`（auto/web/rss/x/...）
- `track_type`（term/url）
- `interval_seconds`
- `notify_level`
- `is_temporary/temporary_days`

如果来源未接入，返回会是 `needs_config`，并附带打开设置动作。

## 步骤 3：先手动跑一次

调用：

- `POST /api/v1/aelin/tracking/targets/{id}/run`

目的：立即生成基线快照，确认目标能抓到数据。

## 步骤 4：查看变化与快照

- 变化：`GET /tracking/targets/{id}/changes`
- 快照：`GET /tracking/targets/{id}/snapshots`

建议先看快照是否稳定，再看变化是否符合预期。

## 步骤 5：确认已读并保持通知清晰

- 批量 ack：`POST /tracking/targets/{id}/changes/ack`
- 单条 ack：`POST /tracking/changes/{change_id}/ack`

未 ack 的变化会持续出现在通知聚合里。

## 步骤 6：联动 Desk 和日记

- 在 Tracking 页点“联动 Desk”看跨来源上下文。
- 在 Diary 页查看自动沉淀的 Markdown 记录。
- 必要时用 file-memory search 按关键词回溯历史。

## 步骤 7：调优策略

按目标特性调以下参数：

- `interval_seconds`：时效与负载平衡
- `notify_level`：噪声控制
- `status`：active/paused
- `is_temporary`：短期任务自动过期

完成后，你就得到一个可持续运行、可回看、可验证的长期追踪流。

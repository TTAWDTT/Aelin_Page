---
title: Long-term Tracking
slug: /features/tracking
description: Aelin 将一次关注变成长期任务，支持自治调度、变化检测、快照对比与通知联动。
---

# Long-term Tracking

追踪系统是 Aelin 的核心差异能力。它把“这次帮我看一下”变成“之后持续帮我盯着”。

## 追踪目标模型

目标由 `TrackingTarget` 表持久化，关键字段包括：

- `target/source/track_type/source_key`
- `status`（active/paused/error/deleted）
- `interval_seconds`
- `notify_level`
- `error_count/last_hash/next_run_at`
- `is_temporary/expires_at`

## 创建与运行

入口：`POST /api/v1/aelin/track/confirm`

- 可在 Chat 中确认，也可在 Tracking 页手动创建。
- 创建后会立即唤醒调度器，并可执行 `run_target_now`。

手动运行：`POST /api/v1/aelin/tracking/targets/{id}/run`

自动运行：后台线程按 `next_run_at` 分发。

## 变化检测机制

每次运行会：

1. 抓取并标准化 payload
2. 与上次快照做 hash/字段对比
3. 写入快照（`TrackingSnapshot`）
4. 生成变化（`TrackingChange`）

常见变化类型：

- `new_item`
- `updated_item`
- `removed_item`
- `metric_spike`
- `fetch_error`
- `status_change`
- `recovered`

## 已读确认与通知联动

- 变化列表：`GET /tracking/targets/{id}/changes`
- 批量确认：`POST /tracking/targets/{id}/changes/ack`
- 单条确认：`POST /tracking/changes/{change_id}/ack`

未确认变化会进入通知聚合，并可在 Desk / Focus 页面联动消费。

## 自主调度（Autonomy Scheduler）

调度器在 FastAPI lifespan 启动，核心控制项来自 settings：

- tick 周期
- batch size
- 全局并发上限
- 单来源并发上限
- 最小轮询间隔
- 去重窗口
- 错误阈值
- 最大退避时间（exponential backoff）

此外包含：

- 分组去重（同 source key 不并发重复跑）
- 失败重试与状态降级（到达阈值进入 `error`）
- 临时追踪自动过期暂停

## 边界说明

- 非 `web/rss/auto` 来源若未接入账号，会进入 `needs_config`。
- 数据质量受上游平台稳定性影响。
- 高时效监控建议结合手动 run 与更短 interval。

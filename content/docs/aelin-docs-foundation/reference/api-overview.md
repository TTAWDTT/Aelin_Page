---
title: API Overview
description: Aelin 当前对外最重要的接口分为两层：官方 Agent Server 运行时接口，以及 Aelin 自己保持较薄的产品接口。
date: 2026-04-16
---

# API Overview

## Aelin 当前有两类 API

### 1. 官方 Agent Server 运行时接口

当前聊天主链依赖的核心接口是：

- `GET /assistants`
- `POST /threads`
- `GET /threads/:thread_id`
- `POST /threads/:thread_id/runs/stream`

这些接口负责：

- assistant 生命周期
- thread 生命周期
- run 生命周期
- 官方流式输出

如果你在接 Aelin 当前聊天主链，这一层是最重要的。

### 2. Aelin 自己的产品接口

Aelin 仍保留自己的产品 API，但它们现在应当保持“薄”并聚焦业务边界：

- `/api/v1/agent/*`
- `/api/v1/attachments/*`
- `/api/v1/aelin/device/*`
- `/api/v1/aelin/remote-control/*`

这些接口主要处理：

- provider / model / key 配置
- 附件导入与检索
- 设备与桌面能力
- 远控或产品级入口

## 为什么要分成两层

因为当前 Aelin 不应该再做一件事：

> 在官方 agent runtime 之外，再重新发明一套平行的聊天主协议。

把运行时交给 Agent Server，把产品边界交给 Aelin，自然会更清晰。

## 当前不再建议依赖什么

如果你接的是当前版本，应该避免继续依赖这些旧概念：

- 自定义 chat stream 协议
- `reply`
- `tool_trace`
- `memory_summary` 作为聊天主链语义
- 从 assistant 文本反推执行状态

## 最小理解方式

如果你只想快速记住当前 API 结构，可以用这句话：

> 聊天走官方 Agent Server，产品能力走 Aelin 的薄业务接口。

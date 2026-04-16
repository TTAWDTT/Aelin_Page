---
title: API Overview
description: 如果你要接入或扩展 Aelin，可以从运行时接口和产品接口这两层来理解它。
date: 2026-04-16
---

# API Overview

如果你是集成开发者，可以把 Aelin 的接口理解成两层：

## 1. 运行时接口

这一层负责对话、线程和执行过程，核心包括：

- `GET /assistants`
- `POST /threads`
- `GET /threads/:thread_id`
- `POST /threads/:thread_id/runs/stream`

如果你希望接入 Aelin 的对话和运行时能力，这一层最重要。

## 2. 产品接口

这一层负责 Aelin 的产品能力，例如：

- `/api/v1/agent/*`
- `/api/v1/attachments/*`
- `/api/v1/aelin/device/*`
- `/api/v1/aelin/remote-control/*`

它们主要处理：

- 模型配置
- 附件
- 设备能力
- 产品级入口

## 什么时候你会用到这些接口

- 如果你想接入聊天或运行时能力
  - 看运行时接口
- 如果你想接入附件、配置或桌面能力
  - 看产品接口

## 最简单的理解方式

Aelin 并不是只有一个“聊天接口”，而是把：

- 运行时能力
- 产品能力

组织成了更清晰的两层结构。

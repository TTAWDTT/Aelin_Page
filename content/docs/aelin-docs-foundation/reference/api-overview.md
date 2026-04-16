---
title: API Overview
description: 如果你要接入或扩展 Aelin，可以先把接口理解成运行时接口和产品接口两层。
date: 2026-04-16
---

# API Overview

这页面向需要接入、扩展或自托管 Aelin 的开发者。

最简单的理解方式是：先把接口分成两层。

## Runtime APIs

这一层负责对话、线程和执行过程，核心包括：

- `GET /assistants`
- `POST /threads`
- `GET /threads/:thread_id`
- `POST /threads/:thread_id/runs/stream`

如果你要接入对话、线程和运行时能力，这一层最重要。

## Product APIs

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

## Which Layer Should You Use?

- 如果你想接入聊天或运行时能力，先看 Runtime APIs。
- 如果你想接入附件、配置或桌面能力，先看 Product APIs。

## Read Next

- [Quick Start](../getting-started/quick-start.md)
- [Run on Web / Desktop / Mobile](../guides/run-web-desktop-mobile.md)
- [Known Issues](known-issues.md)

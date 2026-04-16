---
title: Configure LLM Provider
description: 配置 provider、model、base URL 和 API key，让 Aelin 使用你想要的模型服务。
date: 2026-04-16
---

# Configure LLM Provider

## What You Configure

- `provider`
- `model`
- `base_url`
- `api_key`

## Minimum Setup

如果你只是想尽快跑通 Aelin，先准备一套最小可用组合：

1. 一个 provider
2. 一个 model
3. 一个可用的 base URL
4. 一把有效的 API key

先跑通，再优化模型选择，通常比一开始折腾很多配置更高效。

## How to Choose a Model

如果你更看重：

- 深度推理任务
- 大量资料阅读
- 持续性的复杂主题

可以优先选择更稳定、更擅长长上下文的模型。

如果你常做：

- 高频轻量提问
- 快速整理资料
- 成本敏感型工作流

可以优先选择响应更快、成本更低的组合。

## Common Checks

如果配置后不能正常工作，先检查：

- `base_url` 是否正确
- API key 是否有效
- 所选 model 是否真的可用
- backend 和 frontend 是否都在运行

## Read Next

- [Quick Start](../getting-started/quick-start.md)
- [Run on Web / Desktop / Mobile](run-web-desktop-mobile.md)
- [FAQ](../reference/faq.md)

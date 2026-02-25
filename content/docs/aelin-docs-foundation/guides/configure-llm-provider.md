---
title: Configure LLM Provider
slug: /guides/configure-llm
description: 配置 rule_based 或 OpenAI-compatible 模型链路，并确保密钥与连接方式符合 Aelin 运行要求。
---

# Configure LLM Provider

Aelin 支持两条回答路径：

- `rule_based`：无需 API Key，可立即使用。
- `openai-compatible`：通过兼容接口接入外部模型。

## 1. 先确认当前配置

可通过接口查看：

- `GET /api/v1/agent/config`
- `GET /api/v1/agent/catalog`

其中模型目录来自 `models.dev`，后端会缓存刷新，避免每次冷启动都拉远端。

## 2. 切换到 OpenAI-compatible

在 Settings 的 AI 配置页，或直接调用：

- `PATCH /api/v1/agent/config`

建议最小配置：

- `provider`
- `base_url`
- `model`
- `api_key`
- `temperature`

## 3. 连通性校验

调用：

- `POST /api/v1/agent/test`

若失败，优先检查：

- model ID 是否与目标 provider 一致
- base_url 是否是兼容 OpenAI Chat Completions 的入口
- API Key 是否有效

## 4. 安全与密钥存储

后端支持可选 Fernet 加密：

- 配置 `MERCURYDESK_FERNET_KEY` 后，密钥将加密入库。
- 未配置 Fernet 时按明文存储（仅建议本地受控环境）。

## 5. 与 OAuth 配置的关系

这一步常被混淆：

- LLM 配置用于“生成能力”。
- OAuth 配置（Gmail/Outlook/GitHub）用于“数据接入能力”。

二者可以独立配置。

## 常见问题

- 显示“请先配置 API Key”：说明 provider 不是 rule_based 且缺少密钥。
- 显示“请先配置 Base URL”：说明 base_url 为空或无效。
- 目录中有模型但调用失败：通常是 provider/model/base_url 三者不匹配。

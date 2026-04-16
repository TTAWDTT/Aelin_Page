---
title: Configure LLM Provider
description: 了解 Aelin 当前如何解析 provider、model、base URL 与 API key，以及配置它们时最需要注意的边界。
date: 2026-04-16
---

# Configure LLM Provider

## Aelin 当前怎么处理模型配置

Aelin 不是把模型配置硬编码在前端，也不是把所有用户都绑死在一个 provider 上。

当前运行时会解析：

- `provider`
- `model`
- `base_url`
- `api_key`

然后再把这些信息交给 runtime resolver，用于构造本次 DeepAgents 运行时。

## 最常见的配置项

### Provider

表示你当前使用的是哪一类模型服务。

### Model

表示这次运行实际使用的模型名称。

### Base URL

用于：

- 官方 API 地址
- 自定义网关
- 兼容 OpenAI 风格的代理入口

### API Key

用于当前用户或当前配置上下文的鉴权。

## 配置时的建议

### 先保证一条最小闭环能跑通

最好的开始方式不是一上来就配很多模型，而是先验证：

1. 一个 provider
2. 一个 model
3. 一条可用的 base URL
4. 一把有效的 API key

### 把“产品配置”和“运行时行为”分开看

模型配置只回答：

- 用哪个模型
- 从哪里调
- 用什么 key

它不直接决定：

- Aelin 是否会搜索
- 是否会调用附件
- 是否会触发桌面能力

这些仍然取决于 runtime、tools 与工作区上下文。

## 如果你在自托管

自托管时建议同时检查：

- backend 是否正常启动
- 设置页是否能保存配置
- 当前用户配置是否被正确读取
- 实际 run 是否使用了你设置的 model

## 当前版本最重要的理解

Aelin 现在更像是在做这件事：

> 先把“模型配置”解析成干净的运行时输入，再把真正的 agent 行为交给官方 Agent Server + DeepAgents 主链。

这比把 provider 逻辑散落在前端、prompt 和兼容层里更清晰。

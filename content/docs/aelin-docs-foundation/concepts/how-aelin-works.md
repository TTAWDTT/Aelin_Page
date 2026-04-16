---
title: How Aelin Works
description: 从一次聊天请求开始，解释当前版本 Aelin 的运行链路、运行时解析方式与记忆挂载边界。
date: 2026-04-16
---

# How Aelin Works

当前版本的 Aelin 可以概括成一句话：

> Aelin 把官方 agent runtime 接进产品，并把记忆、附件、设备与桌面能力组织成清晰的工作区边界。

## 一次消息是怎么流动的

### 1. 前端发起 thread / run

聊天 UI 通过官方 SDK 与 `useStream(...)` 发起消息，而不是走旧的自定义 SSE 协议。

前端真正依赖的是：

- assistant
- thread
- run
- message / tool / subagent metadata

### 2. Agent Server 解析用户与线程

LangGraph Agent Server 负责：

- assistant / thread / run 生命周期
- 当前用户身份与 owner scope
- 线程与状态存储边界

这一步的意义是：Aelin 不需要再自己维护一套重复的聊天状态机。

### 3. 运行时 resolver 补齐产品上下文

在真正进入 agent graph 之前，Aelin 会解析当前运行所需的产品上下文，例如：

- 用户是谁
- 当前工作区是什么
- 当前附件范围是什么
- 当前 provider / model / base URL / API key 是什么
- 当前工作区的记忆文本是什么

这一步是 Aelin “产品壳”的核心价值之一。

### 4. DeepAgents graph 执行 agent

真正的 agent 能力由 DeepAgents graph 提供，包括：

- tools
- skills
- subagents
- memory
- 文件与输出边界

所以当前 Aelin 的重点并不是重新发明 agent 本身，而是把 agent 放进一个更完整的产品外壳里。

### 5. 官方运行态回到前端

执行过程中，前端看到的状态应来自官方运行时，而不是从 assistant 文本里猜：

- messages
- tool calls
- tasks / subagents
- values
- artifacts / outputs

这也是当前 UI 与早期原型最大的区别之一。

## Aelin 的记忆现在怎么工作

当前聊天主链的记忆锚点是：

- `/memory/AGENTS.md`

它按用户、工作区解析后挂进运行时。

这条设计约束非常重要，因为它意味着：

- 记忆不是散落在多个隐藏通道里
- 记忆可以被定位、检查与迁移
- 产品层不能随意在聊天主链里偷偷加入另一套上下文拼装

## Aelin 自己还保留什么

当前 Aelin 依然保留自己的产品 API，但它们应该保持“薄”：

- `/api/v1/agent/*`
- `/api/v1/attachments/*`
- `/api/v1/aelin/device/*`
- `/api/v1/aelin/remote-control/*`

这些路由的职责是：

- 配置
- 附件
- 设备
- 桌面与产品级入口

而不是重新定义聊天协议。

## 这套设计带来的直接好处

### 更稳定的前后端契约

前端基于官方 run metadata 建 UI，后端围绕官方线程/运行模型提供能力，契约更稳。

### 更清晰的边界

用户上下文、工作区记忆、附件、输出路径、桌面桥接，都有明确边界，不需要混在一个“大 prompt”里解释。

### 更容易持续演进

只要继续守住这三条原则，Aelin 就能保持可维护：

- 不重新发明聊天协议
- 不偷偷加隐藏上下文通道
- 不从 assistant 文本里逆向推导执行状态

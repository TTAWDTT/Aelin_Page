---
title: Welcome to Aelin
description: 认识当前版本的 Aelin：一个建立在 LangGraph Agent Server 与 DeepAgents 之上的 AI workspace，而不是旧式自定义聊天循环。
date: 2026-04-16
---

# Welcome to Aelin

Aelin 是一个 **DeepAgents-powered AI workspace**。

它的重点不是“把聊天窗口做得更像聊天窗口”，而是让 AI 真正工作在一个清晰、可追踪、可持续的运行时里：

- 官方 thread / run 流式语义
- 文件化的工作区记忆
- 可组合的工具、skills 与附件能力
- Web 与 Desktop 两种主要产品表面

## Aelin 现在和早期版本最大的不同

现在的 Aelin 已经不再以旧的自定义 chat loop 为中心。

当前主链路是：

1. 前端通过 `useStream(...)` 发起会话
2. LangGraph Agent Server 管理 assistant、thread 与 run 生命周期
3. DeepAgents graph 负责 agent、memory、tools、skills 与 subagent
4. Aelin 提供产品配置、附件、设备与桌面集成能力

这让系统的每一层边界都比过去更清晰。

## Aelin 擅长什么

### 持续围绕同一主题工作

Aelin 不只适合“一问一答”。它更适合：

- 同一个工作区里持续研究某个主题
- 结合附件、网页和本地记忆反复推进任务
- 在后续会话里继续消费之前沉淀下来的上下文

### 把记忆当成文件，而不是黑盒

当前聊天记忆锚定在：

- `/memory/AGENTS.md`

这意味着：

- 记忆有明确来源
- 记忆可以按用户与工作区管理
- 记忆不会被隐藏在难以检查的兼容层里

### 把 agent 放进真实产品，而不是只做 demo

Aelin 在官方 agent runtime 之外，还提供了真实产品层需要的边界：

- provider / model / API key 配置
- 附件导入与检索
- 屏幕捕获与桌面能力
- 工作区与输出目录边界

## 你会在文档里看到什么

- `Getting Started`
  - 快速理解当前系统，并跑通本地环境
- `Concepts`
  - 解释 Aelin 的运行模型
- `Features`
  - 解释当前能力与真实边界
- `Guides`
  - 解释如何配置与使用
- `Reference`
  - 汇总 API、存储、FAQ 与已知限制

## 阅读这套文档时的一个重要前提

这套文档描述的是 **当前已经落地的 Aelin**。

它不会再把以下内容当成当前事实：

- 旧 Aelin 自定义 SSE 协议
- `tool_trace` / `reply` / `memory_summary` 风格的主链语义
- 已归档设计稿里的旧路径

如果你以前接触过更早期的 Aelin，这一版文档可以把它理解成：

> “Aelin 从自定义聊天原型，转向 DeepAgents-native 产品系统之后的官方说明。”

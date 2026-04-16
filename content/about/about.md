---
title: About Aelin
description: Aelin 是一个建立在 LangGraph Agent Server 与 DeepAgents 之上的 AI workspace，强调稳定的运行时、文件化记忆与薄产品边界。
date: 2026-04-16
---

## Aelin 是什么

Aelin 现在的定位，不是“再做一个聊天壳”，而是做一个**可持续工作的 AI workspace**。

它把官方的 agent runtime 能力真正接进产品：

- 前端直接使用官方 thread / run 流式语义
- 后端以 LangGraph Agent Server 作为主聊天入口
- DeepAgents 负责 agent、tools、skills、memory 与 subagent 运行
- Aelin 自己只保留产品层需要的边界与体验

这让 Aelin 的重点从“自定义协议”转向了“可持续运行的产品系统”。

## Aelin 现在重视什么

### 1. 官方运行时，而不是自定义聊天协议

当前 Aelin 的主链路是：

1. 前端 `useStream(...)`
2. Agent Server `/assistants`、`/threads`、`/runs/stream`
3. DeepAgents graph
4. Aelin 的产品工具与桌面桥接能力

这意味着 Aelin 不再把大量状态藏在自定义 SSE 事件或 assistant 文本里，而是尽量建立在官方 run metadata 上。

### 2. 文件化记忆，而不是隐藏上下文拼装

Aelin 当前聊天记忆的锚点是：

- `/memory/AGENTS.md`

它按用户、工作区落到本地文件系统里，再由运行时解析后挂到 agent。

这类设计的价值是：

- 记忆来源清晰
- 可检查
- 可迁移
- 不容易把“系统偷偷塞进去的隐式上下文”误当成产品能力

### 3. 薄产品壳，而不是再次发明 agent 框架

Aelin 仍然保留自己的产品接口，但这些接口现在更像“业务边界”：

- agent/provider 配置
- 附件导入与检索
- 设备与桌面能力
- 远控与同步入口

它们应该围绕官方运行时工作，而不是重新定义另一套聊天主链。

## 三个主要表面

当前 Aelin 主要有三个表面：

- `backend/`
  - FastAPI 产品 API + LangGraph Agent Server graph
- `frontend/`
  - React 19 + Vite + TypeScript 聊天界面
- `desktop/`
  - Electron runtime、本地桌面桥、打包与本地插件能力

这也是为什么 Aelin 既是一个聊天产品，又是一个具备本地执行与设备观察能力的桌面化 workspace。

## 它适合谁

Aelin 更适合这几类使用场景：

- 你不是只想“问一次答案”，而是希望围绕同一主题持续工作
- 你需要把附件、网页、工作区记忆放进同一条链路
- 你希望在桌面环境里接入本地能力，而不仅是纯浏览器聊天
- 你更关心可追踪、可验证、可继续接手的 agent 系统，而不是一次性的 prompt demo

## 它不试图假装成什么

Aelin 不应该被误解成：

- 一个已经完全产品化、自动化到无所不能的个人操作系统
- 一个完全等同于官方 DeepAgents demo 的原样套壳
- 一个仍在使用旧 Aelin 自定义 chat loop 的兼容项目

更准确的说法是：

> Aelin 是一个把官方 agent runtime 真正接进产品表面的系统，并在此基础上加入文件化记忆、附件、设备与桌面能力。

## 当前状态

现在的 Aelin 正在朝“DeepAgents-native thin shell”方向持续收敛。

这条路线的含义是：

- 聊天主链更官方
- 运行时语义更清晰
- 产品边界更明确
- 旧时代遗留兼容层会继续减少

文档站也会以这个方向为准，而不是继续沿用早期原型阶段的表述。

![Aelin](shy.gif)

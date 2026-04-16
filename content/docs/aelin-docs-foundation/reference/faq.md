---
title: FAQ
description: Aelin 当前版本最常见的问题，包括运行时、记忆、桌面能力与当前架构方向。
date: 2026-04-16
---

# FAQ

## Aelin 现在还在用旧的自定义 chat loop 吗

不是。

当前主链已经切到：

- 官方 Agent Server thread / run
- DeepAgents graph
- 前端 `useStream(...)`

## 每次提问都会自动上网吗

不会。

当前更合理的策略是：

- 时效性问题用搜索
- 连续性问题用工作区记忆

## Aelin 的长期记忆现在来自哪里

当前聊天主链的记忆锚点是工作区下的 `/memory/AGENTS.md`。

## Web 版和 Desktop 版有什么区别

Web 更偏向聊天与展示。

Desktop 会额外提供本地设备桥接能力，例如：

- 屏幕捕获
- 打开路径 / URL
- 部分本地执行能力

## Aelin 是不是完全等同于官方 DeepAgents

不是。

更准确的说法是：

- Aelin 使用官方 DeepAgents 运行时与中间件
- 同时叠加了自己的产品工具、附件、设备和桌面边界

## 现在的 session 和 thread 是什么关系

当前前端尽量把本地会话和官方 thread 对齐使用。你可以把它理解成产品层对 thread 的一层展示与持久化包装。

## 能不能继续扩展 skills

可以。

当前推荐的方式是把 skill 放在：

```text
backend/deepagents_skills/<skill-name>/SKILL.md
```

而不是重新把技能逻辑硬塞进 prompt。

## 当前版本最适合拿来做什么

最适合做：

- 持续围绕同一主题工作
- 结合附件、网页与工作区记忆推进任务
- 在桌面环境中接入本地观察与部分执行能力

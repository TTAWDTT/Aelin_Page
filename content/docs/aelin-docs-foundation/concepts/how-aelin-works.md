---
title: How Aelin Works
description: 了解一次 Aelin 任务里会用到哪些上下文，它怎样选择信息来源，以及为什么 workspace 对长期工作很重要。
date: 2026-04-16
---

# How Aelin Works

Aelin 的核心思路很简单：

把同一个主题需要的聊天、文件、网页研究和长期上下文留在同一个 workspace 里。

## What Goes Into a Run

一次 Aelin 任务可能会使用这些输入：

- 当前会话
- workspace 里的历史上下文
- 你上传的文件
- 需要时引入的网页信息

不是每次都会用到所有来源，但这些来源都可以属于同一个工作流。

## How Aelin Chooses Context

当你发起一个问题时，Aelin 会先判断：

- 你是在问一个一次性问题，还是在推进一个持续主题
- 当前问题更依赖历史上下文，还是依赖新的外部信息
- 是否需要读取文件、记忆或网页信息

这一步的意义，是先决定“什么信息对当前任务真正重要”，再组织回答。

## What You Get Back

Aelin 的返回结果通常不只是一个结论。

你通常会看到这些东西的组合：

- 一个可使用的答案
- 与文件或资料相关的整理结果
- 当前限制或判断依据
- 可以继续推进的下一步

## Why Workspaces Matter

workspace 是 Aelin 和普通一次性聊天最大的区别之一。

它的作用是让：

- 文件不会脱离主题
- 结论不会在对话结束后消失
- 下次回来时，你还能在原有背景上继续工作

如果你的工作方式本来就是连续的，那么 workspace 会比“反复开新聊天”更自然。

## Read Next

- [Agent Chat](../features/agent-chat.md)
- [Web Search + Local Memory](../features/web-search-and-local-memory.md)
- [Storage and Memory](../reference/storage-and-memory.md)

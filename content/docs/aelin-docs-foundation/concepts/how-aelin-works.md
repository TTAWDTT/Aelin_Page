---
title: How Aelin Works
description: 了解一次 Aelin 任务里会用到哪些上下文，它怎样选择信息来源，以及为什么 workspace 对长期工作很重要。
date: 2026-04-16
---

# How Aelin Works

Aelin 会围绕一个 workspace 组织同一主题相关的聊天、文件、网页研究和长期上下文。

## What Goes Into a Run

一次 Aelin 任务可能会使用这些输入：

- 当前会话
- workspace 里的历史上下文
- 你上传的文件
- 需要时引入的网页信息

单次 run 不一定会用到所有来源，但这些来源都可以属于同一个 workspace。

## How Aelin Chooses Context

当你发起一个问题时，Aelin 会先判断：

- 你是在问一个一次性问题，还是在推进一个持续主题
- 当前问题更依赖历史上下文，还是依赖新的外部信息
- 是否需要读取文件、记忆或网页信息

这一步会先确定对当前任务最重要的信息，再组织回答。

## What You Get Back

Aelin 的返回结果通常不只是一个结论。

你通常会看到这些东西的组合：

- 一个可使用的答案
- 与文件或资料相关的整理结果
- 当前限制或判断依据
- 可以继续推进的下一步

## Why Workspaces Matter

workspace 会把文件、结论和后续问题保持在同一个主题里。

它能帮助你：

- 文件不会脱离主题
- 结论不会在对话结束后消失
- 下次回来时，你还能在原有背景上继续工作

如果你的工作本来就跨多个会话和多种资料来源，workspace 会更自然。

## Read Next

- [Agent Chat](../features/agent-chat.md)
- [Web Search + Local Memory](../features/web-search-and-local-memory.md)
- [Storage and Memory](../reference/storage-and-memory.md)

---
title: Storage and Memory
description: 解释当前版本 Aelin 的核心存储边界，包括运行时记忆、附件、工作区输出目录，以及仓库 AGENTS.md 与运行时 AGENTS.md 的区别。
date: 2026-04-16
---

# Storage and Memory

## 先分清两类 `AGENTS.md`

这是当前 Aelin 最容易被误解的地方之一。

### 仓库里的 `AGENTS.md`

这是项目协作说明文件，给开发者与 coding agent 使用。

### 运行时的 `/memory/AGENTS.md`

这是当前聊天运行时的记忆正文来源。

两者不是同一个东西，也不会自动同步。

## 当前聊天记忆存在哪里

当前版本里，聊天主链记忆锚定在工作区级文件记忆。

你可以把它理解成类似这样的目录结构：

```text
data/aelin_memory/users/<user>/workspaces/<workspace>/memory/
```

其中最关键的是：

- `AGENTS.md`

此外还可能包含一些辅助投影文件，例如：

- `preferences.md`
- `facts.md`
- `projects.md`
- `todos.md`
- `memory_index.json`

## 为什么要用文件化记忆

文件化记忆的好处是：

- 位置明确
- 可检查
- 可迁移
- 不容易出现“系统到底偷偷注入了什么”的黑盒问题

## 附件存储

Aelin 还会维护附件相关存储与检索结构，用于：

- 原始附件导入
- 文档切片
- 语义检索

这一层与聊天记忆不同，但会在运行时组合进当前任务上下文。

## 工作区与输出路径

当前版本还显式区分工作区文件与输出目录，常见边界类似：

```text
output/deepagents/user-<id>/<workspace>/workspace
output/deepagents/user-<id>/<workspace>/outputs
```

这样做的意义是：

- 哪些文件属于工作区
- 哪些文件属于 agent 输出
- 哪些产物应该回到前端展示

这些问题都更容易回答。

## 当前你不应该假设什么

### 不能把所有“记忆”都理解成数据库摘要

当前主链的记忆核心是文件，而不是历史上的数据库摘要注入方式。

### 不能把 `write_file` 直接等价成“写进你电脑上的任意位置”

在 DeepAgents 与桌面执行混合的场景里，文件语义和执行语义仍然需要明确边界。

### 不能把仓库文档改动直接当成用户运行时记忆更新

改仓库里的说明文件，不会自动改变某个真实用户工作区下的 `/memory/AGENTS.md`。

---
title: Docs Source Notes
description: Aelin 官网文档的编辑说明与信息边界。这一页是内容维护说明，不作为公开文档入口。
date: 2026-04-16
---

# Docs Source Notes

这组文档服务于 Aelin 官网，对象主要包括：

- 首次接触 Aelin 的用户
- 想理解当前产品边界的开发者
- 需要对接或自托管 Aelin 的集成开发者

## 写作边界

公开文档应优先描述：

- 当前已经落地的能力
- 稳定可依赖的接口与行为
- 真实存在的运行边界与限制

公开文档不应把以下内容包装成既成事实：

- 已归档的旧方案
- 早期 prototype 的自定义 chat loop
- 尚未稳定交付的“未来也许会有”的体验

## 当前主线

写作时请以这条链路为准：

- 前端 `useStream(...)`
- LangGraph Agent Server `/assistants`、`/threads`、`/runs/stream`
- DeepAgents graph
- Aelin 薄产品壳与桌面集成能力

## 当前文档分组

- `getting-started/`
  - 帮读者在最短时间建立正确认知并跑通本地环境
- `concepts/`
  - 解释 Aelin 的运行方式与设计取向
- `features/`
  - 解释当前公开能力与边界
- `guides/`
  - 面向实际使用与接入
- `reference/`
  - 存放接口、存储、FAQ 与限制
- `release-notes/`
  - 记录阶段性变化

## 维护原则

- 不要把仓库级 `AGENTS.md` 和运行时 `/memory/AGENTS.md` 混为一谈
- 不要重新引入“旧协议兼容层”的叙事
- 如果实现已经换成官方线程/运行语义，文档也要同步切换

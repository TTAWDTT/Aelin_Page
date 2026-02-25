---
title: Aelin Docs 信息架构
slug: /
description: 基于 MercuryDesk 源码整理的 Aelin 基础文档，覆盖功能、技术架构、运行与边界。
---

# Aelin Docs 信息架构

这套文档以 `D:\HuaweiMoveData\Users\yixiao\Desktop\MercuryDesk` 当前源码为准，用于解释 Aelin 的已实现能力、技术结构和可操作边界。

## 文档目标

1. 让新用户在 3 分钟内理解 Aelin 是什么、适合做什么。
2. 让使用者在 10 分钟内跑通一次完整闭环：提问、证据、追踪、变化、日记沉淀。
3. 让开发者能快速定位 API、存储结构、配置项和已知限制。

## 面向对象

- 产品用户：希望把一次性查询升级为持续追踪。
- 本地部署用户：需要在个人设备上长期运行 Aelin。
- 集成开发者：需要按域理解后端路由与数据模型。

## 功能地图

- Chat 主入口：SSE 流式、引用来源、动作建议、工具链路可视化。
- 多源接入与同步：IMAP、Gmail/Outlook/GitHub OAuth、RSS、Bilibili、X、微博、抖音、小红书、邮件转发、Mock。
- 跟踪系统：目标创建、自动/手动运行、变化检测、快照对比、已读确认、通知联动。
- 自主调度：后台线程持续运行任务，带去重、重试、回退、限频和错误阈值控制。
- Desk 观察台：跨来源内容流、标签过滤、关键词检索、Tag 关注/推荐/发现。
- 内容打标：规则分类 + 可选 LLM 分类，支持异步补标。
- 媒体摄取：对视频/帖子链接抽取文本，生成结构化摘要并做质量门禁。
- 文件记忆与日记：将 tracking/profile/snapshot/change 投影为本地 Markdown，并支持树状浏览与检索。
- 设备控制与专注：进程治理、模式切换（meeting/focus/sleep/normal）和通知静默联动。
- Electron 桌面壳：可打包 Windows 应用，含桌宠行为与情绪引擎。

## 技术地图

- 后端：FastAPI + SQLAlchemy，路由按 `aelin/agent/accounts/desk/inbound/auth` 领域拆分，应用生命周期中启动追踪调度器。
- 前端：React 19 + Vite + Tailwind v4 + React Query + Zustand，模块化页面覆盖 Chat/Tracking/Processes/Diary/Focus/Settings。
- AI 架构：规则模式 + OpenAI-compatible 双路径；模型目录来自 `models.dev` 并带缓存。
- 安全与配置：敏感密钥可用 Fernet 加密；OAuth 配置支持按用户保存。
- 兼容策略：项目已更名 Aelin，但环境变量仍保留 `MERCURYDESK_*` 历史前缀。

## 当前边界

- 前端有知乎入口，但后端暂无独立知乎连接器。
- 设备模式后端只保证 `meeting/focus/sleep/normal/default`，其它值会降级处理。
- 鉴权支持本地单用户 fallback（无 token 时回落本地用户），更偏本地化部署场景。

## 建议阅读顺序

1. `getting-started/welcome.md`
2. `getting-started/quick-start.md`
3. `concepts/前言.md`
4. `features/*.md`
5. `guides/*.md`
6. `reference/*.md`
7. `release-notes/2026-q1.md`

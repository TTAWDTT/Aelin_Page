---
title: API Overview
slug: /reference/api
description: Aelin 后端按领域拆分的路由总览，帮助你快速定位能力入口与职责边界。
---

# API Overview

基础前缀：`/api/v1`

健康检查：`/healthz`

静态媒体：`/media/*`

## 路由分域

后端在 `FastAPI lifespan` 中初始化数据库并启动追踪调度器，随后按域挂载路由：

- `auth`
- `accounts`
- `contacts`
- `messages`
- `agent`
- `aelin`
- `desk`
- `inbound`

## 1) Auth

- `POST /register`
- `POST /token`
- `GET /me`
- `PATCH /me`
- `POST /me/avatar`

兼容保留：`/auth/*` 同名旧路由。

## 2) Accounts（数据源接入）

- 账号 CRUD：`GET/POST /accounts`、`DELETE /accounts/{id}`
- OAuth 启动与回调：`/accounts/oauth/{provider}/start|callback`
- 用户级 OAuth 凭据：`GET/PATCH /accounts/oauth/{provider}/config`
- 手动同步任务：`POST /accounts/{id}/sync`
- 同步状态查询：`GET /accounts/sync-jobs/{job_id}`
- 邮件转发信息：`GET /accounts/{id}/forward-info`
- X 配置：`/accounts/x/config`、`/accounts/x/cookies`

## 3) Inbound（邮件转发入口）

- `POST /inbound/forward/{secret}`
- `POST /inbound/forward`

用于把外部转发邮件写入消息存储。

## 4) Desk（观察台）

- 内容流：`GET /desk/feed`
- 标签体系：`GET /desk/tags`
- 标签关注：`POST /desk/tags/follow`
- 取消关注：`DELETE /desk/tags/follow/{tag}`

## 5) Agent（通用 AI 能力）

- 对话：`POST /agent/chat`
- 摘要与草稿：`/agent/summarize*`、`/agent/draft-reply*`
- 模型目录：`GET /agent/catalog`
- 配置：`GET/PATCH /agent/config`
- 测试：`POST /agent/test`
- 记忆/Todo：`/agent/memory*`、`/agent/todos*`

## 6) Aelin（主业务域）

- Chat：`POST /aelin/chat`、`POST /aelin/chat/stream`
- Context/通知：`/aelin/context`、`/aelin/notifications`、`/aelin/proactive/poll`
- 追踪：`/aelin/track/confirm`、`/aelin/tracking/*`
- 文件记忆：`/aelin/tracking/file-memory/*`
- 媒体摄取：`POST /aelin/media/ingest`
- 抖音登录引导：`POST /aelin/media/auth/douyin/guide`
- 设备控制：`/aelin/device/*`

## 7) Contacts / Messages

- 联系人列表与会话：`/contacts*`
- 消息详情：`/messages/{message_id}`

## 设计要点

- 领域边界清晰：接入、推理、追踪、观察、设备分离。
- Aelin 域覆盖最终用户主流程；Agent 域提供较通用 AI 工具面。
- 追踪调度属于服务生命周期能力，不依赖外部 cron。

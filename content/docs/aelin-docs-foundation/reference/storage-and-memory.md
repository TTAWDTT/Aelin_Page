---
title: Storage and Memory
slug: /reference/storage
description: Aelin 的数据库结构与文件记忆投影机制说明，帮助你理解“长期记忆”如何落地。
---

# Storage and Memory

## 数据库存储

默认数据库：`backend/mercurydesk.db`（SQLite）

主要表结构分层：

1. 用户与鉴权
- `users`
- `oauth_credential_configs`

2. 数据源接入
- `connected_accounts`
- `imap_account_configs`
- `feed_account_configs`
- `forward_account_configs`
- `x_api_configs`

3. 消息与标签
- `contacts`
- `messages`
- `message_topic_tags`
- `user_followed_tags`

4. AI 与记忆
- `agent_configs`
- `agent_conversation_memories`
- `agent_memory_notes`

5. 跟踪系统
- `tracking_targets`
- `tracking_snapshots`
- `tracking_changes`

## 文件记忆投影

除数据库外，Aelin 还会把高价值内容投影为本地 Markdown：

- tracking profile / snapshot / change
- tracking insight
- chat diary / parallel draft / daily rollup
- media insight

默认根目录（相对后端）：`../data/aelin_memory`

典型路径形态：

- `users/{user_id}/workspaces/{workspace}/tracking/...`
- `users/{user_id}/workspaces/{workspace}/diary/...`

## 检索策略

文件记忆查询采用双路径：

1. OpenViking 客户端（可选）
2. 本地词法评分 fallback（默认可用）

对应接口：

- `GET /api/v1/aelin/tracking/file-memory/search`
- `GET /api/v1/aelin/tracking/file-memory/content`
- `GET /api/v1/aelin/tracking/file-memory/tree`

## 日记组织

- `raw/yyyy/mm/dd/*.md`：原子记录
- `daily/yyyy/mm/yyyy-mm-dd.md`：按天汇总

系统会把已结束日期的 raw 记录自动 rollup 为 daily 文档。

## 安全与配置

- 敏感字段可通过 `MERCURYDESK_FERNET_KEY` 加密存储。
- 未配置 Fernet 时保持明文（仅建议本地受控环境）。
- OAuth 配置按用户存储，支持同实例多用户配置隔离。

## 兼容说明

项目名已切换为 Aelin，但配置前缀仍是 `MERCURYDESK_*`，这是兼容策略，不影响功能。

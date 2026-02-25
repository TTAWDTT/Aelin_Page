---
title: Proactive Interaction
slug: /features/proactive
description: Aelin 将多源同步、Desk 观察与内容打标整合为主动发现与主动提醒能力。
---

# Proactive Interaction

Aelin 的“主动”能力建立在三层基础上：数据接入、内容理解、提醒分发。

## 多源接入与同步

后端已实现接入链路：

- 邮件：IMAP、Gmail OAuth、Outlook OAuth、邮件转发 Inbound
- 开发协作：GitHub OAuth
- 内容源：RSS、Bilibili、X、微博、抖音、小红书
- 其它：Mock

同步由异步 `sync_jobs` 执行，支持并发 worker 与状态查询。

## Desk 观察台

`/api/v1/desk/*` 提供跨来源内容流能力：

- feed 时间流浏览
- 来源过滤
- 关键词检索
- 标签关注、推荐、发现
- 与 Tracking 的上下文联动（同屏切换）

这让“追踪变化”和“原始内容”可以在一个观察面中来回跳转。

## 内容打标（规则 + LLM）

打标服务会先跑规则分类，再按条件触发 LLM 补判：

- 规则命中：低成本、可解释
- LLM 补标：处理低置信度或歧义内容
- 异步补标：队列后台执行，不阻塞主流程

Desk 的 Tag 关注/推荐就建立在这些标签统计上。

## 主动提醒

Aelin 的主动轮询包括：

- 新焦点动态
- 追踪状态变化
- 未读堆积提醒
- 设备负载异常提醒

返回接口：`GET /api/v1/aelin/proactive/poll`

## 边界说明

- 前端有知乎入口，但后端暂无知乎独立连接器；当前建议使用 RSS/RSSHub 路线替代。
- 部分平台抓取依赖公开页面结构，稳定性会受上游改版影响。

---
title: FAQ
slug: /reference/faq
description: Aelin 当前版本的高频问题与快速答案。
---

# FAQ

## 1. 项目叫 Aelin，为什么环境变量还是 `MERCURYDESK_*`？

这是历史兼容策略。源码中 `SettingsConfig` 仍使用 `env_prefix="MERCURYDESK_"`，不影响 Aelin 功能本身。

## 2. 不登录也能用，是否正常？

正常。鉴权逻辑支持本地单用户 fallback：无 token 时会回落到本地用户，适合个人本地部署。

## 3. 当前到底支持哪些数据源？

已实现：IMAP、Gmail OAuth、Outlook OAuth、GitHub OAuth、RSS、Bilibili、X、微博、抖音、小红书、邮件转发、Mock。

## 4. 前端有知乎入口，为什么接不上？

因为后端暂无独立知乎连接器实现。当前建议走 RSS/RSSHub 路线替代。

## 5. 为什么在 Processes 页点 `performance/battery` 没有对应模式？

后端模式归一只支持 `meeting/focus/sleep/normal/default`，未知值会降级为 `normal`。

## 6. 追踪目标为什么会返回 `needs_config`？

说明该来源缺少已连接账号（例如 X/抖音/微博等）。先到 Settings 完成接入，再重试确认追踪。

## 7. 日记和文件记忆保存在哪里？

默认在 `MercuryDesk/data/aelin_memory` 下，按 `user/workspace` 分层存储为 Markdown。

## 8. 媒体摄取“成功”但没写入日记，是失败吗？

不一定。若 `quality_gate` 未通过，系统会返回 processed 但不落盘，避免低质量摘要污染记忆。

## 9. 模型列表从哪里来？

来自 `models.dev/api.json`，后端会缓存，不会每次都实时拉远端。

## 10. Electron 桌面版可以直接打包 Windows 吗？

可以。`desktop` 工程内已配置 `electron-builder` 的 Windows 目标与资源拷贝流程。

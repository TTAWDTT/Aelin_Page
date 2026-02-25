---
title: Quick Start
slug: /quick-start
description: 10 分钟跑通 Aelin：启动服务、接入数据源、发起追踪、查看变化与日记记忆。
---

# Quick Start

以下步骤按本地开发部署路径编写，基于 `MercuryDesk` 源码目录。

## 1. 启动后端

```powershell
cd D:\HuaweiMoveData\Users\yixiao\Desktop\MercuryDesk\backend
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```

后端启动后会在生命周期中自动拉起追踪调度器。

## 2. 启动前端

```powershell
cd D:\HuaweiMoveData\Users\yixiao\Desktop\MercuryDesk\frontend
npm install
npm run dev
```

打开 `http://127.0.0.1:5173`。

## 3. 完成最小配置

- 进入 `Settings`。
- AI 配置可先使用 `rule_based`（零密钥可用）。
- 如需模型回答，配置 OpenAI-compatible `base_url/model/api_key`。

## 4. 接入至少一个数据源

推荐先接入最容易验证的来源之一：

- `RSS`
- `Bilibili`
- `X`
- `IMAP` 邮箱

接入后点击同步，等待首批内容进入系统。

## 5. 在 Chat 发起一次真实问题

示例：

- “帮我跟踪某个账号最近更新，并且以后有变化提醒我。”

你会在回答中看到：

- 流式输出（SSE）
- 引用来源
- 动作建议（例如创建追踪）
- 工具链路步骤（intent/planning/search/verifier/trace）

## 6. 确认追踪并触发运行

- 在 Chat 里确认跟踪目标，或去 `Tracking` 页面手动创建。
- 点击“立即运行”，查看变化流与快照。
- 变化支持 `ack` 已读，通知会同步减少未读。

## 7. 打开 Desk 与日记

- 在 `Tracking` 页面打开 `Desk` 观察台，查看跨来源内容流。
- 在 `Diary` 页面查看系统自动沉淀的 Markdown 记忆。

## 8. 可选：开启专注模式

在 `Focus` 页面切到 `focus`，会联动通知静默与设备模式状态。

## 常见启动问题

- `OAuth 回调失败`：检查 `MERCURYDESK_OAUTH_REDIRECT_BASE_URL` 与回调地址一致。
- `移动端/模拟器 failed to fetch`：不要用 `localhost`，改用同网段可达地址。
- `媒体摘要失败`：确认已安装 `yt-dlp`，如需抖音受限内容请配置 cookies 或登录引导。

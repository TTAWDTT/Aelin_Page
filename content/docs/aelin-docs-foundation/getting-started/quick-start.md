---
title: Quick Start
description: 用最短路径跑起 Aelin，连接模型，并验证第一个 workspace 已经可以工作。
date: 2026-04-16
---

# Quick Start

This guide gets you to a working Aelin setup as quickly as possible.

At the end, you should have:

- backend running
- frontend running
- a model configured
- one successful workspace session

## Before You Start

准备好下面这些东西：

- Python 环境
- Node.js 与 npm
- 一个可用的模型服务
- 对应的 API key

## 1. Clone the repository

```bash
git clone https://github.com/TTAWDTT/Aelin.git
cd Aelin
```

## 2. Start the backend

```bash
cd backend
python -m pip install -r requirements.txt
python -m langgraph dev --config langgraph.json --host 127.0.0.1 --port 8000 --no-browser
```

Windows 也可以使用：

```powershell
./scripts/dev-backend.ps1
```

## 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

默认开发地址通常是：

- `http://127.0.0.1:5173`

## 4. Optional: start Desktop

如果你想测试桌面能力，再额外启动 Electron runtime：

```bash
cd desktop
npm install
npm run dev
```

## 5. Configure your model

进入设置页，填写你要使用的模型配置：

- `provider`
- `model`
- `base_url`
- `api_key`

如果你不确定怎么选，下一步读 [Configure LLM Provider](../guides/configure-llm-provider.md)。

## 6. Verify with one real task

建议你直接用一个同时涉及文件和持续工作的例子，例如：

> “总结这份附件的重点，并告诉我接下来应该怎么继续。”

如果这一步正常，你应该能看到：

- workspace 已经开始承接上下文
- 文件内容进入当前任务
- 回答不只是结论，还会带出下一步

## 7. Minimal checklist

如果下面这些都正常，说明你已经跑通了 Aelin 的核心体验：

1. backend 正常运行
2. frontend 可以打开
3. 模型配置可以保存
4. 新开会话可以流式返回结果
5. 你可以完成一次真实问答

## Next Steps

- [How Aelin Works](../concepts/how-aelin-works.md)
- [Create a Tracking Flow](../guides/create-a-tracking-flow.md)
- [Run on Web / Desktop / Mobile](../guides/run-web-desktop-mobile.md)

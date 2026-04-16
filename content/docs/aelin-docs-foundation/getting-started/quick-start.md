---
title: Quick Start
description: 用最短路径跑起 Aelin，并快速体验它如何把对话、记忆、资料和桌面能力放进同一个工作流。
date: 2026-04-16
---

# Quick Start

这份 Quick Start 面向两类人：

- 想先体验 Aelin 的用户
- 想在本地跑起 Aelin 的开发者

## 1. 获取主仓库

```bash
git clone https://github.com/TTAWDTT/Aelin.git
cd Aelin
```

## 2. 启动 backend

```bash
cd backend
python -m pip install -r requirements.txt
python -m langgraph dev --config langgraph.json --host 127.0.0.1 --port 8000 --no-browser
```

Windows 也可以使用：

```powershell
./scripts/dev-backend.ps1
```

## 3. 启动 frontend

```bash
cd frontend
npm install
npm run dev
```

默认开发地址通常是：

- `http://127.0.0.1:5173`

## 4. 可选：启动 desktop

如果你想体验桌面能力，再额外启动 Electron runtime：

```bash
cd desktop
npm install
npm run dev
```

## 5. 配置模型

进入设置页，填写你要使用的模型配置：

- `provider`
- `model`
- `base_url`
- `api_key`

## 6. 开始第一次会话

建议你用一个同时涉及资料和持续工作的例子来体验，例如：

> “总结这份附件的重点，并告诉我接下来应该怎么继续。”

这样你会更容易感受到 Aelin 的核心体验：

- 对话和资料在同一个工作流里
- 工作区能承接上下文
- 回答更偏向帮助你继续推进任务

## 7. 最小验证清单

如果下面这些都正常，说明你已经跑通了 Aelin 的核心体验：

1. backend 正常运行
2. frontend 可以打开
3. 模型配置可以保存
4. 新开会话可以流式返回结果
5. `/docs` 和 `/about` 可以打开

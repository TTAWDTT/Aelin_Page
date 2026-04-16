---
title: Quick Start
description: 用最短路径跑起当前版本的 Aelin，包括 backend、frontend、desktop 与模型配置。
date: 2026-04-16
---

# Quick Start

这份 Quick Start 面向想要**真正跑起当前版本 Aelin** 的开发者或自托管用户。

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

如果你要验证本地设备能力或桌面桥接能力，再额外启动 Electron runtime：

```bash
cd desktop
npm install
npm run dev
```

## 5. 配置模型提供商

进入 Aelin 的设置页，填写你要使用的模型配置：

- `provider`
- `model`
- `base_url`
- `api_key`

当前版本的 Aelin 是按用户与工作区解析这些配置的，因此你可以：

- 用官方云端模型
- 用兼容 OpenAI 风格的自定义网关
- 在不同工作区切换不同模型策略

## 6. 开始第一次会话

建议用一个简单但能体现当前链路的问题测试：

> “总结这份附件的重点，并告诉我接下来应该怎么继续。”

这样你会同时看到：

- 官方 thread / run 流式输出
- 工具调用与执行状态
- 附件进入运行上下文
- 工作区记忆如何与当前任务配合

## 7. 建议你验证的三个事实

### 会话语义是官方的

当前前端不是在解析旧自定义 SSE，而是在消费官方 run metadata。

### 记忆是文件化的

当前聊天记忆的核心锚点是工作区下的 `/memory/AGENTS.md`。

### Aelin 是薄产品壳

你会发现：

- 主聊天能力走官方 Agent Server
- Aelin 自己主要提供产品 API、附件、设备和桌面边界

## 8. 如果你只想先确认系统是否正常

最小验证路径如下：

1. backend 跑在 `8000`
2. frontend 跑在 `5173`
3. 设置页能保存 provider / model / key
4. 新开会话可以得到流式回复
5. `/docs` 与 `/about` 页面能打开当前版本说明

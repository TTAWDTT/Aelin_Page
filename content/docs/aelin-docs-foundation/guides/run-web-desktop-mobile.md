---
title: Run on Web / Desktop / Mobile
description: 了解当前版本 Aelin 的主要运行表面。当前主维护表面是 Web 与 Desktop，移动端不是这条分支的核心落点。
date: 2026-04-16
---

# Run on Web / Desktop / Mobile

## 先说当前状态

当前版本 Aelin 的主要运行表面是：

- **Web**
- **Desktop**

移动端并不是当前主分支的核心落点，因此这份文档会优先讲清楚 Web 和 Desktop。

## Web

Web 表面主要负责：

- 聊天界面
- 流式运行展示
- 设置与工作区交互
- 文档与对外页面

本地开发通常是：

```bash
cd frontend
npm install
npm run dev
```

## Desktop

Desktop 基于 Electron，负责：

- 启动本地 runtime
- 桥接 backend / frontend
- 提供本地设备与插件能力
- 在打包后提供更完整的本机体验

本地开发通常是：

```bash
cd desktop
npm install
npm run dev
```

## Backend 是两者共同依赖的底座

无论你主要用 Web 还是 Desktop，Aelin 当前的核心运行时都依赖 backend：

```bash
cd backend
python -m pip install -r requirements.txt
python -m langgraph dev --config langgraph.json --host 127.0.0.1 --port 8000 --no-browser
```

## Web 与 Desktop 的差异

### Web 更轻

适合：

- 纯聊天
- 纯文档
- 调试前后端主链

### Desktop 更深

适合：

- 设备能力
- 屏幕捕获
- 本地路径 / URL / 应用交互
- 更完整的本机产品体验

## 关于 Mobile

如果你看到旧材料里提过 mobile，请把它理解成更早阶段的产品想法或外围方向。

在当前这条架构主线上，更准确的说法是：

- Aelin 当前以 Web + Desktop 为主
- 移动端不是当前公开文档需要重点承诺的核心表面

这样描述更符合现在的真实状态，也能避免对外过度承诺。

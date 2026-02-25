---
title: Device Interaction
slug: /features/device
description: Aelin 支持本地设备进程治理、模式切换和专注联动，并在桌面壳中提供桌宠行为引擎。
---

# Device Interaction

Aelin 在本地机提供“可控”的设备能力，分为进程控制、模式切换、专注联动三部分。

## 进程治理

核心接口：

- `GET /api/v1/aelin/device/processes`
- `POST /api/v1/aelin/device/processes/{pid}/action`
- `POST /api/v1/aelin/device/processes/optimize`

可见能力：

- 进程列表（CPU/内存排序）
- 异常评分（anomaly score + reasons）
- 终止高风险进程
- 优先级调整（high/low）

## 模式切换

接口：

- `GET /api/v1/aelin/device/mode`
- `POST /api/v1/aelin/device/mode/apply`

后端明确支持：

- `meeting`
- `focus`
- `sleep`
- `normal`
- `default`（归一为 `normal`）

其它模式值会降级为 `normal`。

## 专注模式联动

`Focus` 页面会把两个状态绑在一起：

- 通知静默（前端通知状态）
- 设备模式（后端 mode state）

所以“开启专注”不仅是 UI 标记，也会尝试触发系统级动作。

## Electron 桌面壳与桌宠

桌面端由 Electron 承载，支持：

- Windows 安装包打包（electron-builder）
- 托盘与悬浮窗
- 桌宠状态机（resting/working/completed/happy）
- 行为/情绪文案与媒体控制联动

## 边界说明

- 非 Windows 环境下，模式控制会退化为“状态记录 + 部分能力可用”。
- 前端存在 `performance/battery` 快捷按钮，但后端会按未知模式降级处理。
- 系统级静音/亮度等动作受设备权限和系统策略影响，可能出现 partial 状态。

---
title: Agent Chat
slug: /features/agent-chat
description: Aelin Chat 是主入口，支持 SSE、证据引用、动作建议与工具链路可视化。
---

# Agent Chat

`Agent Chat` 是 Aelin 的主交互入口，后端实现位于 `router=/api/v1/aelin`，核心接口是：

- `POST /api/v1/aelin/chat`
- `POST /api/v1/aelin/chat/stream`

## 你会看到什么

1. 流式 SSE 过程
`/chat/stream` 会推送阶段事件，而不是只返回最终文本。

2. 引用来源
回答会附带 `citations`，统一结构化返回 `source/source_label/title/sender/score`。

3. 动作建议
回答可附带 `actions`，例如：打开追踪、打开设置、跳转 Desk、查看日记。

4. 工具链路可视化
前端会把 `tool_trace` 实时渲染为链路面板，便于你判断“系统做了哪些步骤”。

## SSE 事件与链路阶段

当前实现可见的流式事件包括：

- `start`：请求已进入处理。
- `trace`：链路步骤更新（用于前端 Agent Trace 面板）。
- `evidence`：检索到证据时的中间态信息。
- `confirmed`：追踪建议确认类事件。
- `final`：最终回答与完整结构化结果。
- `error` / `done`：错误与结束信号。

常见 `trace.stage`：

- `intent_lens`
- `plan_critic`
- `query_decomposer`
- `local_search`
- `web_search`
- `message_hub`
- `generation`
- `grounding_judge`
- `coverage_verifier`
- `reply_verifier`
- `trace_agent`

## 回答策略（源码行为）

- 先做意图契约，再做工具规划与计划批评（critic patch）。
- 本地检索与 Web 检索可并行执行，并在 `message_hub` 汇总证据。
- 回答后有 grounding / coverage / reply verifier 三层校验。
- 对需要证据的场景，可触发 verifier 驱动的 Web 重试检索。

## 你该如何使用

- 提问时明确对象、时间窗口、关注维度。
- 对事实敏感场景，优先看 citations，再看结论。
- 当出现“可追踪对象”时，直接确认追踪，让系统自动续跑。

## 边界说明

- 流式是“事件流”，不是逐 token 打字机模式。
- 结果质量受模型、数据可达性、平台反爬策略影响。
- 关键决策仍建议进行交叉核验。

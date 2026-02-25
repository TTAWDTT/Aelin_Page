---
title: Run on Web / Desktop / Mobile
slug: /guides/run-multi-platform
description: 说明 Aelin 在 Web、Electron 桌面端与移动访问场景的运行方式与注意事项。
---

# Run on Web / Desktop / Mobile

## Web（主开发形态）

### 后端

```powershell
cd D:\HuaweiMoveData\Users\yixiao\Desktop\MercuryDesk\backend
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```

### 前端

```powershell
cd D:\HuaweiMoveData\Users\yixiao\Desktop\MercuryDesk\frontend
npm install
npm run dev
```

访问：`http://127.0.0.1:5173`

## Desktop（Electron 壳）

### 开发模式

```powershell
cd D:\HuaweiMoveData\Users\yixiao\Desktop\MercuryDesk\desktop
npm install
npm run dev
```

桌面壳会拉起前后端并加载桌宠窗口。

### Windows 打包

```powershell
cd D:\HuaweiMoveData\Users\yixiao\Desktop\MercuryDesk\desktop
npm run dist
```

产物默认输出到 `desktop/release-dist`（或配置指定目录）。

## Mobile（当前建议：同网段 Web 访问）

当前仓库没有独立移动端工程；移动使用方式是通过浏览器访问前端服务。

- 保证手机与开发机同网段。
- 前端请求后端时使用可达地址（不要写 `localhost`）。
- 需要放通端口与防火墙策略。

## 常见问题

1. `failed to fetch`
后端地址不可达，优先检查 IP、端口、防火墙。

2. OAuth 回调不生效
检查：

- `MERCURYDESK_OAUTH_REDIRECT_BASE_URL`
- 第三方平台回调地址
- 前后端访问域名是否一致

3. 桌面打包失败
通常是依赖环境问题（Node/Python/构建工具版本、证书策略、代理网络）。

4. 环境变量命名疑惑
项目名是 Aelin，但环境变量仍使用 `MERCURYDESK_*`，属于兼容策略。

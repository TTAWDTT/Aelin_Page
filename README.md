# Aelin Page

`Aelin_Page` 是 Aelin 官网与文档站点的源码仓库。

它不是 Aelin 主产品仓库本身。当前主产品代码在：

- [TTAWDTT/Aelin](https://github.com/TTAWDTT/Aelin)

这个仓库负责：

- 官网首页与 About 页面
- 面向用户与集成开发者的公开文档
- GitHub Pages 静态部署产物

## 当前定位

Aelin 现在已经不是早期的自定义聊天循环原型。

当前对外文档应以这条主链为准：

- React 前端使用官方流式运行时
- LangGraph Agent Server 提供 `assistants / threads / runs`
- DeepAgents 负责 agent、tools、skills、memory 与 subagent 能力
- Aelin 保留薄产品壳与桌面集成能力

换句话说，Aelin 现在更接近：

> “建立在 LangGraph Agent Server + DeepAgents 之上的 AI workspace / product shell”

而不是：

> “一套自定义协议、自定义循环、自定义前端流式语义的聊天 demo”

## 内容目录

- `content/about/`
  - About 页面内容
- `content/docs/aelin-docs-foundation/`
  - 官网文档正文
- `pages/`
  - Next.js 页面入口
- `public/`
  - 图片、GIF、图标等静态资源

## 本地运行

```bash
npm install
npm run dev
```

## 构建静态站点

```bash
npm run build
```

站点使用 `next export` 输出到 `out/`，并通过 GitHub Pages workflow 发布。

## GitHub Pages

当前仓库应使用：

- `Settings -> Pages -> Build and deployment -> Source = GitHub Actions`

不要再使用 `Deploy from a branch`，否则 GitHub 会把仓库根目录的 `README.md` 当成 Jekyll 站点首页渲染。

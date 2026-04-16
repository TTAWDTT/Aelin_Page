export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aelin",
  description:
    "Aelin 将聊天、记忆、网页搜索、附件理解与桌面能力放进同一个 AI workspace，让你围绕同一主题持续工作。",
  navItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "文档",
      href: "/docs",
    },
    {
      label: "关于",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "文档",
      href: "/docs",
    },
    {
      label: "关于",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/TTAWDTT/Aelin",
    twitter: "https://twitter.com/hero_ui",
    docs: "/docs",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aelin",
  description:
    "Aelin 是一个面向持续工作的 AI workspace，把聊天、文件、网页研究、记忆与桌面能力放进同一个 workspace。",
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

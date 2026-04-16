import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { fontChinese } from "@/config/fonts";
import DefaultLayout from "@/layouts/default";
import { withBasePath } from "@/lib/base-path";

const quickLinks = [
  {
    title: "Start Here",
    description: "先了解 Aelin 是什么、从哪里开始，以及哪些页面值得先读。",
    href: "/docs",
  },
  {
    title: "Quick Start",
    description: "本地跑起 Aelin，并打开你的第一个 workspace。",
    href: "/docs/getting-started/quick-start",
  },
  {
    title: "Set Up a Model",
    description: "配置 provider、model、base URL 和 API key。",
    href: "/docs/guides/configure-llm-provider",
  },
  {
    title: "Choose Your Surface",
    description: "了解什么时候该用 Web，什么时候该用 Desktop。",
    href: "/docs/guides/run-web-desktop-mobile",
  },
] as const;

const capabilities = [
  {
    title: "Workspace-first chat",
    description: "把同一主题的对话、资料和结论留在同一个 workspace 里。",
  },
  {
    title: "Files in context",
    description: "附件不是外挂。文件会和当前问题、历史上下文一起参与工作流。",
  },
  {
    title: "Web research when needed",
    description: "当问题依赖最新信息或外部证据时，再把网页信息带进来。",
  },
  {
    title: "Memory for ongoing work",
    description: "让真正重要的背景和结论沉淀下来，方便下次继续。",
  },
  {
    title: "Desktop capabilities",
    description: "在需要时把任务从聊天带到本地环境，而不必切断上下文。",
  },
  {
    title: "Answer-first flow",
    description: "先给可继续使用的结果，再补充依据、限制和下一步。",
  },
] as const;

const learningPath = [
  {
    step: "01",
    title: "Quick Start",
    description: "先把 Aelin 跑起来，并确认基础闭环已经工作。",
    href: "/docs/getting-started/quick-start",
  },
  {
    step: "02",
    title: "How Aelin Works",
    description: "理解 workspace、文件、网页研究和记忆是怎样放到一起的。",
    href: "/docs/concepts/how-aelin-works",
  },
  {
    step: "03",
    title: "Build a Tracking Flow",
    description: "用一个真实主题建立可以持续推进的工作流。",
    href: "/docs/guides/create-a-tracking-flow",
  },
] as const;

const useCases = [
  "持续研究一个项目、公司、主题或对象。",
  "把附件、网页信息和历史上下文放在同一个地方处理。",
  "从 Web 开始工作，再在需要时延伸到 Desktop。",
  "让 AI 成为工作流的一部分，而不是一次性的聊天窗口。",
] as const;

export default function IndexPage() {
  const router = useRouter();
  const shouldPrefetch = process.env.NODE_ENV === "production";

  useEffect(() => {
    if (shouldPrefetch) {
      void router.prefetch("/docs");
    }
  }, [router, shouldPrefetch]);

  return (
    <DefaultLayout>
      <section className="grid items-center gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-14">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-700 shadow-sm shadow-zinc-200/40 dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:shadow-black/20">
            AI Workspace For Ongoing Work
          </span>
          <div className="space-y-4">
            <h1 className={title({ fullWidth: true, size: "lg" })}>Aelin</h1>
            <h2
              className={`${subtitle({ fullWidth: true })} ${fontChinese.className} !w-full text-left`}
            >
              为持续工作设计的 AI workspace
            </h2>
            <p className="max-w-3xl text-base leading-8 text-zinc-700 dark:text-white/80 md:text-lg">
              把聊天、文件、网页研究、记忆与桌面能力放进同一个
              workspace。当一个主题需要反复推进，而不是一次问完时， Aelin
              会把上下文和下一步都留在同一个地方。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              as={NextLink}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.docs}
              prefetch={shouldPrefetch}
            >
              Start Here
            </Link>
            <Link
              as={NextLink}
              className={buttonStyles({ radius: "full", variant: "bordered" })}
              href="/docs/getting-started/quick-start"
              prefetch={shouldPrefetch}
            >
              Quick Start
            </Link>
            <Link
              isExternal
              className={buttonStyles({ radius: "full", variant: "light" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
          <div className="grid gap-3 text-sm text-zinc-700 dark:text-white/75 sm:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-3 shadow-sm shadow-zinc-200/40 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200/80 bg-white/75 p-6 shadow-xl shadow-zinc-300/20 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30">
          <div className="flex items-center gap-5">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-md dark:border-white/15 dark:bg-black/10">
              <Image
                fill
                priority
                alt="Aelin"
                className="object-cover"
                sizes="112px"
                src={withBasePath("/smile.png")}
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-white/60">
                Product Snapshot
              </p>
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">
                One workspace, one ongoing thread of work
              </h3>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm leading-7 text-zinc-700 dark:text-white/75">
            <p>
              Use Aelin when the same topic needs multiple passes, new files,
              more research, and follow-up actions over time.
            </p>
            <ul className="space-y-2">
              <li>Chat stays attached to a workspace.</li>
              <li>Files, notes, and web research stay in context.</li>
              <li>
                Desktop capabilities are available when the task leaves the
                browser.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-white/60">
            Start Here
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">
            The first pages most users should read
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              as={NextLink}
              className="block rounded-3xl border border-zinc-200/80 bg-white/75 p-5 text-left shadow-sm shadow-zinc-200/40 transition-transform duration-150 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-300/20 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20 dark:hover:border-white/20 dark:hover:shadow-black/30"
              href={item.href}
              prefetch={shouldPrefetch}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-white/55">
                Docs
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-white/75">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-white/60">
            Core Capabilities
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">
            What Aelin is built to do
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm shadow-zinc-200/40 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
            >
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-white/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-white/60">
            Learning Path
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">
            A simple path through the docs
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {learningPath.map((item) => (
            <Link
              key={item.href}
              as={NextLink}
              className="block rounded-3xl border border-zinc-200/80 bg-white/75 p-5 shadow-sm shadow-zinc-200/40 transition-transform duration-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300/20 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20 dark:hover:shadow-black/30"
              href={item.href}
              prefetch={shouldPrefetch}
            >
              <p className="text-sm font-semibold text-zinc-500 dark:text-white/55">
                {item.step}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-white/75">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}

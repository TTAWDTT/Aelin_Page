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
      <section className="flex flex-col items-center justify-center gap-4 py-8">
        <div className="relative mb-2 h-52 w-52 overflow-hidden rounded-full border-2 border-zinc-200/80 shadow-lg shadow-zinc-300/30 dark:border-white/20 dark:shadow-black/40">
          <Image
            fill
            priority
            alt="Aelin"
            className="object-cover"
            sizes="208px"
            src={withBasePath("/smile.png")}
          />
        </div>
        <h1 className={title()}>Aelin</h1>
        <h2
          className={`${subtitle()} ${fontChinese.className} text-center mx-auto`}
        >
          把聊天、记忆、搜索、附件与桌面能力放进同一个 AI workspace
        </h2>
        <p className="mx-auto max-w-2xl text-center text-sm leading-7 text-zinc-600 dark:text-white/75 md:text-base">
          Aelin 帮你围绕同一主题持续工作。你可以读取附件、结合网页信息、
          记住重要上下文，并在需要时把任务继续带到桌面环境里完成。
        </p>
        <div className="flex gap-3">
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
            查看文档
          </Link>
          <Link
            isExternal
            className={buttonStyles({ radius: "full", variant: "bordered" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}

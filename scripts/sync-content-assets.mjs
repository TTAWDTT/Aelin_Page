import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const markdownExtensions = new Set([".md", ".mdx"]);

const targets = [
  {
    sourceDir: path.resolve(projectRoot, "content", "about"),
    targetDir: path.resolve(projectRoot, "public", "about-asset"),
  },
  {
    sourceDir: path.resolve(
      projectRoot,
      "content",
      "docs",
      "aelin-docs-foundation",
    ),
    targetDir: path.resolve(projectRoot, "public", "docs-asset"),
  },
];

async function copyAssets(sourceDir, targetDir) {
  let entries;

  try {
    entries = await fs.readdir(sourceDir, { withFileTypes: true });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error) {
      if (error.code === "ENOENT") return;
    }
    throw error;
  }

  await fs.mkdir(targetDir, { recursive: true });

  for (const entry of entries) {
    if (entry.name === ".obsidian") continue;

    const sourcePath = path.resolve(sourceDir, entry.name);
    const targetPath = path.resolve(targetDir, entry.name);

    if (entry.isDirectory()) {
      await copyAssets(sourcePath, targetPath);
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();

    if (markdownExtensions.has(extension)) continue;

    await fs.copyFile(sourcePath, targetPath);
  }
}

async function run() {
  for (const target of targets) {
    await fs.rm(target.targetDir, { force: true, recursive: true });
    await copyAssets(target.sourceDir, target.targetDir);
  }
}

run().catch((error) => {
  console.error("[sync-content-assets] failed");
  console.error(error);
  process.exit(1);
});

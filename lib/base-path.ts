function normalizeBasePath(rawValue: string | undefined): string {
  if (!rawValue) return "";

  const trimmed = rawValue.trim();

  if (!trimmed || trimmed === "/") return "";

  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;

  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
}

const BASE_PATH = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

export function getBasePath(): string {
  return BASE_PATH;
}

export function withBasePath(pathname: string): string {
  if (!pathname) return BASE_PATH || "/";
  if (/^(https?:|mailto:|tel:|data:|\/\/)/i.test(pathname)) return pathname;

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return `${BASE_PATH}${normalizedPath}`;
}

"use client";

import { useTheme } from "next-themes";
import type { SVGProps } from "react";
import { useSyncExternalStore } from "react";
import { GithubDark } from "./githubDark";
import { GithubLight } from "./githubLight";

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  const { theme, systemTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!isMounted) {
    // Return dark version as default during SSR/hydration
    return <GithubDark {...props} />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return isDark ? <GithubDark {...props} /> : <GithubLight {...props} />;
}


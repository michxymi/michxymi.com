"use client";

import { useTheme } from "next-themes";
import type { SVGProps } from "react";
import { useSyncExternalStore } from "react";
import { LinkedinDark } from "./linkedinDark";
import { LinkedinLight } from "./linkedinLight";

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  const { theme, systemTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!isMounted) {
    // Return dark version as default during SSR/hydration
    return <LinkedinDark {...props} />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return isDark ? <LinkedinDark {...props} /> : <LinkedinLight {...props} />;
}


"use client";

import { useTheme } from "next-themes";
import type { SVGProps } from "react";
import { useSyncExternalStore } from "react";
import { X } from "./x";
import { XDark } from "./xDark";

export function XIcon(props: SVGProps<SVGSVGElement>) {
  const { theme, systemTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!isMounted) {
    // Return dark version as default during SSR/hydration
    return <XDark {...props} />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return isDark ? <XDark {...props} /> : <X {...props} />;
}


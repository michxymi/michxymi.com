"use client";

import { useTheme } from "next-themes";
import type { SVGProps } from "react";
import { useSyncExternalStore } from "react";

export function XLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 1200 1227">
      <title>X</title>
      <path
        d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
        fill="#000"
      />
    </svg>
  );
}

export function XDark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 1200 1227">
      <title>X</title>
      <path
        d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
        fill="#fff"
      />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  const { theme, systemTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    // biome-ignore lint/suspicious/noEmptyBlockStatements: subscribe no-op
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

  return isDark ? <XDark {...props} /> : <XLight {...props} />;
}

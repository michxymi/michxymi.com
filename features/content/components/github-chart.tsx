"use client";

import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function GithubChart() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-[104px] w-full overflow-hidden rounded-md">
      {isLoading && (
        <Skeleton className="absolute inset-0 z-10 h-full w-full" />
      )}

      <Image
        alt="GitHub Contributions chart showing activity over the past year"
        className={cn(
          "w-full transition-opacity duration-500",
          "dark:brightness-90 dark:contrast-125 dark:hue-rotate-180 dark:invert",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        height={104}
        onLoad={() => setIsLoading(false)}
        sizes="(max-width: 768px) 100vw, 722px"
        src="https://ghchart.rshah.org/michxymi"
        unoptimized
        width={722}
      />
    </div>
  );
}

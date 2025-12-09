"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useImperativeHandle } from "react";

export interface StatsIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface StatsIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const StatsIcon = forwardRef<StatsIconHandle, StatsIconProps>(
  (
    {
      onMouseEnter,
      onMouseLeave,
      className,
      size = 24,
      ...props
    },
    ref,
  ) => {
    useImperativeHandle(ref, () => ({
      startAnimation: () => {},
      stopAnimation: () => {},
    }));

    return (
      <div
        className={cn("inline-flex items-center justify-center", className)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          strokeLinejoin="round"
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.51324 3.62367L3.76375 8.34731C3.61845 8.7396 3.24433 8.99999 2.826 8.99999H0.75H0V7.49999H0.75H2.47799L4.56666 1.86057C4.88684 0.996097 6.10683 0.988493 6.43776 1.84891L10.5137 12.4463L12.2408 8.1286C12.3926 7.74894 12.7604 7.49999 13.1693 7.49999H15.25H16V8.99999H15.25H13.5078L11.433 14.1868C11.0954 15.031 9.8976 15.023 9.57122 14.1744L5.51324 3.62367Z"
            />
          </g>
        </svg>
      </div>
    );
  },
);

StatsIcon.displayName = "StatsIcon";
export { StatsIcon };

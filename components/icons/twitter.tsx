"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useImperativeHandle } from "react";

export interface TwitterIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface TwitterIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const TwitterIcon = forwardRef<TwitterIconHandle, TwitterIconProps>(
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
              d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
            />
          </g>
        </svg>
      </div>
    );
  },
);

TwitterIcon.displayName = "TwitterIcon";
export { TwitterIcon };

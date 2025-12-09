"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useImperativeHandle } from "react";

export interface DownloadHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface DownloadProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DownloadIcon = forwardRef<DownloadHandle, DownloadProps>(
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
              d="M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z"
            />
          </g>
        </svg>
      </div>
    );
  },
);

DownloadIcon.displayName = "DownloadIcon";
export { DownloadIcon };

"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useImperativeHandle } from "react";

export interface MailIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MailIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MailIcon = forwardRef<MailIconHandle, MailIconProps>(
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
              d="M13.2642 3.5H2.73578L8 8.01219L13.2642 3.5ZM1.5 4.41638V11.5C1.5 12.0523 1.94772 12.5 2.5 12.5H13.5C14.0523 12.5 14.5 12.0523 14.5 11.5V4.41638L8.48809 9.56944L8 9.98781L7.51191 9.56944L1.5 4.41638ZM0 2H1.5H14.5H16V3.5V11.5C16 12.8807 14.8807 14 13.5 14H2.5C1.11929 14 0 12.8807 0 11.5V3.5V2Z"
            />
          </g>
        </svg>
      </div>
    );
  },
);

MailIcon.displayName = "MailIcon";
export { MailIcon };

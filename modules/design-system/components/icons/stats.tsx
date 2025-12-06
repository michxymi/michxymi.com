"use client";

import { cn } from "@/modules/design-system/lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface StatsIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface StatsIconProps extends HTMLMotionProps<"div"> {
  size?: number;
  duration?: number;
  isAnimated?: boolean;
}

const StatsIcon = forwardRef<StatsIconHandle, StatsIconProps>(
  (
    {
      onMouseEnter,
      onMouseLeave,
      className,
      size = 24,
      duration = 1,
      isAnimated = true,
      ...props
    },
    ref,
  ) => {
    const controls = useAnimation();
    const reduced = useReducedMotion();
    const isControlled = useRef(false);

    useImperativeHandle(ref, () => {
      isControlled.current = true;
      return {
        startAnimation: () =>
          reduced ? controls.start("normal") : controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleEnter = useCallback(
      (e?: React.MouseEvent<HTMLDivElement>) => {
        if (!isAnimated || reduced) return;
        if (!isControlled.current) controls.start("animate");
        else onMouseEnter?.(e as any);
      },
      [controls, reduced, isAnimated, onMouseEnter],
    );

    const handleLeave = useCallback(
      (e?: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlled.current) controls.start("normal");
        else onMouseLeave?.(e as any);
      },
      [controls, onMouseLeave],
    );

    const iconVariants: Variants = {
      normal: { scale: 1, y: 0 },
      animate: {
        scale: [1, 1.1, 1],
        y: [0, -2, 0],
        transition: {
          duration: 0.5 * duration,
          ease: "easeOut" as const,
        },
      },
    };

    return (
      <motion.div
        className={cn("inline-flex items-center justify-center", className)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
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
          <motion.g variants={iconVariants} initial="normal" animate={controls}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 1V1.75V14.25V15H12.5V14.25V1.75V1H14ZM8.75 6V6.75V14.25V15H7.25V14.25V6.75V6H8.75ZM3.5 10.75V10H2V10.75V14.25V15H3.5V14.25V10.75Z"
            />
          </motion.g>
        </svg>
      </motion.div>
    );
  },
);

StatsIcon.displayName = "StatsIcon";
export { StatsIcon };

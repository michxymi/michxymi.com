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

    const lineVariants: Variants = {
      normal: { pathLength: 1, opacity: 1 },
      animate: {
        pathLength: [0.6, 1],
        opacity: [0.4, 1],
        transition: {
          duration: 0.8 * duration,
          ease: "easeInOut",
        },
      },
    };

    const dotVariants: Variants = {
      normal: { scale: 1, opacity: 1 },
      animate: {
        scale: [0.8, 1.1, 1],
        opacity: [0.5, 1, 1],
        transition: {
          duration: 0.6 * duration,
          ease: "easeInOut",
          times: [0, 0.6, 1],
        },
      },
    };

    const barVariants: Variants = {
      normal: { scaleY: 1, originY: 1 },
      animate: (index = 0) => ({
        scaleY: [0.7, 1.1, 1],
        transition: {
          duration: 0.65 * duration,
          ease: "easeOut",
          delay: 0.07 * Number(index),
        },
      }),
    };

    return (
      <motion.div
        className={cn("inline-flex items-center justify-center", className)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M4 19v-7l4 3 5-6 7 5"
            variants={lineVariants}
            initial="normal"
            animate={controls}
          />
          <motion.g variants={dotVariants} initial="normal" animate={controls}>
            <motion.circle cx="8" cy="15" r="0.8" />
            <motion.circle cx="13" cy="9" r="0.8" />
            <motion.circle cx="20" cy="14" r="0.8" />
          </motion.g>
          <motion.g initial="normal" animate={controls}>
            <motion.rect
              x="4"
              y="19"
              width="4"
              height="1"
              variants={barVariants}
              custom={0}
            />
            <motion.rect
              x="10"
              y="19"
              width="4"
              height="1"
              variants={barVariants}
              custom={1}
            />
            <motion.rect
              x="16"
              y="19"
              width="4"
              height="1"
              variants={barVariants}
              custom={2}
            />
          </motion.g>
        </motion.svg>
      </motion.div>
    );
  },
);

StatsIcon.displayName = "StatsIcon";
export { StatsIcon };

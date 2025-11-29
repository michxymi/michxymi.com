"use client";

import type { Transition, Variants } from "motion/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Children, useEffect, useState } from "react";

import { cn } from "@/modules/design-system/lib/utils";

const defaultVariants: Variants = {
  initial: { y: -8, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 8, opacity: 0 },
};

const reducedMotionVariants: Variants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
};

type MotionElement = typeof motion.p | typeof motion.span | typeof motion.code;

type Props = {
  as?: MotionElement;
  className?: string;
  children: React.ReactNode[];

  interval?: number;
  transition?: Transition;
  variants?: Variants;

  onIndexChange?: (index: number) => void;
};

export function FlipSentences({
  as: Component = motion.p,
  className,
  children,

  interval = 2,
  transition = { duration: 0.3 },
  variants = defaultVariants,

  onIndexChange,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const items = Children.toArray(children);

  useEffect(() => {
    // Honor prefers-reduced-motion by not cycling through items
    if (prefersReducedMotion) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange, prefersReducedMotion]);

  // For reduced motion, show first item statically
  if (prefersReducedMotion) {
    return (
      <Component
        className={cn("inline-block", className)}
        variants={reducedMotionVariants}
      >
        {items[0]}
      </Component>
    );
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      <Component
        animate="animate"
        className={cn("inline-block", className)}
        exit="exit"
        initial="initial"
        key={currentIndex}
        transition={transition}
        variants={variants}
      >
        {items[currentIndex]}
      </Component>
    </AnimatePresence>
  );
}

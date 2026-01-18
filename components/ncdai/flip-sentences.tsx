"use client";

import type { Transition, Variants } from "motion/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Children, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  initial: { y: -8, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 8, opacity: 0 },
};

const reducedMotionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
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

  // Use reduced motion variants when user prefers reduced motion
  const activeVariants = prefersReducedMotion ? reducedMotionVariants : variants;
  const activeTransition = prefersReducedMotion
    ? { duration: 0.15 }
    : transition;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange]);

  return (
    <AnimatePresence initial={false} mode="wait">
      <Component
        animate="animate"
        className={cn("inline-block", className)}
        exit="exit"
        initial="initial"
        key={currentIndex}
        transition={activeTransition}
        variants={activeVariants}
      >
        {items[currentIndex]}
      </Component>
    </AnimatePresence>
  );
}

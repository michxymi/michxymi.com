'use client';
import Image from 'next/image';
import Link from 'next/link';
import { animate, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { cn } from '@/lib/cn';

type AnimatedCardProps = {
  title: string;
  description: string;
  url: string;
  icons: string[];
};

export function AnimatedCard({ title, description, url, icons }: AnimatedCardProps) {
  return (
    <Card>
      <Link href={url}>
        <CardSkeletonContainer>
          <Skeleton icons={icons} />
        </CardSkeletonContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Link>
    </Card>
  );
}

const Skeleton = ({ icons }: { icons: string[] }) => {
  const scale = [1, 1.1, 1];
  const transform = ['translateY(0px)', 'translateY(-4px)', 'translateY(0px)'];
  const sequence = [
    [
      '.circle-1',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-2',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-3',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-4',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-5',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden p-8">
      <div className="flex shrink-0 flex-row items-center justify-center gap-2">
        <Container className="circle-1 size-8">
          <Image src={icons[0]} alt={icons[0]} width={16} height={16} />
        </Container>
        <Container className="circle-2 size-12">
          <Image src={icons[1]} alt={icons[1]} width={24} height={24} />
        </Container>
        <Container className="circle-3">
          <Image src={icons[2]} alt={icons[2]} width={32} height={32} />
        </Container>
        <Container className="circle-4 size-12">
          <Image src={icons[3]} alt={icons[3]} width={24} height={24} />
        </Container>
        <Container className="circle-5 size-8">
          <Image src={icons[4]} alt={icons[4]} width={16} height={16} />
        </Container>
      </div>

      <div className="absolute top-20 z-40 m-auto h-40 w-px animate-move bg-gradient-to-b from-transparent via-purple to-transparent">
        <div className="absolute -left-10 top-1/2 h-32 w-10 -translate-y-1/2">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: '50%',
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'group mx-auto w-full max-w-sm rounded-xl border border-[rgba(255,255,255,0.10)] bg-gray-100 p-8 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] dark:bg-transparent',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn('py-2 text-lg font-semibold text-gray-800 dark:text-white', className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'max-w-sm text-sm font-normal text-neutral-600 dark:text-neutral-400',
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        'z-40 h-[15rem] rounded-xl md:h-[20rem]',
        className,
        showGradient &&
          'bg-neutral-300 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)] dark:bg-[rgba(40,40,40,0.70)]'
      )}
    >
      {children}
    </div>
  );
};

const Container = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        `flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
        className
      )}
    >
      {children}
    </div>
  );
};

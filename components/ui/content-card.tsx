'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';

type ContentCardProps = {
  author: string;
  avatar: string;
  title: string;
  description: string;
  image: string;
  meta: string;
  url: string;
};

const ContentCard = ({
  author,
  avatar,
  title,
  description,
  image,
  meta,
  url,
}: ContentCardProps) => {
  return (
    <div className="group/card w-full max-w-xs">
      <Link
        href={url}
        style={{ '--image-url': `url(${image})` } as React.CSSProperties}
        className={cn(
          'card backgroundImage relative mx-auto flex h-96 max-w-sm flex-col justify-between overflow-hidden rounded-md p-4 shadow-xl',
          `bg-[image:var(--image-url)] bg-cover`
        )}
      >
        <div className="absolute left-0 top-0 size-full opacity-60 transition duration-300 group-hover/card:bg-black"></div>
        <div className="z-10 flex flex-row items-center space-x-4">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={avatar}
            className="size-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="relative z-10 text-base font-normal text-gray-50">{author}</p>
            <p className="text-sm text-gray-400">{meta}</p>
          </div>
        </div>
        <div>
          <h1 className="relative z-10 text-xl font-bold text-gray-50 md:text-2xl">{title}</h1>
          <p className="relative z-10 my-4 text-sm font-normal text-gray-50">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;

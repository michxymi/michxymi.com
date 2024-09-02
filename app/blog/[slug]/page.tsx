import Link from 'next/link';
import { allPosts } from 'content-collections';
import { MDXContent } from '@content-collections/mdx/react';
import { FaArrowLeft } from 'react-icons/fa';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.fileName.replace(/\.mdx$/, ''),
  }));
}

export const dynamicParams = false;

export default function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postData = allPosts.find((post) => post._meta.fileName.replace(/\.mdx$/, '') === slug);

  return (
    <section className="min-h-screen py-20">
      <div className="flex flex-col items-start justify-center gap-16">
        <Link href="/">
          <FaArrowLeft className="size-6" />
        </Link>
        <div className="mx-auto flex flex-col items-start justify-center gap-8">
          <p className="subheading">| Sept 2, 2024</p>
          <h1 className="heading pb-20">{postData?.title}</h1>
          <MDXContent code={postData ? postData.mdx : ''} />
        </div>
      </div>
    </section>
  );
}

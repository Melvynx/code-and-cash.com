import Cta from '@/components/cta';
import Podcasts from '@/components/podcasts';
import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
// By using next/dynamic, the component is loaded asynchronously after the page has loaded.
// That way, event handlers like onloadedmetadata are available after the component has fully loaded.
const PostContent = dynamic(() => import('./content'), {
  ssr: false,
});

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return;

  const { title, summary: description } = post;

  return {
    title,
    description,
  };
}

export default async function SinglePost({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <>
      <PostContent {...post} />
      {/* <Carousel /> */}
      <Podcasts />
      <div className="pb-12 md:pb-20" aria-hidden="true"></div>
      <Cta />
    </>
  );
}

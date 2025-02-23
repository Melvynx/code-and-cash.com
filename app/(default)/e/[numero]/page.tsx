import { allPosts } from '@/.contentlayer/generated';
import { notFound, redirect } from 'next/navigation';

export default function page({
  params,
}: {
  params: {
    numero: string;
  };
}) {
  const post = allPosts.find((post) => post.numero === Number(params.numero));

  if (!post) {
    notFound();
  }

  redirect(`/${post._id.replace('.mdx', '')}`);

  return <div>page</div>;
}

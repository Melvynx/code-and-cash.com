export const metadata = {
  title: 'Home - Podcast',
  description: 'Page description',
};

import Carousel from '@/components/carousel';
import Cta from '@/components/cta';
import Hero from '@/components/hero';
import Hosts from '@/components/hosts';
import Podcasts from '@/components/podcasts';

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <Hero />
      <Carousel />
      <Podcasts searchParams={searchParams} />
      <Hosts />
      <div className="h-40" />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}

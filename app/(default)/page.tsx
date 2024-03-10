export const metadata = {
  title: "Code & Cash - Podcast",
  description: "Les développeurs aussi peuvent faire du cash.",
};

import Cta from "@/components/cta";
import Hero from "@/components/hero";
import Hosts from "@/components/hosts";
import Podcasts from "@/components/podcasts";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Carousel /> */}
      <Podcasts />
      <Hosts />
      <div className="h-40" />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}

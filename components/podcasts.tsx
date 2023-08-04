import { allPosts } from 'contentlayer/generated';
import { CategoryButton } from './podcast/CategoryButton';
import PostItem from './post-item';

export default function Podcasts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const category = String(searchParams.category || 'All');
  console.log(category);
  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="md:flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-4 md:mb-0">
              Latest Podcasts
            </h2>
            {/* Filters */}
            <div className="flex flex-wrap -m-1">
              <CategoryButton category="All" currentCategory={category} />
              <CategoryButton category="Indie Stories" currentCategory={category} />
              <CategoryButton
                category="Software Social"
                currentCategory={category}
              />
              <CategoryButton category="Interviews" currentCategory={category} />
            </div>
          </div>

          {/* Podcasts */}
          <div>
            {allPosts.map((post, postIndex) => (
              <PostItem key={postIndex} selectedCategory={category} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

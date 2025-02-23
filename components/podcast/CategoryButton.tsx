'use client';

import { useRouter } from 'next/navigation';

export const CategoryButton = ({
  category,
  currentCategory,
}: {
  category: string;
  currentCategory: string | undefined;
}) => {
  const router = useRouter();
  return (
    <button
      className={`font-medium text-sm bg-white hover:bg-slate-100 px-3 py-0.5 rounded-full inline-flex transition duration-150 ease-in-out m-1 shadow-sm ${
        category === currentCategory ? 'text-blue-500 !bg-white' : 'text-slate-500'
      }`}
      onClick={() => {
        const url = new URL(window.location.href);
        url.searchParams.set('category', category);
        router.replace(url.toString());
      }}
    >
      {category}
    </button>
  );
};

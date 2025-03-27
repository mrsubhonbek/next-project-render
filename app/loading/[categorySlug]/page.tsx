import type { Category } from '#/app/api/categories/category';
import { SkeletonCard } from '#/ui/skeleton-card';
import { notFound } from 'next/navigation';

export default async function Page(props: {
  params: Promise<{ categorySlug: string }>;
}) {
  const params = await props.params;
  const res = await fetch(
    `https://app-playground-api.vercel.app/api/categories?delay=1000&slug=${params.categorySlug}`,
    {
      cache: 'no-cache',
    },
  );

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const category = (await res.json()) as Category;

  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
import { notFound } from 'next/navigation';
import type { Category } from './category';

import 'server-only';

export async function getCategories({ parent }: { parent?: string } = {}) {
  const res = await fetch(
    `https://app-playground-api.vercel.app/api/categories${
      parent ? `?parent=${parent}` : ''
    }`,
  );

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const categories = (await res.json()) as Category[];

  if (categories.length === 0) {
    notFound();
  }

  return categories;
}

export async function getCategory({ slug }: { slug: string }) {
  const res = await fetch(
    `https://app-playground-api.vercel.app/api/categories${
      slug ? `?slug=${slug}` : ''
    }`,
  );

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const category = (await res.json()) as Category;

  if (!category) {
    notFound();
  }

  return category;
}

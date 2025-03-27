import {
  RecommendedProductsSkeleton,
  RecommendedProducts,
} from '#/app/streaming/_components/recommended-products';
import {
  ReviewsSkeleton,
  Reviews,
} from '#/app/streaming/_components/reviews';
import { SingleProduct } from '#/app/streaming/_components/single-product';
import { Ping } from '#/ui/ping';
import { Suspense } from 'react';

export const runtime = 'edge';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct
        data={fetch(
          `https://app-playground-api.vercel.app/api/products?id=${params.id}`,
        )}
      />

      <div className="relative">
        <div className="absolute top-2 -left-4">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts
          path="/streaming/edge/product"
          data={fetch(
            `https://app-playground-api.vercel.app/api/products?delay=500&filter=${params.id}`,
            {
              cache: 'no-store',
            },
          )}
        />
      </Suspense>

      <div className="relative">
        <div className="absolute top-2 -left-4">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews
          data={fetch(
            `https://app-playground-api.vercel.app/api/reviews?delay=1000`,
            {
              cache: 'no-store',
            },
          )}
        />
      </Suspense>
    </div>
  );
}

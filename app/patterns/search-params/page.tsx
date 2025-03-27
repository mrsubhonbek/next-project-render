/* eslint-disable @typescript-eslint/no-explicit-any */
import { Boundary } from '#/ui/boundary';
import { Suspense } from 'react';
import ActiveLink from './active-link';
import Client from './client';

const options = [
  {
    name: 'Sort',
    value: 'sort',
    items: ['asc', 'desc'],
  },
  {
    name: 'Page',
    value: 'page',
    items: ['1', '2', '3'],
  },
  {
    name: 'Items Per Page',
    value: 'perPage',
    items: ['10', '25', '100'],
  },
];

export const dynamic = 'force-dynamic';

export default async function Page(props: { searchParams: Promise<any> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-lg font-bold">
        Updating <code>searchParams</code>
      </h1>
      <p>
        The <code>useSearchParams</code> hook returns a read only version of{' '}
        <code>URLSearchParams</code>. You can use{' '}
        <code>useRouter&#40;&#41;</code> or <code>&lt;Link&gt;</code> to set new{' '}
        <code>searchParams</code>. After a navigation is performed, the current{' '}
        <code>page.js</code> will receive an updated <code>searchParams</code>{' '}
        prop.
      </p>
      <div className="mt-12 space-y-12">
        <div className="space-y-4">
          <Boundary color="blue" labels={['From the Client']}>
            <h3 className="mt-0">
              Using <code>useRouter&#40;&#41;</code>
            </h3>

            <Suspense>
              <Client options={options} />
            </Suspense>
          </Boundary>
        </div>

        <div className="space-y-4">
          <Boundary labels={['From the Server']}>
            <h3 className="mt-0">
              Using <code>&lt;Link&gt;</code>
            </h3>

            <div className="flex items-center gap-6">
              {options.map((option) => {
                return (
                  <div key={option.name}>
                    <div className="text-gray-400">{option.name}</div>

                    <div className="mt-1 flex gap-2">
                      {option.items.map((item, i) => {
                        const isActive =
                          (!searchParams[option.value] && i === 0) ||
                          item === searchParams[option.value];

                        const params = new URLSearchParams(searchParams);
                        params.set(option.value, item);
                        return (
                          <ActiveLink
                            key={item}
                            isActive={isActive}
                            searchParams={params.toString()}
                          >
                            {item}
                          </ActiveLink>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Boundary>
        </div>
      </div>
    </div>
  );
}

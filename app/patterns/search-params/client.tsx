'use client';

import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export default function Client({
  options,
}: {
  options: {
    name: string;
    value: string;
    items: string[];
  }[];
}) {
  const searchParams = useSearchParams()!;
  const pathname = usePathname();
  const router = useRouter();

  const selectedOptions = useMemo<URLSearchParams>(() => {
    const params = new URLSearchParams(searchParams);

    options.forEach((option) => {
      if (!searchParams.has(option.value)) {
        params.set(option.value, option.items[0]);
      }
    });

    return params;
  }, [searchParams, options]);

  const updateSearchParam = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      router.push(pathname + '?' + params.toString());
    },
    [router, pathname, searchParams],
  );

  return (
    <>
      <div className="flex items-center gap-6">
        {options.map((option) => (
          <div key={option.name}>
            <div className="text-gray-400">{option.name}</div>

            <div className="mt-1 flex gap-2">
              {option.items.map((item) => {
                const isActive = selectedOptions.get(option.value) === item;

                return (
                  <button
                    key={item}
                    onClick={() => updateSearchParam(option.value, item)}
                    className={clsx(
                      'rounded-lg px-3 py-1 text-sm font-medium',
                      {
                        'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
                          !isActive,
                        'bg-blue-300 text-white': isActive,
                      },
                    )}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

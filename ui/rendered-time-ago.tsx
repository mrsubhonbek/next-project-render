'use client';

import ms from 'ms';
import React from 'react';

const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = React.useRef<Function>(() => {});

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export function RenderedTimeAgo({ timestamp }: { timestamp: number }) {
  const [msAgo, setMsAgo] = React.useState<number>(0);

  React.useEffect(() => {
    setMsAgo(Date.now() - timestamp);
  }, [timestamp]);

  useInterval(() => {
    setMsAgo(Date.now() - timestamp);
  }, 1000);

  return (
    <div
      className="h-6 w-20 items-center rounded-full bg-gray-100 px-2 text-center text-sm leading-6"
      title={new Date(timestamp).toISOString()}
    >
      {msAgo ? (
        <>
          <span
            suppressHydrationWarning={true}
            className="font-semibold text-gray-900 tabular-nums"
          >
            {msAgo >= 1000 ? ms(msAgo) : '0s'}
          </span>{' '}
          <span className="text-gray-600">ago</span>
        </>
      ) : null}
    </div>
  );
}

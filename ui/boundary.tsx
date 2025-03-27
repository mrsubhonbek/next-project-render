import clsx from 'clsx';
import React from 'react';

const Label = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
}) => {
  return (
    <div
      className={clsx('rounded-full px-1.5 shadow-[0_0_1px_3px_black]', {
        'bg-gray-800 text-gray-300': color === 'default',
        'bg-pink-500 text-white': color === 'pink',
        'bg-blue-500 text-white': color === 'blue',
        'bg-cyan-500 text-white': color === 'cyan',
        'bg-violet-500 text-violet-100': color === 'violet',
        'bg-orange-500 text-white': color === 'orange',
      })}
    >
      {children}
    </div>
  );
};

export const Boundary = ({
  children,
  labels = ['children'],
  size = 'default',
  color = 'default',
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: 'small' | 'default';
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
}) => {
  return (
    <div
      className={clsx('relative rounded-lg border border-dashed', {
        'p-3 lg:p-5': size === 'small',
        'p-4 lg:p-9': size === 'default',
        'border-gray-700': color === 'default',
        'border-pink-400': color === 'pink',
        'border-blue-400': color === 'blue',
        'border-cyan-400': color === 'cyan',
        'border-violet-400': color === 'violet',
        'border-orange-400': color === 'orange',
      })}
    >
      <div
        className={clsx(
          'absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest',
          {
            'left-3 lg:left-5': size === 'small',
            'left-4 lg:left-9': size === 'default',
          },
        )}
      >
        {labels.map((label) => {
          return (
            <Label key={label} color={color}>
              {label}
            </Label>
          );
        })}
      </div>

      {children}
    </div>
  );
};

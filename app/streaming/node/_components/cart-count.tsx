'use client';

import { useCartCount } from './cart-count-context';

export const CartCount = () => {
  const [count] = useCartCount();
  return <span>{count}</span>;
}
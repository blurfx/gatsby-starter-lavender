import { useEffect, useState } from 'react';

export const useMedia = <T>(queries: string[], values: T[], defaultValue: T): T => {
  const mediaQueryLists = (typeof window === 'undefined') ? [] : queries.map((q) => window.matchMedia(q));

  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);

    return values?.[index] || defaultValue;
  };

  const [value, setValue] = useState<T>(getValue);

  useEffect(
    () => {
      const handler = () => setValue(getValue);

      mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));
      return () => mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handler));
    },
    []
  );

  return value;
};

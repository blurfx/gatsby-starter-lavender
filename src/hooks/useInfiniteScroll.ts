import { MutableRefObject, useEffect } from 'react';

import { useIntersectionObserver } from '~/hooks/useIntersectionObserver';

export const useInfiniteScroll = (
  ref: MutableRefObject<Element | null>,
  callback: () => void
) => {
  const shouldLoadMore = useIntersectionObserver(ref, { threshold: 0 });

  useEffect(() => {
    if (shouldLoadMore) {
      callback();
    }
  }, [shouldLoadMore, callback]);
};

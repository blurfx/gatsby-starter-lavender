import * as qs from 'query-string';
import { useEffect, useState } from 'react';

import { useDebounce } from '~/hooks/useDebounce';

export const useSearchFilter = (): [string, (s: string) => void] => {
  const [filter, setFilter] = useState('');
  const debouncedFilter = useDebounce(filter, 300);

  const onPopState = () => {
    const params = qs.parse(location.search);
    const search = params.search as string;
    setFilter(search ?? '');
  };

  useEffect(() => {
    const params = qs.parse(location.search);
    const { search } = params;
    if (search) {
      setFilter(search as string);
    }
    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);


  useEffect(() => {
    const params = qs.parse(location.search);

    if (debouncedFilter === (params.search ?? '')) {
      return;
    }

    params.search = debouncedFilter;

    const nextUrl = qs.stringifyUrl({
      url: location.pathname,
      query: params,
    }, {
      skipNull: true,
      skipEmptyString: true,
    });

    history.pushState(params, '', nextUrl);
  }, [debouncedFilter]);

  return [filter, setFilter];
};

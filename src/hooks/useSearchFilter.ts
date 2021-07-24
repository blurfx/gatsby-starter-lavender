import * as qs from 'query-string';
import { useEffect, useState } from 'react';

export const useSearchFilter = (): [string, (s: string) => void] => {
  const [filter, setFilter] = useState('');
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const changeSearchFilter = (value: string, pushState = true) => {
    const { pathname, search } = location;
    const params = qs.parse(search);

    if (value === '') {
      delete params.search;
    } else {
      params.search = value;
    }

    setFilter(value);
    if (pushState) {
      const nextUrl = qs.stringifyUrl({
        url: pathname,
        query: params,
      }, {
        skipNull: true,
        skipEmptyString: true,
      });

      if (timeout !== null) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        history.pushState(params, '', nextUrl);
      }, 300);
    }
  };

  const onPopState = () => {
    const params = qs.parse(location.search);
    const search = params.search as string;
    changeSearchFilter(search ?? '', false);
  };

  useEffect(() => {
    const params = qs.parse(location.search);
    const { search } = params;
    if (search) {
      changeSearchFilter(search as string);
    }
    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  return [filter, changeSearchFilter];
};

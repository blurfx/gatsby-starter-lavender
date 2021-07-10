import * as qs from 'query-string';
import { useEffect, useState } from 'react';

import { TAG } from '~/constants';


export const useTag = (): [string, (tag: string) => void] => {
  const [currentTag, setCurrentTag] = useState<string>(TAG.ALL);

  const getParsedQuerystring = (key: string): string | null => {
    const value = qs.parse(location.search)[key];
    if (Array.isArray(value)) {
      return value.join('');
    }

    return value;
  };

  const changeTag = (tag: string) => {
    const { pathname } = location;
    const query = (tag === TAG.ALL) ? '' : `?${qs.stringify({ tag })}`;

    setCurrentTag(tag);
    history.pushState({ tag }, '', `${pathname}${query}`);
  };

  const onPopState = () => {
    const tag = getParsedQuerystring('tag');
    setCurrentTag(tag ?? TAG.ALL);
  };

  useEffect(() => {
    const tag = getParsedQuerystring('tag');
    if (tag) {
      changeTag(tag);
    }
    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  return [currentTag, changeTag];
};

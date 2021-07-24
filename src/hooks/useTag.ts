import * as qs from 'query-string';
import { useEffect, useState } from 'react';

import { TAG } from '~/constants';


export const useTag = (): [string, (t: string) => void] => {
  const [currentTag, setCurrentTag] = useState<string>(TAG.ALL);

  const onPopState = () => {
    const params = qs.parse(location.search);
    const tag = params.tag as string;

    setCurrentTag(tag ?? TAG.ALL);
  };

  useEffect(() => {
    const params = qs.parse(location.search);
    const tag = params.tag as string;

    if (tag) {
      setCurrentTag(tag);
    }

    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  useEffect(() => {
    const params = qs.parse(location.search);

    if (currentTag === (params.tag ?? TAG.ALL)) {
      return;
    }

    if (currentTag === TAG.ALL) {
      delete params.tag;
    } else {
      params.tag = currentTag;
    }

    const nextUrl = qs.stringifyUrl({
      url: location.pathname,
      query: params,
    }, {
      skipNull: true,
      skipEmptyString: true,
    });

    history.pushState(params, '', nextUrl);
  }, [currentTag]);

  return [currentTag, setCurrentTag];
};

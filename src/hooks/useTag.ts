import * as qs from 'query-string';
import { useEffect, useState } from 'react';

import { TAG } from '~/constants';


export const useTag = (): [string, (t: string) => void] => {
  const [currentTag, setCurrentTag] = useState<string>(TAG.ALL);


  const changeTag = (tag: string) => {
    const { pathname, search } = location;
    const params = qs.parse(search);

    if (tag === TAG.ALL) {
      delete params.tag;
    } else {
      params.tag = tag;
    }

    setCurrentTag(tag);
    const nextUrl = qs.stringifyUrl({
      url: pathname,
      query: params,
    }, {
      skipNull: true,
      skipEmptyString: true,
    });
    history.pushState(params, '', nextUrl);
  };

  const onPopState = () => {
    const params = qs.parse(location.search);
    const tag = params.tag as string;

    setCurrentTag(tag ?? TAG.ALL);
  };

  useEffect(() => {
    const params = qs.parse(location.search);
    const tag = params.tag as string;
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

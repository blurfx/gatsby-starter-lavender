import { useState } from 'react';

import { loadPage, savePage } from '~/utils/storage';

const initialState = loadPage(1);

export const usePage = (): [number, (page: number) => void] => {
  const [page, setPage] = useState(initialState);

  const changePage = (nextPage: number) => {
    setPage(nextPage);
    savePage(nextPage);
  };

  return [page, changePage];
};

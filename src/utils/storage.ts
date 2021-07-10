import { win } from './window';


const KEY_PREFIX = '__lavender__';
const KEY_PAGE = `${KEY_PREFIX}/page`;

export const savePage = (page: number) => {
  win?.sessionStorage.setItem(KEY_PAGE, page.toString());
};

export const loadPage = (defaultValue: number) => {
  return Number(win?.sessionStorage.getItem(KEY_PAGE) ?? defaultValue);
};

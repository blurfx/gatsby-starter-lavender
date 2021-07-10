import { THEME } from '~/constants';

import { win } from './window';


const KEY_PREFIX = '__lavender__';
const KEY_PAGE = `${KEY_PREFIX}/page`;
const KEY_THEME = `${KEY_PREFIX}/theme`;

export const savePage = (page: number) => {
  win?.sessionStorage.setItem(KEY_PAGE, page.toString());
};

export const loadPage = (defaultValue: number) => {
  return Number(win?.sessionStorage.getItem(KEY_PAGE) ?? defaultValue);
};

export const saveTheme = (theme: THEME) => {
  win?.localStorage.setItem(KEY_THEME, theme);
};

export const loadTheme = (): THEME | null => {
  const theme = win?.localStorage.getItem(KEY_THEME);

  if (theme === THEME.LIGHT) {
    return THEME.LIGHT;
  } else if (theme === THEME.DARK) {
    return THEME.DARK;
  }

  return null;
};

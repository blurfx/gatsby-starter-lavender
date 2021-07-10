import { createContext, useContext, useState } from 'react';

import { THEME } from '~/constants';
import { loadTheme, saveTheme } from '~/utils/storage';
import { win } from '~/utils/window';

interface ThemeContextType {
  theme: THEME;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('ThemeContext is null');
  }
  return context;
};

export const useTheme = (): [THEME, (() => void)] => {
  const storedTheme = loadTheme();
  let initialState: THEME;

  if (storedTheme) {
    initialState = storedTheme;
  } else {
    if (win?.matchMedia('(prefers-color-scheme: dark)').matches) {
      initialState = THEME.DARK;
    } else {
      initialState = THEME.LIGHT;
    }
  }

  const [theme, setTheme] = useState<THEME>(initialState);

  const changeTheme = () => {
    setTheme((prev) => {
      const nextTheme = (prev === THEME.LIGHT) ? THEME.DARK : THEME.LIGHT;
      saveTheme(nextTheme);
      return nextTheme;
    });
  };

  return [theme, changeTheme];
};

import { useEffect } from 'react';

import { useLocalStorage } from '~/hooks/useLocalStorage';
import { useMedia } from '~/hooks/useMedia';
import { darkTheme } from '~/stitches.config';
import { win } from '~/utils/window';

const usePrefersDarkMode = () => {
  return useMedia<boolean>(['(prefers-color-scheme: dark)'], [true], false);
};

export const useDarkMode = (): [boolean, ((value: (boolean | ((val: boolean | null) => boolean))) => void)] => {
  const [enabledState, setEnabledState] = useLocalStorage<boolean | null>(
    'darkMode',
    null,
  );
  const prefersDarkMode = usePrefersDarkMode();
  const enabled = enabledState ?? prefersDarkMode;

  useEffect(
    () => {
      const className = darkTheme;

      if (!win) {
        return;
      }

      const element = win.document.body;
      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled]
  );

  return [enabled, setEnabledState];
};

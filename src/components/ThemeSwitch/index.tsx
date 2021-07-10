import React, { useCallback, memo } from 'react';

import { THEME } from '~/constants';
import { useThemeContext } from '~/hooks/useTheme';

import { Checkbox, Container, Shadow, Thumb, ThumbWrapper, Track } from './styles';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isDarkMode = theme === THEME.DARK;

  const onThemeSwitchClick = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <Container onClick={onThemeSwitchClick}>
      <Track />
      <ThumbWrapper>
        <Thumb dark={isDarkMode} />
        <Shadow dark={isDarkMode} />
      </ThumbWrapper>
      <Checkbox type='checkbox' aria-label={'Theme Switch'} defaultChecked={isDarkMode} />
    </Container>
  );
};

export default memo(ThemeSwitch);

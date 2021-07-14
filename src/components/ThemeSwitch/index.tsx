import React, { memo } from 'react';

import { useDarkMode } from '~/hooks/useDarkMode';

import { Checkbox, Container, Shadow, Thumb, ThumbWrapper, Track } from './styles';

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const onThemeSwitchClick = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Container role={'button'} aria-pressed={darkMode} onClick={onThemeSwitchClick}>
      <Track />
      <ThumbWrapper>
        <Thumb />
        <Shadow />
      </ThumbWrapper>
      <Checkbox type='checkbox' aria-label={'Theme Switch'} defaultChecked={darkMode} />
    </Container>
  );
};

export default memo(ThemeSwitch);

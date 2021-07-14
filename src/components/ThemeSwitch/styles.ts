import { darkTheme, styled } from '~/stitches.config';

export const Container = styled('div', {
  position: 'relative',

  display: 'inline-block',
  alignSelf: 'flex-end',

  cursor: 'pointer',

  userSelect: 'none',
  touchAction: 'pan-x',
  '-webkit-tap-highlight-color': 'transparent',

  '@md': {
    alignSelf: 'auto',
  }
});

export const Checkbox = styled('input', {
  position: 'absolute',

  height: '1px',
  marginLeft: '-1px',
  padding: 0,
  border: 0,

  overflow: 'hidden',

  clip: 'rect(0 0 0 0)',
});

export const Track = styled('div', {
  width: '3.5rem',
  height: '2rem',
  borderRadius: '2rem',

  backgroundColor: '$themeSwitchBackground',
});

export const ThumbWrapper = styled('div', {
  position: 'absolute',
  top: 0,

  width: '3.5rem',
  height: '2rem',

  overflow: 'hidden',
});

export const Thumb = styled('div', {
  position: 'absolute',
  top: '50%',

  width: '1.25rem',
  height: '1.25rem',
  borderRadius: '50%',

  backgroundColor: '$yellow',
  transform: 'translate(0.5rem, -50%)',

  transition: 'transform $switchTransitionDuration $transitionTiming',

  'webkitTapHighlightColor': '$yellowAccent',

  [`.${darkTheme} &`]: {
    transform: 'translate(1.75rem, -50%)',
  },
});

export const Shadow = styled('div', {
  position: 'absolute',
  top: '50%',

  width: '1.25rem',
  height: '1.25rem',
  borderRadius: '50%',

  backgroundColor: '$themeSwitchBackground',
  transform: 'translate(0, -100%) scale(0)',

  transition: 'transform $switchTransitionDuration $transitionTiming',

  [`.${darkTheme} &`]: {
    transform: 'translate(1.35rem, -70%) scale(1)',
  },
});

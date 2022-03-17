import { styled } from '~/stitches.config';

export const Container = styled('header', {
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto',
  padding: '2rem 0',

  '@md': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export const TitleWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'start',
  width: '100%',

  '@md': {
    width: 'auto',
  }
});

export const Circle = styled('div', {
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',

  backgroundColor: '$headerCircleColor',

  transition: 'background-color $transitionDuration $transitionTiming',
});

export const Title = styled('h1', {
  marginLeft: '-2.5rem',

  a: {
    color: '$text400',
    fontWeight: 900,
    fontSize: '2rem',
    lineHeight: '2rem',

    transition: 'color $transitionDuration $transitionTiming',

    textDecoration: 'none',
  }
});

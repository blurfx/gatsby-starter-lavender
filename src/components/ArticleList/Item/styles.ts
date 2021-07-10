import { styled } from '~/stitches.config';

export const Header = styled('header', {
  margin: '1rem auto'
});

export const Title = styled('h2', {
  color: '$text500',
  fontSize: '1.5rem',

  transition: 'color $transitionDuration $transitionTiming',
});

export const Section = styled('section', {
  marginBottom: '3rem',

  color: '$text200',

  transition: 'color $transitionDuration $transitionTiming',
});

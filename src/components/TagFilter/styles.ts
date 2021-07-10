import { styled } from '~/stitches.config';

export const Container = styled('section', {
  margin: '2rem auto',
  padding: '1rem',
  borderLeft: '0.25rem solid $borderPrimary',

  transition: 'border-left-color $transitionDuration $transitionTiming',
});

export const Title = styled('h3', {
  display: 'block',

  color: '$text300',

  transition: 'color $transitionDuration $transitionTiming',
});

export const TagListWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginTop: '1rem',
});

export const Tag = styled('button', {
  padding: '0.5rem 1rem',
  border: 0,
  borderRadius: '0.25rem',

  color: '$tagColor',
  fontSize: '0.875rem',

  backgroundColor: '$tagFilterBackground',
  cursor: 'pointer',

  transition: 'color $transitionDuration $transitionTiming, background-color $transitionDuration $transitionTiming',

  appearance: 'none',

  variants: {
    filtered: {
      true: {
        color: '$primary500',

        backgroundColor: '$primary200',
      },
    },
  },
});

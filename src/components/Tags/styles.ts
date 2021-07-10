import { styled } from '~/stitches.config';

export const TagList = styled('ul', {
  margin: 0,
});

export const Tag = styled('li', {
  display: 'inline-block',

  listStyle: 'none',

  '&:before': {
    margin: '0 0.25rem',

    content: '•',
  },
});

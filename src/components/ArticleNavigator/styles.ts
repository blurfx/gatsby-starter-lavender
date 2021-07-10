import { Link } from 'gatsby';

import { styled } from '~/stitches.config';

export const Container = styled('nav', {
  margin: '1rem auto',
});

export const NavigationList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  margin: 0,

  listStyle: 'none',
});

export const PostLink = styled(Link, {
  display: 'block',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',

  color: '$link',
  fontSize: '0.875rem',
});

import { styled } from '~/stitches.config';

export const Article = styled('article', {
  position: 'relative',

  '& .heading-anchor': {
    borderBottom: 0,

    svg: {
      fill: '$text500',
    }
  }
});

export const TableOfContents = styled('div', {
  marginBottom: '1.5rem',

  '> ul': {
    marginLeft: 0,
  },

  ul: {
    listStyle: 'none',

    li: {
      paddingTop: '0.125rem',
      paddingBottom: '0.125rem',

      color: '$text200',
      fontSize: '0.875rem',

      transition: 'color $transitionDuration $transitionTiming',

      a: {
        textDecoration: 'underline',
      }
    },
  },
});

export const Header = styled('header', {
  marginBottom: '2rem',
});

export const Title = styled('h1', {
  fontSize: '2.25rem',
});

export const ArticleMetadata = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '0.5rem',

  color: '$text200',

  fontWeight: 700,

  transition: 'color $transitionDuration $transitionTiming',
});

export const Content = styled('section', {
  wordBreak: 'keep-all',

  h1: {
    marginTop: '2rem',
    marginBottom: '1.25rem',
    paddingBottom: '0.25rem',
    borderBottom: '1px solid $borderGray',

    a: {
      borderBottom: 'none',
    }
  },
  h2: {
    marginTop: '1.5rem',
    marginBottom: '1rem',
    paddingBottom: '0.25rem',
    borderBottom: '1px solid $borderGray',

    a: {
      borderBottom: 'none',
    }
  },
  a: {
    borderBottom: '1px solid $borderPrimary',

    color: '$link',

    transition: 'color $transitionDuration $transitionTiming, border-bottom-color $transitionDuration $transitionTiming',
  },
  pre: {
    code: {
      wordBreak: 'break-all',
      overflowWrap: 'break-word',
    },
  },
  'pre, code': {
    fontVariantLigatures: 'none',
  }
});

export const Footer = styled('footer', {
  '&:before': {
    display: 'block',
    width: '100%',
    height: '0.2rem',
    margin: '3rem auto',

    backgroundColor: '$primary200',

    transition: 'background-color $transitionDuration $transitionTiming',

    content: '',
  }
});

import { styled, globalCss } from '~/stitches.config';

export const globalStyles = (colorScheme: 'light' | 'dark') => globalCss({
  ':root': {
    fontFamily: '"Pretendard", apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    textRendering: 'optimizeLegibility',
    colorScheme: colorScheme,
  },
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  html: {
    minHeight: '100vh',
  },
  body: {
    minHeight: '100vh',

    backgroundColor: '$backgroundColor',
  },
  '#___gatsby, #gatsby-focus-wrapper': {
    minHeight: '100vh',
  },
  a: {
    color: 'inherit',

    textDecoration: 'none',
  },
  h1: {
    fontSize: '1.75rem',
  },
  h2: {
    fontSize: '1.5rem',
  },
  h3: {
    fontSize: '1.25rem',
  },
  h4: {
    fontSize: '1rem',
  },
  h5: {
    fontSize: '0.875rem',
  },
  h6: {
    fontSize: '0.75rem',
  },
  hr: {
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
    border: 0,
    borderTop: '0.125rem solid $borderGray',
  },
  img: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
  },
  table: {
    width: '100%',
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
    borderCollapse: 'collapse',

    lineHeight: '1.75rem',
  },
  tr: {
    borderBottom: '1px solid $borderGray',
  },
  th: {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
  },
  td: {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
  },
  p: {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',

    lineHeight: 1.625,

    '> code[class*="language-"]': {
      whiteSpace: 'pre-wrap',
    },
  },
  blockquote: {
    paddingLeft: '1rem',
    borderLeft: '0.25rem solid $borderPrimary',
  },
  article: {
    overflowWrap: 'break-word',

    'ul, ol': {
      marginLeft: '2rem',

      'ul, ol': {
        marginLeft: '1.5rem',
      },

      li: {
        marginTop: '0.375rem',
        marginBottom: '0.375rem',

        p: {
          margin: 0,
        },
      },
    },

    'pre[class^="language-"]': {
      borderRadius: '0.25rem',
    }
  },
  ':not(pre) > code[class*="language-"]': {
    color: '$inlineCodeColor',
    background: '$inlineCodeBackground',
  }
})();
export const Root = styled('div', {
  display: 'flex',
  minHeight: '100vh',

  color: '$text500',

  backgroundColor: '$backgroundColor',

  transition: 'color $transitionDuration $transitionTiming, background-color $transitionDuration $transitionTiming',
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '$contentWidth',
  margin: '0 auto',
  paddingRight: '1em',
  paddingLeft: '1em',

  '@md': {
    padding: 0,
  },
});

import React, { memo } from 'react';

import { useAuthorProfile } from '~/hooks/useAuthorProfile';

import { Container } from './styles';

const Footer = () => {
  const githubUsername = useAuthorProfile().site?.siteMetadata?.social?.github;
  const author = useAuthorProfile().site?.siteMetadata?.author;

  return (
    <Container>
      <>
      © {githubUsername
          ? <a href={`https://github.com/${githubUsername}`}>{author}</a>
          : { author }
        }, Built with{' '}
        <a href='https://github.com/blurfx/gatsby-starter-lavender'>gatsby-starter-lavender</a>
      </>
    </Container>
  );
};

export default memo(Footer);

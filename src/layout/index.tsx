import type { PageProps } from 'gatsby';
import React, { ComponentProps } from 'react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';

import { Container, globalStyles, Root } from './styles';

type Props = React.PropsWithChildren<Pick<PageProps, 'location'>> & ComponentProps<typeof Header>;

const Layout = ({ title, children }: Props) => {
  globalStyles();

  return (
    <Root>
      <Container>
        <Header title={title} />
        <main>{children}</main>
        <Footer />
      </Container>
    </Root>
  );
};

export default Layout;

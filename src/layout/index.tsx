import type { PageProps } from 'gatsby';
import React, { ComponentProps } from 'react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { useDarkMode } from '~/hooks/useDarkMode';

import { Container, globalStyles, Root } from './styles';

type Props = React.PropsWithChildren<Pick<PageProps, 'location'>> & ComponentProps<typeof Header>;

const Layout = ({ title, children, resetFilter }: Props) => {
  const [isDarkMode, ] = useDarkMode();
  globalStyles(isDarkMode ? 'dark' : 'light');

  return (
    <Root>
      <Container>
        <Header title={title} resetFilter={resetFilter} />
        <main>{children}</main>
        <Footer />
      </Container>
    </Root>
  );
};

export default Layout;

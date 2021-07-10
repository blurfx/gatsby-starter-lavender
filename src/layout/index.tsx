import type { PageProps } from 'gatsby';
import React, { ComponentProps } from 'react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { THEME } from '~/constants';
import { ThemeContext, useTheme } from '~/hooks/useTheme';
import { darkTheme } from '~/stitches.config';

import { Container, globalStyles, Root } from './styles';

type Props = React.PropsWithChildren<Pick<PageProps, 'location'>> & ComponentProps<typeof Header>;

const Layout = ({ title, children }: Props) => {
  globalStyles();

  const [theme, toggleTheme] = useTheme();
  const darkThemeClassName = theme === THEME.DARK ? darkTheme : undefined;

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
    }}>
      <Root className={darkThemeClassName}>
        <Container>
          <Header title={title} />
          <main>{children}</main>
          <Footer />
        </Container>
      </Root>
    </ThemeContext.Provider>
  );
};

export default Layout;

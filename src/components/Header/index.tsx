import { Link } from 'gatsby';
import React, { memo } from 'react';

import ThemeSwitch from '~/components/ThemeSwitch';

import { Circle, Container, Title, TitleWrapper } from './styles';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <Container>
      <TitleWrapper>
        <Circle />
        <Title>
          <Link to={'/'}>{title}</Link>
        </Title>
      </TitleWrapper>
      <ThemeSwitch />
    </Container>
  );
};

export default memo(Header);

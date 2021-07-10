import { Link } from 'gatsby';
import React, { memo } from 'react';

import { Header, Section, Title } from './styles';

interface Props {
  slug: string;
  title: string;
  description: string;
}

const ArticleListItem = ({ slug, title, description }: Props) => (
  <li key={slug}>
    <article
      className='post-list-item'
      itemScope
      itemType='http://schema.org/Article'
    >
      <Header>
        <Title>
          <Link to={slug} itemProp='url'>
            <span itemProp='headline'>{title}</span>
          </Link>
        </Title>
      </Header>
      <Section>
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          itemProp='description'
        />
      </Section>
    </article>
  </li>
);

export default memo(ArticleListItem);

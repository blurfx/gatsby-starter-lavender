import React from 'react';

import { Container, NavigationList, PostLink } from './styles';

interface Props {
  previousArticle: GatsbyTypes.BlogPostBySlugQuery['previous'],
  nextArticle: GatsbyTypes.BlogPostBySlugQuery['next'],
}

const ArticleNavigator = ({ previousArticle, nextArticle }: Props) => (
  <Container>
    <NavigationList>
      <li>
        {previousArticle && (
          <PostLink to={previousArticle.fields?.slug ?? ''} rel='prev'>
            ← {previousArticle.frontmatter?.title}
          </PostLink>
        )}
      </li>
      <li>
        {nextArticle && (
          <PostLink to={nextArticle.fields?.slug ?? ''} rel='next'>
            {nextArticle.frontmatter?.title} →
          </PostLink>
        )}
      </li>
    </NavigationList>
  </Container>
);

export default ArticleNavigator;

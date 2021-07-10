import { graphql, useStaticQuery } from 'gatsby';

export const useArticleTags = () =>
  useStaticQuery<GatsbyTypes.ArticleTagsQuery>(graphql`
    query ArticleTags {
      allMarkdownRemark {
        distinct(field: frontmatter___tags)
      }
    }
  `);

import { graphql, useStaticQuery } from 'gatsby';

export const useCheckAboutPage = (): boolean =>
  useStaticQuery<GatsbyTypes.CheckAboutPageQuery>(graphql`
    query CheckAboutPage {
      allSitePage(filter: { path: { eq: "/about/" }}) {
        edges {
          node {
            id
          }
        }
      }
    }
  `).allSitePage.edges.length > 0;
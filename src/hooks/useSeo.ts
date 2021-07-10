import { graphql, useStaticQuery } from 'gatsby';

export const useSeo = () => useStaticQuery<GatsbyTypes.SeoQuery>(
  graphql`
    query Seo {
      site {
        siteMetadata {
          title
          description
          social {
            twitter
          }
        }
      }
    }
  `
);

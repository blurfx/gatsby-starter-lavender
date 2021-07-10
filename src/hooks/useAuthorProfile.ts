import { graphql, useStaticQuery } from 'gatsby';

export const useAuthorProfile = () =>
  useStaticQuery<GatsbyTypes.ProfileQuery>(graphql`
    query Profile {
      site {
        siteMetadata {
          author
          description
          social {
            github
            twitter
            facebook
            linkedin
            instagram
          }
        }
      }
    }
  `);

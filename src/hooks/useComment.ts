import { graphql, useStaticQuery } from 'gatsby';

export const useComment = () =>
  useStaticQuery<GatsbyTypes.CommentQuery>(graphql`
    query Comment {
      site {
        siteMetadata {
          comment {
            utterances
            disqusShortName
          }
        }
      }
    }
  `);

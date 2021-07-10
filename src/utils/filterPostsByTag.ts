import { TAG } from '~/constants';

export const filterPostsByTag = (posts: GatsbyTypes.BlogIndexQuery['allMarkdownRemark']['nodes'], tag: string) => {
  if (tag === TAG.ALL) {
    return posts;
  }
  return posts.filter((post) => post.frontmatter?.tags?.includes(tag));
};

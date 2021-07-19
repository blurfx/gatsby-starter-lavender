import { TAG } from '~/constants';

type Posts = GatsbyTypes.BlogIndexQuery['allMarkdownRemark']['nodes'];

export const filterPostsByTitle = (posts: Posts, title: string): Posts => {
  if (title === '') {
    return posts;
  }
  return posts.filter((post) => post.frontmatter?.title?.toLocaleLowerCase().includes(title));
};

export const filterPostsByTag = (posts: Posts, tag: string): Posts => {
  if (tag === TAG.ALL) {
    return posts;
  }
  return posts.filter((post) => post.frontmatter?.tags?.includes(tag));
};

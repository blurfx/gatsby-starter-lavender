import * as path from 'path';

import type { CreateNodeArgs, CreatePagesArgs, CreateSchemaCustomizationArgs } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

export const createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
  const blogPost = path.resolve('./src/templates/blog-post.tsx');

  const result: {
    errors?: Error;
    data?: {
      allMarkdownRemark: {
        nodes: GatsbyTypes.MarkdownRemark[]
      }
    }
  } = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      'There was an error loading your blog posts',
      result.errors
    );
    return;
  }

  const posts = result.data?.allMarkdownRemark.nodes;

  if (posts !== undefined && posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

      actions.createPage({
        path: post.fields?.slug || '',
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};

export const onCreateNode = ({ node, actions, getNode }: CreateNodeArgs) => {
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });

    actions.createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

export const createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  actions.createTypes(`
    type SiteSiteMetadata {
      author: String
      description: String
      siteUrl: String
      social: Social
      thumbnail: String
    }

    type Social {
      github: String
      twitter: String
      facebook: String
      linkedin: String
      instagram: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      tags: [String]
      thumbnail: String
    }

    type Fields {
      slug: String
    }
  `);
};

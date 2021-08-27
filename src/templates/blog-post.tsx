import { DiscussionEmbed } from 'disqus-react';
import { PageProps, graphql } from 'gatsby';
import React from 'react';

import ArticleNavigator from '~/components/ArticleNavigator';
import Profile from '~/components/Profile';
import Seo from '~/components/Seo';
import Tags from '~/components/Tags';
import Utterances from '~/components/Utterances';
import { useComment } from '~/hooks/useComment';
import Layout from '~/layout';

import 'katex/dist/katex.min.css';

import {
  Article, TableOfContents, Content, Footer, Header, ArticleMetadata, Title
} from './styles';


const BlogPostTemplate = ({ data, location }: PageProps<GatsbyTypes.BlogPostBySlugQuery>) => {
  const post = data.markdownRemark!;
  const siteUrl = data.site?.siteMetadata?.siteUrl ?? '';
  const siteTitle = data.site?.siteMetadata?.title ?? '';
  const siteThumbnail = data.site?.siteMetadata?.thumbnail;
  const { previous, next } = data;
  const { title, description, date, tags, thumbnail } = post.frontmatter!;
  const commentConfig = useComment().site?.siteMetadata?.comment;

  const disqusConfig = {
    title,
    identifier: post.fields?.slug,
  };
  const meta: Metadata[] = [];

  if (siteThumbnail || thumbnail) {
    const properties = ['og:image', 'twitter:image'];

    for (const property of properties) {
      meta.push({
        property,
        content: `${siteUrl}${thumbnail ?? siteThumbnail}`,
      });
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        lang='en'
        title={title ?? ''}
        description={description ?? post.excerpt ?? ''}
        meta={meta}
      />
      <Article
        itemScope
        itemType='http://schema.org/Article'
      >
        <Header>
          <Title itemProp='headline'>{title}</Title>
          <ArticleMetadata>
            <span>{date}</span>
            <Tags tags={tags as string[]} />
          </ArticleMetadata>
        </Header>
        <TableOfContents
          dangerouslySetInnerHTML={{ __html: post.tableOfContents ?? '' }}
        />
        <Content
          dangerouslySetInnerHTML={{ __html: post.html ?? ''}}
          itemProp='articleBody'
        />
        <Footer>
          <Profile />
        </Footer>
      </Article>
      { commentConfig?.utterances && <Utterances repo={commentConfig.utterances} /> }
      { commentConfig?.disqusShortName && (
        <DiscussionEmbed shortname={commentConfig?.disqusShortName} config={disqusConfig} />
      )}
      <ArticleNavigator previousArticle={previous} nextArticle={next} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
        thumbnail
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      tableOfContents
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        tags
        thumbnail
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

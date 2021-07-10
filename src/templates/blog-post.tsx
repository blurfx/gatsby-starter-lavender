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

import {
  Article, TableOfContents, Content, Footer, Header, Metadata, Title
} from './styles';


const BlogPostTemplate = ({ data, location }: PageProps<GatsbyTypes.BlogPostBySlugQuery>) => {
  const post = data.markdownRemark!;
  const siteTitle = data.site?.siteMetadata?.title ?? '';
  const { previous, next } = data;
  const { title, description, date, tags } = post.frontmatter!;
  const commentConfig = useComment().site?.siteMetadata?.comment;

  const disqusConfig = {
    title,
    identifier: post.fields?.slug,
  };

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        lang='en'
        title={title ?? ''}
        description={description ?? post.excerpt ?? ''}
      />
      <Article
        itemScope
        itemType='http://schema.org/Article'
      >
        <Header>
          <Title itemProp='headline'>{title}</Title>
          <Metadata>
            <span>{date}</span>
            <Tags tags={tags as string[]} />
          </Metadata>
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

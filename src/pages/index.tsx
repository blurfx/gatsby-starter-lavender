import { PageProps, graphql } from 'gatsby';
import React, { useCallback, useRef, useState } from 'react';

import ArticleFilter from '~/components/ArticleFilter';
import ArticleList from '~/components/ArticleList';
import Profile from '~/components/Profile';
import Seo from '~/components/Seo';
import { useArticleTags } from '~/hooks/useArticleTags';
import { useInfiniteScroll } from '~/hooks/useInfiniteScroll';
import { usePage } from '~/hooks/usePage';
import { useSeo } from '~/hooks/useSeo';
import { useTag } from '~/hooks/useTag';
import Layout from '~/layout';
import { filterPostsByTag, filterPostsByTitle } from '~/utils/filterPosts';


const BlogIndex = ({ data, location }: PageProps<GatsbyTypes.BlogIndexQuery>) => {
  const infiniteScrollRef = useRef(null);
  const [page, setPage] = usePage();
  const [titleFilter, setTitleFilter] = useState('');
  const [currentTag, setCurrentTag] = useTag();
  const siteMetadata = useSeo().site?.siteMetadata;
  const tags = useArticleTags().allMarkdownRemark?.distinct as string[];

  const siteTitle = data.site?.siteMetadata?.title ?? '';
  const posts = filterPostsByTag(
    filterPostsByTitle(
      data.allMarkdownRemark.nodes, titleFilter),
    currentTag
  );
  const articlePerPage = 5;
  const totalPage = Math.ceil(posts.length / articlePerPage);

  const onTitleFilterChange = useCallback((event) => {
    setTitleFilter(event.target.value);
  }, []);

  useInfiniteScroll(infiniteScrollRef, useCallback(() => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  }, [page, setPage, totalPage]));

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        lang='en'
        title={siteMetadata?.title ?? ''}
        description={siteMetadata?.description ?? ''}
      />
      <Profile />
      <ArticleFilter
        tags={tags}
        titleFilter={titleFilter}
        onTitleFilterChange={onTitleFilterChange}
        currentTag={currentTag}
        setCurrentTag={setCurrentTag}
      />
      {posts.length === 0 ? (
        <p>
          No posts found.
        </p>
      ): (
        <>
          <ArticleList posts={posts.slice(0, page * articlePerPage)} />
        </>
      )}
      <div className='infinite-scroll' ref={infiniteScrollRef}/>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          tags
        }
      }
    }
  }
`;

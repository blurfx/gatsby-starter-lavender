import { PageProps, graphql } from 'gatsby';
import React from 'react';

import Seo from '~/components/Seo';
import Layout from '~/layout';

const NotFoundPage = ({ data, location }: PageProps<GatsbyTypes.PageNotFoundQuery>) => {
  const siteTitle = data.site?.siteMetadata?.title ?? '';

  return (
    <Layout location={location} title={siteTitle}>
      <Seo lang='en' title='404: Not Found' description='' />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query PageNotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

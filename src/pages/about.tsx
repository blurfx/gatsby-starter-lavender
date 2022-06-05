import { PageProps, graphql } from 'gatsby';
import React from 'react';

import Profile from '~/components/Profile';
import Seo from '~/components/Seo';
import { useSeo } from '~/hooks/useSeo';
import Layout from '~/layout';


const AboutPage = ({ data, location }: PageProps<GatsbyTypes.AboutPageQuery>) => {
  const siteMetadata = useSeo().site?.siteMetadata;

  const siteUrl = data.site?.siteMetadata?.siteUrl ?? '';
  const siteTitle = data.site?.siteMetadata?.title ?? '';
  const siteThumbnail = data.site?.siteMetadata?.thumbnail;

  const meta: Metadata[] = [];
  if (siteThumbnail) {
    const properties = ['og:image', 'twitter:image'];

    for (const property of properties) {
      meta.push({
        property,
        content: `${siteUrl}${siteThumbnail}`,
      });
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        lang='en'
        title={siteMetadata?.title ?? ''}
        description={siteMetadata?.description ?? ''}
        meta={meta}
        noSiteName
      />
      <Profile />
      <h1>I am</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque lectus, varius in vehicula id, viverra eu diam. Duis pellentesque rutrum tincidunt. Nullam bibendum gravida blandit. Maecenas quis enim justo. Sed malesuada lectus mi, sit amet hendrerit nisl consequat sed. Proin semper ex nec nisi egestas gravida. Cras mattis feugiat tempor. Donec sollicitudin est metus, nec posuere mauris dictum at. Praesent laoreet massa pulvinar laoreet dapibus. Sed efficitur lacus eu ligula fermentum, ut sodales justo sagittis. Mauris sit amet vehicula enim.</p>
      <p>In sed gravida libero. Curabitur accumsan massa sed iaculis dictum. Cras est elit, dignissim a convallis ac, condimentum nec justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce varius elit massa. Donec feugiat mi orci, sit amet viverra libero vestibulum in. Donec tristique elit non finibus fermentum. Fusce vestibulum accumsan elit id euismod. Donec quis nibh lobortis eros consequat elementum id non lacus. Mauris eget velit pellentesque, gravida ipsum ut, varius leo. Donec eget mi et diam euismod elementum a in massa.</p>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        siteUrl
        thumbnail
      }
    }
  }
`;

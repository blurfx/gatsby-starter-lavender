import React from 'react';
import { Helmet } from 'react-helmet';

import { useSeo } from '~/hooks/useSeo';

interface Props {
  description: string;
  lang: string;
  title: string;
  meta?: Metadata[];
  noSiteName?: boolean;
}

const Seo = ({ description, lang, meta = [], title, noSiteName = false }: Props) => {
  const { site } = useSeo();

  if (site === undefined) {
    return null;
  }

  const metaDescription = description || site.siteMetadata?.description;
  const defaultTitle= site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={noSiteName ? undefined : `%s | ${defaultTitle}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata?.social?.twitter || '',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;

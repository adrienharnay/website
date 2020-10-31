import React, { FunctionComponent } from 'react';
import Head from 'next/head';

type MetaDescriptionProps = {
  description: string;
};

const MetaDescription: FunctionComponent<MetaDescriptionProps> = ({
  description,
}) => (
  <Head>
    <meta name="description" content={description} key="description" />
    <meta
      property="og:description"
      content={description}
      key="og:description"
    />
    <meta
      name="twitter:description"
      content={description}
      key="twitter:description"
    />
  </Head>
);

export default MetaDescription;

import React, { FunctionComponent } from 'react';
import Head from 'next/head';

type MetaDescriptionProps = {
  description: string;
};

const MetaDescription: FunctionComponent<MetaDescriptionProps> = ({
  description,
}) => (
  <Head>
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  </Head>
);

export default MetaDescription;

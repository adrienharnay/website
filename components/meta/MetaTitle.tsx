import React, { FunctionComponent } from 'react';
import Head from 'next/head';

type MetaTitleProps = {
  title: string;
};

const MetaTitle: FunctionComponent<MetaTitleProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
  </Head>
);

export default MetaTitle;

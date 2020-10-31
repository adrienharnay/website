import React, { FunctionComponent } from 'react';
import Head from 'next/head';

type MetaImageProps = {
  src: string;
};

const MetaImage: FunctionComponent<MetaImageProps> = ({ src }) => (
  <Head>
    <meta property="og:image" content={src} key="og:image" />
    <meta name="twitter:image" content={src} key="twitter:image" />
  </Head>
);

export default MetaImage;

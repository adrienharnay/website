import React, { FunctionComponent } from 'react';
import Head from 'next/head';

type MetaImageProps = {
  src: string;
};

const MetaImage: FunctionComponent<MetaImageProps> = ({ src }) => (
  <Head>
    <meta property="og:image" content={src} />
    <meta name="twitter:image" content={src} />
  </Head>
);

export default MetaImage;

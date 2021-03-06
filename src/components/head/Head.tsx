import React, { FunctionComponent } from 'react';
import NextHead from 'next/head';

const URL = 'https://adrien.harnay.me';
const SHORT_TITLE = 'Adrien Harnay';
const DESCRIPTION =
  'Front-end developer working with React / React Native. Passionate about technology. Drummer. Available for contract work.';
const KEYWORDS =
  'adrien, harnay, blog, website, react, native, react-native, ssr, server, side, rendering, graphql, apollo, webpack';
const VIEWPORT = 'width=device-width, initial-scale=1';
const META_BANNER_URL = '/meta-banner.jpg';

const Head: FunctionComponent = () => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <link rel="icon" href="/favicon.png" />

    <title key="title">{SHORT_TITLE}</title>
    <meta name="author" content={SHORT_TITLE} />
    <meta name="application-name" content={SHORT_TITLE} />
    <meta name="description" content={DESCRIPTION} />
    <meta name="keywords" content={KEYWORDS} />
    <meta name="viewport" content={VIEWPORT} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={URL} />
    <meta property="og:site_name" content={SHORT_TITLE} />
    <meta property="og:title" content={SHORT_TITLE} key="og:title" />
    <meta
      property="og:description"
      content={DESCRIPTION}
      key="og:description"
    />
    <meta property="og:image" content={META_BANNER_URL} key="og:image" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="650" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@AdrienHarnay" />
    <meta name="twitter:url" content={URL} />
    <meta name="twitter:title" content={SHORT_TITLE} key="twitter:title" />
    <meta
      name="twitter:description"
      content={DESCRIPTION}
      key="twitter:description"
    />
    <meta name="twitter:image" content={META_BANNER_URL} key="twitter:image" />

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <meta
      name="google-site-verification"
      content="RYUzqPiDDb_8vn-URNzsrhTIbbRSXHbf6xQVXw0ElMQ"
    />
  </NextHead>
);

export default Head;

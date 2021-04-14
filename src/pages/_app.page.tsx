import 'normalize.css';
import 'src/styles/global.scss';
import 'src/styles/prism.css';

import React, { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';

import Head from 'src/components/head/Head';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
};

export default App;

import 'normalize.css';
import 'src/styles/global.scss';
import 'src/styles/prism.css';

import React, { FunctionComponent, useEffect } from 'react';
import ReactGA from 'react-ga';
import type { AppProps } from 'next/app';
import qs from 'qs';

import Head from 'src/components/head/Head';
import { useRouter } from 'next/dist/client/router';

const stringifyObject = (obj: Record<string, unknown>) => {
  if (!Object.keys(obj).length) {
    return '';
  }

  return qs.stringify(obj);
};

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize('UA-112440365-1');
  }, []);

  useEffect(() => {
    const query = stringifyObject(router.query);

    ReactGA.pageview(`${router.pathname}${query ? '?' : ''}${query}`);
  }, [router.pathname, router.query]);

  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
};

export default App;

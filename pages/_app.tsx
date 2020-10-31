import 'normalize.css';
import 'styles/global.scss';
import 'styles/prism.css';

import React, { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;

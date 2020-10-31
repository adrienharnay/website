import 'normalize.css';
import 'src/styles/global.scss';
import 'src/styles/prism.css';

import React, { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;

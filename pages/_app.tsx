import React, { FunctionComponent } from 'react';

const App: FunctionComponent = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;

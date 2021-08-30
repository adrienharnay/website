import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                defer
                src="https://getinsights.io/js/insights.js"
              ></script>
              <script
                defer
                dangerouslySetInnerHTML={{
                  __html:
                    'insights.init("zML99JhMRR7_qeqN");insights.trackPages();',
                }}
              />
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;

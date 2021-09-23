import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    const { __NEXT_DATA__ } = this.props;
    const { assetPrefix } = __NEXT_DATA__;

    return (
      <Html lang="cs">
        <Head>
          {/* ASSETS STORAGE PRECONNECT */}
          {assetPrefix && <link rel="preconnect" href={assetPrefix} />}
          {/* GTM SCRIPT */}
        </Head>
        <body>
          {/* MAIN CONTENT */}
          <Main />
          {/* NEXT SCRIPTS */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

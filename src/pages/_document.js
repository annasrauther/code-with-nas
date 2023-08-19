import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document component for setting up the document structure.
 * This component is used to enhance SEO and optimize loading performance.
 */
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add a link to import fonts from Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway&family=Bricolage+Grotesque&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Render the main content of the application */}
          <Main />
          {/* Render the Next.js script and additional scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

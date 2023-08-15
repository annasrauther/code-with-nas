import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Custom Document component for setting up the initial HTML document.
 * @component
 * @returns {JSX.Element} Rendered Document component.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags */}
        <meta name="description" content="Technology Nano Blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

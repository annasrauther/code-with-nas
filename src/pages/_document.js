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
          {/**
             * Preload and load fonts using various methods.
             * 
             * For more information, see:
             * {@link https://csswizardry.com/2020/05/the-fastest-google-fonts/ The Fastest Google Fonts}
          */}

          {/**
             * Preemptively warm up the fonts’ origin.
          */}
          <link rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin />

          {/**
             * Initiate a high-priority, asynchronous fetch for the CSS file. Works in most modern browsers.
          */}
          <link rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque&display=swap" />

          {/**
             * Initiate a low-priority, asynchronous fetch that gets applied to the page
             *    only after it’s arrived. Works in all browsers with JavaScript enabled.
          */}
          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque&display=swap"
            media="print" onload="this.media='all'" />

          {/**
             * In the unlikely event that a visitor has intentionally disabled
             *    JavaScript, fall back to the original method. The good news is that,
             *    although this is a render-blocking request, it can still make use of the
             *    preconnect which makes it marginally faster than the default.
          */}
          <noscript>
            <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque&display=swap" />
          </noscript>
          <link rel="canonical" href="https://code-with-nas.vercel.app/" />
        </Head>
        <body>
          {/*
            Render the main content of the application
          */}
          <Main />
          {/* Render the Next.js script and additional scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

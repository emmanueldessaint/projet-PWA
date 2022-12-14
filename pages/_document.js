import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap" rel="stylesheet"></link>
        </Head>
        {/* <link
          rel="preload"
          href="/public/fonts/enchanted_land-webfont.woff"
          as="font"
          crossOrigin=""
        /> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
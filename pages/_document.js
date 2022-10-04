import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id='notifications'></div>
          <div id='backdrop-root'></div>
          <div id='modal-root'></div>
          <div id='modal-viewRequest'></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

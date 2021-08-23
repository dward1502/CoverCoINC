import Layout from '../components/Layout';
import ProductProvider from '../context/ProductProvider.jsx';

import '../scss/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}

export default MyApp;

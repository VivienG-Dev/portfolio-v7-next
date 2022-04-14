import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Head from "../components/Head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

export default MyApp;

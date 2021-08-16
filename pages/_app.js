import "../styles/globals.css";
import Layout from "../components/Layout.js";
import NavBar from "../components/NavBar.js";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

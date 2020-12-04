// import '../styles/globals.css'
import "antd/dist/antd.css"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout content={
        <Component {...pageProps} />
      } />
    </div>
  );
}

export default MyApp;

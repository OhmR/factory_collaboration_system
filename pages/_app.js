// import '../styles/globals.css'
// import '@ant-design/pro-form/dist/form.css';
import "antd/dist/antd.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

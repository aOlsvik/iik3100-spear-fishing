import "@/styles/globals.css";
import "@/styles/home.css"
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return <>
  <Head>
  <link rel="icon" href="https://tihlde.org/browser-icons/favicon-32x32.png" />
  <title>TIHLDE</title>
  </Head>
  <Component {...pageProps} />;
  </> 
}

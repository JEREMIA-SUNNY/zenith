import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head >
        <title>Zenith Energy</title>
        <meta name="description" content="Official website for Zenith Energy " />
        <link rel="icon" href="/ZLOGO1.png " />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
import Layout from '../components/Layout'
import Script from 'next/script'
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  // const client = useMongoClient(); // Establish MongoDB connection using the custom hook.

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

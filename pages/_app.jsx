import '../styles/globals.css'
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Head from "next/head";
import Layout from "../components/layout"
import { appWithTranslation } from 'next-i18next'
import '../styles/bootstrap.css';
import {SSRProvider} from '@react-aria/ssr';
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
    <ThemeProvider theme={theme}>
       <Head>
        <link rel="icon" key="favicon" href="/favicon.ico" />
        <meta property="og:url" key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:image"
          content="https://mieuxvoter.fr/og-mieux-voter.png"
          key="og:image"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </SSRProvider>
  )
}
export default appWithTranslation(MyApp)
import '../styles/globals.css'
import '../styles/dropdown.sass'
import {ThemeProvider} from 'theme-ui';
import theme from '../theme';
import Head from "next/head";
import Layout from "../components/layout"
import {appWithTranslation} from 'next-i18next'
import '../styles/bootstrap.css';
import {SSRProvider} from '@react-aria/ssr';
import Newsletter from './newsletter';


function MyApp({Component, pageProps}) {
  // Hack to serve a static page for netlify forms
  if (Component === Newsletter)
    return <Newsletter />

  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="icon" key="favicon" href="/favicon.ico" />
          <meta property="og:url" key="og:url" />
          <meta property="og:type" content="website" key="og:type" />
          <meta
            property="og:image"
            content={`https://${process.env.NEXT_PUBLIC_WEBSITE_ADDRESS}/og-mieux-voter.png`}
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

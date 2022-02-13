import {useCallback, useEffect} from 'react';
import Router from 'next/router'
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

  // Hack to scroll to top for /le-jugement-majoritaire page
  const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    Router.events.on("routeChangeComplete", resetWindowScrollPosition);

    return () => {
      Router.events.off("routeChangeComplete", resetWindowScrollPosition);
    };
  }, []);


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

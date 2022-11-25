import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import Layout from '_Components/Layout';
import Header from '_Components/Header';
import ProgressBar from '_Components/ProgressBar';
import Loading from '_Components/Loading';
import Modal from '_Components/Modal';
import Head from 'next/head';
import Footer from '_Components/Footer';
import Script from 'next/script';
import * as gtag from 'lib/gtag.js';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLoadingStart = (url: string) => url !== router.asPath && setIsLoading(true);
    const handleLoadingComplete = (url: string) => url === router.asPath && setIsLoading(false);

    router.events.on('routeChangeStart', handleLoadingStart);
    router.events.on('routeChangeComplete', handleLoadingComplete);
    router.events.on('routeChangeError', handleLoadingComplete);

    return () => {
      router.events.off('routeChangeStart', handleLoadingStart);
      router.events.off('routeChangeComplete', handleLoadingComplete);
      router.events.off('routeChangeError', handleLoadingComplete);
    };
  });

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <RecoilRoot>
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      <Head>
        <link rel='shortcut icon' href='/imgs/dots.ico' />
        <meta name='google-site-verification' content='Ud8J6A_ISBf4lwJLP8q98U-YENsJ9-7fd8TJ8KB8iFg' />
        <title>Cobb-dev</title>
      </Head>
      {isLoading && (
        <Modal>
          <Loading />
        </Modal>
      )}
      <ProgressBar />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </RecoilRoot>
  );
}

export default MyApp;

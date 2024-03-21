import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import WebLayout from 'app/layout/web'
import '../global.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { AppProps } from 'next/app'
import WebFooter from 'app/components/WebFooter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Greenwdood Bank</title>
        <meta
          name="description"
          content="Greenwood, a digital mobile banking platform made for Black & Latino customers. Our best-in-class services include virtual bank card accounts that give back." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <WebLayout>
          <Component {...pageProps} />
        </WebLayout>
      </Provider>
    </>
  )
}

export default MyApp

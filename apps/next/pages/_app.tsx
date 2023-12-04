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
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <WebLayout>
          <Component {...pageProps} />
        </WebLayout>
        <WebFooter />
      </Provider>
    </>
  )
}

export default MyApp

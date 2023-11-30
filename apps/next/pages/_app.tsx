import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'

import '../global.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { AppProps } from 'next/app'
import WebLayout from 'app/layout/web'
import NextTopLoader from 'nextjs-toploader'
import NextNprogress from 'nextjs-progressbar';

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
          <NextNprogress
            color={'#ff0000'}
            startPosition={0.3}
            stopDelayMs={200}
            height={4}
          />
          <Component {...pageProps} />
        </WebLayout>
      </Provider>
    </>
  )
}

export default MyApp

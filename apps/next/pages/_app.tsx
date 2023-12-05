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
        <title>Dynamic Phlebotomy & CPR</title>
        <meta
          name="description"
          content="Discover excellence in healthcare training with our Phlebotomy and CPR courses. Empower yourself with essential skills in blood collection and life-saving techniques. Join us to become a certified professional ready to make a difference in patient care. Enroll now for comprehensive training, expert instructors, and a pathway to a rewarding career in healthcare"
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

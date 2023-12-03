// Based on https://github.com/zeit/next.js/tree/canary/examples/with-react-native-web
// and https://github.com/expo/expo-cli/blob/main/packages/webpack-config/web-default/index.html
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

import * as React from 'react'
import { AppRegistry } from 'react-native'


const fonts = [
  "EntypoFont", "AntDesignFont", "EvilIconsFont", "FeatherFont", "FontAwesomeFont",
  "FoundationFont", "IoniconsFont", "MaterialCommunityIconsFont", "MaterialIconsFont",
  "OcticonsFont", "SimpleLineIconsFont", "ZocialFont", "MaterialIcons", "Poppins", "BebasNeue-Bold"
]

const customFontCss = fonts
  .map(
    (font) => `
    @font-face {
        font-family: '${font}';
        src: url('/fonts/${font}.ttf');
    }
`
  )
  .join('\n')
export const style = `
${customFontCss}

`

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });


    AppRegistry.registerComponent('Main', () => Main)
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const styles = [
      <style key="style-reset" dangerouslySetInnerHTML={{ __html: style }} />,
      getStyleElement(),
    ]
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps, styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body className="scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-red-600 scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-32 overflow-y-scroll bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
// @ts-nocheck
'use client'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleSheet } from 'react-native'
import { Provider } from 'app/provider';
import WebLayout from "app/layout/web";
import NextTopLoader from 'nextjs-toploader';
import { createElement, PropsWithChildren } from 'react';

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
  ).join('\n')

export const fontStyles = `
${customFontCss}
`

export function StylesProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    const sheet = StyleSheet.getSheet()
    return (
      <style
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
      />
    )
  })
  return <>{children}</>
}
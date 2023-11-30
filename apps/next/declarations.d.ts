/// <reference types="nativewind/types" />

declare module 'nativewind/jsx-runtime'
declare module 'nativewind/jsx-runtime' {
  export default any
}


declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
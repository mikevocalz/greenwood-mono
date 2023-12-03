
import { ReactNode, ReactElement } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { WebHeader } from "app/components/WebHeader";
import WebFooter from "app/components/WebFooter";
import dynamic from "next/dynamic";

function WebLayout({ children }): ReactElement<ReactNode> {

  return (
    <>
      <WebHeader />
      <View className="relative self-center  h-full w-screen bg-red-100 ">
        {children}
      </View>
      <WebFooter />
    </>
  )
}



export default dynamic(() => Promise.resolve(WebLayout), { ssr: false })

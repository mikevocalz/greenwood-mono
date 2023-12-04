
import { ReactNode, ReactElement } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { WebHeader } from "app/components/WebHeader";
import WebFooter from "app/components/WebFooter";
import dynamic from "next/dynamic";

function WebLayout({ children }): ReactElement<ReactNode> {

  return (
    <View className="relative self-center flex-col  min-h-full w-screen overflow-y-hidden ">
      <WebHeader />
      {children}
    </View>
  )
}



export default dynamic(() => Promise.resolve(WebLayout), { ssr: true })

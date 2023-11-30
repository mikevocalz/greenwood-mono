
import { ReactNode } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { WebHeader } from "app/components/WebHeader";
import WebFooter from "app/components/WebFooter";

const WebLayout = ({ children }: { children: ReactNode }) => {

  return (
    <>
      <WebHeader />

      <View className="self-center  h-full w-screen bg-white ">

        {children}


      </View>
      <WebFooter />
    </>
  )
}


export default WebLayout

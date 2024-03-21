import { Dimensions, Platform, StyleSheet, Pressable, View, Text } from "react-native";
import { Box, ScrollView, Button, } from "@gluestack-ui/themed"
import { LinearGradient } from 'expo-linear-gradient';
import { Aside } from "@expo/html-elements"

import { useState, FC, Fragment, useEffect } from "react";
import { SolitoImage } from 'solito/image'

import ATM from "app/components/svgs/ATM";
import Wallet from "app/components/svgs/Wallet";

import Cards from '../../../apps/expo/assets/images/cards.png'
import ChevronRight from "app/components/svgs/ChevronRight";

const RightPanel = () => {
  const { width } = Dimensions.get('window')
  const isWeb = Platform.OS === 'web'

  return (

    <Aside style={{ paddingBottom: isWeb ? 800 : 300 }}
      className=" h-full   lg:mt-0 mt-9  lg:h-auto rounded-t-[30px] lg:flex-none lg:w-[28%] w-full flex-1">

      <View className="rounded-xl overflow-hidden flex-row mb-8 lg:mb-4 bg-[#c5e740] md:h-[200px] h-[270px] aspect-video w-full">

        <View className=" w-[60%] h-full px-4 py-6 justify-center">
          <Text className="font-medium text-black text-xl">Get $10</Text>
          <Text className="font-normal text-black my-2 text-[14px]">Open an Invest account when upgrading your Greenwood Membership</Text>
          <Pressable
            className=" hover:opacity-[0.7] mt-1 max-w-[400px] w-full flex-row">
            <Text className="text-xl font-bold text-green-800 mr-3">UPGRADE</Text><ChevronRight width={16} height={16} style={{ marginTop: 6 }} />
          </Pressable>

        </View>
        <View className="w-[60%]   flex-1 h-full z-40  overflow-visible absolute bottom-0 right-0 top-0">
          <SolitoImage
            unoptimized
            alt='logo'
            src={Cards}
            contentFit='fill'
            width={200}
            height={250}
            style={{
              zIndex: 1000,
              height: '101%',
              width: '85%',
              position: 'absolute',
              top: -2,
              right: 0,
              flex: 1
            }}
          />
        </View>
      </View>



      <View className="rounded-xl overflow-hidden flex-row mb-8 lg:mb-4 bg-[#dfe5e5] md:h-[200px] h-[270px] aspect-video w-full">
        <View className=" w-[35%] p-3 h-full justify-center items-center">
          <ATM />
        </View>
        <View className="w-[65%] h-full justify-center p-3">
          <Text className="font-medium text-black text-xl">Fund your spending account</Text>
          <Text className="font-normal text-black my-4 text-[14px]">Your spending account balance is 0. Click here to fund now.</Text>

        </View>
      </View>



      <View className="rounded-xl overflow-hidden flex-row mb-8 lg:mb-4 bg-[#dbf5ee] md:h-[200px] h-[270px] aspect-video w-full">
        <View className=" w-[35%] p-3 h-full justify-center items-center">
          <SolitoImage
            unoptimized
            alt='logo'
            src={'https://secure.gogreenwood.com/static/media/greenwood-elevate-card.e4874ae35cb8938a8e44.png'} contentFit='contain'
            width={200}
            height={250}
            style={{
              flex: 1,
              height: '90%',
              width: '100%'
            }}
          />
        </View>
        <View className=" w-[65%] h-full justify-center p-3">
          <Text className="font-medium text-black text-xl">Ready to Elevate your Greenwood Account?</Text>
          <Text className="font-normal text-black my-2 text-[14px]">Get even more amazing benefits with an Elevate membership.</Text>
          <Pressable
            className=" hover:opacity-[0.7] mt-1 max-w-[400px]  flex-row ">
            <Text className="text-md font-bold text-green-800 mr-1 ">EXPLORE BENEFITS </Text><ChevronRight width={14} height={14} style={{ marginTop: 2 }} />
          </Pressable>
        </View>
      </View>


      <View className="rounded-xl overflow-hidden flex-row mb-8 lg:mb-4 bg-gray-50 md:h-[200px] h-[270px] aspect-video w-full">
        <View className=" w-[35%] p-3 h-full justify-center items-center">
          <Wallet />
        </View>
        <View className=" w-[65%] h-full justify-center p-3">
          <Text className="font-medium text-black text-xl">Ready to Open a Savings Account?</Text>
          <Text className="font-normal text-black my-2 text-[14px]">Start saving and growing your wealth with Greenwood at 4.15% Annual Percentage Yeild (APY).</Text>
          <Pressable
            className=" hover:opacity-[0.7] mt-1 max-w-[400px] w-full flex-row">
            <Text className="text-md font-bold text-green-800 mr-1 ">EXPLORE BENEFITS</Text><ChevronRight width={14} height={14} style={{ marginTop: 2 }} />
          </Pressable>
        </View>
      </View>


    </Aside>

  )
}


export default RightPanel
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

const LeftPanel = () => {
  const { width } = Dimensions.get('window')
  const isWeb = Platform.OS === 'web'

  return (

    <Aside style={{ paddingBottom: isWeb ? 800 : 300 }}
      className="bg-white h-screen p-8 lg:h-auto rounded-t-[30px] lg:flex-none lg:w-[70%]  w-full ">

      <View className="md:w-[340px] md:h-[180px] max-w-420 justify-center mb-9 mt-6 bg-black px-6 py-3 rounded-2xl ">
        <View className="flex-row justify-between">
          <Text className="text-[#1F9081] text-xl ">Spending Account</Text>
          <Text className="text-[#1F9081] text-xl">...{user.account.rouingNum.slice(-4)}</Text>
        </View>
        <View className="text-xl mt-[86px] text-white flex-row font-bold ">$<Text className="text-white text-2xl font-normal mt-[2px]">{user.account.amount}</Text></View>

      </View>


      <View className="flex w-full flex-row justify-between md:px-10  px-0 mb-8">
        <Text className="md:text-lg font-bold text-black">Latest Spending Account Transactions (...{user.account.rouingNum.slice(-4)})</Text>
        <Pressable
          className=" hover:opacity-[0.7] items-center flex-row">
          <Text className="md:text-lg font-bold text-green-800 mr-2">VIEW ACCOUNT DETAILS</Text><ChevronRight width={14} height={14} style={{ marginTop: width < 380 ? 4 : 0, }} />
        </Pressable>
      </View>



      <ScrollView
        horizontal={true}
      >
        <Table borderStyle={{ flex: 1, borderWidth: 0 }}>
          <Row data={tableData.tableHead} flexArr={[.8, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
          <TableWrapper style={styles.wrapper}>
            <Rows data={tableData.tableData} flexArr={[.8, 2, 1, 1]} style={styles.row} textStyle={{ color: '#000', paddingLeft: 14, textAlign: 'left', flexWrap: 'noWrap' }} />
          </TableWrapper>
        </Table>
      </ScrollView>
      <View className="flex-row justify-center">
        <Text className="text-xs font-bold text-black mt-10">No Spending Account Transactions to Show Within the Past 30 Days</Text>
      </View>
      <Text>{user.account.debt}</Text>
    </View>

    </Aside >

  )
}


export default LeftPanel
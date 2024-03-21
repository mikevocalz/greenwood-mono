import { Dimensions, ScrollView, Platform, StyleSheet, Pressable, View, Text, Alert } from "react-native";
import { Box, Button, } from "@gluestack-ui/themed"
import { LinearGradient } from 'expo-linear-gradient';
import { Span } from "@expo/html-elements"

import { useState, FC, Fragment, useEffect } from "react";
import { SolitoImage } from 'solito/image'

import ScreenScrollView from 'app/components/ScreenScrollView';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// @ts-ignore 
import ChevronRight from "app/components/svgs/ChevronRight";

import { faker } from '@faker-js/faker';
import RightPanel from "app/components/RightPanel"

import userTableDataStore from 'app/store/userTableDataStore'
import useUserStore from "app/store/useUserStore";
import { determineLoanEligibility } from "app/utils/helpers";


interface TableProps {
  tableHead: string[],
  tableData: string[][] | any;
}


const isWeb = Platform.OS === 'web'

const initialTableData: TableProps = {
  tableHead: ['DATE', 'DESCRIPTION', 'TYPE', 'AMOUNT', 'PrepPay Eligibility'],
  tableData: [
    ['3/16/24', 'Direct Deposit - **Blavity #3433', 'Deposit', '$1,905.23'],
    ['3/10/24', 'Foodtown - Harlem', 'Purchase', '$282.35'],
    ['3/6/24', 'Zelle Money Received', 'Zelle Recieved', '$40.00'],
    ['3/2/24', 'BET Plus Subscription', 'Purchase', '$8.99'],
    ['3/1/24', 'Direct Deposit - **Blavity #3214', 'Deposit', '$1,905.23'],
  ]
}



export function HomeScreen() {
  const { width } = Dimensions.get('window')
  // Create a new Date object for the current date
  const currentDate = new Date();

  // Define month names array
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  // Get month, date, and year
  const month = monthNames[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${date}, ${year}`;


  const setTableData = userTableDataStore((state) => state.setTable);
  const tablesData = userTableDataStore((state) => state.table)
  const updateTableData = userTableDataStore((state) => state.updateTable) ///update the table to push the element button into the zustand store
  const { user } = useUserStore()
  console.log('tab dat: ', tablesData)

  // useEffect to set data on app load
  useEffect(() => {
    setTableData(initialTableData);
    updateTableData()
  }, [setTableData, updateTableData]); // Empty dependency array ensures it runs only once on component mount


  const loanEligibility = determineLoanEligibility(user);


  return (
    <ScreenScrollView
      showsHorizontalScrollIndicator={false}
      contentInsetAdjustmentBehavior='always'
      nestedScrollEnabled
      scrollEnabled
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      className={` ${!isWeb ? 'h-[100vh]' : 'mt-[80px] h-full'} bg-gray-100 self-center   max-w-7xl  min-w-screen `}>


      <LinearGradient colors={['#000', '#191919', '#000']}
        className={`${isWeb ? 'w-[100vw] self-center' : 'w-full'} flex bg-black h-[260px] items-center`}>
        <View className="max-w-7xl flex w-full h-full px-8 pt-8  overflow-hidden ">
          <Text className="my-4 mb-8 text-bold text-white text-xl">Hello, {user?.name}! <Text className="ml-2 text-normal text-white text-[12px]">{formattedDate}</Text></Text>

          <View className="shadow-xl shadow-zinc-500	 max-w-2xl flex w-full bg-black h-full rounded-t-[30px] overflow-hidden p-[0.5px] gap-y-8 bg-gradient-to-r from-zinc-100 to-black ">
            <View className=" h-full w-full bg-black px-8 pt-6 rounded-t-[30px] ">
              <Text className="text-white text-2xl mt-2">Total Balance <Span className="ml-3 bg-green-800 rounded-full px-2 text-zinc-300 text-md">?</Span></Text>
              <View className="text-3xl mt-[16px] text-white flex-row font-bold "><Text className="text-white text-5xl font-bold mt-[2px]">${user.account.amount}</Text></View>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View
        className="container w-full  max-w-7xl overflow-x-clip  pt-8 px-3 mx-auto flex flex-col lg:flex-row justify-between">
        <View style={{ paddingBottom: isWeb ? 800 : 300 }}
          className="bg-white h-screen p-8 lg:h-auto rounded-t-[30px] lg:flex-none lg:w-[70%]  w-full">

          <View className="flex-row justify-between w-full flex-wrap">
            <View className="md:w-[340px] md:h-[180px] max-w-420 justify-center mb-9 mt-6 bg-black px-6 py-3 rounded-2xl ">
              <View className="flex-row justify-between">
                <Text className="text-[#1F9081] text-xl ">Spending Account</Text>
                <Text className="text-[#1F9081] text-xl">...{user.account.rouingNum.slice(-4)}</Text>
              </View>
              <View className="text-xl mt-[86px] text-white flex-row font-bold "><Text className="text-white text-2xl font-normal mt-[2px]">${user.account.amount}</Text></View>
            </View>


            {/* GreenWood Pay Feature */}
            <View className="md:w-[245px] md:h-[180px] max-w-185 justify-center mb-9 mt-6 bg-black px-6 py-3 rounded-2xl ">
              <View className="flex-row justify-end">
                <Text className="text-[#1F9081] text-xl font-bold">Greenwood: PrepPay</Text>
              </View>
              {/* Check Loan Eligibility  */}

              {loanEligibility.eligibility ?
                <View className="justify-end text-xl mt-[86px] text-white flex-row font-bold ">$<Text className="text-white text-2xl font-normal mt-[2px]">{loanEligibility.loanAmount}</Text></View>
                  ? !loanEligibility.eligibility :
                  <View className="justify-end text-xl mt-[86px] text-white flex-row font-bold ">
                    <Text className="text-white text-xl mt-[2px]">Not Approved</Text>
                  </View>
                : <View className=" mt-[86px]" />
              }
            </View>

          </View>
          {/* End of Feature */}


          <View className="flex w-full flex-row justify-between md:px-10  px-0 mb-8">
            <Text className="md:text-lg font-bold text-black">Latest Spending Account Transactions (...{user.account.rouingNum.slice(-4)})</Text>
            <Pressable
              className=" hover:opacity-[0.7] items-center flex-row">
              <Text className="md:text-lg font-bold text-green-800 mr-2">VIEW ACCOUNT DETAILS</Text><ChevronRight width={14} height={14} style={{ marginTop: width < 380 ? 4 : 0, }} />
            </Pressable>
          </View>


          <View style={{
            paddingTop: 30, backgroundColor: '#fff'
          }}>
            <Text className="text-black text-2xl font-normal my-2">{loanEligibility.eligibility}</Text>
            <Text className="text-black text-2xl font-normal my-2">{user.account.creditScore}</Text>
            <Text className="text-black text-2xl font-normal my-2">{user.account.riskFactorScore}</Text>


            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              contentInsetAdjustmentBehavior="automatic"
              contentContainerClassName="flex min-w-full h-full"
            >
              <Table borderStyle={{ borderWidth: 0 }} style={{ minWidth: 400, width: '100%' }}>
                <Row data={tablesData.tableHead} flexArr={[.8, 2, 1, 1, 1.5]} style={styles.head} textStyle={styles.text} />
                <TableWrapper style={styles.wrapper}>
                  <Rows data={tablesData.tableData} flexArr={[.8, 2, 1, 1, 1.5]} style={styles.row} textStyle={{ color: '#000', paddingLeft: 14, textAlign: 'left', flexWrap: 'noWrap' }} />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>


          <View className="flex-row justify-center">
            <Text className="text-xs font-bold text-black mt-10">No Spending Account Transactions to Show Within the Past 30 Days</Text>
          </View>
          <Text>{user.account.debt}</Text>
        </View>
        {/* END OF LEFT VIEW */}



        <RightPanel />
      </View>


    </ScreenScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,// @ts-ignore
    height: isWeb ? '100vh' : '100%',
    // minHeight: '100%',
    width: '100%',

  },
  contentContainer: {
    //height: '100%',

    // alignItems: 'center',
    //paddingBottom: Platform.OS === 'web' ? 500 : 140
  },
  head: { width: '100%', height: 40, backgroundColor: '#191919', color: '#000' },
  wrapper: { flexDirection: 'row', width: '100%' },
  title: { flex: 1, backgroundColor: '#f6f8fa', },
  row: { height: 32, width: '100%', flexWrap: 'nowrap' },
  text: { textAlign: 'left', paddingLeft: 10, color: '#fff', fontWeight: 'bold' },
  btnText: { textAlign: 'center' }
})


import "../global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from '@expo/vector-icons/Entypo';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { vars } from "nativewind";
import { memo, useCallback, useEffect } from "react";
import { View, StyleSheet, useColorScheme, Appearance } from "react-native";
import { Provider } from 'app/provider'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import userTableDataStore from 'app/store/userTableDataStore'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

interface TableProps {
  tableHead: string[],
  tableData: string[][] | any;
}


const initialTableData: TableProps = {
  tableHead: ['DATE', 'DESCRIPTION', 'TYPE', 'AMOUNT', 'GreenPay Eligibility'],
  tableData: [
    ['3/16/24', 'Direct Deposit - **Blavity #3433', 'Deposit', '$1,905.23'],
    ['3/10/24', 'Foodtown - Harlem', 'Purchase', '$282.35'],
    ['3/6/24', 'Zelle Money Received', 'Zelle Recieved', '$40.00'],
    ['3/2/24', 'BET Plus Subscription', 'Purchase', '$8.99'],
    ['3/1/24', 'Direct Deposit - **Blavity #3214', 'Deposit', '$1,905.23'],
  ]
}


export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
    ...Entypo.font
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);



  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return <ActivityIndicator size={'large'} color={'#ff0000'} style={{ marginTop: '50%' }} />
  }

  return <RootLayoutNav onLayout={onLayoutRootView} />;
}

function RootLayoutNav(onLayout) {
  const colorScheme = Appearance.getColorScheme()

  const setTableData = userTableDataStore((state) => state.setTableData);

  useEffect(() => {
    setTableData(initialTableData);
  }, [setTableData]); // Empty dependency array ensures it runs only once on component mount



  return (
    <Provider>
      <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
        <StatusBar style="dark" animated />
        <View style={StyleSheet.absoluteFill} onLayout={() => onLayout}>

          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
        </View>
      </ThemeProvider>
    </Provider>
  );
}
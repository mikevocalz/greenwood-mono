import { Pressable, Text, View, Platform, Alert } from "react-native";


export function onPress(value, price) {
  if (Platform.OS === 'web') {
    return (
      window.alert(`This is column ${value}, ${price}`)
    )
  } else {
    return (
      Alert.alert(`This is column ${value}`)
    )
  }
}

export const elementButton = (value: string, price: string): JSX.Element => (
  <>
    {value === 'Purchase' ?
      <Pressable onPress={() => onPress(value, price)}
        className="hover:opacity-85 flex ml-8 w-[90px] h-[28px] rounded-md bg-green-800 px-2 items-center justify-center">
        <Text className="text-white font-semibold text-xs text-center">
          PrepPay</Text>
      </Pressable>
      :
      <View className='w-[100px] h-[24px]' />
    }
  </>
);
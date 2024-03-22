import useUserStore from "app/store/useUserStore";
import { determineLoanEligibility } from "app/utils/helpers";
import { Pressable, Text, View, Platform, Alert } from "react-native";

export function onPress(value, price, user) {
  if (Platform.OS === 'web') {
    return (
      determineLoanEligibility(user),
      window.alert(`This is column ${value}, ${price}....${user.name}`),
      console.log('user: ', user)
    )
  } else {
    return (
      determineLoanEligibility(user),
      Alert.alert(`This is column ${value}`)
    )
  }
}

export const elementButton = (value: string, price: string, user: any): JSX.Element => (
  <>
    {value === 'Purchase' ?
      <Pressable onPress={() => onPress(value, price, user)}
        className="hover:opacity-85 flex ml-8 w-[90px] h-[28px] rounded-md bg-green-800 px-2 items-center justify-center">
        <Text className="text-white font-semibold text-xs text-center">
          PrepPay</Text>
      </Pressable>
      :
      <View className='w-[100px] h-[24px]' />
    }
  </>
);
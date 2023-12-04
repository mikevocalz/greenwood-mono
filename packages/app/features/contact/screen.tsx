import { Text, View } from "react-native";
import { vars } from "nativewind";
import { TextLink } from "solito/link";

const theme = vars({
  "--theme-rg": "blue",
});


export function ContactScreen() {

  return (
    <View className="flex-1 items-center min-h-screen self-center w-screen max-w-7xl  bg-green-200" style={theme}>
      <Text className="font-bold text-3xl text-[--theme-fg] my-6">Contact!</Text>

      <TextLink href="/user/fernando">Regular Link</TextLink>

    </View>
  );
}


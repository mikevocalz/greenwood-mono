import { TextLink } from "solito/link";
import { Card, Box, Text, ScrollView, Button, Heading } from "@gluestack-ui/themed"
import { Platform, View } from "react-native";


const isWeb = Platform.OS === 'web'

const AboutScreen = () => {

  return (
    <View
      //className="flex-1 items-center min-h-screen self-center w-screen max-w-7xl  bg-green-200" 
      className={` ${!isWeb ? ' h-screen' : 'mt-[80px]'} flex-1 items-center self-center h-full bg-green-800  w-screen max-w-7xl pb-[300px] `}
    >
      <Text className="font-bold text-3xl text-[--theme-fg] my-6">About !</Text>

      <TextLink href="/user/fernando">Regular Link</TextLink>

      <Card variant="elevated" className=" bg-red-400 mt-[90px]">
        <Heading mb="$1" size="md">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>

    </View>
  );
}

export default AboutScreen 
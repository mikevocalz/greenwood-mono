import { Dimensions, Text, View, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { vars } from "nativewind";
import { TextLink } from "solito/link";

const theme = vars({
  "--theme-rg": "blue",
});


const CoursesScreen = () => {
  const { width } = Dimensions.get('window');

  return (
    <View className="flex-1 items-center w-full min-h-screen self-center max-w-7xl  bg-green-200" style={theme}>
      {/* make carousel component responsive */}

      <Text className="font-bold text-3xl text-[--theme-fg] my-6">Courses Screen</Text>
    </View>
  );
}

export default CoursesScreen 
import { Text, View } from 'react-native'
import { MotiLink } from 'solito/moti/app'

export function AboutScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <Text className='Text=3xl'>About</Text>
      <View className="flex items-center justify-center p-3 bg-orange-500 w-2/3 h-1/2 " />


      <MotiLink
        href="/user/fernando"
        animate={({ hovered, pressed }) => {
          'worklet'

          return {
            scale: pressed ? 0.95 : hovered ? 1.1 : 1,
            rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
          }
        }}
        transition={{
          type: 'timing',
          duration: 150,
        }}
      >
        <Text selectable={false} className="text-base font-bold">
          Moti Link
        </Text>
      </MotiLink>
    </View>
  )
}

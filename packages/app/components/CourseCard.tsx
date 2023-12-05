
import React from 'react'
import { View, Text, Pressable } from 'react-native';
import Article from '@expo/html-elements'
import { SolitoImage } from 'solito/image'
import { MotiPressable } from 'moti/interactions';


interface CourseCardProps {
  uri?: string;
  descr?: string;
  name?: string;
}

const CourseCard = ({ name, uri, descr }: CourseCardProps) => {
  return (
    <MotiPressable
      animate={({ hovered, pressed }) => {
        'worklet'
        return {
          scale: pressed ? 0.9 : hovered ? 1.05 : 1,
        }
      }}

      style={{
        display: 'flex',
        width: '100%',
        marginHorizontal: 20,
        paddingBottom: 10,
        overflow: 'hidden',
        maxHeight: 460,
        minWidth: 260,
        maxWidth: 360,
        backgroundColor: '#fafafa',
        borderRadius: 20,
      }}
    // className="flex w-full mx-8 pb-6 overflow-hidden max-h-[460px] min-w-[260px] max-w-[360px] rounded-xl bg-zinc-100 "
    >

      <SolitoImage
        width={500}
        height={300}
        src="https://static.wixstatic.com/media/287c48_125e742ca75f4dc39648380f3b564538~mv2.png"
        alt="ui/ux review check"
        priority

        contentFit="cover"
        contentPosition={{ top: '25%', left: '50%' }}
        style={{
          //flex: 1,
          position: 'relative',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: 200
        }}
      />

      <View className=" mx-4 pt-3 rounded-xl  ">

        <Text className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
          Wooden House, Florida
        </Text>


        <Text numberOfLines={5} className="block font-sans mt-2 text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </Text>


        <Pressable
          className="my-10 w-full  rounded-full bg-red-700 py-3 px-7  text-sm font-bold uppercase text-white "
        >
          <Text className='text-lg text-center font-extrabold text-white'>Read More</Text>
        </Pressable>
      </View>
    </MotiPressable>
  )
}


export default CourseCard
import { Dimensions, Platform, Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { MotiLink } from "solito/moti/app";
import { vars } from "nativewind";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useState, FC, Fragment } from "react";
import { SolitoImage } from 'solito/image'
import Carousel from 'react-native-reanimated-carousel';
import { Carousel as WebCarousel } from 'react-responsive-carousel';
import { Section } from '@expo/html-elements';
import { ScreenScrollView } from 'app/components/ScreenScrollView';
import CourseCard from "app/components/CourseCard";
const theme = vars({
  "--theme-fg": "red",
});


const PAGE_WIDTH = '100%'
const colors = [
  "#26292E",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

const photos = [
  {
    id: 1,
    uri: 'https://static.wixstatic.com/media/287c48_125e742ca75f4dc39648380f3b564538~mv2.png'
  },
  {
    id: 2,
    uri: 'https://static.wixstatic.com/media/287c48_4fa5c1308416477aa3d0acdce3fe20f2~mv2.png'
  },
  {
    id: 3,
    uri: 'https://static.wixstatic.com/media/287c48_269616cbc44b427fbce4bddc64afeae3~mv2.png'
  },
  {
    id: 4,
    uri: 'https://static.wixstatic.com/media/287c48_6a475275e11d4dbaaad271ae5d280456~mv2.png'
  },
  {
    id: 5,
    uri: 'https://static.wixstatic.com/media/287c48_5fc65e6c716f40e79dc12070e3f69a9f~mv2.png'
  }
]

const isWeb = Platform.OS === 'web'

function HomeScreen() {
  const [pagingEnabled, setPagingEnabled] = useState<boolean>(true);
  const [snapEnabled, setSnapEnabled] = useState<boolean>(true);
  const progressValue = useSharedValue<number>(0);

  const pWidth = Dimensions.get("screen").width;
  const pHeight = Dimensions.get("screen").height;

  const isAndroid = Platform.OS === 'android';

  const PaginationItem: FC<{
    index: number
    backgroundColor: string
    length: number
    animValue: Animated.SharedValue<number>
  }> = (props) => {
    const { animValue, index, length, backgroundColor } = props;
    const width = 10;

    const animStyle = useAnimatedStyle(() => {
      let inputRange = [index - 1, index, index + 1];
      let outputRange = [-width, 0, width];

      if (index === 0 && animValue?.value > length - 1) {
        inputRange = [length - 1, length, length + 1];
        outputRange = [-width, 0, width];
      }

      return {
        transform: [
          {
            translateX: interpolate(
              animValue?.value,
              inputRange,
              outputRange,
              Extrapolation.CLAMP
            ),
          },
        ],
      };
    }, [animValue, index, length]);
    return (
      <View
        style={{
          backgroundColor: "white",
          width,
          height: width,
          borderRadius: 50,
          overflow: "hidden"
        }}
      >
        <Animated.View
          style={[
            {
              borderRadius: 50,
              backgroundColor,
              flex: 1,
            },
            animStyle,
          ]}
        />
      </View>
    );
  };


  return (
    <ScreenScrollView
      // useWindowScrolling
      showsHorizontalScrollIndicator={false}
      contentInsetAdjustmentBehavior='always'
      nestedScrollEnabled
      scrollEnabled
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      className={` ${!isWeb ? ' h-screen' : 'mt-[80px]'} self-center h-full bg-red-500  max-w-7xl  min-w-screen `}
    >


      <Fragment>
        {Platform.OS !== 'web' ?
          <>
            <Carousel
              style={{
                maxWidth: 1280,
                width: pWidth,
                height: 260,
              }}
              loop
              width={pWidth}
              pagingEnabled={pagingEnabled}
              snapEnabled={snapEnabled}
              autoPlay={true}
              autoPlayInterval={6000}
              onProgressChange={(_, absoluteProgress) =>
                (progressValue.value = absoluteProgress)
              }

              data={photos}
              renderItem={({ item }) =>
                <View
                  className='max-w-7xl w-full bg-red-200 max-h-[260px] h-full items-center '
                >
                  <SolitoImage
                    key={item.id}
                    priority
                    height={466}
                    width={pWidth}
                    contentFit={'cover'}
                    alt={item.id.toString()}
                    src={item.uri}
                    contentPosition={{ top: '25%', left: '50%' }}
                    style={{
                      flex: 1,
                      width: '100%',
                      maxWidth: 1280,
                      maxHeight: 466,
                    }}
                  />
                  {!!progressValue && (
                    <View
                      className={`flex-row justify-between w-[100px] absolute  mx-auto ${isAndroid ? 'bottom-[5%]' : 'bottom-[6%]'} `}

                    >
                      {colors.map((backgroundColor, index) => {
                        return (
                          <PaginationItem
                            backgroundColor={'#ff0000'}
                            animValue={progressValue}
                            index={index}
                            key={index}
                            length={colors.length}
                          />
                        );
                      })}
                    </View>
                  )}
                </View>
              }
            />


          </>
          : <View className="flex w-full max-h-[476px]">
            <WebCarousel
              showArrows
              showIndicators
              showThumbs={false}
              autoPlay
              showStatus={false}
              dynamicHeight={true}
              infiniteLoop
              width={'100%'}
              swipeable>

              {photos.map((photo, id) => (
                <SolitoImage
                  key={id}
                  priority
                  height={476}
                  width={pWidth}
                  contentFit="cover"
                  alt={photo.id.toString()}
                  src={photo.uri}
                  contentPosition={{ top: '25%', left: '50%' }}
                  style={{
                    flex: 1,
                    maxWidth: 1280,
                    maxHeight: 476,
                    aspectRatio: 16 / 9,
                  }}
                />


              ))
              }


            </WebCarousel>
          </View>
        }
      </Fragment>
      <Section style={{
        width: '100%',
        // height: '100%',
        //backgroundColor: 'red',
        //padding: 16,
      }}>
        <Text className="my-[80px] mb-4 text-3xl font-bold text-center text-gray-900">Courses</Text>
        <ScrollView
          horizontal
          centerContent
          showsHorizontalScrollIndicator={false}
          //scrollEnabled
          contentContainerStyle={{
            paddingRight: 100,
            paddingBottom: 40,
            //maxHeight: 460,
            //overflow: 'scroll',
          }}
          style={{
            //gap: 16,
            paddingRight: 300
          }}
          className="flex py-10 space-x-8 w-full max-h-[730px] pb-[120px]  bg-red-900">

          <CourseCard />
          <CourseCard />
          <CourseCard />
          <Pressable className="flex w-[1/3] max-h-[460px] items-center justify-center mx-8 p-6 rounded-xl bg-amber-500 ">
            <Text className="block text-2xl font-bold leading-snug tracking-normal text-white antialiased">View More</Text>
          </Pressable>
        </ScrollView>
      </Section>





      <Section style={{
        width: '100%',
        // height: '100%',
        //backgroundColor: 'red',
        //padding: 16,
      }}>
        <Text className="my-[80px] mb-4 text-3xl font-bold text-center text-gray-900">Testimonials</Text>
        <View

          style={{
            //gap: 16,

          }}
          className="flex py-10 space-x-8 w-full max-h-[730px] pb-[120px]  bg-blue-900">


        </View>
      </Section>






    </ScreenScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    // alignItems: 'center',
    //paddingBottom: Platform.OS === 'web' ? 500 : 140
  }
})

export default HomeScreen;
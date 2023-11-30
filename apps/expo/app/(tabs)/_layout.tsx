import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, Text, View } from "react-native";
import { SolitoImage } from 'solito/image';
import logoImg from '../../assets/images/dyn-logo.png';
// import Colors from "@/constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={
        {
          headerTitleAlign: "left",
          headerTitle: () =>
            <SolitoImage
              alt='logo'
              src={logoImg}
              width={200}
              height={150}
              contentFit={'contain'}
              style={{
                width: 130,
                height: 56,
                marginBottom: 3,
                marginLeft: -12
              }}
              priority
              unoptimized
            />,
          headerRight: () => (
            <View className="flex-row items-center justify-between absolute px-4 gap-4">
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <>
                      <FontAwesome
                        name="shopping-cart"
                        size={30}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} />
                      <View className=" absolute right-2 -top-2 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-red-700 ">
                        <Text className="text-center text-[9px] font-bold text-white">
                          {/* {items.length} */}
                          10
                        </Text>
                      </View>
                    </>
                  )}
                </Pressable>
              </Link>


              <Link href="../user/[id]" asChild>
                <Pressable className="rounded-full justify-center items-center h-11 w-11 bg-red-300 border-black border-[0.5px]">
                  {({ pressed }) => (
                    <FontAwesome
                      name="user"
                      size={25}
                      style={{ opacity: pressed ? 0.5 : 1 }} />
                  )}
                </Pressable>
              </Link>
            </View>
          ),
          tabBarActiveTintColor: '#dc2626',
          tabBarInactiveTintColor: '#000',
        }
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Courses",
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => <TabBarIcon name="envelope" color={color} />,
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => <Entypo name="shop" color={color} size={28} style={{ marginBottom: -3 }} />,
        }}
      />
    </Tabs>
  );
}

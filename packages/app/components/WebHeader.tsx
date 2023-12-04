import { View, Text, Pressable, useWindowDimensions } from 'react-native'
import { Header, Nav } from '@expo/html-elements'
import Image from "next/image";
import { remapProps } from "nativewind";
import { Link } from 'solito/link';
import { SolitoImage } from 'solito/image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Footer } from '@expo/html-elements'
import logoImg from '../../../apps/expo/assets/images/dyn-logo.png';
import SideBar from './SideBar';
import { MotiLink } from 'solito/moti'
import { usePathname } from 'solito/navigation'

const CustomHeader = remapProps(Header, {});



const headerLinks: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
    {
      pathname: '/',
      isActive: (pathname) => pathname === '/',
      name: 'Home',
    },
    {
      pathname: '/courses',
      isActive: (pathname) => pathname.startsWith('/courses'),
      name: 'Courses',
      protected: false,
    },
    {
      pathname: '/about',
      isActive: (pathname) => pathname.startsWith('/about'),
      name: 'About',
    },
    {
      pathname: '/contact',
      isActive: (pathname) => pathname.startsWith('/contact'),
      name: 'Contact',
    },
    {
      pathname: '/shop',
      isActive: (pathname) => pathname.startsWith('/shop'),
      name: 'Shop',
    },
  ]

export function WebHeader() {
  let session
  let comments
  const items: number = 10

  const { width, height } = useWindowDimensions();
  const pathname = usePathname()


  return (
    <header className='headingNav inset-x-0 fixed top-0 right-0' >
      <View className='sticky flex-1 w-full border-b-[0.5px] border-black left-0 top-0 right-0 z-30 flex w-full items-center justify-center bg-zinc-100  h-[80px] '>
        <View className=' flex-row w-screen max-w-7xl pr-2 justify-between'>
          <View className="flex items-center justify-center ml-1 ">
            <Link href="/">
              <Pressable className="relative h-[70px]  cursor-pointer transition hover:opacity-90">
                <SolitoImage
                  alt='logo'
                  src={logoImg}
                  width={260}
                  height={200}
                  contentFit={'contain'}
                  style={{

                    width: 180,
                    height: 74
                  }}
                  priority
                />
              </Pressable>
            </Link>
          </View>
          <Nav
            className="hiddenNav"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',

            }}  >
            {/* // className="hidden flex-1 flex-row items-center justify-center space-x-8 md:flex"> */}
            {/* <Text className="headerLink">Home</Text>
            <Text className="headerLink">Courses</Text>
            <Text className="headerLink">About</Text>
            <Text className="headerLink">Contact</Text>
            <Text className="headerLink">Shop</Text> */}

            {headerLinks.map((headerLink: any, idx: number) => {
              const active = headerLink.isActive(pathname)

              return (
                <MotiLink
                  key={idx}
                  href={headerLink.pathname}
                  animate={({ hovered, pressed }) => {
                    'worklet'
                    return {
                      scale: pressed ? 0.95 : hovered ? 1.2 : 1,
                    }
                  }}
                  transition={{
                    type: 'timing',
                    duration: 150,
                  }}
                  style={{ marginHorizontal: 8 }}
                >
                  <Text className={`hidden md:flex text-[26px] stroke-red-600 tracking-wide leading-10 uppercase font-[Bebas-Regular] ${active ? 'text-black text-[28px]' : 'text-zinc-700'}`} >{headerLink.name}</Text>
                </MotiLink>
              )
            }
            )}


          </Nav>
          <View className="flex items-center flex-row justify-center ">

            <Link href="/checkout">
              <View className="relative cursor-pointer mr-[2px]">
                {/* {items.length > 0 && ( */}
                <Text className="absolute right-2 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-900 text-[10px] font-bold text-white">
                  {/* {items.length} */}
                  10
                </Text>
                {/*  )} */}
                <Pressable className="headerIcon mr-3" onClick={() => null}>
                  <Icon name="shopping-cart" size={36} color="#000" />
                </Pressable>
              </View>
            </Link>

            {
              <SideBar />
            }
          </View>
        </View>
      </View>
    </header>
  )
}



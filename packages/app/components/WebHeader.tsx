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
import GWLogo from './svgs/GWLogo';

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
      name: 'Dashboard',
    },
    {
      pathname: '/courses',
      isActive: (pathname) => pathname.startsWith('/courses'),
      name: 'Move Money',
      protected: false,
    },
    {
      pathname: '/about',
      isActive: (pathname) => pathname.startsWith('/about'),
      name: 'My Card',
    },
    {
      pathname: '/contact',
      isActive: (pathname) => pathname.startsWith('/contact'),
      name: 'Giving',
    },
    {
      pathname: '/shop',
      isActive: (pathname) => pathname.startsWith('/shop'),
      name: 'Membership',
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
      <View className='sticky flex-1 w-full border-b-[0.5px] border-black left-0 top-0 right-0 z-30 flex items-center justify-center bg-black  h-[80px] '>
        <View className=' flex-row w-screen max-w-7xl pr-2 justify-between'>
          <View className="flex items-center justify-center ml-1 ">
            <Link href="/">
              <Pressable className="relative h-[70px] ml-2 cursor-pointer transition hover:opacity-90">
                <GWLogo width={180} height={74} />
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


            {headerLinks.map((headerLink: any, idx: number) => {
              const active = headerLink.isActive(pathname)

              return (
                <MotiLink
                  key={idx}
                  href={headerLink.pathname}
                  animate={({ hovered, pressed }) => {
                    'worklet'
                    return {
                      scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                    }
                  }}
                  transition={{
                    type: 'timing',
                    duration: 150,
                  }}
                  style={{ marginHorizontal: 8 }}
                >
                  <Text className={`hidden lg:flex text-[16px] font-bold tracking-wide leading-10  ${active ? 'text-[#1F9081] ' : 'text-zinc-300'}`} >{headerLink.name}</Text>
                </MotiLink>
              )
            }
            )}


          </Nav>
          {width <= 800 &&
            <View className="flex items-center flex-row justify-center ">
              <SideBar />
            </View>
          }
        </View>
      </View>
    </header>
  )
}



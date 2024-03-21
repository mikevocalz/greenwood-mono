import { Text, View, Image } from "react-native"
import { FC, ReactNode, useState } from "react"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from "solito/navigation";

import { MotiLink } from 'solito/moti/app'

interface ButtonLinkProps {
  children: ReactNode,
  href: string,
  as?: string | undefined,
  active: boolean,
  onPress: () => void,

}

const ButtonLink = ({ children, href, as, active, onPress }: ButtonLinkProps) => (
  <MotiLink
    href={href}
    as={as}
    active={active}
    onPress={onPress}
    animate={({ hovered, pressed }) => {
      'worklet'

      return {
        scale: pressed ? 0.98 : hovered ? 1.03 : 1,
      }
    }}

    transition={{
      type: 'timing',
      duration: 150,
    }}
  >
    {children}
  </MotiLink>
)

const buttons = [
  {
    id: 'first',
    name: 'Home',
    href: '/'
  },
  {
    id: 'second',
    name: 'Courses',
    href: '/courses'
  },
  {
    id: 'third',
    name: 'About',
    href: '/about'
  },
  {
    id: 'fourth',
    name: 'Contact',
    href: '/contact'
  },
  {
    id: 'fifth',
    name: 'Shop',
    href: '/shop'
  }
]

const SideBar: FC<any> = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [active, setActive] = useState('first');

  const { push } = useRouter()

  return (
    <>
      {showSidebar ? (

        <View
          className="flex text-4xl items-center cursor-pointer fixed right-2 top-[20px] z-50 "
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Icon name="close" size={40} color="#fff" />
          {/*  */}
        </View>
      ) : (
        <View
          onClick={() => setShowSidebar(!showSidebar)}
          className="z-60 flex items-center cursor-pointer right-0 top-13"
        >
          <Icon name="menu" size={38} color="#fff" />
        </View>
      )}

      <View
        onClick={() => setShowSidebar(!showSidebar)}
        className={`top-0 right-0  w-full   shadow-3xl bg-[#0000008a]  text-white fixed h-full transition-opacity ease-in duration-700   ${showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
      >
        <View

          className="flex-1   z-30 w-screen min-h-full opacity-100 border-l-[0.5px] ease-in-out duration-400  border-black max-w-[400px] bg-black  pt-[130px]  top-0 right-0 bottom-0 fixed"
        // style={{
        //   width: '7%',
        //   gap: 8,
        //   maxWidth: 360
        // }}
        >

          {buttons.map((button) =>
            <>
              <ButtonLink
                key={button.id}
                active={active === button.id}
                href={button.href}
                onPress={() => {
                  setActive(button.id);
                  setShowSidebar(!showSidebar);
                }}
              >
                <Text className={`font-[BebasNeue-Bold] ml-[70px] mt-1 py-2 ${active === button.id ? 'text-[#1F9081] ' : 'text-white'} font-black text-2xl uppercase`}>{button.name}</Text>
              </ButtonLink>
              <View className="bg-white h-[0.3px] min-w-[100vh]" />
            </>
          )}
        </View>
      </View>
    </>
  )
}

export default SideBar
import { View, ScrollView, Platform } from 'react-native'

type Props = React.ComponentProps<typeof ScrollView> & {
  useWindowScrolling?: boolean
}

function ScreenScrollView({
  useWindowScrolling = true, // defaults to true
  ...props
}: Props) {
  const Component = Platform.select({
    web: useWindowScrolling ? (View as typeof ScrollView) : ScrollView,
    default: ScrollView,
  })

  return <Component {...props} />
}


export default ScreenScrollView
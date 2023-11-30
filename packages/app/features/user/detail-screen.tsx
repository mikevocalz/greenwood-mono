import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text, View } from 'react-native'
import { useParams, useRouter, useSearchParams } from 'solito/navigation'

const useUserParams = useParams<{ userId: string }>

const UserDetailScreen = () => {
  //const [id] = useParam('id')

  const { userId } = useUserParams()
  const router = useRouter()
  const searchParams = useSearchParams()

  return (
    <View className="flex-1 items-center min-h-screen max-w-7xl p-4 self-center w-full bg-violet-300">
      <Text className="mb-4 text-center font-bold">{`User ID: ${userId}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}


export default UserDetailScreen
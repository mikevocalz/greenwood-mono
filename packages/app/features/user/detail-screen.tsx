import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text, View } from 'react-native'
import { useParams, useRouter, useSearchParams } from 'solito/navigation'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  const router = useRouter()
  const searchParams = useSearchParams()

  return (
    <View className="flex-1 items-center justify-center p-3 bg-yellow-700">
      <Text className='mb-10' onPress={() => router.back()}>
        Fernando
      </Text>
      <TextLink href={'/'} >
        {id}, here is the search param: {searchParams?.get('search')}
      </TextLink>
    </View>
  )
}

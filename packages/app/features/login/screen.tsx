import { Dimensions, Platform, Pressable, Text, View } from "react-native";
import { vars } from "nativewind";
import { TextLink } from "solito/link";
import { LinearGradient } from 'expo-linear-gradient';
import { SolitoImage } from 'solito/image';
import { Span, H2, H1 } from "@expo/html-elements"
import GWLogo from "app/components/svgs/GWLogo";
import { useRouter } from "solito/router";

const theme = vars({
  "--theme-rg": "blue",
});


export function LoginScreen({ }) {
  const { push } = useRouter()

  const onPress = () => {
    push('/')
  }
  const isWeb = Platform.OS === 'web'
  const { width } = Dimensions.get('window')

  const smScreen = width > 400

  return (
    <View className="flex-1 items-center min-h-screen self-center w-screen bg-gray-100 mx-auto flex flex-col lg:flex-row" >
      <LinearGradient colors={['#000', '#191919', '#000']} className="bg-black flex-1 md:h-full max-h-[340px] md:max-h-full flex items-center w-full justify-center lg:w-1/2">
        {/* <img src="https://secure.gogreenwood.com/static/media/card-flip.9714fce6ac3ddaa57768.png" alt="Your Image" className="max-w-full w-auto h-[60vh] lg:max-h-full mt-[80px] lg:mt-0" />
       */}
        <SolitoImage
          unoptimized
          alt='logo'
          priority
          src={"https://secure.gogreenwood.com/static/media/card-flip.9714fce6ac3ddaa57768.png"}
          contentFit='contain'
          width={200}
          height={250}
          style={{
            marginTop: smScreen ? 90 : 0,
            height: isWeb ? '60vh' : '60%',
            width: '100%'
          }}
        />
      </LinearGradient>

      <View className="bg-black h-full flex-1 w-full lg:w-1/2 ">
        <View className="py-3 px-8 items-start h-full w-full">
          <GWLogo width={200} height={80} />
          <H1 className="md:text-[60px] text-[40px] text-white font-bold mb-4 max-w-[400px]">Modern Banking for the <Span className="underline decoration-[7px] decoration-[#1F9081]">Culture.</Span></H1>
          <Text className="text-lg text-white mt-9 mb-4 max-w-[400px]">A mobile banking experience made for Black and Latino customers.</Text>
          <Pressable className="bg-[#1F9081] hover:opacity-[0.7] mt-4 px-8 py-4 items-center max-w-[400px] w-full rounded-full">
            <Text className="text-xl font-bold text-white">Get Access</Text>
          </Pressable>

          <Pressable onPress={onPress}
            className="bg-black border-[1px] border-[#1F9081] hover:opacity-[0.7] mt-5 px-8 py-4 items-center max-w-[400px] w-full rounded-full">
            <Text className="text-xl font-bold text-white">Sign In</Text>
          </Pressable>

          <Text className="text-xs text-white mt-9 mb-3 max-w-[400px]">Greenwood is a financial technology company, not a bank. Banking services provided by Coastal Community Bank, Member FDIC. Deposits are insured up to $250,000 per depositor. The Greenwood Mastercard® Debit Card is issued by Coastal Community Bank pursuant to a license from Mastercard International and may be used everywhere Mastercard debit cards are accepted</Text>

        </View>
      </View>

    </View >
  );
}


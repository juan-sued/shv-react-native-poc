import { useFonts } from 'expo-font'
import { StatusBar, useColorScheme } from 'react-native'
import { TamaguiProvider, XStack, YStack, Theme, Text } from 'tamagui'
import config from './tamagui.config'
import { User } from './src/components/User'
import ChangeTheme from './src/components/ChangeTheme'
import { useState } from 'react'
import { Carousel } from './src/components/Carousel'

export default function App() {
  const colorScheme = useColorScheme()
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  if (colorScheme === 'dark') setIsDarkTheme(true)

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  if (!loaded) {
    return null
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={isDarkTheme ? 'dark' : 'light'}>
        <StatusBar
          animated={true}
          backgroundColor="white"
          showHideTransition="slide"
          barStyle="dark-content"
          hidden={true}
        />
        <YStack flex={1} backgroundColor="$background">
          <XStack
            justifyContent="space-between"
            alignItems="center"
            padding="$6"
            paddingTop="$8"
          >
            <User />
            <ChangeTheme onCheckedChange={setIsDarkTheme} />
          </XStack>
          <Carousel />
        </YStack>
      </Theme>
    </TamaguiProvider>
  )
}

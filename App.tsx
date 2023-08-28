import { useFonts } from 'expo-font'
import { StatusBar, useColorScheme } from 'react-native'
import { TamaguiProvider, XStack, YStack, Theme } from 'tamagui'
import config from './tamagui.config'
import { User } from './src/components/User'
import ChangeTheme from './src/components/ChangeTheme'
import { useState } from 'react'

export default function App() {
  const colorScheme = useColorScheme()
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  if (colorScheme === 'dark') setIsDarkTheme(true)

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  console.log(colorScheme)
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
        <YStack
          flex={1}
          backgroundColor="$background"
          padding="$6"
          paddingTop="$8"
        >
          <XStack justifyContent="space-between" alignItems="center">
            <User />
            <ChangeTheme onCheckedChange={setIsDarkTheme} />
          </XStack>
        </YStack>
      </Theme>
    </TamaguiProvider>
  )
}

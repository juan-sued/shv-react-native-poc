import { Dimensions } from 'react-native'
import { XStack, Image, YStack, Card, View, Text, H3 } from 'tamagui'
import * as React from 'react'

import ReactNativeReanimatedCarousel from 'react-native-reanimated-carousel'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
export function Carousel() {
  const data = [
    'https://cdn.dribbble.com/users/3281732/screenshots/10940512/media/b2a8ea95c550e5f09d0ca07682a3c0da.jpg',
    'https://cdn.dribbble.com/users/3281732/screenshots/6784133/samji_illustrator.jpeg',
    'https://cdn.dribbble.com/users/3281732/screenshots/10940512/media/b2a8ea95c550e5f09d0ca07682a3c0da.jpg',
  ]
  const { width } = Dimensions.get('screen')

  return (
    <XStack alignItems="center">
      <ReactNativeReanimatedCarousel
        loop
        mode="parallax"
        width={width}
        height={width / 2}
        data={data}
        scrollAnimationDuration={1400}
        onSnapToItem={(index) => console.log('current index:', index)}
        pagingEnabled
        renderItem={(link) => (
          <Card
            flex={1}
            width="stretch"
            justifyContent="center"
            height="stretch"
            borderRadius={10}
            overflow="hidden"
            position="relative" // Adicione esta linha para definir o posicionamento como relativo
          >
            <Image
              flex={1}
              source={{ uri: link.item }}
              resizeMode="cover"
              alt="aa"
            />
            <View
              backgroundColor="rgba(211, 49, 0, 0.18)"
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              right={0}
              justifyContent="flex-end"
              alignItems="flex-start"
              height="strech"
            >
              <H3 height="strech" color="$white" backgroundColor="red">
                Novo canal de atendimento
              </H3>
            </View>
          </Card>
        )}
      />
    </XStack>
  )
}

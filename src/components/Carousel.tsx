import { useRef } from 'react'
import { Animated, Dimensions } from 'react-native'
import { XStack, Image, YStack } from 'tamagui'

export function Carousel() {
  const scrollX = useRef(new Animated.Value(0)).current
  const data = [
    'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg',
    'https://cdn.dribbble.com/users/3281732/screenshots/6784133/samji_illustrator.jpeg',
    'https://cdn.dribbble.com/users/3281732/screenshots/10940512/media/b2a8ea95c550e5f09d0ca07682a3c0da.jpg',
  ]
  const { width } = Dimensions.get('screen')

  const imageW = width * 0.9
  const imageH = imageW * 1
  function renderCard({ item }: { item: string }) {
    return (
      <YStack
        width={width}
        justifyContent="center"
        alignItems="center"
        shadowOpacity={0.5}
        shadowColor="#000"
        shadowRadius={20}
        elevation={10}
      >
        <Image
          source={{ width: imageW, height: imageH, uri: item }}
          resizeMode="cover"
          alt="imagem"
          borderRadius={16}
        />
      </YStack>
    )
  }

  return (
    <XStack alignItems="center" flex={1}>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={renderCard}
      />
    </XStack>
  )
}

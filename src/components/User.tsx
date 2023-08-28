import { Avatar, H4, XStack, YStack } from 'tamagui'

export function User() {
  return (
    <XStack space="$4" alignItems="center">
      <Avatar size="$5" circular>
        <Avatar.Image src="https://github.com/juan-sued.png" />
        <Avatar.Fallback
          backgroundColor="$gray5"
          accessibilityLabel="Imagem de perfil"
        />
      </Avatar>
      <YStack>
        <XStack space="$1">
          <H4 color="$gray10" size={2}>
            Olá,
          </H4>
          <H4 fontWeight="500" marginTop="$-1">
            Juan Sued
          </H4>
        </XStack>
        <H4 fontWeight="500" marginTop="$-2" color="$orange10">
          Lojista
        </H4>
      </YStack>
    </XStack>
  )
}

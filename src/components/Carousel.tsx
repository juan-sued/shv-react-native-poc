import { Text, Card, ScrollView, XStack } from 'tamagui'

export function Carousel() {
  return (
    <XStack space="$4" alignItems="center" backgroundColor="red">
      <ScrollView>
        <Card shadowColor="black">
          <Card.Header>
            <Text>Header</Text>
          </Card.Header>
          <Card.Background>
            <Text>Content</Text>
          </Card.Background>
        </Card>
      </ScrollView>
    </XStack>
  )
}

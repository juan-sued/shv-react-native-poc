import { Switch, XStack, SwitchProps } from 'tamagui'
import { Sun, Moon } from '@tamagui/lucide-icons'

export default function ChangeTheme({ ...rest }: SwitchProps) {
  return (
    <XStack space="$2" alignItems="center">
      <Sun size="$2" />
      <Switch size="$2" backgroundColor="$gray6" {...rest}>
        <Switch.Thumb animation="bouncy" />
      </Switch>
      <Moon size="$2" />
    </XStack>
  )
}

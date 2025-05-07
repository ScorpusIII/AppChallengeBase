import { Button } from 'tamagui'

interface Props {
  text: string;
  onPressAction: () => {};
}

export default function DefaultButton({ text, onPressAction }: Props) {
  // TO DO
  // Add dark and light theme support
  return <Button theme="dark" onPress={onPressAction}>{text}</Button>
}
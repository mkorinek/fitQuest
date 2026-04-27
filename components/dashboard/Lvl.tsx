import { Text, View } from 'react-native';
import { LvlProps } from './LvlTile';

export default function Lvl({ level }: LvlProps) {
  return (
    <View className="w-full items-center justify-center">
      <Text className="text-lg text-text-primary">Level</Text>
      <Text className="text-7xl font-bold text-text-primary">{level}</Text>
    </View>
  );
}

import { Text, View } from 'react-native';
import { LvlProps } from './LvlTile';

export default function XPBar({ level, currentXP, nexLvlXP }: LvlProps) {
  const percentage = Math.round((currentXP / nexLvlXP) * 100);
  return (
    <View>
      <View className="h-6 w-full overflow-hidden rounded-full bg-text-secondary/20">
        <View className="h-full bg-xp" style={{ width: `${percentage}%` }} />
      </View>
      <View className="flex-row justify-between">
        <Text className="pt-2 text-center text-sm text-xp/60">
          Currnet: {currentXP} XP
        </Text>
        <Text className="pt-2 text-center text-sm text-xp/60">
          Needed: {nexLvlXP - currentXP} XP
        </Text>
      </View>
    </View>
  );
}

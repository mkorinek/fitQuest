import { Text, View } from "react-native";
import { LvlProps } from "./LvlTile";

export default function XPBar({ level, currentXP, nexLvlXP }: LvlProps) {
  const percentage = Math.round((currentXP / nexLvlXP) * 100);
  return (
    <View>
      <View className="w-full h-6 bg-white/50 rounded-full overflow-hidden">
        <View className="h-full bg-xp" style={{ width: `${percentage}%` }} />
      </View>
      <View className="flex-row justify-between">
        <Text className="text-xp/60 text-sm text-center pt-2">
          Currnet: {currentXP} XP
        </Text>
        <Text className="text-xp/60 text-sm text-center pt-2">
          Needed: {nexLvlXP - currentXP} XP
        </Text>
      </View>
    </View>
  );
}

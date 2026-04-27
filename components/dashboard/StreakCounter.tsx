import { Text, View } from "react-native";

interface StreakCounterProps {
  streak: number;
}

export default function StreakCounter({ streak }: StreakCounterProps) {
  return (
    <View className="items-center justify-between flex-row">
      <Text className="text-white text-2xl items-center leading-[1] justify-center">
        Daily streak
      </Text>
      <Text className="text-white text-4xl font-bold leading-[1]">
        {streak || 0}
      </Text>
    </View>
  );
}

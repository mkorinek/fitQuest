import { Text, View } from 'react-native';

interface StreakCounterProps {
  streak: number;
}

export default function StreakCounter({ streak }: StreakCounterProps) {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="items-center justify-center text-2xl leading-[1] text-text-primary">
        Daily streak
      </Text>
      <Text className="text-4xl font-bold leading-[1] text-text-primary">
        {streak || 0}
      </Text>
    </View>
  );
}

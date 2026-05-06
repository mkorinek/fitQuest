// components/AchievementUnlock.tsx
import LottieView from 'lottie-react-native';
import { MotiView, View } from 'moti';
import { Image, Text } from 'react-native';

interface Achievement {
  icon: any;
  name: string;
  description: string;
}

interface AchievementUnlockProps {
  achievement: Achievement;
  onDismiss: () => void;
}

export function AchievementUnlock({ achievement, onDismiss }: AchievementUnlockProps) {
  return (
    <MotiView
      from={{ translateY: -100, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ translateY: -100, opacity: 0 }}
      transition={{ type: 'spring', damping: 12 }}
      className="absolute left-4 right-4 top-12 flex-row items-center gap-3 rounded-lg bg-surface p-4 shadow-lg"
    >
      <View className="absolute h-20 w-20">
        <LottieView
          source={require('../assets/animations/badge-glow.json')}
          autoPlay
          loop
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <Image source={achievement.icon} className="h-14 w-14" />
      <View className="flex-1">
        <Text className="text-base font-bold text-text-primary">
          {achievement.name}
        </Text>
        <Text className="text-sm text-text-secondary">
          {achievement.description}
        </Text>
      </View>
    </MotiView>
  );
}

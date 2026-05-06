import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { LvlProps } from './LvlTile';

export default function XPBar({ level, currentXP, nexLvlXP }: LvlProps) {
  const progress = useSharedValue(0);
  const targetProgress = currentXP / nexLvlXP;

  useEffect(() => {
    progress.value = withSpring(targetProgress, {
      damping: 30,
      stiffness: 100,
    });
  }, [targetProgress, progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));
  return (
    <View>
      <View className="h-6 w-full overflow-hidden rounded-full bg-text-secondary/20">
        <Animated.View
          className="absolute left-0 top-0 h-full bg-xp"
          style={animatedStyle}
        />
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

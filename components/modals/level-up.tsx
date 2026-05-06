// components/LevelUpModal.tsx
import confettiAnimation from '@/assets/animations/confetti.json';
import starBurstAnimation from '@/assets/animations/starburst.json';
import { BlurView } from 'expo-blur';
import LottieView from 'lottie-react-native';
import { MotiView } from 'moti';
import { useEffect, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

interface LevelUpModalProps {
  visible: boolean;
  newLevel: number;
  onClose: () => void;
}

export function LevelUpModal({
  visible,
  newLevel,
  onClose,
}: LevelUpModalProps) {
  const [confettiDone, setConfettiDone] = useState(false);

  // reset when the modal re-opens, so animations replay on the next level-up
  useEffect(() => {
    if (visible) {
      setConfettiDone(false);
    }
  }, [visible]);
  return (
    <Modal visible={visible} transparent animationType="fade">
      <BlurView intensity={20} tint="dark" className="flex-1">
        <View className="absolute inset-0 items-center justify-center bg-black/50">
          {!confettiDone && (
            <LottieView
              source={confettiAnimation}
              autoPlay
              loop={false}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              onAnimationFinish={() => setConfettiDone(true)}
            />
          )}

          <View className="mt-[-100px] h-72 w-72 items-center justify-center">
            <LottieView
              source={starBurstAnimation}
              autoPlay
              loop={false}
              style={{
                position: 'relative',
                width: 200,
                height: 200,
              }}
            />
            <MotiView
              from={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', delay: 300 }}
              className="items-center"
            >
              <Text className="text-3xl font-extrabold text-xp">LEVEL UP!</Text>
              <Text className="mt-2 text-7xl font-black text-text-primary">
                {newLevel}
              </Text>
              <Pressable
                onPress={onClose}
                className="mt-4 rounded-lg bg-surface p-4"
              >
                <Text className="text-text-primary">Close</Text>
              </Pressable>
            </MotiView>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}

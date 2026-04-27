import { usePlayerStore } from '@/stores/usePlayerStore';
import { Pressable, Text, View } from 'react-native';
import QuestList from '../quest/QuestList';
import LvlTile from './LvlTile';
import StreakCounter from './StreakCounter';

export default function Dashboard() {
  const player = usePlayerStore();
  return (
    <View className="flex-1 gap-4 p-8">
      <View className="flex flex-row justify-between">
        <Pressable
          onPress={() => player.addXP(500)}
          className="rounded-lg bg-surface p-4"
        >
          <Text className="text-text-primary">Add 500xp</Text>
        </Pressable>
        <Pressable
          onPress={() => player.resetLevel()}
          className="rounded-lg bg-surface p-4"
        >
          <Text className="text-text-primary">Reset level</Text>
        </Pressable>
      </View>
      <LvlTile
        level={player.level}
        currentXP={player.currentXP}
        nexLvlXP={player.xpToNextLevel}
      />
      <View className="rounded-lg bg-surface p-4">
        <StreakCounter streak={player.streak} />
      </View>
      <QuestList />
    </View>
  );
}

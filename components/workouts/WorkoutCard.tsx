import { IconSymbol } from '@/components/ui/icon-symbol';
import { colorsDark, colorsLight } from '@/constants/tokens';
import { Workout } from '@/data/workouts';
import { router } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Pressable, Text, View } from 'react-native';

const WorkoutCard = ({
  data,
  onDelete,
}: {
  data: Workout;
  onDelete: (id: string) => void;
}) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const palette = isDark ? colorsDark : colorsLight;
  return (
    <View className="relative mb-4 rounded-sm bg-surface p-4" id={data.id}>
      <Pressable onPress={() => router.push(`/workout/${data.id}`)}>
        <Text className="text-text-primary">{data.name} </Text>
        <Text className="text-text-primary">
          Duration: {data.duration || 'N/A'}
        </Text>
        <Text className="text-text-primary">
          Difficulty: {data.difficulty || 'N/A'}
        </Text>
        <Text className="text-text-primary">
          Category: {data.category || 'N/A'}
        </Text>
        <Text className="text-text-primary">
          Exercises: {data.exercises || 'N/A'}
        </Text>
      </Pressable>
      <Pressable
        className="absolute right-4 top-4"
        onPress={() => onDelete(data.id)}
      >
        <IconSymbol name="trash" size={20} color={palette.health} />
      </Pressable>
    </View>
  );
};

export default WorkoutCard;

import { Workout } from "@/data/workouts";
import { Text, View, Pressable } from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { router } from "expo-router";
import { colors } from "@/constants/tokens";

const WorkoutCard = ({
  data,
  onDelete,
}: {
  data: Workout;
  onDelete: (id: string) => void;
}) => {
  return (
    <View className="bg-surface relative p-4 rounded-sm mb-4" id={data.id}>
      <Pressable onPress={() => router.push(`/workout/${data.id}`)}>
        <Text className="text-white">{data.name} </Text>
        <Text className="text-white">Duration: {data.duration || "N/A"}</Text>
        <Text className="text-white">
          Difficulty: {data.difficulty || "N/A"}
        </Text>
        <Text className="text-white">Category: {data.category || "N/A"}</Text>
        <Text className="text-white">Exercises: {data.exercises || "N/A"}</Text>
      </Pressable>
      <Pressable
        className="absolute right-4 top-4"
        onPress={() => onDelete(data.id)}
      >
        <IconSymbol name="trash" size={20} color={colors.health} />
      </Pressable>
    </View>
  );
};

export default WorkoutCard;

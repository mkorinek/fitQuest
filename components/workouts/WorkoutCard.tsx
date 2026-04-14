import { Workout } from "@/data/workouts";
import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useTheme } from "@react-navigation/native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { router } from "expo-router";

const WorkoutCard = ({
  data,
  onDelete,
}: {
  data: Workout;
  onDelete: (id: string) => void;
}) => {
  const { colors } = useTheme();
  return (
    <ThemedView
      style={[styles.card, { backgroundColor: colors.card }]}
      id={data.id}
    >
      <Pressable onPress={() => router.push(`/workout/${data.id}`)}>
        <ThemedText style={styles.cardTitle}>{data.name} </ThemedText>
      </Pressable>
      <ThemedText style={styles.cardDetails}>
        Duration: {data.duration || "N/A"}
        
      </ThemedText>
      <ThemedText style={styles.cardDetails}>
        Difficulty: {data.difficulty || "N/A"}
      </ThemedText>
      <ThemedText style={styles.cardDetails}>
        Category: {data.category || "N/A"}
      </ThemedText>
      <ThemedText style={styles.cardDetails}>
        Exercises: {data.exercises || "N/A"}
      </ThemedText>
      <Pressable onPress={() => onDelete(data.id)} style={styles.trash}>
        <IconSymbol name="trash" size={20} color="red" />
      </Pressable>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardDetails: {
    fontSize: 14,
    color: "#555",
  },
  trash: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default WorkoutCard;

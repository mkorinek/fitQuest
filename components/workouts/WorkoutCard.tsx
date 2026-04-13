import { Workout } from "@/data/workouts";
import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";

const WorkoutCard = ({
  data,
  onDelete,
}: {
  data: Workout;
  onDelete: (id: string) => void;
}) => {
  return (
    <View style={styles.card} id={data.id}>
      <Text style={styles.cardTitle}>{data.name}</Text>
      <Text style={styles.cardDetails}>Duration: {data.duration || "N/A"}</Text>
      <Text style={styles.cardDetails}>
        Difficulty: {data.difficulty || "N/A"}
      </Text>
      <Text style={styles.cardDetails}>Category: {data.category || "N/A"}</Text>
      <Text style={styles.cardDetails}>
        Exercises: {data.exercises || "N/A"}
      </Text>
      <Pressable onPress={() => onDelete(data.id)} style={styles.trash}>
        <IconSymbol name="trash" size={20} color="red" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
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

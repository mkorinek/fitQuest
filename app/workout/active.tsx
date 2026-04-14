import { ThemedText } from "@/components/themed-text";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WorkoutActiveItem() {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
          Active Workout
        </ThemedText>
      </SafeAreaView>
    </>
  );
}

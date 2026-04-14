import { ThemedText } from "@/components/themed-text";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LevelUpModal() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
        <Stack.Screen options={{ title: "Level Up!" }} />
      <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>Level Up!</ThemedText>
    </SafeAreaView>
  );
}

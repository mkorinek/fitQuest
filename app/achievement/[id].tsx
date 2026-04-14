import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AchievementItem() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Achievement {id}</Text>
    </SafeAreaView>
  );
}

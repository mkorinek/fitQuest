import { Button } from "@react-navigation/elements";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";

export default function ProfileScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Profile Screen
      </ThemedText>
      <Button onPress={() => router.push("/settings")}>Settings</Button>
    </SafeAreaView>
  );
}

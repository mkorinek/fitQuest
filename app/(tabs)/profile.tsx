import { Button } from "@react-navigation/elements";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Profile Screen
      </Text>
      <Button onPress={() => router.push("/settings")}>Settings</Button>
    </SafeAreaView>
  );
}

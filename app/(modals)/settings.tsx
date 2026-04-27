import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function SettingsModal() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Settings</Text>
    </SafeAreaView>
  );
}

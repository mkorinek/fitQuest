import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsModal() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>Settings</ThemedText>
    </SafeAreaView>
  );
}

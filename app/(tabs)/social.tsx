import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";

export default function SocialScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
        Social Screen
      </ThemedText>
    </SafeAreaView>
  );
}

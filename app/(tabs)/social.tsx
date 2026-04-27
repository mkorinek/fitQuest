import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function SocialScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Social Screen
      </Text>
    </SafeAreaView>
  );
}

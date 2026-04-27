import { Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LevelUpModal() {
  return (
    <View className="bg-background p-8 flex-1">
      {/* hitSlop zvětšuje areu na kterou bude element reagovat beze změny vizuálu */}
      <Stack.Screen options={{ headerShown: false }} />
      <Text className="text-text-primary text-xl font-bold">Level 5 Warrior</Text>
      <View className="mt-sm h-3 rounded-full bg-surface">
        <View className="h-3 w-3/4 rounded-full bg-xp" />
      </View>
    </View>
  );
}

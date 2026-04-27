import { Text, View } from "react-native";
import { LvlProps } from "./LvlTile";

export default function Lvl({ level }: LvlProps) {
  return (
    <View className="items-center justify-center w-full">
      <Text className="text-white text-lg">Level</Text>
      <Text className="text-white text-7xl font-bold">{level}</Text>
    </View>
  );
}

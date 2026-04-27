import { View } from "react-native";
import StreakCounter from "./StreakCounter";
import LvlTile from "./LvlTile";
import QuestList from "../quest/QuestList";

export default function Dashboard() {
  return (
    <View className="flex-1 p-8 gap-4">
      <View className="bg-surface p-4 rounded-lg shadow-[0_1px_5px] shadow-mana/10">
        <StreakCounter streak={5} />
      </View>
      <LvlTile level={5} currentXP={100} nexLvlXP={200} />
      <QuestList />
    </View>
  );
}

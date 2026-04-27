import { FlatList, View } from "react-native";
import { QUESTS } from "../../data/quests";
import { QuestItem } from "./QuestItem";
import AppView from "../AppView";

export default function QuestList() {
  return (
    <AppView padding={false} className="flex-1 overflow-hidden">
      <FlatList
        data={QUESTS}
        renderItem={({ item }) => <QuestItem {...item} />}
        ItemSeparatorComponent={() => <View className="h-px bg-mana/40" />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </AppView>
  );
}

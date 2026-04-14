import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import { createContext } from "react";

export const WorkoutContext = createContext({ count: 0 });

export default function WorkoutLaout() {
  return (
    <>
      <Stack.Screen options={{ title: "Workouts" }} />
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="active"
          options={{
            headerShown: false,
            title: "Active",
            tabBarIcon: ({ color }) => (
              <Ionicons name="play" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="[id]"
          options={{
            title: "Page",
            tabBarIcon: ({ color }) => (
              <Ionicons name="document-text" size={24} color={color} />
            ),
          }}
        />
        {/* add more tabs here */}
      </Tabs>
    </>
  );
}

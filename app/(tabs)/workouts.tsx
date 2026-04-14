import React, { useState } from "react";
import { BasicButton } from "@/components/ui/BasicButton";
import WorkoutCard from "@/components/workouts/WorkoutCard";
import { WORKOUTS, Workout } from "@/data/workouts";
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@react-navigation/native";

export default function HomeScreen() {
  const [workouts, setWorkouts] = useState(WORKOUTS);
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState("");

  const { colors } = useTheme();

  const handleAddWorkout = (workoutName: string, workoutDuration: string) => {
    const newWorkout: Workout = {
      id: "workout_" + Date.now().toString(),
      name: workoutName,
      duration: workoutDuration,
    };
    setWorkouts([...workouts, newWorkout]);
    setWorkoutName("");
    setWorkoutDuration("");
  };

  const handleRemoveWorkout = (id: string) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16, backgroundColor: colors.background }} edges={["top"]}>
      <KeyboardAvoidingView
        style={{ height: "auto", paddingVertical: 20, marginBottom: 20, backgroundColor: colors.card, borderRadius: 10 }}
        behavior="padding"
      >
        <ThemedView style={{ gap: 10, margin: 10, backgroundColor: colors.card }}>
          <TextInput
            placeholder="Workout name"
            style={{ borderWidth: 1, padding: 8, borderRadius: 5, backgroundColor: colors.background, color: colors.text }}
            value={workoutName}
            onChangeText={setWorkoutName}
          />
          <TextInput
            placeholder="Duration (e.g. 30 mins)"
            style={{ borderWidth: 1, padding: 8, borderRadius: 5, backgroundColor: colors.background, color: colors.text }}
            value={workoutDuration}
            onChangeText={setWorkoutDuration}
          />
        </ThemedView>
        <BasicButton
          title="Add Workout"
          onPress={() => handleAddWorkout(workoutName, workoutDuration)}
        />
      </KeyboardAvoidingView>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkoutCard
            data={item}
            onDelete={() => handleRemoveWorkout(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}

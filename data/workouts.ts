export type Workout = {
  id: string;
  name: string;
  duration?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  category?: string;
  exercises?: number;
};

export const WORKOUTS: Workout[] = [
  {
    id: "1",
    name: "Morning HIIT Blast",
    duration: "25 mins",
    difficulty: "Intermediate",
    category: "Cardio",
    exercises: 8,
  },
  {
    id: "2",
    name: "Upper Body Strength",
    duration: "40 mins",
    difficulty: "Advanced",
    category: "Strength",
    exercises: 10,
  },
  {
    id: "3",
    name: "Yoga Flow",
    duration: "30 mins",
    difficulty: "Beginner",
    category: "Flexibility",
    exercises: 12,
  },
  {
    id: "4",
    name: "Core Crusher",
    duration: "20 mins",
    difficulty: "Intermediate",
    category: "Core",
    exercises: 6,
  },
  {
    id: "5",
    name: "Leg Day",
    duration: "45 mins",
    difficulty: "Advanced",
    category: "Strength",
    exercises: 9,
  },
  {
    id: "6",
    name: "Quick Stretch",
    duration: "10 mins",
    difficulty: "Beginner",
    category: "Flexibility",
    exercises: 5,
  },
  {
    id: "7",
    name: "Full Body Burn",
    duration: "35 mins",
    difficulty: "Intermediate",
    category: "Cardio",
    exercises: 11,
  },
  {
    id: "8",
    name: "Push-up Challenge",
    duration: "15 mins",
    difficulty: "Advanced",
    category: "Strength",
    exercises: 4,
  },
  {
    id: "9",
    name: "Beginner Cardio",
    duration: "20 mins",
    difficulty: "Beginner",
    category: "Cardio",
    exercises: 7,
  },
  {
    id: "10",
    name: "Pilates Basics",
    duration: "30 mins",
    difficulty: "Beginner",
    category: "Core",
    exercises: 8,
  },
];

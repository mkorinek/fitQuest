export type QuestStatus = "active" | "in_progress" | "completed" | "locked" | "failed";

export type Quest = {
  id: string;
  name: string;
  description: string;
  status: QuestStatus;
};

export const QUESTS: Quest[] = [
  {
    id: "1",
    name: "Morning Warrior",
    description: "Complete a workout before 9 AM.",
    status: "active",
  },
  {
    id: "2",
    name: "Iron Grip",
    description: "Finish 50 pull-ups in a single day.",
    status: "in_progress",
  },
  {
    id: "3",
    name: "Marathon Initiate",
    description: "Run a total of 10 km this week.",
    status: "in_progress",
  },
  {
    id: "4",
    name: "Zen Master",
    description: "Complete 3 yoga sessions in a row.",
    status: "completed",
  },
  {
    id: "5",
    name: "Core of Steel",
    description: "Hold a 2-minute plank without breaking.",
    status: "active",
  },
  {
    id: "6",
    name: "Night Owl",
    description: "Train 5 times after 8 PM.",
    status: "failed",
  },
  {
    id: "7",
    name: "Legendary Lifter",
    description: "Unlocks at level 10. Deadlift your bodyweight.",
    status: "locked",
  },
  {
    id: "8",
    name: "Streak Keeper",
    description: "Maintain a 7-day workout streak.",
    status: "in_progress",
  },
  {
    id: "9",
    name: "Flexibility Quest",
    description: "Touch your toes without bending the knees.",
    status: "completed",
  },
  {
    id: "10",
    name: "Boss Battle",
    description: "Unlocks at level 20. Complete the final challenge workout.",
    status: "locked",
  },
];

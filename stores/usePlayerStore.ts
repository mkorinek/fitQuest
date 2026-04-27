// stores/usePlayerStore.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface PlayerState {
  level: number;
  currentXP: number;
  xpToNextLevel: number;
  streak: number;
  streakFreezeAvailable: boolean;
  achievements: string[];

  // Actions
  addXP: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  unlockAchievement: (achievement: string) => void;
  resetLevel: () => void;
}

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set, get) => ({
      level: 1,
      currentXP: 0,
      xpToNextLevel: 100,
      streak: 0,
      streakFreezeAvailable: true,
      achievements: [],

      addXP: (amount) => {
        let { level, currentXP, xpToNextLevel } = get();
        let remaining = currentXP + amount;
        let levelsGained = 0;

        while (remaining >= xpToNextLevel) {
          remaining -= xpToNextLevel;
          level += 1;
          levelsGained += 1;
          xpToNextLevel = Math.floor(xpToNextLevel * 2);
        }

        set({ level, currentXP: remaining, xpToNextLevel });

        // Optionally return levelsGained so the caller can trigger the
        // level-up animation once (or N times) — Phase 6.
        return levelsGained;
      },

      incrementStreak: () => set((state) => ({ streak: state.streak + 1 })),
      resetStreak: () => set({ streak: 0 }),
      unlockAchievement: (id) =>
        set((state) => ({
          achievements: [...state.achievements, id],
        })),
      resetLevel: () => set({ level: 1, currentXP: 0, xpToNextLevel: 100 }),
    }),
    {
      name: 'player-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

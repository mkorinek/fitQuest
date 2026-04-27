/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { colors, borderRadius, spacing } from "./tokens";
// theme.ts
export const theme = {
  colors: {
    // RPG-themed color palette
    primary: colors.primary,
    secondary: colors.secondary,
    xp: colors.xp,
    health: colors.health,
    stamina: colors.stamina,
    mana: colors.mana,
    background: colors.background, // Dark background
    surface: colors.surface, // Card background
    text: colors.text, // Primary text
    textSecondary: colors.textSecondary,
  },
  spacing: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
  },
  borderRadius: {
    sm: borderRadius.sm,
    md: borderRadius.md,
    lg: borderRadius.lg,
    full: borderRadius.full,
  },
};

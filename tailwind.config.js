/* Tailwind scans the files listed in content to find which classes you       
  actually use. Empty array = no classes = nothing works. You also need
  NativeWind's preset, which teaches Tailwind about React Native's style model (no
   hover: on native, different color opacity handling, etc). */
/** @type {import('tailwindcss').Config} */
const { colors, spacing, borderRadius } = require("./constants/tokens");
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // RPG-themed color palette
        primary: colors.primary,
        secondary: colors.secondary,
        xp: colors.xp,
        health: colors.health,
        stamina: colors.stamina,
        mana: colors.mana,
        background: colors.background,
        surface: colors.surface,
        text: {
          primary: colors.text,
          secondary: colors.textSecondary
        }
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
    },
  },
  plugins: [],
}


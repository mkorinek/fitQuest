/** @type {import('tailwindcss').Config} */
const { spacing, borderRadius } = require("./constants/tokens");

const withVar = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: withVar("primary"),
        secondary: withVar("secondary"),
        xp: withVar("xp"),
        health: withVar("health"),
        stamina: withVar("stamina"),
        mana: withVar("mana"),
        background: withVar("background"),
        surface: withVar("surface"),
        text: {
          primary: withVar("text"),
          secondary: withVar("text-secondary"),
        },
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
};

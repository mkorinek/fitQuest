const tokens = {
  colors: {
    light: {
      primary: "#E85A2B",
      secondary: "#6D28D9",
      xp: "#B8860B",
      health: "#DC2626",
      stamina: "#15803D",
      mana: "#1D4ED8",
      background: "#F6F8FA",
      surface: "#FFFFFF",
      text: "#0F172A",
      textSecondary: "#475569",
    },
    dark: {
      primary: "#FF6B35",
      secondary: "#A78BFA",
      xp: "#FCD34D",
      health: "#F87171",
      stamina: "#4ADE80",
      mana: "#60A5FA",
      background: "#0D1117",
      surface: "#1A1F2A",
      text: "#F0F6FC",
      textSecondary: "#94A3B8",
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    full: 999,
  },
};

export default tokens;
export const { colors, spacing, borderRadius } = tokens;
export const colorsLight = tokens.colors.light;
export const colorsDark = tokens.colors.dark;

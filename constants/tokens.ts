const tokens = {
  colors: {
    // RPG-themed color palette
    primary: "#FF6B35", // Fiery orange (energy, action)
    secondary: "#7B2FBE", // Royal purple (achievements, rare)
    xp: "#FFD700", // Gold (XP, rewards)
    health: "#FF4444", // Red (health/HP)
    stamina: "#44CC44", // Green (stamina/endurance)
    mana: "#4488FF", // Blue (flexibility/yoga)
    background: "#0D1117", // Dark background
    surface: "#161B22", // Card background
    text: "#F0F6FC", // Primary text
    textSecondary: "#8B949E",
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
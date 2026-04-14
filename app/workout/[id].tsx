import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { WORKOUTS } from "@/data/workouts";
import { LinearGradient } from "expo-linear-gradient";

const ACCENT_BLUE = "#4A7DFF";
const ACCENT_PURPLE = "#8B5CF6";

const difficultyConfig = {
  Beginner: { color: "#34D399", icon: "leaf" as const },
  Intermediate: { color: "#FBBF24", icon: "flame" as const },
  Advanced: { color: "#F87171", icon: "flash" as const },
};

export default function WorkoutDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const dark = colorScheme === "dark";

  const workout = WORKOUTS.find((w) => w.id === id);

  const bg = dark ? "#0F1117" : "#F8F9FC";
  const cardBg = dark ? "#1A1D27" : "#FFFFFF";
  const textPrimary = dark ? "#F1F2F6" : "#1A1B2E";
  const textSecondary = dark ? "#8B8FA3" : "#6B7084";
  const borderColor = dark ? "#2A2D3A" : "#E8EAF0";

  if (!workout) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
        <View style={styles.centered}>
          <Ionicons name="alert-circle-outline" size={48} color={textSecondary} />
          <Text style={[styles.notFoundText, { color: textSecondary }]}>
            Workout not found
          </Text>
          <Pressable
            onPress={() => router.back()}
            style={[styles.backBtn, { borderColor }]}
          >
            <Text style={{ color: ACCENT_BLUE, fontWeight: "600" }}>
              Go Back
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const diff = workout.difficulty
    ? difficultyConfig[workout.difficulty]
    : null;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.dismiss()}
          style={[styles.headerBtn, { backgroundColor: cardBg, borderColor }]}
        >
          <Ionicons name="chevron-back" size={20} color={textPrimary} />
        </Pressable>
        <Pressable
          style={[styles.headerBtn, { backgroundColor: cardBg, borderColor }]}
        >
          <Ionicons name="heart-outline" size={20} color={ACCENT_PURPLE} />
        </Pressable>
      </View>

      {/* Hero gradient card */}
      <LinearGradient
        colors={[ACCENT_BLUE, ACCENT_PURPLE]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.heroCard}
      >
        <View style={styles.heroIconRow}>
          <View style={styles.heroIconBg}>
            <Ionicons name="barbell" size={28} color="#FFF" />
          </View>
        </View>
        <Text style={styles.heroTitle}>{workout.name}</Text>
        {diff && (
          <View style={styles.diffBadge}>
            <Ionicons name={diff.icon} size={14} color="#FFF" />
            <Text style={styles.diffText}>{workout.difficulty}</Text>
          </View>
        )}
      </LinearGradient>

      {/* Stats row */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor: cardBg, borderColor }]}>
          <Ionicons name="time-outline" size={22} color={ACCENT_BLUE} />
          <Text style={[styles.statValue, { color: textPrimary }]}>
            {workout.duration || "N/A"}
          </Text>
          <Text style={[styles.statLabel, { color: textSecondary }]}>
            Duration
          </Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: cardBg, borderColor }]}>
          <Ionicons name="fitness-outline" size={22} color={ACCENT_PURPLE} />
          <Text style={[styles.statValue, { color: textPrimary }]}>
            {workout.exercises || "N/A"}
          </Text>
          <Text style={[styles.statLabel, { color: textSecondary }]}>
            Exercises
          </Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: cardBg, borderColor }]}>
          <Ionicons name="grid-outline" size={22} color={ACCENT_BLUE} />
          <Text style={[styles.statValue, { color: textPrimary }]}>
            {workout.category || "N/A"}
          </Text>
          <Text style={[styles.statLabel, { color: textSecondary }]}>
            Category
          </Text>
        </View>
      </View>

      {/* Difficulty detail card */}
      {diff && (
        <View
          style={[styles.detailCard, { backgroundColor: cardBg, borderColor }]}
        >
          <Text style={[styles.detailCardTitle, { color: textPrimary }]}>
            Difficulty
          </Text>
          <View style={styles.diffBar}>
            <View style={styles.diffBarTrack}>
              <View
                style={[
                  styles.diffBarFill,
                  {
                    backgroundColor: diff.color,
                    width:
                      workout.difficulty === "Beginner"
                        ? "33%"
                        : workout.difficulty === "Intermediate"
                          ? "66%"
                          : "100%",
                  },
                ]}
              />
            </View>
            <Text style={[styles.diffDetailText, { color: diff.color }]}>
              {workout.difficulty}
            </Text>
          </View>
        </View>
      )}

      {/* Start button */}
      <View style={styles.bottomAction}>
        <Pressable style={({ pressed }) => [styles.startBtn, pressed && { opacity: 0.85 }]}>
          <LinearGradient
            colors={[ACCENT_BLUE, ACCENT_PURPLE]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.startBtnGradient}
          >
            <Ionicons name="play" size={20} color="#FFF" />
            <Text style={styles.startBtnText}>Start Workout</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  notFoundText: {
    fontSize: 16,
    marginTop: 8,
  },
  backBtn: {
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 24,
    paddingTop: 28,
    paddingBottom: 28,
  },
  heroIconRow: {
    marginBottom: 16,
  },
  heroIconBg: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FFF",
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  diffBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  diffText: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "600",
  },
  statsRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 10,
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    alignItems: "center",
    gap: 6,
  },
  statValue: {
    fontSize: 15,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 11,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  detailCard: {
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    padding: 18,
  },
  detailCardTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  diffBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  diffBarTrack: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(139,92,246,0.15)",
    overflow: "hidden",
  },
  diffBarFill: {
    height: "100%",
    borderRadius: 3,
  },
  diffDetailText: {
    fontSize: 13,
    fontWeight: "700",
  },
  bottomAction: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  startBtn: {
    borderRadius: 16,
    overflow: "hidden",
  },
  startBtnGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    gap: 10,
  },
  startBtnText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});

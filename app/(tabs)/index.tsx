import Dashboard from "@/components/dashboard/Dashboard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Dashboard />
    </SafeAreaView>
  );
}

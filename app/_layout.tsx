import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { useColorScheme } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <ThemeProvider value={useColorScheme() === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="(modals)"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="workout" options={{ presentation: "modal", headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", title: "Modal" }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </KeyboardProvider>
  );
}

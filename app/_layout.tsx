import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { useColorScheme } from "react-native";
import tokens from "@/constants/tokens";

export const unstable_settings = {
  anchor: "(tabs)",
};

const AppTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: tokens.colors.background,
    card: tokens.colors.surface,
    text: tokens.colors.text,
    primary: tokens.colors.primary,
    border: tokens.colors.surface,
  },
};

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <ThemeProvider value={AppTheme}>
        <Stack>
          <Stack.Screen
            name="(modals)"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="workout"
            options={{ presentation: "modal", headerShown: false }}
          />
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

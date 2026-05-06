import { LevelUpModal } from '@/components/modals/level-up';
import { colorsDark, colorsLight } from '@/constants/tokens';
import { QueryProvider } from '@/providers/QueryProvider';
import { usePlayerStore } from '@/stores/usePlayerStore';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React, { useEffect, useRef, useState } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import 'react-native-reanimated';
import '../global.css';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const palette = isDark ? colorsDark : colorsLight;

  const appTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    dark: isDark,
    colors: {
      ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
      background: palette.background,
      card: palette.surface,
      text: palette.text,
      primary: palette.primary,
      border: palette.surface,
    },
  };

  const player = usePlayerStore();
  const prevLevel = useRef(player.level);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (player.level > prevLevel.current) {
      setModalVisible(true);
    }
    prevLevel.current = player.level;
  }, [player.level]);

  return (
    <QueryProvider>
      <KeyboardProvider>
        <ThemeProvider value={appTheme}>
          <Stack>
            <Stack.Screen
              name="(modals)"
              options={{ presentation: 'modal', headerShown: false }}
            />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="workout"
              options={{ presentation: 'modal', headerShown: false }}
            />
            <Stack.Screen
              name="modal"
              options={{ presentation: 'modal', title: 'Modal' }}
            />
          </Stack>
          <StatusBar style="auto" />
          <LevelUpModal
            visible={modalVisible}
            newLevel={player.level}
            onClose={() => setModalVisible(false)}
          />
        </ThemeProvider>
      </KeyboardProvider>
    </QueryProvider>
  );
}

import { Button } from '@react-navigation/elements';
import { router } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text className="mb-5 text-2xl font-bold text-text-primary">
        Profile Screen
      </Text>

      <Button onPress={() => router.push('/settings')}>Settings</Button>
    </SafeAreaView>
  );
}

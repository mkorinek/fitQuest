import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SocialScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text className="text-2xl font-bold text-text-primary">
        Social Screen
      </Text>
    </SafeAreaView>
  );
}

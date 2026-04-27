import { BasicButton } from '@/components/ui/BasicButton';
import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsModal() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text className="text-2xl font-bold text-text-primary">Settings</Text>
      <View>
        <BasicButton
          onPress={toggleColorScheme}
          title={colorScheme === 'dark' ? 'Change to light' : 'Change to dark'}
        />
      </View>
    </SafeAreaView>
  );
}

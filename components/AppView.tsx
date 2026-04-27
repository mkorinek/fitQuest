import { View } from 'react-native';

export default function AppView({
  children,
  padding = true,
  className = '',
}: {
  children: React.ReactNode;
  padding?: boolean;
  className?: string;
}) {
  return (
    <View
      style={{ padding: padding ? 16 : 0 }}
      className={`rounded-lg bg-surface ${className}`}
    >
      {children}
    </View>
  );
}

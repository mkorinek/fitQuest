import { View } from "react-native";

export default function AppView({
  children,
  padding = true,
  className = "",
}: {
  children: React.ReactNode;
  padding?: boolean;
  className?: string;
}) {
  return (
    <View
      style={{ padding: padding ? 16 : 0 }}
      className={`bg-surface rounded-lg shadow-[0_1px_5px] shadow-mana/10 ${className}`}
    >
      {children}
    </View>
  );
}

import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";
export function BasicButton2({
  onPress,
  title,
}: PropsWithChildren & {
  title: string;
  onPress: () => void;
}) {
  const ButtonWidth = useSharedValue(0);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        pressed && { backgroundColor: "#e0e0e0" },
      ]}
    >
      <View
        onLayout={(e) => {
          ButtonWidth.value = e.nativeEvent.layout.width;
        }}
      >
        <Text>{title || "Button label"}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingBlock: 10,
    paddingInline: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 5,
    backgroundColor: "#2980b9",
  },
});

import { PropsWithChildren, use, useRef, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Pressable } from "react-native";
import Animated, {
    Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
export function BasicButton({
  onPress,
  title,
}: PropsWithChildren & {
  title: string;
  onPress: () => void;
}) {
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue(0);
  const ButtonWidth = useSharedValue(0);

  const handlePressIn = () => {
    scale.value = withTiming(0.95, { duration: 100, easing: Easing.inOut(Easing.ease) });
    backgroundColor.value = withTiming(1, { duration: 400, easing: Easing.inOut(Easing.ease) });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100, easing: Easing.inOut(Easing.ease) });
    backgroundColor.value = withTiming(0, { duration: 400, easing: Easing.inOut(Easing.ease) });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    width: backgroundColor.value * ButtonWidth.value,
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[styles.button, { transform: [{ scale }] }]}
        onLayout={(e) => {
          ButtonWidth.value = e.nativeEvent.layout.width;
        }}
      >
        <Animated.View style={[styles.overlay, animatedStyle]} />
        <Text>{title || "Button label"}</Text>
      </Animated.View>
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

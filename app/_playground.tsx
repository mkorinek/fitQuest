import { BasicButton } from "@/components/ui/BasicButton";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";

type sectionBData = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export default function HomeScreen() {
  const [pageHeight, setPageHeight] = useState(0);
  const [toggled, setToggled] = useState(false);
  const [title, setTitle] = useState("Klikniiii na mě");
  const [savedText, setSavedText] = useState("");
  const [sectionB, setSectionB] = useState<sectionBData>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const scrollRef = useRef<ScrollView>(null);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const handleBG = () => {
    setToggled(!toggled);
    Animated.timing(animatedValue, {
      toValue: toggled ? 0 : 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const handleTitleChange = () => {
    setTitle(savedText || "Home Screen");
    setSavedText("");
  };

  const handleSavedText = (text: string) => {
    setSavedText(text);
  };

  const bgColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#f0f0f0", "#a0a0a0"],
  });

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <KeyboardAwareScrollView
        onLayout={(e) => setPageHeight(e.nativeEvent.layout.height)}
        bottomOffset={50}
        ref={scrollRef}
      >
          <View
            onLayout={(e) => setSectionB(e.nativeEvent.layout)}
            style={[styles.view2, styles.view, { height: pageHeight }]}
          >
            <View className={"flex-1 items-center justify-center w-full bg-slate-900"}>
              <Text className="text-white text-xl">hello nativewind</Text>
              <BasicButton
                onPress={() => {
                  router.push("/workouts");
                }}
                title="Workouts"
              />
              <BasicButton
                onPress={() => {
                  router.push("/workout/123");
                }}
                title="Workout 123"
              />
              <BasicButton
                onPress={() => {
                  router.push("/level-up");
                }}
                title="Level up!"
              />
            </View>
          </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    width: "100%",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  view1: {
    backgroundColor: "#f0f0f0",
  },
  view2: {
    backgroundColor: "#e0e0e0",
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: "auto",
    height: "100%",
    resizeMode: "contain",
    padding: 10,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
});

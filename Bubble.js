import React, { useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence, withDelay } from "react-native-reanimated";
import { randomColor } from "./utils";

const { width, height } = Dimensions.get("window");

const Bubble = ({ size, delay }) => {
  const translateY = useSharedValue(-size);
  const opacity = useSharedValue(Math.random() * 0.5 + 0.5);
  const startX = Math.random() * width;
  const color = randomColor();

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withRepeat(withTiming(height + size, { duration: 5000 }), -1, false)
    );
    opacity.value = withRepeat(withSequence(withTiming(1, { duration: 1000 }), withTiming(0.5, { duration: 1000 })), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    left: startX,
    opacity: opacity.value,
    backgroundColor: color,
  }));

  return <Animated.View style={[styles.bubble, animatedStyle, { width: size, height: size, top: -size }]} />;
};

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
    borderRadius: 50,
  },
});

export default Bubble;

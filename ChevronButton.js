import React, { useState } from "react";
import { TouchableOpacity, Vibration, Platform } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

const ChevronButton = ({ onToggle }) => {
  const [open, setOpen] = useState(false);
  const rotation = useSharedValue(0);

  const triggerHapticFeedback = () => {
    if (Platform.OS === "ios") {
      Vibration.vibrate([0, 50, 50, 50]); // Mimics haptic feedback
    } else {
      Vibration.vibrate(100); // Strong vibration for Android
    }
  };

  const toggle = () => {
    triggerHapticFeedback(); // Vibrates when toggling
    setOpen((prev) => {
      const newOpen = !prev;
      rotation.value = withTiming(newOpen ? 90 : 0, { duration: 300 });
      onToggle(newOpen);
      return newOpen;
    });
  };

  const animatedChevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <TouchableOpacity onPress={toggle} style={{ padding: 5 }}>
      <Animated.View style={animatedChevronStyle}>
        <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? (
            <>
              <Path d="M6 6l12 12" />
              <Path d="M18 6L6 18" />
            </>
          ) : (
            <Path d="M9 18l6-6-6-6" />
          )}
        </Svg>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ChevronButton;

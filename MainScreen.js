import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Bubble from "./Bubble";
import ChevronButton from "./ChevronButton";
import LoginForm from "./LoginForm";

const MainScreen = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      {[...Array(10)].map((_, index) => (
        <Bubble key={index} size={20 + Math.random() * 40} delay={Math.random() * 3000} />
      ))}

      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Akash!</Text>
        <ChevronButton onToggle={setOpen} />
      </View>

      {open && <LoginForm />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDAB9",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
    color: "#333",
  },
});

export default MainScreen;

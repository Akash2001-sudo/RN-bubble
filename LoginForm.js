import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    alert(`Signed in as ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your email" 
        placeholderTextColor="#aaa"
        keyboardType="email-address" 
        value={email} 
        onChangeText={setEmail} 
      />
      
      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your password" 
        placeholderTextColor="#aaa"
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />

      <Pressable style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 25,
    backgroundColor: "white",
    borderRadius: 15,
    width: "85%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#F5F5F5",
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  signInText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default LoginForm;

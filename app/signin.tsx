//npx expo install @supabase/supabase-js

import React, { useEffect, useState } from "react";
import {supabase} from "../lib/supabase";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import {router} from "expo-router";
import { useFocusEffect } from "@react-navigation/native";


interface LoginProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const SignInForm: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const checkCredentials = () => {
  //   if (credentials) {
  //     // check if user exist
  //     const user = credentials.users.find(
  //       (cred) => cred.username === userName.trim()
  //     );
  //     if (!user) {
  //       Alert.alert("Error", "Username not found.");
  //       return;
  //     }

  const handleLogin = async () => {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }
    // Check if password matches
    if (!passwordRegex.test(password)) {
      Alert.alert("Error", "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }
    // Use Supabase to sign in
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password.trim(),
    });
    if (error) {
      Alert.alert("Error", error.message);
      return;
    } else {
      setIsLoggedIn(true);
      router.replace("/");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setEmail("");
      setPassword("");
    }, [])
  );

  console.log("🌀 Signin page rendered");
  return (
    <View style={styles.formStyle}>
      <View>
        <Text style={styles.title}>Sign In Form</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.labelStyles}>Email:</Text>
        <TextInput
          placeholder="Please enter Email"
          style={styles.inputFieldStyles}
          value={email}
          onChangeText={(text) => setEmail(text.trim())} // Trim whitespace
          autoCapitalize="none"
          keyboardType="email-address"
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.labelStyles}>Password:</Text>
        <TextInput
          placeholder="Please enter Password"
          style={styles.inputFieldStyles}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          autoCorrect={false}
        ></TextInput>
      </View>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={{ textAlign: "center" }}>Login</Text>
      </Pressable>
      <Pressable
        style={{ marginTop: 15 }}
        onPress={() => router.push("/signup")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    minWidth: 320,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 30,
    fontFamily: "serif",
  },
  inputFieldStyles: {
    maxWidth: 230,
    minWidth: 200,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 2,
    fontFamily: "serif",
    color: "white",
  },
  labelStyles: { textAlign: "left", width: 70, color: "white" },
  title: {
    fontSize: 24,
    fontFamily: "serif",
    fontWeight: "bold",
    marginBottom: 35,
    color: "white",
  },
  formStyle: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    maxHeight: 320,
    padding: 15,
    // backgroundColor:"blue"
  },
  button: {
    width: 300,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    fontFamily: "serif",
  },
});

const SignInPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <SignInForm setIsLoggedIn={setIsLoggedIn} />;
};

export default SignInPage;

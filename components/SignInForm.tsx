import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { router } from "expo-router";

interface SignInFormProps {
  setIsLoggedIn?: (isLoggedIn: boolean) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password.trim(),
    });

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    if (setIsLoggedIn) {
      setIsLoggedIn(true);
    }

    router.replace("/(tabs)");
  };

  return (
    <View style={styles.formStyle}>
      <Text style={styles.title}>Sign In Form</Text>

      <View style={styles.container}>
        <Text style={styles.labelStyles}>Email:</Text>
        <TextInput
          placeholder="Please enter Email"
          style={styles.inputFieldStyles}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          autoCapitalize="none"
          keyboardType="email-address"
        />
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
        />
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
    width: "100%",
    padding: 15,
    alignItems: "center",
  },
  button: {
    width: 300,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    fontFamily: "serif",
  },
});

export default SignInForm;
